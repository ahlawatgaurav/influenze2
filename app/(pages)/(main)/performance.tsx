import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { ArrowLeftIcon } from "lucide-react-native";

const influencers = [
    {
      name: "Pooja\nBansal",
      followers: "195,000",
      engagement: "52.3 K",
      image: { uri: "https://i.imgur.com/A1Z0hZP.png" }, // Use actual hosted image URLs
    },
    {
      name: "Meera\nKapoor",
      followers: "150,000",
      engagement: "45.4 %",
      image: { uri: "https://i.imgur.com/fn3T0Vv.png" },
    },
    {
      name: "Aisha\nDesai",
      followers: "150,000",
      engagement: "52.3",
      image: { uri: "https://i.imgur.com/2ds5Y7z.png" },
    },
  ];

const performanceMetrics = [
  { label: "Reach", value: "570 K" },
  { label: "Engagement", value: "232K" },
  { label: "Growth", value: "+14.0 %" },
];

export default function Performance(){
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ArrowLeftIcon size={24} color="black" />
        <Text style={styles.headerText}>Performance</Text>
      </View>

      {/* Campaign Performance */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Campaign Performance</Text>
        <View style={styles.profileContainer}>
          <Image source={{ uri: "https://i.imgur.com/jQ5WkDu.png" }} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Anushka Handa Sidana</Text>
            <Text style={styles.profileMeta}>1.954 followers   876 following</Text>
          </View>
        </View>

        <View style={styles.metricsContainer}>
          {performanceMetrics.map((metric, index) => (
            <Card key={index} style={styles.metricCard}>
              <View style={styles.metricCardContent}>
                <Text style={styles.metricLabel}>{metric.label}</Text>
                <Text style={styles.metricValue}>{metric.value}</Text>
              </View>
            </Card>
          ))}
        </View>
      </View>

      {/* Instagram Influencers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instagram Influencers</Text>
        <Card style={styles.influencerCard}>
          {influencers.map((influencer, index) => (
            <View key={index}>
              <View style={styles.influencerRow}>
                <Image source={influencer.image} style={styles.influencerImage} />
                <View style={styles.influencerInfo}>
                  <Text style={styles.influencerName}>{influencer.name}</Text>
                </View>
                <View style={styles.influencerStats}>
                  <Text style={styles.label}>Followers</Text>
                  <Text style={styles.value}>{influencer.followers}</Text>
                </View>
                <View style={styles.influencerStats}>
                  <Text style={styles.label}>Engagement</Text>
                  <Text style={styles.value}>{influencer.engagement}</Text>
                </View>
              </View>
              {index < influencers.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </Card>
      </View>

      {/* Tips to Boost */}
      <Card style={styles.tipsCard}>
        <View style={styles.tipsContainer}>
          <Image style={styles.tipsImage} />
          <View>
            <Text style={styles.tipsTitle}>Tips to Boost</Text>
            <Text style={styles.tipsText}>
              Host a Q&A session for your followers{"\n"}to improve engagement
            </Text>
          </View>
        </View>
      </Card>

      {/* Request Collaboration Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Request Collaboration</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 74,
    height: 74,
    borderRadius: 37,
  },
  profileTextContainer: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
  },
  profileMeta: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  metricCard: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 13,
  },
  metricCardContent: {
    alignItems: "center",
    paddingVertical: 12,
  },
  metricLabel: {
    fontSize: 13,
    color: "#333",
  },
  metricValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  influencerCard: {
    padding: 12,
    borderRadius: 13,
  },
  influencerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  influencerImage: {
    width: 41,
    height: 41,
    borderRadius: 20.5,
  },
  influencerInfo: {
    flex: 1,
    marginLeft: 8,
  },
  influencerName: {
    fontSize: 14,
    fontWeight: "500",
    // whiteSpace: "pre-line",
  },
  influencerStats: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  label: {
    fontSize: 13,
    color: "#666",
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 4,
  },
  tipsCard: {
    borderRadius: 13,
    padding: 12,
    marginBottom: 24,
  },
  tipsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  tipsImage: {
    width: 29,
    height: 29,
    marginRight: 12,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  tipsText: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#254efe",
    paddingVertical: 12,
    borderRadius: 11,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
});


