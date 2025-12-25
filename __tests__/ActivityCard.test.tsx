import { render } from "@testing-library/react-native";
import ActivityCard from "../src/components/ActivityCard";
import { Activity } from "../src/types/activity";

describe("ActivityCard", () => {
  it("shows Continue button when activity is in progress", () => {
    const activity: Activity = {
      id: "1",
      title: "Test Activity",
      type: "CLASS",
      status: "IN_PROGRESS",
      progress: 50,
    };

    const { getByText } = render(<ActivityCard activity={activity} />);

    expect(getByText("Continue")).toBeTruthy();
  });

  it("shows Start button when activity is not started", () => {
    const activity: Activity = {
      id: "2",
      title: "Test Activity",
      type: "ASSIGNMENT",
      status: "NOT_STARTED",
    };

    const { getByText } = render(<ActivityCard activity={activity} />);

    expect(getByText("Start")).toBeTruthy();
  });
});
