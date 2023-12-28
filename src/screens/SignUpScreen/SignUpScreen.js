/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {SocialSignInButtons} from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const {control, handleSubmit,watch
} = useForm();

const pwd = watch('pasword');

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/



  const onRegisterPressed = data => {
            console.log(data);

    navigation.navigate('ConfirmEmail');
  };

  const onSignInPressed = () => {
    console.warn(' onSignInPress');
    navigation.navigate('SignIn');
  };

  const onTermOfUsePressed = () => {
    console.warn('termofUsed');
  };

  const onPrivacyPolicy = () => {
    console.warn('PrivacyPolicy');
  };

//   const [username, setUsername] = useState('');

//   const [email, setEmail] = useState('');

//   const [password, setPassword] = useState('');
//   const [passwordRepeat, setPasswordRepeat] = useState('');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}> Create Account </Text>

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required:'username name is required'}}
        />

        <CustomInput
        name="email"
        placeholder="Email"
        control={control}
        rules={{ pattern: {value:EMAIL_REGEX, message:'Email is invalid'} }}
       />

        <CustomInput
          name="password"
          placeholder="password"
          control={control}
          rules={{required:'password is required', 
          minLength:{value:3, massage:'password should be at 8 character long'}}}
          secureTextEntry
        />

        <CustomInput
          name="repeat-password"
          placeholder="Repeat password"
          control={control}
          rules={{
            validate:value =>
             value === pwd || 'Password no match' 

          }}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />

        <Text style={styles.text}>
          By register,you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermOfUsePressed}>
            {' '}
            terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicy}>
            {' '}
            Privacy Policy{' '}
          </Text>{' '}
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account ? Sign In  "
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

export default SignUpScreen;
