import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { router } from 'expo-router';

export default function OtpScreen() {
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);

  const handleOtpChange = (text:any, index:any) => {
    const newOtp = [...otpDigits];
    newOtp[index] = text;
    setOtpDigits(newOtp);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>

        <ArrowLeft onPress={() =>router.push('./signup') } size={24} />
      </TouchableOpacity>

      {/* App Logo */}
      <Text style={styles.logo}>Influenze</Text>

      {/* OTP Verification Title */}
      <Text style={styles.title}>Otp Verification</Text>

      {/* OTP Description */}
      <Text style={styles.description}>
        We will send you a one time password to your Register Number
      </Text>

      {/* Masked Phone Number */}
      <Text style={styles.maskedNumber}>
        <Text style={styles.bold}>******</Text>
        <Text style={styles.bold}>8837</Text>
      </Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otpDigits.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
          />
        ))}
      </View>

      {/* Resend OTP */}
      <Text style={styles.resendText}>
        Didn’t you receive the OTP?{' '}
        <Text style={styles.resendButton}>Resend OTP</Text>
      </Text>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyText} onPress={() =>router.push("/ (onboarding)/welcome")}>Verify</Text>
      </TouchableOpacity>

      {/* Home Indicator */}
      <Image
        // source={require('../assets/bars-home-indicator.png')}
        style={styles.homeIndicator}
      />
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexGrow: 1,
    paddingVertical: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 20,
  },
  logo: {
    fontFamily: 'Billabong-Regular',
    fontSize: 64,
    color: 'black',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 30,
    color: 'black',
    lineHeight: 24,
  },
  maskedNumber: {
    marginTop: 20,
    fontSize: 14,
    letterSpacing: 1.6,
    color: 'black',
  },
  bold: {
    fontWeight: 'bold',
  },
  otpContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 30,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    borderColor: '#000',
  },
  resendText: {
    marginTop: 20,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  resendButton: {
    color: '#2743fd',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: 285,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  verifyText: {
    fontSize: 16,
    color: 'black',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    marginTop: 40,
  },
});


