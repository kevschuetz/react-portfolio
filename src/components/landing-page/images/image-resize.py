from PIL import Image

def get_pixel_color(image_path, x, y):
    # Open the image
    image = Image.open(image_path)
    
    # Get the RGB value of the pixel at the specified coordinates
    rgb_value = image.convert('RGB').getpixel((x, y))
    
    return rgb_value

def add_border(input_image_path, output_image_path, border_size, border_color):
    # Open the image
    original_image = Image.open(input_image_path)
    
    # Get the dimensions of the original image
    width, height = original_image.size
    
    # Calculate new dimensions with border
    new_width = width + 2 * border_size
    new_height = height + 2 * border_size
    
    # Create a new image with the border color background
    new_image = Image.new("RGB", (new_width, new_height), border_color)
    
    # Paste the original image onto the new image
    new_image.paste(original_image, (border_size, border_size))
    
    # Save the new image
    new_image.save(output_image_path)


# Usage:
input_image_path = 'designer2.jpg'
output_image_path = 'designer2-large.jpg'
border_size = 120  # Adjust border size to your liking

# Get the color of the top-left pixel
border_color = get_pixel_color(input_image_path, 0, 0)

# Convert the RGB tuple to a string
border_color_str = f'rgb{border_color}'

# Add border
add_border(input_image_path, output_image_path, border_size, border_color_str)

