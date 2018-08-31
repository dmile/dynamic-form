import React from 'react';
import {Grid, Jumbotron, Navbar} from 'react-bootstrap';
import DynamicFormContainer from '../containers/dynamic-form/DynamicFormContainer'

const App = () => (
    <Grid>
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    Dynamic form
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
        <Jumbotron>
            <DynamicFormContainer formName="formName"/>
        </Jumbotron>
    </Grid>
);

export default App;