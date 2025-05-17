import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Link, router } from 'expo-router';

export default function SignInScreen() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>Influenze</Text>
        
        <Text style={styles.headline}>
          Sign up to see photos and videos of your favourite influencers
        </Text>

        <View style={styles.form}>
          <TouchableOpacity 
            style={styles.signUpButton}
            onPress={() => router.push('/(auth)/signup')}
          >
            <Text style={styles.signUpButtonText}>Sign Up With Phone Or Email</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>

          <TouchableOpacity style={styles.instagramButton}>
            <LinearGradient
              colors={['#833AB4', '#C13584', '#E1306C']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.instagramGradient}
            >
              <Text style={styles.instagramButtonText}>
                Log in with Instagram
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already Have an Account?{' '}
          <Link href="/(auth)/signin" style={styles.signInText}>Sign In</Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 32,
    color: '#111',
  },
  headline: {
    fontFamily: 'Inter-Regular',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 32,
    color: '#333',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  form: {
    width: '100%',
  },
  signUpButton: {
    height: 48,
    backgroundColor: '#0095f6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 16,
    color: '#666',
    fontFamily: 'Inter-Regular',
  },
  instagramButton: {
    height: 48,
    borderRadius: 8,
    overflow: 'hidden',
  },
  instagramGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instagramButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Inter-Regular',
  },
  signInText: {
    color: '#0095f6',
    fontFamily: 'Inter-SemiBold',
  },
});