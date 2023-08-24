import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { theme } from '../core/theme';



export default function ProgramCard(props) {
    const program = props.program;
    const cardStyle = {
      ...styles.programCard,
      backgroundColor: program.backgroundColor || 'grey',
    };
  
    return (
      <View style={cardStyle}>
        <Image source={program.programImage} style={styles.cardIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>{program.programName}</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  programCard: {
    width: 150,
    height: 150, 
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 8,
    margin: 10,
    gap:10,
    elevation: 4, // For Android
    shadowColor: 'black', // For iOS
    shadowOffset: { width: 1, height: 2 }, // For iOS
    shadowOpacity: 0.3, // For iOS
    shadowRadius: 4, // For iOS
  },
  textContainer: {
  },
  cardText: {
    fontSize: 17,
    lineHeight: 21,
    color:'white',
    textAlign: 'center',
  },
  cardIcon:{
    width:50,
    height:50,
  }
});
