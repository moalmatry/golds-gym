import React, { useState } from "react";
import { Box } from "@mui/system";
import HeroBanner from "../Components/HeroBanner";
import SearchExercises from "../Components/SearchExercise";
import Exercises from "../Components/Exercise";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  // console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
