import { Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

function SampleCard({ icon, heading, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box
        borderRadius={"50%"}
        height="100px"
        width="100px"
        sx={{
          background: "rgb(93 93 255 )",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StarIcon sx={{ fontSize: "40px" }} />
      </Box>
      <Typography variant="h6" fontWeight={"700"}>
        Instant Features
      </Typography>
      <Typography
        variant="p"
        sx={{ textAlign: "center", color: "#9ba9b4", fontSize: "18px" }}
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
      </Typography>
    </Box>
  );
}

export default SampleCard;
