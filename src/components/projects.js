import React, { useState } from 'react';
import { Tabs, Tab, Grid, Card, Cell, CardText, CardTitle, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);

    const toggleCategories = () => {
        if (activeTab === 0) {
        return (
            <div className='projects-grid'>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/0*JWL-dYH8mOxe9EGb.png) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border style={{textAlign: 'center'}}>
                    <Button colored>GitHub</Button>
                    <Button colored>Live Demo</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card> 
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/0*JWL-dYH8mOxe9EGb.png) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border style={{textAlign: 'center'}}>
                    <Button colored>GitHub</Button>
                    <Button colored>Live Demo</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card> 
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/0*JWL-dYH8mOxe9EGb.png) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border style={{textAlign: 'center'}}>
                    <Button colored>GitHub</Button>
                    <Button colored>Live Demo</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card> 
            </div>
        )
    } else if (activeTab === 1) {
        return (
           <div>
                <h1>This is Angular</h1>
           </div> 
        )
    } else if (activeTab === 2) {
        return (
            <div>
                <h1>This is vue JS</h1>
            </div>
        )
    } else if (activeTab === 3) {
        return (
            <div>
                <h1>This is MongoDB</h1>
            </div>
        )
    }
} 
    
    return (
        <div className='category-tabs'>
            <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab({ activeTab: tabId })} ripple>
                <Tab>React</Tab>
                <Tab>React</Tab>
                <Tab>React</Tab>
            </Tabs>
            <section>
                <Grid className="demo-grid-ruler">
                    <Cell col={12}>
                        <div className="content">{toggleCategories()}</div>
                    </Cell>
                </Grid>
            </section>
        </div>
    )
}

export default Projects
