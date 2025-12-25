# Activity Listing App

Cross-platform Activity Listing screen for an online learning platform.

## Tech Stack

- Expo (React Native)
- React Native Paper
- TypeScript
- React Native Web

## Features (In Progress)

- Activity listing (Classes & Assessments)
- Web + Native from same codebase
- Typed data model

## Getting Started

### Run on Web

````bash
npm install
npm start
# press w
npm start
# scan QR or run emulator
src/
 ├── components/
 ├── screens/
 ├── data/
 ├── types/

Save it.

---

## STEP 7: Commit README

```bash
git add README.md
git commit -m "docs: add initial README"
git push
````

## Tech Choices & Tradeoffs

- **Expo + React Native**: enabled a single codebase for web and native with minimal setup.
- **React Native Paper**: chosen for consistent theming and cross-platform UI components.
- **Local mock data**: used for simplicity; can be replaced with API integration.
- **Client-side filtering**: sufficient for current dataset size; server-side filtering would be preferred at scale.

## Limitations

- No backend integration (mock data only).
- Filters and theme preference are not persisted across app restarts.
- No pagination or infinite scroll (data size assumed small).
