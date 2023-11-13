import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RatingSystem = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  const rateItem = (newRating) => {
    setRating(newRating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Rate this item:</Text>
      <View style={styles.rating}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity key={value} onPress={() => rateItem(value)}>
            <Text style={styles.star}>{value <= rating ? '★' : '☆'}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 24,
    marginHorizontal: 4,
  },
});

export default RatingSystem;
