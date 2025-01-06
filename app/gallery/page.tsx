import Image from "next/image";
import fs from "fs";
import path from "path";

// Function to get all image files from a directory
function getImagesFromDirectory(directoryPath: string): string[] {
  const fullPath = path.join(process.cwd(), 'public', directoryPath);
  
  try {
    const files = fs.readdirSync(fullPath);
    
    // Filter for image files and map to their paths
    // Exclude the specific PNG file
    return files
      .filter(file => 
        ['.jpg', '.jpeg', '.png', '.webp', '.gif'].some(ext => 
          file.toLowerCase().endsWith(ext)
        ) && 
        file !== 'white-circle-fade-png-corner-fade-to-black-11562858796v6pby1qw3f.png'
      )
      .map(file => `/${directoryPath}/${file}`);
  } catch (error) {
    console.error(`Error reading directory ${directoryPath}:`, error);
    return [];
  }
}

// Function to get images from subdirectories
function getImagesFromSubdirectories(baseDirectory: string): string[] {
  const fullPath = path.join(process.cwd(), 'public', baseDirectory);
  let allImages: string[] = [];

  try {
    const subdirectories = fs.readdirSync(fullPath);
    
    subdirectories.forEach(subdir => {
      const subdirPath = path.join(fullPath, subdir);
      
      // Check if it's a directory
      if (fs.statSync(subdirPath).isDirectory()) {
        const subdirImages = fs.readdirSync(subdirPath)
          .filter(file => 
            ['.jpg', '.jpeg', '.png', '.webp', '.gif'].some(ext => 
              file.toLowerCase().endsWith(ext)
            ) && 
            file !== 'white-circle-fade-png-corner-fade-to-black-11562858796v6pby1qw3f.png'
          )
          .map(file => `/${baseDirectory}/${subdir}/${file}`);
        
        allImages = [...allImages, ...subdirImages];
      }
    });

    return allImages;
  } catch (error) {
    console.error(`Error reading base directory ${baseDirectory}:`, error);
    return [];
  }
}

// Function to generate random aspect ratios and heights
function generateImageVariants(images: string[]) {
  return images.map(image => {
    // Randomly generate aspect ratios and heights
    const aspectRatioVariants = [
      { aspectRatio: 1, heightClass: 'h-64' },   // Square
      { aspectRatio: 2/3, heightClass: 'h-80' }, // Portrait
      { aspectRatio: 3/2, heightClass: 'h-48' }, // Landscape
      { aspectRatio: 4/3, heightClass: 'h-72' }  // Standard
    ];

    const variant = aspectRatioVariants[Math.floor(Math.random() * aspectRatioVariants.length)];

    return {
      src: image,
      aspectRatio: variant.aspectRatio,
      heightClass: variant.heightClass
    };
  });
}

export default function GalleryPage() {
  // Combine images from gallery and services directories
  const galleryImages = getImagesFromDirectory('gallery');
  const serviceImages = getImagesFromSubdirectories('services');
  const allImages = [...galleryImages, ...serviceImages];

  // Generate image variants with random sizing
  const imageVariants = generateImageVariants(allImages);

  return (
    <div className="min-h-screen bg-transparent pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 bg-white/70 backdrop-blur-md rounded-xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey through our most memorable design projects and creative solutions
          </p>
        </div>

        {/* Pinterest-like Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {imageVariants.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg group 
                           w-full mb-4`}
              style={{ 
                aspectRatio: image.aspectRatio,
                height: 'auto'
              }}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
