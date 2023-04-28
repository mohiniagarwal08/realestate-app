import React, { useEffect, useState } from 'react'
import "./main.css";
import { fetchData } from '../FetchApi';
import { Bars } from 'react-loader-spinner';

function ProjectList(props) {
    const queryParameters = window.location.pathname;
    let id = queryParameters.split("_");

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchData(null, id[1]).then((response) => {
            setLoading(true);
            setData(response);
            setLoading(false);
            console.log(response, loading);
        });
    }, []);
    return (
        <>
            <main id="main">
                <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: " url('../bg.jpg')" }}>
                    <div className="container text-white position-relative d-flex flex-column align-items-center" data-aos="fade">
                        <h4>{!loading ? data.recipe ? data.recipe.label : '' : ''}</h4>
                    </div>
                </div>
                <section id="blog" className="blog">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row g-5">
                            {!loading ?
                                <>
                                    <div className="col-lg-8">
                                        <article className="blog-details">
                                            <div className="detail-img post-img">
                                                <img src={!loading ? data.recipe.images.LARGE ? data.recipe.images.LARGE.url : data.recipe.image : ''} alt="" className="img-fluid" />
                                            </div>

                                            <h2 className="title">{!loading ? data.recipe ? data.recipe.label : '' : ''}</h2>
                                            <div className="meta-bottom mt-2">
                                                <i className="bi bi-folder"></i>
                                                <ul className="cats">
                                                    <li><i className="fa-solid fa-fork-knife"></i>{!loading ? data.recipe ? data.recipe.cuisineType : '' : ''}</li>
                                                </ul>
                                                <ul className="cats">
                                                    <li><i className="fa-light fa-book-open-cover"></i>{!loading ? data.recipe ? data.recipe.dishType : '' : ''}</li>
                                                </ul>
                                            </div>

                                            <div className="sidebar ingredients mt-4">

                                                <div className="sidebar-item recent-posts">
                                                    <h3 className="sidebar-title">Ingredients</h3>

                                                    <div className="mt-3 meta-bottom">
                                                        {!loading ? data.recipe ? data.recipe.ingredients.map((item, key) => {
                                                            return (
                                                                <>
                                                                    <div className="post-item mt-3" key={key}>
                                                                        <img src={item.image} alt="" />
                                                                        <div>
                                                                            <h4><a href="#">{item.text}</a></h4>
                                                                            <span>Quantity : {item.quantity}</span>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        }) : '' : ''}
                                                    </div>

                                                </div>
                                            </div>

                                        </article>
                                    </div>

                                    <div className="col-lg-4">

                                        <div className="sidebar">
                                            <div className="sidebar-item">
                                                <h3 className="sidebar-title">Health Benefits</h3>
                                                <ul className="mt-3">
                                                    {!loading ? data.recipe ? data.recipe.healthLabels.map((item, key) => {
                                                        return (
                                                            <>
                                                                <li key={key}>{item}</li>
                                                            </>
                                                        )
                                                    }) : '' : ''}
                                                </ul>
                                            </div>
                                            <div className="sidebar-item tags">
                                                <h3 className="sidebar-title">Nutrients</h3>
                                                <ul className="mt-3">
                                                    {!loading ? data.recipe ? data.recipe.digest.map((item, key) => {
                                                        return (
                                                            <>
                                                                <li><a href="#">{item.label}</a></li>
                                                            </>
                                                        )
                                                    }) : '' : ''}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </> : <Bars
                                    wrapperClass='loader'
                                    height="80"
                                    width="80"
                                    color="#feb900"
                                    ariaLabel="circles-loading"
                                    visible={true}
                                />}
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default ProjectList
