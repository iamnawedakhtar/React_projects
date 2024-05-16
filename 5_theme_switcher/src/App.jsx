import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

const [theme,setTheme]= useState("light")

function darkmode (){
 setTheme("dark")
}
function lightmode (){
 setTheme("light")
}

// actual change in theme

useEffect(() => {

  let doc= document.querySelector('html').classList
  doc.remove('light', 'dark')
  doc.add(theme)
}, [theme])

return (

 <ThemeProvider value={{theme,darkmode,lightmode}}>
<div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card/>
          </div>
      </div>
  </div>
  </ThemeProvider>
  )
}

export default App
