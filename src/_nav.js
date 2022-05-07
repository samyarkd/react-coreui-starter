import {
  cilSpeedometer
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavItem } from '@coreui/react'
import React from 'react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
 
  
]

export default _nav
