import { TextField } from "@mui/material"
import { FC } from "react";

interface IBasicInput {
  label: string;
  getInput: (data: number) => void;
  value: number;
}

const BasicInput: FC<IBasicInput> = ({ label, getInput, value }) => {
  return (
    <TextField
      id={`basic-${label}`}
      variant="outlined"
      label={label}
      type="number"
      sx={{
        "& .MuiOutlinedInput-root": {
          color: "#fff",
          "&.Mui-focused fieldset": {
            borderColor: "#fff"
          }
        },
        "& label.Mui-focused": {
          color: "#fff"
        },
        backgroundColor: "#731010",
        '& input[type=number]': {
          '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0
        }
      }}
      InputLabelProps={{
        style: { color: '#fff', opacity: "0.6" },
      }}
      onChange={(e) => getInput(parseInt(e.target.value))}
      value={value === 0 ? "" : value}
    />
  )
}

export default BasicInput
