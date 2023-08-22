import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BirthdayInput from '../components/BirthdayInput';
import BackButton from '../components/BackButton';
import ImagePickerComponent from '../components/ImagePicker';
import { theme } from '../core/theme';
import LogoutButton from '../components/LogoutButton';
import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon2 from 'react-native-vector-icons/Ionicons'
export default function AddPatientScreen({ navigation }) {
    const [profilePic, setProfilePic] = useState({ value: null, error: '' });
    const [firstName, setFirstName] = useState({ value: '', error: '' });
    const [lastName, setLastName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [birthDate, setBirthDate] = useState({ value: new Date(), error: '' });
    const [gender, setGender] = useState({ value: '', error: '' });
    const [address, setAddress] = useState({ value: '', error: '' });

    // Define openSideMenu function
    const openSideMenu = () => {
        // Implementation for opening side menu
    };
 

    return (
        <Background>
            <View style={styles.headerView}>
                {/* <Header>{userData ? `Hello ${userData.username}:` : 'Loading...'}</Header> */}
                <TouchableOpacity onPress={openSideMenu}>
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
            <View style={styles.profilePic}>
                <ImagePickerComponent />
            </View>
            <TextInput
                label="First Name"
                returnKeyType="next"
                value={firstName.value}
                onChangeText={(text) => setFirstName({ value: text, error: '' })}
                error={!!firstName.error}
                errorText={firstName.error}
            />
         <TextInput
            label="Last Name"
            returnKeyType="next"
            value={lastName.value}
            onChangeText={(text) => setLastName({ value: text, error: '' })}
            error={!!lastName.error}
            errorText={lastName.error}
        />
        <TextInput
            label="Adress"
            returnKeyType="next"
            value={address.value}
            onChangeText={(text) => setAddress({ value: text, error: '' })}
            error={!!address.error}
            errorText={address.error}
        /> 
        <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
        />
        <View style={styles.birthdate}>
            <Text style={styles.birthdateText}>Select Birthdate</Text>
            <DateTimePicker 
                value={birthDate.value}
                mode='date'  // Set the mode to 'date' to show only the date picker
                onChange={(event, date) => {
                    if (date !== undefined) {
                        setBirthDate({ value: date, error: '' });
                    }
                }} 
            />
        </View>
        <Button mode="contained" >
            Save
        </Button>
      </Background>
    )
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
    profilePic:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'start',
    },
    birthdate: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 12,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.primary, 
        borderRadius: 4, 
        height:52,
        backgroundColor:'white',
    },
    birthdateText:{
        fontSize: 15,
        color: theme.colors.third,
        padding: 8,
    }
  })