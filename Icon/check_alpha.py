from PIL import Image
import numpy as np

img = Image.open("p:/PichiPie Apk/Icon/Horizontal Logo.png")
data = np.array(img)
alpha = data[:, :, 3]

# Print min, max, and some percentiles of alpha
print("Min alpha:", np.min(alpha))
print("Max alpha:", np.max(alpha))
print("Alpha > 0 count:", np.sum(alpha > 0))
print("Alpha > 5 count:", np.sum(alpha > 5))
print("Alpha > 10 count:", np.sum(alpha > 10))
print("Alpha == 255 count:", np.sum(alpha == 255))
