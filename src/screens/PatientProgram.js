import React, { useState, useEffect } from 'react';
import Background2 from '../components/Background2';
import { getToken, setToken } from '../core/authToken';
import axios from 'axios';
import { StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import { host } from '../core/host';
import { View, Text } from 'react-native';
import { theme } from '../core/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Header from '../components/Header';
import SideMenu  from '../components/SideMenu';
import Navbar from '../components/Navbar';
import { programs } from '../core/programs'
import ProgramCard from '../components/ProgramCard';
import img1 from '../assets/programs/1.png'
import img2 from '../assets/programs/2.png'
import img3 from '../assets/programs/3.png'
import img4 from '../assets/programs/4.png'
import img5 from '../assets/programs/55.png'
import img6 from '../assets/programs/66.png'

export default function PatientProgram({ navigation }) {
    const programData = [
        {
            "backgroundColor":"#FF6666",
            "programName":"Medication",
            "programImage":img1,
        },
        {
            "backgroundColor":"#A5DC38",
            "programName":"Books",
            "programImage":img2,
        },
        {
            "backgroundColor":"#B871FF",
            "programName":"Cognitive Games",
            "programImage":img3,
        },
        {
            "backgroundColor":"#2EC4B6",
            "programName":"Stories",
            "programImage":img4,
        },
        {
            "backgroundColor":"#FFD911",
            "programName":"Real time monitoring",
            "programImage":img5,
        },
        {
            "backgroundColor":"#D9D9D9",
            "programName":"Repports",
            "programImage":img6,
        }
    ]
    // const programData = programs

  return (
    <Background2 >
      <View style={styles.headerView}>
                {/* <Header>{userData ? `Hello ${userData.username}:` : 'Loading...'}</Header> */}
                <TouchableOpacity >
                    <Icon name="menuunfold" size={30} color={theme.colors.primary} />
                </TouchableOpacity>
                <Icon2 name="notifications-outline" size={35} color={theme.colors.primary} />
                {/* <LogoutButton
                    pressFunction={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StartScreen' }],
                        })
                    }
                /> */}
            </View>
      
      <View style={styles.patientProgramContainer}>
        <FlatList
            data={programData}
            renderItem={({ item }) => (
                <ProgramCard program={item}/> // Passing the 'program' prop
            )}
            keyExtractor={(item) => item.programName}
            numColumns={2}
            // Adjust the gap between columns
            />
      </View>
      <Navbar />
    </Background2>
  );
}


const styles = StyleSheet.create({
    headerView:{
        position:'absolute',
        top:60,
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 340,  
    },
    patientProgramContainer:{
        width:340,
    },

    
})