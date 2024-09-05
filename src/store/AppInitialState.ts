import { AppState } from "./AppState";
import { LoginState } from './login/LoginState';

export const AppInitialState: AppState = {
    loading: {
        show: false
    },
    login: {
      error: null,
      isLoggedIn: false,
      isLoggingIn: false,
      isRecoveredPassword: false,
      isRecoveringPassword: false
    }
}