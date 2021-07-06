import React  from "react";
import {useState} from 'react';


export const ThemesContext = React.createContext({ 
    theme: 'light',
     setTheme: () => {}
    });

    export default function ThemeProvider({children}){
        const [theme, setTheme] = useState('light');
        return (
           <ThemesContext.Provider value={{
               theme,
               setTheme
           }}>
               {children}
           </ThemesContext.Provider>
        );
    }