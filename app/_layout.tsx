// import { useEffect } from 'react';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { useFrameworkReady } from '@/hooks/useFrameworkReady';

// export default function RootLayout() {
//   useFrameworkReady();

//   return (
//     <>
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </>
//   );
// }

import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFrameworkReady } from "@/hooks/useFrameworkReady";
import { View, SafeAreaView, StyleSheet, Platform } from "react-native";
import BottomTabs from "../app/components/BottomTabs";
import { usePathname } from "expo-router";

export default function RootLayout() {
  useFrameworkReady();
  const pathname = usePathname();

  // Pages where bottom bar should be visible
  const showBottomBar = ["/main", "/search", "/profile" , "/setting" , "/manageprofile" , "/profilesetting" , "/profilename" , "/profileusername" ,"/password" , "/details" , "/notification" ,"/messages" , "/chat", "/manageintrestspage" , "/professionalDashboard" , "/performance"].includes(pathname);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="+not-found" />
        </Stack>
      </View>

      {showBottomBar && <BottomTabs />}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
});
