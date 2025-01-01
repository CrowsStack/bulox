from PIL import Image, ImageDraw, ImageFont
import random
import os

def create_image(filename, width, height, text, category):
    # Create a new image with a category-specific background
    image = Image.new('RGB', (width, height), color='black')
    draw = ImageDraw.Draw(image)

    if category == "Nature":
        # Create a nature-like gradient (green and blue tones)
        for y in range(height):
            g = int(50 + 150 * (y / height))
            b = int(100 + 100 * (1 - y / height))
            draw.line([(0, y), (width, y)], fill=(20, g, b))
        
        # Add tree-like shapes
        for _ in range(10):
            x1 = random.randint(0, width)
            y1 = random.randint(height//2, height)
            x2 = x1 + random.randint(20, 50)
            y2 = height
            draw.polygon([(x1, y1), (x2, y2), (x1-20, y2)], fill=(0, 80, 0))

    elif category == "Architecture":
        # Create an architecture-like pattern (geometric shapes)
        for y in range(height):
            shade = int(150 + 100 * (y / height))
            draw.line([(0, y), (width, y)], fill=(shade, shade, shade))
        
        # Add building-like shapes
        for _ in range(5):
            x1 = random.randint(0, width-100)
            y1 = random.randint(0, height//2)
            w = random.randint(80, 150)
            h = random.randint(100, height-y1)
            draw.rectangle([x1, y1, x1+w, y1+h], fill=(100, 100, 100), outline=(200, 200, 200))
            
            # Add windows
            for i in range(3):
                for j in range(4):
                    wx = x1 + 20 + i*25
                    wy = y1 + 20 + j*30
                    draw.rectangle([wx, wy, wx+15, wy+20], fill=(220, 220, 150))

    else:  # Portrait
        # Create a portrait-friendly gradient background
        for y in range(height):
            shade = int(100 + 100 * (y / height))
            draw.line([(0, y), (width, y)], fill=(shade, shade, shade+20))
        
        # Add a simple figure outline
        center_x = width // 2
        head_y = height // 3
        draw.ellipse([center_x-30, head_y-30, center_x+30, head_y+30], fill=(70, 70, 70))
        draw.polygon([
            (center_x, head_y+30),
            (center_x-50, height-50),
            (center_x+50, height-50)
        ], fill=(70, 70, 70))

    # Add text
    try:
        font = ImageFont.truetype("arial.ttf", 40)
    except IOError:
        font = ImageFont.load_default()

    # Use getbbox to get text dimensions
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    draw.text(
        ((width-text_width)/2, height-50), 
        text, 
        font=font, 
        fill=(255,255,255)
    )

    # Ensure directory exists
    os.makedirs(os.path.dirname(filename), exist_ok=True)

    # Save the image
    image.save(filename)

# Define image configurations
image_configs = [
    {"filename": "nature1.jpg", "width": 800, "height": 600, "text": "Forest Path", "category": "Nature"},
    {"filename": "architecture1.jpg", "width": 600, "height": 800, "text": "Modern Building", "category": "Architecture"},
    {"filename": "portrait1.jpg", "width": 600, "height": 800, "text": "Professional", "category": "Portrait"},
    {"filename": "nature2.jpg", "width": 1600, "height": 900, "text": "Mountain Lake", "category": "Nature"},
    {"filename": "architecture2.jpg", "width": 600, "height": 800, "text": "Cathedral", "category": "Architecture"},
    {"filename": "portrait2.jpg", "width": 600, "height": 800, "text": "Artistic", "category": "Portrait"},
    {"filename": "nature3.jpg", "width": 800, "height": 600, "text": "Autumn", "category": "Nature"},
    {"filename": "architecture3.jpg", "width": 1600, "height": 900, "text": "Skyline", "category": "Architecture"},
    {"filename": "portrait3.jpg", "width": 600, "height": 800, "text": "Candid", "category": "Portrait"}
]

# Generate images
base_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'gallery')
for config in image_configs:
    create_image(
        os.path.join(base_path, config['filename']), 
        config['width'], 
        config['height'], 
        config['text'],
        config['category']
    )

print("Gallery images generated successfully!")
