import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Profile</Text>
      <View style={styles.profileHeader}>
        <Text style={styles.avatar}>👤</Text>
        <Text style={styles.name}>Hường</Text>
        <Text style={styles.email}>huong@email.com</Text>
      </View>

      <View style={styles.profileSection}>
        <Text style={styles.sectionHeader}>Details</Text>
        <Text style={styles.profileItem}>🎯 Goal: Build Muscle</Text>
        <Text style={styles.profileItem}>⚖️ Weight: 70.5 kg</Text>
        <Text style={styles.profileItem}>📏 Height: 175 cm</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#212529',
    padding: 20,
  },
  header: {
    fontSize: 30,
    color: '#f8f9fa',
    marginBottom: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    fontSize: 50,
    color: '#f8f9fa',
  },
  name: {
    fontSize: 22,
    color: '#f8f9fa',
    marginVertical: 10,
  },
  email: {
    fontSize: 16,
    color: '#adb5bd',
  },
  profileSection: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 20,
    color: '#f8f9fa',
    marginBottom: 10,
  },
  profileItem: {
    fontSize: 16,
    color: '#adb5bd',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileScreen;
