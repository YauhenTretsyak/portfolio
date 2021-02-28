import { createContext, useState } from 'react';

export const LangContext = createContext()

const LangContextProvider = (props) => {

  const [langSwitch, setLangSwitch] = useState('PL')

  const languageSwitcher = (changedLanguage) => {
    setLangSwitch(changedLanguage)
  }

  return (
    <LangContext.Provider value={{langSwitch, languageSwitcher}}>
      { props.children }
    </LangContext.Provider>
  )
}

export default LangContextProvider;