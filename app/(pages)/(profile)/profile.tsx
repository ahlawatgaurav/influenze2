// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// export default function ProfileScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>priyanshu_lakra</Text>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity>
//             <Feather name="plus-square" size={24} color="black" />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Feather onPress={()=>router.push("/(setting)/setting")} name="menu" size={24} color="black" style={styles.menuIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.profileInfo}>
//         <Image
//           source={{ uri: 'https://i.imgur.com/2nCt3Sbl.jpg' }}
//           style={styles.profileImage}
//         />
//         <View style={styles.statsContainer}>
//           <View style={styles.stat}><Text style={styles.statNumber}>1</Text><Text>Posts</Text></View>
//           <View style={styles.stat}><Text style={styles.statNumber}>89</Text><Text>Followers</Text></View>
//           <View style={styles.stat}><Text style={styles.statNumber}>109</Text><Text>Following</Text></View>
//         </View>
//       </View>

//       <View style={styles.bioSection}>
//         <Text style={styles.name}>Priyanshu Lakra</Text>
//         <Text style={styles.bio}>Hey there, I am using Instagram Clone 📸
// This is made by Sarthak Lakra ⚡️
// Built using React Native & Expo.</Text>
//         <TouchableOpacity style={styles.editButton}>
//           <Text style={styles.editButtonText} onPress={()=>router.push("/(pages)/(profile)/editProfile")}>Edit Profile</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.storyHighlights}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {Array(5).fill(0).map((_, i) => (
//             <View key={i} style={styles.highlightCircle}>
//               <Image source={{ uri: 'https://i.imgur.com/2nCt3Sb.jpg' }} style={styles.highlightImage} />
//               <Text style={styles.highlightText}>Highlight</Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>

//       <View style={styles.tabs}>
//         <TouchableOpacity style={styles.tabIcon}><AntDesign name="appstore-o" size={24} color="black" /></TouchableOpacity>
//         <TouchableOpacity style={styles.tabIcon}><MaterialIcons name="person-pin" size={24} color="black" /></TouchableOpacity>
//       </View>

//       <View style={styles.imageGrid}>
//         {Array(9).fill(0).map((_, i) => (
//           <Image key={i} source={{ uri: 'https://i.imgur.com/2nCt3Sb.jpg' }} style={styles.gridImage} />
//         ))}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   headerIcons: {
//     flexDirection: 'row',
//   },
//   menuIcon: {
//     marginLeft: 12,
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingTop: 10,
//   },
//   profileImage: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     flex: 1,
//     marginLeft: 20,
//   },
//   stat: {
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   bioSection: {
//     paddingHorizontal: 16,
//     marginTop: 10,
//   },
//   name: {
//     fontWeight: 'bold',
//   },
//   bio: {
//     marginTop: 4,
//     marginBottom: 10,
//   },
//   editButton: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 4,
//     paddingVertical: 6,
//     alignItems: 'center',
//   },
//   editButtonText: {
//     fontWeight: 'bold',
//   },
//   storyHighlights: {
//     flexDirection: 'row',
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//   },
//   highlightCircle: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   highlightImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   highlightText: {
//     marginTop: 4,
//     fontSize: 12,
//   },
//   tabs: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingVertical: 8,
//   },
//   tabIcon: {
//     alignItems: 'center',
//   },
//   imageGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   gridImage: {
//     width: '33.33%',
//     aspectRatio: 1,
//   },
// });

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Path } from 'react-native-svg';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>priyanshu_lakra</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Feather name="lock" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIcon}>
            <Feather name="menu" size={24} color="black" onPress={()=> router.push("/(setting)/setting")} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image
          source={require("../../../assets/images/profile.png")} // random profile image
          style={styles.profileImage}
        />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>54</Text>
            <Text style={styles.statLabel}>Categories{'\n'}Followed</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>834</Text>
            <Text style={styles.statLabel}>Saved{'\n'}Inspirations</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>162</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioSection}>
        <Text style={styles.name}>Priyanshu Lakra</Text>
        <Text style={styles.bio}>
          Digital goodies designer <Text style={styles.mention}>@pixsellz</Text>
          {'\n'}Everything is designed.
        </Text>
        <TouchableOpacity style={styles.editButton} onPress={()=>router.push("/(pages)/(profile)/editProfile")}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tabIcon}><MaterialIcons name="assignment" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}><AntDesign name="appstore-o" size={24} color="black" /></TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categoryGrid}>
        <View style={styles.categoryCard}>
          <Image source={require("../../../assets/images/profileImage1.jpg")} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>Fashion</Text>
          <Text style={styles.categorySub}>16 influencers</Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require("../../../assets/images/profileimage2.jpg")} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>Travel</Text>
          <Text style={styles.categorySub}>12 influencers</Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require("../../../assets/images/profileimage3.jpg")} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>Yoga</Text>
          <Text style={styles.categorySub}>9 influencers</Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require("../../../assets/images/profileimage4.jpg")} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>Gym</Text>
          <Text style={styles.categorySub}>10 influencers</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', padding: 16, alignItems: 'center'
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  menuIcon: { marginLeft: 16 },
  profileInfo: {
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 10,
  },
  profileImage: { width: 90, height: 90, borderRadius: 45 },
  statsContainer: {
    flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginLeft: 20,
  },
  stat: { alignItems: 'center', flex: 1 },
  statNumber: { fontWeight: 'bold', fontSize: 18 },
  statLabel: { textAlign: 'center', fontSize: 12 },
  bioSection: { paddingHorizontal: 16, marginTop: 10 },
  name: { fontWeight: 'bold', fontSize: 14 },
  bio: { marginTop: 4, marginBottom: 10 },
  mention: { color: '#007AFF' },
  editButton: {
    borderWidth: 1, borderColor: '#ddd', borderRadius: 4, paddingVertical: 6, alignItems: 'center'
  },
  editButtonText: { fontWeight: 'bold' },
  tabs: {
    flexDirection: 'row', justifyContent: 'space-around',
    borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ccc', paddingVertical: 8,
  },
  tabIcon: { alignItems: 'center' },
  categoryGrid: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',
    paddingHorizontal: 12, paddingTop: 12
  },
  categoryCard: {
    width: '47%', marginBottom: 16,
  },
  categoryImage: {
    width: '100%', height: 140, borderRadius: 16,
  },
  categoryTitle: { fontWeight: '600', fontSize: 14, marginTop: 6 },
  categorySub: { fontSize: 12, color: '#666' },
});

