import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';

export default function UserProfile() 
{ const openGithubProfile = () => {
  const githubProfileUrl = 'https://github.com/MarlonSCarbonilla'; // Replace with your GitHub profile URL
  Linking.openURL(githubProfileUrl).catch((err) =>
    console.error('Error opening URL:', err)
  );
};
    
   
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
          source={require('../assets/prof.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Marlon Carbonilla</Text>
        <Text style={styles.userBio}>BSIT 3A</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.aboutText}>
        Hello! I'm Marlon Carbonilla, a 20-year-old passionate about the world of technology. 
        Currently, I'm pursuing a Bachelor of Science in Information Technology (BS IT),
        where I'm constantly exploring the exciting and ever-evolving realm of digital innovation.
        </Text>

        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.contactText}>
          Email: marloncarbonilla525@gmail.com
        </Text>
        <Text style={styles.contactText}>
          Phone: 09959512352
        </Text>

      <TouchableOpacity style={styles.button1} onPress={openGithubProfile}>
        <Text style={styles.buttonText1}>View Github profile</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  header: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    color:'white',
  },
  userBio: {
    fontSize: 16,
    color: 'white',
  },
  content: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'white',
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color:'white',
  },
  contactText: {
    fontSize: 16,
    marginBottom: 8,
    color:'white',
  },

  button1: {
    backgroundColor: '#0099ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
