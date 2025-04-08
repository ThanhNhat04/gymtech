import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const exercises = [
  { id: '1', name: 'Deep Squat Hold', muscleGroup: 'Legs, Glutes', icon: '🦵' },
  { id: '2', name: 'Standard Push Up', muscleGroup: 'Chest, Triceps', icon: '💪' },
  { id: '3', name: 'Plank', muscleGroup: 'Abs, Core', icon: '🧍' },
  { id: '4', name: 'Dumbbell Rows', muscleGroup: 'Back, Biceps', icon: '🏋️' },
];

const LibraryScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Exercise Library</Text>

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => alert(item.name)}>
            <Text style={styles.icon}>{item.icon}</Text>
            <View style={styles.info}>
              <Text style={styles.exerciseName}>{item.name}</Text>
              <Text style={styles.muscleGroup}>{item.muscleGroup}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
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
    borderRadius: 8,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 18,
    color: '#f8f9fa',
  },
  muscleGroup: {
    color: '#adb5bd',
    fontSize: 12,
  },
  arrow: {
    fontSize: 20,
    color: '#adb5bd',
  },
});

export default LibraryScreen;
