import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

export default function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "none",
        gap: "47px",
        cursor: "pointer",
        borderTop: "4px solid #FF2625",
        backgroundColor: "#FFF",
        width: "270px",
        height: "280px",
        borderBottomLeftRadius: "40px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: "1800", left: "100", behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "48px", height: "48px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}
