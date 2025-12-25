# Activity Listing App

A cross-platform Activity Listing screen for an online learning platform.

The screen helps learners quickly discover, filter, and take action on their learning activities such as online classes and assessments.
(flow in which i have created application
-->prepare type of data i will receieve(types/activity.ts)-->mock data(activities.ts)-->basic fetching in screens and rendering in app.tsx(ActivityListScreen.tsx)-->build card component-->change map to flatlist in screens-->implement filter with tabs-->once everything starts rendering implement reactnative paper library(choose this as i have used it earlier..tamagui/nativewind could have been used but md3 works well on web and paper is on top of it),--> added clear filter and empty ui logic --> added dark theme with paper and some branding as well --> implemented evreything within 3 hrs used llm as well where i was getting stuck in for themeing and emptyui logic --> wrote readme.md with gpt )

---

## Features

- Scrollable list of learning activities (Classes & Assessments)
- Clear activity details:
  - Title
  - Type (Class / Assignment / Quiz)
  - Status (Not Started / In Progress / Completed)
  - Duration or Due Date (where applicable)
  - Progress indicator for ongoing activities
- Contextual primary actions:
  - **Start**, **Continue**, or **Review** based on activity state
- Filters to quickly narrow down activities:
  - By activity type (All / Classes / Assessments)
  - By status (multi-select)
  - Clear filters option
- Empty state when no activities match selected filters
- Light and Dark mode support
- Works on **Web and Native (Android/iOS)** from the same codebase
- Basic component test coverage

---

## Tech Stack

- **Expo (React Native)**  
  Enables a single codebase for web and native platforms with minimal configuration.

- **React Native Paper (Material Design 3)**  
  Provides cross-platform UI components, consistent theming, and built-in dark mode support.

- **TypeScript**  
  Ensures type safety and clear data modeling for activities and UI states.

- **Jest + React Native Testing Library**  
  Used for basic component testing.

---

## Platforms Supported

- Web (React Native Web via Expo)
- Android (Expo Go or emulator)
- iOS (Expo Go or simulator)

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- Expo CLI (optional, but helpful)

---

### Install dependencies

```bash
npm install
```

### To Run on Web

```bash
npm start
# Press "w" to open in browser
```

### Run on Mobile

```bash
npm start
#Press i to run on ios simulator and a to run on andorid simulator
#Run on an emulator/simulator from the Expo DevTools
#Download Expo Go on andorid and ios device and scan the QR code which comes after npm start and hot reload will be available on physical device.
```

### Project Structure

```
src/
 ├── components/       # Reusable UI components (ActivityCard, etc.)
 ├── screens/          # Screen-level components
 ├── data/             # Mock activity data
 ├── types/            # TypeScript models
 ├── theme/            # Theme & ThemeContext
 └── __tests__/        # Component tests
```

### Theming & Design Decisions

- Centralized theme configuration using React Native Paper’s MD3 theme tokens

- Custom brand colors applied via theme overrides (no per-component color hacks)

- Neutral surface and chip colors to avoid default Material purple accents

- UI designed to be calm, readable, and - information-dense for learning workflows

- Responsive layouts using Flexbox (no fixed dimensions)

### Testing

A basic unit test is included for the ActivityCard component to validate:

- Correct action button rendering based on activity status

```bash
npm test
```

### Tradeoffs & Design Choices

- Local mock data is used instead of an API to keep the focus on UI, state management, and interaction design.

- Client-side filtering is sufficient for the current dataset; server-side filtering would be preferred for large datasets.

- No navigation implemented, as the task focuses on a single core screen rather than full app flow.
