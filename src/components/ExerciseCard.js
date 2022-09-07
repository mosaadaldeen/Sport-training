import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercises/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="raw">
        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>

        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        textTransform="capitalize"
        fontSize="24px"
        mt="11px"
        pb="10px"
        fontWeight="bold"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
