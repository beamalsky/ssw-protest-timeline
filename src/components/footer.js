import React from "react"
import { Col, Row } from 'react-bootstrap'

import SSWNameplate from '../components/sswnameplate'

const Footer = () => {
  return (
    <div id="story">
      <div id="footer" className="light">
        <Row>
          <Col className="main-text-column" xs={12} md={7}>
            <p class="byline">
              Additional reporting:
            </p>
            <p class="byline">
              <a href="https://southsideweekly.com/city-cited-chicago-freedom-school-feeding-protesters/">
                The Chicago Freedom School opened its doors to people who were trapped in the Loop after George Floyd protests and ordered pizza. Then police showed up.
              </a>
            </p>
            <p class="byline">
              <a href="https://southsideweekly.com/videos-show-aggressive-police-response-may-30-protest/">
                An analysis by the Invisible Institute finds multiple likely violations of CPD’s new use of force policy.
              </a>
            </p>
            <p class="byline">
              This project is part of an ongoing effort to collect stories, videos, and photographs from the George Floyd protests in Chicago. If you have information you would like to share with us, please visit <a href="https://southsideweekly.com/george-floyd-protests/">this website</a>.
            </p>
            <SSWNameplate />
            <p class="subbyline">
              <a href="https://southsideweekly.com/donate/">Donate today</a> to support South Side Weekly’s community-focused reporting
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer
