export interface ImagePiece {
  id: number;
  image: string;
  correctIndex: number;
  currentIndex: number;
}

export async function splitImage(
  imageUrl: string,
  size: number
): Promise<ImagePiece[]> {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.crossOrigin = "anonymous";

    image.onload = () => {
      const pieces: ImagePiece[] = [];

      const pieceWidth = image.width / size;
      const pieceHeight = image.height / size;

      let id = 0;

      for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          if (!ctx) {
            reject(new Error("Could not create canvas."));
            return;
          }

          canvas.width = pieceWidth;
          canvas.height = pieceHeight;

          ctx.drawImage(
            image,
            col * pieceWidth,
            row * pieceHeight,
            pieceWidth,
            pieceHeight,
            0,
            0,
            pieceWidth,
            pieceHeight
          );

          pieces.push({
            id,
            image: canvas.toDataURL("image/png"),
            correctIndex: id,
            currentIndex: id,
          });

          id++;
        }
      }

      resolve(pieces);
    };

    image.onerror = () => {
      reject(new Error("Failed to load image."));
    };

    image.src = imageUrl;
  });
}