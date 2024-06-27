import React, { useState } from 'react'
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

function ModalEddBook({ Id, Title, Author, Image, Description, Genre, Type }) {
    const [open, setOpen] = useState(false)

    const [id, setId] = useState(Id)
    const [title, setTitle] = useState(Title)
    const [author, setAuthor] = useState(Author)
    const [image, setImage] = useState(Image)
    const [description, setDescription] = useState(Description)
    const [genre, setGenre] = useState(Genre)
    const [type, setType] = useState(Type)

    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]

    const handleEdit = () => {
        console.log('Id: ', id)
        setId(id)
        console.log('Edit book')
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color='linkedin'>Edit</Button>}
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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Form.Field
                            id='form-input-control-author'
                            control={Input}
                            label='Author'
                            placeholder='Author'
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>

                        <Form.Field
                            id='form-input-control-genre'
                            control={Select}
                            options={genderOptions}
                            label='Genre'
                            placeholder='Genre'
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                        <Form.Field
                            id='form-input-control-type'
                            control={Select}
                            options={genderOptions}
                            label='Type'
                            placeholder='Type'
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Field
                        id='form-input-control-image'
                        control={Input}
                        label='Image'
                        placeholder='Image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <Form.Field
                        id='form-textarea-control-description'
                        control={TextArea}
                        label='Description'
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form>
            </ModalContent>
            <ModalActions>
                <Button color='red' onClick={() => setOpen(false)}>
                    Exit
                </Button>
                <Button color='linkedin' onClick={() => {
                    setOpen(false)
                    handleEdit()
                }}>
                    Add
                </Button>
            </ModalActions>
        </Modal>
    )
}

export default ModalEddBook
