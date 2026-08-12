import { useEffect, useMemo, useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import type {
  DragEndEvent,
  DragStartEvent,
} from "@dnd-kit/core";

import PuzzleGrid from "./PuzzleGrid";
import PuzzlePiece from "./PuzzlePiece";

import {
  splitImage,
  type ImagePiece,
} from "./utils/splitImage";

type PuzzleBoardProps = {
  imageUrl: string;
  size?: number;
  onSolved?: () => void;
};

export default function PuzzleBoard({
  imageUrl,
  size = 3,
  onSolved,
}: PuzzleBoardProps) {
  const [pieces, setPieces] = useState<ImagePiece[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] =
    useState<number | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  /*
   * Load the image and create puzzle pieces.
   */

  useEffect(() => {
    let cancelled = false;

    async function loadPuzzle() {
      setLoading(true);
      setPieces([]);
      setActiveId(null);

      try {
        const imagePieces = await splitImage(
          imageUrl,
          size
        );

        if (cancelled) {
          return;
        }

        /*
         * Shuffle the pieces.
         */

        const shuffled = [...imagePieces].sort(
          () => Math.random() - 0.5
        );

        const updated = shuffled.map(
          (piece, index) => ({
            ...piece,
            currentIndex: index,
          })
        );

        setPieces(updated);
      } catch (error) {
        console.error(
          "Failed to load puzzle:",
          error
        );

        if (!cancelled) {
          setPieces([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPuzzle();

    return () => {
      cancelled = true;
    };
  }, [imageUrl, size]);

  /*
   * Arrange pieces according to their
   * current board positions.
   */

  const orderedPieces = useMemo(() => {
    return [...pieces].sort(
      (a, b) =>
        a.currentIndex - b.currentIndex
    );
  }, [pieces]);

  /*
   * Find the currently dragged piece.
   */

  const activePiece = useMemo(() => {
    if (activeId === null) {
      return null;
    }

    return (
      pieces.find(
        (piece) => piece.id === activeId
      ) ?? null
    );
  }, [pieces, activeId]);

  /*
   * Start dragging.
   */

  function handleDragStart(
    event: DragStartEvent
  ) {
    setActiveId(Number(event.active.id));
  }

  /*
   * Finish dragging and swap the two pieces.
   */

  function handleDragEnd(
    event: DragEndEvent
  ) {
    const { active, over } = event;

    setActiveId(null);

    if (!over) {
      return;
    }

    const activePieceId =
      Number(active.id);

    const overPieceId =
      Number(over.id);

    if (
      activePieceId === overPieceId
    ) {
      return;
    }

    setPieces((previous) => {
      const next = previous.map(
        (piece) => ({
          ...piece,
        })
      );

      const draggedPiece =
        next.find(
          (piece) =>
            piece.id ===
            activePieceId
        );

      const targetPiece =
        next.find(
          (piece) =>
            piece.id ===
            overPieceId
        );

      if (
        !draggedPiece ||
        !targetPiece
      ) {
        return previous;
      }

      /*
       * Swap their board positions.
       */

      const draggedPosition =
        draggedPiece.currentIndex;

      draggedPiece.currentIndex =
        targetPiece.currentIndex;

      targetPiece.currentIndex =
        draggedPosition;

      return next;
    });
  }

  /*
   * Check if the puzzle is solved.
   */

  const solved = useMemo(() => {
    if (pieces.length === 0) {
      return false;
    }

    return pieces.every(
      (piece) =>
        piece.currentIndex ===
        piece.correctIndex
    );
  }, [pieces]);

  /*
   * Loading.
   */

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-5xl">
          🧩
        </div>

        <p className="mt-5 text-lg text-[#6d6257]">
          Preparing your puzzle...
        </p>
      </div>
    );
  }

  /*
   * Error.
   */

  if (pieces.length === 0) {
    return (
      <div
        className="
          rounded-3xl
          bg-white
          p-10
          text-center
          shadow-lg
        "
      >
        <p className="text-lg text-[#6d6257]">
          We couldn't load this puzzle.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">

      {/* Puzzle */}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <PuzzleGrid
          pieces={orderedPieces}
          size={size}
        />

        <DragOverlay>
          {activePiece ? (
            <PuzzlePiece
              piece={activePiece}
              isOverlay
            />
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* Completion */}

      {solved && (
        <div
          className="
            mt-10
            w-full
            max-w-xl
            rounded-3xl
            border
            border-[#e6ddd1]
            bg-white
            p-8
            text-center
            shadow-lg
          "
        >
          <div className="text-5xl">
            🎉
          </div>

          <h2
            className="
              mt-4
              text-2xl
              font-semibold
              text-[#4b3f34]
            "
          >
            You solved it!
          </h2>

          <p
            className="
              mt-2
              text-[#6d6257]
            "
          >
            Your memory is ready to be revealed.
          </p>

          <button
            type="button"
            onClick={() => {
              onSolved?.();
            }}
            className="
              mt-7
              rounded-2xl
              bg-[#d69a8c]
              px-12
              py-4
              text-lg
              font-semibold
              text-white
              shadow-lg
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#c78879]
              hover:shadow-xl
            "
          >
            Complete ✨
          </button>
        </div>
      )}

    </div>
  );
}