import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  recommendedText: {
    flex: 0,
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
  },
  headerContainer: {
    flex: 3,
    width: '100%',
  },
  imageContainer: {
    left: 80,
    resizeMode: 'contain',
  },
  cardContainer: {
    alignContent: 'center',
    width: 210,
    height: 230,
    margin: 20,
    borderRadius: 150,
    overflow: 'hidden',
    backgroundColor: '#246ae3',
  },
  safeArea: {
    padding: 20,
  },
  recommendedChallenge: {
    flex: 1.5,
  },
  cardSubject: {
    color: 'black',
    fontSize: 10,
  },
  challengeSubject: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 70,
    marginLeft: 40,
  },
  challengeTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 40,
  },
});
