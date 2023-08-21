import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { theme } from '../core/theme';
import { SIZES } from '../core/sizes';

export default function LogoutButton(props) {
    return (
      <TouchableOpacity style={styles.logoutBtn} onPress={props.pressFunction}>
        <Image 
          source={require('../assets/logout-icon.jpg')}
          resizeMode="contain"
          style={styles.logoutBtnImage}
        />
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    logoutBtn: {
        width: 50,
        height: 50,
        //backgroundColor: theme.colors.primary, // This should be the purple color
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: 'solid',
        borderColor: theme.colors.primary, // Make sure theme.primary is a valid color value
        borderWidth: 1,
    },
    logoutBtnImage: {
      width: "50%",
      height: "50%",
      tintColor: 'red',
    },
  })