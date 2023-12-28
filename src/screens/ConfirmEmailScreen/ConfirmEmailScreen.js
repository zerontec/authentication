import React, {useState} from 'react';
import {Text} from 'react-native';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();

  const onConfirmPressed = data => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    console.warn(' onSignInPress');
  };

  const onResendPressed = () => {
    console.warn('ResendCode');
  };

  const [code, setCode] = useState('');

  const {control, handleSubmit} = useForm();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}> Confirm your email </Text>

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your Confirmation code"
          rules={{required: 'confirmation code is required'}}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code "
          onPress={onResendPressed}
          type="SECONDARY"
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
export default ConfirmEmailScreen;
