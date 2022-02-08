import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Modals = () => {

  const [large, setLarge] = useState(false)


  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Bootstrap Modals
            <DocsLink name="CModal"/>
          </CCardHeader>
          <CCardBody>
            
            <CButton onClick={() => setLarge(!large)} className="mr-1">
              Launch large modal
            </CButton>
         
         

            <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => setLarge(!large)}>Do Something</CButton>{' '}
                <CButton color="secondary" onClick={() => setLarge(!large)}>Cancel</CButton>
              </CModalFooter>
            </CModal>

     

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Modals
