import { Box, Stack, styled } from "@mui/material";
import MachineItems from "./MachineItems";
import UserInteractionElements from "./UserInteractionElements";
import DisplayBox from "../components/DisplayBox";

const MachineContainer = styled(Stack)
  ({
    background: "#9D1717",
    borderRadius: "16px 16px 0px 0px",
    margin: "3rem auto",
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

          <DisplayBox
            message="Please add items and input cash/coin to purchase!"
          />

          <UserInteractionElements />

        </Stack>

      </MachineContainer>
    </>
  )
}

export default VendingMachine
