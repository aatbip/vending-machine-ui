import { Stack, Typography } from "@mui/material"
import CounterInput from "../components/CounterInput"
import BasicInput from "../components/BasicInput"
import BasicButton from "../components/BasicButton"

const UserInteractionElements = () => {
  return (
    <>
      <Stack direction="column" rowGap="10px">
        <CounterInput counterName="COKE" getCount={(count) => {
        }} />
        <CounterInput counterName="PEPSI" getCount={(count) => {
        }} />
        <CounterInput counterName="DEW" getCount={(count) => {
        }} />
      </Stack>

      <Stack direction="column" rowGap="10px" m="10px 0px">
        <Typography variant="caption" sx={{ color: "#fff" }}>Input Cash</Typography>
        <BasicInput label="CASH" getInput={(cash) => {
          console.log(cash)
        }} />
        <Typography variant="caption" sx={{ color: "#fff" }}>Input Coin</Typography>
        <BasicInput label="COIN" getInput={(coin) => {
          console.log(coin)
        }} />
      </Stack>

      <BasicButton label="PURCHASE" handleButtonClick={() => { }} />

      <Stack direction="column" rowGap="10px" mt="1.6em">
        <Typography variant="body2" textAlign="center" sx={{ color: "#fff" }}>Want to Refund?</Typography>
        <BasicButton label="REFUND ME" handleButtonClick={() => { }} />
      </Stack>
    </>
  )
}

export default UserInteractionElements
