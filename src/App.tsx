// import { useViewportSize } from "@mantine/hooks";
import "./App.css";
import EvolutionOfJs from "./components/EvolutionOfJs";
import Site from "./components/Site";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const {width} = useViewportSize()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Site />} />
          <Route path="/blogs/:blogname" element={<EvolutionOfJs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
