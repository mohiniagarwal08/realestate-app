import React from 'react'
import "./main.css";


function Banner() {
    return (
        <>
            <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: " url('../bg2.jpg')" }}>

                <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                    <form className='search-form flex align-center'>
                        <input type="text" className='form-control-input text-dark-gray fs-15' placeholder='Search here ...' name='search' />
                        <button type="submit" className='form-submit-btn text-white text-uppercase fs-14'>
                        <i className="icon-icon fa-sharp fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <h5>Search For Your Favourite Cuisines</h5>
                    <ol>
                        <li><a href="">Personalize Your Experience</a></li>
                    </ol>

                </div>

            </div>
        </>
    )
}

export default Banner
