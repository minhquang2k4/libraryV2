import React, { useState } from 'react'
import {
    ModalHeader,
    ModalContent,
    ModalActions,
    Button,
    Icon,
    Modal,
} from 'semantic-ui-react'

function ModalReturnBook() {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color='linkedin'>Return</Button>}
        >
            <ModalHeader>
                <Icon name='book' />
                Return Book
            </ModalHeader>
            <ModalContent>
                <p>Are you sure you want to return this book?</p>
            </ModalContent>
            <ModalActions>
                <Button color='red' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button color='green' onClick={() => setOpen(false)}>
                    Return
                </Button>
            </ModalActions>
        </Modal>
    )
}

export default ModalReturnBook