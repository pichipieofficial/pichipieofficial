import os
from PIL import Image
import numpy as np

def get_bounding_box(alpha, threshold=10):
    rows = np.any(alpha > threshold, axis=1)
    cols = np.any(alpha > threshold, axis=0)
    if not np.any(rows) or not np.any(cols):
        return None
    rmin, rmax = np.where(rows)[0][[0, -1]]
    cmin, cmax = np.where(cols)[0][[0, -1]]
    return (cmin, rmin, cmax + 1, rmax + 1)

def crop_transparent(img, threshold=10):
    data = np.array(img)
    alpha = data[:, :, 3]
    bbox = get_bounding_box(alpha, threshold)
    if bbox:
        return img.crop(bbox)
    return img

def extract_symbol(img, threshold=10):
    data = np.array(img)
    alpha = data[:, :, 3]
    
    cols = np.any(alpha > threshold, axis=0)
    col_indices = np.where(cols)[0]
    
    if len(col_indices) == 0:
        return img
        
    gaps = np.diff(col_indices)
    if len(gaps) > 0:
        max_gap_idx = np.argmax(gaps)
        max_gap = gaps[max_gap_idx]
        
        if max_gap > 50:
            split_x = col_indices[max_gap_idx] + max_gap // 2
            
            left_part = img.crop((0, 0, split_x, img.height))
            right_part = img.crop((split_x, 0, img.width, img.height))
            
            left_alpha = np.array(left_part)[:,:,3]
            right_alpha = np.array(right_part)[:,:,3]
            
            # Count pixels that are highly opaque
            left_pixels = np.sum(left_alpha > 50)
            right_pixels = np.sum(right_alpha > 50)
            
            if left_pixels > right_pixels:
                return crop_transparent(left_part, threshold)
            else:
                return crop_transparent(right_part, threshold)
                
    return crop_transparent(img, threshold)

def create_adaptive_icon(icon_img, out_dir):
    size = 1080
    safe_size = 720
    
    ratio = min(safe_size / icon_img.width, safe_size / icon_img.height)
    new_w = int(icon_img.width * ratio)
    new_h = int(icon_img.height * ratio)
    resized = icon_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    fg = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    fg.paste(resized, ((size - new_w) // 2, (size - new_h) // 2), resized)
    fg.save(os.path.join(out_dir, "ic_launcher_foreground.png"))
    
    bg_light = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    bg_light.save(os.path.join(out_dir, "ic_launcher_background_light.png"))
    
    bg_dark = Image.new("RGBA", (size, size), (18, 18, 18, 255))
    bg_dark.save(os.path.join(out_dir, "ic_launcher_background_dark.png"))

def process():
    src_dir = "p:/PichiPie Apk/Icon"
    out_dir = os.path.join(src_dir, "Optimized")
    os.makedirs(out_dir, exist_ok=True)
    
    threshold = 10
    
    print("Processing Main App Icon...")
    icon = Image.open(os.path.join(src_dir, "Icon.png")).convert("RGBA")
    symbol = extract_symbol(icon, threshold)
    
    size = max(symbol.width, symbol.height)
    square_icon = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    square_icon.paste(symbol, ((size - symbol.width) // 2, (size - symbol.height) // 2), symbol)
    square_icon.save(os.path.join(out_dir, "Optimized_App_Icon.png"))
    
    print("Generating Adaptive Icons...")
    create_adaptive_icon(symbol, out_dir)
    
    print("Processing Horizontal Logo...")
    h_logo = Image.open(os.path.join(src_dir, "Horizontal Logo.png")).convert("RGBA")
    h_logo_cropped = crop_transparent(h_logo, threshold)
    h_logo_cropped.save(os.path.join(out_dir, "Optimized_Horizontal_Logo.png"))
    
    print("Processing Vertical Logo...")
    v_logo = Image.open(os.path.join(src_dir, "vertical Logo.png")).convert("RGBA")
    v_logo_cropped = crop_transparent(v_logo, threshold)
    v_logo_cropped.save(os.path.join(out_dir, "Optimized_Vertical_Logo.png"))
    
    print("Done!")

if __name__ == "__main__":
    process()
