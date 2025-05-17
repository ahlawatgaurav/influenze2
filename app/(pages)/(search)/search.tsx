import React from "react";
import {
  View,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Search } from "lucide-react-native";

const gridImages = [
  { id: "1", src: "https://picsum.photos/id/1011/200/300" },
  { id: "2", src: "https://picsum.photos/id/1012/200/300" },
  { id: "3", src: "https://picsum.photos/id/1013/200/300" },
  { id: "4", src: "https://picsum.photos/id/1014/200/300" },
  { id: "5", src: "https://picsum.photos/id/1015/200/300" },
  { id: "6", src: "https://picsum.photos/id/1016/200/300" },
  { id: "7", src: "https://picsum.photos/id/1018/200/300" },
  { id: "8", src: "https://picsum.photos/id/1019/200/300" },
  { id: "9", src: "https://picsum.photos/id/1020/200/300" },
  { id: "10", src: "https://picsum.photos/id/1021/200/300" },
  { id: "11", src: "https://picsum.photos/id/1022/200/300" },
];

export default function InstagramSearch() {
  const router = useRouter();

  const renderItem = ({ item }: { item: typeof gridImages[0] }) => (
    <Image source={{ uri: item.src }} style={styles.image} resizeMode="cover" />
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
  <View style={styles.searchBar}>
    <Search size={18} color="#666" />
    <TextInput
      placeholder="Search"
      placeholderTextColor="#666"
      style={styles.input}
    />
  </View>
  <TouchableOpacity style={styles.filterButton} onPress={()=>router.push("/(pages)/(search)/filtersearch")}>
    <Image
      source={{ uri: "https://img.icons8.com/ios-glyphs/30/filter--v1.png" }}
      style={styles.filterIcon}
    />
  </TouchableOpacity>
</View>

        {/* Image Grid */}
        <FlatList
          data={gridImages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
        />

        {/* Bottom Navigation */}
        {/* <View style={styles.nav}>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push("/main")}>
            <Image
              source={{ uri: "https://img.icons8.com/ios-filled/50/home.png" }}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push("/search")}>
            <Image
              source={{ uri: "https://img.icons8.com/ios-filled/50/search--v1.png" }}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push("/profile")}>
            <Image
              source={{ uri: "https://img.icons8.com/ios-filled/50/user-male-circle.png" }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 30 : 0, // In case of Android notch
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    height: 40,
  },
  input: {
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
    color: "#000",
  },
  grid: {
    paddingHorizontal: 1,
  },
  image: {
    width: "33.3%",
    height: 120,
    margin: 0.5,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
    paddingBottom: Platform.OS === "ios" ? 8 : 4, // For bottom safe space
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: "#000",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginLeft: 8,
  },
  filterIcon: {
    width: 20,
    height: 20,
    tintColor: "#333",
  },
});
