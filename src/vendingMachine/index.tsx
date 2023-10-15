import { Box, Stack, styled } from "@mui/material";
import MachineItems from "./MachineItems";
import CounterInput from "../components/CounterInput";
import BasicInput from "../components/BasicInput";
import BasicButton from "../components/BasicButton";

const MachineContainer = styled(Stack)
  ({
    background: "#9D1717",
    borderRadius: "16px 16px 0px 0px",
    width: "70%",
    margin: "3rem auto",
    maxWidth: "900px",
    minWidth: "600px",
    flexDirection: "row"
  })

const AmountDisplayContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-around",
  borderRadius: "12px",
  border: "3px solid #bfd9ff",
  background: "#fff",
})


const CollectItemBoxContainer = styled(Stack)({
  backgroundColor: "#000",
  border: "13px solid #fff",
  height: "120px",
  position: "relative"
})

const VendingMachine = () => {
  return (
    <>
      <MachineContainer>
        <Stack direction="column" flexBasis="70%" p="1.5em">
          <AmountDisplayContainer>
            <h1>cash</h1>
            <h1>coin</h1>
          </AmountDisplayContainer>

          <MachineItems />

          <CollectItemBoxContainer>
            <Box sx={{
              position: "absolute",
              background: "#fff",
              width: "100px",
              height: "12px",
              borderRadius: "12px",
              bottom: 10,
              right: "40%"
            }} />
          </CollectItemBoxContainer>
        </Stack>

        <Stack direction="column" flexBasis="30%">
          <CounterInput counterName="COKE" getCount={(count) => {
            console.log(count)
          }} />

          <BasicInput label="CASH" getInput={(cash) => {
            console.log(cash)
          }} />

          <BasicButton label="PURCHASE" handleButtonClick={() => { }} />
        </Stack>

      </MachineContainer>
    </>
  )
}

export default VendingMachine
