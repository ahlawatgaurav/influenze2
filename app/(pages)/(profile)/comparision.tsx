import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Avatar, ProgressBar } from "react-native-paper";
import { ChevronRight, ArrowLeft } from "lucide-react-native";

const screenWidth = Dimensions.get("window").width;

export default function ComparisonTo(){
  const profileData = {
    name: "Anushka Handa Sidana",
    category: "Fashion & Beauty",
    photo: "https://example.com/photo.png",
    metrics: [
      { label: "Followers", value: "1,954" },
      { label: "Following", value: "876" },
      { label: "Engagement Rate", value: "6.7 %" },
    ],
  };

  const campaignData = [
    {
      brand: "Estee Lauder",
      status: "Completed - October 2023",
      image: "https://example.com/rectangle-1456.svg",
    },
    {
      brand: "Bath & Body works",
      status: "Active Since February 2024",
      image: "https://example.com/rectangle-1457.svg",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Avatar.Image size={74} source={{ uri: profileData.photo }} style={styles.avatar} />
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.category}>{profileData.category}</Text>

        <View style={styles.metricsRow}>
          {profileData.metrics.map((metric, index) => (
            <View key={index} style={styles.metricCard}>
              <Text style={styles.metricValue}>{metric.value}</Text>
              <Text style={styles.metricLabel}>{metric.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.sectionTitle}>Comparison to Competitors</Text>
      <View style={styles.rowBetween}>
        <Text style={styles.engagementLabel}>Engagement Rate 6.7%</Text>
        <Text style={styles.engagementValue}>6.7 %</Text>
      </View>
      <ProgressBar progress={0.63} color="#000" style={styles.progress} />

      <Text style={styles.sectionTitle}>Tips to Boost Performance</Text>
      <View style={styles.tipRow}>
        <Image
          source={{ uri: "https://example.com/bulb.png" }}
          style={styles.bulbIcon}
        />
        <Text style={styles.tipText}>
          Create more interactive Stories to{"\n"}
          increase engagement.
        </Text>
        <ChevronRight size={18} color="#000" />
      </View>

      <Text style={styles.sectionTitle}>Campaigns and Collaborations</Text>
      {campaignData.map((campaign, index) => (
        <View key={index} style={styles.campaignRow}>
          <Image source={{ uri: campaign.image }} style={styles.campaignImage} />
          <View style={styles.campaignTextBox}>
            <Text style={styles.campaignBrand}>{campaign.brand}</Text>
            <Text style={styles.campaignStatus}>{campaign.status}</Text>
          </View>
          <ChevronRight size={18} color="#000" />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    marginTop: 40,
    marginBottom: 16,
  },
  card: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#666",
  },
  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  },
  metricCard: {
    alignItems: "center",
    width: screenWidth / 3 - 24,
    padding: 8,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    borderRadius: 13,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  metricLabel: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 16,
    color: "#000",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  engagementLabel: {
    fontSize: 15,
    color: "#000",
  },
  engagementValue: {
    fontSize: 15,
    color: "#333",
  },
  progress: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#d9d9d9",
    marginBottom: 16,
  },
  tipRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  bulbIcon: {
    width: 29,
    height: 29,
    marginRight: 10,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },
  campaignRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  campaignImage: {
    width: 51,
    height: 51,
    marginRight: 12,
  },
  campaignTextBox: {
    flex: 1,
  },
  campaignBrand: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
  campaignStatus: {
    fontSize: 13,
    color: "#666",
  },
});

