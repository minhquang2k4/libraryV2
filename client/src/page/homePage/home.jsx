import React from 'react';
import {
    Container,
    Grid,
    Header,
    Segment,
    List,
    Divider,
    Image,
} from 'semantic-ui-react';
import ModalAddBook from '../../components/modal/modalAddBook.jsx';
import ModalEditBook from '../../components/modal/modalEditBook.jsx';
import ModalBorrowBook from '../../components/modal/modalBorrowBook.jsx';
import ModalDeleteBook from '../../components/modal/modalDeleteBook.jsx';
import styles from './home.module.css';

const Home = () => {

    const books = [
        {
            id: 1,
            title: 'Book 1',
            author: 'Author 1',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 1 description',
            genre: 'Truyen tranh',
            type: 'Moi',
        },
        {
            id: 2,
            title: 'Book 2',
            author: 'Author 2',
            image: 'https://images.unsplash.com/photo-1718809070374-e373e7c41414?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Book 2 description',
            genre: 'Truyen tranh',
            type: 'Moi',
        },
        {
            title: 'Book 3',
            author: 'Author 3',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 3 description',
            genre: 'Truyen tranh',
            type: 'Moi',
        },
        {
            title: 'Book 4',
            author: 'Author 4',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 4 description',
            genre: 'Truyen tranh',
            type: 'Moi',
        },
        {
            title: 'Book 1',
            author: 'Author 1',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 1 description',
            genre: 'Truyen tranh',
            type: 'Moi',
        },
        {
            title: 'Book 2',
            author: 'Author 2',
            image: 'https://images.unsplash.com/photo-1718809070374-e373e7c41414?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Book 2 description',
            genre: 'Truyen tranh',
            type: 'Moi',
        },
        {
            title: 'Book 3',
            author: 'Author 3',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 3 description',
            genre: 'Truyen tranh',
            type: 'Moi',
        },
        {
            title: 'Book 4',
            author: 'Author 4',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 4 description',
            genre: 'Truyen tranh',
            type: 'Moi',
        },
    ]

    return (
        <Container fluid>
            <Grid celled='internally'>
                <Grid.Column width={3} floated='left'>
                    <Grid.Row>
                        <Header as='h3'>Features</Header>
                        <Divider />
                    </Grid.Row>
                    <Grid.Row>
                        <List className={styles.features}>
                            <List.Item className={styles.modal}><ModalAddBook /></List.Item>
                            <List.Item className={styles.modal}>Export to excel</List.Item>
                        </List>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Grid.Row>
                        <Header as='h3'>Library</Header>
                        <Divider />
                    </Grid.Row>
                    <Grid.Row>
                        <Grid className={styles.books}>
                            {books.map((book, index) => (
                                <Grid.Column key={index} width={4}>
                                    <Segment className={styles.book}>
                                        <Image src={book.image} size='medium' className={styles.fixedHeightImage} />
                                        <ModalDeleteBook className={styles.delete}/>
                                        <Header as='h3' className={styles.bookHeader}>{book.title}</Header>
                                        <p className={styles.bookAuthor}>{book.author}</p>
                                        <p className={styles.bookType}>Type: {book.type}</p>
                                        <p className={styles.bookGenre}>Genre: {book.genre}</p>
                                        <p className={styles.bookDescription}>Description: {book.description}</p>
                                        <Divider />
                                        <div className={styles.bookButton}>
                                            <ModalEditBook
                                                Id={book.id}
                                                Title={book.title}
                                                Author={book.author}
                                                Image={book.image}
                                                Description={book.description}
                                                Genre={book.genre}
                                                Type={book.type}
                                            />
                                            <ModalBorrowBook />
                                        </div>
                                    </Segment>
                                </Grid.Column>
                            ))}
                        </Grid>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default Home;
