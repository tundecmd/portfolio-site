import React from 'react'
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landing-page';
import AboutMe from './about-me';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
        </Switch>
    )
}

export default Main;
