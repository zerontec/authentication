/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logoZ.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { SocialSignInButtons } from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';


const SignInScreen = () => {

const navigation = useNavigation();
const {height} = useWindowDimensions();


const {control, handleSubmit,
    formState:{errors},
} = useForm();



const onSignInPressed = data => {

    console.log(data);

    //validateUser
    navigation.navigate('Home');


};




const onForgotPasswordPressed = () => {

    console.warn('Forgot Password ');

    navigation.navigate('Forgotpassword');


};


const onSignUpPressed = () => {


    console.warn(' onSignUpPress');

    navigation.navigate('Signup');


};




// const [username, setUsername] = useState('');

// const [password, setPassword] = useState('');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View  style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height:height * 0.3}]} resizeMode="contain"/>

   <CustomInput
   name="username"
   placeholder="Username"
   control={control}
   rules={{required:'username is required'}}
   />


   <CustomInput
   name="password"
   control={control}
   placeholder="password"
   rules={{required:'password is required', minLength:{value:3, message:'password should be minimun 3 character long'}}}
   secureTextEntry  />









   <CustomButton
   text= "Sign in "
   onPress={handleSubmit(onSignInPressed)} />

   <CustomButton
   text= "Forgot password "
   onPress={onForgotPasswordPressed}
   type="TERTIARY" />


<SocialSignInButtons/>

<CustomButton
   text= "Dont have an  account? create one  "
   onPress={onSignUpPressed}
   type="TERTIARY" />

    </View>
    </ScrollView>
  );

};


const styles = StyleSheet.create({

root:{
alignItems:'center',
padding:20,

},

    logo:{
        width:'80%',
        maxWidth:300,
        maxHeight:100,
    },



});


export default SignInScreen;
