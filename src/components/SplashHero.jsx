import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from '../assets/video/k2-winter-nimsdai-d.mp4';

const SplashHero = () => {
  return (
    <section
      id="section-1"
      className="position-relative text-white"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      {/* ---- BACKGROUND VIDEO ---- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute w-100 h-100"
        style={{
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* ---- DARK OVERLAY ---- */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background: 'rgba(0,0,0,0.45)',
          zIndex: 2,
        }}
      ></div>

      {/* ---- TEXT CONTENT ---- */}
      <div
        className="container h-100 d-flex flex-column justify-content-center  align-items-center text-start"
        style={{ position: 'relative', zIndex: 3 }}
      >
        {/* Title */}
        <h1
          className="fw-bold "
          style={{
            fontSize: '3rem',
            color: '#ffffff',
            textShadow: '0px 4px 10px rgba(0,0,0,0.7)',
          }}
        >
          Climbing high.
        </h1>
        <h1
          className="fw-bold"
          style={{
            fontSize: '3rem',
            color: '#ffffff',
            textShadow: '0px 4px 10px rgba(0,0,0,0.7)',
          }}
        >
          Running far.
        </h1>
        <h1
          className="fw-bold"
          style={{
            fontSize: '3rem',
            color: '#ffffff',
            textShadow: '0px 4px 10px rgba(0,0,0,0.7)',
          }}
        >
          Learning always.
        </h1>

        {/* CTA Button */}
        <a
          href="/My_Story"
          className="btn mt-4 px-4 py-2"
          style={{
            backgroundColor: 'orange',
            color: 'white',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '500',
            boxShadow: '0px 3px 12px rgba(0,0,0,0.3)',
            transition: '0.3s',
          }}
        >
          Find out more
        </a>
      </div>
    </section>
  );
};

export default SplashHero;
