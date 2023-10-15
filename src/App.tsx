import { useContext, useEffect } from "react"
import { CoreContext } from "./context"
import VendingMachine from "./vendingMachine"
import { ICoreContext } from "./types/interfaces"

function App() {
  const state = useContext(CoreContext) as ICoreContext

  useEffect(() => {
    state.fetchAppState()
  }, [])

  return (
    <>
      <VendingMachine />
    </>
  )
}

export default App
