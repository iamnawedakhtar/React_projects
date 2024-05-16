import { useContext, createContext } from "react";
// here we did the work in one file rather than two file one for creating context and one for providing context

export const ThemeContext= createContext({
    theme:"light",
    darkmode :()=>{},
    lightmode:()=>{}
})

export const ThemeProvider= ThemeContext.Provider
export default function useTheme ()
{
   return useContext(ThemeContext)
}