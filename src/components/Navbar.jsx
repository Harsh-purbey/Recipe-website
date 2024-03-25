import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [search,setSearch]=useState('');
  const navigate =useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate(`/search/${search}`)
    setSearch('');
  }
  return (
    <>
      <div className="nav">
        <div className="left">
          <Link to={'/'} className='link'>
          <h2>RECIPE</h2>
          </Link>
        </div>
        <div className="search">
          <form onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          </form>
        </div>
        <div className="right">
          <Link className='link' to={`/category/${'Indian'}`}>
            <div>Indian</div>
          </Link>
          <Link className='link' to={`/category/${'American'}`}>
            <div>American</div>
          </Link>
          <Link className='link' to={`/category/${'British'}`}>
            <div>British</div>
          </Link>
          <Link className='link' to={`/category/${'Chinese'}`}>
            <div>Chinese</div>
          </Link>
          <Link className='link' to={`/category/${'Thai'}`}>
            <div>Thai</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
