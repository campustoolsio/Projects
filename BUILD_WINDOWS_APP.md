# Build Windows Desktop Application

This guide explains how to build your Full Stack App into a Windows Desktop Application (.exe installer).

## Prerequisites

✅ All done automatically!
- Node.js installed
- Electron installed
- Electron-builder installed

## Building the Windows Installer

### Step 1: Build the Frontend (React)

```bash
npm run build-frontend
```

This creates an optimized production build of the React app in `frontend/build/`.

### Step 2: Create Windows Installer

Choose one option:

#### **Option A: NSIS Installer** (Recommended)
```bash
npm run build-installer
```

Creates:
- `dist/Full Stack App Setup 1.0.0.exe` - Standard installer
- `dist/Full Stack App 1.0.0.exe` - Portable version

#### **Option B: Portable Executable Only**
```bash
npm run build-portable
```

Creates a single `.exe` file that doesn't need installation.

#### **Option C: Both**
```bash
npm run build-desktop
```

Creates both installer and portable versions.

---

## Output Files

After building, you'll find installers in the `dist/` folder:

```
dist/
├── Full Stack App Setup 1.0.0.exe    (Installer - recommended)
├── Full Stack App 1.0.0.exe          (Portable)
└── *.yml                             (Update metadata)
```

---

## Distribution

### **Option 1: Direct Download**
- Share the `.exe` file
- Users download and run it
- Automatic installation to Program Files

### **Option 2: Website**
- Host the `.exe` on your website
- Users download from there

### **Option 3: Auto Updates** (Advanced)
- Set up GitHub releases
- App checks for updates automatically

---

## What Gets Packaged

The `.exe` includes:
- ✅ React Frontend (optimized build)
- ✅ Node.js Backend (auto-starts)
- ✅ All dependencies
- ✅ Everything needed to run

Users **don't need** to install Node.js separately!

---

## Installation Experience

When user runs the `.exe`:

1. **Installer dialog** - "Full Stack App Setup"
2. **Choose install location** - `C:\Program Files\Full Stack App\`
3. **Create shortcuts** - Desktop + Start Menu
4. **Installation progress** - Visual progress bar
5. **Finish** - Ready to launch!

---

## Launching the App

After installation:
- Desktop shortcut
- Start Menu → Full Stack App
- Or: `C:\Program Files\Full Stack App\Full Stack App.exe`

When user launches:
- Backend starts automatically
- React frontend loads
- Everything works offline!

---

## System Requirements

- **OS**: Windows 7 or later (64-bit)
- **RAM**: 256 MB (minimal)
- **Disk**: ~300 MB

---

## Customization

To customize the installer:

Edit `package.json` → `build` → `nsis` section:

```json
"nsis": {
  "oneClick": false,
  "allowToChangeInstallationDirectory": true,
  "createDesktopShortcut": true,
  "createStartMenuShortcut": true,
  "shortcutName": "Full Stack App"
}
```

---

## Troubleshooting

**Error: "dist folder already exists"**
- Delete the `dist/` folder and try again

**Backend not starting in installed app**
- Check that backend `.env` files are included
- Ensure `backend/node_modules` is packaged

**App won't launch after installation**
- Try running as Administrator
- Check Windows Defender wasn't blocked

---

## Quick Build Command

The fastest way to build everything:

```bash
npm run build-installer
```

Then find your `.exe` in the `dist/` folder! 🎉

---

## Next Steps

1. **Build**: `npm run build-installer`
2. **Test**: Run the `.exe` on your local machine
3. **Verify**: Check that all features work
4. **Distribute**: Share the `.exe` file with others
5. **Get feedback**: Update as needed

---

## Support

If you need help:
1. Check the error messages in console
2. Rebuild with verbose logging: `npm run build-desktop -- --verbose`
3. Check [Electron Builder Docs](https://www.electron.build/)

---

## System Tray Icon (Optional Enhancement)

The app currently uses:
- Application icon
- Desktop shortcut
- Start Menu entry

To add more features (system tray, auto-update, etc.), we can enhance later!

---

**Ready to build? Run:**
```bash
npm run build-installer
```

Your Windows installer will be created in the `dist/` folder! 🚀
