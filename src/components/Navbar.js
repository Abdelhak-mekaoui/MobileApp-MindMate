import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Feather'
import { theme } from '../core/theme';

export default function Search(props) {
    return (
      <View style={styles.navbarContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="home" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon2 name="game-controller-outline" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon3 name="robot-outline" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon4 name="medical-bag" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon5 name="activity" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }
const styles = {
    navbarContainer: {
      width: 340,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 15,
      backgroundColor: theme.colors.background,
      elevation: 4, 
      position: 'absolute', // Use 'absolute' instead of 'fixed'
      bottom: 5, // Place the navbar at the bottom
      left: 0, // Align the navbar to the left
      right: 0, // Align the navbar to the right
    },
    iconContainer: {
      padding: 10,
    },
  };
