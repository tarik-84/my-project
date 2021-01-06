import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import './FrontPageContent.css';
import GuideList from './GuideList';


export default function FrontPageContent(props) {

    return (
        <div className='fp-container-main'>
            {/* Call to action */}
            <div className='fp-hero'>
                <Jumbotron>
                    <h1 className="display-3 text-left">African Market</h1>
                    <hr className="my-2"/>
                    <p className="lead text-left">African market is the one of the best fruit market ever. Every thing we have here it's organic</p>
                </Jumbotron>
            </div>
            <div className='fp-three-blurbs'>
                <Row className='blurbs-container-row'>
                    <Col sm='4'>
                        <h4>Everything You Need</h4>
                        <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at.</p>
                    </Col>
                    <Col sm='4'>
                        <h4>Everything For Everyone</h4>
                        <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at.</p>
                    </Col>
                    <Col sm='4'>
                        <h4>A Safe Place</h4>
                        <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at.</p>
                    </Col>
                </Row>
            </div>
            <hr/>
            <GuideList />
        </div>
    );
}

