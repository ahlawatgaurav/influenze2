import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ChevronRight, ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";

// const navItems = [
//   { icon: require("../assets/shape.png"), position: 0 },
//   { icon: require("../assets/shape-1.png"), position: 106 },
//   { icon: require("../assets/shape-3.png"), position: 208 },
//   { image: require("../assets/oval-1.png"), position: 290 },
// ];

const accountSettings = [
    {
      title: "Password and security",
      icon: {
        uri: "https://www.cleanpng.com/png-computer-icons-password-cracking-computer-security-3249598/",
      },
      action:()=>router.push("/(setting)/(manageprofile)/(password)/password")
    },
    {
      title: "Personal details",
      icon: {
        uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      },
      action:()=>router.push("/(setting)/(manageprofile)/(personaldetails)/details")
    },
  ];

export default function ManageProfile() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View  style={styles.header}>
        <TouchableOpacity onPress={()=>router.push("/(setting)/setting")} style={styles.backButton}>
          <ArrowLeft size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Profile</Text>
      </View>

      {/* Profile Card */}
      <TouchableOpacity onPress={() => router.push('/(setting)/profilesetting')}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://i.imgur.com/2nCt3Sb.jpg' }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileTitle}>Profiles</Text>
          <Text style={styles.profileSubtitle}>priyanshu_lakra</Text>
        </View>
        <ChevronRight size={16} color="gray" style={styles.chevronIcon} />
      </View>
    </TouchableOpacity>

      {/* Account Settings Title */}
      <Text style={styles.sectionTitle}>Account settings</Text>

      {/* Account Settings Card */}
      <View style={styles.settingsCard}>
  {accountSettings.map((setting, index) => (
    <TouchableOpacity
      key={index}
      style={styles.settingRow}
      onPress={setting.action}
      activeOpacity={0.7}
    >
      <Image source={setting.icon} style={styles.settingIcon} />
      <Text style={styles.settingTitle}>{setting.title}</Text>
      <ChevronRight size={16} color="gray" style={styles.chevronIcon} />
    </TouchableOpacity>
  ))}
</View>

      {/* Bottom Nav */}
      {/* <View style={styles.bottomNav}>
        {navItems.map((item, index) => (
          <View key={index} style={[styles.navItem, { left: item.position }]}>
            {item.image ? (
              <Image source={item.image} style={styles.navImage} />
            ) : (
              <Image source={item.icon} style={styles.navImage} />
            )}
          </View>
        ))}
        <View style={styles.navHandle} />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 65,
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingTop: 20,
  },
  backButton: {
    position: "absolute",
    left: 16,
    top: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  card: {
    marginTop: 20,
    marginHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  profileTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  profileSubtitle: {
    fontSize: 12,
    color: "#777",
  },
  chevronIcon: {
    marginLeft: "auto",
  },
  sectionTitle: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  settingsCard: {
    marginTop: 12,
    marginHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  settingIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  settingTitle: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  bottomNav: {
    height: 81,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderColor: "#ccc",
    marginTop: 30,
  },
  navItem: {
    position: "absolute",
    width: 75,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  navImage: {
    width: 23,
    height: 23,
    resizeMode: "contain",
  },
  navHandle: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    width: 134,
    height: 5,
    marginLeft: -67,
    backgroundColor: "#060606",
    borderRadius: 50,
  },
});