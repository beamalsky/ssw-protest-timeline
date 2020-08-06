import React from "react"
import { Col, Row } from 'react-bootstrap'

import SSWNameplate from '../components/sswnameplate'

const Footer = () => {
  return (
    <div id="story">
      <div id="footer" className="light">
        <Row>
          <Col className="main-text-column" xs={12} md={7} style={{padding: '1rem 2.5rem'}}>
            <p className="footer">
              Read part one of this series:<br /> <a href="http://protesttimeline.southsideweekly.com/">What Happened on May 30?</a>
            </p>
            <p className="footer">
              <b>Martha Bayne</b> is managing editor of the Weekly. She last wrote about the timeline of and police response to the May 30 George Floyd protests. <b>Jim Daley</b> is the Weekly’s politics editor. He last wrote about <a href="https://southsideweekly.com/census-spotlight-chicago-cares/">Census outreach</a>. <b>Jason Schumer</b> is the Weekly’s managing director.
            </p>
            <p className="footer">
              This project is part of an ongoing effort to collect stories, videos, and photographs from the George Floyd protests in Chicago. If you have information you would like to share with us, please visit <a href="https://southsideweekly.com/george-floyd-protests/">this website</a>.
            </p>
            <br />
            <SSWNameplate />
            <p className="footer">
              <em><a href="https://southsideweekly.com/donate/">Donate today</a> to support South Side Weekly’s community-focused reporting</em>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer
