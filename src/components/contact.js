import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faFolder, faFolderPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FaPhoneSquare, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='contact-body'>
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Adepoju Lateef</h2>
                    <img 
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" 
                        style={{height: '250px'}}
                    />
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi obcaecati eius, laborum et incidunt omnis repudiandae itaque nulla quisquam. Perferendis amet velit necessitatibus laborum quaerat soluta dolores debitis veniam eum!</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                        <div className="contact-list" style={{textAlign: 'center'}}>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}}>
                                        <FaPhoneSquare style={{marginRight: '40px', marginLeft: '60px'}} className='icon' /> +234 813 464 7034
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}}>
                                        <FaEnvelope style={{marginRight: '40px', marginLeft: '60px'}} className='icon' /> ademustexcel@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}}>
                                        <FaTwitter style={{marginRight: '40px', marginLeft: '60px'}} className='icon' /> tundecmd
                                    </ListItemContent>
                                </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Contact;
