import { createContext, useState } from 'react'

type ContextInterface = {
  user: any
  setUser: any
  email: any
  setEmail: any
}
const AppStateContext = createContext<ContextInterface>({
  user: null,
  setUser: null,
  email: null,
  setEmail: null,
})

const AppStateProvider = (props: any) => {
  const [user, setUser] = useState()
  const [email, setEmail] = useState()

  return (
    <AppStateContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
      }}
    >
      {props.children}
    </AppStateContext.Provider>
  )
}

export { AppStateContext, AppStateProvider }
