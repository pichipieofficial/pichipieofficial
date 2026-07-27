from PIL import Image
import os

out_dir = "p:/PichiPie Apk/Icon/Optimized"
for f in os.listdir(out_dir):
    if f.endswith('.png'):
        img = Image.open(os.path.join(out_dir, f))
        print(f"{f}: {img.size}")
