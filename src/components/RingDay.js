import React from 'react';
import { View, StyleSheet , Text } from 'react-native';
import Svg, { Path } from "react-native-svg";

const RingDay = ({}) =>
{
    
    return (
        <View style={styles.container}>
            <View style={styles.ringIconContainer}>
                <Svg
      width={120}
      height={120}
      viewBox="0 0 89 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.174 25.684a44.5 44.5 0 11-1.538 3.728l8.724 3.145a35.226 35.226 0 101.218-2.952l-8.404-3.92z"
        fill="#EDECED"
      />
    </Svg>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.ringStat}>0</Text>
                <Text>taken</Text>
            </View>


        </View>
    );

}
    

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems : 'center',
    },

    ringIconContainer: {
         
    },

    textContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems : 'center',
    },

    ringStat: {
        color: '#5FC113',
        fontSize : 40,
    },
    
})


export default RingDay;