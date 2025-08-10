# HireHub Mobile App

![HireHub Mobile App](https://res.cloudinary.com/dfh7pmyj0/image/upload/v1721490407/Screenshot_2024-07-20_211319_pgeqto.png)

> **📱 Mobile Application** for the HireHub job search platform

This is the React Native mobile application component of the HireHub project. Built with Expo and React Native, it provides a native mobile experience for job seekers to browse, search, and apply for jobs.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- Expo CLI (`npm install -g @expo/cli`)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

```bash
# Navigate to mobile directory
cd mobile

# Install dependencies
npm install

# Start the development server
npm start
```

### Environment Setup

Create a `.env` file in the mobile directory:

```env
GOOGLE_SERVICES_JSON=path/to/your/google-services.json
```

## 🔧 Configuration

### Firebase Setup

1. **Add SHA Certificates to Firebase Console:**

   - App signing key certificate for Play Store
   - Upload key certificate for EAS cloud builds
   - Debug certificate for local development

2. **Get SHA Certificates:**

   **For EAS Cloud Builds:**

   ```bash
   eas credentials
   ```

   **For Local Builds:**

   ```bash
   cd android
   ./gradlew signingReport
   ```

   Look for the certificate with:

   ```
   Variant: debug
   Config: debug
   ```

### Google Sign-In Configuration

Configure Google Sign-In in your Firebase project and update the web client ID in the app configuration.

## 📱 Features

### Core Functionality

- **Job Browsing**: Browse jobs by category (Frontend, Backend, DevOps, etc.)
- **Job Details**: View comprehensive job information
- **Direct Application**: Apply for jobs through external links
- **User Authentication**: Secure Google Sign-In integration
- **Push Notifications**: Real-time job alerts via Firebase Cloud Messaging

### User Experience

- **Native Performance**: Built with React Native for optimal performance
- **Cross-Platform**: Works on both Android and iOS
- **Offline Support**: Cached job data for offline browsing
- **Modern UI**: Custom components with Poppins typography
- **Responsive Design**: Optimized for various screen sizes

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **Authentication**: Google Sign-In, Clerk
- **Backend Integration**: Firebase Firestore
- **Push Notifications**: Firebase Cloud Messaging
- **Styling**: React Native Linear Gradient
- **State Management**: React hooks
- **Font**: Poppins (Regular, Medium, Bold)

## 📁 Project Structure

```
mobile/
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation
│   ├── JobDetail/         # Job detail screens
│   └── JobList/           # Job listing screens
├── components/            # Reusable components
│   ├── Common/           # Shared components
│   ├── HomeScreen/       # Home screen components
│   └── JobList/          # Job list components
├── assets/               # Static assets
│   ├── fonts/           # Custom fonts
│   └── images/          # App images
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
└── configs/             # Configuration files
```

## 🚀 Build & Deployment

### Development

```bash
npm start          # Start Expo development server
npm run android    # Run on Android emulator/device
npm run ios        # Run on iOS simulator/device
npm run web        # Run web version
```

### Production Builds

**Android (APK/AAB):**

```bash
eas build --platform android
```

**iOS (IPA):**

```bash
eas build --platform ios
```

**Web:**

```bash
expo export --platform web
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run linter
npm run lint
```

## �� App Information

- **Package Name**: `com.ajaymaurya1008.hirehub`
- **Version**: 12.0.0
- **Platforms**: Android, iOS, Web
- **Minimum SDK**: Android API 21+
- **iOS Version**: iOS 13.0+

## 🔗 Related Links

- **📱 Download**: [Google Play Store](https://play.google.com/store/apps/details?id=com.ajaymaurya1008.hirehub)
- **🌐 Web App**: [hirehub-web.vercel.app](https://hirehub-web.vercel.app/)
- **📚 Main Project**: [HireHub Repository](../README.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and commit them (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React Native and Expo best practices
- Use TypeScript for type safety
- Maintain consistent code formatting
- Test on both Android and iOS platforms
- Update documentation for new features

## 📞 Support

- **Email**: ajaykvmaurya@gmail.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/hirehub/issues)
- **Documentation**: [Expo Docs](https://docs.expo.dev/)

---

**Part of the [HireHub Project](../README.md) - Built with ❤️ by Ajay Maurya**
