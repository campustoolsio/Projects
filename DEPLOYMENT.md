# Deployment Guide

This guide explains how to deploy your full-stack app to production.

## Prerequisites
- GitHub repository: https://github.com/campustoolsio/Projects
- Vercel account: https://vercel.com
- Render account: https://render.com

---

## Step 1: Deploy Backend to Render

### Setup
1. Go to **https://render.com** and sign in with GitHub
2. Click **"New +"** → **"Web Service"**
3. Select your **campustoolsio/Projects** repository
4. Configure:
   - **Name**: `fullstack-backend`
   - **Environment**: Node
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
5. Click **"Create Web Service"**

### Get Your Backend URL
Once deployed, Render will provide a URL like:
```
https://fullstack-backend-xyz.onrender.com
```
**Save this URL!** You'll need it for the frontend.

---

## Step 2: Deploy Frontend to Vercel

### Setup
1. Go to **https://vercel.com** and sign in with GitHub
2. Click **"New Project"**
3. Select your **campustoolsio/Projects** repository
4. Configure:
   - **Framework**: React
   - **Root Directory**: `./frontend`
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`

### Add Backend URL Environment Variable
Before deploying, add:
1. Click **"Environment Variables"**
2. Add new variable:
   - **Name**: `REACT_APP_BACKEND_URL`
   - **Value**: `https://fullstack-backend-xyz.onrender.com` (your Render URL)
3. Click **"Deploy"**

Vercel will auto-deploy once you push to GitHub!

---

## Step 3: Test Your Deployment

After both are deployed:

1. **Frontend URL** (from Vercel): https://your-project.vercel.app
2. **Backend URL** (from Render): https://fullstack-backend-xyz.onrender.com

### Test Endpoints
- Frontend loads
- "Refresh Message" button works
- "Load Users" button works
- Echo service works

### Common Issues

**Backend shows as unavailable:**
- Wait 2-3 minutes for Render to fully start
- Render free tier may sleep after 15 min inactivity (auto-wakes when accessed)

**CORS errors:**
- Make sure backend URL includes `https://` (not `http://`)
- Check browser console for error messages

---

## Automatic Deployment

Once set up, deployments are automatic:
- **Push code to GitHub** → Vercel auto-deploys frontend
- **Backend updates** → Manual redeploy on Render (or use webhooks)

---

## Environment Variables Summary

### Local Development (.env.local)
```
REACT_APP_BACKEND_URL=http://localhost:5000
```

### Production (Vercel Dashboard)
```
REACT_APP_BACKEND_URL=https://fullstack-backend-xyz.onrender.com
```

---

## Cost Breakdown

- **Vercel**: Free (generous free tier)
- **Render**: Free (limited, may sleep)
- **GitHub**: Free

**Total: $0/month** 🎉

---

## Next Steps

1. Deploy backend to Render
2. Deploy frontend to Vercel
3. Add backend URL as environment variable in Vercel
4. Test all endpoints

Need help? Check the README.md file!
