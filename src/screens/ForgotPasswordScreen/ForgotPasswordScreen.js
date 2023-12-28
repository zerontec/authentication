/* eslint-disable react/jsx-no-undef */
import React, {useState} from 'react';
import {Text} from 'react-native';
import {StyleSheet, ScrollView, View} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onSendPressed = data => {
    console.log(data);
    navigation.navigate('NewPassword');
  };

  const {control, handleSubmit} = useForm();

  // const [Username, setUsername] = useState('');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}> Reset Your Pssword </Text>

        <CustomInput
          name="username"
          control={control}
          rules={{required: 'Username is required '}}
          placeholder="Username"
        />
        <CustomButton
          text="Send"
          onPress={handleSubmit(onSendPressed)}
          type="PRIMARY"
        />

        <CustomButton
          text="back to Sign In  "
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
export default ForgotPasswordScreen;
