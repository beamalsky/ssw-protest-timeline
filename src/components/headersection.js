import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"

import Hero from '../components/hero'
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
          blm: file(relativePath: { eq: "teddy_waffles_blm.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    }
    render={data => (
      <>
        <Hero
          fluid={data.header.childImageSharp.fluid}
        >
          <div style={{
            margin: '33vh auto',
            width: '66vw',
            padding: '4vh',
            textAlign: 'center',
            backgroundColor: 'black'
          }}>
              <h1 style={{color: 'white'}}>{config.title}</h1>
              <h3 className="dek">{config.subtitle}</h3>
              <p className='byline'>{config.byline}</p>
              <p className='subbyline'>Cover image by Anthony Nguyen<br />Web interactive by Bea Malsky</p>
          </div>
        </Hero>
        <div id="intro" style={{
          backgroundColor: 'white',
          padding: '2rem',
          opacity: '95%'
        }}>
          <Row>
            <Col className="main-text-column" xs={12} md={7}>
              <p>
                <span class="dropcap">O</span>n May 30, when the car caravans that started at the Cook County Jail and at Trinity Episcopal Church in Bronzeville met up at 2pm with the rally going on at Federal Plaza, it was clear that this was going to be big. Thousands of people marched through the Loop, up Lake Shore Drive, and down Michigan Avenue that day, in protest of the killing of George Floyd by Minneapolis police officer Derek Chauvin on May 25, and the many killings of Black people by police that preceded it.
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
              <Img
                fluid={data.blm.childImageSharp.fluid}
              />
              <figcaption className="photo-credit mb-3">Photo by Teddy Waffles</figcaption>
              <br />
              <p>
                <span class="dropcap">W</span>hat happened that Saturday? The Weekly put out a call for first-person accounts from that weekend, with the aim of establishing a coherent timeline of events. Among the more than fifty testimonials we’ve received, the majority focus on a small window of time when an otherwise peaceful protest escalated rapidly into violence, between about 4pm and 7pm on the Wabash bridge and around the Trump International Hotel and Tower, the Wrigley Building, and the intersection of State and Kinzie.
              </p>
              <p>
                Many protesters in this area report being struck with batons, shoved to the ground, or otherwise physically attacked. A video shot just after 4pm near State and Kinzie shows a peaceful standoff between a police line and protesters escalate drastically when officers rush toward multiple protesters for no clear reason. Other CPD officers rush toward this incident; the crowd appears to panic. A woman screams. A man can be heard asking, “Why’d y’all do this? Why’d y’all hit us?” And then, mayhem.
              </p>
              <p>
                Confusion, panic, and conflicts were amplified by the raising of the bridges over the Chicago River, starting with the Michigan Avenue bridge. When Mayor Lori Lightfoot declared a 9pm curfew at 8:25pm, and CTA service to the Loop was shut down, anyone still downtown was effectively trapped.
              </p>
              <p>
                In the evening of May 30, kettling tactics—in which police cordons are deployed to block off streets and force large groups of people gathered into a confined area—appear to have been employed in Chicago, as they have been in <a href="https://www.nytimes.com/2020/06/05/nyregion/police-kettling-protests-nyc.html">New York City, Washington DC, and elsewhere</a>. It is a strategy that makes it impossible to leave, should one want to, and is designed to facilitate mass arrests—and inevitably leads to a ratcheting up of tensions. (In 2012, the city settled a $6.2 million class action lawsuit brought by the 900 or so people detained by kettling during a 2003 protest against the Iraq War.)
              </p>
              <br />
              <p>
                <span class="dropcap">T</span>here is still much to be unearthed about why this protest broke the way it did, and more stories and more facts to come to light. For example: why this particular location? As Trina Trill noted in her interview, “I think Donald Trump symbolizes what robbing Black and brown folks in this country looks like.”
              </p>
              <p>
                But what’s known right now is this: Mayor Lightfoot and CPD Superintendent David Brown have both publicly praised the “restraint” of the police department during the protests. But such commendation is sharply at odds with the testimonials, video, and photographs collected by the Weekly and our colleagues at the Invisible Institute. In the pages that follow, we offer a timeline of one brief moment in an ongoing, unspooling, infinitely complicated narrative, drawing on first-person accounts, social media postings, and publicly available data. (In the instances when speakers wished to remain anonymous, we respected that wish, though their identities are known to the Weekly.) In the weeks to come, we seek to collect more first-person accounts of other key incidents in this remarkable moment of Chicago’s history.
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
