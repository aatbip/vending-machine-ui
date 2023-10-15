import { Box, Stack, Typography, styled } from "@mui/material";
import MachineItems from "./MachineItems";
import CounterInput from "../components/CounterInput";
import BasicInput from "../components/BasicInput";
import BasicButton from "../components/BasicButton";

const MachineContainer = styled(Stack)
  ({
    background: "#9D1717",
    borderRadius: "16px 16px 0px 0px",
    margin: "3rem auto",
    // maxWidth: "800px",
    // minWidth: "800px",
    width: "800px",
    flexDirection: "row",
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

        <Stack direction="column" flexBasis="30%" p="1.5em" width="100%">
          <Stack direction="column" rowGap="10px">
            <CounterInput counterName="COKE" getCount={(count) => {
              console.log(count)
            }} />
            <CounterInput counterName="PEPSI" getCount={(count) => {
              console.log(count)
            }} />
            <CounterInput counterName="DEW" getCount={(count) => {
              console.log(count)
            }} />
          </Stack>

          <Stack direction="column" rowGap="10px" m="10px 0px">
            <Box>
              <Typography variant="caption">Input Cash</Typography>
              <BasicInput label="CASH" getInput={(cash) => {
                console.log(cash)
              }} />
            </Box>
            <Box>
              <Typography variant="caption">Input Coin</Typography>
              <BasicInput label="COIN" getInput={(coin) => {
                console.log(coin)
              }} />
            </Box>
          </Stack>

          <BasicButton label="PURCHASE" handleButtonClick={() => { }} />

          <Stack direction="column" rowGap="10px" mt="8em">
            <Typography variant="body2" textAlign="center">Want to Refund?</Typography>
            <BasicButton label="REFUND ME" handleButtonClick={() => { }} />
          </Stack>
        </Stack>

      </MachineContainer>
    </>
  )
}

export default VendingMachine
