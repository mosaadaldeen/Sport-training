import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading ...";

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography mb="33px" variant="h3">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "20px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            style={{ ml: "10px" }}
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {" "}
                {item.video.title}
              </Typography>

              <Typography variant="h6" color="#000">
                {" "}
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
