import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SideMenu = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigateToScreen('Home')}
        >
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigateToScreen('Profile')}
        >
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigateToScreen('Settings')}
        >
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    position: 'absolute',
    zIndex:5,
    width:'90%'
  },
  menuItem: {
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
    backgroundColor: 'lightgray',
  },
  menuText: {
    fontSize: 16,
  },
});

export default SideMenu;
