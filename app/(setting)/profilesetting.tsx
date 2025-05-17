import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';

const navigationItems = [
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg',
    position: 0,
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Sample.svg',
    position: 105,
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Icon_placeholder.svg',
    position: 208,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Avatar_icon_green.svg',
    position: 290,
  },
];

const profileSettings = [
  { label: 'Name' ,
    action:()=>router.push("/(setting)/(manageprofile)/profilename")
  },
  { label: 'Username' ,
    action:() => router.push("/(setting)/(manageprofile)/profileusername")
  },
  { label: 'Profile picture' },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Status Bar & Back Icon */}
      <View style={styles.statusBar} />
      <ChevronLeft style={styles.backIcon} size={24} color="black" />

      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i.imgur.com/2nCt3Sb.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Priyanshu Lakra</Text>
        <Text style={styles.profileUsername}>priyanshu_lakra</Text>
      </View>

      {/* Settings Card */}
      <Card style={styles.settingsCard}>
      {profileSettings.map((setting, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={setting.action}
            disabled={!setting.action}
            style={styles.settingRow}
          >
            <Text style={styles.settingText}>{setting.label}</Text>
            <ChevronRight size={16} color="#6B7280" />
          </TouchableOpacity>
          {index < profileSettings.length - 1 && (
            <View style={styles.separator} />
          )}
        </View>
      ))}
    </Card>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNavBar}>
        {navigationItems.map((item, index) => (
          <View key={index} style={[styles.navIconWrapper, { left: item.position }]}>
            {item.image ? (
              <Image source={{ uri: item.image }} style={styles.navImage} />
            ) : (
              <Image source={{ uri: item.icon }} style={styles.navImage} />
            )}
          </View>
        ))}
        <View style={styles.homeIndicator} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  statusBar: {
    height: 44,
    width: '100%',
    backgroundColor: 'white',
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 12,
  },
  profileContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  profileImage: {
    width: 87,
    height: 87,
    borderRadius: 43.5,
  },
  profileName: {
    marginTop: 16,
    fontSize: 14,
    color: '#1F2937',
    fontWeight: '600',
  },
  profileUsername: {
    fontSize: 12,
    color: '#1F2937',
  },
  settingsCard: {
    width: 347,
    height: 151,
    marginTop: 40,
    padding: 12,
    borderRadius: 16,
    elevation: 2,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
  },
  settingText: {
    fontSize: 14,
    color: '#1F2937',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    width: 375,
    height: 81,
    backgroundColor: '#F9FAFB',
    borderTopWidth: 0.5,
    borderTopColor: '#D1D5DB',
    justifyContent: 'center',
  },
  navIconWrapper: {
    position: 'absolute',
    width: 75,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navImage: {
    width: 23,
    height: 23,
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
    width: 134,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#060606',
  },
});
