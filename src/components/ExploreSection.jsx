import { Container, Row, Col } from 'react-bootstrap';

import climb from '../assets/prodssets/images/climbing.png';
import run from '../assets/prodssets/images/running.png';

const ExploreSection = () => {
  return (
    <section className="explore-section bg-black m-0 p-0">
      {/* 🔥 Fond full width */}
      <Container fluid className="p-0">
        {/* 🎯 Contenu centré */}
        <Container className="px-3 px-md-4">
          {/* Title */}
          <h2 className="section-title text-white mb-2 py-2">
            <span className="title-underline animate-underline">EXPLORE</span>{' '}
            OUR SERVICES
          </h2>

          {/* ROW 1 */}
          <Row className="g-0 align-items-stretch">
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <img
                src={climb}
                alt="Explore mountains"
                className="explore-image"
              />
            </Col>

            <Col xs={12} md={6} className="d-flex flex-column p-3">
              <h4 className="explore-subtitle text-white mb-0">
                Climb with me
              </h4>

              <div className="flex-grow-1 d-flex align-items-center">
                <p className="explore-text text-white mb-0 text-center text-md-start">
                  With years of experience in high-altitude climbing and trail
                  running, I’ll help you prepare for your own adventure — step
                  by step. Together, we’ll work on it.
                </p>
              </div>
            </Col>
          </Row>

          {/* ROW 2 */}
          <Row className="g-0 align-items-stretch flex-md-row-reverse">
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <img src={run} alt="Run with me" className="explore-image" />
            </Col>

            <Col xs={12} md={6} className="d-flex flex-column p-3">
              <h4 className="explore-subtitle text-white mb-0">Run with me</h4>

              <div className="flex-grow-1 d-flex align-items-center">
                <p className="explore-text text-white mb-0 text-center text-md-start">
                  Wherever you are in your running journey, I’ll meet you there.
                  With experience in full marathons and ultra-trail races, I
                  understand the physical, mental, and emotional challenges—as
                  well as the triumphs—that come with every single step.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default ExploreSection;
