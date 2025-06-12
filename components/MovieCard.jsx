import React from 'react';
import { Animated, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import potter from '../assets/images/potter.jpg';

const { width, height } = Dimensions.get('window');


const MovieCard = ({ item, index, scrollX, handleCardPress }) => {

    const CARD_WIDTH = width * 0.6;
    const SPACING = 0;

    const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH
    ];

    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.9, 1, 0.9],
        extrapolate: 'clamp'
    });

    const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.5, 1, 0.5], // dim side cards
        extrapolate: 'clamp'
    });


    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [20, 0, 20],
        extrapolate: 'clamp'
    });

    return (
        <TouchableWithoutFeedback onPress={handleCardPress}>
            <Animated.View
                contentContainerStyle={{
                    paddingHorizontal: (width - width * 0.6) / 2,
                }}

                style={{
                    width: CARD_WIDTH,
                    marginHorizontal: 0,
                    transform: [{ scale }, { translateY }],
                    opacity
                }}
            >
                <Image
                    className='w-full rounded-2xl'
                    source={potter}
                    style={{
                        height: height * 0.4,
                    }}
                    resizeMode="contain"
                />
            </Animated.View>

        </TouchableWithoutFeedback>
    );
};

export default MovieCard;
