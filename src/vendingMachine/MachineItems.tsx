import { Stack, styled } from "@mui/material"
import coke from "../assets/coke.svg";
import pepsi from "../assets/pepsi.svg";
import dew from "../assets/dew.svg";
import slab from "../assets/slab.png";
import { MAX_CAPACITY } from "../constants";

const ItemContainer = styled(Stack)({
  backgroundImage: "url('bg.png')",
  border: "10px solid #fff",
  margin: "1.5em 0em",
  flexDirection: "column",
  rowGap: "2em",
  padding: "10px 0px 24px 0px",
  position: "relative"
})

const ItemsStack = styled(Stack)({
  flexDirection: "row",
  columnGap: "10px"
})

/**
 *  Slab is the base where items are placed. 
 */
const SlabContainer = styled('img')({
  position: "absolute"
})

const MachineItems = () => {
  return (
    <ItemContainer>

      <ItemsStack>
        {
          Array.from({ length: MAX_CAPACITY }, (_, index) => index + Math.random()).map(el => {
            return (
              <img src={coke} key={el} width="35px" />
            )
          })
        }
      </ItemsStack>

      <ItemsStack>
        {
          Array.from({ length: MAX_CAPACITY }, (_, index) => index + Math.random()).map(el => {
            return (
              <img src={pepsi} key={el} width="35px" />
            )
          })
        }
      </ItemsStack>

      <ItemsStack>
        {
          Array.from({ length: MAX_CAPACITY }, (_, index) => index + Math.random()).map(el => {
            return (
              <img src={dew} key={el} width="35px" />
            )
          })
        }
      </ItemsStack>

      <SlabContainer src={slab} sx={{
        top: "5.2rem",
        width: "28rem"
      }} />
      <SlabContainer src={slab} sx={{
        bottom: "9.8rem",
        width: "28rem"
      }} />
      <SlabContainer src={slab} sx={{
        bottom: 0,
        width: "28rem"
      }} />

    </ItemContainer>
  )
}

export default MachineItems
