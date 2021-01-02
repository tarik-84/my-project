import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-main">
            <Container fluid className='footer-container'>
                <Row>
                    <Col sm='4'>
                    <h5 className="footer-col-title">Guide Categories</h5>
                        <ul>
                            {/* Leftmost column */}
                            {/* Consider passing down array prop of category types and map them??? */}
                            <li className="list-unstyled">
                                <Link to="/protected">Cooking</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/protected">Crafts</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/protected">Outside</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/protected">Tech</Link>  
                            </li>
                        </ul>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <h5 className="footer-col-title">About Us</h5>
                        <ul>
                            {/* Center Column */}
                            <li className="list-unstyled">
                                <Link to="https://xenodochial-turing-fac98b.netlify.app/about-us">The Team</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/protected">Why Post</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/protected">Jobs</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm='4'>
                        <h5 className="footer-col-title">Resources</h5>
                        <ul>
                            {/* Right Most COlumn */}
                            <li className="list-unstyled">
                                <Link to="/protected">Sitemap</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/protected">Help!</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/protected">Contact</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className='footer-copyright text-center'>
                <Container fluid>
                    <p>&copy; {new Date().getFullYear()} Copyright: Lambda How to</p>
                </Container>
            </div>
        </div>
    );
}

export default Footer;