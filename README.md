# CodeTonight Website

A beautiful, password-protected website with confetti animations and modern UI.

## Features

- 🎨 Beautiful animated background with Ken Burns effect
- 🔐 Password-protected access to manifesto
- 🎉 Confetti animation on successful login
- 👁️ Password visibility toggle
- 📱 Responsive design for all devices
- 🚀 Simple Node.js backend with environment variables

## Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd codetonight-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` with your secrets:
   ```
   MANIFESTO_PASSWORD=your_secret_password
   MANIFESTO_URL=https://your-notion-page-url
   PORT=3000
   ```

4. **Start the server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Visit the website**
   Open http://localhost:3000 in your browser

## Usage

1. Click the "clickity click ☾" button
2. Enter your password in the modal
3. If correct: enjoy confetti animation and redirect to manifesto
4. If incorrect: see custom error message

## Project Structure

```
codetonight-website/
├── index.html          # Main website file
├── server.js           # Express server
├── package.json        # Node.js dependencies
├── .env               # Environment variables (not in git)
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Environment Variables

- `MANIFESTO_PASSWORD`: The password for accessing the manifesto
- `MANIFESTO_URL`: The URL to redirect to after successful login
- `PORT`: Server port (default: 3000)

## Development

- **Backend**: Express.js server serving static files and API endpoints
- **Frontend**: Pure HTML/CSS/JavaScript with modern animations
- **Security**: Environment variables for sensitive data

## Deployment

### Vercel Deployment

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard**
   - Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to Settings → Environment Variables
   - Add the following variables:
     - `MANIFESTO_PASSWORD`: Your secret password
     - `MANIFESTO_URL`: Your Notion page URL

4. **Redeploy** (if you added env vars after first deploy)
   ```bash
   vercel --prod
   ```

### Alternative: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Set environment variables in Vercel dashboard
4. Vercel will auto-deploy on every push
