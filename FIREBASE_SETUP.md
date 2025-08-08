# Firebase Firestore Setup Guide

This guide will help you set up Firebase Firestore to collect form submissions from your contact form.

## Prerequisites

1. A Google account
2. Access to Firebase Console
3. Firebase project already created (you have "arendawebsite")

## Step 1: Enable Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your "arendawebsite" project
3. In the left sidebar, click "Firestore Database"
4. Click "Create database"
5. Choose "Start in test mode" (for development)
6. Select a location (choose the closest to your users)
7. Click "Done"

## Step 2: Get Firebase Configuration

1. In Firebase Console, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. If you don't have a web app, click "Add app" and choose the web icon (</>)
5. Register your app with a nickname (e.g., "Arenda Website")
6. Copy the firebaseConfig object

## Step 3: Update Firebase Configuration

1. Open `src/utils/firebase.js`
2. Replace the `firebaseConfig` object with your actual configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "arendawebsite.firebaseapp.com",
  projectId: "arendawebsite",
  storageBucket: "arendawebsite.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

## Step 4: Set Up Firestore Security Rules

1. In Firebase Console, go to "Firestore Database" > "Rules"
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact-submissions/{document} {
      allow write: if true;  // Anyone can write (for contact form)
      allow read: if false;  // No one can read (for privacy)
    }
  }
}
```

3. Click "Publish"

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check Firebase Console > Firestore Database to see if the data was added

## Step 6: Deploy to Production

1. Build your project: `npm run build`
2. Deploy to Firebase: `firebase deploy --only hosting`

## Alternative Options

### Option 2: Firebase Functions + External Database

If you specifically need PostgreSQL, you can:

1. **Use Firebase Functions** to handle form submissions
2. **Connect to external PostgreSQL** (e.g., Supabase, Railway, or AWS RDS)
3. **Deploy the function** to Firebase

### Option 3: Supabase (PostgreSQL + API)

1. Create a [Supabase](https://supabase.com) account
2. Create a new project
3. Use their PostgreSQL database
4. Create a table for contact submissions
5. Use their auto-generated API

### Option 4: Railway + PostgreSQL

1. Create a [Railway](https://railway.app) account
2. Deploy a Node.js/Express backend
3. Connect to PostgreSQL database
4. Create API endpoints for form submissions

## File Structure

```
├── src/
│   ├── utils/
│   │   └── firebase.js          # Firebase configuration and utilities
│   └── components/
│       └── ContactForm.jsx      # Updated contact form
└── FIREBASE_SETUP.md           # This setup guide
```

## Security Considerations

- Firestore rules are set to allow writes but not reads (for privacy)
- Consider implementing rate limiting for production
- Add validation on the server side
- Consider adding CAPTCHA for spam prevention

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure Firestore is properly configured
2. **Permission Denied**: Check Firestore security rules
3. **Configuration Errors**: Verify your firebaseConfig is correct

### Testing

You can test the integration by:
1. Opening browser console
2. Submitting the form
3. Checking for any error messages
4. Verifying data appears in Firestore Console

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify Firebase configuration is correct
3. Ensure Firestore is enabled and rules are set
4. Check Firebase Console for any error logs 