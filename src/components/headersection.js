import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Col, Row } from 'react-bootstrap'

import BackgroundImage from '../components/backgroundimage'
import config from '../components/config.js'

const HeaderSection = () => (
  <StaticQuery
    query={
      graphql`
        query HeaderQuery {
          header: file(relativePath: { eq: "header.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    }
    render={data => (
      <>
        <BackgroundImage
          title="header"
          fluid={data.header.childImageSharp.fluid}
          overlayColor="#04040454"
        >
          <div style={{
            margin: '33vh auto',
            width: '66vw',
            padding: '2vh',
            textAlign: 'center',
            backgroundColor: 'black'
          }}>
              <h1 style={{color: 'white'}}>{config.title}</h1>
              <h3 class="dek">{config.subtitle}</h3>
              <p class='byline'>{config.byline}</p>
              <p class='subbyline'>Cover image by Anthony Nguyen<br />Web interactive by Bea Malsky</p>
          </div>
        </BackgroundImage>
        <div id="intro" style={{
          backgroundColor: 'white',
          padding: '2rem',
          opacity: '87%'
        }}>
          <Row>
            <Col className="main-text-column" xs={12} md={7}>
              <p>
                On May 30, when the car caravans that started at the Cook County Jail and at Trinity Episcopal Church in Bronzeville met up at 2pm with the rally going on at Federal Plaza, it was clear that this was going to be big. Thousands of people marched through the Loop, up Lake Shore Drive, and down Michigan Avenue that day, in protest of the killing of George Floyd by Minneapolis police officer Derek Chauvin on May 25, and the many killings of Black people by police that preceded it.
              </p>
              <p>
                For more than seven hours on Saturday, social media feeds were flooded with images of protesters confronting Chicago police officers, and of police officers using what many participants and observers described as excessive, unwarranted force to push them back. Taken in concert with images of stores along Michigan Avenue being smashed and looted and police vehicles vandalized and burning, it was, said witnesses both on the scene and watching from afar, chaos.
              </p>
              <p>
                Once the Loop was on lockdown, looting and vandalism spilled out into the neighborhoods on Sunday, May 31, and continued into Monday, devastating communities on the South and West Sides. Reports have swirled of white supremacists marching in Bridgeport, and of violent conflict between Black and Latinx residents in Little Village, Pilsen, and Humboldt Park. By Monday afternoon, Illinois Governor J.B. Pritzker had declared Cook County (along with DuPage, Will, Kane, Kendall, and four downstate counties) a disaster area, and called in the National Guard. Meanwhile, public protests against police brutality and racism have swelled all over the city, drawing crowds as large as 20,000.
              </p>
              <p>
                On May 30, there were 494 arrests citywide, including for disorderly conduct (373), civil unrest (414), looting (28), and firearms (16). Eighty-five officers reported being injured on duty that day. And between May 29 and June 4 more than 250 complaints were filed against CPD with the Civilian Office of Police Accountability.
              </p>
            </Col>
          </Row>
        </div>
      </>
    )
    }
  />
)

export default HeaderSection
