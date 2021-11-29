import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './styles';
import GenreCard from '../../component/genreCard/genreCard';
import MovieCard from '../../component/movieCard/movieCard';
import ItemSeparator from '../../component/itemSeperator/itemSeperator';
import {
  getNowPlayingMovies,
  getUpcomingMovies,
  getAllGenres,
} from '../../services/movieService';

const genres = ['All', 'Action', 'Comedy', 'Romance', 'Horror', 'Sci-Fi'];

const HomeScreen = ({navigation}) => {
  const [activeGenre, setActiveGenre] = useState('All');
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [upcomingMovies, setUpcomingMovies] = useState({});
  useEffect(() => {
    getNowPlayingMovies().then(movieResponse =>
      setNowPlayingMovies(movieResponse.data),
    );
    getUpcomingMovies().then(movieResponse =>
      setUpcomingMovies(movieResponse.data),
    );
    // getAllGenres().then((genreResponse) =>
    //   setGenres([...genres, ...genreResponse.data.genres])
    // );
  }, []);
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Showing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList
          data={genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({item}) => (
            <GenreCard
              genreName={item}
              active={item === activeGenre ? true : false}
              onPress={setActiveGenre}
            />
          )}
        />
      </View>
      <View>
        {console.log(nowPlayingMovies)}
        <FlatList
          data={nowPlayingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({item}) => (
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              heartLess={false}
              onPress={() =>
                navigation.navigate('MovieScreen', {movieId: item.id})
              }
              size={1.5}
            />
          )}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Coming Soon</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View>
        <FlatList
          data={upcomingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({item}) => (
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              heartLess={false}
              onPress={() =>
                navigation.navigate('MovieScreen', {movieId: item.id})
              }
              size={0.8}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
