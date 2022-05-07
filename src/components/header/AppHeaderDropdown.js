import { cilLockLocked } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CAvatar, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import React from 'react'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar title="S" size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem href="#">
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
