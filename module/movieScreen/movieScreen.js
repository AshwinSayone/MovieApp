import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
  Share,
} from 'react-native';
import COLORS from '../../constant/color/color';
import ItemSeparator from '../../component/itemSeperator/itemSeperator';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {
  getMovieById,
  getPoster,
  getVideo,
  getLanguage,
} from '../../services/movieService';
import {APPEND_TO_RESPONSE as AR} from '../../constant/url/url';

const {height, width} = Dimensions.get('window');

const setHeight = h => (height / 100) * h;
const setWidth = w => (width / 100) * w;

const MovieScreen = ({route, navigation}) => {
  const {movieId} = route.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieById(
      movieId,
      `${AR.VIDEOS},${AR.CREDITS},${AR.RECOMMENDATIONS},${AR.SIMILAR}`,
    ).then(response => setMovie(response?.data));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.moviePosterImageContainer}>
        <Image
          style={styles.moviePosterImage}
          resizeMode="cover"
          source={{uri: getPoster(movie?.backdrop_path)}}
        />
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <Feather name="chevrons-left" size={65} color={COLORS.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.headerText}>Share</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => Linking.openURL(getVideo(movie.videos.results[0].key))}>
        <Feather name="play-circle" size={70} color={COLORS.WHITE} />
      </TouchableOpacity>
      <ItemSeparator height={setHeight(37)} />
      <Text>{movie.title}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  moviePosterImageContainer: {
    height: setHeight(35),
    width: setWidth(145),
    alignItems: 'center',
    position: 'absolute',
    left: setWidth((100 - 145) / 2),
    top: 0,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    elevation: 8,
  },
  moviePosterImage: {
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    width: setWidth(145),
    height: setHeight(35),
  },
  linearGradient: {
    width: setWidth(100),
    height: setHeight(6),
    position: 'absolute',
    top: 0,
    elevation: 9,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 150,
    elevation: 20,
  },
  headerText: {
    fontSize: 30,
    color: COLORS.WHITE,
  },
  playButton: {
    position: 'absolute',
    top: 150,
    left: setWidth(50) - 70 / 2,
    elevation: 10,
  },
  movieTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  movieTitle: {
    color: COLORS.BLACK,

    fontSize: 18,
    width: setWidth(60),
  },
  ratingText: {
    marginLeft: 5,
    color: COLORS.BLACK,

    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genreText: {
    color: COLORS.LIGHT_GRAY,
    paddingHorizontal: 20,
    paddingTop: 5,

    fontSize: 13,
  },
  overviewContainer: {
    backgroundColor: COLORS.EXTRA_LIGHT_GRAY,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  overviewTitle: {
    color: COLORS.BLACK,

    fontSize: 18,
  },
  overviewText: {
    color: COLORS.LIGHT_GRAY,
    paddingVertical: 5,

    fontSize: 13,
    textAlign: 'justify',
  },
  castTitle: {
    marginLeft: 20,
    color: COLORS.BLACK,

    fontSize: 18,
  },
  castSubMenuContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    marginVertical: 5,
  },
  castSubMenuText: {
    marginRight: 10,
    color: COLORS.BLACK,

    fontSize: 13,
  },
  extraListTitle: {
    marginLeft: 20,
    color: COLORS.BLACK,

    fontSize: 18,
    marginVertical: 8,
  },
});

export default MovieScreen;
