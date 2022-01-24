import React from "react";
import { useSelector } from "react-redux";

const VideoCard = () => {
    const array = [
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', key: Math.random()},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', key: Math.random()},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', key: Math.random()},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', key: Math.random()},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', key: Math.random()},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', key: Math.random()},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg', key: Math.random()},
    ];
    const itemsData = useSelector(state => state.reducer.items);
    const data = [...itemsData];
    
    let online = 0;
    let offline = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === 'Online') {
        online++;
      } else {
        offline++
      };
    };

    return (
        <div className="video-card">
            <div className="video-card_info">
                <p className="video-card_info--item"> Modules Registered: {data.length}</p>
                <p className="video-card_info--item">Online: {online}</p>
                <p className="video-card_info--item video-card_info--item-red">Offline: {offline}</p>
            </div>
            <div className="video-card_content">
                {array.map((item) => {
                    return (
                        <div className="video-box" key={item.key}>
                            <img src={item.videoImg} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default VideoCard;