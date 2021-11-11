import React from "react";

const VideoCard = () => {
    const array = [
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg'},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg'},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg'},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg'},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg'},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg'},
        {videoImg: 'https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg'},
    ];

    return (
        <div className="cardVideo">
            <div className="cardVideo_info">
                <p className="cardVideo_info--item"> Modules Registered: {}</p>
                <p className="cardVideo_info--item">Online: {}</p>
                <p className="cardVideo_info--item cardVideo_info--item-red">Offline: {}</p>
            </div>
            <div className="cardVideo_content">
                {array.map((item) => {
                    return (
                        <img src={item.videoImg} />
                    )
                })}
            </div>
        </div>
    )
}

export default VideoCard;