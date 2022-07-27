import * as ActionTypes from "./ActionTypes"
import { createContext, useReducer } from "react";
import { themeRenderer } from "./reducer/theme.reducer";


const ThemeContext = createContext();

const initVal = {
    them: 'light'
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeRenderer, initVal);


const toogle_theme = (them) => {

    const newTheme = them === 'light' ? 'dark' : 'light';
    dispatch({ type: ActionTypes.TOOGLE_THEME, payload: newTheme });
}
    return (
        <ThemeContext.Provider
            value = {{
                ...state,
                toogle_theme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )

}


export default ThemeContext