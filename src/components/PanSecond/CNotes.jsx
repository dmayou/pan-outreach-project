import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class CNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
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
        <g id="C4">
          <ellipse
            transform="matrix(0.8055 -0.5925 0.5925 0.8055 -14.48 380.9514)"
            style={{ fill: this.props.colors.C4, stroke: 'black' }}
            cx="573.173"
            cy="212.537"
            rx="79.861"
            ry="104.628"
            onTouchStart={this.props.isTouch ? () => this.playNote('C4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C4')}
          />
        </g>
        <g id="CSh4">
          <ellipse
            transform="matrix(0.5358 -0.8443 0.8443 0.5358 215.3201 826.6624)"
            style={{ fill: this.props.colors.CSh4, stroke: 'black' }}
            cx="859.5"
            cy="217.5"
            rx="62"
            ry="80"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh4')}
          />
        </g>
        <g id="C5">
          <ellipse
            transform="matrix(0.9967 -0.0816 0.0816 0.9967 -25.9686 41.8764)"
            style={{ fill: this.props.colors.C5, stroke: 'black' }}
            cx="499.054"
            cy="338.466"
            rx="48.853"
            ry="35.072"
            onTouchStart={this.props.isTouch ? () => this.playNote('C5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C5')}
          />
        </g>
        <g id="CSh5">
          <ellipse
            transform="matrix(0.8959 -0.4442 0.4442 0.8959 -9.1788 475.5527)"
            style={{ fill: this.props.colors.CSh5, stroke: 'black' }}
            cx="1010.326"
            cy="257.366"
            rx="32.581"
            ry="45"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh5')}
          />
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.second,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(CNotes);