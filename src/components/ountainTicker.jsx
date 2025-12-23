import React from 'react';
import { Container } from 'react-bootstrap';

const mountains = [
  { name: 'Kilimanjaro', altitude: '5695m m' },
  { name: 'Aconcagua', altitude: '6962m' },
  { name: 'Elbrus', altitude: '5645 m' },
  { name: 'Lobuche', altitude: '6119 m' },
  { name: 'Manalsu', altitude: '8163 m' },
];

const MountainTicker = () => {
  return (
    //
    <div
      className="mountain-ticker "
      style={{
        zIndex: 1500,
      }}
    >
      <Container fluid>
        <div className="ticker-wrapper">
          <div className="ticker-track">
            {[...mountains, ...mountains].map((m, index) => (
              <div className="ticker-item" key={index}>
                <span className="mountain-name">{m.name}</span>
                <span className="mountain-altitude">{m.altitude}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MountainTicker;
