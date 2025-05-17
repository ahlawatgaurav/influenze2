import { router } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';


export default function SignInScreen() {
  // const statusBarData = {
  //   time: '9:41',
  //   batteryImg: require('./assets/battery-1.png'),
  //   wifiImg: require('./assets/wifi.png'),
  //   cellularImg: require('./assets/mobile-signal.png'),
  // };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      {/* <View style={styles.statusBar}>
        <Text style={styles.time}>{statusBarData.time}</Text>
        <View style={styles.statusIcons}>
          <Image source={statusBarData.cellularImg} style={styles.icon} />
          <Image source={statusBarData.wifiImg} style={styles.icon} />
          <Image source={statusBarData.batteryImg} style={styles.batteryIcon} />
        </View>
      </View> */}

      {/* Logo */}
      <Text style={styles.logo}>Influenze</Text>

      {/* Description */}
      <Text style={styles.description}>
        Sign up to see photos and videos of your favourite influencers
      </Text>

      {/* Input Fields */}
      <View style={styles.card}>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <Text style={styles.forgotText}>
        Forgot your login details? Get help in signing in.
      </Text>

      {/* Divider */}
      <View style={styles.dividerRow}>
        <View style={styles.divider} />
        <Text style={styles.or}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Instagram Login */}
      <View style={styles.instagramLogin}>
        <Image
          source={require('../../assets/images/instaLogo.avif')}
          style={styles.instagramIcon}
        />
        <Text style={styles.instagramText}>Log In With Instagram</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don’t have an Account?{' '}
          <Text onPress={() =>router.push('./signup') } style={styles.footerBold}>Sign Up.</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  statusBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  time: {
    fontSize: 15,
    color: '#111',
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  icon: {
    width: 17,
    height: 11,
    resizeMode: 'contain',
  },
  batteryIcon: {
    width: 24,
    height: 11,
    resizeMode: 'contain',
  },
  logo: {
    fontSize: 64,
    marginTop: 40,
    fontFamily: 'Billabong-Regular',
    color: '#000',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
    color: '#000',
  },
  card: {
    width: '90%',
    marginTop: 40,
    gap: 20,
  },
  input: {
    height: 56,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  loginButton: {
    height: 56,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#676767',
    fontSize: 14,
  },
  forgotText: {
    fontSize: 12,
    color: '#000',
    marginTop: 20,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '85%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  or: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#000',
  },
  instagramLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  instagramIcon: {
    width: 53,
    height: 53,
    resizeMode: 'cover',
  },
  instagramText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#000',
  },
  footerBold: {
    fontWeight: 'bold',
  },
});

