import * as React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <>
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a href="/shop-by/Lorem"><img src={process.env.PUBLIC_URL + "/images/Carousel1.png"} className="d-block w-100" alt="Carousel 1" /></a>
                    </div>
                    <div className="carousel-item">
                        <a href="/shop-by/Ipsum"><img src={process.env.PUBLIC_URL + "/images/Carousel2.png"} className="d-block w-100" alt="Carousel 2" /></a>
                    </div>
                    <div className="carousel-item">
                        <a href="/shop-by/Doler"><img src={process.env.PUBLIC_URL + "/images/Carousel3.png"} className="d-block w-100" alt="Carousel 3" /></a>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col mid-category">
                        <a href="/clothing/dresses">
                            <img className="mid-category-img" src={process.env.PUBLIC_URL + "/images/Carousel1.png"} width="150" />
                        </a>
                    </div>
                    <div className="col mid-category">
                        <a href="/clothing/dresses">
                            <img className="mid-category-img" src={process.env.PUBLIC_URL + "/images/Carousel2.png"} width="150" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col mid-category">
                        <a href="/clothing/dresses">
                            <img className="mid-category-img" src={process.env.PUBLIC_URL + "/images/Carousel3.png"} width="150" />
                        </a>
                    </div>
                    <div className="col mid-category">
                        <a href="/clothing/dresses">
                            <img className="mid-category-img" src={process.env.PUBLIC_URL + "/images/Carousel1.png"} width="150" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}