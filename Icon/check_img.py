from PIL import Image
import numpy as np

for file in ["Horizontal Logo.png", "Icon.png", "vertical Logo.png"]:
    img = Image.open(f"p:/PichiPie Apk/Icon/{file}")
    img = img.convert("RGBA")
    data = np.array(img)
    print(f"{file}:")
    print(f"Shape: {data.shape}")
    has_transparency = np.any(data[:, :, 3] < 255)
    print(f"Has transparency: {has_transparency}")
    transparent_pixels = np.sum(data[:, :, 3] == 0)
    print(f"Transparent pixels: {transparent_pixels}")
    print(f"Top-left pixel color: {data[0, 0]}")
    print("---")
