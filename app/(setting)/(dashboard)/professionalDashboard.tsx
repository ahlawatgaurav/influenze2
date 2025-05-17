import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { ArrowLeft } from "lucide-react-native";

const performanceData = [
  { name: "Amanda\nHanson", height: 112, color: "#2A73FE", isUser: true },
  { name: "James\nMitchell", height: 93, color: "#9EA5AB", isUser: false },
  { name: "Ethan\nLewis", height: 83, color: "#9EA5AB", isUser: false },
];

const competitors = [
  { name: "Anna Willis", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Laura Stone", image: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "Michael\nAdams", image: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Rachel Scott", image: "https://randomuser.me/api/portraits/women/47.jpg" },
];

export default function ProfessionalDashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Professional Dashboard</Text>
      </View>

      <View style={styles.profileContainer}>
        <Avatar.Image
          size={103}
          source={{ uri: "https://randomuser.me/api/portraits/women/48.jpg" }}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Amanda Hanson</Text>
          <TouchableOpacity style={styles.insightButton}>
            <Text style={styles.insightText}>View Insights</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Your Performance</Text>
      <Text style={styles.sectionSubtitle}>Travel Instagram Influencers Comparison</Text>

      {/* <View style={styles.chartContainer}>
        {performanceData.map((item, index) => (
          <View key={index} style={styles.chartItem}>
            <View
              style={{
                height: item.height,
                backgroundColor: item.color,
                width: 30,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
              }}
            />
            <Text
              style={{
                textAlign: "center",
                color: item.isUser ? "#2A73FE" : "black",
              }}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </View> */}
      <View style={{ flexDirection: "row", height: 140, marginBottom: 20 }}>
  {/* Y-axis labels */}
  <View style={{ justifyContent: "space-between", marginRight: 10 }}>
    {["100 k", "7.5 k", "5.0 k", "0"].map((label, index) => (
      <Text key={index} style={{ fontSize: 10, color: "#999" }}>
        {label}
      </Text>
    ))}
  </View>

  {/* Bars */}
  <View style={styles.chartContainer}>
    {performanceData.map((item, index) => (
      <View key={index} style={styles.chartItem}>
        <View
          style={{
            height: item.height,
            backgroundColor: item.color,
            width: 30,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            color: item.isUser ? "#2A73FE" : "black",
            fontSize: 12,
            marginTop: 4,
          }}
        >
          {item.name}
        </Text>
      </View>
    ))}
  </View>
</View>


      <View style={styles.tipsContainer}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/3298/3298017.png" }}
          style={styles.tipIcon}
        />
        <View>
          <Text style={styles.tipsTitle}>Tips to Boost</Text>
          <Text style={styles.tipsText}>Post consistently and engage more{"\n"}with your audience</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Your Competitors</Text>

      <View style={styles.competitorsContainer}>
        {competitors.map((comp, index) => (
          <View key={index} style={styles.competitorItem}>
            <Avatar.Image size={65} source={{ uri: comp.image }} />
            <Text style={styles.competitorName}>{comp.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  profileTextContainer: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "600",
  },
  insightButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#c2bcbc",
    borderRadius: 15,
    paddingHorizontal: 39,
    paddingVertical: 2,
  },
  insightText: {
    fontSize: 13,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#333",
    marginBottom: 40,
  },
  // chartContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   alignItems: "flex-end",
  //   height: 140,
  //   marginBottom: 20,
  // },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    flex: 1,
  },
  chartItem: {
    alignItems: "center",
  },
  tipsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    marginVertical: 20,
  },
  tipIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  tipsText: {
    fontSize: 13,
    marginTop: 4,
  },
  competitorsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 40,
  },
  competitorItem: {
    alignItems: "center",
  },
  competitorName: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
});
