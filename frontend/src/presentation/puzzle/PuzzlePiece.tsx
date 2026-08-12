import {
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";

import type { ImagePiece } from "./utils/splitImage";

type PuzzlePieceProps = {
  piece: ImagePiece;
  isOverlay?: boolean;
};

export default function PuzzlePiece({
  piece,
  isOverlay = false,
}: PuzzlePieceProps) {
  const {
    attributes,
    listeners,
    setNodeRef: setDraggableRef,
    transform,
    isDragging,
  } = useDraggable({
    id: piece.id,
  });

  const {
    setNodeRef: setDroppableRef,
    isOver,
  } = useDroppable({
    id: piece.id,
  });

  /*
   * The normal piece stays in its grid position.
   *
   * Only the actual dragged piece receives
   * a transform.
   */

  const dragStyle =
    transform && !isOverlay
      ? {
          transform: `translate3d(
            ${transform.x}px,
            ${transform.y}px,
            0
          )`,
        }
      : undefined;

  /*
   * The overlay is slightly larger and elevated
   * while being dragged.
   */

  if (isOverlay) {
    return (
      <div
        className="
          aspect-square
          w-40
          overflow-hidden
          rounded-2xl
          border-2
          border-[#d69a8c]
          bg-white
          shadow-2xl
          md:w-44
        "
      >
        <img
          src={piece.image}
          alt={`Puzzle Piece ${
            piece.id + 1
          }`}
          draggable={false}
          className="
            h-full
            w-full
            pointer-events-none
            select-none
            object-cover
          "
        />
      </div>
    );
  }

  return (
    <div
      ref={setDroppableRef}
      className={`
        relative
        aspect-square
        w-36
        rounded-2xl
        transition
        duration-150
        md:w-40

        ${
          isOver
            ? "ring-4 ring-[#d69a8c]/40"
            : ""
        }
      `}
    >
      <div
        ref={setDraggableRef}
        style={dragStyle}
        {...attributes}
        {...listeners}
        className={`
          h-full
          w-full
          overflow-hidden
          rounded-2xl
          border-2
          border-[#d9d0c5]
          bg-white
          shadow-md
          select-none
          touch-none
          cursor-grab
          transition-shadow

          ${
            isDragging
              ? `
                cursor-grabbing
                opacity-30
              `
              : `
                hover:shadow-lg
              `
          }
        `}
      >
        <img
          src={piece.image}
          alt={`Puzzle Piece ${
            piece.id + 1
          }`}
          draggable={false}
          className="
            h-full
            w-full
            pointer-events-none
            select-none
            object-cover
          "
        />
      </div>
    </div>
  );
}