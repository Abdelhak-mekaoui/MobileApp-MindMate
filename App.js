import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import { host } from './src/core/host'
import { programs } from './src/core/programs'



import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  AddPatientScreen,
  PatientProgram,
} from './src/screens'
// import SideMenu from './src/components/SideMenu'

const Stack = createStackNavigator()


function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="AddPatientScreen" component={AddPatientScreen} />
      <Stack.Screen name="PatientProgram" component={PatientProgram} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <Provider theme={theme} host={host} programs={programs}>
        <NavigationContainer>
          {/* <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
            headerShown: false,
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="AddPatientScreen" component={AddPatientScreen} />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
          </Stack.Navigator> */}
            <MainStack />
          </NavigationContainer>
    </Provider>
  )
}


