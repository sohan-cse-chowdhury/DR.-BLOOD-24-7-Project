import  { useState, useEffect, useCallback, useMemo, createContext, useContext, useRef } from 'react';
import './index.css';
import Footer from './components/Footer.jsx';


// ===== LANGUAGE SUPPORT SYSTEM =====
const LanguageContext = createContext();

// English texts (your existing content)
const englishTexts = {
  // Navigation
  appName: "DR. BLOOD 24/7",
  appSubtitle: "Bangladesh Blood Donation Network",
  
  // i can add

  // In your englishTexts object:
seeMore: "See More",
seeLess: "See Less",
recentDonations: "Recent Donations",
noDonationHistory: "No donation history available",



  // Pages
  home: "🏠 Home",
  findDonors: "🔍 Find Donors",
  myProfile: "👤 My Profile",
  becomeDonor: " Become Donor",
  login: "🔑 Login",
  logout: "👋 Logout",
  
  // Hero Section
  heroTitle: "Saving Lives Through <span class='highlight'>Blood Donation</span>",
  heroSubtitle: "Bangladesh's most trusted <b>Blood donation platform.</b> Connecting voluntary donors with patients in need through a verified nationwide network.",
  findBloodDonors: " Find Blood Donors",
  registerAsDonor: " Register as Donor",
  detectMyLocation: " Detect My Location",
  
  // Stats
  availableDonors: "Available Donors",
  partnerLocations: "Partner Locations",
  citiesCovered: "Cities Covered",
  livesSaved: "Lives Saved",
  
  // Features
  whyTrust: "Why Trust DR. BLOOD 24/7?",
  verifiedScreened: "Verified & Screened",
  verifiedDesc: "Every donor undergoes medical screening and background verification. Health records are regularly updated.",
  smartAvailability: "Smart Availability",
  smartDesc: "Automatic status updates ensure donors are only available when medically eligible to donate.",
  liveStatus: "Live Status Updates",
  liveDesc: "Get real-time donor updates and estimated arrival times instantly.",
  rapidResponse: "Rapid Response",
  rapidDesc: "Average response time of 15 minutes for emergency requests. 24/7 coordination center.",
  nationwideNetwork: "Nationwide Network",
  networkDesc: "Verified donors across all major cities in Bangladesh. Direct coordination for emergency cases.",
  realtimeTracking: "Real-time Tracking",
  trackingDesc: "Live donor location tracking and estimated arrival time. SMS/Email notifications.",
  
  // Blood Types
  bloodTypeCompatibility: "Blood Type Compatibility",
  compatibilityInfo: "💡 <strong>O-</strong> can donate to all blood types |<br /> <strong>| AB+</strong> can receive from all blood types 💡",
  
  // Emergency CTA
  needImmediateAssistance: "Need Immediate Assistance?",
  emergencyDesc: "Our 24/7 coordination team is ready to help you find compatible donors quickly",
  findDonorsNow: "Find Donors Now",
  
  // Donors Page
  findBloodDonorsTitle: "🔍 Find Blood Donors",
  findDonorsSubtitle: "Connect with verified donors across Bangladesh's major cities",
  detectLocation: " Detect My Location",
  donorAvailability: "Donor Availability",
  allDonors: "👥 All Donors",
  availableNow: "✅ Available Now",
  recentlyDonated: "⏳ Recently Donated",
  searchResults: "Search Results:",
  clear: " Clear",
  
  // Search System
  findCompatibleDonors: "Find Compatible Donors",
  searchDescription: "Connect with verified donors using precise search criteria",
  showAdvancedFilters: " Show Advanced Filters",
  hideAdvancedFilters: " Hide Advanced Filters",
  searchLocation: "Search Location",
  enterCityOrArea: "Enter city or area (e.g., Dhaka, Gulshan, Cumilla)",
  popularAreas: "Popular Areas:",
  availabilityFilter: "Availability Filter",
  additionalFilters: "Additional Filters",
  allDonorsFilter: "All Donors",
  emergencyReady: "Emergency Ready",
  verifiedOnly: "Verified Only",
  recentDonors: "Recent Donors (Last 3 months)",
  nearMyLocation: "Near My Location",
  availableToday: "Available Today",
  donorsFound: "donors found",
  clearAllFilters: " Clear All Filters",
  becomeADonor: " Become a Donor",
  
  // Donor Cards
  availableDonorsTitle: "Available Donors",
  sortBy: "Sort by: Availability",
  sortByRecent: "Sort by: Recently Active",
  sortByCount: "Sort by: Donation Count",
  sortByRating: "Sort by: Rating",
  you: "(You)",
  yourProfile: "Your Profile",
  lastDonationLabel: "Last Donation:",
  emergencyAvailable: "Emergency Available",
  contactNow: " Contact Now",
  currentlyUnavailable: "Currently Unavailable",
  viewProfile: " View Profile",
  recordDonation: "➕ Record Donation",
  

  
  // Profile Page
  yourDonorProfile: "👤 Your Donor Profile",
  profileSubtitle: "Manage your donor information and donation history",
  profileTab: "👤 Profile",
  donationHistoryTab: "🩸 Donation History",
  availabilityTab: "⏰ Availability",
  totalDonations: "Total Donations",
  donorRating: "Donor Rating",
  emergencyReadyProfile: "Emergency Ready",
  personalInformation: "Personal Information",
  locationAvailability: "Location & Availability",
  contactInformation: "Contact Information",
  fullName: "Full Name:",
  bloodType: "Blood Type:",
  gender: "Gender:",
  age: "Age:",
  weight: "Weight:",
  height: "Height:",
  city: "City:",
  area: "Area:",
  availability: "Availability:",
  phone: "Phone:",
  email: "Email:",
  yourAchievements: "Your Achievements",
  editProfile: "Edit Profile",
  updateAvailability: "Update Availability",
  
  // Donation Status
  availableForDonation: "Available for Donation",
  unavailableForDonation: "Unavailable for Donation",
  pendingAvailability: "Pending Availability",
  youCanDonateNow: "You can donate blood now!",
  availableInDays: "Available in {days} day{days !== 1 ? 's' : ''}",
  
  // Footer
  footerTitle: "🩸 DR. BLOOD 24/7",
  footerDesc: "Bangladesh's most trusted blood donation network. Saving lives through community partnership and verified donor connections.",
  quickLinks: "Quick Links",
  contactInfo: "Contact Info",
  emergencyContacts: "Emergency Contacts",
  ambulanceService: " Ambulance Service",
  bloodBankInfo: "🩸 Blood Bank Info",
  dghsHelpline: "🏭 DGHS Helpline",
  copyright: "© 2024 DR. BLOOD 24/7 Bangladesh. Developed by SAKIB CHOWDHURY SOHAN",
  
  // Modals
  registerAsBloodDonor: "❤️ Register as Blood Donor",
  loginToApp: "🔑 Login to DR. BLOOD 24/7",
  enterYourPhone: "Enter Your Phone Number",
  sendVerificationCode: "Send Verification Code",
  verificationSent: "We sent a code to +880 {phone}",
  enterVerificationCode: "Enter Verification Code",
  resendCode: "Resend Code",
  verifyLogin: "Verify & Login",
  changePhoneNumber: "← Change Phone Number",
  
  // Registration Form
  personalInfo: "Personal Information",
  medicalInfo: "Medical Information & Eligibility",
  locationPref: "Location & Donation Preferences",
  fullNameRequired: "Full Name *",
  emailAddressRequired: "Email Address *",
  phoneNumberRequired: "Phone Number *",
  emergencyContactLabel: "Emergency Contact",
  bloodGroupRequired: "Blood Group *",
  genderRequired: "Gender *",
  dateOfBirth: "Date of Birth *",
  weightRequired: "Weight (kg) *",
  heightLabel: "Height",
  medicalConditions: "Any Medical Conditions?",
  recentSurgery: "Recent Surgery (within 6 months)",
  currentMedications: "Current Medications",
  travelHistory: "Travel History (last 3 months)",
  eligibilityChecklist: "Eligibility Checklist",
  atLeast18: "I am at least 18 years old",
  weighAtLeast45: "I weigh at least 45 kg",
  goodHealth: "I am in good health condition",
  notDonatedRecently: "I have not donated blood in the last 3 months",
  privacyConsent: "Privacy & Consent",
  privacyText: "Your information will be kept confidential and only shared with verified healthcare facilities when there is a genuine need for blood donation. You can update your availability or remove your registration at any time.",
  previousStep: "← Previous",
  nextStep: "Next Step →",
  completeRegistration: "🎉 Complete Registration",
  
  // Messages
  registrationSuccessful: "🎉 Registration Successful!",
  welcomeMessage: "Welcome {name}!",
  registeredSuccess: "You are now registered as a blood donor. Your profile is now visible to those in need.",
  verificationCodeSent: "📱 Verification code sent to {phone}",
  loginSuccessful: "✅ Login successful! Welcome to DR. BLOOD 24/7.",
  invalidCode: "❌ Invalid verification code. Please try again.",
  contactDonor: "📞 Contacting {name}",
  donorUnavailable: "❌ {name} is currently unavailable for donation.",
  willBeAvailable: "They will be available again in {days} days.",
  donationRecorded: "🎉 Donation recorded successfully!",
  availableAgain: "You'll be available again in 3 months.",
  thankYouForSaving: "Thank you for saving lives!",
  
  // Health Tips
  healthTips: "🩺 HEALTH TIPS",
  aiHealthAssistant: "AI Health Assistant",
  nextTip: "Next Tip →",
  generalWellness: "💡 General wellness advice. Consult doctors for medical concerns.",
  
  // Common
  yes: "Yes",
  no: "No",
  all: "All",
  search: "Search",
  filter: "Filter",
  loading: "Processing...",
  close: "×"
};

// Small missing English keys used in components
englishTexts.noDonations = "No donation records yet";
englishTexts.encouragement = "Start your donation journey today!";
englishTexts.latestDonation = "Most Recent";
englishTexts.healthTip1 = "💧 Drink 8-10 glasses of water daily to stay hydrated";
englishTexts.healthTip2 = "🥗 Eat balanced meals with fruits and vegetables";
englishTexts.healthTip3 = "🏃 Exercise for 30 minutes daily for better circulation";
englishTexts.healthTip4 = "😴 Get 7-8 hours of sleep for proper rest";
englishTexts.healthTip5 = "🚭 Avoid smoking and limit alcohol consumption";
englishTexts.healthTip6 = "🧘 Practice stress management techniques";
englishTexts.healthTip7 = "📱 Take regular breaks from screens";
englishTexts.healthTip8 = "🌞 Get 15 minutes of sunlight for Vitamin D";

// Bangla translations
const banglaTexts = {
  // Navigation
  appName: "DR. BLOOD 24/7",
  appSubtitle: "বাংলাদেশ রক্তদান নেটওয়ার্ক",
  // i can add

  // In your banglaTexts object:
seeMore: "বিস্তারিত দেখুন",
seeLess: "কম দেখুন",
recentDonations: "সম্প্রতি রক্তদান",
noDonationHistory: "রক্তদানের ইতিহাস নেই",

  // Pages
  home: "🏠 হোম",
  findDonors: "🔍 রক্তদাতা খুঁজুন",
  myProfile: "👤 আমার প্রোফাইল",
  becomeDonor: " রক্তদাতা হোন",
  login: "🔑 লগইন",
  logout: "👋 লগআউট",
  
  // Hero Section
  heroTitle: "রক্তদানের মাধ্যমে জীবন বাঁচান <span class='highlight'>রক্তদান</span>",
  heroSubtitle: "বাংলাদেশের সবচেয়ে বিশ্বস্ত <b>রক্তদান প্ল্যাটফর্ম।</b> স্বেচ্ছাসেবী রক্তদাতাদের যাচাইকৃত জাতীয় নেটওয়ার্কের মাধ্যমে প্রয়োজনী রোগীদের সাথে সংযুক্ত করুন।",
  findBloodDonors: "🔍 রক্তদাতা খুঁজুন",
  registerAsDonor: "❤️ রক্তদাতা হিসাবে নিবন্ধন করুন",
  detectMyLocation: " আমার অবস্থান সনাক্ত করুন",
  
  // Stats
  availableDonors: "উপলব্ধ রক্তদাতা",
  partnerLocations: "পার্টনার প্রতিষ্ঠান",
  citiesCovered: "শহর কভার করা হয়েছে",
  livesSaved: "জীবন বাঁচানো হয়েছে",
  
  // Features
  whyTrust: "কেন DR. BLOOD 24/7 বিশ্বাস করবেন?",
  verifiedScreened: "যাচাইকৃত ও স্ক্রিনড",
  verifiedDesc: "প্রতিটি রক্তদাতা চিকিৎসা স্ক্রীনিং এবং ব্যাকগ্রাউন্ড যাচাইকরণের মধ্য দিয়ে যায়। স্বাস্থ্য রেকর্ড নিয়মিত আপডেট করা হয়।",
  smartAvailability: "স্মার্ট উপলব্ধতা",
  smartDesc: "স্বয়ংক্রিয় স্ট্যাটাস আপডেট নিশ্চিত করে যে রক্তদাতারা শুধুমাত্র চিকিৎসাগতভাবে যোগ্য হলে উপলব্ধ থাকে।",
  liveStatus: "লাইভ স্ট্যাটাস আপডেট",
  liveDesc: "রিয়েল-টাইম রক্তদাতা আপডেট এবং আনুমানিক আগমন সময় তাৎক্ষণিকভাবে পান।",
  rapidResponse: "দ্রুত প্রতিক্রিয়া",
  rapidDesc: "জরুরী অনুরোধের জন্য গড় প্রতিক্রিয়া সময় 15 মিনিট। 24/7 সমন্বয় কেন্দ্র।",
  nationwideNetwork: "জাতীয় নেটওয়ার্ক",
  networkDesc: "বাংলাদেশের সমস্ত প্রধান শহরে যাচাইকৃত রক্তদাতা। জরুরী ক্ষেত্রে সরাসরি সমন্বয়।",
  realtimeTracking: "রিয়েল-টাইম ট্র্যাকিং",
  trackingDesc: "লাইভ রক্তদাতার অবস্থান ট্র্যাকিং এবং আনুমানিক আগমন সময়। এসএমএস/ইমেল নোটিফিকেশন।",
  
  // Blood Types
  bloodTypeCompatibility: "রক্তের গ্রুপ সামঞ্জস্যতা",
  compatibilityInfo: "💡 <strong>O-</strong> সব রক্তের গ্রুপে দান করতে পারে |<br /> <strong>| AB+</strong> সব গ্রুপ থেকে গ্রহণ করতে পারে 💡",
  
  // Emergency CTA
  needImmediateAssistance: "তাৎক্ষণিক সহায়তা প্রয়োজন?",
  emergencyDesc: "আমাদের 24/7 সমন্বয় টিম সামঞ্জস্যপূর্ণ রক্তদাতা খুঁজতে আপনাকে দ্রুত সাহায্য করতে প্রস্তুত",
  findDonorsNow: "এখনই রক্তদাতা খুঁজুন",
  
  // Donors Page
  findBloodDonorsTitle: "🔍 রক্তদাতা খুঁজুন",
  findDonorsSubtitle: "বাংলাদেশের প্রধান শহরগুলিতে যাচাইকৃত রক্তদাতাদের সাথে সংযুক্ত হন",
  detectLocation: " আমার অবস্থান সনাক্ত করুন",
  donorAvailability: "রক্তদাতার উপলব্ধতা",
  allDonors: "👥 সব রক্তদাতা",
  availableNow: "✅ এখনই উপলব্ধ",
  recentlyDonated: "⏳ সম্প্রতি রক্ত দিয়েছে",
  searchResults: "খোঁজার ফলাফল:",
  clear: " পরিষ্কার করুন",
  
  // Search System
  findCompatibleDonors: "সামঞ্জস্যপূর্ণ রক্তদাতা খুঁজুন",
  searchDescription: "সুনির্দিষ্ট অনুসন্ধান মানদণ্ড ব্যবহার করে যাচাইকৃত রক্তদাতাদের সাথে সংযুক্ত হন",
  showAdvancedFilters: " উন্নত ফিল্টার দেখান",
  hideAdvancedFilters: " উন্নত ফিল্টার লুকান",
  searchLocation: "অবস্থান অনুসন্ধান করুন",
  enterCityOrArea: "শহর বা এলাকা লিখুন (যেমন: ঢাকা, গুলশান, কুমিল্লা)",
  popularAreas: "জনপ্রিয় এলাকা:",
  availabilityFilter: "উপলব্ধতা ফিল্টার",
  additionalFilters: "অতিরিক্ত ফিল্টার",
  allDonorsFilter: "সব রক্তদাতা",
  emergencyReady: "জরুরী প্রস্তুত",
  verifiedOnly: "শুধুমাত্র যাচাইকৃত",
  recentDonors: "সম্প্রতি রক্তদাতা (গত 3 মাস)",
  nearMyLocation: "আমার অবস্থানের কাছাকাছি",
  availableToday: "আজ উপলব্ধ",
  donorsFound: "রক্তদাতা পাওয়া গেছে",
  clearAllFilters: " সব ফিল্টার পরিষ্কার করুন",
  becomeADonor: " রক্তদাতা হোন",
  
  // Donor Cards
  availableDonorsTitle: "উপলব্ধ রক্তদাতা",
  sortBy: "ক্রমানুসার: উপলব্ধতা",
  sortByRecent: "ক্রমানুসার: সম্প্রতি সক্রিয়",
  sortByCount: "ক্রমানুসার: রক্তদান সংখ্যা",
  sortByRating: "ক্রমানুসার: রেটিং",
  you: "(আপনি)",
  yourProfile: "আপনার প্রোফাইল",
  lastDonationLabel: "শেষ রক্তদান:",
  emergencyAvailable: "জরুরীতে উপলব্ধ",
  contactNow: " এখনই যোগাযোগ করুন",
  currentlyUnavailable: "বর্তমানে উপলব্ধ নয়",
  viewProfile: " প্রোফাইল দেখুন",
  recordDonation: " রক্তদান রেকর্ড করুন",
  

  
  // Profile Page
  yourDonorProfile: "👤 আপনার রক্তদাতা প্রোফাইল",
  profileSubtitle: "আপনার রক্তদাতা তথ্য এবং রক্তদান ইতিহাস পরিচালনা করুন",
  profileTab: "👤 প্রোফাইল",
  donationHistoryTab: "🩸 রক্তদান ইতিহাস",
  availabilityTab: "⏰ উপলব্ধতা",
  totalDonations: "মোট রক্তদান",
  donorRating: "রক্তদাতা রেটিং",
  emergencyReadyProfile: "জরুরী প্রস্তুত",
  personalInformation: "ব্যক্তিগত তথ্য",
  locationAvailability: "অবস্থান ও উপলব্ধতা",
  contactInformation: "যোগাযোগের তথ্য",
  fullName: "পূর্ণ নাম:",
  bloodType: "রক্তের গ্রুপ:",
  gender: "লিঙ্গ:",
  age: "বয়স:",
  weight: "ওজন:",
  height: "উচ্চতা:",
  city: "শহর:",
  area: "এলাকা:",
  availability: "উপলব্ধতা:",
  phone: "ফোন:",
  email: "ইমেইল:",
  yourAchievements: "আপনার অর্জনসমূহ",
  editProfile: "প্রোফাইল সম্পাদনা করুন",
  updateAvailability: "উপলব্ধতা আপডেট করুন",
  
  // Donation Status
  availableForDonation: "রক্তদানের জন্য উপলব্ধ",
  unavailableForDonation: "রক্তদানের জন্য অনুপলব্ধ",
  pendingAvailability: "উপলব্ধতা মুলতুবি",
  youCanDonateNow: "আপনি এখনই রক্ত দান করতে পারেন!",
  availableInDays: "{days} দিনের মধ্যে উপলব্ধ",
  
  // Footer
  footerTitle: "🩸 DR. BLOOD 24/7",
  footerDesc: "বাংলাদেশের সবচেয়ে বিশ্বস্ত রক্তদান নেটওয়ার্ক। সম্প্রদায়ের অংশীদারিত্ব এবং যাচাইকৃত রক্তদাতা সংযোগের মাধ্যমে জীবন বাঁচান।",
  quickLinks: "দ্রুত লিঙ্ক",
  contactInfo: "যোগাযোগের তথ্য",
  emergencyContacts: "জরুরী যোগাযোগ",
  ambulanceService: "🚨 অ্যাম্বুলেন্স সার্ভিস",
  bloodBankInfo: "🩸 ব্লাড ব্যাঙ্ক তথ্য",
  dghsHelpline: "🏭 স্বাস্থ্য অধিদপ্তর হেল্পলাইন",
  copyright: "© ২০২৪ DR. BLOOD 24/7 বাংলাদেশ। ডেভেলপার: সাকিব চৌধুরী সোহান",
  
  // Modals
  registerAsBloodDonor: "❤️ রক্তদাতা হিসাবে নিবন্ধন করুন",
  loginToApp: "🔑 DR. BLOOD 24/7-এ লগইন করুন",
  enterYourPhone: "আপনার ফোন নম্বর লিখুন",
  sendVerificationCode: "যাচাইকরণ কোড পাঠান",
  verificationSent: "আমরা +880 {phone}-এ একটি কোড পাঠিয়েছি",
  enterVerificationCode: "যাচাইকরণ কোড লিখুন",
  resendCode: "কোড পুনরায় পাঠান",
  verifyLogin: "যাচাই করুন ও লগইন করুন",
  changePhoneNumber: "← ফোন নম্বর পরিবর্তন করুন",
  
  // Registration Form
  personalInfo: "ব্যক্তিগত তথ্য",
  medicalInfo: "চিকিৎসা তথ্য ও যোগ্যতা",
  locationPref: "অবস্থান ও রক্তদান পছন্দসমূহ",
  fullNameRequired: "পূর্ণ নাম *",
  emailAddressRequired: "ইমেইল ঠিকানা *",
  phoneNumberRequired: "ফোন নম্বর *",
  emergencyContactLabel: "জরুরী যোগাযোগ",
  bloodGroupRequired: "রক্তের গ্রুপ *",
  genderRequired: "লিঙ্গ *",
  dateOfBirth: "জন্ম তারিখ *",
  weightRequired: "ওজন (কেজি) *",
  heightLabel: "উচ্চতা",
  medicalConditions: "কোনো চিকিৎসা সমস্যা আছে?",
  recentSurgery: "সম্প্রতি সার্জারি (6 মাসের মধ্যে)",
  currentMedications: "বর্তমান ওষুধ",
  travelHistory: "ভ্রমণের ইতিহাস (গত 3 মাস)",
  eligibilityChecklist: "যোগ্যতা চেকলিস্ট",
  atLeast18: "আমার বয়স কমপক্ষে 18 বছর",
  weighAtLeast45: "আমার ওজন কমপক্ষে 45 কেজি",
  goodHealth: "আমি সুস্বাস্থ্যের অধিকারী",
  notDonatedRecently: "আমি গত 3 মাসে রক্ত দেইনি",
  privacyConsent: "গোপনীয়তা ও সম্মতি",
  privacyText: "আপনার তথ্য গোপনীয় রাখা হবে এবং শুধুমাত্র রক্তদানের প্রকৃত প্রয়োজন দেখা দিলে যাচাইকৃত স্বাস্থ্যসেবা প্রতিষ্ঠানের সাথে ভাগ করা হবে। আপনি যে কোনো সময় আপনার উপলব্ধতা আপডেট বা নিবন্ধন বাতিল করতে পারেন।",
  previousStep: "← পূর্ববর্তী",
  nextStep: "পরবর্তী ধাপ →",
  completeRegistration: "🎉 নিবন্ধন সম্পূর্ণ করুন",
  
  // Messages
  registrationSuccessful: "🎉 নিবন্ধন সফল!",
  welcomeMessage: "স্বাগতম {name}!",
  registeredSuccess: "আপনি এখন একজন রক্তদাতা হিসেবে নিবন্ধিত হয়েছেন। আপনার প্রোফাইল এখন প্রয়োজনী রোগীদের কাছে দৃশ্যমান।",
  verificationCodeSent: "📱 যাচাইকরণ কোড {phone}-এ পাঠানো হয়েছে",
  loginSuccessful: "✅ লগইন সফল! DR. BLOOD 24/7-এ স্বাগতম।",
  invalidCode: "❌ ভুল যাচাইকরণ কোড। আবার চেষ্টা করুন।",
  contactDonor: "📞 {name}-এর সাথে যোগাযোগ করছেন",
  donorUnavailable: "❌ {name} বর্তমানে রক্তদানের জন্য অনুপলব্ধ।",
  willBeAvailable: "তারা আবার {days} দিনের মধ্যে উপলব্ধ হবে।",
  donationRecorded: "🎉 রক্তদান সফলভাবে রেকর্ড করা হয়েছে!",
  availableAgain: "আপনি 3 মাস পর আবার উপলব্ধ হবেন।",
  thankYouForSaving: "জীবন বাঁচানোর জন্য ধন্যবাদ!",
  
  // Health Tips
  healthTips: "🩺 স্বাস্থ্য টিপস",
  aiHealthAssistant: "এআই স্বাস্থ্য সহকারী",
  nextTip: "পরবর্তী টিপ →",
  generalWellness: "💡 সাধারণ সুস্থতা পরামর্শ। চিকিৎসাগত সমস্যার জন্য ডাক্তারের সাথে পরামর্শ করুন।",
  
  // Common
  yes: "হ্যাঁ",
  no: "না",
  all: "সব",
  search: "অনুসন্ধান",
  filter: "ফিল্টার",
  loading: "প্রক্রিয়াকরণ...",
  close: "×"
};

