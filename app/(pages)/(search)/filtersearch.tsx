import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "lucide-react-native"; // Assuming you're using lucide-react-native
import Slider from "@react-native-community/slider";
import { useNavigation } from "expo-router";
const interestTags = [
    { name: "Fashion", icon: { uri: "https://cdn-icons-png.flaticon.com/512/1073/10733265.png" } },
    { name: "Travel", icon: { uri: "https://cdn-icons-png.flaticon.com/512/5086/5086786.png" } },
    { name: "Beauty", icon: { uri: "https://cdn-icons-png.flaticon.com/512/1078/10786603.png" } },
    { name: "Fitness", icon: { uri: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png" } },
    { name: "Tech", icon: { uri: "https://cdn-icons-png.flaticon.com/512/2721/2721269.png" } },
    { name: "Music", icon: { uri: "https://cdn-icons-png.flaticon.com/512/727/727245.png" } },
  ];

export default function NarrowYourSearchScreen(){
    const [reachValue, setReachValue] = useState(570);
    const [followerMin, setFollowerMin] = useState(1000); // 1M
const [followerMax, setFollowerMax] = useState(3000); // 3M
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon}>
          <ArrowLeftIcon size={24} onPress={() => navigation.goBack()} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Narrow your search</Text>
      </View>

      {/* Basic filters */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Basic filters</Text>

        <Text style={styles.filterLabel}>Followers</Text>
        <View style={styles.card}>
  <Text style={styles.cardText}>Between {followerMin / 1000}M and {followerMax / 1000}M</Text>

  <Text style={{ marginTop: 10 }}>Min</Text>
  <Slider
    style={{ width: "100%", height: 40 }}
    minimumValue={0}
    maximumValue={5000}
    step={100}
    minimumTrackTintColor="#000"
    maximumTrackTintColor="#ccc"
    thumbTintColor="#000"
    value={followerMin}
    onValueChange={(value) => setFollowerMin(value)}
  />

  <Text>Max</Text>
  <Slider
    style={{ width: "100%", height: 40 }}
    minimumValue={0}
    maximumValue={5000}
    step={100}
    minimumTrackTintColor="#000"
    maximumTrackTintColor="#ccc"
    thumbTintColor="#000"
    value={followerMax}
    onValueChange={(value) => setFollowerMax(value)}
  />
</View>

        <Text style={styles.filterLabel}>Reach</Text>
        
<View style={styles.card}>
  <Text style={styles.cardText}>Up to {reachValue}K</Text>

  <Slider
    style={{ width: "100%", height: 40, marginTop: 20 }}
    minimumValue={0}
    maximumValue={1000}
    step={10}
    minimumTrackTintColor="#000"
    maximumTrackTintColor="#ccc"
    thumbTintColor="#000"
    value={reachValue}
    onValueChange={(value) => setReachValue(value)}
  />
</View>

        <Text style={styles.filterLabel}>Do they share any of your Interest?</Text>
        <View style={[styles.card, { height: 220 }]}>
          <Text style={styles.cardText}>Filter by your interests</Text>
          <View style={styles.interestsContainer}>
            {interestTags.map((tag, index) => (
              <View key={index} style={styles.interestTag}>
                {tag.icon && <Image source={tag.icon} style={styles.tagIcon} />}
                <Text style={styles.tagText}>{tag.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 80,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  backIcon: {
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 10,
  },
  filterLabel: {
    fontSize: 16,
    color: "#333",
    marginTop: 20,
  },
  card: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#c2c2c2",
    borderRadius: 20,
    padding: 16,
    position: "relative",
  },
  cardText: {
    fontSize: 14,
    color: "#333",
  },
  line: {
    height: 1,
    backgroundColor: "#ccc",
    width: "100%",
    marginTop: 12,
  },
  circle: {
    position: "absolute",
    top: 60,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "black",
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    gap: 12,
  },
  interestTag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  tagIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 8,
  },
  tagText: {
    fontSize: 14,
    color: "#333",
  },
});

