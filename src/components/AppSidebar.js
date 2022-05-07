import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import React, { useContext } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import SidebarContext from '../context/sidebar/sidebarContext'
// sidebar nav config
import navigation from '../_nav'
import { AppSidebarNav } from './AppSidebarNav'

const AppSidebar = () => {
  const { isOpen, toggle_sidebar } = useContext(SidebarContext)

  return (
    <CSidebar position="fixed" visible={isOpen}>
      <CSidebarBrand className="d-none d-md-flex" to="/">
        BRAND
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler className="d-none d-lg-flex" onClick={() => toggle_sidebar()} />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
