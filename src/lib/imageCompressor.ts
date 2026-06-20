import imageCompression from "browser-image-compression";

export async function compressImage(
  file: File,
  maxWidthOrHeight = 1200,
  maxSizeMB = 1
): Promise<File> {
  if (!file.type.startsWith("image/") || file.type === "image/gif") {
    return file;
  }

  const options = {
    maxSizeMB,
    maxWidthOrHeight,
    useWebWorker: true,
  };

  try {
    const compressedBlob = await imageCompression(file, options);
    const originalName = file.name;
    const lastDotIndex = originalName.lastIndexOf(".");
    const nameWithoutExtension = lastDotIndex !== -1 ? originalName.substring(0, lastDotIndex) : originalName;
    const compressedFileName = `${nameWithoutExtension}_compressed.jpg`;

    return new File([compressedBlob], compressedFileName, {
      type: "image/jpeg",
      lastModified: Date.now(),
    });
  } catch (error) {
    console.error("Compresión fallida en cliente, usando archivo original:", error);
    return file;
  }
}
