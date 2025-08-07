# Arenda Website

If you are downloading this, get some help.

## Environment Variables

To run this project, you need to set up environment variables for Sentry integration.

### Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Sentry Configuration
VITE_SENTRY_AUTH_TOKEN=your_sentry_auth_token_here
VITE_SENTRY_DSN=your_sentry_dsn_here
```

### Getting Your Sentry Credentials

1. Go to [Sentry.io](https://sentry.io) and log in to your account
2. Navigate to Settings > Account > API > Auth Tokens
3. Create a new token with the necessary permissions
4. Copy the token and add it to your `.env` file as `VITE_SENTRY_AUTH_TOKEN`
5. Go to Settings > Projects > [Your Project] > Client Keys (DSN)
6. Copy the DSN and add it to your `.env` file as `VITE_SENTRY_DSN`

### Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already included in `.gitignore`
- Use different tokens for development and production environments
- The DSN is safe to expose in client-side code, but the auth token should be kept secret