import React, { useState, useEffect } from 'react';
import Background2 from '../components/Background2';
import Header from '../components/Header';
import Button from '../components/Button';
import PatientCard from '../components/PatientCard';
import Search from '../components/Search';
import LogoutButton from '../components/LogoutButton';
import { getToken, setToken } from '../core/authToken';
import axios from 'axios';
import { StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import { host } from '../core/host';
import { View, Text } from 'react-native';
import { SIZES } from '../core/sizes';
import { theme } from '../core/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import SideMenu  from '../components/SideMenu';
import Navbar from '../components/Navbar';

export default function Dashboard({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [patients, setPatients] = useState([]);
  const [isSideMenuVisible, setSideMenuVisible] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuVisible(!isSideMenuVisible);
  }
  const openSideMenu = () => {
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        const hostUrl = host;
        const response = await axios.get(`${hostUrl}/api/user/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          setUserData(data);
        } else {
          console.error('Failed to get user data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        const hostUrl = host;
        const response = await axios.get(`${hostUrl}/api/patients/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        if (response.status === 200) {
          const data = response.data;
          setPatients(data);
        } else {
          console.error('Failed to get patients data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);
 
  return (
    <Background2 >
      
      <View style={styles.headerView}>
        <View style={styles.userHeader}>
          <Icon3 name="user-o" size={37} color={theme.colors.primary} />
          <Header>{userData ? `${userData.username}` : 'Loading...'}</Header>
        </View>
        
        {/* <TouchableOpacity onPress={toggleSideMenu}>
          <Icon name="menu-unfold" size={30} color={theme.colors.primary} />
        </TouchableOpacity> */}
          <Icon2 name="notifications-outline" size={35} color={theme.colors.primary} />
      </View>
      {isSideMenuVisible && (
        <View style={styles.sideMenu}>
          <SideMenu />
        </View>
      )}
      <Search placeholder="Search patient?"/>
      <ScrollView style={styles.scrollView}>
      {patients.map((patient, index) => (
        <TouchableOpacity onPress={() => navigation.navigate('PatientProgram')}>
          <PatientCard
            key={index}
            first_name={patient.first_name}
            last_name={patient.last_name}
            age={patient.email}
          />
        </TouchableOpacity>
      ))}
    </ScrollView> 
      <Button style={styles.addButton} mode="contained"  onPress={() => navigation.navigate('AddPatientScreen')}>
        Add new Patient

      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
      <Navbar />
    </Background2>
  );
}


const styles = StyleSheet.create({
  startContainer:{
    position:'absolute',
    top:60,
  },
  headerView:{
    position:'absolute',
    top:60,
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 340,
  },
  userHeader:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap:15,
  },
  scrollView:{
    width: 340,
    height: 340,
  },
  addButton: {
    position:'absolute',
    bottom:80,
  },    

    
})