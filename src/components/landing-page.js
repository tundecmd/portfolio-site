import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencilAlt, faFolder, faFolderPlus, faUserPlus, faSignInAlt,  } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin, FaGithub, FaGithubAlt, FaGithubSquare, FaFreeCodeCamp, FaYoutubeSquare} from "react-icons/fa";



const LandingPage = () => {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwJIY5sGZQuLj2-Ep89chbi6SoyvlHW0vIM0_0m99AZPD1GKElw&s" alt="avatar" className='avatar-img' />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>JavaScript | React | NodeJS | Express | MongoDB | SASS/SCSS | Firebase | PHP</p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <Link to='http://google.com' rel="noopener noreferrer" target="_blank">
                                <FaLinkedin />
                            </Link>
                            {/* GitHub */}
                            <Link to='http://google.com' rel="noopener noreferrer" target="_blank">
                                <FaGithubSquare />
                            </Link>
                            {/* Freecodecamp */}
                            <Link to='http://google.com' rel="noopener noreferrer" target="_blank">
                                <FaFreeCodeCamp />
                            </Link>
                            {/* Youtube */}
                            <Link to='http://google.com' rel="noopener noreferrer" target="_blank">
                                <FaYoutubeSquare />
                            </Link>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default LandingPage;