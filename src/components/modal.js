import React from 'react';


import { Button, Modal } from 'semantic-ui-react'

const  modal = (props) =>{
  const {open, setOpen, header, description} = props;

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            {description}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default modal;