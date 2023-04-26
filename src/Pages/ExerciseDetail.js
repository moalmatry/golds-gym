import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOption, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../Components/Detail";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercise from "../Components/SimilarExercise";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentMuscleExercises, setEquipmentMuscleExercises] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOption
      );
      setExerciseDetail(exerciseDetailData);
      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetail.target}`,
        exerciseOption
      );
      setTargetMuscleExercises(targetMuscleExerciseData);
      const equipmentMuscleExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetail.equipment}`,
        exerciseOption
      );
      setEquipmentMuscleExercises(equipmentMuscleExerciseData);
    };

    fetchExerciseData();
  }, [exerciseDetail.equipment, exerciseDetail.target, id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercise
        targetMuscleExercises={targetMuscleExercises}
        equipmentMuscleExercises={equipmentMuscleExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
