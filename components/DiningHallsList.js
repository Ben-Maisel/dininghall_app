import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DiningHallsList = ({ diningHalls, onSelect }) => {
  return (
    <View style={styles.container}>
      {diningHalls.map((hall) => (
        <TouchableOpacity key={hall.id} onPress={() => onSelect(hall.id)}>
          <Text style={styles.hall}>{hall.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  hall: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default DiningHallsList;
