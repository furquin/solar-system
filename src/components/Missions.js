import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <>
        <div data-testid="missions" />
        <Title headline="Missões" />
        {missions.map((value) => (
          <MissionCard
            key={ value.name }
            name={ value.name }
            year={ value.year }
            country={ value.country }
            destination={ value.destination }
          />
        ))}

      </>

    );
  }
}

export default Missions;
