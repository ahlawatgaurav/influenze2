import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function PasswordScreen(){
  const navigation = useNavigation();

  const navIcons = [
    { src: "https://img.icons8.com/ios-filled/50/home.png", alt: "Home" },
    { src: "https://img.icons8.com/ios-filled/50/search--v1.png", alt: "Search" },
    { src: "https://img.icons8.com/ios-filled/50/like--v1.png", alt: "Favorites" },
    { src: "https://randomuser.me/api/portraits/men/1.jpg", alt: "Profile", isImage: true },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Status Bar Placeholder */}
      {/* <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View> */}

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color="#000" />
      </TouchableOpacity>

      {/* Username */}
      <Text style={styles.username}>priyanshu_lakra</Text>

      {/* Header */}
      <Text style={styles.header}>Change password</Text>

      {/* Password Requirements */}
      <Text style={styles.requirements}>
        Your password must be at least 6 characters and should include a combination of numbers,
        letters and special characters (!$@%).
      </Text>

      {/* Inputs */}
      <TextInput style={styles.input} placeholder="Current password" secureTextEntry />
      <TextInput style={styles.input} placeholder="New password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Retype new password" secureTextEntry />

      {/* Forgotten Password */}
      <TouchableOpacity>
        <Text style={styles.link}>Forgotten your password?</Text>
      </TouchableOpacity>

      {/* Change Password Button */}
      <TouchableOpacity style={styles.changeButton}>
        <Text style={styles.changeButtonText}>Change Password</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        {navIcons.map((icon, index) => (
          <TouchableOpacity key={index} style={styles.navIconWrapper}>
            {icon.isImage ? (
              <Image source={{ uri: icon.src }} style={styles.navImage} />
            ) : (
              <Image source={{ uri: icon.src }} style={styles.navIcon} />
            )}
          </TouchableOpacity>
        ))}
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  statusBar: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  backButton: {
    marginLeft: 12,
    marginTop: 10,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    fontSize: 17,
    marginLeft: 15,
    marginTop: 10,
    color: "#444",
  },
  header: {
    fontSize: 21,
    fontWeight: "600",
    marginLeft: 15,
    marginTop: 15,
    color: "#000",
  },
  requirements: {
    fontSize: 15,
    color: "#444",
    marginHorizontal: 15,
    marginTop: 15,
  },
  input: {
    height: 55,
    marginHorizontal: 15,
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
  },
  link: {
    color: "#2168e0",
    marginTop: 20,
    marginLeft: 15,
    fontSize: 14,
  },
  changeButton: {
    backgroundColor: "#254efe",
    height: 44,
    borderRadius: 11,
    marginHorizontal: 15,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  changeButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    paddingVertical: 15,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  navIconWrapper: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});