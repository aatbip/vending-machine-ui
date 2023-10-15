export type IAppState = {
  coke_count: number;
  pepsi_count: number;
  dew_count: number;
  coins_count: number;
  cash_count: number;
}

export interface IUserInput extends IAppState { }

export interface IInitialState {
  appState: IAppState | undefined;
  errorMsg: string;
  isLoading: boolean;
  change: number;
}

export type ICoreContext = {
  state: IInitialState;
  fetchAppState: () => void;
  purchase: (data: IUserInput) => void;
}

