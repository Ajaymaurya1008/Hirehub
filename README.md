
# Hirehub

![Hirehub Logo](https://res.cloudinary.com/dfh7pmyj0/image/upload/v1721490407/Screenshot_2024-07-20_211319_pgeqto.png)

Welcome to Hirehub, a job listing application built with Expo and React Native. This project aims to provide a seamless experience for users to explore and apply for jobs.

## Table of Contents
- [Installation](#installation)
- [Setup](#setup)
- [Build](#build)
- [Linting](#linting)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Libraries](#libraries)
- [Authentication](#authentication)
- [Features](#features)
- [Contributing Guide](#contributing-guide)
- [License](#license)
- [Contact](#contact)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/hirehub.git
cd hirehub
npm install
```

## Setup

Before running the application, ensure you have the necessary environment variables set up. Create a `.env` file in the root directory and add the following:

```env
GOOGLE_SERVICES_JSON=path/to/your/google-services.json
```

In your firebase app, add SHA ( SHA1 and SHA256 ) certificate fingerprints for all 3 variants

App signing key certificate for play store
Upload key certificate for dev build made by eas cloud, it can be retrieved by command
```
  eas credentials
```
For local builds, cd android and type the command
```
  cd android
  ./gradlew signingReport
```
It will load multiple signingReport for many task, add the certificate which has the following
```
  Variant: debug
  Config: debug
```


## Build

To build the project for different platforms, use the following commands:

- Android: `npm run android`
- iOS: `npm run ios`
- Web: `npm run web`

## Linting

To maintain code quality, run the linter:

```bash
npm run lint
```

## Use Cases

1. **Explore Jobs**: Users can browse through a list of available jobs.
2. **Job Details**: Users can view detailed information about a job.
3. **Apply for Jobs**: Users can apply for jobs directly through the app.
4. **User Authentication**: Users can sign in using Google Sign-In.

## Tech Stack

- **Frontend**: React Native, Expo
- **Backend**: Firebase Firestore
- **Authentication**: Google Sign-In

## Libraries

- `expo`: Core library for building React Native apps with Expo.
- `@react-native-google-signin/google-signin`: Google Sign-In for React Native.
- `firebase`: Firebase SDK for Firestore and other Firebase services.
- `expo-router`: File-based routing for Expo apps.
- `expo-secure-store`: Secure storage for sensitive data.

## Authentication

The app uses Google Sign-In for user authentication. The configuration is done in the `app/index.jsx` file:

```javascript
useEffect(() => {
  GoogleSignin.configure({
    webClientId: "YOUR_WEB_CLIENT_ID",
  });
}, []);
```

## Features

- **Job Listings**: Browse and search for jobs.
- **Job Details**: View detailed information about each job.
- **Google Sign-In**: Secure authentication using Google.
- **Responsive Design**: Optimized for both mobile and web platforms.

## Contributing Guide

We welcome contributions from the community. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

Please ensure your code adheres to the project's coding standards and passes all tests.

## Testing Phase

Hirehub is currently in the testing phase. To view the app on the Play Store, please send your email address to the ajaykvmaurya@gmail.com.

## Contact

For any questions or feedback, please open an issue or contact at ajaykvmaurya@gmail.com.