import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ChevronRightIcon } from "lucide-react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "expo-router";
const navItems = [
  { icon: "https://cdn-icons-png.flaticon.com/512/25/25694.png" },
  { icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png" },
  { icon: "https://cdn-icons-png.flaticon.com/512/61/61112.png" },
  { image: "https://cdn-icons-png.flaticon.com/512/64/64572.png" },
];

const interestCategories = [
  {
    title: "Category",
    icon: "https://cdn-icons-png.flaticon.com/512/9759/9759367.png",
  },
  {
    title: "Location",
    icon: "https://cdn-icons-png.flaticon.com/512/1594/1594980.png",
  },
];

export default function ManageInterestScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Status Bar Placeholder */}
      {/* <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/633/633611.png" }}
            style={styles.statusIcon}
          />
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/483/483356.png" }}
            style={styles.statusIcon}
          />
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png" }}
            style={styles.statusIcon}
          />
        </View>
      </View> */}

      {/* Header */}
      <View style={styles.header}>
       <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
               <ArrowLeft size={24} color="#000" />
             </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Interests</Text>
      </View>

      {/* Interest Category Card */}
      <View style={styles.card}>
        {interestCategories.map((category, index) => (
          <View key={index} style={styles.cardItem}>
            <Image source={{ uri: category.icon }} style={styles.cardIcon} />
            <Text style={styles.cardText}>{category.title}</Text>
            <ChevronRightIcon size={16} color="#999" style={styles.chevron} />
          </View>
        ))}
      </View>

      {/* Bottom Navigation Bar */}
      {/* <View style={styles.navBar}>
        {navItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            {item.icon && (
              <Image source={{ uri: item.icon }} style={styles.navIcon} />
            )}
            {item.image && (
              <Image source={{ uri: item.image }} style={styles.navIcon} />
            )}
          </TouchableOpacity>
        ))}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  statusBar: {
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  time: {
    fontSize: 16,
    fontWeight: "600",
  },
  statusIcons: {
    flexDirection: "row",
  },
  statusIcon: {
    width: 18,
    height: 18,
    marginLeft: 6,
    resizeMode: "contain",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  card: {
    marginTop: 20,
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 3,
  },
  cardItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  cardIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  chevron: {
    marginRight: 10,
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f5f5f5",
    width: "100%",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
