import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "../presentation/pages/HomePage";
import CreateMemoryPage from "../presentation/pages/CreateGiftPage";
import AddMemoriesPage from "../presentation/pages/AddMemoriesPage";
import ChoosePuzzlePage from "../presentation/pages/ChoosePuzzlePage";
import PreviewPage from "../presentation/pages/PreviewPage";
import GiftViewerPage from "../presentation/pages/GiftViewerPage";
import JourneyPage from "../presentation/pages/JourneyPage";
import PuzzlePage from "../presentation/pages/PuzzlePage";
import JigsawBoard from "../presentation/puzzle/JigsawBoard";
import MemoryPage from "../presentation/pages/MemoryPage";
import MemoryGalleryPage from "../presentation/pages/MemoryGalleryPage";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}

        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Gift creation */}

        <Route
          path="/create"
          element={<CreateMemoryPage />}
        />

        <Route
          path="/memories"
          element={<AddMemoriesPage />}
        />

        <Route
          path="/puzzle"
          element={<ChoosePuzzlePage />}
        />

        <Route
          path="/preview"
          element={<PreviewPage />}
        />

        {/* Recipient experience */}

        <Route
          path="/gift"
          element={<GiftViewerPage />}
        />

        <Route
          path="/journey"
          element={<JourneyPage />}
        />

        {/* Individual puzzle */}

        <Route
          path="/puzzle/:memoryId"
          element={<PuzzlePage />}
        />

        {/* Existing jigsaw route */}

        <Route
          path="/jigsaw"
          element={<JigsawBoard />}
        />

        <Route
          path="/memory/:memoryId"
          element={<MemoryPage />}
        />

        <Route
          path="/gallery"
          element={<MemoryGalleryPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}