import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ActivityListScreen from "./src/screens/ActivityListScreen";
import { ThemeProvider, useThemeContext } from "./src/theme/ThemeContext";

function AppContent() {
  const { theme } = useThemeContext();

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <ActivityListScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
