import React, { Component } from 'react'
import { graphql } from 'gatsby'
import mapboxgl from 'mapbox-gl'
import scrollama from 'scrollama'
import Img from "gatsby-image"

import SEO from '../components/seo'
import HeaderSection from '../components/headersection'
import SSWNameplate from '../components/sswnameplate'
import Footer from '../components/footer'
import '../css/typekit.css'
import '../css/custom.css'

const config = {
    style: 'mapbox://styles/apidae/ckba8sfpn01031irr88z2p3pz',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'What Happened May 30?',
    subtitle: 'A document of escalating conflict in downtown Chicago'
}

const layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

const alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
      url: url + suffix
    }
}

const getChapterTransition = (onChapterString) => {
  const split = onChapterString.split(',')
  return [{
    layer: split[0].toString(),
    opacity: parseFloat(split[1])
  }]
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: props.chapters[0]
    };
  }

  componentDidMount() {
      const config = this.props
      const chapters = config.chapters
      const mapStart = chapters[0].location

      mapboxgl.accessToken = process.env.GATSBY_MAPBOX_KEY

      const map = new mapboxgl.Map({
          container: this.mapContainer,
          style: config.style,
          center: mapStart.center,
          zoom: mapStart.zoom,
          pitch: mapStart.pitch,
          bearing: mapStart.bearing,
          transformRequest: transformRequest
      });

      const marker = new mapboxgl.Marker();
      if (config.showMarkers) {
        marker.setLngLat(mapStart.center).addTo(map);
      }

      function getLayerPaintType(layer) {
        var layerType = map.getLayer(layer).type;
        return layerTypes[layerType];
      }

      function setLayerOpacity(layer) {
        var paintProps = getLayerPaintType(layer.layer);
        paintProps.forEach(function(prop) {
            map.setPaintProperty(layer.layer, prop, layer.opacity);
        });
      }

      const setState = this.setState.bind(this);

      // instantiate the scrollama
      const scroller = scrollama();

      map.on('load', function () {

        // setup the instance, pass callback functions
        scroller
        .setup({
          step: '.step',
          offset: 0.5,
          progress: true
        })
        .onStepEnter(response => {
          const chapter = chapters.find(chap => chap.id === response.element.id);
          setState({currentChapter:chapter});
          map.flyTo(chapter.location);
          if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
          }
          if (chapter.onChapterEnter) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
          }
        })
        .onStepExit(response => {
          var chapter = chapters.find(chap => chap.id === response.element.id);
          if (chapter.onChapterExit) {
            chapter.onChapterExit.forEach(setLayerOpacity);
          }
        });
      });

      window.addEventListener('resize', scroller.resize);
    }

    render() {
      const config = this.props
      const chapters = config.chapters
      const theme = config.theme
      const currentChapterID = this.state.currentChapter.id
      return (
        <div>
          <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
          <HeaderSection
            config={config}
          />
          <div id="story">
              {
                chapters.map(chapter =>
                  <Chapter key={chapter.id} theme={theme} {...chapter} currentChapterID={currentChapterID}/>
                )
              }
          </div>
          <Footer>
            <p className="footer">
              Read part two of this series:<br /> <a href="http://protesttimeline.southsideweekly.com/july-17">What Happened July 17?</a>
            </p>
            <p className="footer">
              <i><b>Martha Bayne</b> is the Weekly's managing editor. <b>Jason Schumer</b> is the Weekly’s managing director. <b>Bea Malsky</b> is a lead developer at DataMade and a former editor-in-chief of the Weekly.</i>
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
            <p class="footer">
              <em><a href="https://southsideweekly.com/donate/">Donate today</a> to support South Side Weekly’s community-focused reporting</em>
            </p>
          </Footer>
        </div>
      )
    }
}

function Chapter({id, theme, full_width_image, title, image, description, media_embed, currentChapterID}) {
    const classList = id === currentChapterID ? "step active" : "step";
    if (full_width_image) {
      return (
        <Img
          fluid={full_width_image.localFiles[0].childImageSharp.fluid}
        />
      )
    } else {
      return (
        <div id="features" className={alignments[config.alignment]}>
          <div id={id} className={classList}>
              <div className={theme}>
                    { image &&
                      <Img
                        fluid={image.localFiles[0].childImageSharp.fluid}
                        className="mb-5"
                      />
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
      'location': {
        'center': [record.data.longitude, record.data.latitude],
        'zoom': record.data.zoom,
        'pitch': record.data.pitch,
        'bearing': record.data.bearing
      },
      'onChapterEnter': record.data.onChapterEnter ? getChapterTransition(record.data.onChapterEnter) : [],
      'onChapterExit': record.data.onChapterExit ? getChapterTransition(record.data.onChapterExit) : []
    }
    config.chapters.push(chapter)
  })

  return (
    <>
      <SEO title={config.title} />
      <Index {...config}/>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query ConfigQuery {
    allAirtable(
      sort: {fields: data___id, order: ASC},
      filter: {
        table: { eq: "(DON'T TOUCH) May 30th website" }
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
          latitude
          longitude
          pitch
          bearing
          zoom
          onChapterEnter
          onChapterExit
        }
      }
    }
  }
`