// Small missing Bangla keys used in components
banglaTexts.noDonations = "এখানে কোনো রক্তদান রেকর্ড নেই";
banglaTexts.encouragement = "আজই আপনার রক্তদানের যাত্রা শুরু করুন!";
banglaTexts.latestDonation = "সর্বশেষ";
banglaTexts.healthTip1 = "💧 প্রতিদিন ৮-১০ গ্লাস পানি পান করুন";
banglaTexts.healthTip2 = "🥗 ফলমূল ও সবজি সমৃদ্ধ খাবার খান";
banglaTexts.healthTip3 = "🏃 প্রতিদিন ৩০ মিনিট ব্যায়াম করুন";
banglaTexts.healthTip4 = "😴 প্রতিদিন ৭-৮ ঘন্টা ঘুমান";
banglaTexts.healthTip5 = "🚭 ধূমপান এড়িয়ে চলুন, মদ সীমিত করুন";
banglaTexts.healthTip6 = "🧘 চাপ কমানোর উপায় অনুশীলন করুন";
banglaTexts.healthTip7 = "📱 নিয়মিত বিরতি নিন স্ক্রিন থেকে";
banglaTexts.healthTip8 = "🌞 ভিটামিন-ডি পেতে ১৫ মিনিট সানলাইট নিন";

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  
  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en');
  }, [setLanguage]);
  
  const t = useCallback((key, params = {}) => {
    const text = language === 'en' ? englishTexts[key] : banglaTexts[key];
    if (!text) return key;
    
    // Replace parameters in the text
    return Object.keys(params).reduce((result, param) => {
      const value = params[param];
      const placeholder = `{${param}}`;
      const pluralPlaceholder = `{${param}s}`;
      
      // Handle singular/plural
      let finalText = result;
      if (typeof value === 'number' && value !== 1 && result.includes(placeholder)) {
        finalText = finalText.replace(placeholder, value);
      } else {
        finalText = finalText.replace(placeholder, value);
      }
      
      return finalText;
    }, text);
  }, [language]);
  
  const value = { language, toggleLanguage, t };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using translations
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return context;
};

// Constants
const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const CITIES = ['Dhaka', 'Cumilla', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barishal', 'Rangpur'];
const GENDERS = ['Male', 'Female'];
const AVAILABILITY_OPTIONS = ['24/7 Emergency', 'Weekdays', 'Weekends', 'Flexible Schedule', 'On Call'];
const DONATION_STATUS = {
  AVAILABLE: 'available',
  UNAVAILABLE: 'unavailable',
  PENDING: 'pending'
};

// Custom Hooks
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      if (typeof value === 'function') {
        setStoredValue(prev => {
          const v = value(prev);
          try {
            window.localStorage.setItem(key, JSON.stringify(v));
          } catch (err) {
            console.error(`Error writing localStorage key "${key}":`, err);
          }
          return v;
        });
      } else {
        setStoredValue(value);
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
          console.error(`Error writing localStorage key "${key}":`, err);
        }
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue];
};

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

// Utility Functions for Donation Management
const calculateNextAvailableDate = (lastDonationDate) => {
  if (!lastDonationDate || lastDonationDate === 'Never') return null;

  const donationDate = new Date(lastDonationDate);
  if (isNaN(donationDate.getTime())) return null;

  const nextAvailableDate = new Date(donationDate);
  nextAvailableDate.setMonth(nextAvailableDate.getMonth() + 3);
  return nextAvailableDate;
};

const getDonationStatus = (lastDonationDate) => {
  if (!lastDonationDate || lastDonationDate === 'Never') {
    return DONATION_STATUS.AVAILABLE;
  }

  const lastDonation = new Date(lastDonationDate);
  const nextAvailable = calculateNextAvailableDate(lastDonationDate);
  const today = new Date();

  if (!nextAvailable) {
    return DONATION_STATUS.AVAILABLE;
  }

  return today >= nextAvailable ? DONATION_STATUS.AVAILABLE : DONATION_STATUS.UNAVAILABLE;
};

const getDaysUntilAvailable = (lastDonationDate) => {
  if (!lastDonationDate || lastDonationDate === 'Never') return 0;
  
  const nextAvailable = calculateNextAvailableDate(lastDonationDate);
  const today = new Date();
  const diffTime = nextAvailable - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
};

