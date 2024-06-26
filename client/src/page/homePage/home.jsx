import React from 'react';
import {
    Container,
    Grid,
    Header,
    Segment,
    List,
    Divider,
    Image,
    Button,
} from 'semantic-ui-react';
import ModalAddBook from '../../components/modal/modalAddBook.jsx';
import styles from './home.module.css';

const Home = () => {

    const books = [
        {
            title: 'Book 1',
            author: 'Author 1',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 1 description',
            Genre: 'Truyen tranh',
            Type: 'Moi',
        },
        {
            title: 'Book 2',
            author: 'Author 2',
            image: 'https://images.unsplash.com/photo-1718809070374-e373e7c41414?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Book 2 description',
            Genre: 'Truyen tranh',
            Type: 'Moi',
        },
        {
            title: 'Book 3',
            author: 'Author 3',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 3 description',
            Genre: 'Truyen tranh',
            Type: 'Moi',
        },
        {
            title: 'Book 4',
            author: 'Author 4',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 4 description',
            Genre: 'Truyen tranh',
            Type: 'Moi',
        },
        {
            title: 'Book 1',
            author: 'Author 1',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 1 description',
            Genre: 'Truyen tranh',
            Type: 'Moi',
        },
        {
            title: 'Book 2',
            author: 'Author 2',
            image: 'https://images.unsplash.com/photo-1718809070374-e373e7c41414?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Book 2 description',
            Genre: 'Truyen tranh',
            Type: 'Moi',
        },
        {
            title: 'Book 3',
            author: 'Author 3',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 3 description',
            Genre: 'Truyen tranh',
            Type: 'Moi',
        },
        {
            title: 'Book 4',
            author: 'Author 4',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            description: 'Book 4 description',
            Genre: 'Truyen tranh',
            Type: 'Moi',
        },
    ]

    return (
        <Container fluid>
            <Grid celled='internally'>
                <Grid.Column width={3} floated='left'>
                    <Segment basic>
                        <Header as='h3'>Features</Header>
                        <Divider />
                        <List className={styles.features}>
                            <List.Item className={styles.modal}><ModalAddBook /></List.Item>
                            <List.Item className={styles.modal}>Export to excel</List.Item>
                        </List>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Segment basic>
                        <Header as='h3'>Library</Header>
                        <Divider />
                        <Grid className={styles.books}>
                            {books.map((book, index) => (
                                <Grid.Column key={index} width={4}>
                                    <Segment className={styles.book}>
                                        <Image src={book.image} size='medium' className={styles.fixedHeightImage} />
                                        <div className={styles.delete}>x</div>
                                        <Header as='h3' className={styles.bookHeader}>{book.title}</Header>
                                        <p className={styles.bookAuthor}>{book.author}</p>
                                        <Divider />
                                        <p className={styles.bookType}>Type: {book.Type}</p>
                                        <p className={styles.bookGenre}>Genre: {book.Genre}</p>
                                        <p className={styles.bookDescription}>Description: {book.description}</p>
                                        <Divider />
                                        <div className={styles.bookButton}>
                                            <Button color='linkedin'>Edit</Button>
                                            <Button color='linkedin'>Borrow</Button>
                                        </div>
                                    </Segment>
                                </Grid.Column>
                            ))}
                        </Grid>
                    </Segment>
                </Grid.Column>
                <Divider vertical></Divider>
            </Grid>
        </Container>
    );
}

export default Home;
