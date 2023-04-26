import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "../Components/HorizontalScrollBar";
import Loader from "../Components/Loader";

const SimilarExercise = ({
  equipmentMuscleExercises,
  targetMuscleExercises,
}) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mt={10} mb={15}>
        {" "}
        Exercises That Target The Same Muscle Group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mt={10} mb={15}>
        {" "}
        Exercises That Use The Same Equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentMuscleExercises.length ? (
          <HorizontalScrollBar data={equipmentMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;
