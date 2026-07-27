from PIL import Image
import numpy as np

img = Image.open("p:/PichiPie Apk/Icon/Icon.png")
data = np.array(img)
alpha = data[:, :, 3]

# row projection (height)
row_proj = np.any(alpha > 0, axis=1)
# column projection (width)
col_proj = np.any(alpha > 0, axis=0)

row_indices = np.where(row_proj)[0]
col_indices = np.where(col_proj)[0]

print("Y non-zero range:", row_indices[0], "to", row_indices[-1])
print("X non-zero range:", col_indices[0], "to", col_indices[-1])

# find gaps in Y
y_diff = np.diff(row_indices)
y_gaps = np.where(y_diff > 1)[0]
for g in y_gaps:
    print(f"Gap in Y from {row_indices[g]} to {row_indices[g+1]}")

# find gaps in X
x_diff = np.diff(col_indices)
x_gaps = np.where(x_diff > 1)[0]
for g in x_gaps:
    print(f"Gap in X from {col_indices[g]} to {col_indices[g+1]}")
