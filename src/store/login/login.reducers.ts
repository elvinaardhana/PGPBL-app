import { Action, createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { login, loginFail, loginSuccess, recoverPassswordFail, recoverPassword, recoverPasswordSuccess } from "./login.actions";
import { AppInitialState } from "../AppInitialState";

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(initialState,
    on(recoverPassword, currentState => {
        return {
            ...currentState,
            isRecoveringPassword: true,
            isRecoveredPassword: false
        };
    }),
    on(recoverPasswordSuccess, currentState =>{
        return {
            ...currentState,
            error: null,
            isRecoveredPassword:true,
            isRecoveringPassword: false
         };
    }),
    on(recoverPassswordFail, (currentState, action) =>{
        return {
            ...currentState,
            error: action.error,
            isRecoveredPassword:false,
            isRecoveringPassword: false
         };
    }),
    on(login, currentState=>{
        return{
            ...currentState,
            error: null,
            isLoggedIn: false,
            isLoggingIn: true
        }
    }),
    on(loginSuccess, currentState=>{
        return{
            ...currentState,
            isLoggedIn: true,
            isLoggingIn: false
        }
    }),
    on(loginFail, (currentState, action)=>{
        return{
            ...currentState,
            error: action.error,
            isLoggedIn: false,
            isLoggingIn: false
        }
    })
)

export function loginReducer(state: LoginState, action: Action<string>){
    return reducer(state,action);
}