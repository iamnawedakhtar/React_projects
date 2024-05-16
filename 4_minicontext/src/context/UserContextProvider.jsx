import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {     //children jo bhi component bheja hai usme access hoga
    
    const [user, setUser]= React.useState(null);
    return (
        // yaha jo bheja hai uska acces jayeg to all the component (user, setUser)
        <UserContext.Provider value={{user, setUser}}>    
         {children}
        </UserContext.Provider>
  )
}

export default UserContextProvider
