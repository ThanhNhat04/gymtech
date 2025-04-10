// src/screens/HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../components/Head'; 

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
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

        {/* Exercise Section */}
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise</Text>
          <View style={styles.exerciseColumn}>
            <TouchableOpacity style={styles.exerciseBox}>
              <Text style={styles.exerciseIcon}>💪</Text>
              <View style={styles.catInfo}>
                <Text style={styles.catTitle}>Chest</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.exerciseBox}>
              <Text style={styles.exerciseIcon}>🏋️</Text>
              <View style={styles.catInfo}>
                <Text style={styles.catTitle}>Shoulder</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.exerciseBox}>
              <Text style={styles.exerciseIcon}>🤸</Text>
              <View style={styles.catInfo}>
                <Text style={styles.catTitle}>Abs</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.exerciseBox}>
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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 18,
    color: '#333',
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
  exerciseColumn: {
    flexDirection: 'column',
  },
  exerciseBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BDBDBD', // all boxes gray
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
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