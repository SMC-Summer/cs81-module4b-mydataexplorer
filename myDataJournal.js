// GitHub Repository URL:
// https://github.com/SMC-Summer/cs81-module4b-mydataexplorer

/**
 * My Data Journal
 *
 * This file contains a week's worth of personal data and functions to analyze it.
 * The goal is to explore patterns in your own habits and reflect on the insights.
 */

// 1. Your Weekly Data
// Fill this out with your own real or realistic data for one week.
const weekData = [
  { day: "Sunday",    sleepHours: 7.5, screenTime: 6, mood: "relaxed",    caffeineIntake: 1, focusLevel: 6 },
  { day: "Monday",    sleepHours: 6,   screenTime: 8, mood: "productive", caffeineIntake: 3, focusLevel: 8 },
  { day: "Tuesday",   sleepHours: 6.5, screenTime: 7, mood: "tired",      caffeineIntake: 2, focusLevel: 7 },
  { day: "Wednesday", sleepHours: 8,   screenTime: 9, mood: "focused",    caffeineIntake: 2, focusLevel: 9 },
  { day: "Thursday",  sleepHours: 7,   screenTime: 6, mood: "productive", caffeineIntake: 1, focusLevel: 8 },
  { day: "Friday",    sleepHours: 5.5, screenTime: 5, mood: "energetic",  caffeineIntake: 3, focusLevel: 7 },
  { day: "Saturday",  sleepHours: 9,   screenTime: 4, mood: "relaxed",    caffeineIntake: 0, focusLevel: 5 },
];

// 2. Predictions Before Coding
// Add your predictions here before you run the code.
/*
 * My Predictions:
 * - Most screen time day: Wednesday, because of a long day of classes and work.
 * - Best focus day: Monday, I usually feel ready to go at the start of the week.
 * - Does more caffeine help focus? I think so, yes. The more coffee, the more I can concentrate.
 */

// 3. Discovery Functions

/**
 * Finds the day with the highest screen time.
 * @param {Array<Object>} data The week's data.
 * @returns {Object} The object for the day with the most screen time.
 */
function findHighestScreenTime(data) {
  let highestDay = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].screenTime > highestDay.screenTime) {
      highestDay = data[i];
    }
  }
  return highestDay;
}

/**
 * Calculates the average hours of sleep for the week.
 * @param {Array<Object>} data The week's data.
 * @returns {number} The average sleep hours, rounded to one decimal place.
 */
function calculateAverageSleep(data) {
  let totalSleep = 0;
  for (const day of data) {
    totalSleep += day.sleepHours;
  }
  const average = totalSleep / data.length;
  return Math.round(average * 10) / 10; // Rounds to one decimal place
}

/**
 * Finds the most frequently occurring mood.
 * @param {Array<Object>} data The week's data.
 * @returns {string} The most frequent mood.
 */
function findMostFrequentMood(data) {
  const moodCounts = {};
  for (const day of data) {
    moodCounts[day.mood] = (moodCounts[day.mood] || 0) + 1;
  }

  let mostFrequentMood = "";
  let maxCount = 0;
  for (const mood in moodCounts) {
    if (moodCounts[mood] > maxCount) {
      mostFrequentMood = mood;
      maxCount = moodCounts[mood];
    }
  }
  return mostFrequentMood;
}

/**
 * Correlates caffeine intake with focus level.
 * This is a simple analysis: it checks if days with high caffeine
 * also have high focus levels on average.
 * @param {Array<Object>} data The week's data.
 * @returns {string} A conclusion about the correlation.
 */
function correlateCaffeineToFocus(data) {
  const highCaffeineDays = data.filter(day => day.caffeineIntake >= 2);
  const lowCaffeineDays = data.filter(day => day.caffeineIntake < 2);

  let highCaffeineFocusSum = 0;
  highCaffeineDays.forEach(day => highCaffeineFocusSum += day.focusLevel);
  const avgFocusHighCaffeine = highCaffeineDays.length > 0 ? highCaffeineFocusSum / highCaffeineDays.length : 0;

  let lowCaffeineFocusSum = 0;
  lowCaffeineDays.forEach(day => lowCaffeineFocusSum += day.focusLevel);
  const avgFocusLowCaffeine = lowCaffeineDays.length > 0 ? lowCaffeineFocusSum / lowCaffeineDays.length : 0;

  if (avgFocusHighCaffeine > avgFocusLowCaffeine) {
    return "It seems so! Average focus was higher on high-caffeine days.";
  } else if (avgFocusHighCaffeine < avgFocusLowCaffeine) {
    return "Nope! Average focus was higher on low-caffeine days.";
  } else {
    return "No clear connection. Average focus was about the same.";
  }
}


// 4. Displaying The Results
// This section calls the functions and prints the results to the console.
console.log("Analyzing My Data Journal...");
console.log("============================");

const highestScreenTimeDay = findHighestScreenTime(weekData);
console.log(`Most screen time: ${highestScreenTimeDay.day} (${highestScreenTimeDay.screenTime} hrs)`);

const averageSleep = calculateAverageSleep(weekData);
console.log(`Average sleep: ${averageSleep} hrs`);

const frequentMood = findMostFrequentMood(weekData);
console.log(`Most frequent mood: "${frequentMood}"`);

const caffeineConclusion = correlateCaffeineToFocus(weekData);
console.log(`Does more caffeine mean better focus? → ${caffeineConclusion}`);
