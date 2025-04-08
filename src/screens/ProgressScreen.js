import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ProgressScreen = () => {
  const [activeTab, setActiveTab] = useState('overview-tab');

  const tabContent = {
    'overview-tab': (
      <View style={styles.tabContent}>
        <Text style={styles.stat}>🏋️ Workouts: 55</Text>
        <Text style={styles.stat}>⏱️ Total Time: 42.5 h</Text>
        <Text style={styles.stat}>🔥 Total Kcal: 25,500</Text>
      </View>
    ),
    'history-tab': (
      <View style={styles.tabContent}>
        <Text style={styles.historyItem}>🗓️ Jul 25: Leg Day - 410 Kcal</Text>
        <Text style={styles.historyItem}>🗓️ Jul 23: Chest - 380 Kcal</Text>
        <Text style={styles.historyItem}>🗓️ Jul 22: Back - 450 Kcal</Text>
      </View>
    ),
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Progress Tracking</Text>
      <View style={styles.tabButtons}>
        <TouchableOpacity
          style={activeTab === 'overview-tab' ? styles.tabButtonActive : styles.tabButton}
          onPress={() => setActiveTab('overview-tab')}
        >
          <Text style={styles.tabButtonText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeTab === 'history-tab' ? styles.tabButtonActive : styles.tabButton}
          onPress={() => setActiveTab('history-tab')}
        >
          <Text style={styles.tabButtonText}>History</Text>
        </TouchableOpacity>
      </View>

      {tabContent[activeTab]}
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
  tabButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#343a40',
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  tabButtonActive: {
    flex: 1,
    padding: 10,
    backgroundColor: '#0d6efd',
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  tabButtonText: {
    color: '#f8f9fa',
  },
  tabContent: {
    marginTop: 20,
  },
  stat: {
    fontSize: 18,
    color: '#f8f9fa',
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    color: '#f8f9fa',
    marginBottom: 10,
  },
});

export default ProgressScreen;
