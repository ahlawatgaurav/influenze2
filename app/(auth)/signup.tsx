import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { CameraIcon, ArrowLeftIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
const formFields = [
  { id: 'username', label: 'Username', placeholder: 'Your username' },
  { id: 'firstName', label: 'Your Name', placeholder: 'Your Name' },
  { id: 'lastName', label: 'Your Last name', placeholder: 'Your Last name' },
  { id: 'dob', label: 'Date of Birth', placeholder: 'Your Birthday (dd-mm-yyyy)' },
  { id: 'email', label: 'E-mail', placeholder: 'Enter E-mail' },
  { id: 'password', label: 'Password', placeholder: 'Enter Password' },
];

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeftIcon onPress={() =>router.push('./signin') } size={24} />
          </TouchableOpacity>
          <Text style={styles.logoText}>Influenze</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Create An Account and Sign Up</Text>

        {/* Profile Image Placeholder */}
        <View style={styles.profilePlaceholder}>
          <CameraIcon color="white" size={28} />
        </View>

        {/* Input Fields */}
        {formFields.map((field) => (
          <View key={field.id} style={styles.inputWrapper}>
            <Text style={styles.label}>{field.label}</Text>
            <TextInput
              placeholder={field.placeholder}
              style={styles.input}
              placeholderTextColor="#888"
            />
          </View>
        ))}

        {/* Create Account Button */}
        <TouchableOpacity style={styles.createButton}>
          <Text onPress={() =>router.push('./otp') } style={styles.createButtonText}>Create an Account</Text>

        </TouchableOpacity>

        {/* Home Indicator (mocked as image or placeholder) */}
        <View style={styles.homeIndicator}>
          {/* <Image source={require('./assets/home-indicator.png')} 
          style={styles.homeIndicatorImg} /> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  logoText: {
    fontFamily: 'Billabong-Regular',
    fontSize: 42,
    color: 'black',
  },
  title: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  profilePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#a5a5a5',
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: 'black',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 14,
    color: 'black',
  },
  createButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginTop: 30,
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  homeIndicator: {
    marginTop: 40,
  },
  homeIndicatorImg: {
    width: 134,
    height: 5,
  },
});
