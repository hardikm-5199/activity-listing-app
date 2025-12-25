import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-paper";
import ActivityCard from "../components/ActivityCard";
import { activities } from "../data/activities";

export default function ActivityListScreen() {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.header}>
        My Activities
      </Text>

      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ActivityCard activity={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 12,
  },
});
