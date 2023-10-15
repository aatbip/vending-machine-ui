import { Button } from '@mui/material'
import { FC } from 'react';

interface IBasicButton {
  label: string;
  handleButtonClick: () => void;
}

const BasicButton: FC<IBasicButton> = ({ label, handleButtonClick }) => {
  return (
    <Button variant="outlined" sx={{
      color: "#fff",
      fontWeight: "600",
      borderColor: "#fff",
      "&:hover": {
        borderColor: "#dce2e3"
      }
    }} onClick={handleButtonClick}>{label}</Button>
  )
}

export default BasicButton; 
