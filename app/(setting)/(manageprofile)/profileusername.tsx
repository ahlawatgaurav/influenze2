import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const navIcons = [
  {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
  },
  {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
  },
  {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
  },
  {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
  },
];

export default function Profileusername() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="black" />
        </TouchableOpacity>

        {/* Page Title */}
        <Text style={styles.pageTitle}>Profiles Username</Text>

        {/* Name Input Card */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Username</Text>
          <TextInput
            style={styles.input}
            defaultValue="priyanshu_lakra"
            placeholder="Enter your name"
          />
        </View>

        {/* Helper Text */}
        <Text style={styles.helperText}>
        Your current Influenze username priyanshu_lakra is available.
        </Text>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Done</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      {/* <View style={styles.navbar}>
        {navIcons.map((icon, index) => (
          <TouchableOpacity key={index} style={styles.navIconContainer}>
            <Image source={{ uri: icon.uri }} style={styles.navIcon} />
          </TouchableOpacity>
        ))}
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: 'black',
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardLabel: {
    fontSize: 14,
    color: '#333',
  },
  input: {
    marginTop: 8,
    fontSize: 16,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#000',
  },
  helperText: {
    fontSize: 12,
    color: '#666',
    marginTop: 12,
  },
  saveButton: {
    backgroundColor: '#254efe',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navIconContainer: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});


