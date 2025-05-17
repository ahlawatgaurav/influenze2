// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// const interestCategories = [
//   { id: 1, name: 'Fashion', image: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg' },
//   { id: 2, name: 'Travel', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg' },
//   { id: 3, name: 'Wellness', image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg' },
//   { id: 4, name: 'Beauty', image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg' },
//   { id: 5, name: 'Tech', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg' },
//   { id: 6, name: 'Fitness', image: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg' },
// ];

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton}>
//           <Ionicons name="chevron-back" size={24} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.nextButton}>
//           <Text onPress={() =>router.push("/(pages)/(search)/search")} style={styles.nextButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Welcome Text */}
//       <Text style={styles.title}>Welcome to Influenze</Text>
//       <Text style={styles.subtitle}>Pick 5 or more Interest</Text>

//       {/* Interest Categories Grid */}
//       <ScrollView contentContainerStyle={styles.gridContainer}>
//         {interestCategories.map((category) => (
//           <View key={category.id} style={styles.card}>
//             <Image source={{ uri: category.image }} style={styles.cardImage} />
//             <Text style={styles.cardText}>{category.name}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     height: 56,
//   },
//   backButton: {
//     padding: 8,
//   },
//   nextButton: {
//     backgroundColor: '#f1f1f1',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 17,
//   },
//   nextButtonText: {
//     color: '#767676',
//     fontSize: 17,
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginLeft: 36,
//     marginTop: 24,
//   },
//   subtitle: {
//     fontSize: 18,
//     marginLeft: 36,
//     marginTop: 8,
//     marginBottom: 24,
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 16,
//     gap: 16,
//   },
//   card: {
//     width: '47%',
//     height: 147,
//     borderRadius: 8,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   cardImage: {
//     width: '100%',
//     height: '100%',
//   },
//   cardText: {
//     position: 'absolute',
//     bottom: 16,
//     left: 16,
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//   },
// });

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const interestCategories = [
  { id: 1, name: 'Fashion', image: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg' },
  { id: 2, name: 'Travel', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg' },
  { id: 3, name: 'Wellness', image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg' },
  { id: 4, name: 'Beauty', image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg' },
  { id: 5, name: 'Tech', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg' },
  { id: 6, name: 'Fitness', image: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg' },
];

export default function App() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const handleStart = () => {
    if (selectedIds.length >= 5) {
      router.push('/(pages)/(search)/search');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.nextButton,
            selectedIds.length >= 5 ? styles.nextEnabled : styles.nextDisabled,
          ]}
          disabled={selectedIds.length < 5}
          onPress={handleStart}
        >
          <Text
            style={[
              styles.nextButtonText,
              { color: selectedIds.length >= 5 ? '#000' : '#aaa' },
            ]}
          >
            Start
          </Text>
        </TouchableOpacity>
      </View>

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to Influenze</Text>
      <Text style={styles.subtitle}>Pick 5 or more Interests</Text>

      {/* Interest Categories Grid */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {interestCategories.map((category) => {
          const selected = selectedIds.includes(category.id);
          return (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.card,
                selected && styles.selectedCard,
              ]}
              onPress={() => toggleSelection(category.id)}
            >
              <Image source={{ uri: category.image }} style={styles.cardImage} />
              <Text style={styles.cardText}>{category.name}</Text>
              {selected && (
                <View style={styles.overlay}>
                  <Ionicons name="checkmark-circle" size={24} color="white" />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
  },
  backButton: {
    padding: 8,
  },
  nextButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 17,
  },
  nextEnabled: {
    backgroundColor: '#f1f1f1',
  },
  nextDisabled: {
    backgroundColor: '#eee',
  },
  nextButtonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 36,
    marginTop: 24,
  },
  subtitle: {
    fontSize: 18,
    marginLeft: 36,
    marginTop: 8,
    marginBottom: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    height: 147,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#000',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  overlay: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
    padding: 2,
  },
});
