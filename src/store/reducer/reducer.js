import { SET_GRAPH, SORT_EVENTS_GRAPH } from "../types";

const defaulState = {
    items: [
        {status: 'Online', location: 'Warehouse 2', date: '02/09/20' + ' ' + new Date().toLocaleTimeString(), motionsDetector: 'Motion Detected', events: 'https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/816758EB-133D-4CA2-AEA3-F88D859AC6C0.svg', thumbs: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', videos: '2/2', source: 'Camera 4', tags: 'Fire', key: Math.random()},
        {status: 'Online', location: 'Warehouse 4', date: '02/09/22' + ' ' + new Date().toLocaleTimeString(), motionsDetector: 'Motion Detected', events: 'https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/816758EB-133D-4CA2-AEA3-F88D859AC6C0.svg', thumbs: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', videos: '2/2', source: 'Camera 4', tags: 'Fire', key: Math.random()},
        {status: 'Offline', location: 'Warehouse 1', date: '02/09/21' + ' ' + new Date().toLocaleTimeString(), motionsDetector: 'Motion Detected', events: 'https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/816758EB-133D-4CA2-AEA3-F88D859AC6C0.svg', thumbs: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', videos: '2/2', source: 'Camera 4', tags: 'Fire', key: Math.random()},
        {status: 'Online', location: 'Warehouse 3', date: '02/09/19' + ' ' + new Date().toLocaleTimeString(), motionsDetector: 'Motion Detected', events: 'https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/816758EB-133D-4CA2-AEA3-F88D859AC6C0.svg', thumbs: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', videos: '2/2', source: 'Camera 4', tags: 'Fire', key: Math.random()},
    ],
}

const sortEvents = (property) => {
    let sortOrder = 1;
    if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
    }
    return (a,b) => {
        if (sortOrder === -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}

export const reducer = (state = defaulState, action) => {
    switch (action.type) {
        case SET_GRAPH: 
            return {
                ...state, items: action.payload
            }
        case SORT_EVENTS_GRAPH:
            return {
                ...state.items.sort(sortEvents(action.payload))
            }
        default:
            return {
                ...state
            }
    }
};