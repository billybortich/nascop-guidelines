# Kenya HIV/STI/VH Guidelines App — APK Build Instructions

## What's included
Complete Capacitor Android project pre-configured with the NASCOP 2026 Guidelines app.
The web assets are already built and synced into the Android project.

## Option A — Build with Android Studio (Recommended, ~10 min)
1. Install Android Studio: https://developer.android.com/studio
2. Unzip this file and open the `android/` folder in Android Studio
   (File → Open → select the `android` folder)
3. Wait for Gradle sync to complete
4. Go to Build → Build Bundle(s) / APK(s) → Build APK(s)
5. APK will be at: android/app/build/outputs/apk/debug/app-debug.apk

## Option B — Build with command line
Requirements: Java 17+, Android SDK (API 36), Gradle 8+

```bash
unzip nascop-guidelines-android.zip
cd nascop-app/android
export ANDROID_SDK_ROOT=/path/to/your/android/sdk
./gradlew assembleDebug
```
APK will be at: app/build/outputs/apk/debug/app-debug.apk

## Option C — GitHub Actions (no local setup needed)
1. Push this project to a GitHub repository
2. Create `.github/workflows/build.yml`:
```yaml
name: Build APK
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with: { java-version: '17', distribution: 'temurin' }
      - uses: android-actions/setup-android@v3
      - name: Build APK
        working-directory: android
        run: ./gradlew assembleDebug
      - uses: actions/upload-artifact@v4
        with:
          name: app-debug.apk
          path: android/app/build/outputs/apk/debug/app-debug.apk
```
3. Download the APK from the Actions tab after the workflow runs

## App Details
- Package: ke.go.health.nascop.guidelines
- Min Android: 7.0 (API 24)
- Target: Android 16 (API 36)
- Features: Guidelines browser, decision algorithms, AI clinical assistant, search

## AI Assistant
The app requires internet access for the AI assistant feature (Anthropic API).
All guideline content (browsing, search, algorithms) works fully offline.
