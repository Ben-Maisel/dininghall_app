import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import DiningHallsList from './components/DiningHallsList';
import DailyMenu from './components/DailyMenu';
import RatingSystem from './components/RatingSystem';
import Stats from './components/Stats';
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent("DiningHallsApp", () => App);


export default function App() {
  const [selectedHall, setSelectedHall] = useState(null);

  const diningHalls = [
    { id: 1, name: 'North Hall' },
    { id: 2, name: 'South Hall' },
  ];

  const menu = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Burger' },
  ];

  const dailyStats = { totalRatings: 10 };
  const lifetimeStats = { totalRatings: 100 };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <DiningHallsList
        diningHalls={diningHalls}
        onSelect={(id) => setSelectedHall(id)}
      />
      {selectedHall && (
        <>
          <DailyMenu menu={menu} />
          <RatingSystem initialRating={0} />
          <Stats dailyStats={dailyStats} lifetimeStats={lifetimeStats} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


