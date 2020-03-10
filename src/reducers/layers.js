const INITIAL_STATE =  [
    {
      id: 'geojson',
      name: 'Порты geojson',
      type: 'geojson',
      description: 'Слой добавляется в виде маркеров из файла формата geojson',
      options: {
        url: './places.json',
        cluster: true
      },
      visible: false,
      toggleable: true
    },
    {
      id: 'wind',
      name: 'Ветер',
      type: 'velocityLayer',
      description: "Слой добавляется в виде анимации из файла формата json. Подробнее смотри тут https://github.com/danwild/leaflet-velocity",
      options: {
        url: './wind.json'
      },
      visible: false,
      toggleable: true
    },
    {
      id: 'video',
      name: 'Видео',
      type: 'videoOverlay',
      description: 'Слой добавляется в виде видео по ссылке',
      options: {
          play: true,
          url: 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
          bounds: [[32, -130],[13, -100]]
      },
      visible: false,
      toggleable: true
    }
]

export default function (state=INITIAL_STATE, action) {
    // console.log(action);
    switch (action.type) {
        case 'TOGGLE_LAYER':
            return state.map(l => {
                if (l.id === action.payload.id) {
                    l.visible = action.payload.visibility;
                }
                return l;
            })
        default:
            return state
    };
}