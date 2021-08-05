import React from 'react';


import { Button, Modal } from 'semantic-ui-react'

const  modal = (props) =>{
  const {open, setOpen} = props;

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Header>Publicación guardada</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            Publicación creada exitosamente
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default modal;