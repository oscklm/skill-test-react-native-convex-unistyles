## Skill test - Note taking app

### Objective

Develop a simple React-Native application using React Native with Expo that allows users to perform CRUD (create, read, delete) operations on some notes. The app should leverage [Convex](https://docs.convex.dev/home) for backend data operations and [Unistyles](https://reactnativeunistyles.vercel.app/start/introduction/) for styling.

### Requirements

#### 1. Setup and Initialisation

- Setup development build (slightly different if running windows)
  1. cd into root
  2. yarn expo prebuild --clean
  3. yarn ios
- Setup Convex:
- [ ] Install and configure Convex in the repo [react native quickstart](https://docs.convex.dev/quickstart/react-native)

#### 2. Database

- [ ] Integrate Convex to manage database operations with a schema containing fields for `id`, `title`, and `content`.
- [ ] Implement Convex functions for CRUD operations on notes.

#### 3. Frontend - Features & Functionality

- **Notes List Tab**: (preferably using react-hook-form and zod)
  - [ ] Display a list of notes retrieved from Convex.
  - [ ] Include buttons for editing and deleting each note.
- **Add Note Form**:
  - [ ] Form to capture the title and content of the note.
  - [ ] Validate the form to ensure fields are not empty
  - [ ] On form submission, add or update the note in the Convex database.
  - [ ] Redirect to the Notes List Tab after adding/updating a note.

#### 4. Styling with Unistyles

- [ ] Style the application using Unistyles for a clean and responsive layout.
- [ ] Ensure the app is visually appealing on both iOS and Android.
