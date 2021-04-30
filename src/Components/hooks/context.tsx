import * as React from 'react'
import { ITechText } from '../Tech/techText';

export interface contextType {
  selected: ITechText,
  showNavigation: boolean,
  select: (title: string, description: string) => void,
  toggle: () => void,
  toggleOff : () => void
}

const AppContext =  React.createContext({} as contextType);

const AppProvider = ({children}:any) => {

  const [selected, setSelected] = React.useState({} as ITechText);

  const [showNavigation, setShowNavigation] = React.useState(false);

  const toggle = () => {
    setShowNavigation(!showNavigation);
  }

  const toggleOff = () => {
    setShowNavigation(false);
  }


  const select = (title: string, description: string) => {
    setSelected({title, description});
  }

  return <AppContext.Provider value={{
    selected,
    showNavigation,
    select,
    toggle,
    toggleOff
    }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return React.useContext(AppContext);
}

export {AppContext, AppProvider}
