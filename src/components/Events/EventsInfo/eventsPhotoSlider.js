import React from "react";
import Slider from "react-slick";

export default class EventsPhotosSlider extends React.Component {
    render() {
        const {data} = this.props;

        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 5.5,
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
                    }
                }
            ]
        }
        return (
            <div className="eventsPhotoSlider">
                <h2 className='eventsPhotoSlider_header'>Photo</h2>
                <Slider {...settings} className="slider">
                    {data.map(item => (
                        <div className="eventsPhotoSlider_item" key={item.key}>
                            <img className="eventsPhotoSlider_photo" src={item.img} alt="img: Photo"/>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}