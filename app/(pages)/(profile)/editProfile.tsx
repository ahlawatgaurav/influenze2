import { router } from "expo-router";
import React, { JSX } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

export default function editProfile() {
  const profileData = {
    name: "Priyanshu Lakra",
    username: "priyanshu_lakra",
    website: "",
    bio: "Digital goodies designer @pixsellz\nEverything is designed.",
  };

  const formFields = [
    { label: "Name", value: profileData.name },
    { label: "Username", value: profileData.username },
    { label: "Website", value: profileData.website || "Website" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Status Bar and Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text style={styles.cancelText} onPress={()=>router.push("/(pages)/profile")}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity>
          <Text style={styles.doneText} onPress={()=>router.push("/(pages)/profile")}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Picture */}
      <View style={styles.profilePhotoContainer}>
        <Avatar.Image size={95} 
        source={{ uri: 'https://i.imgur.com/2nCt3Sb.jpg' }}
         />
        <TouchableOpacity>
          <Text style={styles.changePhotoText}>Change Profile Photo</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        {formFields.map((field, index) => (
          <View key={index} style={styles.fieldRow}>
            <Text style={styles.fieldLabel}>{field.label}</Text>
            <Text style={field.value ? styles.fieldValue : styles.placeholder}>
              {field.value}
            </Text>
            {index < formFields.length - 1 && <View style={styles.separatorLine} />}
          </View>
        ))}

        {/* Bio */}
        <View style={styles.bioRow}>
          <Text style={styles.fieldLabel}>Bio</Text>
          <Text style={styles.bioText}>
            Digital goodies designer <Text style={styles.link}>@pixsellz</Text>{"\n"}
            Everything is designed.
          </Text>
        </View>
        <View style={styles.separatorLine} />
      </View>

      {/* Home Indicator */}
      <View style={styles.homeIndicator} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    height: 88,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: "#f5f5f5",
  },
  cancelText: {
    fontSize: 16,
    color: "#333",
  },
  doneText: {
    fontSize: 16,
    color: "#3897f0",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    textAlignVertical: "center",
  },
  profilePhotoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  changePhotoText: {
    color: "#3897f0",
    fontSize: 13,
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    width: "100%",
    marginTop: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  fieldRow: {
    paddingVertical: 10,
  },
  fieldLabel: {
    fontSize: 15,
    color: "#333",
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 15,
    color: "#000",
  },
  placeholder: {
    fontSize: 15,
    color: "#aaa",
  },
  separatorLine: {
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 10,
  },
  bioRow: {
    paddingVertical: 10,
  },
  bioText: {
    fontSize: 15,
    color: "#000",
  },
  link: {
    color: "#05386b",
  },
  homeIndicator: {
    height: 5,
    width: 134,
    backgroundColor: "#000",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 20,
  },
});

