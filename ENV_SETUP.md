# Environment Variables Setup Guide

## ✅ **Yes, use quotes in your .env file!**

### Correct Format (with quotes):

```bash
# Sentry Configuration
VITE_SENTRY_AUTH_TOKEN="your_sentry_auth_token_here"
VITE_SENTRY_DSN="your_sentry_dsn_here"

# Firebase Configuration
VITE_FIREBASE_API_KEY="your_firebase_api_key_here"
VITE_FIREBASE_AUTH_DOMAIN="your_project.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="your_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_project.appspot.com"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_sender_id"
VITE_FIREBASE_APP_ID="your_app_id"

# Other API Keys
VITE_API_URL="https://api.example.com"
VITE_API_KEY="your_api_key_here"
```

### ❌ Incorrect Format (without quotes):

```bash
# Don't do this
VITE_SENTRY_AUTH_TOKEN=your_sentry_auth_token_here
VITE_SENTRY_DSN=your_sentry_dsn_here
```

## Why Use Quotes?

1. **Prevents parsing issues** - Some values might contain special characters
2. **Handles spaces** - Values with spaces need quotes
3. **Consistency** - It's the standard practice
4. **Avoids errors** - Some build tools expect quoted values

## Best Practices:

1. **Always use double quotes** around values
2. **No spaces around the equals sign**
3. **Use descriptive variable names**
4. **Prefix with VITE_** for client-side access
5. **Never commit .env files** to version control

## Example .env file for your project:

```bash
# Sentry Configuration
VITE_SENTRY_AUTH_TOKEN="your_actual_sentry_auth_token"
VITE_SENTRY_DSN="https://cf8eca408a0d6e210687e6fcb1f4b456@o4509802634608640.ingest.us.sentry.io/4509802639523840"

# Add any other environment variables you need
VITE_API_URL="https://api.yourapp.com"
VITE_API_KEY="your_api_key"
```

## Security Notes:

- ✅ **Use quotes** around all values
- ✅ **Keep .env in .gitignore**
- ✅ **Use different values for dev/prod**
- ❌ **Never commit sensitive keys**
- ❌ **Don't share .env files**

## Accessing in Code:

```javascript
// In your React components
const apiKey = import.meta.env.VITE_API_KEY;
const dsn = import.meta.env.VITE_SENTRY_DSN;

// In Vite config
const authToken = process.env.VITE_SENTRY_AUTH_TOKEN;
``` 