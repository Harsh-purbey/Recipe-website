import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const TrandingSlider = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const api = await fetch("https:www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
            const data = await api.json();
            setData(data.meals);
        }

        fetchdata();
    }, [])

    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };


    return (
        <>


            <div className="slider-container" style={{
                height:"25vh",
                width:"95%",
                margin:"auto",
                overflowX:'hidden'
            }}>
                <Slider {...settings} style={{
                    margin:"1rem"
                }} >
                    {
                        data.map((meal) => {
                            return (
                                <Link to={`/${meal.idMeal}`} key={meal.idMeal}>
                                <div className='slider2'>
                                    <img src={meal.strMealThumb} alt="" style={{ width: "10rem",height:"7rem" }} />
                                </div>
                                </Link>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}




export default TrandingSlider
