var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Trump Tower Protest Timeline',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By X, Y, and Z',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: 'test.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-87.62708, 41.88827],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: 'test.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-87.62656, 41.88912],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};

export default config;
