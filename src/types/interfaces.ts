export type IAppState = {
  coke_count: number;
  pepsi_count: number;
  dew_count: number;
  coins_count: number;
  cash_count: number;
}

export interface IUserInput extends IAppState { }

export interface IUserRefundInput extends Pick<IAppState, 'coke_count' | 'pepsi_count' | 'dew_count'> { }

export interface IInitialState {
  appState: IAppState | undefined;
  errorMsg: string;
  isLoading: boolean;
  change: number;
  refund: number;
  isRefundOn: boolean;
}

export type ICoreContext = {
  state: IInitialState;
  fetchAppState: () => void;
  purchase: (data: IUserInput) => void;
  refund: (data: IUserRefundInput) => void;
  resetChange: () => void;
  resetRefund: () => void;
  resetError: () => void;
  toggleRefund: () => void;
}

