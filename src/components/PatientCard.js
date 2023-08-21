import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { theme } from '../core/theme';

export default function PatientCard(props) {
  return (
    <View style={styles.card}>
      <Image source={require('../assets/defaultUser.png')} style={styles.profile_picture} />
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>{props.first_name}</Text>
        <Text style={styles.cardText}>{props.last_name}</Text>
        <Text style={styles.cardText}>{props.age}</Text>
      </View>
      <Image source={require('../assets/rightBtn.png')} style={styles.right_button} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 340,
    height: 120, // Adjust the height as needed
    flexDirection: 'row', // Align children horizontally
    alignItems: 'center', // Vertically center the content
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    marginBottom: 10, // Add some margin between cards
  },
  textContainer: {
    marginLeft: 20, // Add some space between image and text
  },
  cardText: {
    fontSize: 15,
    lineHeight: 21,
    color:'white',
    textAlign: 'left',
  },
  profile_picture: {
    width: 80,
    height: 80,
    borderRadius: 40, // Assuming you want a circular profile picture
    marginLeft:20,
  },
  right_button: {
    position: 'absolute',
    right: 20,
    width: 30,
    height: 30,
  },
});
