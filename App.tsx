/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import {ConfirmEmailScreen} from './src/screens/ConfirmEmailScreen';
import {ForgotPasswordScreen} from './src/screens/ForgotPasswordScreen';
import {NewPasswordScreen} from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eaecec',
  },
});

export default App;
