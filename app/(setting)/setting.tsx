import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  LogOut,
  Search,
} from "lucide-react-native";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

const navItems = [
  { icon: "https://img.icons8.com/ios/50/home--v1.png" },
  { icon: "https://img.icons8.com/ios/50/compass--v1.png" },
  { icon: "https://img.icons8.com/ios/50/plus-math--v1.png" },
  { icon: "https://img.icons8.com/ios/50/user--v1.png" },
];

const settingsCards = [
  {
    title: "Manage profile",
    icon: "https://img.icons8.com/ios/50/user-male-circle--v1.png",
    action:()=> router.push("/(setting)/(manageprofile)/manageprofile")
  },
  {
    title: "Manage interests",
    icon: "https://img.icons8.com/ios/50/like--v1.png",
    action:()=>router.push("/(setting)/(manageinterests)/manageintrestspage")
  },
  {
    title: "Professional Dashboard",
    icon: "https://img.icons8.com/ios/50/dashboard.png",
    action:()=>router.push("/(setting)/(dashboard)/professionalDashboard")
  },
  {
    title: "Connected Instagram / social accounts",
    icon: "https://img.icons8.com/ios/50/instagram-new--v1.png",
  },
  {
    title: "Logout",
    icon: "https://img.icons8.com/ios/50/logout-rounded-left.png",
  },
];

export default function SettingScreen(){
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ChevronLeft size={24} color="black" />
        <Text style={styles.headerTitle}>Settings</Text>
        <Search size={20} color="black" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
  {settingsCards.map((card, index) => (
    <TouchableOpacity key={index} onPress={card.action}>
      <View style={styles.card}>
        <Image source={{ uri: card.icon }} style={styles.cardImage} />
        <Text style={styles.cardText}>{card.title}</Text>
        <ChevronRight size={16} color="gray" style={styles.chevron} />
      </View>
    </TouchableOpacity>
  ))}
</ScrollView>

      {/* Bottom Nav */}
      {/* <View style={styles.bottomNav}>
        {navItems.map((item, index) => (
          <TouchableOpacity key={index}>
            <Image source={{ uri: item.icon }} style={styles.navIcon} />
          </TouchableOpacity>
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  scrollContainer: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardImage: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  cardIcon: {
    marginRight: 16,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
  },
  chevron: {},
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});


