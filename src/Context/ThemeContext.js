import * as ActionTypes from "./ActionTypes"
import { createContext, useReducer } from "react";
import { themeRenderer } from "./reducer/theme.reducer";


const ThemeContext = createContext();

const initVal = {
    theme:'light'
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeRenderer, initVal); 
}

const toogle_theme = (theme) => {
     
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch({type: ActionTypes.TOOGLE_THEME, payload: newTheme});

    return (
        <ThemeContextprovider
            {
                ...state,
                toogle_theme()
            }
        >
            {children}
        </ThemeContextprovider>
    )
    
}


export default ThemeContext