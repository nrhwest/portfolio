import React, {Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Nathan West</h2>
                        <img 
                            src={require('../images/nathan1.jpg')}
                            alt="hi"
                            className="nathan-img" /> 
                    </Cell>
                    <Cell col={6}>gang</Cell>
                </Grid>


            </div>
        );
    }
}

export default Contact;