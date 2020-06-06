import React, { Component } from 'react';
import '../components/app.css';
import config from '../components/config.js';
import mapboxgl from 'mapbox-gl';
import scrollama from 'scrollama';

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

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChapter: props.chapters[0]
        };
        // this.setState = this.setState.bind(this);
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
        const theme = config.theme;
        const currentChapterID = this.state.currentChapter.id;
        return (
            <div>
                <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
                <div id="story">
                    {config.title &&
                        <div id="header" className={theme}>
                            <h1>{config.title}</h1>
                            {config.subtitle &&
                                <h2>{config.subtitle}</h2>
                            }
                            {config.byline &&
                                <p>{config.byline}</p>
                            }
                        </div>
                    }
                    <div id="features" className={alignments[config.alignment]}>
                        {
                            chapters.map(chapter =>
                                <Chapter key={chapter.id} theme={theme} {...chapter} currentChapterID={currentChapterID}/>
                            )
                        }
                    </div>
                    {config.footer &&
                        <div id="footer" className={theme}>
                            <p>{config.footer}</p>
                        </div>
                    }
                </div>
            </div>
        );
    }

}

function Chapter({id, theme, title, image, description, currentChapterID}) {
    const classList = id === currentChapterID ? "step active" : "step";
    return (
        <div id={id} className={classList}>
            <div className={theme}>
                { title &&
                    <h3 className="title">{title}</h3>
                }
                { image &&
                    <img src={image} alt={title}></img>
                }
                { description &&
                    <p>{description}</p>
                }
            </div>
        </div>
    )
}

const IndexPage = ({data}) => {
  config.chapters = []
  data.allAirtable.nodes.forEach(record => {
    const chapter = {
      'id': record.data.id,
      'title': record.data.title,
      'image': record.data.image,
      'description': record.data.description,
      'location': {
        'center': [record.data.latitude, record.data.longitude],
        'zoom': record.data.zoom,
        'pitch': record.data.pitch,
        'bearing': record.data.bearing
      },
      'onChapterEnter': record.data.onChapterEnter ? record.data.onChapterEnter : [],
      'onChapterExit': record.data.onChapterExit ? record.data.onChapterExit : []
    }
    config.chapters.push(chapter)
  })

  return (
    <Index {...config}/>
  )
}

export default IndexPage

export const query = graphql`
  query ConfigQuery {
    allAirtable(sort: {fields: id, order: DESC}) {
      nodes {
        data {
          id
          description
          title
          image
          latitude
          longitude
          pitch
          bearing
          zoom
        }
      }
    }
  }
`
