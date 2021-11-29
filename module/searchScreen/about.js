import React from 'react';
import {useState} from 'react';
import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Searchbar} from 'react-native-paper';
import COLORS from '../../constant/color/color';
import {TMDB_API_KEY, TMDB_BASE_URL} from '../../constant/url/url';
import ItemSeparator from '../../component/itemSeperator/itemSeperator';
import SearchCard from '../../component/searchCard/searchCard';
import axios from 'react-native-axios';

const search = () => {
  const [movies, setMovies] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const fetchData = () => {
    axios
      .get(
        TMDB_BASE_URL +
          '/search/movie?api_key=' +
          TMDB_API_KEY +
          '&query=' +
          searchQuery,
      )
      .then(movieResponse => setMovies(movieResponse.data));
    console.log(movies);
  };
  const onChangeSearch = value => {
    setSearchQuery(value);
    fetchData();
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.genreListContainer}>
        <FlatList
          data={movies.results}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View style={{alignItems: 'center'}}>
              <ItemSeparator height={10} />
              <View
                style={{
                  width: '95%',
                  height: 0.5,
                  backgroundColor: 'grey',
                }}></View>
              <ItemSeparator height={10} />
            </View>
          )}
          ListHeaderComponent={() => <ItemSeparator height={20} />}
          ListFooterComponent={() => <ItemSeparator height={20} />}
          renderItem={({item}) => (
            <SearchCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              size={0.5}
              overview={item.overview}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  genreListContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
});

export default search;
