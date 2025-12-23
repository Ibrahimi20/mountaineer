import { Link } from 'react-router-dom';

import talks_Video from '../assets/prodssets/Podcast.mp4';

const TalksPodcastsSection = () => {
  return (
    <section className="py-5 talks-section">
      <div className="container">
        {/* ================= TALKS ================= */}
        <div className="row align-items-center g-4 mb-5 talk-row">
          {/* Video */}
          <div className="col-12 col-lg-6">
            <div className="media-wrapper">
              <video
                className="media-video"
                src={talks_Video}
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
          </div>

          {/* Text */}
          <div className="col-12 col-lg-6">
            <div className="content-box">
              <h3 className="fw-bold">Talks</h3>
              <p className="text-white">From the Mountains to Your Journey</p>
            </div>
          </div>

          {/* Learn more */}
          <div className="col-12 text-center">
            <Link to="/talks" className="learn-more-link">
              Learn more →
            </Link>
          </div>
        </div>

        {/* ================= PODCASTS ================= */}
        <div className="row align-items-center g-4 podcast-row flex-lg-row-reverse">
          {/* Video */}
          <div className="col-12 col-lg-6">
            <div className="media-wrapper">
              <video
                className="media-video"
                src={talks_Video}
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
          </div>

          {/* Text */}
          <div className="col-12 col-lg-6">
            <div className="content-box">
              <h3 className="fw-bold">Podcasts</h3>
              <p className="text-white">
                I believe in sharing the insights and experiences gained from my
                adventures—lessons in resilience, teamwork, and courage that
                apply to any challenge you face.
              </p>
            </div>
          </div>

          {/* Learn more */}
          <div className="col-12 text-center">
            <Link to="/podcast" className="learn-more-link">
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalksPodcastsSection;
