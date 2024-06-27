import React, { useState } from 'react'
import {
    ModalHeader,
    ModalContent,
    ModalActions,
    Button,
    Icon,
    Modal,
} from 'semantic-ui-react'

function ModalBorrowBook() {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color='linkedin'>Borrow</Button>}
        >
            <ModalHeader>
                <Icon name='book' />
                Borrow Book
            </ModalHeader>
            <ModalContent>
                <p>Are you sure you want to borrow this book?</p>
            </ModalContent>
            <ModalActions>
                <Button color='red' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button color='green' onClick={() => setOpen(false)}>
                    Borrow
                </Button>
            </ModalActions>
        </Modal>
    )
}

export default ModalBorrowBook