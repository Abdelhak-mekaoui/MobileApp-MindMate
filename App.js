import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import { host } from './src/core/host'



import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  AddPatientScreen,
} from './src/screens'
import { getToken, setToken } from './src/core/authToken'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme} host={host}>
      <NavigationContainer>
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
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
// import { createDrawerNavigator } from '@react-navigation/drawer';

// // ... (your imports and existing code)

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <Provider theme={theme} host={host}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="StartScreen"
//           screenOptions={{
//             headerShown: false,
//           }}
//         >
//           <Stack.Screen name="StartScreen" component={StartScreen} />
//           <Stack.Screen name="LoginScreen" component={LoginScreen} />
//           <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//           <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
//           <Stack.Screen name="Dashboard" component={Dashboard} />
//         </Stack.Navigator>
//         <Drawer.Navigator>
//           <Drawer.Screen name="Dashboard" component={Dashboard} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </Provider>
//   )
// }





