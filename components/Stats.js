
// **Step 7: Create the Stats component**

// In `components/Stats.js`, add the following code:

"JavaScript"
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stats = ({ dailyStats, lifetimeStats }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Daily Stats:</Text>
      <Text style={styles.stat}>Total Ratings: {dailyStats.totalRatings}</Text>
      <Text style={styles.label}>Lifetime Stats:</Text>
      <Text style={styles.stat}>Total Ratings: {lifetimeStats.totalRatings}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  stat: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default Stats;
