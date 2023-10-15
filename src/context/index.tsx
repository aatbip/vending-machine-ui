import { FC, ReactNode, createContext, useState } from "react";
import { ICoreContext, IInitialState } from "../types/interfaces";
import { url } from "../axios/axios";

export const CoreContext = createContext<ICoreContext | null>(null)

interface ICoreProvider {
  children: ReactNode
}

export const CoreProvider: FC<ICoreProvider> = ({ children }) => {

  const [state, setState] = useState<IInitialState>({
    appState: undefined,
    errorMsg: "",
    isLoading: false
  })

  const fetchAppState = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true }))
      const { data } = await url.get('core/initial-state')
      setState(prev => ({ ...prev, appState: data.state, isLoading: false }))
    } catch (e: any) {
      setState(prev => ({ ...prev, isLoading: false, errorMsg: e.response.data.message }))
    }
  }

  return <CoreContext.Provider value={{
    state,
    fetchAppState
  }}> {children}
  </CoreContext.Provider>
}
