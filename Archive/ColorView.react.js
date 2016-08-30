import React, { PropTypes } from 'react';
import {
  View,
} from 'react-native';

class ColorView extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <View style={{ backgroundColor: color, flex: 1 }} />
    );
  }
}

ColorView.propTypes = { // propTypes not PropTypes
  color: PropTypes.string.isRequired,
};

export default ColorView;
