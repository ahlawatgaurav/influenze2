
import React from "react";
import {
  ArrowLeft,
  Bell,
  Bookmark,
  Settings,
} from "lucide-react-native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const todayNotifications = [
  {
    id: 1,
    title: "Weekly Drop Alerts",
    description: "New sneakers releasing soon",
    time: "1h",
    icon: "bell",
  },
  {
    id: 2,
    title: "Category Recommendations",
    description: "Check out new categories you may like",
    time: "3h",
    icon: "app",
  },
  {
    id: 3,
    title: "New Saved Board Additions",
    description: "3 new items added to your board",
    time: "6h",
    icon: "bookmark",
  },
  {
    id: 4,
    title: "Influencer Updates",
    description: "5 new creators trending in Travel",
    time: "12h",
    icon: "influencer",
  },
];

const yesterdayNotifications = [
  {
    id: 5,
    title: "Weekly Drop Alerts",
    description: "New sneakers releasing soon",
    time: "1d",
    icon: "bell",
  },
  {
    id: 6,
    title: "Category Recommendations",
    description: "Check out new categories you may like",
    time: "1d",
    icon: "app",
  },
  {
    id: 7,
    title: "New Saved Board Additions",
    description: "3 new items added to your board",
    time: "1d",
    icon: "bookmark",
  },
];

const renderIcon = (icon: string) => {
  switch (icon) {
    case "bell":
      return <Bell size={20} color="#000" />;
    case "bookmark":
      return <Bookmark size={20} color="#000" />;
    case "app":
      return (
        <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/9302/9302112.png" }}
          style={{ width: 20, height: 20 }}
        />
      );
    case "influencer":
      return (
        <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png" }}
          style={{ width: 20, height: 20 }}
        />
      );
    default:
      return null;
  }
};

const NotificationCard = ({ notification }: { notification: any }) => (
  <View style={styles.card}>
    <View style={styles.icon}>{renderIcon(notification.icon)}</View>
    <View style={styles.content}>
      <Text style={styles.title}>{notification.title}</Text>
      <Text style={styles.description}>{notification.description}</Text>
    </View>
    <Text style={styles.time}>{notification.time}</Text>
  </View>
);

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Settings size={20} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Today</Text>
        {todayNotifications.map((n) => (
          <NotificationCard key={n.id} notification={n} />
        ))}

        <Text style={styles.sectionTitle}>Yesterday</Text>
        {yesterdayNotifications.map((n) => (
          <NotificationCard key={n.id} notification={n} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginVertical: 12,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    color: "#000",
  },
  description: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: "#999",
    marginLeft: 8,
  },
});
