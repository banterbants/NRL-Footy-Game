FOOTY 3D - Android project (Capacitor)
======================================

OPTION A - no installs (GitHub Actions builds the APK for you)
1. Create a free GitHub account and a new empty repository.
2. Upload everything in this folder to it (including the hidden .github folder).
3. Open the repo's "Actions" tab -> "Build APK" -> wait ~5 minutes.
4. Open the finished run, download the "footy3d-debug-apk" artifact, unzip it.
5. Copy app-debug.apk to your phone, tap it, and allow "install unknown apps".

OPTION B - build on your computer
1. Install Node 20, JDK 17 and Android Studio.
2. In this folder run:
     npm install
     curl -L https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js -o www/three.min.js
   then edit www/index.html and replace the cdnjs three.min.js URL with: three.min.js
     npx cap add android
     npx cap sync android
     npx cap open android
3. In Android Studio: Build > Build APK(s). Add android:screenOrientation="sensorLandscape"
   to the <activity> in android/app/src/main/AndroidManifest.xml for landscape play.

Notes
- This produces a DEBUG APK for sideloading. Publishing to Google Play needs a signed release AAB.
- Controls: on-screen joystick and buttons appear on touch devices. A Bluetooth Xbox
  controller also works.
- It needs a phone with WebGL; mid-range or better is recommended.
