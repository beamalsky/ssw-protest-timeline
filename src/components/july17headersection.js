import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Col, Row } from 'react-bootstrap'

import July17Hero from '../components/july17hero'
import SSWNameplateSmall from '../components/sswnameplatesmall'

const July17HeaderSection = ({config}) => (
  <StaticQuery
    query={
      graphql`
        query July17HeaderQuery {
          header: file(relativePath: { eq: "july-17-header.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    }
    render={data => (
      <>
        <Row>
          <Col xs={12} md={6} style={{padding: 0}}>
            <July17Hero
              fluid={data.header.childImageSharp.fluid}
            />
          </Col>
          <Col xs={12} md={6} style={{padding: 0}}>
            <div
              style={{
              padding: '4.25rem',
              textAlign: 'center',
              backgroundColor: 'white'
            }}
            className="main-text-column">
                <SSWNameplateSmall/>
                <h1
                  style={{color: 'black', fontSize: '3.7rem'}}
                >
                    {config.title}
                </h1>
                <h3 className="dek">{config.subtitle}</h3>
                <p className='byline'>By Martha Bayne, Jim Daley, and Jason Schumer<br />Web interactive by Bea Malsky</p>
                <p className='subbyline'>Cover photo by Mateo Zapata</p>
            </div>
          </Col>
        </Row>

        <div id="intro" style={{
          backgroundColor: 'white',
          padding: '2rem',
          opacity: '95%'
        }}>
          <Row>
            <Col className="main-text-column" xs={12} md={7}>
              <p>
                <b>Content Warning: <em>Discussion, images, and videos of police violence.</em></b>
              </p>
              <p>
                <span className="dropcap">O</span>n July 17, Chi-Nations Youth Council, Black Lives Matter Chicago, BYP100, and a dozen other groups organized a Black and Indigenous solidarity rally at Buckingham Fountain and <a href="https://www.facebook.com/events/580611602644351/">promoted</a> it on social media as an opportunity to “dance, sing, party, and celebrate ourselves.” Speakers addressed the crowd, and Chicago rapper Ric Wilson <a href="https://twitter.com/RicWilson/status/1284637624863526917?s=20">performed</a> “Fight Like Ida B & Marsha P” while a crowd danced and sang along. The mood, said one attendee, was joyous.
              </p>
              <p>
                Following the rally, demonstrators marched to the southern end of Grant Park, where a phalanx of Chicago police stood guard around the 1933 bronze statue of Christopher Columbus, which was protectively cocooned in a plastic tarp. A small contingent of the crowd—shielding themselves with umbrellas, Hong Kong style—attempted to drive the police away with a barrage of water bottles, pop cans, and fireworks that CPD later claimed injured eighteen officers. The police initially retreated, and the crowd moved onto the ground around the statue. Some protesters covered Columbus’ pedestal with graffiti while others attempted to tear it down.
              </p>
              <p>
                Within less than twenty minutes, CPD returned in greater numbers, clad in riot gear. Officers then used force to clear the area: videos posted online and provided to the Weekly show police attacking nonviolent protesters, journalists, and bystanders alike with batons, pepper spray, and fists. Police slashed cyclists’ bicycle tires and <a href="https://blockclubchicago.org/2020/07/21/police-confiscated-dozens-of-bikes-after-columbus-statue-protests-owners-are-trying-to-get-them-back/">confiscated</a> dozens more bikes, also apparently at random. Multiple officers removed or obscured their badges. One video showed what appears to be a police handgun that had been dropped on the ground, unnoticed for nearly a minute in the melee. The police meted out injury to dozens of protesters, many of whom were left bloody and bruised; one reported a broken hand. At least one journalist <a href="https://twitter.com/colinbphoto/status/1284301680524382208?s=20">posted</a> a video of himself being shoved and chased by an irate police officer despite having CPD-issued press credentials.
              </p>
              <p>
                In the days following the attack, the Civilian Office of Police Accountability (COPA) <a href="https://www.chicagocopa.org/press/copa-provides-update-on-complaints-related-to-protest-in-grant-park/">announced</a> it is investigating more than twenty allegations of misconduct by CPD that evening, ranging from excessive force and unnecessary use of pepper spray to denying legal counsel to protesters, at least fourteen of whom were arrested.
              </p>
              <p>
                <span className="dropcap">M</span>iracle Boyd became the high-profile face of the police response to the protest after an officer knocked her front teeth out. Boyd, an eighteen-year-old CPS graduate, incoming DePaul University freshman and organizer with GoodKids MadCity, had spoken at the rally and was attempting to use a cell phone to record police arresting a protester when an officer struck her. Via a Freedom of Information Act request, the Weekly obtained <a href="https://www.documentcloud.org/documents/7014173-263-Daly-Response-Letter-Re-20-Complaints-Face.html">documents from COPA</a> that identify Nicholas Jovanovich as the officer who “punched [redacted] in the mouth, knocking out some of her teeth.” According to the <a href="https://cpdp.co/officer/13877/nicholas-jovanovich/">Citizens Police Data Project</a>, Jovanovich has at least twenty-two other recorded uses of force—more than ninety-six percent of officers in the department. At a July 20 press conference, Boyd <a href="https://blockclubchicago.org/2020/07/20/miracle-boyd-says-cop-who-hit-her-should-be-fired-no-matter-what-i-said-i-did-not-deserve-to-be-attacked/">said</a> the officer should be fired: “No matter what I said, I did not deserve to be attacked.”
              </p>
              <p>
                At another press conference the same day, Mayor Lori Lightfoot initially <a href="https://www.facebook.com/watch/live/?v=3353329444717620&ref=watch_permalink">blamed</a> the confrontation on “vigilantes” who came looking “for a fight.” CPD later showed surveillance videos that focused on the people in the crowd who threw objects at police during the initial confrontation. “That’s not peaceful protest, that’s anarchy,” Lightfoot said. “And we are going to put that down.”
              </p>
              <p>
                Citing violence in the neighborhoods—and after Chicago Fraternal Order of Police president John Catanzara sent him a letter requesting federal help—President Trump <a href="https://www.chicagotribune.com/news/criminal-justice/ct-chicago-trump-federal-agents-20200722-ki3dqmj3szgwvicltnoubvmmwu-story.html">threatened</a> to send federal agents to Chicago. Lightfoot initially said “we don’t need federal agents without insignia taking people off the street and holding them unlawfully.” (Unidentified federal agents in unmarked vans were seen arresting protesters in Portland.) But later that week, she assented to about 150 agents coming to assist ongoing investigations, pointedly drawing a distinction between them and “troops…who come from the military.”
              </p>
              <p>
                On July 23, Lightfoot ordered city workers to take down the Grant Park statue, a move she said was temporary; two other statues of Columbus elsewhere in the city were subsequently removed.
              </p>
              <br />
              <p>
                <span className="dropcap">T</span>he Weekly put out a call for first-person accounts from the June 17 protest and what followed. The mayor and Superintendent David Brown blamed the violence directed toward police that day on a rogue group of coordinated protestors, and framed the police counterattack as the inevitable response to violent, left-wing provocations. But according to accounts the Weekly received from dozens of people who were there, police violence was widespread, indiscriminate, and at times reckless. Police targeted peaceful protesters along with so-called vigilantes.
              </p>
              <p>
                In the pages that follow, we offer a collage of what happened when police returned to the Columbus statue, drawing on first-person accounts, video recordings, and publicly available data. (In the instances when speakers wished to remain anonymous, we respected that wish, though their identities are known to the Weekly.) As communities continue to organize resistance to and demand a reimagining of policing, we will seek to collect more first-person accounts of other key incidents in this remarkable moment of Chicago history.
              </p>
            </Col>
          </Row>
        </div>
      </>
    )
    }
  />
)

export default July17HeaderSection
