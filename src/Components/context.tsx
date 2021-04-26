import * as React from 'react'

export interface contextType {
  selected: number,
  select: (id: number) => void,
}

const AppContext =  React.createContext({} as contextType);

const AppProvider = ({children}:any) => {

  const [selected, setSelected] = React.useState(1);

  const select = (id: number) => {
    setSelected(id);
  }

  return <AppContext.Provider value={{
    selected,
    select
    }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return React.useContext(AppContext);
}

export {AppContext, AppProvider}
