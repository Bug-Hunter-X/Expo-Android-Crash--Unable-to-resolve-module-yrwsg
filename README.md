# Expo Android Crash: Unable to resolve module

This repository demonstrates a common issue in Expo Android development where the app crashes due to an inability to resolve image modules. The bug occurs when trying to import images using `require('./images/image1.jpg')` and results in an "Unable to resolve module` error. The solution involves using the `expo-asset` package to correctly load assets and avoid this crash.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   expo start
   ```

## Bug

The `bug.js` file contains the buggy code that crashes the app on Android. The error is detailed in the `bugDescription.md` file.

## Solution

The `bugSolution.js` file provides a solution to the bug using the `expo-asset` package.