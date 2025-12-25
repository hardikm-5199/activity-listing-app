export type ActivityType = "CLASS" | "ASSIGNMENT" | "QUIZ" | "DISCUSSION";

export type ActivityStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

export interface Activity {
  id: string;
  title: string;
  type: ActivityType;
  status: ActivityStatus;
  duration?: number; // minutes
  dueDate?: string;
  instructor?: string;
  progress?: number; // 0 - 100
}
