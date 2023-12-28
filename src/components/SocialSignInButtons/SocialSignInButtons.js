/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {


    const onSignInFacebook = () => {

        console.warn('Signinfacebook ');


    };
    const onSignInGoogle = () => {

        console.warn('Signingoogle ');


    };
    const onSignInApple = () => {

        console.warn('SigninApple ');


    };



    return (

        <>

<CustomButton
   text= "Sign in with Facebook "
   onPress={onSignInFacebook}
   bgColor="#E7EAF4"
   fgColor="#4765A9"
   />


<CustomButton
   text= "Sign in with Google  "
   onPress={onSignInGoogle}
   bgColor="#FAE9EA"
   fgColor="#DD4D44"
   />

   <CustomButton
   text= "Sign in with Apple  "
   onPress={onSignInApple}
   bgColor="#e3e3e3"
   fgColor="#363637"
   />



        </>

    );
};

export const styles = StyleSheet.create({
	socialsigninbuttons: {
		flex: 1,
	},
});
export default SocialSignInButtons;
