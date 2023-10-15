import { FC, ReactNode, createContext, useState } from "react";
import { ICoreContext, IInitialState, IUserInput, IUserRefundInput } from "../types/interfaces";
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
    change: 0,
    refund: 0,
    isRefundOn: false
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

  const refund = async (data: IUserRefundInput) => {
    try {
      const res = await url.post('core/refund', {
        coke_count: data.coke_count,
        pepsi_count: data.pepsi_count,
        dew_count: data.dew_count,
      })
      setState(prev => ({ ...prev, appState: res.data.updatedState, refund: res.data.refund }))
    } catch (e: any) {
      setState(prev => ({ ...prev, isLoading: false, errorMsg: e.response.data.message }))
    }
  }

  const resetChange = () => {
    setState(prev => ({ ...prev, change: 0 }))
  }

  const resetRefund = () => {
    setState(prev => ({ ...prev, refund: 0 }))
  }

  const resetError = () => {
    setState(prev => ({ ...prev, errorMsg: "" }))
  }

  const toggleRefund = () => {
    setState(prev => ({ ...prev, isRefundOn: !state.isRefundOn }))
  }

  return <CoreContext.Provider value={{
    state,
    fetchAppState,
    purchase,
    refund,
    resetChange,
    resetRefund,
    resetError,
    toggleRefund
  }}> {children}
  </CoreContext.Provider>
}
