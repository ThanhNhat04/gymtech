// src/screens/HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Calendar Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calendar</Text>
          <View style={styles.weekRow}>
            <Text style={styles.weekText}>Week 1</Text>
            <Text style={styles.weekText}>Week 2</Text>
            <Text style={[styles.weekText, styles.weekActive]}>Week 3</Text>
            <Text style={styles.weekText}>Week 4</Text>
            <Text style={styles.weekText}>...</Text>
          </View>

          <View style={styles.calendarDays}>
            <View style={[styles.dayBox, { backgroundColor: '#4CAF50' }]}>
              <Text style={styles.dayText}>Mon</Text>
              <Text style={styles.dayIcon}>✓</Text>
            </View>
            <View style={[styles.dayBox, { backgroundColor: '#BDBDBD' }]}>
              <Text style={styles.dayText}>Tue</Text>
              <Text style={styles.dayIcon}>🗓️</Text>
            </View>
            <View style={[styles.dayBox, { backgroundColor: '#4CAF50' }]}>
              <Text style={styles.dayText}>Wed</Text>
              <Text style={styles.dayIcon}>✓</Text>
            </View>
            <View style={[styles.dayBox, { backgroundColor: '#BDBDBD' }]}>
              <Text style={styles.dayText}>Thu</Text>
              <Text style={styles.dayIcon}>🗓️</Text>
            </View>
            <View style={[styles.dayBox, { backgroundColor: '#BDBDBD' }]}>
              <Text style={styles.dayText}>Fri</Text>
              <Text style={styles.dayIcon}>🗓️</Text>
            </View>
            <View style={[styles.dayBox, { backgroundColor: '#FFC107' }]}>
              <Text style={styles.dayText}>Sat</Text>
              <Text style={styles.dayIcon}>🏋️</Text>
            </View>
            <View style={[styles.dayBox, { backgroundColor: '#BDBDBD' }]}>
              <Text style={styles.dayText}>Sun</Text>
              <Text style={styles.dayIcon}>🗓️</Text>
            </View>
          </View>
        </View>

        {/* Calories Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today's Calories</Text>
          <View style={styles.calorieRow}>
            <Text style={styles.currentCal}>350 Kcal</Text>
            <Text style={styles.goalText}>/ 500 Kcal Goal</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressValue, { width: '70%' }]} />
          </View>
        </View>

        {/* Exercise Section */}
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise</Text>
          <View style={styles.exerciseRow}>
            <TouchableOpacity
              style={[styles.exerciseBox, { backgroundColor: '#FF8C00' }]}
            >
              <Text style={styles.exerciseIcon}>💪</Text>
              <View style={styles.catInfo}>
                <Text style={styles.catTitle}>Chest</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.exerciseBox, { backgroundColor: '#0056B3' }]}
            >
              <Text style={styles.exerciseIcon}>🏋️</Text>
              <View style={styles.catInfo}>
                <Text style={styles.catTitle}>Shoulder</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.exerciseRow}>
            <TouchableOpacity
              style={[styles.exerciseBox, { backgroundColor: '#5A6268' }]}
            >
              <Text style={styles.exerciseIcon}>🤸</Text>
              <View style={styles.catInfo}>
                <Text style={styles.catTitle}>Abs</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.exerciseBox, { backgroundColor: '#1E7E34' }]}
            >
              <Text style={styles.exerciseIcon}>🦵</Text>
              <View style={styles.catInfo}>
                <Text style={styles.catTitle}>Legs</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // nền trắng
  },
  scrollContainer: {
    padding: 15,
    paddingBottom: 100,
  },
  // ===== CARD STYLES =====
  card: {
    backgroundColor: '#fff', // card nền trắng
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    // Shadow (cho iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1, // cho Android
  },
  cardTitle: {
    fontSize: 18,
    color: '#333', // text tối cho card
    fontWeight: '600',
    marginBottom: 12,
  },
  // ===== CALENDAR SECTION =====
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekText: {
    color: '#777',
    fontSize: 12,
  },
  weekActive: {
    color: '#FFC107',
    fontWeight: 'bold',
  },
  calendarDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayBox: {
    width: 40,
    height: 60,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  dayText: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
  },
  dayIcon: {
    fontSize: 16,
    color: '#555',
  },
  // ===== CALORIES SECTION =====
  calorieRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  currentCal: {
    fontSize: 18,
    color: '#FF5722', // cam đậm
    fontWeight: 'bold',
    marginRight: 5,
  },
  goalText: {
    fontSize: 14,
    color: '#777',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressValue: {
    height: 8,
    backgroundColor: '#FF5722',
    borderRadius: 4,
  },
  // ===== EXERCISE SECTION =====
  exerciseContainer: {
    marginBottom: 15,
  },
  exerciseTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
    marginBottom: 10,
  },
  exerciseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  exerciseBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginRight: 10,
  },
  exerciseIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  catInfo: {
    flexDirection: 'column',
  },
  catTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
