import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieList from '../components/MovieList';
import TrendingMovies from '../components/TrendingMovies';
import { styles } from '../theme';

import "./global.css";

const iOS = Platform.OS == 'ios'

export default function Index() {

  const [trending, setTrending] = useState([1, 2, 3, 5, 6, 7, 8, 23, 45])

  const [upcoming, setComping] = useState([1, 2, 3, 5, 8, 23, 45])

  return (

    <View className="bg-neutral-800 flex-1">
      <SafeAreaView className={iOS ? '-mb-2' : 'mb-3'}>
        <StatusBar style='light' />

        {/* search bar */}
        <View className="flex-row justify-between items-center mx-4">
          <View>
            <Feather name="menu" size={24} color="white" />
          </View>

          <View>
            <Text className='text-white text-3xl'>
              <Text style={styles.text} className='text-5xl'>i</Text>
              Movies
            </Text>

          </View>

          <TouchableOpacity>
            <FontAwesome6 name="magnifying-glass" size={24} color="white" />
          </TouchableOpacity>

        </View>

        {/* contents */}
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}>

          <TrendingMovies
            data={trending} />

          <MovieList
            title={'Upcoming'}
            data={upcoming} />


        </ScrollView>


      </SafeAreaView>

    </View>
  );
}
