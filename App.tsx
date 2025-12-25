import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ActivityListScreen from "./src/screens/ActivityListScreen";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ActivityListScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
