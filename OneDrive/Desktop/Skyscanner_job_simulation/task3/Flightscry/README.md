# Flightscry - Skyscanner Flight Itinerary Proof of Concept (PoC)

Flightscry is an Android application developed for Skyscanner to display users' upcoming flight itineraries using Skyscanner's **Backpack UI library**.

## Features & Implementation
- **Built with Skyscanner Backpack**: Integrates `net.skyscanner.backpack:backpack-android:43.0.0`.
- **Target SDK**: Min SDK 33 (Android Tiramisu - API 33).
- **Language**: Kotlin & Android XML.
- **Flight Information Card**: `BpkCardView` with `cornerStyle="large"` containing Flight Number ("SK 1842").
- **Departure Card**: `BpkCardView` with `cornerStyle="large"` containing 3-digit airport code ("EDI" - Edinburgh) & departure time ("10:30 AM").
- **Arrival Card**: `BpkCardView` with `cornerStyle="large"` containing 3-digit airport code ("LHR" - London Heathrow) & arrival time ("11:45 AM").
- **Typography & Styling**: Skyscanner text hierarchy (`@style/bpkTextHeading1`, `@style/bpkTextHeading2`, `@style/bpkTextHeading3`, `@style/bpkTextBodyDefault`).

## Project Structure
```
Flightscry/
├── app/
│   ├── build.gradle
│   └── src/
│       └── main/
│           ├── AndroidManifest.xml
│           ├── java/net/skyscanner/flightscry/MainActivity.kt
│           └── res/
│               ├── layout/activity_main.xml
│               └── values/
│                   ├── colors.xml
│                   ├── strings.xml
│                   └── themes.xml
├── build.gradle
├── settings.gradle
└── gradle.properties
```
