import { Box, Typography } from "@mui/material"
import { FC } from "react";

interface IDisplayBox {
  message: string;
  isErrorMsg: boolean;
}

const DisplayBox: FC<IDisplayBox> = ({ message, isErrorMsg }) => {
  return (
    <Box sx={{
      border: "3px solid #fff",
      padding: "3px",
      height: "90px",
      width: "190px",
      textAlign: "center",
      marginBottom: "10px",
      overflowY: "auto",
      animation: isErrorMsg ? "change-color 2s ease infinite" : "",
      "@keyframes change-color": {
        "0%": {
          borderColor: "#123493",
          transform: "scale(1,1)",
        },
        "50%": {
          borderColor: "#fff",
          transform: "scale(1.1, 1.1)"
        },
        "100%": {
          borderColor: "#123493",
          transform: "scale(1,1)"
        }
      }
    }}>
      <Typography variant="caption" sx={{
        color: "#fff",
        textDecoration: "underline",
        fontWeight: "600"
      }}>Message Box</Typography>
      <Typography variant="body2" sx={{
        color: "#fff",
        overflowWrap: "break-word",
        whiteSpace: "pre-wrap",
      }}>{message}</Typography>
    </Box>
  )
}

export default DisplayBox
