import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const leaderboardData = [
  { id: '1', rank: '#1 🏆', name: 'Nhật', score: '48 days' },
  { id: '2', rank: '#2', name: 'Hội', score: '45 days' },
  { id: '3', rank: '#3', name: 'Nguyên', score: '41 days' },
  { id: '4', rank: '#4', name: 'Hường (You)', score: '39 days' },
  { id: '5', rank: '#5', name: 'Mai', score: '35 days' },
];

const LeaderboardScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.rank}>{item.rank}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
      />
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
  item: {
    backgroundColor: '#343a40',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  rank: {
    color: '#ffc107',
    fontSize: 22,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    color: '#f8f9fa',
  },
  score: {
    fontSize: 16,
    color: '#adb5bd',
  },
});

export default LeaderboardScreen;
