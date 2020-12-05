import React, { Component } from 'react'
import { graphql } from 'gatsby'
import scrollama from 'scrollama'
import Img from "gatsby-image"

import SEO from '../components/seo'
import July17HeaderSection from '../components/july17headersection'
import SSWNameplate from '../components/sswnameplate'
import Footer from '../components/footer'
import '../css/typekit.css'
import '../css/custom.css'

const config = {
    style: 'mapbox://styles/apidae/ckba8sfpn01031irr88z2p3pz',
    showMarkers: true,
    theme: 'light',
    alignment: 'center',
    title: 'What Happened July 17?',
    subtitle: 'A document of the conflict in Grant Park',
    image: '/july-17-card.png'
}

const alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: props.chapters[0]
    };
  }

  componentDidMount() {
      const scroller = scrollama()
      window.addEventListener('resize', scroller.resize)
    }

    render() {
      const config = this.props
      const chapters = config.chapters
      const theme = config.theme
      const currentChapterID = this.state.currentChapter.id
      return (
        <div>
          <div />
          <July17HeaderSection
            config={config}
          />
          <div id="story" style={{backgroundColor: 'black'}}>
              {
                chapters.map(chapter =>
                  <Chapter key={chapter.id} theme={theme} {...chapter} currentChapterID={currentChapterID}/>
                )
              }
          </div>
          <Footer>
            <p className="footer">
              Read part one of this series:<br /> <a href="http://protesttimeline.southsideweekly.com/">What Happened on May 30?</a>
            </p>
            <p className="footer">
              <i><b>Jim Daley</b> is the Weekly’s politics editor. <b>Martha Bayne</b> is the Weekly's managing editor. <b>Jason Schumer</b> is the Weekly’s managing director. <b>Bea Malsky</b> is a lead developer at DataMade and a former editor-in-chief of the Weekly.</i>
            </p>
            <p className="footer">
              This project is part of an ongoing effort to collect stories, video, and photographs documenting moments of conflict between anti-racism protesters and Chicago police. If you have information you would like to share with us, please visit <a href="https://southsideweekly.com/george-floyd-protests/">this website</a>.
            </p>
            <p class="footer">
              Additional reporting:
            </p>
            <p class="footer" style={{ textAlign: 'left'}}>
              <a href="https://southsideweekly.com/videos-show-aggressive-police-response-may-30-protest/">
                An analysis by the Invisible Institute finds multiple likely violations of CPD’s new use of force policy.
              </a>
            </p>
            <p class="footer" style={{ textAlign: 'left' }}>
              <a href="https://southsideweekly.com/city-cited-chicago-freedom-school-feeding-protesters/">
                The Chicago Freedom School opened its doors to people who were trapped in the Loop after George Floyd protests and ordered pizza. Then police showed up.
              </a>
            </p>
            <p class="footer" style={{ textAlign: 'left' }}>
              <a href="https://southsideweekly.com/fact-checking-david-brown-august-15/">
                How accurate were the CPD superintendent’s assertions about the downtown protest?
              </a>
            </p>
            <p class="footer" style={{ textAlign: 'left' }}>
              <a href="https://southsideweekly.com/prosecuting-protesters-sa-candidates-differ-on-foxxs-progressive-approach/">
              Kim Foxx is dismissing certain misdemeanor charges against protesters and prosecuting those charged with felonies. Her opponent says Foxx is allowing crime to “intermix” with peaceful protesters.
              </a>
            </p>
            <p class="footer" style={{ textAlign: 'left' }}>
              <a href="https://southsideweekly.com/prosecuting-protesters-sa-candidates-differ-on-foxxs-progressive-approach/">
                Chicago police met Mexican feminist solidarity protesters with force, felony charges, and exactly what they were demonstrating against—male violence
              </a>
            </p>
            <br />
            <SSWNameplate />
            <p className="footer">
              <em><a href="https://southsideweekly.com/donate/">Donate today</a> to support South Side Weekly’s community-focused reporting</em>
            </p>
          </Footer>
        </div>
      )
    }
}

function Chapter({id, theme, full_width_image, title, image, description, media_embed, timestamp, currentChapterID}) {
    const classList = id === currentChapterID ? "step active" : "step";
    if (full_width_image) {
      return (
        <Img
          fluid={full_width_image.localFiles[0].childImageSharp.fluid}
        />
      )
    } else {
      return (
        <div
          id="features"
          className={alignments[config.alignment]}
          style={{
            paddingTop: '4vh',
            paddingBottom: '4vh'
        }}>
          <div
            id={id}
            className={classList}
            style={{
              paddingTop: '17vh',
              paddingBottom: '17vh',
              opacity: 1
          }}>
              <div className={theme} style={{padding: '35px 40px'}}>
                  { image &&
                    <Img
                      fluid={image.localFiles[0].childImageSharp.fluid}
                      className="mb-5"
                    />
                  }
                  { timestamp &&
                    <p className='byline'><b>{timestamp}</b></p>
                  }
                  { title &&
                      <h3 className="dek mt-3 mb-3">{title}</h3>
                  }
                  { description &&
                      <div
                        dangerouslySetInnerHTML={{ __html: description }}
                        style={{
                          padding: '0'
                        }}
                      />
                  }
                  {
                    media_embed &&
                    <div
                      dangerouslySetInnerHTML={{ __html: media_embed }}
                      style={{
                        padding: '0'
                      }}
                    />
                  }
              </div>
          </div>
        </div>
      )
    }
}

const IndexPage = ({data}) => {
  config.chapters = []
  data.allAirtable.nodes.forEach(record => {
    const chapter = {
      'id': `chapter-${record.data.id}`,
      'full_width_image': record.data.full_width_image,
      'title': record.data.title,
      'image': record.data.image,
      'description': record.data.description ? record.data.description.childMarkdownRemark.html : null,
      'media_embed': record.data.media_embed,
      'timestamp': record.data.timestamp
    }
    config.chapters.push(chapter)
  })

  return (
    <>
      <SEO
        title={config.title}
        description={config.subtitle}
        image={config.image}
      />
      <Index {...config}/>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query July17Query {
    allAirtable(
      sort: {fields: data___id, order: ASC},
      filter: {
        table: { eq: "(DON'T TOUCH) July 17th website" }
      }
    ) {
      nodes {
        data {
          id
          full_width_image {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  src
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  srcSet
                  sizes
                  presentationWidth
                  presentationHeight
                  originalName
                  originalImg
                  base64
                  aspectRatio
                }
              }
            }
          }
          title
          image {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 800) {
                  src
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  srcSet
                  sizes
                  presentationWidth
                  presentationHeight
                  originalName
                  originalImg
                  base64
                  aspectRatio
                }
              }
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          media_embed
          timestamp
        }
      }
    }
  }
`
