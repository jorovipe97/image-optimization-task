import glob
from PIL import Image

vImageNames = glob.glob("*.png")
for imgName in vImageNames:
    imgNameNoExtension = imgName.replace(".png", "")
    img = Image.open(imgName).convert("RGBA")
    img.save(imgNameNoExtension + ".webp", "webp")
    print("Saved " + imgName + " as " + imgNameNoExtension + ".webp")