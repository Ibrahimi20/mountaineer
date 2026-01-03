import React from 'react';
import { Container } from 'react-bootstrap';

const mountains = [
  { name: 'Kilimanjaro', altitude: '5695 m' },
  { name: 'Aconcagua', altitude: '6962 m' },
  { name: 'Elbrus', altitude: '5645 m' },
  { name: 'Lobuche', altitude: '6119 m' },
  { name: 'Manaslu', altitude: '8163 m' },
];

const MountainTicker = () => {
  // On répète la liste PLUSIEURS FOIS pour être sûr
  const repeated = [...mountains, ...mountains, ...mountains];

  return (
    <div className="mountain-ticker" style={{ zIndex: 1500 }}>
      <Container fluid>
        <div className="ticker-wrapper">
          <div className="ticker-track">
            {repeated.map((m, index) => (
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
