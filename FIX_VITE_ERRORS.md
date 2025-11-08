# Fix Vite 504 Errors - Step by Step Guide

If you're getting 504 "Outdated Optimize Dep" errors, follow these steps:

## Solution 1: Clear Cache and Restart (Recommended)

1. **Stop the dev server** (Press `Ctrl + C` in the terminal where it's running)

2. **Clear Vite cache**:
   ```bash
   # Windows PowerShell
   Remove-Item -Recurse -Force node_modules\.vite
   
   # Or Windows CMD
   rmdir /s /q node_modules\.vite
   ```

3. **Restart the dev server**:
   ```bash
   npm run dev
   ```

4. **Wait for dependencies to optimize** (this may take 30-60 seconds the first time)

5. **Hard refresh your browser**:
   - Chrome/Edge: `Ctrl + Shift + R` or `Ctrl + F5`
   - Firefox: `Ctrl + Shift + R`
   - Safari: `Cmd + Shift + R`

## Solution 2: Force Re-optimization

If Solution 1 doesn't work:

1. **Stop the dev server** (`Ctrl + C`)

2. **Clear cache and restart with force flag**:
   ```bash
   Remove-Item -Recurse -Force node_modules\.vite
   npm run dev -- --force
   ```

## Solution 3: Reinstall Dependencies

If the above solutions don't work:

1. **Stop the dev server**

2. **Delete node_modules and package-lock.json**:
   ```bash
   Remove-Item -Recurse -Force node_modules
   Remove-Item package-lock.json
   ```

3. **Reinstall dependencies**:
   ```bash
   npm install
   ```

4. **Start the dev server**:
   ```bash
   npm run dev
   ```

## Why This Happens

The 504 error occurs when:
- New packages are installed (like `framer-motion`)
- Vite's dependency cache becomes outdated
- The dev server needs to re-optimize dependencies

## Prevention

After installing new packages:
1. Always restart the dev server
2. Clear the cache if you see errors
3. Wait for Vite to finish optimizing dependencies before refreshing

## Current Status

✅ Vite config updated to include dependency optimization
✅ Cache cleared
✅ Dev server restarted

The errors should be resolved now. If not, follow Solution 2 or 3 above.


