import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material"
import { FC, useEffect, useState } from "react";

interface ICounterInput {
  counterName: string;
  getCount: (count: number) => void;
  value: number;
}

const CounterInput: FC<ICounterInput> = ({ counterName, getCount, value }) => {

  const [itemsCount, setItemsCount] = useState(value);

  console.log(counterName, value, itemsCount)

  const addItems = () => {
    setItemsCount(prev => prev + 1)
  }

  const subtractItems = () => {
    if (itemsCount === 0) {
      setItemsCount(0)
      return;
    }
    setItemsCount(prev => prev - 1)
  }

  useEffect(() => {
    getCount(itemsCount)
  }, [itemsCount])

  useEffect(() => {
    setItemsCount(value)
  }, [value])

  return (
    <Stack direction="row" bgcolor="#fff" alignItems="center" justifyContent="space-between" p="4px 6px">
      <Typography variant="h5" fontWeight="600">{counterName}</Typography>
      <Stack direction="row" alignItems="center" columnGap="1.2rem">
        <RemoveCircleOutline onClick={subtractItems} sx={{ cursor: "pointer" }} />
        <Typography variant="h4">{value}</Typography>
        <AddCircleOutline onClick={addItems} sx={{ cursor: "pointer" }} />
      </Stack>
    </Stack>
  )
}

export default CounterInput
