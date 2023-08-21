import React, { useState, useEffect } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import PatientCard from '../components/PatientCard';
import Search from '../components/Search';
import LogoutButton from '../components/LogoutButton';
import { getToken, setToken } from '../core/authToken';
import axios from 'axios';
import { StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { host } from '../core/host';
import { View, Text } from 'react-native';
import { SIZES } from '../core/sizes';
import { theme } from '../core/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import SideMenu  from '../components/SideMenu';

// import { DrawerActions } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import StartScreen from './StartScreen';


export default function Dashboard({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [patients, setPatients] = useState([]);

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
    <Background style={styles.startContainer}>
      <View style={styles.headerView}>
        {/* <Header>{userData ? `Hello ${userData.username}:` : 'Loading...'}</Header> */}
        <TouchableOpacity onPress={openSideMenu}>
          <Icon name="menu-unfold" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
        
        <LogoutButton pressFunction={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })} />
      </View>
      <Search placeholder="Search patient?"/>
      <View>
        {patients.map((patient) => (
          <View>
            <PatientCard  first_name={patient.first_name} 
                          last_name={patient.last_name}
                          age={patient.email} />
          </View>
        ))}
      </View>
      <Button mode="contained" >
        Add new Patient
      </Button>
      {/* <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button> */}
    </Background>
  );
}


const styles = StyleSheet.create({
  startContainer:{
    alignItems: 'start',
    justifyContent: 'start',
  },
  headerView:{
    position:'absolute',
    top:60,
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 340,  },
})