# HireHub Backend

A Node.js backend service that fetches job listings from various sources and stores them in Firebase Firestore.

## Features

- Automated job data fetching from JSearch API
- Firebase Firestore integration for data storage
- Cron job scheduling for regular data updates
- RESTful API endpoints
- Support for multiple job categories (Frontend, Backend, DevOps, App Development, AI/ML, UI Design, FullStack)
- Automatic data refresh and cleanup

## Prerequisites

- Node.js (v14 or higher)
- Firebase project
- JSearch API key from RapidAPI

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd hirehub-backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   - Copy `env.example` to `.env`
   - Fill in your actual API keys and Firebase configuration

```bash
cp env.example .env
```

4. Configure your `.env` file with the following variables:

```
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

## Usage

### Development Mode

Start the server in development mode:

```bash
npm run dev
```

### Production Mode

Start the server in production mode:

```bash
npm start
```

The server will run on port 3000 (or the port specified in your environment variables).

## API Endpoints

Currently, the backend focuses on data fetching and storage. The service automatically:

1. **Fetches job data** from JSearch API for multiple categories
2. **Stores data** in Firebase Firestore
3. **Refreshes data** automatically (cron job is currently commented out)

### Job Categories Supported

- Frontend Developer
- Backend Developer
- DevOps Engineer
- App Developer
- AI Engineer
- ML Engineer
- UI Designer
- FullStack Developer

### Data Structure

Each job document in Firestore contains:

```json
{
  "Category": "Frontend",
  "Company": "Company Name",
  "JobPublisher": "Publisher Name",
  "Link": "Application Link",
  "Role": "Job Title",
  "Logo": "Company Logo URL",
  "Location": "Job Location",
  "About": "Job Description",
  "Id": "Unique Job ID",
  "Type": "Employment Type"
}
```

## Project Structure

```
api/
├── server.js          # Main server file
├── firebaseConfig.js  # Firebase configuration
├── package.json       # Dependencies and scripts
├── env.example        # Environment variables template
└── README.md         # This file
```

## Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Get your Firebase configuration from Project Settings
4. Add the configuration to your `.env` file

### JSearch API Setup

1. Sign up for RapidAPI
2. Subscribe to JSearch API
3. Get your API key
4. Add the key to your `.env` file

## Cron Job Configuration

The service includes a cron job for automatic data updates. Currently commented out, you can enable it by uncommenting this line in `server.js`:

```javascript
cron.schedule("0 0 * * *", fetchData); // Runs daily at midnight
```

Cron schedule options:

- `"0 0 * * *"` - Daily at midnight
- `"0 */6 * * *"` - Every 6 hours
- `"0 */12 * * *"` - Every 12 hours

## Deployment

### Local Deployment

1. Ensure all environment variables are set
2. Run `npm install`
3. Start the server with `npm start`

## Troubleshooting

### Common Issues

1. **Firebase Connection Error**

   - Verify Firebase configuration in `.env`
   - Check if Firestore is enabled in Firebase Console

2. **JSearch API Error**

   - Verify API key is correct
   - Check API quota and subscription status

3. **Port Already in Use**
   - Change PORT in `.env` file
   - Kill existing processes on the port

### Error Handling

The application includes error handling for:

- API request failures
- Firebase connection issues
- Invalid environment variables

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Support

For support, please open an issue in the repository or contact the development team.

## Changelog

### Version 1.0.0

- Initial release
- Basic job fetching functionality
- Firebase Firestore integration
- Support for multiple job categories
