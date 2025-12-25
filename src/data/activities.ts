import { Activity } from "../types/activity";

export const activities: Activity[] = [
  {
    id: "1",
    title: "Intro to Machine Learning",
    type: "CLASS",
    status: "IN_PROGRESS",
    duration: 45,
    instructor: "Dr. Andrew Ng",
    progress: 60,
  },
  {
    id: "2",
    title: "Linear Regression Assignment",
    type: "ASSIGNMENT",
    status: "NOT_STARTED",
    dueDate: "2025-01-10",
  },
  {
    id: "3",
    title: "ML Basics Quiz",
    type: "QUIZ",
    status: "COMPLETED",
  },
];
