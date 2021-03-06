import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class CNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.red : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.redHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* C NOTES */}
        <g id="C2">
          <path
            style={{ fill: this.props.colors.C2, stroke: 'black' }}
            d="M275.682,123.672c0,0,164.818,80.828,194.818,200.828s24.08,112.552,24.08,112.552s-16.804,3.699-38.08,3.448
		        c-20.187-0.239-44.401-4.285-62.107-9.337C346.5,417.5,306.935,391.41,266.218,319.455s-4.091-168.59-4.091-168.59L275.682,123.672z"
            onTouchStart={this.props.isTouch ? () => this.playNote('C2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C2')}
          />
          <text
            transform="matrix(1 0 0 1 321.2329 314.7979)"
            className={this.props.displayNotes}
          >
            C2
          </text>
        </g>
        <g id="C3">
          <path
            style={{ fill: this.props.colors.C3, stroke: 'black' }}
            d="M628.815,112.954c0,0-120.531,77.068-131.811,158.252c-11.941,85.944,24.123,159.958,24.123,159.958
		        s102.777-38.015,131.208-126.133C693.292,178.091,628.815,112.954,628.815,112.954z"
            onTouchStart={this.props.isTouch ? () => this.playNote('C3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C3')}
          />
          <text
            transform="matrix(1 0 0 1 536.2798 314.9819)"
            className={this.props.displayNotes}
          >
            C3
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.bass,
  displayColors: state.displayColors,
  displayNotes: state.displayNotes,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(CNotes);
