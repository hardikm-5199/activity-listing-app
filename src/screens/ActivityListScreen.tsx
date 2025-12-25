import { View, StyleSheet, FlatList } from "react-native";
import { Text, SegmentedButtons } from "react-native-paper";
import { useMemo, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import { activities } from "../data/activities";

export default function ActivityListScreen() {
  const [filter, setFilter] = useState<"ALL" | "CLASS" | "ASSESSMENT">("ALL");

  const filteredActivities = useMemo(() => {
    if (filter === "CLASS") {
      return activities.filter((a) => a.type === "CLASS");
    }
    if (filter === "ASSESSMENT") {
      return activities.filter((a) => a.type !== "CLASS");
    }
    return activities;
  }, [filter]);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.header}>
        My Activities
      </Text>

      <SegmentedButtons
        value={filter}
        onValueChange={(value) =>
          setFilter(value as "ALL" | "CLASS" | "ASSESSMENT")
        }
        buttons={[
          { value: "ALL", label: "All" },
          { value: "CLASS", label: "Classes" },
          { value: "ASSESSMENT", label: "Assessments" },
        ]}
        style={styles.filters}
      />

      <FlatList
        data={filteredActivities}
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
  filters: {
    marginBottom: 16,
  },
});
