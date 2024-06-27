import React, { useState } from 'react'
import {
    ModalHeader,
    ModalContent,
    ModalActions,
    Button,
    Icon,
    Modal,
} from 'semantic-ui-react'

function ModalDeleteBook() {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<div style={{
                fontWeight: 'bold',
                position: 'absolute',
                top: 0,
                right: 0,
                margin: '5px 10px',
                cursor: 'pointer',
            }}> x</div>}
        >
            <ModalHeader>
                <Icon name='book' />
                Delete Book
            </ModalHeader>
            <ModalContent>
                <p>Are you sure you want to delete this book?</p>
            </ModalContent>
            <ModalActions>
                <Button color='red' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button color='green' onClick={() => setOpen(false)}>
                    Delete
                </Button>
            </ModalActions>
        </Modal >
    )
}

export default ModalDeleteBook