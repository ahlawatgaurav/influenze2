import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import * as Progress from "react-native-progress";

const competitors = [
  {
    name: "Shruti Kapoor",
    followers: "245K",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg", // placeholder
  },
  {
    name: "Neha Vyas",
    followers: "227K",
    image:
      "https://randomuser.me/api/portraits/women/66.jpg", // placeholder
  },
  {
    name: "Priya Rathi",
    followers: "210K",
    image:
      "https://randomuser.me/api/portraits/women/67.jpg", // placeholder
  },
];

const insights = [
  { title: "Reach", value: "95K", progressValue: 0.75 },
  { title: "Video Views", value: "", progressValue: 0.6 },
];

const comparisonInsights = [
  { title: "Follower Growth", value: "+0.4 %", progressValue: 0.4 },
  { title: "Engagement", value: "", progressValue: 0.55 },
];

export default function  BusinessDashboard () {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Business Dashboard</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/68.jpg", // profile placeholder
          }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Anushka Handa Sidana</Text>
          <Text style={styles.profileLocation}>India</Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>232K</Text>
              <Text style={styles.statLabel}>Follower Count</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>4.1 %</Text>
              <Text style={styles.statLabel}>Engagement</Text>
            </View>
          </View>

          <Text style={styles.brandValue}>$23,000</Text>
          <Text style={styles.brandLabel}>Brand value</Text>
        </View>
      </View>

      {/* Contact Button */}
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact</Text>
      </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Top Competitors */}
      <Text style={styles.sectionTitle}>Top competitors</Text>
      {competitors.map((competitor, i) => (
        <View key={i} style={styles.competitorRow}>
          <Image source={{ uri: competitor.image }} style={styles.competitorAvatar} />
          <Text style={styles.competitorName}>{competitor.name}</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.competitorFollowers}>{competitor.followers}</Text>
          <Text style={styles.followersLabel}>Followers</Text>
        </View>
      ))}

      {/* Tips Card */}
      <View style={styles.tipsCard}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" }}
          style={styles.tipsIcon}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.tipsTitle}>Tips to Boost Performance</Text>
          <Text style={styles.tipsText}>
            Try incorporating trending topics and themes into your content to
            increase visibility.
          </Text>
        </View>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Audience Insights */}
      <Text style={styles.sectionTitle}>Audience Insights</Text>
      <View style={styles.insightsRow}>
        {insights.map((insight, i) => (
          <View key={i} style={styles.insightBox}>
            <Text style={styles.insightTitle}>{insight.title}</Text>
            <Progress.Bar
              progress={insight.progressValue}
              width={120}
              height={6}
              color="#000"
              unfilledColor="#d9d9d9"
              borderWidth={0}
              style={{ marginTop: 8 }}
            />
            {insight.value ? (
              <Text style={styles.insightValue}>{insight.value}</Text>
            ) : null}
          </View>
        ))}
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Comparison */}
      <Text style={styles.comparisonTitle}>vs. @anushkahanda</Text>
      <View style={styles.insightsRow}>
        {comparisonInsights.map((insight, i) => (
          <View key={i} style={styles.insightBox}>
            <Text style={styles.insightTitle}>{insight.title}</Text>
            <Progress.Bar
              progress={insight.progressValue}
              width={120}
              height={6}
              color="#000"
              unfilledColor="#d9d9d9"
              borderWidth={0}
              style={{ marginTop: 8 }}
            />
            {insight.value ? (
              <Text style={styles.insightValue}>{insight.value}</Text>
            ) : null}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: "600",
    marginLeft: 16,
  },
  profileSection: {
    flexDirection: "row",
    marginTop: 30,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 4,
  },
  profileLocation: {
    fontSize: 15,
    color: "#555",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  statItem: {
    marginRight: 32,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  statLabel: {
    fontSize: 13,
    color: "#555",
  },
  brandValue: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  brandLabel: {
    fontSize: 13,
    color: "#555",
  },
  contactButton: {
    backgroundColor: "#254efe",
    borderRadius: 11,
    paddingVertical: 10,
    marginVertical: 24,
    alignItems: "center",
  },
  contactButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#dcdcdc",
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 12,
  },
  competitorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  competitorAvatar: {
    width: 29,
    height: 29,
    borderRadius: 15,
  },
  competitorName: {
    marginLeft: 16,
    fontSize: 14,
    fontWeight: "500",
  },
  competitorFollowers: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 4,
  },
  followersLabel: {
    fontSize: 13,
    color: "#999",
  },
  tipsCard: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  tipsIcon: {
    width: 38,
    height: 38,
    marginRight: 16,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  tipsText: {
    fontSize: 14,
    color: "#555",
  },
  insightsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  insightBox: {
    flex: 1,
    marginRight: 12,
  },
  insightTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  insightValue: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  comparisonTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#254efe",
    marginVertical: 12,
  },
});
