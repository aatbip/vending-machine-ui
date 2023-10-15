import { Box, Typography } from "@mui/material"
import { FC } from "react";

interface IDisplayBox {
  message: string;
}

const DisplayBox: FC<IDisplayBox> = ({ message }) => {
  return (
    <Box sx={{
      border: "3px solid #fff",
      padding: "3px",
      height: "90px",
      width: "190px",
      textAlign: "center",
      marginBottom: "10px",
      overflowY: "auto"
    }}>
      <Typography variant="caption" sx={{
        color: "#fff",
        textDecoration: "underline",
        fontWeight: "600"
      }}>Message Box</Typography>
      <Typography variant="body2" sx={{
        color: "#fff",
        overflowWrap: "break-word",
        whiteSpace: "pre-wrap"
      }}>{message}</Typography>
    </Box>
  )
}

export default DisplayBox
