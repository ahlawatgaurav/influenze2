import { router } from "expo-router";
import { MessageCircle } from "lucide-react-native";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function InstagramMain () {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
      <Text style={styles.logo}>Influenze</Text>

      <TouchableOpacity onPress={() => router.push("/(pages)/(main)/messages")}>
        <MessageCircle size={24} color="#000" />
        {/* OR use an image icon: */}
        {/* <Image
          source={{ uri: "https://img.icons8.com/ios/50/message-group.png" }}
          style={{ width: 24, height: 24 }}
        /> */}
      </TouchableOpacity>
    </View>

      {/* Stories Section */}
      <Image
        style={styles.stories}
        source={{ uri: "https://via.placeholder.com/375x98.png?text=Stories" }}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Post Header */}
          <TouchableOpacity onPress={()=>router.push("/(pages)/(main)/othersprofile")}>
            
        <View  style={styles.postHeader}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://randomuser.me/api/portraits/men/11.jpg" }}
          />
          <View style={styles.userInfo}>

              <Text style={styles.username}>jacob_w</Text>
              <Text style={styles.location}>Tokyo, Japan</Text>
          </View>
        </View>
            </TouchableOpacity>

        {/* Post Image */}
        <Image
          style={styles.postImage}
          source={{ uri: "https://picsum.photos/375/375" }}
        />
        <View style={styles.imageIndex}>
          <Text style={styles.imageIndexText}>1/3</Text>
        </View>

        {/* Post Actions */}
        <View style={styles.actions}>
          <Image
            style={styles.icon}
            source={{ uri: "https://img.icons8.com/ios/50/like.png" }}
          />
          <Image
            style={styles.icon}
            source={{ uri: "https://img.icons8.com/ios/50/speech-bubble.png" }}
          />
          <Image
            style={styles.icon}
            source={{ uri: "https://img.icons8.com/ios/50/share.png" }}
          />
        </View>

        {/* Post Likes & Caption */}
        <View style={styles.captionContainer}>
          <Text style={styles.likesText}>
            Liked by <Text style={styles.bold}>craig_love</Text> and{" "}
            <Text style={styles.bold}>44,686 others</Text>
          </Text>
          <Text style={styles.caption}>
            <Text style={styles.bold}>joshua_l</Text> The game in Japan was
            amazing and I want to share some photos
          </Text>
          <Text style={styles.date}>September 19</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <Image
          style={styles.navIcon}
          source={{ uri: "https://img.icons8.com/ios/50/home.png" }}
        />
        <Image
          style={styles.navIcon}
          source={{ uri: "https://img.icons8.com/ios/50/search--v1.png" }}
        />
        <Image
          style={styles.navIcon}
          source={{ uri: "https://img.icons8.com/ios/50/plus-math.png" }}
        />
        <Image
          style={styles.navIcon}
          source={{ uri: "https://randomuser.me/api/portraits/men/11.jpg" }}
        />
      </View> */}
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    paddingHorizontal: 16,
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  stories: {
    width: "100%",
    height: 98,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginLeft: 10,
  },
  username: {
    fontWeight: "600",
    fontSize: 13,
  },
  location: {
    fontSize: 11,
    color: "#555",
  },
  postImage: {
    width: "100%",
    height: 375,
  },
  imageIndex: {
    position: "absolute",
    top: 270,
    right: 15,
    backgroundColor: "#121212b2",
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  imageIndexText: {
    color: "#fff",
    fontSize: 12,
  },
  actions: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  captionContainer: {
    paddingHorizontal: 15,
  },
  likesText: {
    fontSize: 13,
  },
  caption: {
    marginTop: 8,
    fontSize: 13,
  },
  date: {
    marginTop: 8,
    fontSize: 11,
    color: "#999",
  },
  bold: {
    fontWeight: "bold",
  },
  bottomNav: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
    backgroundColor: "#fff",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});
