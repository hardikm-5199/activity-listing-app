Run on Mobile (Android / iOS)
npm start

# scan QR with Expo Go OR run emulator

Project Structure
src/
├── components/ # Reusable UI components
├── screens/ # Screen-level components
├── data/ # Mock activity data
├── types/ # TypeScript models
├── theme/ # Theme & theme context

Testing

Basic unit tests are included for core UI and business logic.

npm test

Tech Choices & Tradeoffs

Expo + React Native: enabled fast setup and a single codebase for both web and native platforms.

React Native Paper: chosen for consistent theming, accessibility, and cross-platform UI components.

Local mock data: used to keep the assignment focused on UI/UX and architecture rather than backend integration.

Client-side filtering: simple and performant for small datasets; server-side filtering would be preferred at scale.

Limitations

No backend/API integration (mock data only).

Filters and theme preferences are not persisted across app restarts.

No pagination or infinite scroll (dataset assumed small).

Future Improvements

Persist filters and theme using AsyncStorage.

Integrate backend APIs with loading and error states.

Add pagination / infinite scrolling for large datasets.

Improve accessibility (screen reader labels, keyboard navigation).

Add more unit and integration tests.
