# HireHub - Next Generation Job Search Platform

![Hirehub Logo](https://res.cloudinary.com/dfh7pmyj0/image/upload/v1721490407/Screenshot_2024-07-20_211319_pgeqto.png)

HireHub is a comprehensive job search platform that connects job seekers with employers through a modern, multi-platform application. The project consists of three main components: a Node.js backend API, a React Native mobile app, and a Next.js web application.

## 🔗 Live Links

<div align="center">

[![Google Play](https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=com.ajaymaurya1008.hirehub)
[![Website](https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://hirehub-web.vercel.app/)

</div>

**📱 Mobile App**: [Download on Google Play](https://play.google.com/store/apps/details?id=com.ajaymaurya1008.hirehub)

**🌐 Web Application**: [Visit Website](https://hirehub-web.vercel.app/)

## 🚀 Project Overview

HireHub provides a seamless job search experience with:

- **Real-time job listings** from multiple sources
- **Cross-platform accessibility** (Mobile app + Web)
- **Advanced job filtering** by categories and locations
- **Direct job application** capabilities
- **User authentication** with Google Sign-In
- **Push notifications** for new job opportunities

## 📁 Project Structure

```
HireHub-app/
├── api/                 # Backend API (Node.js + Express + Firebase)
├── mobile/             # React Native Mobile App (Expo)
└── web/               # Next.js Web Application
```

## 🛠️ Tech Stack

### Backend (API)

- **Runtime**: Node.js with ES modules
- **Framework**: Express.js
- **Database**: Firebase Firestore
- **Job Data**: JSearch API (RapidAPI)
- **Scheduling**: Node-cron for automated updates
- **Authentication**: Firebase Auth

### Mobile App

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **Authentication**: Google Sign-In, Clerk
- **UI Components**: Custom components with Poppins font
- **Push Notifications**: Firebase Cloud Messaging
- **State Management**: React hooks
- **Styling**: React Native Linear Gradient

### Web Application

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready
- **Responsive Design**: Mobile-first approach

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (for mobile development)
- Firebase project
- JSearch API key (RapidAPI)

### 1. Backend Setup

```bash
cd api
npm install
cp env.example .env
# Configure your .env file with Firebase and API keys
npm run dev
```

**Environment Variables (api/.env):**

```env
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id
JOB_SEARCH_API=your_job_search_api_key
PORT=3000
```

### 2. Mobile App Setup

```bash
cd mobile
npm install
# Configure Google Services for Android
npm start
```

**For Android Build:**

```bash
# Add SHA certificates to Firebase
cd android
./gradlew signingReport
npm run android
```

### 3. Web Application Setup

```bash
cd web
npm install
npm run dev
```

## 📱 Features

### Job Search & Discovery

- **Multi-category job browsing**: Frontend, Backend, DevOps, App Development, AI/ML, UI Design, FullStack
- **Real-time job updates**: Automated data fetching from JSearch API
- **Advanced filtering**: By location, job type, and category
- **Job details**: Comprehensive job information with company details

### User Experience

- **Cross-platform**: Native mobile app + responsive web interface
- **Authentication**: Secure Google Sign-In integration
- **Push notifications**: Stay updated with new job opportunities
- **Offline support**: Cached job data for offline browsing

### Technical Features

- **Real-time data sync**: Firebase Firestore integration
- **Automated job updates**: Cron-based data refresh
- **Scalable architecture**: Microservices approach
- **Modern UI/UX**: Custom design with Poppins typography

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database and Authentication
3. Configure Google Sign-In
4. Set up Firebase Cloud Messaging for push notifications
5. Add your Firebase configuration to environment files

### JSearch API Setup

1. Sign up for [RapidAPI](https://rapidapi.com/)
2. Subscribe to JSearch API
3. Get your API key
4. Add the key to your backend environment variables

### Mobile App Configuration

1. Configure Google Services for Android
2. Set up SHA certificates for Firebase
3. Configure Expo for development and production builds

## 📊 Data Structure

### Job Object Schema

```typescript
{
  Category: string;        // Job category (Frontend, Backend, etc.)
  Company: string;         // Company name
  JobPublisher: string;    // Job board publisher
  Link: string;           // Application link
  Role: string;           // Job title
  Logo?: string;          // Company logo URL
  Location?: string;      // Job location
  About: string;          // Job description
  Id: string;             // Unique job ID
  Type: string;           // Employment type
}
```

## 🚀 Deployment

### Backend Deployment

- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Set environment variables in your hosting platform
- Configure cron jobs for automated data updates

### Mobile App Deployment

- **Android**: Build APK/AAB using EAS Build
- **iOS**: Build using EAS Build for App Store
- **Web**: Deploy Expo web build to hosting platforms

### Web Application Deployment

- Deploy to Vercel (recommended for Next.js)
- Configure environment variables
- Set up custom domain if needed

## 🧪 Testing

### Backend Testing

```bash
cd api
npm test
```

### Mobile App Testing

```bash
cd mobile
npm run test
```

### Web Application Testing

```bash
cd web
npm run lint
```

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and commit them (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Add appropriate tests for new features
- Update documentation for any API changes
- Ensure cross-platform compatibility

## 📞 Support & Contact

- **Email**: ajaykvmaurya@gmail.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/hirehub/issues)
- **Documentation**: Check individual component READMEs for detailed setup instructions

## 🔄 Changelog

### Version 12.0.0 (Latest)

- Enhanced mobile app with Expo Router
- Improved job search functionality
- Added push notifications
- Updated UI/UX with modern design
- Cross-platform compatibility improvements

### Version 1.0.0

- Initial release with basic job search
- Firebase integration
- Google Sign-In authentication
- Multi-category job browsing

## 🎯 Roadmap

- [ ] Advanced job search filters
- [ ] Job application tracking
- [ ] Company profiles and reviews
- [ ] Resume builder integration
- [ ] Interview scheduling
- [ ] Salary insights and comparisons
- [ ] Multi-language support
- [ ] Dark mode theme

---

**Built with ❤️ by Ajay maurya**
