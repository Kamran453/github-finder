import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer"

const AlertContext = createContext()

export const AlertProvider = ({children}) => {

    const initialState = null

    const [state, SetState] = useReducer(alertReducer,initialState)

    const setAlert = async (msg, type) => {
        SetState({
    type: "SET_ALERT",
    payload: {msg,type}
    })

    setTimeout(() => SetState({type: "REMOVE_ALERT"}),5000)


    }

    return (<AlertContext.Provider value={
        {
            alert: state, setAlert

        }
    }>
        {children}
    </AlertContext.Provider>)

}

export default AlertContext

