/* eslint-disable react/jsx-no-undef */
import React, {useState} from 'react';
import {Text} from 'react-native';
import {StyleSheet, ScrollView, View} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const onSubmitPressed = data => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    console.warn(' onSignInPress');
    navigation.navigate('SignIn');
  };

  // const [code, setCode] = useState('');
  // const [Newpassword, setNewPassword] = useState('');

  const {control, handleSubmit} = useForm();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}> Reset your password </Text>

        <CustomInput
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
          placeholder="Code"
        />

        <CustomInput
          name="newpassword"
          control={control}
          rules={{
            required: 'Enter you new password ',
            minLength: {
              value: 8,
              message: 'password should be at least 8 character long',
            },
          }}
          placeholder="Enter your new Password"
        />

        <CustomButton
          text="Submit"
          onPress={handleSubmit(onSubmitPressed)}
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
export default NewPasswordScreen;
