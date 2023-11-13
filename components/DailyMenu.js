import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DailyMenu = ({ menu }) => {
  return (
    <View style={styles.container}>
      {menu.map((item) => (
        <Text key={item.id} style={styles.item}>{item.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DailyMenu;
