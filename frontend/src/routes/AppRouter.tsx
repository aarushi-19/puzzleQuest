import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../presentation/pages/HomePage";
import CreateMemoryPage from "../presentation/pages/CreateMemoryPage";
import AddMemoriesPage from "../presentation/pages/AddMemoriesPage";
import ChoosePuzzlePage from "../presentation/pages/ChoosePuzzlePage";
import PreviewPage from "../presentation/pages/PreviewPage";
import GiftViewerPage from "../presentation/pages/GiftViewerPage";
import JourneyPage from "../presentation/pages/JourneyPage";
import JigsawBoard from "../presentation/puzzle/JigsawBoard";



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateMemoryPage />} />
        <Route path="/memories" element={<AddMemoriesPage />} />
        <Route path="/puzzle" element={<ChoosePuzzlePage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/gift" element={<GiftViewerPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/jigsaw" element={<JigsawBoard />} />
        
      </Routes>
    </BrowserRouter>
  );
}