import { Box, Stack, Typography, styled } from "@mui/material";
import MachineItems from "./MachineItems";
import UserInteractionElements from "./UserInteractionElements";
import DisplayBox from "../components/DisplayBox";
import { useContext } from "react";
import { CoreContext } from "../context";
import { ICoreContext } from "../types/interfaces";

const MachineContainer = styled(Stack)
  ({
    background: "#9D1717",
    borderRadius: "16px 16px 0px 0px",
    margin: "3rem auto",
    width: "800px",
    flexDirection: "row",
    height: "650px"
  })

const AmountDisplayContainer = styled(Stack)({
  flexDirection: "row",
  borderRadius: "12px",
  border: "3px solid #bfd9ff",
  background: "#fff",
  justifyContent: "space-around"
})


const CollectItemBoxContainer = styled(Stack)({
  backgroundColor: "#000",
  border: "13px solid #fff",
  height: "120px",
  position: "relative"
})

const VendingMachine = () => {

  const state = useContext(CoreContext) as ICoreContext

  return (
    <>
      <MachineContainer>
        <Stack direction="column" flexBasis="70%" p="1.5em">
          <AmountDisplayContainer>
            <Typography variant="h4" fontWeight="600">Cash : <span>{state?.state.appState?.cash_count}</span></Typography>
            <Typography variant="h4" fontWeight="600">Coin : <span>{state?.state.appState?.coins_count}</span></Typography>
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
            message={state?.state.errorMsg ? state?.state.errorMsg : "Please add items and input cash/coin to purchase!"}
            isErrorMsg={state?.state.errorMsg !== ""}
          />

          <UserInteractionElements />

        </Stack>

      </MachineContainer>
    </>
  )
}

export default VendingMachine
