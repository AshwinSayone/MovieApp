import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';
import COLORS from '../../constant/color/color';
import IMAGES from '../../constant/image/image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getPoster, getLanguage} from '../../services/movieService';

const MovieCard = ({
  title,
  poster,
  language,
  voteAverage,
  voteCount,
  size,
  heartLess,
  onPress,
}) => {
  const [liked, setLiked] = useState(false);
  const [voteCountValue, setVoteCountValue] = useState(voteCount);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        style={{...styles.container, width: 230 * size, height: 340 * size}}
        imageStyle={{borderRadius: 12}}
        source={{uri: getPoster(poster)}}>
        <View style={{...styles.imdbContainer, paddingVertical: 3 * size}}>
          <Image
            source={IMAGES.IMDB}
            resizeMode="cover"
            style={{...styles.imdbImage, height: 20 * size, width: 50 * size}}
          />
          <Text
            style={{
              ...styles.imdbRating,
              marginRight: 5 * size,
              fontSize: 14 * size,
            }}>
            {voteAverage}
          </Text>
        </View>
        {!heartLess ? (
          <TouchableNativeFeedback
            onPress={() => {
              setLiked(!liked);
              setVoteCountValue(
                liked ? voteCountValue - 1 : voteCountValue + 1,
              );
            }}>
            <MaterialCommunityIcons
              name={liked ? 'heart' : 'heart-outline'}
              color={liked ? COLORS.HEART : COLORS.WHITE}
              style={{position: 'absolute', bottom: 10, left: 10}}
            />
          </TouchableNativeFeedback>
        ) : null}
      </ImageBackground>
      <View>
        <Text
          style={{...styles.movieTitle, width: 230 * size}}
          numberOfLines={3}>
          {title}
        </Text>
        <View style={styles.movieSubTitleContainer}>
          <Text style={styles.movieSubTitle}>
            {getLanguage(language).english_name}
          </Text>
          <View style={styles.rowAndCenter}>
            <MaterialCommunityIcons
              name="heart"
              size={17 * size}
              color={COLORS.HEART}
              style={{marginRight: 5}}
            />

            <Text style={styles.movieSubTitle}>{voteCountValue}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 340,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
  },
  movieTitle: {
    color: COLORS.GRAY,
    paddingVertical: 2,
    marginTop: 10,
    fontSize: 20,
    width: 230,
  },
  movieSubTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  movieSubTitle: {
    fontSize: 12,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imdbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: COLORS.YELLOW,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 12,
    paddingVertical: 3,
  },
  imdbImage: {
    height: 20,
    width: 50,
    borderBottomLeftRadius: 5,
  },
  imdbRating: {
    marginRight: 5,
    color: COLORS.HEART,
  },
});

MovieCard.defaultProps = {
  size: 1,
  heartLess: true,
};

export default MovieCard;
