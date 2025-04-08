import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import các màn hình từ thư mục screens
import HomeScreen from '../screens/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProgressScreen from '../screens/ProgressScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#212529', paddingBottom: 10 },
        tabBarLabelStyle: { color: '#f8f9fa', fontSize: 12 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Text style={styles.icon}>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Exercises',
          tabBarIcon: () => <Text style={styles.icon}>🏋️</Text>,
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarLabel: 'Community',
          tabBarIcon: () => <Text style={styles.icon}>👥</Text>,
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: () => <Text style={styles.icon}>📊</Text>,
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          tabBarLabel: 'Leaders',
          tabBarIcon: () => <Text style={styles.icon}>🏆</Text>,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Text style={styles.icon}>👤</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
});
