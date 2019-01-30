import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            // <div><h1>Sup muhfucka</h1></div>
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={require('../images/nathan1.jpg')}
                            alt="hi"
                            className="nathan-img" />

                        <div className="banner-text"><h1>Software Developer</h1></div>
                    </Cell>
                </Grid>
            
            </div>
        );
    }
}

export default LandingPage;