import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class GNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.indigo : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.indigoHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* G NOTES */}
        <g id="G3">
          <ellipse
            transform="matrix(0.3602 -0.9329 0.9329 0.3602 -138.6203 1952.4495)"
            style={{ fill: this.props.colors.G3, stroke: 'black' }}
            cx="1354.016"
            cy="1077.278"
            rx="125.535"
            ry="87.343"
            onTouchStart={this.props.isTouch ? () => this.playNote('G3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('G3')}
          />
          <text
            transform="matrix(1 0 0 1 1318.3301 1107.5195)"
            className={this.props.displayNotes}
          >
            G3
          </text>
        </g>
        <g id="G4">
          <ellipse
            transform="matrix(0.9883 -0.1526 0.1526 0.9883 -135.018 194.1195)"
            style={{ fill: this.props.colors.G4, stroke: 'black' }}
            cx="1196.861"
            cy="976.481"
            rx="74.882"
            ry="51.345"
            onTouchStart={this.props.isTouch ? () => this.playNote('G4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('G4')}
          />
          <text
            transform="matrix(1 0 0 1 1163.3301 1009.2451)"
            className={this.props.displayNotes}
          >
            G4
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.cello,
  displayColors: state.displayColors,
  displayNotes: state.displayNotes,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(GNotes);
