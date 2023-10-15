import { Stack, Typography } from "@mui/material"
import CounterInput from "../components/CounterInput"
import BasicInput from "../components/BasicInput"
import BasicButton from "../components/BasicButton"
import { useContext, useState } from "react"
import { ICoreContext, IUserInput } from "../types/interfaces"
import { CoreContext } from "../context"
import When from "../hoc/When"

const UserInteractionElements = () => {

  const state = useContext(CoreContext) as ICoreContext;

  const [userInputs, setUserInputs] = useState<IUserInput>({
    coke_count: 0,
    pepsi_count: 0,
    dew_count: 0,
    coins_count: 0,
    cash_count: 0
  })

  const clearUserInputs = () => {
    setUserInputs(() => {
      return {
        coke_count: 0,
        pepsi_count: 0,
        dew_count: 0,
        coins_count: 0,
        cash_count: 0
      }
    })
  }

  return (
    <>
      <Stack direction="column" rowGap="10px">
        <CounterInput counterName="COKE" getCount={(count) => {
          setUserInputs(prev => ({ ...prev, coke_count: count }))
        }} value={userInputs.coke_count} />
        <CounterInput counterName="PEPSI" getCount={(count) => {
          setUserInputs(prev => ({ ...prev, pepsi_count: count }))
        }} value={userInputs.pepsi_count} />
        <CounterInput counterName="DEW" getCount={(count) => {
          setUserInputs(prev => ({ ...prev, dew_count: count }))
        }} value={userInputs.dew_count} />
      </Stack>

      <When condition={state.state.change === 0 && !state.state.isRefundOn}>
        <Stack direction="column" rowGap="10px" m="10px 0px">
          <Typography variant="caption" sx={{ color: "#fff" }}>Input Cash</Typography>
          <BasicInput label="CASH" getInput={(cash) => {
            setUserInputs(prev => ({ ...prev, cash_count: cash }))
          }} value={userInputs.cash_count} />
          <Typography variant="caption" sx={{ color: "#fff" }}>Input Coin</Typography>
          <BasicInput label="COIN" getInput={(coin) => {
            setUserInputs(prev => ({ ...prev, coins_count: coin }))
          }} value={userInputs.coins_count} />
        </Stack>
        <BasicButton label="PURCHASE"
          handleButtonClick={() => {
            if (userInputs.coke_count === 0 && userInputs.pepsi_count === 0 && userInputs.dew_count === 0) return;
            state.purchase(userInputs)
            clearUserInputs()
          }}
        />
      </When>

      <When condition={state.state.change > 0}>
        <Typography variant="caption" sx={{ color: "#fff", mt: "1.5rem" }}>Collect Change</Typography>
        <BasicButton label={`Collect Rs.${state.state.change}`}
          handleButtonClick={() => state.resetChange()} />
      </When>

      <When condition={state.state.refund > 0}>
        <Typography variant="caption" sx={{ color: "#fff", mt: "1.5rem" }}>Collect Refund</Typography>
        <BasicButton label={`Collect Rs.${state.state.refund}`}
          handleButtonClick={() => {
            state.resetRefund()
            clearUserInputs()
          }} />
      </When>

      <When condition={state.state.refund === 0 && state.state.isRefundOn}>
        <Stack m="1.5rem 0rem">
          <BasicButton label={"REFUND NOW"}
            handleButtonClick={() => {
              state.refund({
                coke_count: userInputs.coke_count,
                pepsi_count: userInputs.pepsi_count,
                dew_count: userInputs.dew_count
              })
              clearUserInputs()
            }} />
        </Stack>
      </When>

      <When condition={state.state.refund === 0 && state.state.change === 0}>
        <Stack direction="column" rowGap="10px" mt="1.6em">
          <Typography variant="body2" textAlign="center" sx={{ color: "#fff" }}>Want to Refund?</Typography>
          <BasicButton label={state.state.isRefundOn ? "BACK TO PURCHASE" : "REFUND"} handleButtonClick={() => state.toggleRefund()} />
        </Stack>
      </When>
    </>
  )
}

export default UserInteractionElements
