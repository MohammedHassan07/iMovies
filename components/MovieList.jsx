import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import potter from '../assets/images/potter.jpg';



const { width, height } = Dimensions.get('window');

const MovieList = ({ title, data }) => {

    return (

        <View className='mb-2'>
            <Text className='text-white text-xl mx-4 mb-5'>{title}</Text>


            <Image className='mx-4'
                source={potter}
                style={{ width: width * 0.6, height: height * 0.3 }}
            />

        </View>
    )
}

export default MovieList