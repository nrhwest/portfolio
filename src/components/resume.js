import React, {Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';


class Resume extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="resume-grid">
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={require('../images/suit-pic.jpg')} 
                            alt="suit-pic"
                            style={{height: '320px', width: '250px', borderRadius:'20px', border:'5px solid #27221F'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '5px', textAlign: 'center', fontFamily: 'Oxygen'}}>Nathan West</h2>
                        <h4 style={{color: 'grey', textAlign: 'center', paddingTop:'5px', fontFamily: 'Oxygen'}}>Data Scientist</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}></hr>
                        <p>Proactive and goal-oriented individual seeking opportunities in which to apply technological knowledge in data science and software development</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2019}
                        />
                    
                    </Cell>
                </Grid>
            
            </div>
        );
    }
}

export default Resume;