import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
const { width } = Dimensions.get("window");

export default function othersprofile(){
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => setMenuVisible(!menuVisible);
  const profileData = {
    username: "jacob_w",
    name: "Jacob West",
    bio: "Digital goodies designer @pixsellz\nEverything is designed.",
    stats: [
      { label: "Categories\nFollowed", value: "54" },
      { label: "Saved\nInspirations", value: "834" },
      { label: "Following", value: "162" },
    ],
  };

  const categoryCards = [
    { image: require("../../../assets/images/profileImage1.jpg"), title: "Fashion", count: "16 influencers" },
    { image: require("../../../assets/images/profileimage2.jpg"), title: "Travel", count: "12 influencers" },
    { image: require("../../../assets/images/profileimage3.jpg"), title: "Fitness", count: "" },
    { image: require("../../../assets/images/profileimage4.jpg"), title: "Yoga", count: "" },
  ];

  return (
    <TouchableWithoutFeedback onPress={() => menuVisible && setMenuVisible(false)}>
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
      {/* Profile Section */}
      <View style={styles.profileCard}>
      <View style={styles.usernameRow}>
      {menuVisible && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => {
              setMenuVisible(false);
              router.push("/(pages)/(profile)/businessDashboard");
            }}>
              <Text style={styles.dropdownText}>Business Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => {setMenuVisible(false)
                router.push("/(pages)/(main)/performance")
            }}>
              <Text style={styles.dropdownText}>Performance</Text>
            </TouchableOpacity>
          </View>
        )}
  <Text style={styles.username}>{profileData.username}</Text>
  <TouchableOpacity onPress={toggleMenu} style={styles.usernameIcon}>
    <Text style={{ fontSize: 20, fontWeight: "600", color: "#333" }}>⋮</Text>
  </TouchableOpacity>
</View>

        <View style={styles.profileInfo}>
          <Image source={require("../../../assets/images/profile.png")} style={styles.profileImage} />
          <View style={styles.statsContainer}>
            {profileData.stats.map((stat, index) => (
              <View key={index} style={styles.statBlock}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.bioContainer}>
            <Text style={styles.name}>{profileData.name}</Text>
            <Text style={styles.bio}>{profileData.bio}</Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Contact</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Statistics</Text></TouchableOpacity>
        </View>
      </View>

      {/* Category Cards */}
      <View style={styles.cardGrid}>
        {categoryCards.map((card, index) => (
          <View key={index} style={styles.categoryCard}>
            <Image source={card.image} style={styles.cardImage} />
            {card.title ? (
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardCount}>{card.count}</Text>
              </View>
            ) : null}
          </View>
        ))}
      </View>
    </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileCard: {
    width,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    gap: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  profileInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  statBlock: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  statLabel: {
    fontSize: 12,
    textAlign: "center",
    color: "#555",
  },
  bioContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  bio: {
    fontSize: 12,
    textAlign: "center",
    color: "#444",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#254efe",
    paddingVertical: 8,
    borderRadius: 6,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  categoryCard: {
    width: width / 2 - 30,
    marginBottom: 20,
    alignItems: "center",
  },
  cardImage: {
    width: 150,
    height: 147,
    borderRadius: 8,
  },
  cardTextContainer: {
    marginTop: 8,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  cardCount: {
    fontSize: 11,
    color: "#666",
  },
  usernameIcon: {
    marginLeft: 8,
  },
  dropdownMenu: {
    position: "absolute",
    top: 70,
    right: 20,
    backgroundColor: "rgba(38, 38, 38, 0.95)",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    zIndex: 100,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  dropdownItem: {
    paddingVertical: 8,
  },
  dropdownText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  
  
});

