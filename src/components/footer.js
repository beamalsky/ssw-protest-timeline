import React from "react"
import { Col, Row } from 'react-bootstrap'

const Footer = ({ children }) => {
  return (
    <div id="story">
      <div id="footer" className="light">
        <Row>
          <Col className="main-text-column" xs={12} md={7} style={{padding: '1rem 2.5rem'}}>
            {children}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer
