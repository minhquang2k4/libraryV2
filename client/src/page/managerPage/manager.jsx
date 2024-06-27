import React from 'react';
import {
    Container,
    Grid,
    Header,
    List,
    Divider,
} from 'semantic-ui-react';
import styles from './manager.module.css';

const manager = () => {
    return (
        <Container fluid>
            <Grid celled='internally'>
                <Grid.Column width={2}>
                    <Grid.Row>
                        <Header as='h3' textAlign='center'>Features</Header>
                        <Divider />
                    </Grid.Row>
                    <Grid.Row>
                        <List className={styles.features}>
                            <List.Item className={styles.feature}><div>Home</div></List.Item>
                        </List>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Grid.Row>
                        <Header as='h3'>Manager</Header>
                        <Divider />
                    </Grid.Row>
                    <Grid.Row>
                        <Grid celled='internally'>
                            <Grid.Column width={8}>
                                qew
                            </Grid.Column>
                            <Grid.Column width={8}>
                                qew
                            </Grid.Column>
                        </Grid>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default manager;