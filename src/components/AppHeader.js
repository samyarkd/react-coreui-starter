import { cilMenu } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
} from '@coreui/react'
import React, { useContext } from 'react'
import SidebarContext from '../context/sidebar/sidebarContext'
import { AppHeaderDropdown } from './header/index'
import { AppBreadcrumb } from './index'

const AppHeader = () => {
  const { toggle_sidebar } = useContext(SidebarContext)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler className="ps-1" onClick={() => toggle_sidebar()}>
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          BRAND
        </CHeaderBrand>

        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
