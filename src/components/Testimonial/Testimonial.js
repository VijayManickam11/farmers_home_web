import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import Vator from '../../images/testimonial/vector.png'
import Img1 from '../../images/testimonial/img-1.jpg'
import Img2 from '../../images/testimonial/img-2.jpg'
import Img3 from '../../images/testimonial/img-3.jpg'


const testimonials = [
    {
        id: '01',
        img: Img1,
        Des: " “It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable.The generated lorem ipsum is therefore always free from repetition sentence structures, tom generate lorem ipsum which looks..",
        title: 'Modern Sater',
        sub: "CEO of Digital Studio",
    },

    {
        id: '02',
        img: Img2,
        Des: " “It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable.The generated lorem ipsum is therefore always free from repetition sentence structures, tom generate lorem ipsum which looks..",
        title: 'Marry Jenefer',
        sub: "CEO Of Golden Bravo",
    },
    {
        id: '03',
        img: Img3,
        Des: " “It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable.The generated lorem ipsum is therefore always free from repetition sentence structures, tom generate lorem ipsum which looks..",
        title: 'William Robert',
        sub: "CEO Of Bexima",
    },



]




const Testimonial = (props) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (

        <div className="orico-testimonial-area section-padding">
            <div className="t-shape"><img src={Vator} alt="" /></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <SectionTitle subtitle={'CLIENT TESTIMONIAL'} title={'happy customer'} />
                    </div>
                </div>
                <div className="orico-testimonial-wrap">
                    <div className="testimonial-slider">
                        <Slider {...settings}>
                        {testimonials.map((testimonial, item) => (
                                <div className="orico-testimonial-item" key={item}>
                                    <div className="orico-testimonial-img">
                                        <img src={testimonial.img} alt="" />
                                    </div>
                                    <div className="orico-testimonial-content">
                                        <p>{testimonial.Des}</p>
                                        <h2>{testimonial.title}</h2>
                                        <span>{testimonial.sub}</span>
                                    </div>
                                </div>
                        ))}
                        </Slider>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;







