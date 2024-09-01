# Mobile Gallery App

## Project Overview

The Mobile Gallery App is a React Native application that allows users to view a collection of images fetched from a public API. The app includes a responsive gallery screen that displays image thumbnails in a grid layout and an image detail screen that shows a larger version of the selected image along with its details. The application is designed to work on both phones and tablets and offers features like image search, lazy loading, and deletion.

## Tech Stack

- **React Native**: Framework for building native apps using React.
- **Redux Toolkit**: State management library for handling application state.
- **React Navigation**: Library for managing screen transitions and navigation.
- **Axios**: Promise-based HTTP client for making network requests.
- **React Native Paper**: UI component library for consistent theming and design.
- **TypeScript**: Superset of JavaScript that adds static types.

## Features

### Core Features

1. **Gallery Screen**:
   - Displays images in a responsive grid layout.
   - Each grid cell contains an image thumbnail.
   - Tapping on a thumbnail navigates to the Image Detail Screen.

2. **Image Detail Screen**:
   - Shows a larger version of the image.
   - Displays the image title and other metadata.
   - Includes a back button to return to the Gallery Screen.
   - Supports deleting an image and notifying the user with a snackbar.

### Bonus Features

- **Lazy Loading**: Images load as the user scrolls, improving performance.
- **Search Functionality**: Search bar to filter images by title or album.
- **Caching**: Stores images for offline access to improve user experience.
- **Image Deletion**: Allows users to delete images and see immediate feedback.

## Installation and Setup

Follow these steps to set up and run the application locally:

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn
- React Native CLI
- Android Studio or Xcode for iOS development


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

### Congratulations! :tada:

You've successfully run and modified the Mobile Gallery. :partying_face:

## Screenshots

<img width="349" alt="Screenshot 2024-09-01 at 10 15 55 AM" src="https://github.com/user-attachments/assets/46a0b630-db16-4d9f-9247-d7a0ea024aac">

<img width="349" alt="Screenshot 2024-09-01 at 10 15 29 AM" src="https://github.com/user-attachments/assets/263b1df7-4689-4862-95c1-5f24c8a77bb0">

<img width="565" alt="Screenshot 2024-09-01 at 10 10 20 AM" src="https://github.com/user-attachments/assets/f29122e1-c56f-4d30-ad93-5c3b46b6b797">

<img width="565" alt="Screenshot 2024-09-01 at 10 10 10 AM" src="https://github.com/user-attachments/assets/83b70419-0349-416c-98be-05bb36c787c5">




