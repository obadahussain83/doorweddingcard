from pathlib import Path
from PIL import Image, ImageFilter


SRC = Path("assets/garden-open-generated.png")
OUT = Path("assets")


SPRITES = [
    ("dove-photo-1.png", (605, 82, 858, 468)),
    ("dove-photo-2.png", (120, 420, 365, 670)),
    ("dove-photo-3.png", (392, 418, 570, 602)),
    ("dove-photo-4.png", (210, 640, 468, 835)),
    ("dove-photo-5.png", (498, 704, 704, 925)),
    ("dove-photo-6.png", (333, 842, 510, 1005)),
]


def make_alpha(crop):
    rgba = crop.convert("RGBA")
    pixels = rgba.load()
    w, h = rgba.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            mx = max(r, g, b)
            mn = min(r, g, b)
            saturation = mx - mn
            avg = (r + g + b) / 3
            whiteness = mx * 0.78 + (255 - saturation) * 0.22
            white_feather = whiteness > 198 and avg > 150 and saturation < 105
            soft_shadow = avg > 132 and saturation < 56 and r > 112 and g > 104 and b > 92
            alpha = 255 if white_feather else (160 if soft_shadow else 0)

            edge_fade = min(x, y, w - 1 - x, h - 1 - y)
            if edge_fade < 10:
                alpha = min(alpha, int(255 * edge_fade / 10))

            pixels[x, y] = (r, g, b, alpha)

    alpha = rgba.getchannel("A").filter(ImageFilter.MedianFilter(3)).filter(ImageFilter.GaussianBlur(0.55))
    rgba.putalpha(alpha)
    return rgba


def main():
    im = Image.open(SRC)
    for name, box in SPRITES:
        sprite = make_alpha(im.crop(box))
        sprite.save(OUT / name)


if __name__ == "__main__":
    main()
