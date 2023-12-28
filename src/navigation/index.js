/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { ConfirmEmailScreen } from '../screens/ConfirmEmailScreen';
import { NewPasswordScreen } from '../screens/NewPasswordScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component = {SignInScreen}/>
        <Stack.Screen name="Signup" component = {SignUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component = {ConfirmEmailScreen}/>
        <Stack.Screen name="Forgotpassword" component = {ForgotPasswordScreen}/>
        <Stack.Screen name="NewPassword" component = {NewPasswordScreen}/>
        <Stack.Screen name="Home" component = {HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
