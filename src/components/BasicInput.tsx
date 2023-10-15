import { TextField } from "@mui/material"
import { FC } from "react";

interface IBasicInput {
  label: string;
  getInput: (data: number) => void;
}

const BasicInput: FC<IBasicInput> = ({ label, getInput }) => {
  return (
    <TextField
      id={`basic-${label}`}
      variant="outlined"
      label={label}
      type="number"
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#fff"
          }
        },
        "& label.Mui-focused": {
          color: "#fff"
        },
      }}
      onChange={(e) => getInput(e.target.value ? parseInt(e.target.value) : 0)}
    />
  )
}

export default BasicInput
