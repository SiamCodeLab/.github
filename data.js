// ============================================================
//  data.js  —  Add / edit your projects here
//  thumbnail & gallery: use real image paths or URLs
// ============================================================

const PROJECTS = [
  {
    id: 1,
    slug: "expense-tracker-app",
    title: "IOM Daily Azkar",
    shortDesc: "A 4.9-star rated spiritual growth app with 1,000+ downloads, featuring daily dhikr, dua, prayer times, and rich Islamic content for daily spiritual practice.",
    description: `
      <h3>Overview</h3>
      <p>IOM Daily Azkar is a Flutter-based mobile application designed to help users engage in daily spiritual practice. The app provides a rich collection of dhikr, duas, and prayer times to support a consistent spiritual routine.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Daily dhikr reminders with customizable intervals</li>
        <li>Extensive library of duas and supplications</li>
        <li>Beautiful animated charts (pie, bar, trend lines)</li>
        <li>Cloud sync via Firebase Firestore</li>
        <li>Offline-first using Hive local database</li>
        <li>Export reports as PDF or CSV</li>
      </ul>

      <h3>Technical Highlights</h3>
      <p>Built with Flutter 3.x using the BLoC pattern for state management. Firebase Authentication handles multi-device login. All chart animations are custom-built with Flutter's animation framework for a native feel on both iOS and Android.</p>

      <h3>Challenges & Solutions</h3>
      <p>The biggest challenge was ensuring seamless offline-to-online sync without data conflicts. I solved this with a timestamp-based conflict resolution strategy backed by Firestore transactions.</p>
    `,
    thumbnail: "https://i.ibb.co.com/23nPzBm5/cover.jpg",
    gallery: [
      { url: "https://i.ibb.co.com/23nPzBm5/cover.jpg", alt: "Home Dashboard", caption: "Main dashboard with monthly overview" },
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Hive", "BLoC"],
    tags: ["Mobile", "Android", "iOS", "Finance"],
    liveDemo: null,
    github: "https://github.com",
    playStore: "https://play.google.com",
    appStore: "https://apps.apple.com",
    status: "completed",
    featured: true
  }
];
