import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import sweattshirt_black from '../assets/prodssets/sweatshirt_black.jpeg';
import sweattshirt_white from '../assets/prodssets/sweatshirt_white.jpeg';
import tshirt_ from '../assets/prodssets/T-shirt1.jpeg';
import { FiArrowRight } from 'react-icons/fi';

export default function ShopSection() {
  return (
    <section className="products-section bg-black ">
      <div className="container text-white">
        {/* 🔹 Section Title */}
        <div className="row ">
          <div className="col text-center">
            <h2 className="fw-bold section-title ">
              <span className="title-underline animate-underline">
                Featured
              </span>{' '}
              Products
            </h2>
            <p className="text-white">
              Wear your passion with purpose—customized T-shirts and sweatshirts
              that help fund and support mountaineering dreams
            </p>
          </div>
        </div>

        {/* 🔹 Product Cards */}
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card product-card h-100">
              <div className="product-img-wrapper">
                <img
                  src={sweattshirt_black}
                  className="card-img-top"
                  alt="sweattshirt_black"
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">sweattshirt black</h5>
                <p className="card-text text-muted">
                  High-quality equipment designed for climbers and runner.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card product-card h-100">
              <div className="product-img-wrapper">
                <img
                  src={sweattshirt_white}
                  className="card-img-top"
                  alt="sweattshirt_white"
                />
              </div>

              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">sweattshirt white</h5>
                <p className="card-text text-muted">
                  High-quality equipment designed for climbers and runner.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card product-card h-100">
              <div className="product-img-wrapper">
                <img src={tshirt_} className="card-img-top" alt="tshirt_" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">black tshirt</h5>
                <p className="card-text text-muted">
                  High-quality equipment designed for climbers and runner.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Learn More Link */}
        <div className="row mt-3">
          <div className="col text-center">
            <Link to="/shop" className="learn-more">
              <span className="icon-circle">
                <FiArrowRight />
              </span>
              <span className="learn-text">Learn more</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
