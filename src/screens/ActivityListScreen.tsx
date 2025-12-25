import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function ActivityListScreen() {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">My Activities</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
