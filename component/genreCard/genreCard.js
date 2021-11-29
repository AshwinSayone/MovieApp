import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import COLORS from '../../constant/color/color';
const {width} = Dimensions.get('screen');
const setWidth = w => (width / 100) * w;
const GenreCard = ({genreName, active, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: active ? COLORS.HEART : COLORS.WHITE,
      }}
      activeOpacity={0.5}
      onPress={() => onPress(genreName)}>
      <Text
        style={{
          ...styles.genreText,
          color: active ? COLORS.WHITE : COLORS.HEART,
        }}>
        {genreName}
      </Text>
    </TouchableOpacity>
  );
};

export default GenreCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'COLORS.WHITE',
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: setWidth(25),
  },
  genreText: {
    fontSize: 23,
    color: COLORS.HEART,
    // fontFamily: FONTS.BOLD,
  },
});
