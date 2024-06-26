import React from 'react'
import {
    ModalHeader,
    ModalContent,
    ModalActions,
    Button,
    Modal,
    Form,
    Input,
    Select,
    TextArea,
} from 'semantic-ui-react'

function ModalAddBook() {
    const [open, setOpen] = React.useState(false)

    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<div>Add book</div>}
        >
            <ModalHeader>Add Book</ModalHeader>
            <ModalContent>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-name'
                            control={Input}
                            label='Name'
                            placeholder='Name'
                        />
                        <Form.Field
                            id='form-input-control-author'
                            control={Input}
                            label='Author'
                            placeholder='Author'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>

                        <Form.Field
                            id='form-input-control-genre'
                            control={Select}
                            options={genderOptions}
                            label='Genre'
                            placeholder='Genre'
                        />
                        <Form.Field
                            id='form-input-control-type'
                            control={Select}
                            options={genderOptions}
                            label='Type'
                            placeholder='Type'
                        />
                    </Form.Group>
                    <Form.Field
                        id='form-input-control-image'
                        control={Input}
                        label='Image'
                        placeholder='Image'
                    />
                    <Form.Field
                        id='form-textarea-control-description'
                        control={TextArea}
                        label='Description'
                        placeholder='Description'
                    />
                </Form>
            </ModalContent>
            <ModalActions>
                <Button color='red' onClick={() => setOpen(false)}>
                    Exit
                </Button>
                <Button color='linkedin' onClick={() => setOpen(false)}>
                    Add
                </Button>
            </ModalActions>
        </Modal>
    )
}

export default ModalAddBook
