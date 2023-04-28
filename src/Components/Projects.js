import React, { useState } from 'react'
import "./main.css";
import Banner from '../Components/Banner'
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from './redux/action';
import { useAuth0 } from "@auth0/auth0-react";
import { Bars, ColorRing } from 'react-loader-spinner'

function Projects(props) {

    const notify = () => toast("Product Added To Wishlist!!!");
    const queryParameters = new URLSearchParams(window.location.search);
    const type = queryParameters.get("search");

    const { isAuthenticated, user } = useAuth0();

    let dispatch = useDispatch();
    const [state, setState] = useState({
        user_email: "",
        product: {
            id: "",
            label: "",
            image: ""
        }
    });

    const getValues = (pid, plabel, pimage) => {
        // if (pid || plabel || pimage) {
        //     console.log('notAdded');
        // }
        // else {
        //     console.log('Added');
        setState({
            user_email: isAuthenticated && user.name,
            product: {
                id: pid,
                label: plabel,
                image: pimage
            }
        });
        // }
        console.log(state)
        handleSubmit();

    }

    const handleSubmit = () => {
        dispatch(addToCart(state));
        notify();
    }

    return (
        <>
            <main id="main">
                <Banner />
                <section id="projects" className="projects">
                    <div className="container" data-aos="fade-up">

                        <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

                            {type ? <h2 className='text-center'>Search Results for "{type}"</h2> : <h2 className='text-center pb-4'>Pizza</h2>}
                            {/* <h2>Pizza</h2> */}

                            {/* <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
                                <li data-filter=".filter-for-sale">SALE</li>
                                <li data-filter=".filter-for-rent">RENT</li>
                            </ul> */}

                            <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                                {!props.loading ? props.dataList.map((item, key) => {
                                    let parts = item.recipe.uri.split("#");
                                    return (
                                        <div className={`col-lg-3 col-md-6 portfolio-item filter-${item.recipe.cuisineType}`} key={key}>
                                            <div className="portfolio-content h-100">
                                                <img src={item.recipe.image} className="img-fluid" alt="" />
                                                <div className="portfolio-info">
                                                    <h4>{item.recipe.cuisineType}</h4>
                                                    <p>{item.recipe.label}</p>
                                                    <a href={item.recipe.image} title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className=" preview-link"><i className="fa-sharp fa-solid fa-magnifying-glass-plus"></i></a>

                                                    <a href={parts[1]} title="More Details" className="details-link"><i className="fa-solid fa-link"></i></a>

                                                    {isAuthenticated ? (
                                                        <a onClick={() => getValues(parts[1], item.recipe.label, item.recipe.image)} title="Add to wishlist" className="wishlist-icon"><i className="fa-solid fa-heart"></i></a>
                                                    ) : ''}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : <Bars
                                    wrapperClass='loader'
                                    height="80"
                                    width="80"
                                    color="#feb900"
                                    ariaLabel="circles-loading"
                                    visible={true}
                                />}
                            </div>
                        </div>
                    </div>
                </section>

                <ToastContainer />
            </main>
        </>
    )
}

export default Projects
