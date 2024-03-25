import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import TrandingSlider from './TrandingSlider';
const Category = () => {
    const {name} =useParams();

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const api = await fetch(`https:www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
            const data = await api.json();
            setData(data.meals);
        }

        fetchdata();
    }, [name])
  return (
   <>
   <Navbar></Navbar>
   <div style={{
    width:'90%',
    margin:'auto',
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit,minmax(20rem,1fr))',
    gridGap:'1rem',
    marginTop:'3rem'
   }}>
   {
    data.map((meal)=>{
        return(<>
         <Link to={`/${meal.idMeal}`} key={meal.idMeal} className='link'>
        <div style={{textAlign:'center'}}>
            <div className="img">
                <img src={meal.strMealThumb} alt="" style={{width:'16rem'}} />
            </div>
            <h2>{meal.strMeal}</h2>
        </div>
        </Link>
        </>);
    })
   }
   </div>
   <TrandingSlider></TrandingSlider>
   </>
  )
}

export default Category
