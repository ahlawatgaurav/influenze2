import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Camera, Link, ArrowLeft } from 'lucide-react-native';

const screenWidth = Dimensions.get('window').width;

export default function Chat() {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      {/* <View style={styles.statusBar}>
        <Text style={styles.statusTime}>9:41</Text>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/cellular-network.png' }}
          style={styles.statusIcon}
        />
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/wifi.png' }}
          style={styles.statusIcon}
        />
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/battery.png' }}
          style={styles.statusIcon}
        />
      </View> */}

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <ArrowLeft size={24} color="#000" />
      </TouchableOpacity>

      {/* Profile Avatar */}
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
        style={styles.profileImage}
      />

      {/* Name and Followers */}
      <Text style={styles.profileName}>Anushka Handa Sidana</Text>
      <Text style={styles.followersText}>1954 followers</Text>

      {/* View Profile Button */}
      <TouchableOpacity style={styles.viewProfileButton}>
        <Text style={styles.viewProfileText}>View profile</Text>
      </TouchableOpacity>

      {/* Chat Message */}
      <View style={styles.messageRow}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
          style={styles.messageAvatar}
        />
        <Text style={styles.messageText}>Hiii</Text>
      </View>

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Camera size={24} color="#000" />
        </TouchableOpacity>
        <TextInput
          placeholder="Message"
          style={styles.textInput}
          placeholderTextColor="#999"
        />
        <TouchableOpacity>
          <Link size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/home.png' }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/search--v1.png' }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
            style={[styles.navIcon, { borderRadius: 12 }]}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 812,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  statusIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  backButton: {
    position: 'absolute',
    top: 45,
    left: 16,
    zIndex: 10,
  },
  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignSelf: 'center',
    marginTop: 40,
  },
  profileName: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  followersText: {
    textAlign: 'center',
    marginTop: 4,
    color: '#666',
  },
  viewProfileButton: {
    marginTop: 12,
    alignSelf: 'center',
    borderColor: '#767676',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  viewProfileText: {
    fontSize: 14,
    color: '#333',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 300,
    paddingLeft: 10,
  },
  messageAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 8,
  },
  messageText: {
    fontSize: 15,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: '#767676',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 9,
    alignItems: 'center',
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 15,
    color: '#000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    width: screenWidth,
    paddingHorizontal: 20,
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
