from PIL import Image, ImageDraw, ImageFont
import random

def create_landscape_placeholder(filename, width, height, text):
    # Create a new image with a gradient background
    image = Image.new('RGB', (width, height), color='black')
    draw = ImageDraw.Draw(image)

    # Create a gradient
    for y in range(height):
        r = int(255 * (1 - y / height))
        g = int(200 * (1 - y / height))
        b = int(100 * (1 - y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Add some landscape-like elements
    for _ in range(20):
        x1 = random.randint(0, width)
        y1 = random.randint(height//2, height)
        x2 = x1 + random.randint(10, 100)
        y2 = height
        shade = random.randint(50, 150)
        draw.rectangle([x1, y1, x2, y2], fill=(shade, shade, shade), outline=None)

    # Add text
    try:
        font = ImageFont.truetype("arial.ttf", 40)
    except IOError:
        font = ImageFont.load_default()

    # Use getbbox to get text dimensions
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    draw.text(((width-text_width)/2, (height-text_height)/2), text, font=font, fill=(255,255,255))

    # Save the image
    image.save(filename)

# Generate 9 placeholder images
placeholders = [
    ("landscape1.jpg", 800, 600, "Modern Garden"),
    ("landscape2.jpg", 600, 800, "Backyard"),
    ("landscape3.jpg", 1000, 600, "Water Feature"),
    ("landscape4.jpg", 800, 500, "Sustainable Design"),
    ("landscape5.jpg", 700, 900, "Urban Garden"),
    ("landscape6.jpg", 900, 600, "Zen Space"),
    ("landscape7.jpg", 800, 700, "Mediterranean"),
    ("landscape8.jpg", 1000, 700, "Tropical Landscape"),
    ("landscape9.jpg", 600, 800, "Woodland Garden")
]

for filename, width, height, text in placeholders:
    create_landscape_placeholder(f"public/gallery/{filename}", width, height, text)

print("Placeholder images generated successfully!")
