import React from "react";
import Slider from "react-slick";

export default class EventsPhotosSlider extends React.Component {
    render() {
        const {data} = this.props;

        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4.5,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3.5,
                    },
                },
            ],
        };
        return (
            <div className="events-photo_slider">
                <h2 className='events-photo_slider_header'>Photo {data.length}</h2>
                <Slider {...settings} className="slider">
                    {data.map(item => (
                        <div className="events-photo_slider_item" key={item.key}>
                            <img className="events-photo_slider_photo" src={item.img} alt="img: Photo"/>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    };
};