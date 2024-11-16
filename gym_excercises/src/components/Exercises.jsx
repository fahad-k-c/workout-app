import React from "react";
import { useEffect, useState } from "react";
import { Box, Stack, Pagination, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/FetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 4;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  // useEffect(() => {
  //   const fetchExcercisesData = async () => {
  //     let exercisesData = [];
  //     if (bodyPart === "all") {
  //       exercisesData = await fetchData(
  //         "https://exercisedb.p.rapidapi.com/exercises",
  //         exerciseOptions
  //       );
  //     } else {
  //       try {
  //         exercisesData = await fetchData(
  //           `https://exercisedb.p.rapidapi.com/exercises/bodyPart/(${bodyPart})`,
  //           exerciseOptions
  //         );
  //         console.log("this block is working bro");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     setExercises(exercisesData);
  //   };
  //   fetchExcercisesData();
  // }, [bodyPart]);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  console.log(exercises);
  return (
    exercises.length !== 0 && (
      <Box id="exercises" sx={{ mt: { lg: "10px" } }} mt="50px" p="20px">
        <Typography variant="h3" mb="46px">
          Showing Results
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>
        <Stack mt="100px" alignItems="center">
          {exercises.length > exercisePerPage && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisePerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Box>
    )
  );
};

export default Exercises;
