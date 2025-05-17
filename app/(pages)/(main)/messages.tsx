import { router, useNavigation } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const messages = [
  {
    id: 1,
    name: 'Anushka Handa Sidana',
    message: '1 new message',
    time: '1h',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    isNew: true,
  },
  {
    id: 2,
    name: 'Anna Willis',
    message: 'sent a message',
    time: '2h',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    isNew: false,
  },
  {
    id: 3,
    name: 'Laura stone',
    message: 'sent a message',
    time: '2h',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    isNew: false,
  },
  {
    id: 4,
    name: 'Michael',
    message: '2 new message',
    time: '24h',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    isNew: true,
  },
  {
    id: 5,
    name: 'Rachel Scott',
    message: '2 new message',
    time: '24h',
    image: 'https://randomuser.me/api/portraits/women/48.jpg',
    isNew: true,
  },
];

export default function MessageScreen(){
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Text style={styles.time}>9:41</Text> */}
        <Text style={styles.title}>Message</Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color="#000" />
      </TouchableOpacity>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#3c3c4399"
        />
      </View>

      {/* Message List */}
      <ScrollView>
  {messages.map((msg) => (
    <TouchableOpacity
    key={msg.id}
    onPress={() => router.push('/(pages)/(main)/chat')}
  >
    <View
      style={[
        styles.card,
        msg.isNew && { backgroundColor: '#f2f2f7', borderRadius: 12 },
      ]}
    >
      <Image source={{ uri: msg.image }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <Text style={msg.isNew ? styles.nameNew : styles.name}>
          {msg.name}
        </Text>
        <Text style={msg.isNew ? styles.messageNew : styles.message}>
          {msg.message}
        </Text>
      </View>
      <Text style={msg.isNew ? styles.timeNew : styles.timeText}>
        {msg.time}
      </Text>
    </View>
  </TouchableOpacity>
  ))}
</ScrollView>


      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/home.png' }}
          style={styles.navIcon}
        />
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/search--v1.png' }}
          style={styles.navIcon}
        />
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/chat.png' }}
          style={styles.navIcon}
        />
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/user.png' }}
          style={styles.navIcon}
        />
      </View> */}
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  backButton: {
    marginLeft: 12,
    marginTop: 10,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  time: {
    fontSize: 15,
    textAlign: 'left',
    color: '#000',
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  searchContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#7676801f',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 38,
    fontSize: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 39,
    height: 39,
    borderRadius: 20,
  },
  messageContent: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#565656',
  },
  message: {
    fontSize: 15,
    color: '#666565',

  },
  timeText: {
    fontSize: 14,
    
  },
  bottomNav: {
    height: 65,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  timeNew: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold',
  },
  messageNew: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  nameNew: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
