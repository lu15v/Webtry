import React from 'react';


import { Button, Modal } from 'semantic-ui-react'

const  modal = (props) =>{
  const {open, setOpen} = props;

  return (
    <Modal
      centered={false}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Your subscription has been confirmed
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default modal;