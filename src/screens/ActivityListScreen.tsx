import { View, StyleSheet, FlatList } from "react-native";
import {
  Text,
  SegmentedButtons,
  IconButton,
  useTheme,
} from "react-native-paper";
import { useMemo, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import { activities } from "../data/activities";
import { useThemeContext } from "../theme/ThemeContext";

export default function ActivityListScreen() {
  const [filter, setFilter] = useState<"ALL" | "CLASS" | "ASSESSMENT">("ALL");
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();

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
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Header */}
      <View style={styles.headerRow}>
        <Text variant="titleLarge" style={{ color: theme.colors.onBackground }}>
          My Activities
        </Text>
        <IconButton
          icon={mode === "dark" ? "weather-sunny" : "weather-night"}
          onPress={toggleTheme}
        />
      </View>

      {/* Filters */}
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

      {/* Activity List */}
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
  filters: {
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
});
