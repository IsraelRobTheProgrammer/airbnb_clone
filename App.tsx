/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResults';
import Post from './src/components/Post';
// import feed from './assets/data/feed';

// const post1 = feed[0];
// const post2 = feed[1];
// const post3 = feed[2];
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <HomeScreen /> */}
 <SearchResultScreen/>
    </SafeAreaView>
  );
}

export default App;
