import { useNavigation } from 'expo-router';
import React, { useRef } from 'react';
import { Animated, Dimensions, Text, View } from 'react-native';
import MovieCard from '../components/MovieCard';

const TrendingMovies = ({ data }) => {

  const navigation = useNavigation()

  const { width, height } = Dimensions.get('window');

  const scrollX = useRef(new Animated.Value(0)).current;
  const CARD_WIDTH = width * 0.6;

  const handleCardPress = (item) => {
    console.log('card pressed');

    navigation.navigate('Movie', item)
    
};

  return (
    <View>
      <Text className='text-white text-xl mx-4 mb-5'>Trending Movies</Text>

      {/* TODO: Use carousel from third party libraries */}
      
      <Animated.FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <MovieCard handleCardPress={(item) => {handleCardPress(item)}} item={item} index={index} scrollX={scrollX} />
        )}
        snapToInterval={CARD_WIDTH + 10}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />

    </View>
  )
}

export default TrendingMovies