const formatDonationHistory = (history) => {
  if (!history || !Array.isArray(history)) return [];
  return history.map(donation => ({
    ...donation,
    formattedDate: new Date(donation.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  })).sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Components
const Modal = ({ children, isOpen, onClose, className = '' }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const { language } = useTranslation();
  return (
    <button 
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick} 
      {...props}
      dir={language === 'bn' ? 'rtl' : 'ltr'}
    >
      {children}
    </button>
  );
};

// Language Toggle Button Component
const LanguageToggle = () => {
  const { language, toggleLanguage } = useTranslation();
  
  
  return (
    <div className="language-switcher">
      <div className="language-toggle">
        <button className="language-toggle-btn" onClick={toggleLanguage}>
          <span className="language-icon">
            {language === 'en' ? '🇧🇩' : '🇺🇸'}
          </span>
          <span className="language-text">
            {language === 'en' ? 'বাংলা' : 'English'}
          </span>
        </button>
      </div>
    </div>
  );
};

const DoctorAIChatbot = () => {
  const { t, language } = useTranslation();
  // When user clicks the visible "Doctor AI" button, we want to open the ambulance UI.
  // To swap behaviors without refactoring state, dispatch a custom event.
  const handleClick = (e) => {
    // dispatch event to request opening the Doctor AI chat
    window.dispatchEvent(new CustomEvent('open-chat'));
    // also optionally provide haptic feedback via CSS animation (left to styles)
  };

  return (
    <div className="emergency-hotline-fixed">
      <div className="hotline-content" onClick={handleClick} role="button" tabIndex={0}>
        <div className="hotline-icon">👨‍⚕️</div>
        <div className="hotline-info">
          <div className="hotline-title"></div>
          <div className="hotline-number">{language === 'en' ? 'DR. AI Assistant' : 'ডঃ এআই সহকারী '}</div>
        </div>
      </div>
    </div>
  );
};

// ===== DOCTOR AI CHATBOT COMPONENT =====
const EmergencyHotline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [hotlineModalVisible, setHotlineModalVisible] = useState(false);
  const { t, language } = useTranslation();
  
  // Sample medical knowledge base
  const medicalKnowledge = {
    // Blood Donation Questions
    'blood donation eligibility': {
      en: "To donate blood, you must be at least 18 years old, weigh at least 45 kg, be in good health, and not have donated in the last 3 months. Avoid alcohol 24 hours before donation and eat a healthy meal beforehand.",
      bn: "রক্তদান করতে আপনার বয়স কমপক্ষে ১৮ বছর, ওজন কমপক্ষে ৪৫ কেজি, সুস্বাস্থ্যের অধিকারী হতে হবে এবং গত ৩ মাসে রক্ত দেয়া যাবে না। দানের ২৪ ঘন্টা আগে অ্যালকোহল এড়িয়ে চলুন এবং আগে স্বাস্থ্যকর খাবার খান।"
    },
    'blood types compatibility': {
      en: "• O- is universal donor (can donate to all)\n• AB+ is universal receiver (can receive from all)\n• A+ can donate to A+ and AB+\n• A- can donate to A+, A-, AB+, AB-\n• B+ can donate to B+ and AB+\n• B- can donate to B+, B-, AB+, AB-\n• AB- can donate to AB+ and AB-",
      bn: "• O- সর্বজনীন দাতা (সবাইকে দান করতে পারে)\n• AB+ সর্বজনীন গ্রহীতা (সবার কাছ থেকে নিতে পারে)\n• A+ A+ এবং AB+ কে দান করতে পারে\n• A- A+, A-, AB+, AB- কে দান করতে পারে\n• B+ B+ এবং AB+ কে দান করতে পারে\n• B- B+, B-, AB+, AB- কে দান করতে পারে\n• AB- AB+ এবং AB- কে দান করতে পারে"
    },
    'after donation care': {
      en: "After donating blood:\n1. Rest for 10-15 minutes\n2. Drink plenty of fluids (avoid alcohol)\n3. Eat iron-rich foods\n4. Avoid heavy lifting for 5 hours\n5. Keep the bandage on for 4-6 hours\n6. If you feel dizzy, lie down with feet elevated",
      bn: "রক্তদানের পর:\n১. ১০-১৫ মিনিট বিশ্রাম নিন\n২. প্রচুর তরল পান করুন (অ্যালকোহল এড়িয়ে চলুন)\n৩. আয়রন সমৃদ্ধ খাবার খান\n৪. ৫ ঘন্টা ভারী কাজ করা এড়িয়ে চলুন\n৫. ব্যান্ডেজ ৪-৬ ঘন্টা রাখুন\n৬. মাথা ঘুরলে পা উঁচু করে শুয়ে পড়ুন"
    },
    
    // General Health Questions - UPDATED WITH MORE CONDITIONS
    'high blood pressure': {
      en: "High blood pressure (hypertension) management:\n• Reduce salt intake\n• Exercise regularly (30 min/day)\n• Maintain healthy weight\n• Limit alcohol\n• Manage stress\n• Take prescribed medications\nNormal range: 120/80 mmHg\nConsult doctor if above 140/90",
      bn: "উচ্চ রক্তচাপ ব্যবস্থাপনা:\n• লবণ কম খান\n• নিয়মিত ব্যায়াম করুন (৩০ মিনিট/দিন)\n• স্বাস্থ্যকর ওজন বজায় রাখুন\n• অ্যালকোহল সীমিত করুন\n• চাপ নিয়ন্ত্রণ করুন\n• নির্ধারিত ওষুধ গ্রহণ করুন\nসাধারণ মাত্রা: ১২০/৮০ mmHg\n১৪০/৯০ এর বেশি হলে ডাক্তারের সাথে পরামর্শ করুন"
    },
    'diabetes symptoms': {
      en: "Diabetes warning signs:\n• Frequent urination\n• Increased thirst\n• Extreme hunger\n• Unexplained weight loss\n• Fatigue\n• Blurred vision\n• Slow healing wounds\nNormal blood sugar: 70-100 mg/dL (fasting)\nConsult doctor for screening",
      bn: "ডায়াবেটিসের সতর্কতা লক্ষণ:\n• ঘন ঘন প্রস্রাব\n• বেশি তৃষ্ণা\n• অতিরিক্ত ক্ষুধা\n• অকারণে ওজন কমা\n• ক্লান্তি\n• ঝাপসা দৃষ্টি\n• ধীরে সেরে ওঠা ক্ষত\nসাধারণ রক্তে শর্করা: ৭০-১০০ mg/dL (উপোস)\nপরীক্ষার জন্য ডাক্তারের সাথে পরামর্শ করুন"
    },
    'heart attack signs': {
      en: "🚨 HEART ATTACK EMERGENCY SIGNS:\n• Chest pain or discomfort\n• Pain spreading to arms, neck, jaw\n• Shortness of breath\n• Cold sweat\n• Nausea\n• Lightheadedness\n⚠️ CALL EMERGENCY (199/999) IMMEDIATELY\nDon't delay - every minute counts!",
      bn: "🚨 হার্ট অ্যাটাক জরুরী লক্ষণ:\n• বুকে ব্যথা বা অস্বস্তি\n• বাহু, ঘাড়, চোয়ালে ছড়িয়ে পড়া ব্যথা\n• শ্বাসকষ্ট\n• ঠাণ্ডা ঘাম\n• বমি বমি ভাব\n• মাথা ঘোরা\n⚠️ অবিলম্বে জরুরী নম্বরে কল করুন (১৯৯/৯৯৯)\nদেরি করবেন না - প্রতিটি মিনিট গুরুত্বপূর্ণ!"
    },
    
    // Flu and Cold - NEW
    'flu symptoms': {
      en: "Influenza (Flu) Symptoms:\n• Sudden fever (38°C or higher)\n• Dry cough\n• Sore throat\n• Runny or stuffy nose\n• Muscle aches\n• Headache\n• Fatigue\n• Chills\nDuration: Usually 3-7 days\nContagious: 1 day before to 7 days after symptoms",
      bn: "ফ্লু লক্ষণ:\n• হঠাৎ জ্বর (৩৮°C বা তার বেশি)\n• শুকনো কাশি\n• গলা ব্যথা\n• সর্দি বা নাক বন্ধ\n• পেশী ব্যথা\n• মাথাব্যথা\n• ক্লান্তি\n• ঠাণ্ডা লাগা\nস্থায়িত্ব: সাধারণত ৩-৭ দিন\nসংক্রামক: লক্ষণ দেখা দেওয়ার ১ দিন আগে থেকে ৭ দিন পরে পর্যন্ত"
    },
    'cold symptoms': {
      en: "Common Cold Symptoms:\n• Runny or stuffy nose\n• Sneezing\n• Sore throat\n• Mild cough\n• Mild headache\n• Mild body aches\n• Low-grade fever (rare)\nDuration: 7-10 days\nUsually milder than flu",
      bn: "সাধারণ সর্দি লক্ষণ:\n• সর্দি বা নাক বন্ধ\n• হাঁচি\n• গলা ব্যথা\n• হালকা কাশি\n• হালকা মাথাব্যথা\n• হালকা শরীর ব্যথা\n• কম মাত্রার জ্বর (বিরল)\nস্থায়িত্ব: ৭-১০ দিন\nসাধারণত ফ্লুর চেয়ে হালকা"
    },
    'flu treatment': {
      en: "Flu Treatment & Care:\n• Rest and stay hydrated\n• Use over-the-counter fever reducers (acetaminophen/ibuprofen)\n• Gargle with warm salt water for sore throat\n• Use humidifier for cough\n• Antiviral medications if prescribed (within 48 hours)\n• Stay home to avoid spreading\n• Seek medical help if: difficulty breathing, chest pain, severe weakness",
      bn: "ফ্লু চিকিৎসা ও যত্ন:\n• বিশ্রাম নিন এবং হাইড্রেটেড থাকুন\n• ওভার-দ্য-কাউন্টার জ্বর কমানোর ওষুধ ব্যবহার করুন\n• গলা ব্যথার জন্য গরম লবণ পানি দিয়ে গার্গল করুন\n• কাশির জন্য হিউমিডিফায়ার ব্যবহার করুন\n• নির্ধারিত হলে অ্যান্টিভাইরাল ওষুধ (৪৮ ঘন্টার মধ্যে)\n• ছড়ানো এড়াতে বাড়িতে থাকুন\n• চিকিৎসা সাহায্য নিন যদি: শ্বাসকষ্ট হয়, বুকে ব্যথা হয়, তীব্র দুর্বলতা"
    },







    'ear pain treatment': {
      en: "Ear Pain Care:\n• Apply warm compress\n• Avoid inserting objects into ear\n• Use ear drops only if prescribed\n• Keep ear dry\n• Seek medical help if fever or discharge occurs",
      bn: "কান ব্যথার চিকিৎসা:\n• গরম প্যাক ব্যবহার করুন\n• কানে কিছু ঢোকাবেন না\n• ডাক্তারের পরামর্শে ড্রপ ব্যবহার করুন\n• কান শুকনো রাখুন\n• জ্বর বা পুঁজ হলে ডাক্তার দেখান"
    },

    'acidity treatment': {
      en: "Acidity Relief:\n• Drink warm water\n• Avoid spicy and oily foods\n• Take antacids\n• Eat small, frequent meals\n• Do not lie down immediately after eating\n• Seek help if chest pain persists",
      bn: "গ্যাস-অ্যাসিডিটির চিকিৎসা:\n• গরম পানি পান করুন\n• ঝাল ও তেলযুক্ত খাবার এড়িয়ে চলুন\n• অ্যান্টাসিড নিন\n• অল্প অল্প করে বারবার খান\n• খাওয়ার পর সাথে সাথে শুয়ে পড়বেন না\n• বুকে ব্যথা থাকলে ডাক্তার দেখান"
    },

    'allergy treatment': {
      en: "Allergy Relief:\n• Take antihistamines\n• Avoid contact with allergens\n• Keep windows closed during high pollen times\n• Shower after outdoor exposure\n• Seek urgent help if breathing difficulty occurs",
      bn: "অ্যালার্জি থেকে মুক্তি:\n• অ্যান্টিহিস্টামিন ওষুধ নিন\n• অ্যালার্জি সৃষ্টিকারী জিনিস এড়িয়ে চলুন\n• পরাগ বেশি হলে জানালা বন্ধ রাখুন\n• বাইরে থেকে এসে গোসল করুন\n• শ্বাসকষ্ট হলে জরুরি চিকিৎসা নিন"
    },

    'skin rash treatment': {
      en: "Skin Rash Care:\n• Keep area clean and dry\n• Use calamine lotion\n• Avoid scratching\n• Use mild soap only\n• Apply cold compress for itching\n• Seek help if rash spreads quickly",
      bn: "ত্বকের র‍্যাশ চিকিৎসা:\n• জায়গাটি পরিষ্কার ও শুকনো রাখুন\n• ক্যালামাইন লোশন লাগান\n• চুলকানো থেকে বিরত থাকুন\n• শুধুমাত্র মাইল্ড সাবান ব্যবহার করুন\n• চুলকানি কমাতে ঠান্ডা প্যাক দিন\n• র‍্যাশ দ্রুত ছড়ালে ডাক্তার দেখান"
    },

      'food treatment': {
        en: "Food Poisoning Treatment:\n• Drink ORS or electrolyte fluids frequently\n• Avoid solid foods for a few hours\n• Eat bland foods: rice, banana, toast, boiled potatoes\n• Avoid dairy, spicy, oily, and street foods\n• Take probiotics if available\n• Rest and stay hydrated\n• Seek medical help if: blood in stool, high fever, severe dehydration, or vomiting lasts more than 24 hours",
        bn: "ফুড পয়জনিং চিকিৎসা:\n• ঘন ঘন ওআরএস বা ইলেকট্রোলাইট পান করুন\n• কিছু সময় শক্ত খাবার এড়িয়ে চলুন\n• হালকা খাবার খান: ভাত, কলা, টোস্ট, সেদ্ধ আলু\n• দুগ্ধজাত, ঝাল, তেলযুক্ত এবং বাইরের খাবার এড়িয়ে চলুন\n• প্রয়োজনে প্রোবায়োটিক নিন\n• বিশ্রাম নিন এবং হাইড্রেটেড থাকুন\n• চিকিৎসা নিন যদি: পায়খানায় রক্ত আসে, জ্বর বেশি হয়, পানিশূন্যতা দেখা দেয়, বা বমি ২৪ ঘণ্টার বেশি স্থায়ী হয়"
      },

      'chest pain ': {
        en: "Chest Pain Guidance:\n• Stop all activity and sit or lie down calmly\n• Take slow deep breaths\n• If chest pain is from acidity, antacids may help\n• Avoid heavy meals and caffeine temporarily\n• If pain radiates to arm, jaw, or back — seek emergency help\n• Call emergency services if chest pain lasts more than 5 minutes\n• Seek urgent medical care for: shortness of breath, sweating, nausea, dizziness, or feeling faint",
        bn: "বুকে ব্যথার নির্দেশনা:\n• সব কাজ বন্ধ করে শান্তভাবে বসুন বা শুয়ে পড়ুন\n• ধীরে ধীরে গভীর শ্বাস নিন\n• অ্যাসিডিটির কারণে হলে অ্যান্টাসিড উপকার দিতে পারে\n• ভারী খাবার ও ক্যাফেইন কিছু সময় এড়িয়ে চলুন\n• ব্যথা যদি হাত, চোয়াল বা পিঠে ছড়ায় — জরুরি মেডিকেল সাহায্য নিন\n• বুকে ব্যথা ৫ মিনিটের বেশি স্থায়ী হলে সাথে সাথে সাহায্য নিন\n• জরুরি সাহায্য প্রয়োজন যদি: শ্বাসকষ্ট, অতিরিক্ত ঘাম, বমি ভাব, মাথা ঘোরা বা অজ্ঞান হয়ে যাওয়ার অনুভূতি থাকে"
      },



      'low blood pressure': {
        en: "Low Blood Pressure Care:\n• Sit or lie down immediately to prevent fainting\n• Drink water or oral rehydration solution (ORS)\n• Eat a salty snack if allowed\n• Raise legs slightly above heart level\n• Avoid sudden standing or fast movements\n• Eat small, frequent meals\n• Seek medical help if symptoms persist: dizziness, weakness, blurred vision, cold skin, or fainting",
        bn: "লো ব্লাড প্রেসারের চিকিৎসা:\n• মাথা ঘোরা লাগলে সাথে সাথে বসুন বা শুয়ে পড়ুন\n• পানি বা ওআরএস পান করুন\n• অনুমতি থাকলে সামান্য লবণযুক্ত খাবার খান\n• পা হৃদয়ের চেয়ে একটু উঁচু করে রাখুন\n• হঠাৎ দাঁড়ানো বা দ্রুত নড়াচড়া এড়িয়ে চলুন\n• অল্প অল্প করে বারবার খান\n• উপসর্গ চলতে থাকলে ডাক্তার দেখান: মাথা ঘোরা, দুর্বল লাগা, ঝাপসা দেখা, ঠান্ডা ত্বক, অজ্ঞান হয়ে যাওয়া"
      },

      'sohan': {
        en: "His full name is Sakib Chowdhury Sohan. He is a good boy and also the main developer of this website.",
        bn: "তার পুরো নাম সাকিব চৌধুরী সোহান। তিনি একজন ভালো মানুষ এবং এই ওয়েবসাইটের প্রধান ডেভেলপার।"
      },

      'kidney pain': {
        en: "Kidney Pain Care:\n• Drink plenty of water unless restricted by doctor\n• Use a warm compress on lower back\n• Avoid heavy lifting and intense exercise\n• Avoid salty and processed foods\n• Take OTC pain relievers (acetaminophen) if needed\n• Seek medical help if pain is severe, comes with fever, burning urination, blood in urine, or nausea—could be infection or kidney stones",
        bn: "কিডনি ব্যথার যত্ন:\n• ডাক্তারের নিষেধ না থাকলে প্রচুর পানি পান করুন\n• কোমরের নিচে গরম প্যাক ব্যবহার করুন\n• ভারী জিনিস তোলা ও কঠিন ব্যায়াম এড়িয়ে চলুন\n• লবণ ও প্রসেসড খাবার কম খান\n• প্রয়োজনে প্যারাসিটামল জাতীয় ব্যথানাশক নিন\n• তীব্র ব্যথা, জ্বর, প্রস্রাবে জ্বালা, রক্ত দেখা বা বমি ভাব থাকলে দ্রুত ডাক্তার দেখান—এগুলো সংক্রমণ বা কিডনিতে পাথরের লক্ষণ হতে পারে"
      },

      'liver pain': {
        en: "Liver Pain Care:\n• Avoid alcohol completely\n• Eat light and low-fat foods\n• Drink plenty of water\n• Avoid painkillers like acetaminophen in high doses (can harm liver)\n• Rest and avoid heavy meals\n• Seek medical help if pain is sharp, persistent, or comes with jaundice, nausea, fever, or dark urine—could indicate hepatitis or liver disease",
        bn: "লিভার ব্যথার চিকিৎসা:\n• সম্পূর্ণভাবে অ্যালকোহল এড়িয়ে চলুন\n• হালকা ও কম চর্বিযুক্ত খাবার খান\n• প্রচুর পানি পান করুন\n• প্যারাসিটামলসহ অনেক ব্যথানাশক বেশি নিলে লিভারের ক্ষতি হতে পারে—সতর্ক থাকুন\n• বিশ্রাম নিন এবং ভারী খাবার এড়িয়ে চলুন\n• ব্যথা তীব্র বা দীর্ঘস্থায়ী হলে, অথবা জন্ডিস, বমি ভাব, জ্বর, গাঢ় প্রস্রাব দেখা দিলে দ্রুত ডাক্তার দেখান—এগুলো হেপাটাইটিস বা লিভারের রোগের লক্ষণ হতে পারে"
      },



      'blood info': {
        en: "Whole Blood:\n• Contains red blood cells, white blood cells, platelets, and plasma\n• Used for major blood loss, trauma, surgery, and severe anemia\n• Increases oxygen supply and blood volume\n• Donated every 56 days (standard blood donation)\n• Stored for about 35–42 days",
        bn: "হোল ব্লাড:\n• এতে থাকে লোহিত কণিকা, শ্বেত কণিকা, প্লাটিলেট এবং প্লাজমা\n• বড় ধরনের রক্তক্ষরণ, দুর্ঘটনা, অস্ত্রোপচার ও তীব্র অ্যানিমিয়াতে ব্যবহার হয়\n• শরীরে অক্সিজেন সরবরাহ ও রক্তের পরিমাণ বাড়ায়\n• প্রতি ৫৬ দিনে একবার রক্ত দান করা যায়\n• প্রায় ৩৫–৪২ দিন সংরক্ষণ করা যায়"
      },

      'platelet info': {
        en: "Platelets:\n• Help stop bleeding and clot the blood\n• Used for dengue, cancer patients, bone marrow diseases, severe bleeding\n• Very short shelf life: only 5–7 days\n• Can be donated every 7 days (up to 24 times a year)\n• One donation can save multiple lives",
        bn: "প্লাটিলেট:\n• রক্ত জমাট বাঁধতে এবং রক্তপাত বন্ধ করতে সাহায্য করে\n• ডেঙ্গু, ক্যান্সার রোগী, বোন ম্যারো রোগ, তীব্র রক্তক্ষরণে ব্যবহৃত হয়\n• খুব কম সময় সংরক্ষণযোগ্য: মাত্র ৫–৭ দিন\n• প্রতি ৭ দিনে একবার প্লাটিলেট দান করা যায় (বছরে সর্বোচ্চ ২৪ বার)\n• একটি দানেই একাধিক মানুষের জীবন বাঁচতে পারে"
      },

      'plasma info': {
        en: "Plasma:\n• Liquid part of blood containing water, proteins, hormones, and nutrients\n• Used for burn victims, liver diseases, clotting disorders, and shock\n• Can help restore blood volume and vital proteins\n• Shelf life: up to 1 year when frozen\n• Contains essential clotting factors",
        bn: "প্লাজমা:\n• রক্তের তরল অংশ, যাতে থাকে পানি, প্রোটিন, হরমোন এবং পুষ্টি\n• পোড়া রোগী, লিভারের রোগ, রক্ত জমাট সমস্যা ও শকে ব্যবহৃত হয়\n• রক্তের পরিমাণ ও গুরুত্বপূর্ণ প্রোটিন পুনরুদ্ধারে সহায়ক\n• ফ্রিজে জমা করলে প্রায় ১ বছর সংরক্ষণ করা যায়\n• এতে গুরুত্বপূর্ণ ক্লটিং ফ্যাক্টর থাকে"
      },

      'rbc': {
        en: "RBC (Red Blood Cells):\n• Carry oxygen from lungs to the whole body\n• Contain hemoglobin which gives blood its red color\n• Low RBC causes anemia: fatigue, weakness, dizziness\n• High RBC may indicate dehydration or lung disease\n• Normal range (adult): Male: 4.7–6.1 million/µL, Female: 4.2–5.4 million/µL",
        bn: "আরবিসি (লোহিত রক্তকণিকা):\n• ফুসফুস থেকে শরীরের সব অংশে অক্সিজেন পৌঁছে দেয়\n• হিমোগ্লোবিন থাকে যা রক্তকে লাল রঙ দেয়\n• কম আরবিসি হলে অ্যানিমিয়া হয়: ক্লান্তি, দুর্বলতা, মাথা ঘোরা\n• বেশি আরবিসি হলে ডিহাইড্রেশন বা ফুসফুসের রোগের লক্ষণ হতে পারে\n• স্বাভাবিক মাত্রা (প্রাপ্তবয়স্ক): পুরুষ: ৪.৭–৬.১ মিলিয়ন/µL, নারী: ৪.২–৫.৪ মিলিয়ন/µL"
      },


      'cbc info': {
        en: "CBC (Complete Blood Count):\n• A common blood test that checks overall health\n• Measures: RBC, WBC, Hemoglobin, Hematocrit, Platelets\n• Helps detect infection, anemia, inflammation, blood disorders\n• Often done during routine checkups\n• Quick and safe test with no major risks",
        bn: "সিবিসি (কমপ্লিট ব্লাড কাউন্ট):\n• একটি সাধারণ রক্ত পরীক্ষা যা শরীরের সামগ্রিক স্বাস্থ্য পরীক্ষা করে\n• যা মাপা হয়: আরবিসি, ডব্লিউবিসি, হিমোগ্লোবিন, হেমাটোক্রিট, প্লাটিলেট\n• সংক্রমণ, অ্যানিমিয়া, প্রদাহ, রক্তের রোগ শনাক্ত করতে সহায়ক\n• নিয়মিত স্বাস্থ্য পরীক্ষায় সাধারণত করা হয়\n• দ্রুত এবং নিরাপদ পরীক্ষা, বড় কোনো ঝুঁকি নেই"
      },


      'hemoglobin info': {
        en: "Hemoglobin (Hb):\n• Protein in red blood cells that carries oxygen\n• Normal range: Men 13.8–17.2 g/dL, Women 12.1–15.1 g/dL\n• Low Hb causes anemia: fatigue, dizziness, pale skin\n• High Hb may indicate dehydration, lung disease, or polycythemia\n• Measured in CBC test",
        bn: "হিমোগ্লোবিন (Hb):\n• লোহিত রক্তকণিকায় থাকা প্রোটিন যা শরীরে অক্সিজেন পৌঁছে দেয়\n• স্বাভাবিক মাত্রা: পুরুষ ১৩.৮–১৭.২ গ্রাম/ডিএল, নারী ১২.১–১৫.১ গ্রাম/ডিএল\n• কম Hb হলে অ্যানিমিয়া হয়: ক্লান্তি, মাথা ঘোরা, ফ্যাকাশে ত্বক\n• বেশি Hb হলে ডিহাইড্রেশন, ফুসফুসের রোগ, বা পলিসাইথেমিয়া হতে পারে\n• CBC পরীক্ষায় মাপা হয়"
      },

      'dehydration': {
        en: "Dehydration:\n• Occurs when the body loses more fluids than it takes in\n• Common causes: diarrhea, vomiting, excessive sweating, fever\n• Symptoms: dry mouth, thirst, dark urine, dizziness, fatigue\n• Prevent by drinking plenty of water and fluids\n• Severe dehydration requires medical attention",
        bn: "ডিহাইড্রেশন:\n• যখন শরীর নেওয়ার চেয়ে বেশি পানি/তরল হারায়\n• সাধারণ কারণ: ডায়রিয়া, বমি, অতিরিক্ত ঘাম, জ্বর\n• উপসর্গ: মুখ শুকানো, তৃষ্ণা, গাঢ় প্রস্রাব, মাথা ঘোরা, ক্লান্তি\n• প্রচুর পানি ও তরল পান করে প্রতিরোধ করা যায়\n• তীব্র ডিহাইড্রেশন হলে চিকিৎসা প্রয়োজন"
      },










    'cold treatment': {
      en: "Cold Treatment & Relief:\n• Drink plenty of fluids\n• Rest as much as possible\n• Use saline nasal spray for congestion\n• Honey for cough (not for children under 1)\n• Chicken soup can help\n• Over-the-counter cold medicines\n• Vitamin C may reduce duration\n• Steam inhalation for congestion",
      bn: "সর্দি চিকিৎসা ও উপশম:\n• প্রচুর তরল পান করুন\n• যথাসম্ভব বিশ্রাম নিন\n• কনজেশন জন্য স্যালাইন নাক স্প্রে ব্যবহার করুন\n• কাশির জন্য মধু (১ বছরের কম বয়সী শিশুদের জন্য নয়)\n• চিকেন স্যুপ সাহায্য করতে পারে\n• ওভার-দ্য-কাউন্টার সর্দির ওষুধ\n• ভিটামিন সি সময় কমাতে পারে\n• কনজেশন জন্য স্টিম ইনহেলেশন"
    },
    
    // COVID-19 Information
    'covid': {
      en: "COVID-19 Symptoms:\n• Fever or chills\n• Cough\n• Shortness of breath\n• Fatigue\n• Muscle aches\n• Loss of taste/smell\n• Sore throat\n• Headache\nIsolation: Minimum 5 days from symptom onset\nVaccination highly recommended",
      bn: "COVID-19 লক্ষণ:\n• জ্বর বা ঠাণ্ডা লাগা\n• কাশি\n• শ্বাসকষ্ট\n• ক্লান্তি\n• পেশী ব্যথা\n• স্বাদ/গন্ধ হারানো\n• গলা ব্যথা\n• মাথাব্যথা\nবিচ্ছিন্নতা: লক্ষণ শুরুর কমপক্ষে ৫ দিন\nটিকাদান অত্যন্ত সুপারিশকৃত"
    },
    'covid prevention': {
      en: "COVID-19 Prevention:\n• Get vaccinated and boosted\n• Wear masks in crowded places\n• Wash hands frequently\n• Maintain social distance\n• Avoid poorly ventilated spaces\n• Stay home when sick\n• Get tested if symptomatic",
      bn: "COVID-19 প্রতিরোধ:\n• টিকা নিন এবং বুস্টার নিন\n• ভিড়ের জায়গায় মাস্ক পরুন\n• ঘন ঘন হাত ধৌত করুন\n• সামাজিক দূরত্ব বজায় রাখুন\n• দুর্বল বায়ুচলাচলযুক্ত স্থান এড়িয়ে চলুন\n• অসুস্থ হলে বাড়িতে থাকুন\n• লক্ষণ থাকলে পরীক্ষা করুন"
    },
    
    // Nutrition Advice
    'healthy diet': {
      en: "Healthy Diet Guidelines:\n• Eat variety of fruits & vegetables\n• Choose whole grains over refined\n• Include lean protein sources\n• Limit saturated and trans fats\n• Reduce sugar and salt intake\n• Stay hydrated (8 glasses water/day)\n• Practice portion control",
      bn: "স্বাস্থ্যকর খাদ্য নির্দেশিকা:\n• বিভিন্ন ধরনের ফল ও শাকসবজি খান\n• পরিশোধিতের চেয়ে সম্পূর্ণ শস্য চয়ন করুন\n• চর্বিবিহীন প্রোটিন উৎস অন্তর্ভুক্ত করুন\n• স্যাচুরেটেড এবং ট্রান্স ফ্যাট সীমিত করুন\n• চিনি এবং লবণ গ্রহণ কমান\n• হাইড্রেটেড থাকুন (৮ গ্লাস পানি/দিন)\n• অংশ নিয়ন্ত্রণ অনুশীলন করুন"
    },
    'iron rich foods': {
      en: "Iron-Rich Foods for Blood Health:\n• Red meat, poultry, fish\n• Lentils and beans\n• Spinach and leafy greens\n• Fortified cereals\n• Tofu\n• Pumpkin seeds\n• Dried fruits (apricots, raisins)\n• Pair with Vitamin C for better absorption",
      bn: "রক্ত স্বাস্থ্যের জন্য আয়রন সমৃদ্ধ খাবার:\n• লাল মাংস, পোল্ট্রি, মাছ\n• ডাল এবং শিম\n• পালং শাক এবং পাতাযুক্ত সবুজ শাক\n• শক্তিশালী সিরিয়াল\n• টফু\n• কুমড়ার বীজ\n• শুকনো ফল (খুবানি, কিসমিস)\n• ভাল শোষণের জন্য ভিটামিন সি এর সাথে যুক্ত করুন"
    },
    
    // Exercise & Fitness
    'exercise routine': {
      en: "Recommended Exercise Routine:\n• 150 minutes moderate aerobic activity/week\nOR 75 minutes vigorous activity/week\n• Strength training 2x/week\n• Include flexibility exercises\n• Stay active throughout day\n• Start slowly if new to exercise\n• Listen to your body",
      bn: "প্রস্তাবিত ব্যায়াম রুটিন:\n• সপ্তাহে ১৫০ মিনিট মাঝারি এয়ারোবিক কার্যকলাপ\nঅথবা সপ্তাহে ৭৫ মিনিট জোরালো কার্যকলাপ\n• সপ্তাহে ২ বার শক্তি প্রশিক্ষণ\n• নমনীয়তা ব্যায়াম অন্তর্ভুক্ত করুন\n• সারাদিন সক্রিয় থাকুন\n• ব্যায়ামে নতুন হলে ধীরে শুরু করুন\n• আপনার শরীরের কথা শুনুন"
    },
    
    // Mental Health
    'stress management': {
      en: "Stress Management Techniques:\n• Practice deep breathing\n• Regular exercise\n• Adequate sleep (7-9 hours)\n• Mindfulness meditation\n• Time management\n• Social connection\n• Professional help if needed\n• Limit news consumption",
      bn: "চাপ ব্যবস্থাপনা কৌশল:\n• গভীর শ্বাস-প্রশ্বাসের অনুশীলন করুন\n• নিয়মিত ব্যায়াম\n• পর্যাপ্ত ঘুম (৭-৯ ঘন্টা)\n• মননশীলতা ধ্যান\n• সময় ব্যবস্থাপনা\n• সামাজিক সংযোগ\n• প্রয়োজনে পেশাদার সাহায্য\n• খবর গ্রহণ সীমিত করুন"
    },
    
    // Emergency Procedures
    'first aid bleeding': {
      en: "🚨 FIRST AID FOR SEVERE BLEEDING:\n1. Call emergency (199/999) immediately\n2. Apply direct pressure with clean cloth\n3. Elevate injured area if possible\n4. Don't remove soaked dressings - add more\n5. Keep victim calm and lying down\n6. Monitor for shock (pale, cold, sweaty)\nDo NOT use tourniquet unless trained",
      bn: "🚨 তীব্র রক্তপাতের জন্য প্রাথমিক চিকিৎসা:\n১. অবিলম্বে জরুরী নম্বরে কল করুন (১৯৯/৯৯৯)\n২. পরিষ্কার কাপড় দিয়ে সরাসরি চাপ দিন\n৩. সম্ভব হলে আহত স্থান উঁচু করুন\n৪. ভেজা ব্যান্ডেজ সরাবেন না - আরো যোগ করুন\n৫. আহতকে শান্ত রাখুন এবং শুয়ে রাখুন\n৬. শকের জন্য পর্যবেক্ষণ করুন (ফ্যাকাসে, ঠাণ্ডা, ঘামা)\nপ্রশিক্ষণ ছাড়া টর্নিকেট ব্যবহার করবেন না"
    },
    
    // More Common Conditions - NEW
    'headache treatment': {
      en: "Headache Relief:\n• Rest in quiet, dark room\n• Apply cold compress to forehead\n• Drink plenty of water\n• Over-the-counter pain relievers\n• Gentle neck stretches\n• Avoid triggers (stress, certain foods)\n• Caffeine in moderation may help\nSeek medical help if: sudden severe headache, headache with fever/stiff neck",
      bn: "মাথাব্যথা উপশম:\n• শান্ত, অন্ধকার ঘরে বিশ্রাম নিন\n• কপালে ঠাণ্ডা কমপ্রেস প্রয়োগ করুন\n• প্রচুর পানি পান করুন\n• ওভার-দ্য-কাউন্টার ব্যথানাশক\n• মৃদু ঘাড় স্ট্রেচ\n• ট্রিগার এড়িয়ে চলুন (চাপ, নির্দিষ্ট খাবার)\n• মাঝারি ক্যাফেইন সাহায্য করতে পারে\nচিকিৎসা সাহায্য নিন যদি: হঠাৎ তীব্র মাথাব্যথা, জ্বর/ঘাড় শক্ত হয়ে যাওয়া"
    },
    'stomach pain': {
      en: "Stomach Pain Management:\n• BRAT diet: Bananas, Rice, Applesauce, Toast\n• Drink clear fluids\n• Avoid spicy, fatty foods\n• Ginger tea for nausea\n• Peppermint may help cramps\n• Apply warm compress\n• Rest\nSeek medical help if: severe pain, vomiting blood, black stools, fever >38°C",
      bn: "পেট ব্যথা ব্যবস্থাপনা:\n• BRAT ডায়েট: কলা, ভাত, আপেলসস, টোস্ট\n• পরিষ্কার তরল পান করুন\n• ঝাল, চর্বিযুক্ত খাবার এড়িয়ে চলুন\n• বমি বমি ভাবের জন্য আদা চা\n• ক্র্যাম্পের জন্য পুদিনা সাহায্য করতে পারে\n• গরম কমপ্রেস প্রয়োগ করুন\n• বিশ্রাম\nচিকিৎসা সাহায্য নিন যদি: তীব্র ব্যথা, রক্তবমি, কালো মল, ৩৮°C এর বেশি জ্বর"
    },
    'allergy symptoms': {
      en: "Allergy Symptoms:\n• Sneezing\n• Runny or stuffy nose\n• Itchy/watery eyes\n• Skin rashes or hives\n• Itchy throat\n• Cough\n• Wheezing in some cases\nManagement:\n• Avoid allergens\n• Antihistamines\n• Nasal corticosteroids\n• Allergy shots if severe\n• Keep windows closed during high pollen",
      bn: "অ্যালার্জি লক্ষণ:\n• হাঁচি\n• সর্দি বা নাক বন্ধ\n• চুলকানি/পানিযুক্ত চোখ\n• ত্বকের ফুসকুড়ি বা আমবাত\n• গলা চুলকানি\n• কাশি\n• কিছু ক্ষেত্রে হুইজিং\nব্যবস্থাপনা:\n• অ্যালার্জেন এড়িয়ে চলুন\n• অ্যান্টিহিস্টামাইন\n• নাকের কর্টিকোস্টেরয়েড\n• গুরুতর হলে অ্যালার্জি শট\n• উচ্চ পরাগের সময় জানালা বন্ধ রাখুন"
    },
    'back pain relief': {
      en: "Back Pain Relief:\n• Rest but avoid prolonged bed rest\n• Apply ice first 48 hours, then heat\n• Gentle stretching\n• Over-the-counter pain relievers\n• Maintain good posture\n• Sleep on firm mattress\n• Light walking as tolerated\nSeek medical help if: leg weakness, numbness, bowel/bladder issues, pain after injury",
      bn: "পিঠ ব্যথা উপশম:\n• বিশ্রাম কিন্তু দীর্ঘস্থায়ী বিছানা বিশ্রাম এড়িয়ে চলুন\n• প্রথম ৪৮ ঘন্টা বরফ, তারপর তাপ প্রয়োগ করুন\n• মৃদু স্ট্রেচিং\n• ওভার-দ্য-কাউন্টার ব্যথানাশক\n• ভাল ভঙ্গি বজায় রাখুন\n• শক্ত গদিতে ঘুমান\n• সহনীয় হলে হালকা হাঁটা\nচিকিৎসা সাহায্য নিন যদি: পায়ে দুর্বলতা, অসাড়তা, মলত্যাগ/মূত্রত্যাগ সমস্যা, আঘাতের পর ব্যথা"
    },
    
    // Fever - NEW
    'fever treatment': {
      en: "Fever Management:\n• Rest and stay hydrated\n• Light clothing, avoid heavy blankets\n• Lukewarm sponge bath\n• Over-the-counter fever reducers\n• Monitor temperature every 4 hours\n• Cool compress on forehead\nWhen to seek help:\n• Fever >39.4°C (103°F)\n• Lasting >3 days\n• With stiff neck, rash, severe headache\n• In infants <3 months with any fever",
      bn: "জ্বর ব্যবস্থাপনা:\n• বিশ্রাম এবং হাইড্রেটেড থাকুন\n• হালকা পোশাক, ভারী কম্বল এড়িয়ে চলুন\n• কুসুম গরম স্পঞ্জ স্নান\n• ওভার-দ্য-কাউন্টার জ্বর কমানোর ওষুধ\n• প্রতি ৪ ঘন্টায় তাপমাত্রা পর্যবেক্ষণ করুন\n• কপালে ঠাণ্ডা কমপ্রেস\nকখন সাহায্য নিবেন:\n• জ্বর >৩৯.৪°C (১০৩°F)\n• ৩ দিনের বেশি স্থায়ী\n• ঘাড় শক্ত, ফুসকুড়ি, তীব্র মাথাব্যথা সহ\n• ৩ মাসের কম বয়সী শিশুদের যেকোনো জ্বরে"
    },
    
    // Asthma - NEW
    'asthma attack': {
      en: "🚨 ASTHMA ATTACK EMERGENCY:\nSigns:\n• Severe wheezing\n• Rapid breathing\n• Difficulty speaking\n• Blue lips/fingernails\n• Chest tightness\nImmediate Actions:\n1. Use rescue inhaler as prescribed\n2. Sit upright\n3. Try to stay calm\n4. Call emergency if:\n   - No improvement after inhaler\n   - Symptoms worsen\n   - Can't speak in full sentences\n   - Lips turning blue",
      bn: "🚨 অ্যাজমা অ্যাটাক জরুরী:\nলক্ষণ:\n• তীব্র হুইজিং\n• দ্রুত শ্বাস-প্রশ্বাস\n• কথা বলতে সমস্যা\n• নীল ঠোঁট/নখ\n• বুকে চাপ\nতাত্ক্ষণিক কাজ:\n১. নির্ধারিত রেসকিউ ইনহেলার ব্যবহার করুন\n২. সোজা হয়ে বসুন\n৩. শান্ত থাকার চেষ্টা করুন\n৪. জরুরী নম্বরে কল করুন যদি:\n   - ইনহেলার ব্যবহারের পর উন্নতি না হয়\n   - লক্ষণ খারাপ হয়\n   - সম্পূর্ণ বাক্য বলতে না পারেন\n   - ঠোঁট নীল হতে শুরু করে"
    },
    
    // Default responses
    'default': {
      en: "I'm Dr. AI, your virtual medical assistant. I can help with:\n• Blood donation information\n• General health questions\n• Emergency guidance\n• COVID-19 information\n• Nutrition advice\n• Exercise recommendations\n• Flu and cold symptoms\n• Headache, stomach pain, allergies\n• Fever management\n\nPlease ask specific questions for detailed advice. Remember, I provide general information only - always consult a real doctor for medical concerns.",
      bn: "আমি ডাঃ এআই, আপনার ভার্চুয়াল মেডিকেল সহকারী। আমি সাহায্য করতে পারি:\n• রক্তদান তথ্য\n• সাধারণ স্বাস্থ্য প্রশ্ন\n• জরুরী নির্দেশিকা\n• COVID-19 তথ্য\n• পুষ্টি পরামর্শ\n• ব্যায়াম সুপারিশ\n• ফ্লু এবং সর্দি লক্ষণ\n• মাথাব্যথা, পেট ব্যথা, অ্যালার্জি\n• জ্বর ব্যবস্থাপনা\n\nবিশদ পরামর্শের জন্য নির্দিষ্ট প্রশ্ন জিজ্ঞাসা করুন। মনে রাখবেন, আমি শুধুমাত্র সাধারণ তথ্য প্রদান করি - চিকিৎসাগত উদ্বেগের জন্য সর্বদা একজন প্রকৃত ডাক্তারের সাথে পরামর্শ করুন।"
    },
    'greeting': {
      en: "Hello! 👋 I'm Dr. AI, your virtual medical assistant. How can I help you today? Feel free to ask about blood donation, general health, or any medical concerns. Remember, I provide educational information only - for emergencies, call 199 immediately.",
      bn: "হ্যালো! 👋 আমি ডাঃ এআই, আপনার ভার্চুয়াল মেডিকেল সহকারী। আজকে আমি আপনাকে কিভাবে সাহায্য করতে পারি? রক্তদান, সাধারণ স্বাস্থ্য বা যেকোনো চিকিৎসাগত উদ্বেগ সম্পর্কে জিজ্ঞাসা করতে নির্দ্বিধায়। মনে রাখবেন, আমি শুধুমাত্র শিক্ষামূলক তথ্য প্রদান করি - জরুরী অবস্থার জন্য অবিলম্বে ১৯৯ নম্বরে কল করুন।"
    }
  };
  
  // Quick questions based on language - UPDATED WITH MORE OPTIONS
  const quickQuestions = language === 'en' ? [
    "Am I eligible to donate blood?",
    "What should I eat before donating?",
    // "Flu symptoms and treatment",
    "Common cold relief",
    "High blood pressure symptoms?",
    // "COVID-19 prevention tips",
    // "HEART ATTACK SIGNS - EMERGENCY",
    "Healthy diet for donors",
    "After donation care",
    "Blood type compatibility",
    // "Headache relief methods",
    // "Stomach pain management",
    "Fever treatment guidelines",
    "Allergy symptoms and care"
  ] : [
    "আমি কি রক্তদানের জন্য যোগ্য?",
    "রক্তদানের আগে কি খাওয়া উচিত?",
    // "ফ্লু লক্ষণ ও চিকিৎসা",
    "সাধারণ সর্দি উপশম",
    "উচ্চ রক্তচাপের লক্ষণ?",
    // "COVID-19 প্রতিরোধ টিপস",
    // "হার্ট অ্যাটাক লক্ষণ - জরুরী",
    "দাতাদের জন্য স্বাস্থ্যকর খাদ্য",
    "রক্তদানের পর যত্ন",
    "রক্তের গ্রুপ সামঞ্জস্যতা",
    // "মাথাব্যথা উপশম পদ্ধতি",
    // "পেট ব্যথা ব্যবস্থাপনা",
    "জ্বর চিকিৎসা নির্দেশিকা",
    "অ্যালার্জি লক্ষণ ও যত্ন"
  ];
  
  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: medicalKnowledge.greeting[language],
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 500);
    }
  }, [isOpen, messages.length, language, medicalKnowledge.greeting]);
  
  // Handle quick question click
  const handleQuickQuestion = (question) => {
    setInputText(question);
    handleSendMessage();
  };
  
  // Find appropriate response
  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Check for emergency keywords
    const emergencyKeywords = language === 'en' 
      ? ['heart attack', 'chest pain', 'bleeding', 'emergency', 'unconscious', 'severe pain', 'can\'t breathe', 'asthma attack', 'choking', 'stroke']
      : ['হার্ট অ্যাটাক', 'বুকে ব্যথা', 'রক্তপাত', 'জরুরী', 'অচেতন', 'তীব্র ব্যথা', 'শ্বাস নিতে পারছি না', 'অ্যাজমা অ্যাটাক', 'শ্বাসরুদ্ধ', 'স্ট্রোক'];
    
    const hasEmergency = emergencyKeywords.some(keyword => 
      lowerMessage.includes(keyword.toLowerCase())
    );
    
    if (hasEmergency) {
      if (lowerMessage.includes('asthma')) {
        return {
          text: medicalKnowledge['asthma attack'][language],
          isEmergency: true
        };
      }
      return {
        text: medicalKnowledge['heart attack signs'][language],
        isEmergency: true
      };
    }
    
    // Check for specific topics
    const topics = Object.keys(medicalKnowledge);
    for (const topic of topics) {
      if (lowerMessage.includes(topic.toLowerCase())) {
        return {
          text: medicalKnowledge[topic][language],
          isEmergency: false
        };
      }
    }
    
    // Check for related keywords - UPDATED WITH MORE KEYWORDS
    const keywordMap = {
      'donat': 'blood donation eligibility',
      'blood type': 'blood types compatibility',
      'after donation': 'after donation care',
      'pressure': 'high blood pressure',
      'diabet': 'diabetes symptoms',
      'covid': 'covid symptoms',
      'prevent': 'covid prevention',
      'diet': 'healthy diet',
      'food': 'iron rich foods',
      'exercise': 'exercise routine',
      'stress': 'stress management',
      'bleed': 'first aid bleeding',
      'flu': 'flu symptoms',
      'influenza': 'flu symptoms',
      'cold': 'cold symptoms',
      'headache': 'headache treatment',
      'migraine': 'headache treatment',
      'stomach': 'stomach pain',
      'abdomen': 'stomach pain',
      'allerg': 'allergy symptoms',
      'sneeze': 'allergy symptoms',
      'back pain': 'back pain relief',
      'fever': 'fever treatment',
      'temperature': 'fever treatment',
      'asthma': 'asthma attack',
      'wheeze': 'asthma attack',
      'hello': 'greeting',
      'hi': 'greeting',
      'greeting': 'greeting'
    };
    
    for (const [keyword, topic] of Object.entries(keywordMap)) {
      if (lowerMessage.includes(keyword)) {
        return {
          text: medicalKnowledge[topic][language],
          isEmergency: false
        };
      }
    }
    
    // Default response
    return {
      text: medicalKnowledge.default[language],
      isEmergency: false
    };
  };
  
  // Handle sending message
  const findAnswer = (message) => {
    const lower = (message || '').toLowerCase().trim();
    const tokens = lower.split(/\W+/).filter(Boolean);

    const qaMap = {
      blood: {
        en: "Blood is vital for carrying oxygen and nutrients. For donors: ensure you meet age, weight, and health criteria; avoid heavy exertion before donating; eat iron-rich food and stay hydrated. After donation, rest, apply pressure to the site, and avoid heavy lifting for 24–48 hours. Regular donation has benefits like stimulating blood production and helping others, but always follow local guidelines and consult a clinician if you feel unwell.",
        bn: "রক্ত শরীরে অক্সিজেন ও পুষ্টি বহন করে। রক্তদান করতে চাইলে বয়স, ওজন ও স্বাস্থ্যগত মানদণ্ড পূরণ করতে হবে; দান করার আগে অতিরিক্ত পরিশ্রম করবেন না; লৌহের বড় খাদ্য গ্রহণ করুন এবং হাইড্রেটেড থাকুন। রক্তদানের পরে বিশ্রাম নিন, সাইটে চাপ প্রয়োগ করুন, এবং ২৪–৪৮ ঘণ্টার জন্য ভারি কাজ এড়িয়ে চলুন। নিয়মিত দান রক্ত উৎপাদনকে উদ্দীপিত করে এবং অন্যদের সাহায্য করে, তবে অসুস্থ বোধ করলে ডাক্তারের পরামর্শ নিন।"
      },
      donor: {
        en: "A donor should be generally healthy, meet age and weight limits, and not have recent infections or certain medical conditions. Check local eligibility rules and bring ID. After donation, follow care instructions and report any unusual symptoms.",
        bn: "রক্তদাতা সাধারণত সুস্থ থাকা উচিত, নির্দিষ্ট বয়স ও ওজনের শর্ত পূরণ করতে হবে, এবং সাম্প্রতিক সংক্রমণ বা নির্দিষ্ট মেডিকেল কন্ডিশন থাকা উচিত নয়। স্থানীয় যোগ্যতা নিয়ম দেখুন এবং পরিচয়পত্র আনুন। দানের পরে যত্ন নিন এবং অস্বাভাবিক লক্ষণ দেখলে জানাবেন।"
      },
      fever: {
        en: "Fever usually indicates infection. Rest, hydrate, and monitor temperature. Seek medical care if fever is very high (>39.4°C), prolonged (>3 days), or accompanied by severe symptoms like difficulty breathing, stiff neck, or persistent pain.",
        bn: "জ্বর সাধারণত সংক্রমণের ইঙ্গিত দেয়। বিশ্রাম নিন, পর্যাপ্ত পানি খান এবং তাপমাত্রা নজর করুন। যদি জ্বর খুব বেশি (>৩৯.৪°C), দীর্ঘস্থায়ী (>৩ দিন) হয় বা শ্বাসকষ্ট, ঘাড় শক্ত বা তীব্র ব্যথা থাকে তবে চিকিৎসকের কাছে যান।"
      },
      covid: {
        en: "For suspected COVID-19: isolate, test, rest, hydrate, and seek medical advice if breathing problems or risk factors exist. Follow local public health guidance on isolation duration.",
        bn: "যদি COVID-19 সন্দেহ হয়: আইসোলেট করুন, টেস্ট করান, বিশ্রাম নিন, পানি খান, এবং শ্বাসকষ্ট বা ঝুঁকিপূর্ণ অবস্থায় থাকলে চিকিৎসকের পরামর্শ নিন। স্থানীয় স্বাস্থ্যবিধি অনুসরণ করুন।"
      },
      flu: {
        en: "Influenza (flu) is a respiratory illness. Symptoms: fever, cough, sore throat, muscle aches. Treatment: rest, fluids, fever reducers. Antiviral drugs may help if taken early. Stay home to avoid spreading. Seek help if breathing difficulties occur.",
        bn: "ইনফ্লুয়েঞ্জা (ফ্লু) একটি শ্বাসযন্ত্রের রোগ। লক্ষণ: জ্বর, কাশি, গলা ব্যথা, পেশী ব্যথা। চিকিৎসা: বিশ্রাম, তরল, জ্বর কমানোর ওষুধ। অ্যান্টিভাইরাল ওষুধ শুরুতে নিলে সাহায্য করতে পারে। ছড়ানো এড়াতে বাড়িতে থাকুন। শ্বাসকষ্ট হলে সাহায্য নিন।"
      },
      cold: {
        en: "Common cold symptoms: runny nose, sneezing, sore throat. Usually mild. Treatment: rest, fluids, over-the-counter remedies. Usually resolves in 7-10 days. Different from flu which is more severe.",
        bn: "সাধারণ সর্দি লক্ষণ: সর্দি, হাঁচি, গলা ব্যথা। সাধারণত হালকা। চিকিৎসা: বিশ্রাম, তরল, ওভার-দ্য-কাউন্টার প্রতিকার। সাধারণত ৭-১০ দিনে সেরে যায়। ফ্লু থেকে আলাদা যা বেশি তীব্র।"
      },
      platelets: {
        en: "Platelet donation has specific eligibility and may require more frequent checks. Platelets help with clotting; discuss with your donation center about the procedure and recovery.",
        bn: "প্লেটলেট দান নির্দিষ্ট যোগ্যতা লাগে এবং বেশি ফ্রিকোয়েন্সি চেক প্রয়োজন হতে পারে। প্লেটলেট ক্লটিং-এ সাহায্য করে; প্রক্রিয়া এবং সুস্থতা সম্পর্কে দান কেন্দ্রের সাথে আলোচনা করুন।"
      },
      plasma: {
        en: "Plasma donation involves collecting the liquid portion of blood. It helps patients with clotting disorders and other conditions. Follow the center's guidance on preparation and aftercare.",
        bn: "প্লাজমা দানে রক্তের তরল অংশ সংগ্রহ করা হয়। এটি ক্লটিং সমস্যা ও অন্যান্য রোগীদের সাহায্য করে। প্রস্তুতি ও কেয়ার সম্পর্কিত নির্দেশনা অনুসরণ করুন।"
      },
      anemia: {
        en: "Anemia means low hemoglobin or red blood cells; common signs include fatigue and pale skin. Iron-rich diet, supplements if prescribed, and medical evaluation are typical steps.",
        bn: "অ্যানিমিয়া মানে হিমোগ্লোবিন বা লাল রক্তকণিকার পরিমাণ কম; সাধারণ লক্ষণ ক্লান্তি ও ফ্যাকাশে ত্বক। লৌহ সমৃদ্ধ খাদ্য, প্রয়োজনে সাপ্লিমেন্ট ও চিকিৎসা পরীক্ষা প্রয়োজন।"
      },
      donation: {
        en: "Donation saves lives. Check eligibility, bring ID, stay hydrated, and follow post-donation care. Ask staff about any concerns before leaving.",
        bn: "দান জীবনের জন্য গুরুত্বপূর্ণ। যোগ্যতা পরীক্ষা করুন, পরিচয়পত্র আনুন, পানি পান করুন, এবং দানের পরে যত্ন নেবেন। কোনও প্রশ্ন থাকলে স্টাফকে জিজ্ঞাসা করুন।"
      }
    };

    // Exact single-word trigger
    if (tokens.length === 1 && qaMap[tokens[0]]) {
      const entry = qaMap[tokens[0]];
      return { text: entry[language] || entry.en, isEmergency: false };
    }

    // Try to find any keyword inside tokens
    for (const tok of tokens) {
      if (qaMap[tok]) {
        const entry = qaMap[tok];
        return { text: entry[language] || entry.en, isEmergency: false };
      }
    }

    // Fallback to existing topic responder
    return findResponse(message);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isTyping) return;
    
    const userMessage = inputText.trim();
    const messageTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user message
    const userMsg = {
      id: messages.length + 1,
      text: userMessage,
      sender: 'user',
      time: messageTime
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      const response = findAnswer(userMessage);
      const botMsg = {
        id: messages.length + 2,
        text: response.text,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isEmergency: response.isEmergency
      };
      
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
      
      // Scroll to bottom
      const messagesContainer = document.querySelector('.chatbot-messages');
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
      
      // Set unread if not open
      if (!isOpen) {
        setHasUnread(true);
      }
    }, 1500);
  };
  
  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Handle panel open
  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (hasUnread) {
      setHasUnread(false);
    }
  };

  // Listen for events to open the chat when ambulance UI triggers it
  useEffect(() => {
    const openChat = () => setIsOpen(true);
    const showHotline = () => setHotlineModalVisible(true);
    window.addEventListener('open-chat', openChat);
    window.addEventListener('show-hotline', showHotline);
    return () => {
      window.removeEventListener('open-chat', openChat);
      window.removeEventListener('show-hotline', showHotline);
    };
  }, []);
  
  // Clear chat
  const handleClearChat = () => {
    setMessages([]);
    // Reset with greeting after clear
    setTimeout(() => {
      setMessages([{
        id: 1,
        text: medicalKnowledge.greeting[language],
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 100);
  };
  
  // Sample conversation starter
  const handleSampleQuestion = () => {
    const sampleQuestion = language === 'en' 
      ? "What are the requirements for blood donation?"
      : "রক্তদানের জন্য কি কি প্রয়োজনীয়তা আছে?";
    setInputText(sampleQuestion);
    handleSendMessage();
  };
  
  return (
    <div className="doctor-ai-chatbot">
      {/* <button 
        className={`chatbot-toggle ${hasUnread ? 'unread' : ''}`}
        onClick={() => {
          // clicking the Doctor AI button should open the ambulance/hotline per user request
          window.dispatchEvent(new CustomEvent('show-hotline'));
        }}
        aria-label={language === 'en' ? 'Open Emergency Ambulance' : 'এমার্জেন্সি অ্যাম্বুলেন্স খুলুন'}
      >
        <span className="chatbot-icon" aria-hidden="true">🚨</span>
        <span className="chatbot-label">{language === 'en' ? 'Emergency Ambulance' : 'এমার্জেন্সি অ্যাম্বুলেন্স'}</span>
      </button> */}
      
      {isOpen && (
        <div className="chatbot-panel" role="dialog" aria-label={language === 'en' ? 'Doctor AI Chatbot' : 'ডাক্তার এআই চ্যাটবট'}>
          <div className="chatbot-header">
            <div className="doctor-info">
              <div className="doctor-avatar">👨‍⚕️</div>
              <div className="doctor-details">
                <h4>Dr. AI Assistant</h4>
                <p>{language === 'en' ? 'Virtual Medical Assistant' : 'ভার্চুয়াল মেডিকেল সহকারী'}</p>
              </div>
            </div>
            <div className="chatbot-actions">
              <button 
                className="chatbot-action-btn"
                onClick={handleSampleQuestion}
                title={language === 'en' ? 'Sample Question' : 'নমুনা প্রশ্ন'}
              >
                💡
              </button>
              <button 
                className="chatbot-action-btn"
                onClick={handleClearChat}
                title={language === 'en' ? 'Clear Chat' : 'চ্যাট পরিষ্কার করুন'}
              >
                🗑️
              </button>
              <button 
                className="chatbot-action-btn chatbot-close"
                onClick={handleToggle}
                title={language === 'en' ? 'Close' : 'বন্ধ করুন'}
              >
                ✕
              </button>
            </div>
          </div>
          
          <div className="chatbot-messages">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`message ${msg.sender} ${msg.isEmergency ? 'emergency' : ''}`}
              >
                <span className="message-icon">
                  {msg.sender === 'user' ? '👤' : '👨‍⚕️'}
                </span>
                {msg.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <span className="message-time">{msg.time}</span>
              </div>
            ))}
            
            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <span>{language === 'en' ? 'Dr. AI is typing...' : 'ডাঃ এআই টাইপ করছেন...'}</span>
              </div>
            )}
            
            {messages.length <= 2 && (
              <div className="quick-questions">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className={`quick-question ${index === 6 ? 'emergency' : ''}`}
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="chatbot-input">
            <div className="input-wrapper">
              <input
                type="text"
                className="chat-input"
                placeholder={language === 'en' ? "Ask Dr. AI about health..." : "ডাঃ এআই কে স্বাস্থ্য সম্পর্কে জিজ্ঞাসা করুন..."}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                dir={language === 'bn' ? 'rtl' : 'ltr'}
              />
              <button 
                className="send-btn" 
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
              >
                ➤
              </button>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '8px', textAlign: 'center' }}>
              {language === 'en' ? 'For emergencies, call 199 immediately' : 'জরুরী অবস্থার জন্য অবিলম্বে ১৯৯ নম্বরে কল করুন'}
            </div>
          </div>
        </div>
      )}

      {hotlineModalVisible && (
        <div className="hotline-modal" role="dialog" aria-label={language === 'en' ? 'Ambulance' : 'অ্যাম্বুলেন্স'}>
          <div className="hotline-modal-content">
            <h3 style={{ margin: 0 }}>{language === 'en' ? 'Ambulance Service' : 'অ্যাম্বুলেন্স সার্ভিস'}</h3>
            <p style={{ fontSize: '1.1rem', margin: '8px 0' }}>📞 199</p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button className="btn-secondary" onClick={() => { navigator.clipboard && navigator.clipboard.writeText('199'); setHotlineModalVisible(false); }}>
                {language === 'en' ? 'Copy Number' : 'নম্বর কপি করুন'}
              </button>
              <button className="btn-primary" onClick={() => setHotlineModalVisible(false)}>
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Donation Status Component
const DonationStatusBadge = ({ lastDonation, isCurrentUser = false }) => {
  const { t, language } = useTranslation();
  const status = getDonationStatus(lastDonation);
  const daysUntilAvailable = getDaysUntilAvailable(lastDonation);
  const nextAvailableDate = lastDonation && lastDonation !== 'Never' 
    ? calculateNextAvailableDate(lastDonation)
    : null;

  const getStatusColor = () => {
    switch (status) {
      case DONATION_STATUS.AVAILABLE:
        return 'status-available';
      case DONATION_STATUS.UNAVAILABLE:
        return 'status-unavailable';
      default:
        return 'status-pending';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case DONATION_STATUS.AVAILABLE:
        return '✅';
      case DONATION_STATUS.UNAVAILABLE:
        return '⏳';
      default:
        return '❓';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case DONATION_STATUS.AVAILABLE:
        return t('availableForDonation');
      case DONATION_STATUS.UNAVAILABLE:
        return t('unavailableForDonation');
      default:
        return t('pendingAvailability');
    }
  };

  return (
    <div className={`donation-status-badge ${getStatusColor()} ${isCurrentUser ? 'current-user-status' : ''}`}>
      <div className="status-header">
        <span className="status-icon">{getStatusIcon()}</span>
        <span className="status-text">{getStatusText()}</span>
      </div>
      {status === DONATION_STATUS.UNAVAILABLE && daysUntilAvailable > 0 && (
        <div className="availability-countdown">
          <span className="countdown-text">
            {t('availableInDays', { days: daysUntilAvailable })}
          </span>
          {nextAvailableDate && (
            <span className="available-date">
              ({nextAvailableDate.toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')})
            </span>
          )}
        </div>
      )}
      {isCurrentUser && status === DONATION_STATUS.AVAILABLE && (
        <div className="current-user-note">
          {t('youCanDonateNow')}
        </div>
      )}
    </div>
  );
};

// Enhanced Donation History Component
const DonationHistory = ({ donations, onAddDonation, isCurrentUser = false }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDonation, setNewDonation] = useState({
    date: new Date().toISOString().split('T')[0],
    location: '',
    type: 'Whole Blood',
    volume: '450ml',
    notes: ''
  });
  const { t } = useTranslation();

  const formattedHistory = formatDonationHistory(donations);

  const handleAddDonation = () => {
    if (newDonation.date && newDonation.location) {
      const donationRecord = {
        id: Date.now(),
        date: newDonation.date,
        location: newDonation.location,
        type: newDonation.type,
        volume: newDonation.volume,
        notes: newDonation.notes,
        timestamp: new Date().toISOString()
      };

      onAddDonation(donationRecord);
      setNewDonation({
        date: new Date().toISOString().split('T')[0],
        location: '',
        type: 'Whole Blood',
        volume: '450ml',
        notes: ''
      });
      setShowAddForm(false);
    }
  };

  const getTotalDonations = () => {
    return formattedHistory.length;
  };

  const getLastDonationDate = () => {
    if (formattedHistory.length === 0) return 'Never';
    return formattedHistory[0].formattedDate;
  };

  return (
    <div className="donation-history-section">
      <div className="history-header">
        <h4>🩸 {t('donationHistoryTab')}</h4>
        <div className="history-stats">
          <span className="stat">{t('totalDonations')}: {getTotalDonations()}</span>
          <span className="stat">{t('lastDonationLabel')} {getLastDonationDate()}</span>
        </div>
      </div>

      {isCurrentUser && (
        <div className="donation-actions">
          <button 
            className="btn-primary btn-sm"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? t('close') : '+ ' + t('recordDonation')}
          </button>
        </div>
      )}

      {showAddForm && isCurrentUser && (
        <div className="add-donation-form">
          <h5>{t('recordDonation')}</h5>
          <div className="form-grid">
            <div className="form-group">
              <label>{t('dateOfBirth')}</label>
              <input
                type="date"
                value={newDonation.date}
                onChange={(e) => setNewDonation(prev => ({ ...prev, date: e.target.value }))}
                max={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="form-group">
              <label>{t('locationAvailability')}</label>
              <input
                type="text"
                placeholder={t('enterCityOrArea')}
                value={newDonation.location}
                onChange={(e) => setNewDonation(prev => ({ ...prev, location: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label>{t('bloodType')}</label>
              <select
                value={newDonation.type}
                onChange={(e) => setNewDonation(prev => ({ ...prev, type: e.target.value }))}
              >
                <option value="Whole Blood">Whole Blood</option>
                <option value="Platelets">Platelets</option>
                <option value="Plasma">Plasma</option>
                <option value="Double Red Cells">Double Red Cells</option>
              </select>
            </div>
            <div className="form-group">
              <label>{t('weight')}</label>
              <select
                value={newDonation.volume}
                onChange={(e) => setNewDonation(prev => ({ ...prev, volume: e.target.value }))}
              >
                <option value="450ml">450ml (Standard)</option>
                <option value="500ml">500ml</option>
                <option value="250ml">250ml (Plasma)</option>
                <option value="200ml">200ml (Platelets)</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label>{t('medicalConditions')}</label>
              <textarea
                placeholder={t('travelHistory')}
                value={newDonation.notes}
                onChange={(e) => setNewDonation(prev => ({ ...prev, notes: e.target.value }))}
                rows="2"
              />
            </div>
          </div>
          <button className="btn-success" onClick={handleAddDonation}>
            {t('completeRegistration')}
          </button>
        </div>
      )}

      <div className="donation-history-list">
        {formattedHistory.length === 0 ? (
          <div className="no-donations">
            <div className="no-donations-icon">🩸</div>
            <p>{t('noDonations')}</p>
            {isCurrentUser && (
              <p className="encouragement">{t('encouragement')}</p>
            )}
          </div>
        ) : (
          formattedHistory.map((donation, index) => (
            <div key={donation.id || index} className="donation-record">
              <div className="donation-main">
                <div className="donation-date">{donation.formattedDate}</div>
                <div className="donation-details">
                  <span className="donation-location">{donation.location}</span>
                  <span className="donation-type">{donation.type}</span>
                  <span className="donation-volume">{donation.volume}</span>
                </div>
              </div>
              {donation.notes && (
                <div className="donation-notes">
                  <strong>{t('medicalConditions')}:</strong> {donation.notes}
                </div>
              )}
              {index === 0 && (
                <div className="latest-donation-badge">{t('latestDonation')}</div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const { t, language } = useTranslation();

  // i add 
  const [locationSearch, setLocationSearch] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]); // ✅ define it
  // State Management
  const [activePage, setActivePage] = useLocalStorage('activePage', 'home');
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser', null);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  // const [locationSearch, setLocationSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginStep, setLoginStep] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  

  // Toast / popup for user messages (validation, success, errors)
  const [toast, setToast] = useState({ visible: false, message: '', type: 'info' });
  const toastTimerRef = useRef(null);
  const showToast = useCallback((message, type = 'error', timeout = 4000) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToast({ visible: true, message, type });
    toastTimerRef.current = setTimeout(() => setToast({ visible: false, message: '', type: 'info' }), timeout);
  }, []);

  // Enhanced Registration form state
  const [registrationForm, setRegistrationForm] = useState({
    fullName: '', 
    email: '', 
    phone: '', 
    bloodGroup: '', 
    gender: '', 
    dateOfBirth: '',
    weight: '',
    city: '', 
    area: '', 
    lastDonation: '', 
    emergencyContact: '', 
    medicalHistory: '',
    hasDisease: '',
    recentSurgery: '',
    medications: '',
    travelHistory: '',
    availability: 'Flexible Schedule',
    image: ''
  });

  // Enhanced donor data with donation history and status tracking
  const baseDonors = useMemo(() => [
    {
      id: 1, name: "Dr. Sarah Chen", bloodType: "O+", city: "Dhaka", area: "Gulshan",
      availability: "24/7 Emergency", donations: 47, image: "👩‍⚕️", rating: 4.9,
      badge: "Platinum Donor", verified: true, emergencyAvailable: true,
      lastDonation: "2024-01-15",
      phone: "+880 1711-123456", email: "sarah.chen@medical.com", gender: "Female",
      age: 32, weight: "58 kg", height: "165 cm", occupation: "Cardiologist",
      languages: ["English", "Bengali", "Mandarin"],
      achievements: ["50+ Donations", "Emergency Responder", "Blood Drive Organizer"],
      medicalInfo: "No medical conditions, Regular health checkups",
      donationHistory: [
        { id: 1, date: "2024-01-15", location: "Apollo Hospital", type: "Whole Blood", volume: "450ml" },
        { id: 2, date: "2023-12-01", location: "Square Hospital", type: "Platelets", volume: "200ml" },
        { id: 3, date: "2023-09-20", location: "Apollo Hospital", type: "Whole Blood", volume: "450ml" }
      ]
    },
    {
      id: 2, name: "Ahmed Rahman", bloodType: "A+", city: "Dhaka", area: "Gulshan",
      availability: "Weekdays 9AM-5PM", donations: 15, image: "👨‍💼", rating: 4.5,
      badge: "Silver Donor", verified: true, emergencyAvailable: false,
      lastDonation: "2024-02-10",
      phone: "+880 1711-111111", email: "ahmed.rahman@business.com", gender: "Male",
      age: 29, weight: "72 kg", height: "175 cm", occupation: "Bank Manager",
      languages: ["Bengali", "English"], achievements: ["Regular Donor"],
      medicalInfo: "Healthy, No medications",
      donationHistory: [
        { id: 1, date: "2024-02-10", location: "United Hospital", type: "Whole Blood", volume: "450ml" },
        { id: 2, date: "2023-11-15", location: "United Hospital", type: "Whole Blood", volume: "450ml" }
      ]
    },
    {
      id: 3, name: "Michael Rodriguez", bloodType: "A+", city: "Dhaka", area: "Dhanmondi",
      availability: "Weekends", donations: 32, image: "👨‍💼", rating: 4.8,
      badge: "Gold Donor", verified: true, emergencyAvailable: false,
      lastDonation: "2024-02-01",
      phone: "+880 1711-234567", email: "m.rodriguez@tech.com", gender: "Male",
      age: 28, weight: "75 kg", height: "178 cm", occupation: "Software Engineer",
      languages: ["English", "Bengali", "Spanish"],
      achievements: ["Regular Donor", "Community Volunteer"],
      medicalInfo: "Healthy, No medications",
      donationHistory: [
        { id: 1, date: "2024-02-01", location: "Square Hospital", type: "Whole Blood", volume: "450ml" },
        { id: 2, date: "2023-11-10", location: "Square Hospital", type: "Whole Blood", volume: "450ml" }
      ]
    },
    {
      id: 4, name: "Nadia Islam", bloodType: "B+", city: "Dhaka", area: "Dhanmondi",
      availability: "Evenings after 6 PM", donations: 8, image: "👩‍🎓", rating: 4.3,
      badge: "Bronze Donor", verified: true, emergencyAvailable: true,
      lastDonation: "2024-01-25",
      phone: "+880 1711-222222", email: "nadia.islam@student.com", gender: "Female",
      age: 22, weight: "52 kg", height: "160 cm", occupation: "Medical Student",
      languages: ["Bengali", "English"], achievements: ["Young Donor"],
      medicalInfo: "Medical student, Regular checkups",
      donationHistory: [
        { id: 1, date: "2024-01-25", location: "Ibn Sina Hospital", type: "Whole Blood", volume: "450ml" }
      ]
    },
    {
      id: 5, name: "Ayesha Siddiqa", bloodType: "B-", city: "Dhaka", area: "Uttara",
      availability: "Evenings after 6 PM", donations: 19, image: "👩‍🎓", rating: 4.7,
      badge: "Silver Donor", verified: true, emergencyAvailable: true,
      lastDonation: "2024-01-28",
      phone: "+880 1711-345678", email: "ayesha.s@university.edu", gender: "Female",
      age: 24, weight: "52 kg", height: "160 cm", occupation: "Medical Student",
      languages: ["Bengali", "English", "Arabic"],
      achievements: ["Young Donor Award", "Campus Blood Drive Leader"],
      medicalInfo: "Medical student, Regular health screenings",
      donationHistory: [
        { id: 1, date: "2024-01-28", location: "United Hospital", type: "Whole Blood", volume: "450ml" },
        { id: 2, date: "2023-10-15", location: "United Hospital", type: "Whole Blood", volume: "450ml" }
      ]
    },
    {
      id: 6, name: "Dr. Rajesh Kumar", bloodType: "AB+", city: "Cumilla", area: "Kandirpar",
      availability: "24/7 Emergency", donations: 28, image: "👨‍⚕️", rating: 4.8,
      badge: "Gold Donor", verified: true, emergencyAvailable: true,
      lastDonation: "2024-02-12",
      phone: "+880 1811-123456", email: "rajesh.kumar@hospital.com", gender: "Male",
      age: 45, weight: "78 kg", height: "172 cm", occupation: "General Physician",
      languages: ["Bengali", "Hindi", "English"],
      achievements: ["Medical Professional", "Community Service"],
      medicalInfo: "Doctor, Regular health monitoring",
      donationHistory: [
        { id: 1, date: "2024-02-12", location: "Cumilla Medical College", type: "Whole Blood", volume: "450ml" },
        { id: 2, date: "2023-11-20", location: "Cumilla Medical College", type: "Whole Blood", volume: "450ml" }
      ]
    },
    {
      id: 7, name: "Fatima Begum", bloodType: "O+", city: "Chittagong", area: "Agrabad",
      availability: "Weekdays", donations: 22, image: "👩‍💼", rating: 4.6,
      badge: "Silver Donor", verified: true, emergencyAvailable: false,
      lastDonation: "2024-02-08",
      phone: "+880 1811-234567", email: "fatima.b@corporation.com", gender: "Female",
      age: 35, weight: "61 kg", height: "158 cm", occupation: "Corporate Executive",
      languages: ["Bengali", "English"],
      achievements: ["Regular Donor", "Corporate Volunteer"],
      medicalInfo: "Healthy, Regular checkups",
      donationHistory: [
        { id: 1, date: "2024-02-08", location: "CSCR", type: "Whole Blood", volume: "450ml" },
        { id: 2, date: "2023-11-25", location: "CSCR", type: "Whole Blood", volume: "450ml" }
      ]
    },
    {
      id: 8, name: "Jamil Hossain", bloodType: "A-", city: "Sylhet", area: "Zindabazar",
      availability: "Flexible Schedule", donations: 14, image: "👨‍🌾", rating: 4.4,
      badge: "Bronze Donor", verified: true, emergencyAvailable: true,
      lastDonation: "2024-02-05",
      phone: "+880 1911-123456", email: "jamil.h@tea.com", gender: "Male",
      age: 42, weight: "68 kg", height: "170 cm", occupation: "Tea Garden Manager",
      languages: ["Bengali", "English"],
      achievements: ["Community Leader"],
      medicalInfo: "Healthy, Active lifestyle",
      donationHistory: [
        { id: 1, date: "2024-02-05", location: "Sylhet MAG Osmani", type: "Whole Blood", volume: "450ml" }
      ]
    },
    {
      id: 9, name: "Professor Anwar Hussain", bloodType: "B+", city: "Rajshahi", area: "University",
      availability: "Weekends", donations: 35, image: "👨‍🏫", rating: 4.7,
      badge: "Gold Donor", verified: true, emergencyAvailable: false,
      lastDonation: "2024-02-10",
      phone: "+880 1711-987654", email: "anwar.h@ru.edu", gender: "Male",
      age: 52, weight: "74 kg", height: "173 cm", occupation: "University Professor",
      languages: ["Bengali", "English", "Arabic"],
      achievements: ["Academic Donor", "Research Volunteer"],
      medicalInfo: "Regular health screenings, No major issues",
      donationHistory: [
        { id: 1, date: "2024-02-10", location: "Rajshahi Medical College", type: "Whole Blood", volume: "450ml" },
        { id: 2, date: "2023-11-15", location: "Rajshahi Medical College", type: "Whole Blood", volume: "450ml" }
      ]
    },
    {
      id: 10, name: "Tasnim Rahman", bloodType: "AB-", city: "Khulna", area: "Sonadanga",
      availability: "On Call", donations: 9, image: "👩‍💻", rating: 4.2,
      badge: "Bronze Donor", verified: true, emergencyAvailable: true,
      lastDonation: "2024-01-30",
      phone: "+880 1711-876543", email: "tasnim.r@tech.com", gender: "Female",
      age: 26, weight: "55 kg", height: "162 cm", occupation: "IT Professional",
      languages: ["Bengali", "English"],
      achievements: ["Young Professional Donor"],
      medicalInfo: "Healthy, Regular donor",
      donationHistory: [
        { id: 1, date: "2024-01-30", location: "Khulna Medical College", type: "Whole Blood", volume: "450ml" }
      ]
    }
  ], []);

  // Enhanced current user with donation management
  const enhancedCurrentUser = useMemo(() => {
    if (!currentUser) return null;
    
    const status = getDonationStatus(currentUser.lastDonation);
    const daysUntilAvailable = getDaysUntilAvailable(currentUser.lastDonation);
    const nextAvailableDate = currentUser.lastDonation && currentUser.lastDonation !== 'Never' 
      ? calculateNextAvailableDate(currentUser.lastDonation)
      : null;

    return {
      ...currentUser,
      donationStatus: status,
      daysUntilAvailable,
      nextAvailableDate,
      isAvailable: status === DONATION_STATUS.AVAILABLE,
      donationHistory: currentUser.donationHistory || []
    };
  }, [currentUser]);

  // Combine base donors with current user if registered
  const donors = useMemo(() => {
    const allDonors = [...baseDonors];
    
    if (enhancedCurrentUser) {
      // Update current user's status
      const updatedCurrentUser = {
        ...enhancedCurrentUser,
        donationStatus: getDonationStatus(enhancedCurrentUser.lastDonation),
        isAvailable: getDonationStatus(enhancedCurrentUser.lastDonation) === DONATION_STATUS.AVAILABLE
      };
      allDonors.unshift(updatedCurrentUser);
    }
    
    return allDonors;
  }, [baseDonors, enhancedCurrentUser]);

  // Search functionality
  const debouncedLocationSearch = useDebounce(locationSearch, 300);
  
  const getLocationSuggestions = useCallback(() => {
    const searchTerm = debouncedLocationSearch.toLowerCase();
    if (!searchTerm) return [];
    
    const dhakaAreas = ['Gulshan', 'Banani', 'Dhanmondi', 'Uttara', 'Mirpur', 'Badda', 'Mohammadpur', 'Motijheel'];
    const cumillaAreas = ['Kandirpar', 'Circuit House', 'Police Line', 'Town Hall'];
    const chittagongAreas = ['Agrabad', 'GEC', 'Nasirabad', 'Chawkbazar'];
    const sylhetAreas = ['Zindabazar', 'Bandarbazar', 'Mirabazar', 'Kumarpara'];
    const rajshahiAreas = ['University', 'Shaheb Bazar', 'Kazihata'];
    const khulnaAreas = ['Sonadanga', 'Boyra', 'Doulatpur'];
    
    const allSuggestions = [
      ...CITIES,
      ...dhakaAreas.map(a => `Dhaka - ${a}`),
      ...cumillaAreas.map(a => `Cumilla - ${a}`),
      ...chittagongAreas.map(a => `Chittagong - ${a}`),
      ...sylhetAreas.map(a => `Sylhet - ${a}`),
      ...rajshahiAreas.map(a => `Rajshahi - ${a}`),
      ...khulnaAreas.map(a => `Khulna - ${a}`)
    ];
    
    return allSuggestions.filter(s => s.toLowerCase().includes(searchTerm)).slice(0, 8);
  }, [debouncedLocationSearch]);

  const filteredDonors = useMemo(() => {
    return donors.filter(donor => {
      const matchesBlood = !selectedBloodGroup || donor.bloodType === selectedBloodGroup;
      let matchesLocation = true;
      if (selectedLocation) {
        const searchLocation = selectedLocation.toLowerCase();
        matchesLocation = 
          donor.city.toLowerCase().includes(searchLocation) ||
          donor.area.toLowerCase().includes(searchLocation) ||
          `${donor.city} - ${donor.area}`.toLowerCase().includes(searchLocation);
      }
      const matchesUrgency = selectedUrgency === 'all' || 
        (selectedUrgency === 'emergency' && donor.emergencyAvailable);
      return matchesBlood && matchesLocation && matchesUrgency;
    });
  }, [donors, selectedBloodGroup, selectedLocation, selectedUrgency]);

  // Event Handlers
  const handleLocationSelect = useCallback((location) => {
    setSelectedLocation(location);
    setLocationSearch(location);
  }, []);

  const generateVerificationCode = useCallback(() => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }, []);

  const handleSendCode = useCallback(() => {
    if (phoneNumber.length !== 11 || !phoneNumber.startsWith('01')) {
      alert(language === 'en' ? 'Please enter a valid Bangladeshi phone number (11 digits starting with 01)' : 'দয়া করে একটি বৈধ বাংলাদেশি ফোন নম্বর লিখুন (01 দিয়ে শুরু 11 সংখ্যা)');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const code = generateVerificationCode();
      setGeneratedCode(code);
      setLoginStep('code');
      setIsLoading(false);
      alert(t('verificationCodeSent', { phone: phoneNumber }) + `\n\nCode: ${code}\n\n` + 
            (language === 'en' ? '(In real app, sent via SMS)' : '(বাস্তব অ্যাপে, এসএমএসের মাধ্যমে পাঠানো হবে)'));
    }, 1500);
  }, [phoneNumber, generateVerificationCode, language, t]);

  const handleVerifyCode = useCallback(() => {
    if (verificationCode === generatedCode) {
      setIsLoggedIn(true);
      setCurrentUser({
        id: 1000,
        name: language === 'en' ? "You" : "আপনি",
        bloodType: registrationForm.bloodGroup || (language === 'en' ? "Not specified" : "নির্দিষ্ট করা হয়নি"),
        city: registrationForm.city || (language === 'en' ? "Not specified" : "নির্দিষ্ট করা হয়নি"),
        area: registrationForm.area || (language === 'en' ? "Not specified" : "নির্দিষ্ট করা হয়নি"),
        availability: registrationForm.availability,
        donations: 0,
        image: "👤",
        rating: 5.0,
        badge: language === 'en' ? "New Donor" : "নতুন দাতা",
        verified: true,
        emergencyAvailable: true,
        isCurrentUser: true,
        lastDonation: 'Never',
        donationHistory: [],
        donationStatus: DONATION_STATUS.AVAILABLE,
        isAvailable: true
      });
      setShowLogin(false);
      setPhoneNumber('');
      setVerificationCode('');
      setLoginStep('phone');
      alert(t('loginSuccessful'));
    } else {
      alert(t('invalidCode'));
    }
  }, [verificationCode, generatedCode, setIsLoggedIn, setCurrentUser, registrationForm, language, t]);

  const handleRegistrationChange = useCallback((field, value) => {
    setRegistrationForm(prev => {
      const next = { ...prev, [field]: value };

      if (field === 'dateOfBirth' && value) {
        const birthDate = new Date(value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        next.age = age.toString();
      }

      return next;
    });
  }, []);

  const handleRegistrationSubmit = useCallback((e) => {
    e.preventDefault();
    
    // Validation
    if (parseInt(registrationForm.age) < 18) {
      showToast && showToast(language === 'en' ? '❌ You must be at least 18 years old to register as a blood donor.' : '❌ রক্তদাতা হিসেবে নিবন্ধন করতে আপনার বয়স কমপক্ষে ১৮ বছর হতে হবে।', 'error');
      return;
    }
    
    if (parseInt(registrationForm.weight) < 45) {
      showToast && showToast(language === 'en' ? '❌ Minimum weight requirement is 45 kg for blood donation.' : '❌ রক্তদানের জন্য ন্যূনতম ওজন প্রয়োজন ৪৫ কেজি।', 'error');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const userProfile = {
        id: Date.now(),
        name: registrationForm.fullName,
        bloodType: registrationForm.bloodGroup,
        city: registrationForm.city,
        area: registrationForm.area,
        availability: registrationForm.availability,
        donations: registrationForm.lastDonation ? 1 : 0,
        image: registrationForm.image || "👤",
        rating: 5.0,
        badge: language === 'en' ? "New Donor" : "নতুন দাতা",
        verified: true,
        emergencyAvailable: registrationForm.availability === '24/7 Emergency',
        phone: registrationForm.phone,
        email: registrationForm.email,
        gender: registrationForm.gender,
        age: registrationForm.age,
        weight: `${registrationForm.weight} kg`,
        height: registrationForm.height,
        occupation: language === 'en' ? 'Donor' : 'দাতা',
        languages: ['Bengali', 'English'],
        achievements: [language === 'en' ? 'New Donor' : 'নতুন দাতা'],
        medicalInfo: language === 'en' ? 'Recently registered donor' : 'সম্প্রতি নিবন্ধিত দাতা',
        isCurrentUser: true,
        lastDonation: registrationForm.lastDonation || 'Never',
        donationHistory: registrationForm.lastDonation ? [{
          id: Date.now(),
          date: registrationForm.lastDonation,
          location: language === 'en' ? "Previous Donation" : "পূর্ববর্তী দান",
          type: "Whole Blood",
          volume: "450ml",
          notes: language === 'en' ? "Recorded during registration" : "নিবন্ধনের সময় রেকর্ড করা হয়েছে"
        }] : [],
        donationStatus: getDonationStatus(registrationForm.lastDonation),
        isAvailable: getDonationStatus(registrationForm.lastDonation) === DONATION_STATUS.AVAILABLE
      };

      setCurrentUser(userProfile);
      setIsLoggedIn(true);
      
      alert(t('registrationSuccessful') + `\n\n${t('welcomeMessage', { name: registrationForm.fullName })}\n\n${t('registeredSuccess')}`);
      
      setShowRegistration(false);
      setRegistrationForm({
        fullName: '', email: '', phone: '', bloodGroup: '', gender: '', dateOfBirth: '',
        age: '', weight: '', height: '', city: '', area: '', lastDonation: '', 
        emergencyContact: '', medicalHistory: '', hasDisease: '', recentSurgery: '',
        medications: '', travelHistory: '', availability: 'Flexible Schedule'
      });
      setIsLoading(false);
    }, 2000);
  }, [registrationForm, setCurrentUser, setIsLoggedIn, language, t]);

  // Enhanced donation management functions
  const handleAddDonationRecord = useCallback((donorId, donationRecord) => {
    if (donorId === enhancedCurrentUser?.id) {
      const updatedUser = {
        ...enhancedCurrentUser,
        lastDonation: donationRecord.date,
        donations: (enhancedCurrentUser.donations || 0) + 1,
        donationHistory: [donationRecord, ...(enhancedCurrentUser.donationHistory || [])],
        donationStatus: DONATION_STATUS.UNAVAILABLE,
        isAvailable: false,
        nextAvailableDate: calculateNextAvailableDate(donationRecord.date),
        daysUntilAvailable: getDaysUntilAvailable(donationRecord.date)
      };
      
      setCurrentUser(updatedUser);
      
      alert(t('donationRecorded') + `\n\n${t('availableAgain')}\n${t('thankYouForSaving')}`);
    }
  }, [enhancedCurrentUser, setCurrentUser, t]);

  const handleRecordDonation = useCallback((donor) => {
    if (donor.isCurrentUser) {
      const today = new Date().toISOString().split('T')[0];
      const donationRecord = {
        id: Date.now(),
        date: today,
        location: language === 'en' ? "Self-Recorded Donation" : "স্ব-রেকর্ডকৃত দান",
        type: "Whole Blood",
        volume: "450ml",
        notes: language === 'en' ? "Recorded via DR. BLOOD 24/7 platform" : "DR. BLOOD 24/7 প্ল্যাটফর্মের মাধ্যমে রেকর্ড করা হয়েছে",
        timestamp: new Date().toISOString()
      };
      
      handleAddDonationRecord(donor.id, donationRecord);
    }
  }, [handleAddDonationRecord, language]);

  // const detectUserLocation = useCallback(() => {
  //   setIsLoading(true);
  //   const locations = [
  //     'Dhaka - Gulshan', 'Dhaka - Dhanmondi', 'Dhaka - Uttara', 
  //     'Cumilla - Kandirpar', 'Chittagong - Agrabad', 'Sylhet - Zindabazar'
  //   ];
  //   setTimeout(() => {
  //     const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  //     setUserLocation(randomLocation);
  //     setLocationSearch(randomLocation);
  //     setSelectedLocation(randomLocation);
  //     setIsLoading(false);
  //     alert(`📍 ${language === 'en' ? 'Location detected' : 'অবস্থান সনাক্ত হয়েছে'}: ${randomLocation}`);
  //   }, 1000);
  // }, [language]);

  const handleContactDonor = useCallback((donor) => {
    if (donor.isCurrentUser) {
      alert(language === 'en' ? '📞 This is your profile! You cannot contact yourself.' : '📞 এটি আপনার প্রোফাইল! আপনি নিজের সাথে যোগাযোগ করতে পারবেন না।');
      return;
    }
    
    const status = getDonationStatus(donor.lastDonation);
    if (status === DONATION_STATUS.UNAVAILABLE) {
      const daysUntilAvailable = getDaysUntilAvailable(donor.lastDonation);
      alert(`❌ ${donor.name} ${language === 'en' ? 'is currently unavailable for donation.' : 'বর্তমানে রক্তদানের জন্য অনুপলব্ধ।'}\n\n${language === 'en' ? 'They will be available again in' : 'তারা আবার উপলব্ধ হবে'} ${daysUntilAvailable} ${language === 'en' ? 'days.' : 'দিনে।'}`);
      return;
    }
    
    alert(`${t('contactDonor', { name: donor.name })}\n\n${language === 'en' ? 'Phone' : 'ফোন'}: ${donor.phone}\n${language === 'en' ? 'Email' : 'ইমেইল'}: ${donor.email}\n${language === 'en' ? 'Location' : 'অবস্থান'}: ${donor.area}, ${donor.city}`);
  }, [language, t]);

  const handleViewDonorProfile = useCallback((donor) => {
    setSelectedDonor(donor);
  }, []);

  const closeDonorProfile = useCallback(() => {
    setSelectedDonor(null);
  }, []);

  const clearAllFilters = useCallback(() => {
    setSelectedBloodGroup('');
    setLocationSearch('');
    setSelectedLocation('');
    setSelectedUrgency('all');
  }, []);

  const getSearchSummary = useCallback(() => {
    let summary = '';
    if (selectedBloodGroup) summary += `${language === 'en' ? 'Blood Group' : 'রক্তের গ্রুপ'}: ${selectedBloodGroup} `;
    if (selectedLocation) summary += `${language === 'en' ? 'Location' : 'অবস্থান'}: ${selectedLocation}`;
    return summary || (language === 'en' ? 'All donors' : 'সব রক্তদাতা');
  }, [selectedBloodGroup, selectedLocation, language]);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    alert(language === 'en' ? 'Logged out successfully!' : 'সফলভাবে লগআউট হয়েছে!');
  }, [setIsLoggedIn, setCurrentUser, language]);

  // Update HTML lang and dir attributes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'bn' ? 'rtl' : 'ltr';
  }, [language]);

  // Auto-update donor statuses periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (enhancedCurrentUser) {
        const newStatus = getDonationStatus(enhancedCurrentUser.lastDonation);
        if (newStatus !== enhancedCurrentUser.donationStatus) {
          const updatedUser = {
            ...enhancedCurrentUser,
            donationStatus: newStatus,
            isAvailable: newStatus === DONATION_STATUS.AVAILABLE,
            daysUntilAvailable: getDaysUntilAvailable(enhancedCurrentUser.lastDonation)
          };
          setCurrentUser(updatedUser);
        }
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [enhancedCurrentUser, setCurrentUser]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="app" dir={language === 'bn' ? 'rtl' : 'ltr'}>
      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-blood-cell">🩸</div>
        <div className="floating-heart">❤️</div>
        <div className="floating-plus">➕</div>
      </div>

      {/* Language Toggle */}
      <LanguageToggle />

      {/* Emergency Hotline */}
      <EmergencyHotline />

      {/* Health Tips AI */}
     <DoctorAIChatbot />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => setActivePage('home')}>
            <span className="logo-icon">🩸</span>
            <div>
              <div className="logo-text">{t('appName')}</div>
              <div className="logo-subtitle">{t('appSubtitle')}</div>
            </div>
          </div>
          
          <div className="nav-links">
            <button className={`nav-link home-nav ${activePage === 'home' ? 'active' : ''}`} onClick={() => setActivePage('home')}>
              {t('home')}
            </button>
            <button className={`nav-link find-nav ${activePage === 'donors' ? 'active' : ''}`} onClick={() => setActivePage('donors')}>
              {t('findDonors')}
            </button>
            
            {isLoggedIn && enhancedCurrentUser && (
              <button className={`nav-link profile-nav ${activePage === 'profile' ? 'active' : ''}`} onClick={() => setActivePage('profile')}>
                {t('myProfile')}
              </button>
            )}
            
            <Button variant="primary" onClick={() => setShowRegistration(true)} className="register-btn">
              {t('becomeDonor')}
            </Button>
            
            {isLoggedIn ? (
              <Button variant="secondary" onClick={handleLogout} className="logout-btn">
                {t('logout')}
              </Button>
            ) : (
              <Button variant="secondary" onClick={() => setShowLogin(true)} className="login-btn">
                {t('login')}
              </Button>
            )}
          </div>
          {/* Profile icon (shows uploaded photo if available) */}
          <div className="nav-profile" onClick={() => isLoggedIn ? setActivePage('profile') : setShowLogin(true)} title={isLoggedIn && enhancedCurrentUser ? enhancedCurrentUser.name : (language === 'en' ? 'Login' : 'লগইন')}>
            {/* show uploaded photo in header when available, otherwise generic avatar */}
            {isLoggedIn && enhancedCurrentUser && enhancedCurrentUser.image && typeof enhancedCurrentUser.image === 'string' && enhancedCurrentUser.image.startsWith('data:') ? (
              <img src={enhancedCurrentUser.image} alt={enhancedCurrentUser.name || 'avatar'} />
            ) : (
              <span className="avatar-fallback">👤</span>
            )}
          </div>
        </div>
      </nav>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>{t('loading')}</p>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Home Page */}
        {activePage === 'home' && (
          <div className="home-page">
            <section className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('heroTitle') }} />
                <p className="hero-subtitle" dangerouslySetInnerHTML={{ __html: t('heroSubtitle') }} />
                
                <div className="hero-buttons">
                  <Button variant="primary" onClick={() => setActivePage('donors')}>
                    <span className="btn-icon">🔍</span>{t('findBloodDonors')}
                  </Button>
                  <Button variant="secondary" onClick={() => setShowRegistration(true)}>
                    <span className="btn-icon">❤️</span>{t('registerAsDonor')}
                  </Button>
                  <Button
                  variant="tertiary"
                  onClick={() => window.open('https://www.google.com/maps', '_blank')}
                    >
                  <span className="btn-icon">📍</span>
                  {t('detectMyLocation')}
                </Button>

                </div>

                <div className="live-stats">
                  <div className="stat-item live">
                    <div className="stat-icon">🩸</div>
                    <div className="stat-content">
                      <div className="stat-number">{donors.filter(d => getDonationStatus(d.lastDonation) === DONATION_STATUS.AVAILABLE).length}+</div>
                      <div className="stat-label">{t('availableDonors')}</div>
                    </div>
                  </div>
                  <div className="stat-item live">
                    <div className="stat-icon">🏥</div>
                    <div className="stat-content">
                      <div className="stat-number">999+</div>
                      <div className="stat-label">{t('partnerLocations')}</div>
                    </div>
                  </div>
                  <div className="stat-item live">
                    <div className="stat-icon">🌍</div>
                    <div className="stat-content">
                      <div className="stat-number">64</div>
                      <div className="stat-label">{t('citiesCovered')}</div>
                    </div>
                  </div>
                  <div className="stat-item live">
                    <div className="stat-icon">💝</div>
                    <div className="stat-content">
                      <div className="stat-number">10,000+</div>
                      <div className="stat-label">{t('livesSaved')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="features-section">
              <h2 className="section-title">{t('whyTrust')}</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🔒</div>
                  <h3>{t('verifiedScreened')}</h3>
                  <p>{t('verifiedDesc')}</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🛡️</div>
                  <h3>{t('smartAvailability')}</h3>
                  <p>{t('smartDesc')}</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⏱️</div>
                  <h3>{t('liveStatus')}</h3>
                  <p>{t('liveDesc')}</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⚡</div>
                  <h3>{t('rapidResponse')}</h3>
                  <p>{t('rapidDesc')}</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🏥</div>
                  <h3>{t('nationwideNetwork')}</h3>
                  <p>{t('networkDesc')}</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📱</div>
                  <h3>{t('realtimeTracking')}</h3>
                  <p>{t('trackingDesc')}</p>
                </div>
              </div>
            </section>

            <section className="blood-types-section">
              <h2 className="section-title">{t('bloodTypeCompatibility')}</h2>
              <div className="blood-types-grid">
                {BLOOD_TYPES.map(type => (
                  <div key={type} className={`blood-type-card ${type === 'O-' ? 'universal-donor' : ''} ${type === 'AB+' ? 'universal-receiver' : ''}`}>
                    <div className="blood-type">{type}</div>
                    {type === 'O-' && <div className="universal-badge">{language === 'en' ? 'Universal Donor' : 'সর্বজনীন দাতা'}</div>}
                    {type === 'AB+' && <div className="receiver-badge">{language === 'en' ? 'Universal Receiver' : 'সর্বজনীন গ্রহীতা'}</div>}
                  </div>
                ))}
              </div>
              <div className="compatibility-info">
                <p dangerouslySetInnerHTML={{ __html: t('compatibilityInfo') }} />
              </div>
            </section>

            <section className="emergency-cta">
              <div className="emergency-content">
                <div className="emergency-icon">🩺</div>
                <div className="emergency-text">
                  <h2>{t('needImmediateAssistance')}</h2>
                  <p>{t('emergencyDesc')}</p>
                </div>
                <button className="emergency-btn" onClick={() => setActivePage('donors')}>
                  {t('findDonorsNow')}
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Donors Page */}
        {activePage === 'donors' && (
          <DonorsPage
            selectedBloodGroup={selectedBloodGroup}
            setSelectedBloodGroup={setSelectedBloodGroup}
            locationSearch={locationSearch}
            setLocationSearch={setLocationSearch}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedUrgency={selectedUrgency}
            setSelectedUrgency={setSelectedUrgency}
            filteredDonors={filteredDonors}
            userLocation={userLocation}
            // onDetectLocation={detectUserLocation}
            onClearFilters={clearAllFilters}
            onContactDonor={handleContactDonor}
            onViewDonorProfile={handleViewDonorProfile}
            onRegisterDonor={() => setShowRegistration(true)}
            locationSuggestions={getLocationSuggestions}
            onLocationSelect={handleLocationSelect}
            getSearchSummary={getSearchSummary}
            onRecordDonation={handleRecordDonation}
          />
        )}

        {/* Profile Page */}
        {activePage === 'profile' && enhancedCurrentUser && (
          <ProfilePage 
            user={enhancedCurrentUser} 
            onAddDonationRecord={(record) => handleAddDonationRecord(enhancedCurrentUser.id, record)}
          />
        )}
      </main>

      {/* Modals */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        loginStep={loginStep}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        verificationCode={verificationCode}
        setVerificationCode={setVerificationCode}
        onSendCode={handleSendCode}
        onVerifyCode={handleVerifyCode}
        onBackToPhone={() => setLoginStep('phone')}
        isLoading={isLoading}
      />

      <RegistrationModal
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
        registrationForm={registrationForm}
        onRegistrationChange={handleRegistrationChange}
        onSubmit={handleRegistrationSubmit}
        showToast={showToast}
        bloodTypes={BLOOD_TYPES}
        cities={CITIES}
        genders={GENDERS}
        availabilityOptions={AVAILABILITY_OPTIONS}
        isLoading={isLoading}
      />

      <DonorProfileModal
        isOpen={!!selectedDonor}
        onClose={closeDonorProfile}
        donor={selectedDonor}
        onContactDonor={handleContactDonor}
        isCurrentUser={selectedDonor?.isCurrentUser}
        onRecordDonation={handleRecordDonation}
      />

      {/* Toast / popup message */}
      {toast.visible && (
        <div className={`app-toast ${toast.type || 'info'}`} role="status" aria-live="polite">
          <div className="app-toast-inner">{toast.message}</div>
          <button className="app-toast-close" onClick={() => setToast({ visible: false, message: '', type: 'info' })}>{t('close')}</button>
        </div>
      )}

      {/* Footer */}
      <Footer 
        onNavigate={setActivePage}
        onRegisterDonor={() => setShowRegistration(true)}
      />
    </div>
  );
}

// Enhanced Donors Page Component with Donation Status
const DonorsPage = ({
  selectedBloodGroup,
  setSelectedBloodGroup,
  locationSearch,
  setLocationSearch,
  selectedLocation,
  setSelectedLocation,
  selectedUrgency,
  setSelectedUrgency,
  filteredDonors,
  userLocation,
  onDetectLocation,
  onClearFilters,
  onContactDonor,
  onViewDonorProfile,
  onRegisterDonor,
  locationSuggestions,
  onLocationSelect,
  getSearchSummary,
  onRecordDonation
}) => {
  const { t, language } = useTranslation();
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [expandedDonorId, setExpandedDonorId] = useState(null); // Track which donor is expanded

  // Filter donors by availability status
  const availabilityFilteredDonors = useMemo(() => {
    if (availabilityFilter === 'all') return filteredDonors;
    return filteredDonors.filter(donor => {
      const status = getDonationStatus(donor.lastDonation);
      return availabilityFilter === 'available' 
        ? status === DONATION_STATUS.AVAILABLE
        : status === DONATION_STATUS.UNAVAILABLE;
    });
  }, [filteredDonors, availabilityFilter]);

  // Toggle donor expansion
  const toggleDonorExpansion = (donorId) => {
    if (expandedDonorId === donorId) {
      setExpandedDonorId(null); // Collapse if already expanded
    } else {
      setExpandedDonorId(donorId); // Expand this donor
    }
  };

  // Close all expanded donors
  const collapseAllDonors = () => {
    setExpandedDonorId(null);
  };

  return (
    <div className="donors-page">
      <div className="page-header">
        <h1>{t('findBloodDonorsTitle')}</h1>
        <p>{t('findDonorsSubtitle')}</p>
      </div>

      {/* Location Detection */}
      <div className="location-detection">
        <button
          className="detect-location-btn"
          onClick={() => window.open('https://www.google.com/maps', '_blank')}
        >
          <span className="btn-icon">📍</span>
          {userLocation
            ? `${language === 'en' ? 'Location' : 'অবস্থান'}: ${userLocation}`
            : t('detectLocation')}
        </button>
      </div>


      {/* Enhanced Availability Filter */}
      <div className="availability-filter-section">
        <div className="filter-header">
          <span className="filter-icon">🩸</span>
          <h3>{t('donorAvailability')}</h3>
        </div>
        <div className="availability-filters">
          <button 
            className={`availability-filter-btn ${availabilityFilter === 'all' ? 'active' : ''}`}
            onClick={() => setAvailabilityFilter('all')}
          >
            {t('allDonors')}
          </button>
          <button 
            className={`availability-filter-btn ${availabilityFilter === 'available' ? 'active' : ''}`}
            onClick={() => setAvailabilityFilter('available')}
          >
            {t('availableNow')}
          </button>
          <button 
            className={`availability-filter-btn ${availabilityFilter === 'unavailable' ? 'active' : ''}`}
            onClick={() => setAvailabilityFilter('unavailable')}
          >
            {t('recentlyDonated')}
          </button>
        </div>
      </div>

      {/* Search Summary */}
      {(selectedBloodGroup || selectedLocation) && (
        <div className="search-summary">
          <div className="summary-content">
            <span className="summary-icon">🔍</span>
            <div className="summary-text">
              <strong>{t('searchResults')}</strong> {getSearchSummary()}
            </div>
            <button className="clear-search" onClick={onClearFilters}>
              <span className="btn-icon">🗑️</span>
              {t('clear')}
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Search System */}
      <div className="search-system-enhanced">
        <div className="search-header-card">
          <div className="search-header-content">
            <h2>{t('findCompatibleDonors')}</h2>
            <p>{t('searchDescription')}</p>
          </div>
          <button 
            className={`advanced-toggle ${showAdvancedFilters ? 'active' : ''}`}
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            ⚙️ {showAdvancedFilters ? t('hideAdvancedFilters') : t('showAdvancedFilters')}
          </button>
        </div>

        {/* Main Search Filters */}
        <div className="enhanced-search-filters">
          <div className="filters-grid-main">
            {/* Blood Group Section */}
            <div className="filter-section-card">
              <div className="filter-header">
                <span className="filter-icon">💉</span>
                <h3>{t('bloodGroupRequired')}</h3>
              </div>
              <div className="blood-group-grid-enhanced">
                {BLOOD_TYPES.map(group => (
                  <button
                    key={group}
                    className={`blood-type-btn ${selectedBloodGroup === group ? 'active' : ''} ${
                      group === 'O-' ? 'universal-donor' : group === 'AB+' ? 'universal-receiver' : ''
                    }`}
                    onClick={() => setSelectedBloodGroup(group === selectedBloodGroup ? '' : group)}
                  >
                    {group}
                    {group === 'O-' && <span className="type-badge">{language === 'en' ? 'Universal' : 'সর্বজনীন'}</span>}
                    {group === 'AB+' && <span className="type-badge">{language === 'en' ? 'Receiver' : 'গ্রহীতা'}</span>}
                  </button>
                ))}
                <button
                  className={`blood-type-btn clear-all ${!selectedBloodGroup ? 'active' : ''}`}
                  onClick={() => setSelectedBloodGroup('')}
                >
                  {language === 'en' ? 'All Types' : 'সব ধরন'}
                </button>
              </div>
            </div>

            {/* Location Section */}
            <div className="filter-section-card">
              <div className="filter-header">
                <span className="filter-icon">📍</span>
                <h3>{t('searchLocation')}</h3>
              </div>
              <div className="location-search-enhanced">
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    placeholder={t('enterCityOrArea')}
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    className="location-input-enhanced"
                    dir={language === 'bn' ? 'rtl' : 'ltr'}
                  />
                  <span className="search-icon">🔍</span>
                </div>
                
                {locationSearch && locationSuggestions.length > 0 && (
                  <div className="location-suggestions-enhanced">
                    {locationSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="suggestion-item-enhanced"
                        onClick={() => onLocationSelect(suggestion)}
                      >
                        <span className="suggestion-icon">📍</span>
                        <span className="suggestion-text">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Location Pills */}
              <div className="quick-locations-section">
                <label className="quick-locations-label">{t('popularAreas')}</label>
                <div className="location-pills">
                  {['Dhaka - Gulshan', 'Dhaka - Dhanmondi', 'Cumilla - Kandirpar', 'Chittagong - Agrabad', 'Sylhet - Zindabazar'].map(area => (
                    <button
                      key={area}
                      className={`location-pill ${selectedLocation === area ? 'active' : ''}`}
                      onClick={() => onLocationSelect(area)}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showAdvancedFilters && (
            <div className="advanced-filters-panel">
              <div className="advanced-filters-grid">
                {/* Availability Filter */}
                <div className="filter-section-card">
                  <div className="filter-header">
                    <span className="filter-icon">⚡</span>
                    <h3>{t('availabilityFilter')}</h3>
                  </div>
                  <div className="filter-options-grid">
                    <label className="filter-option">
                      <input
                        type="radio"
                        name="urgency"
                        checked={selectedUrgency === 'all'}
                        onChange={() => setSelectedUrgency('all')}
                      />
                      <span className="option-content">
                        <span className="option-icon">👥</span>
                        <span className="option-text">{t('allDonorsFilter')}</span>
                      </span>
                    </label>
                    
                    <label className="filter-option emergency">
                      <input
                        type="radio"
                        name="urgency"
                        checked={selectedUrgency === 'emergency'}
                        onChange={() => setSelectedUrgency('emergency')}
                      />
                      <span className="option-content">
                        <span className="option-icon">🚨</span>
                        <span className="option-text">{t('emergencyReady')}</span>
                        <span className="emergency-badge">URGENT</span>
                      </span>
                    </label>
                    
                    <label className="filter-option">
                      <input
                        type="radio"
                        name="urgency"
                        checked={selectedUrgency === 'verified'}
                        onChange={() => setSelectedUrgency('verified')}
                      />
                      <span className="option-content">
                        <span className="option-icon">✅</span>
                        <span className="option-text">{t('verifiedOnly')}</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="filter-section-card">
                  <div className="filter-header">
                    <span className="filter-icon">🎯</span>
                    <h3>{t('additionalFilters')}</h3>
                  </div>
                  <div className="additional-filters">
                    <label className="additional-filter">
                      <input type="checkbox" defaultChecked />
                      <span className="filter-checkmark"></span>
                      <span className="filter-label">{t('recentDonors')}</span>
                    </label>
                    <label className="additional-filter">
                      <input type="checkbox" />
                      <span className="filter-checkmark"></span>
                      <span className="filter-label">{t('nearMyLocation')}</span>
                    </label>
                    <label className="additional-filter">
                      <input type="checkbox" defaultChecked />
                      <span className="filter-checkmark"></span>
                      <span className="filter-label">{t('availableToday')}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filter Actions */}
          <div className="filter-actions-enhanced">
            <div className="results-count-badge">
              <span className="count-number">{availabilityFilteredDonors.length}</span>
              <span className="count-label">{t('donorsFound')}</span>
            </div>
            <div className="action-buttons">
              
              <button className="clear-filters-btn" onClick={onClearFilters}>
                <span className="btn-icon">🗑️</span>
                {t('clearAllFilters')}
              </button>
              <button className="register-cta-btn" onClick={onRegisterDonor}>
                <span className="btn-icon">❤️</span>
                {t('becomeADonor')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Donors Grid */}
      <div className="donors-grid-section">
        {availabilityFilteredDonors.length === 0 ? (
          <div className="no-results-enhanced">
            <div className="no-results-illustration">🔍</div>
            <div className="no-results-content">
              <h3>{language === 'en' ? 'No donors found matching your criteria' : 'আপনার মানদণ্ডের সাথে মিলে এমন কোনো রক্তদাতা পাওয়া যায়নি'}</h3>
              <p>{language === 'en' ? 'Try adjusting your search filters or explore different locations' : 'আপনার অনুসন্ধান ফিল্টার সামঞ্জস্য করুন বা বিভিন্ন অবস্থান অন্বেষণ করুন'}</p>
              <div className="no-results-actions">
                <button className="btn-primary" onClick={onClearFilters}>
                  {language === 'en' ? 'Show All Donors' : 'সব রক্তদাতা দেখান'}
                </button>
                <button className="btn-secondary" onClick={onRegisterDonor}>
                  {t('registerAsDonor')}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="donors-grid-header">
              <h3>{t('availableDonorsTitle')}</h3>
              <div className="sort-options">
                <select className="sort-select">
                  <option>{t('sortBy')}</option>
                  <option>{t('sortByRecent')}</option>
                  <option>{t('sortByCount')}</option>
                  <option>{t('sortByRating')}</option>
                </select>
                {expandedDonorId && (
                  <button 
                    className="collapse-all-btn btn-tertiary btn-sm"
                    onClick={collapseAllDonors}
                  >
                    {language === 'en' ? 'Collapse All' : 'সব বন্ধ করুন'}
                  </button>
                )}
              </div>
            </div>
            
            <div className="donors-grid-enhanced">
              {availabilityFilteredDonors.map(donor => {
                const isExpanded = expandedDonorId === donor.id;
                
                return (
                  <div 
                    key={donor.id} 
                    className={`donor-card-enhanced ${donor.isCurrentUser ? 'current-user' : ''} ${isExpanded ? 'expanded' : 'compact'}`}
                  >
                    {donor.isCurrentUser && <div className="current-user-ribbon">{t('yourProfile')}</div>}
                    
                    {/* COMPACT VIEW - Only basic info */}
                    <div className="donor-card-compact">
                      <div className="donor-card-header">
                        <div className="donor-avatar-section">
                          <div className="donor-avatar-enhanced">
                            {donor.image && typeof donor.image === 'string' && donor.image.startsWith('data:') ? (
                              <img src={donor.image} alt={donor.name} />
                            ) : (
                              <span className="avatar-fallback">{donor.image}</span>
                            )}
                          </div>
                          {donor.verified && <div className="verified-badge-enhanced">✅</div>}
                        </div>
                      
                        <div className="donor-main-info">
                          <h3 className="donor-name">
                            {donor.name} 
                            {donor.isCurrentUser && <span className="you-indicator">{t('you')}</span>}
                          </h3>
                          <div className="donor-badges-enhanced">
                            <span className={`blood-badge-enhanced ${donor.bloodType === 'O-' ? 'universal' : ''}`}>
                              {donor.bloodType}
                              {donor.bloodType === 'O-' && <span className="universal-indicator">★</span>}
                            </span>
                            <span className="level-badge">{donor.badge}</span>
                          </div>
                        </div>
                        
                        <div className="donor-stats-enhanced">
                          <div className="stat-item">
                            <span className="stat-icon">⭐</span>
                            <span className="stat-value">{donor.rating}</span>
                          </div>
                          <div className="stat-item">
                            <span className="stat-icon">🩸</span>
                            <span className="stat-value">{donor.donations}</span>
                          </div>
                        </div>
                      </div>

                      <div className="donor-details-compact">
                        <div className="detail-row">
                          <span className="detail-icon">📍</span>
                          <span className="detail-text">{donor.area}, {donor.city}</span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-icon">⏰</span>
                          <span className="detail-text">{donor.availability}</span>
                        </div>
                      </div>

                      <div className="donation-info-compact">
                        <DonationStatusBadge 
                          lastDonation={donor.lastDonation} 
                          isCurrentUser={donor.isCurrentUser}
                        />
                      </div>

                      <div className="donor-actions-compact">
                        <button 
                          className="contact-btn-primary" 
                          onClick={() => onContactDonor(donor)} 
                          disabled={donor.isCurrentUser || getDonationStatus(donor.lastDonation) === DONATION_STATUS.UNAVAILABLE}
                        >
                          <span className="btn-icon">📞</span>
                          {donor.isCurrentUser ? t('yourProfile') : 
                           getDonationStatus(donor.lastDonation) === DONATION_STATUS.UNAVAILABLE ? t('currentlyUnavailable') : t('contactNow')}
                        </button>
                        <button 
                          className="see-more-btn"
                          onClick={() => toggleDonorExpansion(donor.id)}
                        >
                          <span className="btn-icon">{isExpanded ? '▲' : '▼'}</span>
                          {isExpanded ? (language === 'en' ? 'See Less' : 'কম দেখুন') : (language === 'en' ? 'See More' : 'বিস্তারিত দেখুন')}
                        </button>
                      </div>
                    </div>

                    {/* EXPANDED VIEW - Shows when "See More" is clicked */}
                    {isExpanded && (
                      <div className="donor-card-expanded">
                        <div className="expanded-content">
                          <div className="donor-details-enhanced">
                            <div className="detail-row">
                              <span className="detail-icon">👤</span>
                              <span className="detail-text">{donor.gender}, {donor.age} {language === 'en' ? 'years' : 'বছর'}</span>
                            </div>
                            {donor.occupation && (
                              <div className="detail-row">
                                <span className="detail-icon">💼</span>
                                <span className="detail-text">{donor.occupation}</span>
                              </div>
                            )}
                            <div className="detail-row">
                              <span className="detail-icon">📞</span>
                              <span className="detail-text">{donor.phone}</span>
                            </div>
                            <div className="detail-row">
                              <span className="detail-icon">📧</span>
                              <span className="detail-text">{donor.email}</span>
                            </div>
                            {donor.languages && (
                              <div className="detail-row">
                                <span className="detail-icon">🗣️</span>
                                <span className="detail-text">{donor.languages.join(', ')}</span>
                              </div>
                            )}
                          </div>

                          <div className="donation-history-expanded">
                            <h4>{language === 'en' ? 'Recent Donations' : 'সম্প্রতি রক্তদান'}</h4>
                            {donor.donationHistory && donor.donationHistory.length > 0 ? (
                              <div className="recent-donations-list">
                                {donor.donationHistory.slice(0, 3).map((donation, index) => (
                                  <div key={index} className="recent-donation-item">
                                    <span className="donation-date">
                                      {new Date(donation.date).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')}
                                    </span>
                                    <span className="donation-location">{donation.location}</span>
                                    <span className="donation-type">{donation.type}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="no-donation-history">
                                {language === 'en' ? 'No donation history available' : 'রক্তদানের ইতিহাস নেই'}
                              </p>
                            )}
                          </div>

                          <div className="expanded-actions">
                            <button 
                              className="profile-btn-secondary" 
                              onClick={() => onViewDonorProfile(donor)}
                            >
                              <span className="btn-icon">👁️</span>
                              {t('viewProfile')}
                            </button>
                            {donor.isCurrentUser && getDonationStatus(donor.lastDonation) === DONATION_STATUS.AVAILABLE && (
                              <button 
                                className="record-donation-btn"
                                onClick={() => onRecordDonation(donor)}
                              >
                                <span className="btn-icon">➕</span>
                                {t('recordDonation')}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Enhanced Profile Page Component
const ProfilePage = ({ user, onAddDonationRecord }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="profile-page">
 
      <div className="page-header">
        <h1>{t('yourDonorProfile')}</h1>
        <p>{t('profileSubtitle')}</p>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          {t('profileTab')}
        </button>
        <button 
          className={`tab-button ${activeTab === 'donations' ? 'active' : ''}`}
          onClick={() => setActiveTab('donations')}
        >
          {t('donationHistoryTab')}
        </button>
        <button 
          className={`tab-button ${activeTab === 'availability' ? 'active' : ''}`}
          onClick={() => setActiveTab('availability')}
        >
          {t('availabilityTab')}
        </button>
      </div>

      {activeTab === 'profile' && (
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar-large">
                {user.image && typeof user.image === 'string' && user.image.startsWith('data:') ? (
                  <img src={user.image} alt={user.name || 'avatar'} />
                ) : (
                  <span className="avatar-fallback">{user.image || '👤'}</span>
                )}
              </div>
              <div className="profile-info">
                <h2>{user.name}</h2>
                <div className="profile-badges">
                  <span className={`blood-type-large ${user.bloodType === 'O-' ? 'universal' : ''}`}>
                    {user.bloodType}
                  </span>
                  <span className="donor-level-large">{user.badge}</span>
                  <span className="verified-badge-large">✅ {t('verifiedOnly')}</span>
                </div>
                <div className="profile-stats">
                  <div className="stat">
                    <div className="stat-number">{user.donations}</div>
                    <div className="stat-label">{t('totalDonations')}</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">⭐ {user.rating}</div>
                    <div className="stat-label">{t('donorRating')}</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">{user.emergencyAvailable ? t('yes') : t('no')}</div>
                    <div className="stat-label">{t('emergencyReadyProfile')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced profile details with donation status */}
            <div className="profile-details">
              <div className="detail-section">
                <h3>{t('availability')}</h3>
                <DonationStatusBadge lastDonation={user.lastDonation} isCurrentUser={true} />
              </div>

              <div className="detail-section">
                <h3>{t('personalInformation')}</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">{t('fullName')}</span>
                    <span className="detail-value">{user.name}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t('bloodType')}</span>
                    <span className="detail-value">{user.bloodType}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t('gender')}</span>
                    <span className="detail-value">{user.gender}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t('age')}</span>
                    <span className="detail-value">{user.age} {t('years')}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t('weight')}</span>
                    <span className="detail-value">{user.weight}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t('height')}</span>
                    <span className="detail-value">{user.height}</span>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>{t('locationAvailability')}</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">{t('city')}</span>
                    <span className="detail-value">{user.city}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t('area')}</span>
                    <span className="detail-value">{user.area}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t('availability')}</span>
                    <span className="detail-value highlight">{user.availability}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t('emergencyReadyProfile')}</span>
                    <span className="detail-value">{user.emergencyAvailable ? '✅ ' + t('yes') : '❌ ' + t('no')}</span>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>{t('contactInformation')}</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">{t('phone')}</span>
                    <span className="detail-value">{user.phone}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t('email')}</span>
                    <span className="detail-value">{user.email}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-achievements">
              <h3>{t('yourAchievements')}</h3>
              <div className="achievements-list">
                {user?.achievements?.map((achievement, index) => (
                  <span key={index} className="achievement-badge">{achievement}</span>
                ))}
              </div>
            </div>

            <div className="profile-actions">
              <button className="btn-primary large">{t('editProfile')}</button>
              <button className="btn-secondary">{t('updateAvailability')}</button>
              <button className="btn-tertiary" onClick={() => setActiveTab('donations')}>
                {t('donationHistoryTab')}
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'donations' && (
        <div className="donations-tab">
          <DonationHistory 
            donations={user.donationHistory || []}
            onAddDonation={onAddDonationRecord}
            isCurrentUser={true}
          />
        </div>
      )}

      {activeTab === 'availability' && (
        <div className="availability-tab">
          <div className="availability-card">
            <h3>🩸 {t('availability')}</h3>
            <div className="availability-info">
              <DonationStatusBadge lastDonation={user.lastDonation} isCurrentUser={true} />
              
              {user.nextAvailableDate && getDonationStatus(user.lastDonation) === DONATION_STATUS.UNAVAILABLE && (
                <div className="availability-details">
                  <h4>{t('availableAgain')}</h4>
                  <div className="available-date-display">
                    {user.nextAvailableDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <p className="availability-note">
                    {t('availabilityNote')}
                  </p>
                </div>
              )}
              
              {getDonationStatus(user.lastDonation) === DONATION_STATUS.AVAILABLE && (
                <div className="availability-ready">
                  <div className="ready-icon">🎉</div>
                  <h4>{t('youCanDonateNow')}</h4>
                  <p>{t('availableForDonationDesc')}</p>
                  <button className="btn-primary large">
                    {t('findDonorsNow')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Registration Modal Component
const RegistrationModal = ({
  isOpen,
  onClose,
  registrationForm,
  onRegistrationChange,
  onSubmit,
  showToast,
  bloodTypes,
  cities,
  genders,
  availabilityOptions,
  isLoading
}) => {
  const { t, language } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return registrationForm.fullName && registrationForm.phone && registrationForm.email && registrationForm.image;
      case 2:
        return registrationForm.bloodGroup && registrationForm.gender && registrationForm.dateOfBirth && 
               registrationForm.weight && registrationForm.height;
      case 3:
        return registrationForm.city && registrationForm.area;
      default:
        return false;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="registration-modal">
      <div className="modal-header">
        <h2>{t('registerAsBloodDonor')}</h2>
        <button className="close-btn" onClick={onClose}>{t('close')}</button>
      </div>

      {/* Progress Bar */}
      <div className="registration-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        <div className="progress-steps">
          <span className={`step ${currentStep >= 1 ? 'active' : ''}`}>1. {language === 'en' ? 'Personal' : 'ব্যক্তিগত'}</span>
          <span className={`step ${currentStep >= 2 ? 'active' : ''}`}>2. {language === 'en' ? 'Medical' : 'চিকিৎসা'}</span>
          <span className={`step ${currentStep >= 3 ? 'active' : ''}`}>3. {language === 'en' ? 'Location' : 'অবস্থান'}</span>
        </div>
      </div>

      <form onSubmit={onSubmit} className="registration-form">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="form-step">
            <h3>{t('personalInfo')}</h3>
            <div className="form-grid">
              <div className="form-group photo-upload">
                <label>{t('Upload Photo Optional *') || (language === 'en' ? 'Upload Photo (optional)' : 'ছবি আপলোড (ঐচ্ছিক)')}</label>
                <div className="photo-input-row">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files && e.target.files[0];
                        if (!file) return;
                        if (!file.type.startsWith('image/')) {
                          if (typeof showToast === 'function') showToast(language === 'en' ? 'Please upload an image file.' : 'অনুগ্রহ করে একটি ইমেজ ফাইল আপলোড করুন।');
                          else alert(language === 'en' ? 'Please upload an image file.' : 'অনুগ্রহ করে একটি ইমেজ ফাইল আপলোড করুন।');
                          return;
                        }
                        if (file.size > 3 * 1024 * 1024) {
                          if (typeof showToast === 'function') showToast(language === 'en' ? 'Image too large (max 3MB).' : 'ছবি বড় (সর্বোচ্চ 3MB)।');
                          else alert(language === 'en' ? 'Image too large (max 3MB).' : 'ছবি বড় (সর্বোচ্চ 3MB)।');
                          return;
                        }
                        const reader = new FileReader();
                        reader.onload = () => {
                          onRegistrationChange('image', reader.result);
                        };
                        reader.readAsDataURL(file);
                      }}
                    />
                  {registrationForm.image && (
                    <div className="photo-preview">
                      {typeof registrationForm.image === 'string' && registrationForm.image.startsWith('data:') ? (
                        <img src={registrationForm.image} alt="preview" />
                      ) : (
                        <span className="avatar-fallback">{registrationForm.image}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group full-width">
                <label>{t('fullNameRequired')}</label>
                <input 
                  type="text" 
                  required 
                  value={registrationForm.fullName}
                  onChange={(e) => onRegistrationChange('fullName', e.target.value)}
                  placeholder={language === 'en' ? "Enter your full name as per NID" : "এনআইডি অনুযায়ী আপনার পূর্ণ নাম লিখুন"}
                  dir={language === 'bn' ? 'rtl' : 'ltr'}
                />
              </div>
              
              <div className="form-group">
                <label>{t('emailAddressRequired')}</label>
                <input 
                  type="email" 
                  required 
                  value={registrationForm.email}
                  onChange={(e) => onRegistrationChange('email', e.target.value)}
                  placeholder={language === 'en' ? "your.email@example.com" : "your.email@example.com"}
                />
              </div>
              
              <div className="form-group">
                <label>{t('phoneNumberRequired')}</label>
                <input 
                  type="tel" 
                  required 
                  value={registrationForm.phone}
                  onChange={(e) => onRegistrationChange('phone', e.target.value.replace(/\D/g, '').slice(0, 11))}
                  placeholder="01XXXXXXXXX"
                  maxLength="11"
                />
              </div>

              <div className="form-group">
                <label>{t('emergencyContactLabel')}</label>
                <input 
                  type="text" 
                  value={registrationForm.emergencyContact}
                  onChange={(e) => onRegistrationChange('emergencyContact', e.target.value)}
                  placeholder={language === 'en' ? "Alternative contact number" : "বিকল্প যোগাযোগ নম্বর"}
                  dir={language === 'bn' ? 'rtl' : 'ltr'}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Medical Information */}
        {currentStep === 2 && (
          <div className="form-step">
            <h3>{t('medicalInfo')}</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>{t('bloodGroupRequired')}</label>
                <select 
                  required 
                  value={registrationForm.bloodGroup}
                  onChange={(e) => onRegistrationChange('bloodGroup', e.target.value)}
                >
                  <option value=""> {language === 'en' ? 'Select Blood Group' : 'রক্তের গ্রুপ নির্বাচন করুন'} </option>
                  {bloodTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>{t('genderRequired')}</label>
                <select 
                  required 
                  value={registrationForm.gender}
                  onChange={(e) => onRegistrationChange('gender', e.target.value)}
                >
                  <option value=""> {language === 'en' ? 'Select Gender' : 'লিঙ্গ নির্বাচন করুন'}</option>
                  {genders.map(gender => <option key={gender} value={gender}>{gender}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>{t('dateOfBirth')}</label>
                <input 
                  type="date" 
                  required
                  value={registrationForm.dateOfBirth}
                  onChange={(e) => onRegistrationChange('dateOfBirth', e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                />
                {registrationForm.age && (
                  <div className="age-display">{language === 'en' ? 'Age' : 'বয়স'}: {registrationForm.age} {language === 'en' ? 'years' : 'বছর'}</div>
                )}
              </div>

              <div className="form-group">
                <label>{t('weightRequired')}</label>
                <input 
                  type="number" 
                  required 
                  min="45"
                  max="150"
                  value={registrationForm.weight}
                  onChange={(e) => onRegistrationChange('weight', e.target.value)}
                  placeholder={language === 'en' ? "Minimum 45kg" : "ন্যূনতম ৪৫ কেজি"}
                />
                <div className="validation-note">{language === 'en' ? 'Minimum 45 kg required' : 'ন্যূনতম ৪৫ কেজি প্রয়োজন'}</div>
              </div>

              <div className="form-group">
                <label>{t('heightLabel')}</label>
                <input 
                  type="number" 
                  value={registrationForm.height}
                  onChange={(e) => onRegistrationChange('height', e.target.value)}
                  placeholder={language === 'en' ? "Height in inches" : "ইঞ্চিতে উচ্চতা"}
                />
              </div>

              <div className="form-group full-width">
                <label>{t('medicalConditions')} <i>({language === 'en' ? 'optional' : 'ঐচ্ছিক'})</i></label>
                <select 
                  value={registrationForm.hasDisease}
                  onChange={(e) => onRegistrationChange('hasDisease', e.target.value)}
                >
                  <option value="">{language === 'en' ? 'Select if applicable' : 'প্রযোজ্য হলে নির্বাচন করুন'}</option>
                  <option value="none">{language === 'en' ? 'No known medical conditions' : 'কোনো পরিচিত চিকিৎসা সমস্যা নেই'}</option>
                  <option value="hypertension">{language === 'en' ? 'Hypertension' : 'উচ্চ রক্তচাপ'}</option>
                  <option value="diabetes">{language === 'en' ? 'Diabetes' : 'ডায়াবেটিস'}</option>
                  <option value="heart-disease">{language === 'en' ? 'Heart Disease' : 'হৃদরোগ'}</option>
                  <option value="other">{language === 'en' ? 'Other' : 'অন্যান্য'}</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>{t('recentSurgery')}</label>
                <input 
                  type="text" 
                  value={registrationForm.recentSurgery}
                  onChange={(e) => onRegistrationChange('recentSurgery', e.target.value)}
                  placeholder={language === 'en' ? "Type of surgery and date" : "সার্জারির ধরন এবং তারিখ"}
                  dir={language === 'bn' ? 'rtl' : 'ltr'}
                />
              </div>

              <div className="form-group full-width">
                <label>{t('currentMedications')}</label>
                <textarea 
                  value={registrationForm.medications}
                  onChange={(e) => onRegistrationChange('medications', e.target.value)}
                  placeholder={language === 'en' ? "List any medications you're currently taking" : "আপনি বর্তমানে যে ওষুধগুলো খাচ্ছেন তার তালিকা করুন"}
                  rows="2"
                  dir={language === 'bn' ? 'rtl' : 'ltr'}
                />
              </div>

              <div className="form-group full-width">
                <label>{t('travelHistory')}</label>
                <input 
                  type="text" 
                  value={registrationForm.travelHistory}
                  onChange={(e) => onRegistrationChange('travelHistory', e.target.value)}
                  placeholder={language === 'en' ? "Countries or cities visited recently" : "সম্প্রতি ভ্রমণ করা দেশ বা শহর"}
                  dir={language === 'bn' ? 'rtl' : 'ltr'}
                />
              </div>
            </div>

            <div className="eligibility-checklist">
              <h4>{t('eligibilityChecklist')}</h4>
              <div className="checklist-item">
                <input type="checkbox" required /> 
                <span>{t('atLeast18')}</span>
              </div>
              <div className="checklist-item">
                <input type="checkbox" required />
                <span>{t('weighAtLeast45')}</span>
              </div>
              <div className="checklist-item">
                <input type="checkbox" required />
                <span>{t('goodHealth')}</span>
              </div>
              <div className="checklist-item">
                <input type="checkbox" required />
                <span>{t('notDonatedRecently')}</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Location & Preferences */}
        {currentStep === 3 && (
          <div className="form-step">
            <h3>{t('locationPref')}</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>{t('city')} *</label>
                <select 
                  required 
                  value={registrationForm.city}
                  onChange={(e) => onRegistrationChange('city', e.target.value)}
                >
                  <option value="">{language === 'en' ? 'Select City' : 'শহর নির্বাচন করুন'}</option>
                  {cities.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>{t('area')} *</label>
                <input 
                  type="text" 
                  required 
                  value={registrationForm.area}
                  onChange={(e) => onRegistrationChange('area', e.target.value)}
                  placeholder={language === 'en' ? "Your specific area or neighborhood" : "আপনার নির্দিষ্ট এলাকা বা আশেপাশের এলাকা"}
                  dir={language === 'bn' ? 'rtl' : 'ltr'}
                />
              </div>

              <div className="form-group full-width">
                <label>{t('availability')} *</label>
                <select 
                  required
                  value={registrationForm.availability}
                  onChange={(e) => onRegistrationChange('availability', e.target.value)}
                >
                  <option value="">{language === 'en' ? 'Select Availability' : 'উপলব্ধতা নির্বাচন করুন'}</option>
                  {availabilityOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="form-group full-width">
                <label>{language === 'en' ? 'Last Blood Donation Date (if any)' : 'শেষ রক্তদানের তারিখ (যদি থাকে)'}</label>
                <input 
                  type="date" 
                  value={registrationForm.lastDonation}
                  onChange={(e) => onRegistrationChange('lastDonation', e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                />
                {registrationForm.lastDonation && (
                  <div className="validation-note">
                    {language === 'en' ? 'Your donation status will be automatically managed. You\'ll be unavailable for 3 months after donation.' : 'আপনার রক্তদানের স্ট্যাটাস স্বয়ংক্রিয়ভাবে পরিচালিত হবে। দানের 3 মাস পর আপনি অনুপলব্ধ হবেন।'}
                  </div>
                )}
              </div>
            </div>

            <div className="privacy-notice">
              <h4>{t('privacyConsent')}</h4>
              <p>
                {t('privacyText')}
              </p>
            </div>
          </div>
        )}

        <div className="form-actions">
          {currentStep > 1 && (
            <button type="button" className="btn-secondary" onClick={prevStep}>
              {t('previousStep')}
            </button>
          )}
          
          <div className="action-spacer"></div>
          
          {currentStep < totalSteps ? (
            <button 
              type="button" 
              className={`btn-primary ${!isStepValid(currentStep) ? 'btn-disabled' : ''}`} 
              onClick={() => {
                if (isStepValid(currentStep)) nextStep();
                else {
                  // Build missing fields message
                  const missing = [];
                  if (!registrationForm.fullName) missing.push(t('fullNameRequired') || (language === 'en' ? 'Full Name' : 'পূর্ণ নাম'));
                  if (!registrationForm.phone) missing.push(t('phoneNumberRequired') || (language === 'en' ? 'Phone' : 'ফোন'));
                  if (!registrationForm.email) missing.push(t('emailAddressRequired') || (language === 'en' ? 'Email' : 'ইমেইল'));
                  if (!registrationForm.image) missing.push(language === 'en' ? 'Photo' : 'ছবি');
                  const msg = (language === 'en' ? 'Please fill required fields: ' : 'অনুগ্রহ করে প্রয়োজনীয় তথ্য পূরণ করুন: ') + missing.join(', ');
                  if (typeof showToast === 'function') showToast(msg, 'error');
                  else alert(msg);
                }
              }}
            >
              {t('nextStep')}
            </button>
          ) : (
            <button 
              type="button" 
              className={`btn-submit ${!isStepValid(currentStep) || isLoading ? 'btn-disabled' : ''}`} 
              onClick={() => {
                if (isStepValid(currentStep)) {
                  // call parent submit handler - send a synthetic event to satisfy preventDefault
                  try {
                    onSubmit && onSubmit({ preventDefault: () => {} });
                  } catch (err) {
                    console.error('submit error', err);
                  }
                } else {
                  const missing = [];
                  if (!registrationForm.city) missing.push(t('city') || (language === 'en' ? 'City' : 'শহর'));
                  if (!registrationForm.area) missing.push(t('area') || (language === 'en' ? 'Area' : 'এলাকা'));
                  if (!registrationForm.bloodGroup) missing.push(t('bloodGroupRequired') || (language === 'en' ? 'Blood Group' : 'রক্তের গ্রুপ'));
                  if (!registrationForm.gender) missing.push(t('genderRequired') || (language === 'en' ? 'Gender' : 'লিঙ্গ'));
                  // include step1 missing too
                  if (!registrationForm.fullName) missing.push(t('fullNameRequired') || (language === 'en' ? 'Full Name' : 'পূর্ণ নাম'));
                  if (!registrationForm.phone) missing.push(t('phoneNumberRequired') || (language === 'en' ? 'Phone' : 'ফোন'));
                  if (!registrationForm.email) missing.push(t('emailAddressRequired') || (language === 'en' ? 'Email' : 'ইমেইল'));
                  if (!registrationForm.image) missing.push(language === 'en' ? 'Photo' : 'ছবি');
                  const msg = (language === 'en' ? 'Please complete required fields before submitting: ' : 'অনুগ্রহ করে জমা দেওয়ার আগে সমস্ত প্রয়োজনীয় তথ্য সম্পূর্ণ করুন: ') + missing.join(', ');
                  if (typeof showToast === 'function') showToast(msg, 'error');
                  else alert(msg);
                }
              }}
              disabled={isLoading}
            >
              {isLoading ? t('loading') : t('completeRegistration')}
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
};

// Enhanced Donor Profile Modal
const DonorProfileModal = ({ isOpen, onClose, donor, onContactDonor, isCurrentUser, onRecordDonation }) => {
  const { t, language } = useTranslation();
  
  if (!donor) return null;
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="donor-profile-modal">
      <div className="modal-header">
        <h2>{language === 'en' ? 'Donor Profile' : 'রক্তদাতা প্রোফাইল'}</h2>
        <button className="close-btn" onClick={onClose}>{t('close')}</button>
      </div>
      <div className="donor-profile-content">
      <div className="profile-header">
          <div className="profile-avatar">
            {donor.image && typeof donor.image === 'string' && donor.image.startsWith('data:') ? (
              <img src={donor.image} alt={donor.name} />
            ) : (
              <span className="avatar-fallback">{donor.image}</span>
            )}
          </div>
          <div className="profile-info">
            <h3>{donor.name} {isCurrentUser && <span className="you-badge">{t('you')}</span>}</h3>
            <div className="profile-badges">
              <span className={`blood-type-large ${donor.bloodType === 'O-' ? 'universal' : ''}`}>
                {donor.bloodType}
              </span>
              <span className="donor-level">{donor.badge}</span>
              {donor.verified && <span className="verified-badge">✅ {t('verifiedOnly')}</span>}
              {isCurrentUser && <span className="current-badge">👤 {t('yourProfile')}</span>}
            </div>
            <div className="profile-rating">⭐ {donor.rating} ({donor.donations} {language === 'en' ? 'donations' : 'রক্তদান'})</div>
          </div>
        </div>

        {/* Enhanced Donation Status in Modal */}
        <div className="donation-status-modal">
          <DonationStatusBadge lastDonation={donor.lastDonation} isCurrentUser={isCurrentUser} />
        </div>

        <div className="profile-details-grid">
          <div className="detail-section">
            <h4>👤 {t('personalInformation')}</h4>
            <div className="detail-row">
              <span className="detail-label">{t('gender')}</span>
              <span className="detail-value">{donor.gender}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{t('age')}</span>
              <span className="detail-value">{donor.age} {language === 'en' ? 'years' : 'বছর'}</span>
            </div>
            {donor.weight && (
              <div className="detail-row">
                <span className="detail-label">{t('weight')}</span>
                <span className="detail-value">{donor.weight}</span>
              </div>
            )}
            {donor.height && (
              <div className="detail-row">
                <span className="detail-label">{t('height')}</span>
                <span className="detail-value">{donor.height}</span>
              </div>
            )}
            {donor.occupation && (
              <div className="detail-row">
                <span className="detail-label">{language === 'en' ? 'Occupation' : 'পেশা'}</span>
                <span className="detail-value">{donor.occupation}</span>
              </div>
            )}
          </div>

          <div className="detail-section">
            <h4>📍 {t('locationAvailability')}</h4>
            <div className="detail-row">
              <span className="detail-label">{language === 'en' ? 'Location' : 'অবস্থান'}</span>
              <span className="detail-value">{donor.area}, {donor.city}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{t('availability')}</span>
              <span className="detail-value highlight">{donor.availability}</span>
            </div>
            {donor.languages && (
              <div className="detail-row">
                <span className="detail-label">{language === 'en' ? 'Languages' : 'ভাষা'}</span>
                <span className="detail-value">{donor.languages.join(', ')}</span>
              </div>
            )}
          </div>

          <div className="detail-section">
            <h4>🩸 {language === 'en' ? 'Donation Information' : 'রক্তদান তথ্য'}</h4>
            <div className="detail-row">
              <span className="detail-label">{t('lastDonationLabel')}</span>
              <span className="detail-value highlight">
                {donor.lastDonation === 'Never' ? (language === 'en' ? 'Never' : 'কখনও না') : new Date(donor.lastDonation).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{t('totalDonations')}</span>
              <span className="detail-value">{donor.donations}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{t('emergencyAvailable')}</span>
              <span className="detail-value">{donor.emergencyAvailable ? '✅ ' + t('yes') : '❌ ' + t('no')}</span>
            </div>
          </div>

          {/* Enhanced Donation History in Modal */}
          {donor.donationHistory && donor.donationHistory.length > 0 && (
            <div className="detail-section full-width">
              <h4>📋 {language === 'en' ? 'Recent Donation History' : 'সম্প্রতি রক্তদান ইতিহাস'}</h4>
              <div className="recent-donations">
                {formatDonationHistory(donor.donationHistory).slice(0, 3).map((donation, index) => (
                  <div key={donation.id || index} className="recent-donation">
                    <span className="donation-date">{donation.formattedDate}</span>
                    <span className="donation-location">{donation.location}</span>
                    <span className="donation-type">{donation.type}</span>
                  </div>
                ))}
                {donor.donationHistory.length > 3 && (
                  <div className="view-more-donations">
                    + {donor.donationHistory.length - 3} {language === 'en' ? 'more donations' : 'আরো রক্তদান'}
                  </div>
                )}
              </div>
            </div>
          )}

          {donor.medicalInfo && (
            <div className="detail-section full-width">
              <h4>📋 {language === 'en' ? 'Medical Information' : 'চিকিৎসা তথ্য'}</h4>
              <div className="medical-info">{donor.medicalInfo}</div>
            </div>
          )}

          {donor.achievements && donor.achievements.length > 0 && (
            <div className="detail-section full-width">
              <h4>🏆 {language === 'en' ? 'Achievements' : 'অর্জনসমূহ'}</h4>
              <div className="achievements-list">
                {donor.achievements.map((achievement, index) => (
                  <span key={index} className="achievement-badge">{achievement}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {!isCurrentUser && (
          <div className="profile-actions">
            <button 
              className="contact-btn large" 
              onClick={() => onContactDonor(donor)}
              disabled={getDonationStatus(donor.lastDonation) === DONATION_STATUS.UNAVAILABLE}
            >
              📞 {language === 'en' ? 'Contact' : 'যোগাযোগ করুন'} {donor.name}
            </button>
            {getDonationStatus(donor.lastDonation) === DONATION_STATUS.UNAVAILABLE && (
              <div className="unavailable-notice">
                {t('donorUnavailable', { name: donor.name })} {t('willBeAvailable', { days: getDaysUntilAvailable(donor.lastDonation) })}
              </div>
            )}
          </div>
        )}

        {isCurrentUser && (
          <div className="profile-actions">
            <button 
              className="record-donation-btn large"
              onClick={() => onRecordDonation(donor)}
              disabled={getDonationStatus(donor.lastDonation) === DONATION_STATUS.UNAVAILABLE}
            >
              ➕ {t('recordDonation')}
            </button>
            {getDonationStatus(donor.lastDonation) === DONATION_STATUS.UNAVAILABLE && (
              <div className="unavailable-notice">
                {language === 'en' ? 'You can record a new donation when you become available again in' : 'আপনি আবার উপলব্ধ হলে একটি নতুন রক্তদান রেকর্ড করতে পারবেন'} {getDaysUntilAvailable(donor.lastDonation)} {language === 'en' ? 'days.' : 'দিনে।'}
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

// Login Modal Component
const LoginModal = ({ 
  isOpen, onClose, loginStep, phoneNumber, setPhoneNumber, 
  verificationCode, setVerificationCode, onSendCode, onVerifyCode, 
  onBackToPhone, isLoading 
}) => {
  const { t, language } = useTranslation();
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="login-modal">
      <div className="modal-header">
        <h2>{t('loginToApp')}</h2>
        <button className="close-btn" onClick={onClose}>{t('close')}</button>
      </div>
      <div className="login-content">
        {loginStep === 'phone' ? (
          <div className="phone-step">
            <div className="step-icon">📱</div>
            <h3>{t('enterYourPhone')}</h3>
            <p>{language === 'en' ? 'We\'ll send a verification code to your phone' : 'আমরা আপনার ফোনে একটি যাচাইকরণ কোড পাঠাব'}</p>
            
            <div className="phone-input-group">
              <div className="country-code">+880</div>
              <input 
                type="tel" 
                placeholder="1XXXXXXXXX" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 11))}
                className="phone-input" 
                maxLength="11" 
              />
            </div>
            
            <button className="send-code-btn" onClick={onSendCode} disabled={isLoading}>
              {isLoading ? t('loading') : t('sendVerificationCode')}
            </button>
            
            <div className="login-note">
              {language === 'en' ? 'By continuing, you agree to our Terms of Service and Privacy Policy' : 'চালিয়ে যাওয়ার মাধ্যমে, আপনি আমাদের সেবার শর্তাদি এবং গোপনীয়তা নীতি মেনে নিচ্ছেন'}
            </div>
          </div>
        ) : (
          <div className="code-step">
            <div className="step-icon">🔐</div>
            <h3>{t('enterVerificationCode')}</h3>
            <p>{t('verificationSent', { phone: phoneNumber })}</p>
            
            <input 
              type="text" 
              placeholder={language === 'en' ? "Enter 6-digit code" : "৬ অঙ্কের কোড লিখুন"} 
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="code-input" 
              maxLength="6" 
            />
            
            <div className="code-actions">
              <button className="resend-code" onClick={onSendCode}>
                {t('resendCode')}
              </button>
              <button className="verify-btn" onClick={onVerifyCode}>
                {t('verifyLogin')}
              </button>
            </div>
            
            <button className="back-to-phone" onClick={onBackToPhone}>
              {t('changePhoneNumber')}
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};


<Footer/>

// // Wrap App with Language Provider
// function AppWrapper() {
//   return (
//     <LanguageProvider>
//       <App />
//     </LanguageProvider>
//   );
// }

// export default AppWrapper;



// Export App wrapped with LanguageProvider so translations work when importing `App` elsewhere
export default App;


