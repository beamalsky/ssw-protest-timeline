import React from "react"
import { Col, Row } from 'react-bootstrap'

import SSWNameplate from '../components/sswnameplate'

const Footer = () => {
  return (
    <div id="story">
      <div id="footer" className="light">
        <Row>
          <Col className="main-text-column" xs={12} md={7}>
            <p class="byline">A special project by</p>
            <SSWNameplate />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer
