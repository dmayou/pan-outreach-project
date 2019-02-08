import React, { Component } from 'react';
// nav bar import
import Switches from './Switches';
// css import
import './PanSecond.css';
// svg imports
import ANotes from './ANotes';
import BNotes from './BNotes';
import CNotes from './CNotes';
import DNotes from './DNotes';
import ENotes from './ENotes';
import FNotes from './FNotes';
import GNotes from './GNotes';

class PanSecond extends Component {
  state = {
    baseColor: '#F7E8AC',
    baseStroke: 'black',
    stroke: 'none',
  }

  // dummy function needed to prevent double tap zoom on touch devices
  testTouch = () => { }
  
  render() {
    return (
      <div className='disable-touch-zoom' onClick={this.testTouch}>
        <Switches />
        <svg
          id="seconds-svg"
          x="0px"
          y="0px"
          viewBox="0 0 1450 1438"
        >
          {/* BASE LAYER */}

          <g id="base">
            <ellipse
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="363.5"
              cy="362"
              rx="357"
              ry="355.5"
            />
            <circle
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="1087"
              cy="362"
              r="355.5"
            />
          </g>

          <ANotes />
          <BNotes />
          <CNotes />
          <DNotes />
          <ENotes />
          <FNotes />
          <GNotes />
        </svg>
      </div>
    );
  }
};

export default PanSecond;