import { useContext, useEffect } from "react"
import { CoreContext } from "./context"
import VendingMachine from "./vendingMachine"
import { ICoreContext } from "./types/interfaces"

function App() {
  const state = useContext(CoreContext) as ICoreContext

  useEffect(() => {
    state.fetchAppState()
  }, [])

  useEffect(() => {
    if (state.state.errorMsg) {
      let t = setTimeout(() => {
        state.resetError()
      }, 8000)
      return () => clearTimeout(t)
    }
  }, [state.state.errorMsg])

  return (
    <>
      <VendingMachine />
    </>
  )
}

export default App
