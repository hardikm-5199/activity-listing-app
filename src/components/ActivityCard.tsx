import { View, StyleSheet } from "react-native";
import { Card, Text, Button, Chip, ProgressBar } from "react-native-paper";
import { Activity } from "../types/activity";

interface Props {
  activity: Activity;
}

export default function ActivityCard({ activity }: Props) {
  const getActionLabel = () => {
    switch (activity.status) {
      case "NOT_STARTED":
        return "Start";
      case "IN_PROGRESS":
        return "Continue";
      case "COMPLETED":
        return "Review";
      default:
        return "Open";
    }
  };

  return (
    <Card style={styles.card} mode="outlined">
      <Card.Content>
        {/* Title */}
        <Text variant="titleMedium">{activity.title}</Text>

        {/* Type + Status */}
        <View style={styles.row}>
          <Chip compact>{activity.type}</Chip>
          <Chip compact style={styles.statusChip}>
            {activity.status.replace("_", " ")}
          </Chip>
        </View>

        {/* Metadata */}
        {activity.duration && (
          <Text variant="bodySmall">Duration: {activity.duration} min</Text>
        )}

        {activity.dueDate && (
          <Text variant="bodySmall">Due: {activity.dueDate}</Text>
        )}

        {/* Progress */}
        {activity.status === "IN_PROGRESS" &&
          typeof activity.progress === "number" && (
            <ProgressBar
              progress={activity.progress / 100}
              style={styles.progress}
            />
          )}
      </Card.Content>

      <Card.Actions>
        <Button mode="contained">{getActionLabel()}</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    marginVertical: 8,
  },
  statusChip: {
    opacity: 0.8,
  },
  progress: {
    marginTop: 8,
  },
});
