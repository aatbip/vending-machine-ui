import { Stack, Typography } from "@mui/material"
import CounterInput from "../components/CounterInput"
import BasicInput from "../components/BasicInput"
import BasicButton from "../components/BasicButton"
import { useContext, useState } from "react"
import { ICoreContext, IUserInput } from "../types/interfaces"
import { CoreContext } from "../context"

const UserInteractionElements = () => {

  const state = useContext(CoreContext) as ICoreContext;

  const [userInputs, setUserInputs] = useState<IUserInput>({
    coke_count: 0,
    pepsi_count: 0,
    dew_count: 0,
    coins_count: 0,
    cash_count: 0
  })

  console.log("user inputs", userInputs)

  return (
    <>
      <Stack direction="column" rowGap="10px">
        <CounterInput counterName="COKE" getCount={(count) => {
          setUserInputs(prev => ({ ...prev, coke_count: count }))
        }} />
        <CounterInput counterName="PEPSI" getCount={(count) => {
          setUserInputs(prev => ({ ...prev, pepsi_count: count }))
        }} />
        <CounterInput counterName="DEW" getCount={(count) => {
          setUserInputs(prev => ({ ...prev, dew_count: count }))
        }} />
      </Stack>

      <Stack direction="column" rowGap="10px" m="10px 0px">
        <Typography variant="caption" sx={{ color: "#fff" }}>Input Cash</Typography>
        <BasicInput label="CASH" getInput={(cash) => {
          setUserInputs(prev => ({ ...prev, cash_count: cash }))
        }} />
        <Typography variant="caption" sx={{ color: "#fff" }}>Input Coin</Typography>
        <BasicInput label="COIN" getInput={(coin) => {
          setUserInputs(prev => ({ ...prev, coins_count: coin }))
        }} />
      </Stack>

      <BasicButton label="PURCHASE" handleButtonClick={() => state.purchase(userInputs)} />

      <Stack direction="column" rowGap="10px" mt="1.6em">
        <Typography variant="body2" textAlign="center" sx={{ color: "#fff" }}>Want to Refund?</Typography>
        <BasicButton label="REFUND ME" handleButtonClick={() => { }} />
      </Stack>
    </>
  )
}

export default UserInteractionElements
