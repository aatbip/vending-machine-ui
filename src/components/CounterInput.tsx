import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material"
import { FC, useEffect, useState } from "react";

interface ICounterInput {
  counterName: string;
  getCount: (count: number) => void;
}

const CounterInput: FC<ICounterInput> = ({ counterName, getCount }) => {

  const [itemsCount, setItemsCount] = useState(0);

  const addItems = () => {
    setItemsCount(prev => prev + 1)
  }

  const subtractItems = () => {
    if (itemsCount === 0) return;
    setItemsCount(prev => prev - 1)
  }

  useEffect(() => {
    if (itemsCount === 0) {
      getCount(0)
      return;
    }
    getCount(itemsCount)
  }, [itemsCount])



  return (
    <Stack direction="row" bgcolor="#fff" columnGap="1.5rem" alignItems="center" justifyContent="center">
      <Typography variant="h5" fontWeight="600">{counterName}</Typography>
      <Stack direction="row" alignItems="center" columnGap="1.2rem">
        <RemoveCircleOutline onClick={subtractItems} sx={{ cursor: "pointer" }} />
        <Typography variant="h4">{itemsCount}</Typography>
        <AddCircleOutline onClick={addItems} sx={{ cursor: "pointer" }} />
      </Stack>
    </Stack>
  )
}

export default CounterInput
