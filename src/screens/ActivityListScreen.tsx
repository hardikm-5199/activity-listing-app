import { View, StyleSheet, FlatList } from "react-native";
import {
  Text,
  SegmentedButtons,
  IconButton,
  useTheme,
  Menu,
  Checkbox,
  Divider,
} from "react-native-paper";
import { useMemo, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import { activities } from "../data/activities";
import { useThemeContext } from "../theme/ThemeContext";

export default function ActivityListScreen() {
  const [filter, setFilter] = useState<"ALL" | "CLASS" | "ASSESSMENT">("ALL");
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();

  const [menuVisible, setMenuVisible] = useState(false);

  const [statusFilters, setStatusFilters] = useState({
    NOT_STARTED: true,
    IN_PROGRESS: true,
    COMPLETED: true,
  });

  const toggleStatus = (
    status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED"
  ) => {
    setStatusFilters((prev) => ({
      ...prev,
      [status]: !prev[status],
    }));
  };

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      // Type filter
      if (filter === "CLASS" && activity.type !== "CLASS") return false;
      if (filter === "ASSESSMENT" && activity.type === "CLASS") return false;

      // Status filter
      if (!statusFilters[activity.status]) return false;

      return true;
    });
  }, [filter, statusFilters]);
  const clearFilters = () => {
    setFilter("ALL");
    setStatusFilters({
      NOT_STARTED: true,
      IN_PROGRESS: true,
      COMPLETED: true,
    });
    setMenuVisible(false);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Header */}
      <View style={styles.headerRow}>
        <Text variant="titleLarge" style={{ color: theme.colors.onBackground }}>
          My Activities
        </Text>

        <View style={{ flexDirection: "row" }}>
          {/* Status Filter Menu */}
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <IconButton
                icon="filter-variant"
                onPress={() => setMenuVisible(true)}
              />
            }
          >
            <Menu.Item
              title="Not Started"
              leadingIcon={() => (
                <Checkbox
                  status={statusFilters.NOT_STARTED ? "checked" : "unchecked"}
                />
              )}
              onPress={() => toggleStatus("NOT_STARTED")}
            />
            <Menu.Item
              title="In Progress"
              leadingIcon={() => (
                <Checkbox
                  status={statusFilters.IN_PROGRESS ? "checked" : "unchecked"}
                />
              )}
              onPress={() => toggleStatus("IN_PROGRESS")}
            />
            <Menu.Item
              title="Completed"
              leadingIcon={() => (
                <Checkbox
                  status={statusFilters.COMPLETED ? "checked" : "unchecked"}
                />
              )}
              onPress={() => toggleStatus("COMPLETED")}
            />
            <Divider />

            <Menu.Item
              title="Clear filters"
              leadingIcon="filter-remove"
              onPress={clearFilters}
            />
          </Menu>

          {/* Theme Toggle */}
          <IconButton
            icon={mode === "dark" ? "weather-sunny" : "weather-night"}
            onPress={toggleTheme}
          />
        </View>
      </View>

      {/* Type Filters */}
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
      {filteredActivities.length === 0 ? (
        <View style={styles.emptyState}>
          <IconButton
            icon="playlist-remove"
            size={48}
            iconColor={theme.colors.onSurfaceVariant}
          />
          <Text
            variant="titleMedium"
            style={{ color: theme.colors.onBackground }}
          >
            No activities found
          </Text>
          <Text
            variant="bodyMedium"
            style={{ color: theme.colors.onSurfaceVariant, marginVertical: 8 }}
          >
            Try adjusting or clearing your filters
          </Text>
          <IconButton icon="filter-remove" onPress={clearFilters} />
        </View>
      ) : (
        <FlatList
          data={filteredActivities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ActivityCard activity={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
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
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});
