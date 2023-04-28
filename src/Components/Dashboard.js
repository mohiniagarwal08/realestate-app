import React, { useEffect, useState } from 'react'
import "./main.css";
import { useDispatch, useSelector } from 'react-redux';

import { loadCart } from './redux/action';
import { useAuth0 } from '@auth0/auth0-react';
import { Bars } from 'react-loader-spinner';

function Dashboard() {
    const [loading, setLoading] = useState(true);


    let dispatch = useDispatch();
    const { carts } = useSelector(state => state.carts);
    // console.log(carts, 'bn');

    useEffect(() => {
        setLoading(true);
        dispatch(loadCart());
        setLoading(false);
    }, []);

    const { isAuthenticated, user } = useAuth0();
    // console.log(isAuthenticated && user);

    return (
        <>
            <main id="main">
                <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: " url('../bg.jpg')" }}>
                    <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                    <h4>Welcome ! {isAuthenticated && user.nickname}</h4>
                    </div>
                </div>
                
                <section id="blog" className="blog">
                    <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                        <h3>My Saved Recipes</h3>
                        <div className="row gy-4 posts-list">
                            {!loading ? carts ? carts.map((item, key) => {
                                if (item.product.image && (isAuthenticated && item.user_email == user.name)) {
                                    return (
                                        <div className="col-xl-3 col-md-6" key={key}>
                                            <div className="post-item position-relative h-100">

                                                <div className="post-img position-relative overflow-hidden">
                                                    <img src={item.product.image} className="img-fluid" alt="" />
                                                    <span className="post-date">{item.product.label}</span>
                                                </div>



                                            </div>
                                        </div>
                                    )
                                }
                            }) : ('') : <Bars
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


export default Dashboard
