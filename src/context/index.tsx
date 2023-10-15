import { FC, ReactNode, createContext, useState } from "react";
import { ICoreContext, IInitialState, IUserInput } from "../types/interfaces";
import { url } from "../axios/axios";

export const CoreContext = createContext<ICoreContext | null>(null)

interface ICoreProvider {
  children: ReactNode
}

export const CoreProvider: FC<ICoreProvider> = ({ children }) => {

  const [state, setState] = useState<IInitialState>({
    appState: undefined,
    errorMsg: "",
    isLoading: false,
    change: 0
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

  const purchase = async (data: IUserInput) => {
    try {
      const res = await url.post('core/purchase', {
        coke_count: data.coke_count,
        pepsi_count: data.pepsi_count,
        dew_count: data.dew_count,
        cash_count: data.cash_count,
        coin_count: data.coins_count
      })
      setState(prev => ({ ...prev, appState: res.data.updatedState, change: res.data.change }))
    } catch (e: any) {
      setState(prev => ({ ...prev, isLoading: false, errorMsg: e.response.data.message }))
    }
  }

  return <CoreContext.Provider value={{
    state,
    fetchAppState,
    purchase
  }}> {children}
  </CoreContext.Provider>
}
