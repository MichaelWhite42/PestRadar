import React from "react";
import Slider from "react-slick";

class EventsVideoSlider extends React.Component {
    render() {
        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            zIndex: 0,
        };
        return (
            <div className="events-video-slider">
                <h1 className='events-video-slider_header'>Videos (4)</h1>
                <Slider {...settings}>
                    <div className="events-video-slider_item">
                        <img className="events-video-slider_video" src='https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg' alt="img: Video"/>
                        <span className="events-video-slider_text">Video 1/4, Source: Camera 12</span>
                    </div>
                    <div className="events-video-slider_item">
                        <img className="events-video-slider_video" src='https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg' alt="img: Video"/>
                        <span className="events-video-slider_text">Video 1/4, Source: Camera 12</span>
                    </div>
                    <div className="events-video-slider_item">
                        <img className="events-video-slider_video" src='https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg' alt="img: Video"/>
                        <span className="events-video-slider_text">Video 1/4, Source: Camera 12</span>
                    </div>
                    <div className="events-video-slider_item">
                        <img className="events-video-slider_video" src='https://static.turbosquid.com/Preview/2019/02/14__08_05_01/Warehouse_interior_And_Exterior_3D_model_2_render4.jpg62F918EE-996B-40DD-8633-FDA78EEB6E86Default.jpg' alt="img: Video"/>
                        <span className="events-video-slider_text">Video 1/4, Source: Camera 12</span>
                    </div>
                </Slider>
            </div>
        );
    };
};

const EventsVideo = () => {
    return (
        <div className="events-video">
            <EventsVideoSlider />
        </div>
    );
};

export default EventsVideo;