import React from 'react'
import { StyleSheet } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import { animation } from '../constants'

const Loading = () => {
    return (
        <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={animation.loading}
            animationStyle={styles.lottie}
            speed={1}
        />
    )
}

export default Loading

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    }
});