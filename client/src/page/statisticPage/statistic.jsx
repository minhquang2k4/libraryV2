import React from 'react';
import {
    Container,
    Grid,
    Header,
    List,
    Divider,
} from 'semantic-ui-react';
import styles from './statistic.module.css';


const Statistic = () => {
    return (
        <Container fluid>
            <Grid celled='internally'>
                <Grid.Column width={2} floated='left'>
                    <Grid.Row>
                        <Header as='h3'>Features</Header>
                        <Divider />
                    </Grid.Row>
                    <Grid.Row>
                        <List className={styles.features}>
                            <List.Item className={styles.feature}>Home</List.Item>
                            <List.Item className={styles.feature}>Export to excel</List.Item>
                        </List>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width={14}>
                    <Grid.Row>
                        <Header as='h3'>Statistic</Header>
                        <Divider />
                    </Grid.Row>
                    <Grid.Row>
                        Bang excel
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default Statistic;