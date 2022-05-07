import React, { useReducer } from 'react'
import { TOGGLE_SIDEBAR } from '../types'
import SidebarContext from './sidebarContext'
import sidebarReducer from './sidebarReducer'

const SidebarState = ({ children }) => {
  // INITIAL STATE
  const initialState = {
    isOpen: false,
  }
  const [state, dispatch] = useReducer(sidebarReducer, initialState)

  // ---------- FUNCTIONS

  // sidebar toggler
  const toggle_sidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  return (
    <SidebarContext.Provider value={{ isOpen: state.isOpen, toggle_sidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarState
