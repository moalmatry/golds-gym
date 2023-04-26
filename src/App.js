import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Footer from "./Components/Footer";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <Box width="400" sx={{ width: { xl: "1488px" } }} ml={5} mr={5}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
