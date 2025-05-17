import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";

export default function PersonalDetails()  {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Status Bar */}
      {/* <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.statusIcons}>
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Mobile_signal_icon.png" }}
            style={styles.signalIcon}
          />
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/b/b5/WiFi_Logo.svg" }}
            style={styles.wifiIcon}
          />
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Battery_full_100_icon.png" }}
            style={styles.batteryIcon}
          />
        </View>
      </View> */}

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/93/93634.png" }}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Page Title */}
      <Text style={styles.pageTitle}>Personal details</Text>

      {/* Personal Details Card */}
      <View style={styles.card}>
        {/* Contact Info */}
        <TouchableOpacity style={styles.cardRow}>
          <View>
            <Text style={styles.cardLabel}>Contact info</Text>
            <Text style={styles.cardValue}>jacob_w</Text>
          </View>
          <ChevronRight size={16} color="gray" />
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* Date of Birth */}
        <TouchableOpacity style={styles.cardRow}>
          <View>
            <Text style={styles.cardLabel}>Date of birth</Text>
            <Text style={styles.cardValue}>22 Oct 1995</Text>
          </View>
          <ChevronRight size={16} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      {/* <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navIcon}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png" }}
            style={styles.navImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/54/54481.png" }}
            style={styles.navImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png" }}
            style={styles.navImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/747/747376.png" }}
            style={styles.navImage}
          />
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 375,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  timeText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
  statusIcons: {
    flexDirection: "row",
    gap: 10,
  },
  signalIcon: { width: 20, height: 12, resizeMode: "contain" },
  wifiIcon: { width: 18, height: 12, resizeMode: "contain" },
  batteryIcon: { width: 22, height: 12, resizeMode: "contain" },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  pageTitle: {
    fontSize: 21,
    fontWeight: "600",
    marginTop: 100,
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  card: {
    width: 347,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingVertical: 10,
    marginBottom: 40,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  cardLabel: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  cardValue: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 20,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 375,
    height: 80,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  navIcon: {
    alignItems: "center",
  },
  navImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});


