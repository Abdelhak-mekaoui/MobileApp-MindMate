import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { theme } from '../core/theme';
import { SIZES } from '../core/sizes';

export default function Search(props) {
  return (
    <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput}
              value=""
              onChange={() => {}}
              placeholder={props.placeholder}
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() =>{}} >
            <Image 
              source={require('../assets/search.jpg')}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    searchContainer: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: SIZES.large,
      height: 50,
      margin:10,
      width:340,
    },
    searchWrapper: {
      flex: 1,
      backgroundColor: 'white',
      marginRight: SIZES.small, // Make sure SIZES.small is defined
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: SIZES.medium, // Make sure SIZES.medium is defined
      height: '100%',
      lineHeight: 26,
      borderStyle: 'solid',
      borderColor: theme.colors.primary, // Make sure theme.primary is a valid color value
      borderWidth: 1, // Set the border width
    },
    searchInput: {
      fontFamily: 'Poppins',
      width: "100%",
      height: "100%",
      paddingHorizontal: SIZES.medium,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: theme.colors.primary, // This should be the purple color
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBtnImage: {
      width: "50%",
      height: "50%",
      tintColor: theme.secondary,
    },
  })