# Full Stack JavaScript App

A complete full-stack application with Node.js/Express backend and React frontend.

## Project Structure

```
FullStackApp/
├── backend/           # Express server
│   ├── package.json
│   └── server.js
├── frontend/          # React app
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
```

## Features

- **Backend API** with multiple endpoints
- **React Frontend** with component state management
- **CORS** enabled for local development
- **Error handling** and user feedback
- **Real-time API calls** from frontend to backend

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Install Backend Dependencies**
   ```bash
   cd FullStackApp/backend
   npm install
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

**Option 1: Run in Separate Terminals (Recommended)**

Terminal 1 - Start Backend:
```bash
cd FullStackApp/backend
npm start
```
The server will run on `http://localhost:5000`

Terminal 2 - Start Frontend:
```bash
cd FullStackApp/frontend
npm start
```
The app will automatically open at `http://localhost:3000`

**Option 2: Run Both from Root (requires npm-run-all)**
```bash
npm install -g npm-run-all
npm-run-all --parallel backend:start frontend:start
```

## API Endpoints

- `GET /api/hello` - Returns a greeting message
- `GET /api/users` - Returns a list of users
- `POST /api/echo` - Echoes back the sent message with timestamp

## Testing the App

1. The frontend will load with a greeting from the backend
2. Click "Load Users" to fetch and display the user list
3. Type in the Echo Service input and press Enter or click "Send" to test the POST endpoint

## Troubleshooting

**Frontend can't connect to backend?**
- Make sure backend is running on port 5000
- Check browser console for CORS errors
- Verify proxy setting in frontend/package.json: `"proxy": "http://localhost:5000"`

**Dependencies failing to install?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Port already in use?**
- Backend: Set `PORT` environment variable (e.g., `set PORT=5001`)
- Frontend: Create `.env` file with `PORT=3001`

## Building for Production

Frontend:
```bash
cd frontend
npm run build
```

This creates an optimized production build in `frontend/build/`
