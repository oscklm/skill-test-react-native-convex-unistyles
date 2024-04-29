## Skill test - Note taking app

### Objective

Develop a simple React-Native application using React Native with Expo that allows users to perform CRUD (create, read, delete) operations on some notes. The app should leverage [Convex](https://docs.convex.dev/home) for backend data operations and [Unistyles](https://reactnativeunistyles.vercel.app/start/introduction/) for styling.

### Requirements

- Commits messages
  Please use a reasonable number of commits to provide insight into your commit process. Follow semantic conventions when writing commit messages.
- Branching
  Please demonstrate your familiarity with branching by showcasing 1-2 instances of branching in and out of the main branch, for any of the features.

### Project overview

#### 1. Setup and Initialisation

- Setup development build (slightly different if running windows)
  1. cd into root
  2. yarn expo prebuild --clean
  3. yarn ios
- Setup Convex:
- Install and configure Convex in the repo [react native quickstart](https://docs.convex.dev/quickstart/react-native)

#### 2. Database

- Integrate Convex to manage database operations with a schema containing fields for `id`, `title`, and `content`.
- Implement Convex queries and mutations for the (create, read, delete) operation

#### 3. Frontend

- **Notes List Tab**: (preferably using react-hook-form and sod)
  - Display a list of notes retrieved from Convex.
  - Include buttons for editing and deleting each note.
- **Add Note Form**:
  - Form to capture the title and content of the note.
  - Validate the form to ensure fields are not empty
  - On form submission, add or update the note in the Convex database.
  - Redirect to the Notes List Tab after adding/updating a note.

#### 4. Styling with Unistyles

Style the application using Unistyles, using basic black and white shapes. To showcase your understanding of working with the Unistyles syntax instead of React Native Stylesheets.

### Notes

- The UPDATE part of the CRUD here is removed for simplicity, so it’s not left out by mistake.
