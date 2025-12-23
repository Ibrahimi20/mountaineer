import { Container, Row, Col } from 'react-bootstrap';

import climb from '../assets/prodssets/Climb_with_me.jpeg';
import run from '../assets/prodssets/Run_with_me.jpeg';

const ExploreSection = () => {
  return (
    <section className="explore-section bg-black f">
      <Container>
        {/* Title */}
        <h2 className="section-title mb-5 text-white">EXPLORE OUR SERVICES</h2>

        {/* ROW 1 : Image left / Text right */}
        <Row className="align-items-center mb-5">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <img
              src={climb}
              alt="Explore mountains"
              className="explore-image"
            />
          </Col>

          <Col xs={12} md={6}>
            <h4 className="explore-subtitle text-white">Climb with me </h4>
            <p className="explore-text text-white">
              With years of experience in high-altitude climbing and trail
              running, I’ll help you prepare for your own adventure — step by
              step. Together, we’ll work on it.
            </p>
          </Col>
        </Row>

        {/* ROW 2 : Text left / Image right */}
        <Row className="align-items-center flex-md-row-reverse">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <img src={run} alt="run with me" className="explore-image" />
          </Col>

          <Col xs={12} md={6}>
            <h4 className="explore-subtitle text-white">Run with me </h4>
            <p className="explore-text text-white">
              Wherever you are in your running journey, I’ll meet you there.
              With experience in full marathons and ultra-trail races, I
              understand the physical, mental, and emotional challenges—as well
              as the triumphs—that come with every single step.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExploreSection;
