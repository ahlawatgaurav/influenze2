// import React from "react";
// import {
//   View,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Platform,
// } from "react-native";
// import { usePathname, useRouter } from "expo-router";

// export default function BottomTabs() {
//   const router = useRouter();
//   const pathname = usePathname();

//   return (
//     <View style={styles.nav}>
//       <TouchableOpacity onPress={() => router.push("/main")}>
//         <Image
//           source={{ uri: "https://img.icons8.com/ios-filled/50/home.png" }}
//           style={[
//             styles.icon,
//             pathname === "/main" && styles.activeIcon,
//           ]}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => router.push("/search")}>
//         <Image
//           source={{ uri: "https://img.icons8.com/ios-filled/50/search--v1.png" }}
//           style={[
//             styles.icon,
//             pathname === "/search" && styles.activeIcon,
//           ]}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => router.push("/profile")}>
//         <Image
//           source={{ uri: "https://img.icons8.com/ios-filled/50/user-male-circle.png" }}
//           style={[
//             styles.icon,
//             pathname === "/profile" && styles.activeIcon,
//           ]}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   nav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 12,
//     borderTopWidth: 1,
//     borderTopColor: "#ddd",
//     backgroundColor: "#fff",
//   },
//   icon: {
//     width: 26,
//     height: 26,
//     tintColor: "#999",
//   },
//   activeIcon: {
//     tintColor: "#000",
//   },
// });

import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { usePathname, useRouter } from "expo-router";

export default function BottomTabs() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => router.push("/main")}>
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/home.png" }}
          style={[styles.icon, pathname === "/main" && styles.activeIcon]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/search")}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/50/search--v1.png",
          }}
          style={[styles.icon, pathname === "/search" && styles.activeIcon]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(pages)/(notifications)/notification")}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/50/like--v1.png",
          }}
          style={[
            styles.icon,
            pathname === "/notification" && styles.activeIcon,
          ]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/profile")}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/50/user-male-circle.png",
          }}
          style={[styles.icon, pathname === "/profile" && styles.activeIcon]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: "#999",
  },
  activeIcon: {
    tintColor: "#000",
  },
});

