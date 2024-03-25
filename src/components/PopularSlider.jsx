import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const PopularSlider = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
            const data = await api.json();
            setData(data.meals);
        }

        fetchdata();
    }, [])

    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };


    return (
        <>


            <div className="slider-container" style={{
                height:"50vh",
                width:"90%",
                margin:"auto",
                // backgroundColor:"yellow"
            }}>
                <Slider {...settings} style={{
                    margin:"1rem"
                }} >
                    {
                        data.map((meal) => {
                            return (
                                <Link to={`/${meal.idMeal}`} key={meal.idMeal}>
                                <div className='slider'>
                                    <img src={meal.strMealThumb} alt="" style={{ width: "18rem",height:"17rem" }} />
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

export default PopularSlider
