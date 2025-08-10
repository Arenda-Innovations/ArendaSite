# Sentry Setup Guide

## Fixing the Sentry Auth Token Warnings

You're seeing these warnings because Sentry needs an auth token to upload source maps and create releases.

### Step 1: Get Your Sentry Auth Token

1. Go to [Sentry.io](https://sentry.io) and log in
2. Navigate to **Settings** > **Account** > **API** > **Auth Tokens**
3. Click **Create New Token**
4. Give it a name like "Arenda Website"
5. Select these scopes:
   - `project:read`
   - `project:write`
   - `org:read`
   - `member:read`
6. Click **Create Token**
7. **Copy the token** (you won't see it again!)

### Step 2: Create/Update Your .env File

Create a `.env` file in your project root (if it doesn't exist) and add:

```bash
# Sentry Configuration
VITE_SENTRY_AUTH_TOKEN="your_actual_sentry_auth_token_here"
VITE_SENTRY_DSN="https://cf8eca408a0d6e210687e6fcb1f4b456@o4509802634608640.ingest.us.sentry.io/4509802639523840"
```

**Important:** Replace `your_actual_sentry_auth_token_here` with the token you copied from Sentry.

### Step 3: Verify Your Vite Config

Your `vite.config.js` should look like this:

```javascript
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    org: "arenda-innovations",
    project: "javascript-react",
    telemetry: false,
  })],

  build: {
    sourcemap: true
  }
})
```

### Step 4: Test the Setup

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Build your project:**
   ```bash
   npm run build
   ```

3. **Check for warnings** - they should be gone!

### Alternative: Disable Sentry (if you don't need it)

If you don't want to use Sentry right now, you can disable it:

#### Option 1: Remove Sentry from Vite config
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Remove sentryVitePlugin
  build: {
    sourcemap: true
  }
})
```

#### Option 2: Remove Sentry from main.jsx
```javascript
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

document.title = 'Arenda | Home';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

### Troubleshooting

**If you still see warnings:**
1. Make sure your `.env` file is in the project root
2. Restart your development server after adding the `.env` file
3. Check that the token is correct (no extra spaces)
4. Verify the token has the correct permissions

**Common issues:**
- Token not copied correctly
- `.env` file in wrong location
- Server not restarted after changes
- Token doesn't have required permissions

### Security Notes

- ✅ **Never commit your `.env` file** to version control
- ✅ **Use different tokens** for development and production
- ✅ **Keep your token secure** - it has access to your Sentry project
- ❌ **Don't share your token** publicly 