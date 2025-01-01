from PIL import Image, ImageDraw, ImageFont
import random
import os

def create_landscape_image(filename, width, height, text):
    # Create a new image with a gradient background
    image = Image.new('RGB', (width, height), color='black')
    draw = ImageDraw.Draw(image)

    # Create a gradient
    for y in range(height):
        r = int(50 + 205 * (y / height))
        g = int(50 + 150 * (y / height))
        b = int(50 + 100 * (y / height))
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
    
    draw.text(
        ((width-text_width)/2, (height-text_height)/2), 
        text, 
        font=font, 
        fill=(255,255,255)
    )

    # Ensure directory exists
    os.makedirs(os.path.dirname(filename), exist_ok=True)

    # Save the image
    image.save(filename)

def create_team_image(filename, width, height, name):
    # Create a portrait-style image with a gradient
    image = Image.new('RGB', (width, height), color='black')
    draw = ImageDraw.Draw(image)

    # Create a vertical gradient
    for x in range(width):
        r = int(50 + 205 * (x / width))
        g = int(50 + 150 * (x / width))
        b = int(50 + 100 * (x / width))
        draw.line([(x, 0), (x, height)], fill=(r, g, b))

    # Add some abstract shapes
    for _ in range(10):
        x1 = random.randint(0, width)
        y1 = random.randint(0, height)
        x2 = x1 + random.randint(50, 200)
        y2 = y1 + random.randint(50, 200)
        shade = random.randint(50, 200)
        draw.ellipse([x1, y1, x2, y2], fill=(shade, shade, shade), outline=None)

    # Add name
    try:
        font = ImageFont.truetype("arial.ttf", 40)
    except IOError:
        font = ImageFont.load_default()

    # Use getbbox to get text dimensions
    bbox = draw.textbbox((0, 0), name, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    draw.text(
        ((width-text_width)/2, (height-text_height)/2), 
        name, 
        font=font, 
        fill=(255,255,255)
    )

    # Ensure directory exists
    os.makedirs(os.path.dirname(filename), exist_ok=True)

    # Save the image
    image.save(filename)

# Generate placeholder images
base_path = os.path.join(os.path.dirname(__file__), '..')
create_landscape_image(os.path.join(base_path, 'public', 'about-hero.jpg'), 1920, 1080, "Landscape Design")
create_landscape_image(os.path.join(base_path, 'public', 'studio-story.jpg'), 1200, 800, "Our Studio")

# Generate team member images
team_members = ["Emily Rodriguez", "Michael Chen", "Sarah Thompson"]
for member in team_members:
    create_team_image(
        os.path.join(base_path, 'public', 'team', f"{member.lower().replace(' ', '_')}.jpg"), 
        800, 
        800, 
        member
    )

print("About page images generated successfully!")
