import  { useState, useEffect, useCallback, useMemo, createContext, useContext } from 'react';
import './index.css';

// ===== LANGUAGE SUPPORT SYSTEM =====
const LanguageContext = createContext();

// English texts (your existing content)
const englishTexts = {
  // Navigation
  appName: "DR. BLOOD 24/7",
  appSubtitle: "Bangladesh Blood Donation Network",
  
  // Pages
  home: "🏠 Home",
  findDonors: "🔍 Find Donors",
  myProfile: "👤 My Profile",
  becomeDonor: "❤️ Become Donor",
  login: "🔑 Login",
  logout: "👋 Logout",
  
  // Hero Section
  heroTitle: "Saving Lives Through <span class='highlight'>Blood Donation</span>",
  heroSubtitle: "Bangladesh's most trusted <b>Blood donation platform.</b> Connecting voluntary donors with patients in need through a verified nationwide network.",
  findBloodDonors: "🔍 Find Blood Donors",
  registerAsDonor: "❤️ Register as Donor",
  detectMyLocation: "📍 Detect My Location",
  
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
  detectLocation: "📍 Detect My Location",
  donorAvailability: "Donor Availability",
  allDonors: "👥 All Donors",
  availableNow: "✅ Available Now",
  recentlyDonated: "⏳ Recently Donated",
  searchResults: "Search Results:",
  clear: "🗑️ Clear",
  
  // Search System
  findCompatibleDonors: "Find Compatible Donors",
  searchDescription: "Connect with verified donors using precise search criteria",
  showAdvancedFilters: "⚙️ Show Advanced Filters",
  hideAdvancedFilters: "⚙️ Hide Advanced Filters",
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
  clearAllFilters: "🗑️ Clear All Filters",
  becomeADonor: "❤️ Become a Donor",
  
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
  contactNow: "📞 Contact Now",
  currentlyUnavailable: "Currently Unavailable",
  viewProfile: "👁️ View Profile",
  recordDonation: "➕ Record Donation",
  
  // Search Tips
  searchTips: "💡 Search Tips & Information",
  searchByCity: "Search by City or Area",
  searchTip1: "Type \"Dhaka\", \"Cumilla\", or specific areas like \"Gulshan\", \"Dhanmondi\" for precise location-based results",
  bloodTypeCompatibilityTip: "Blood Type Compatibility",
  bloodTypeTip: "O- is universal donor (can donate to all), AB+ is universal receiver (can receive from all)",
  emergencyReadyTip: "Emergency Ready Donors",
  emergencyTip: "Filter for donors available 24/7 for emergency situations with immediate response capability",
  verifiedProfilesTip: "Verified Profiles",
  verifiedTip: "All donors undergo medical screening and background verification for your safety",
  
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
  ambulanceService: "🚨 Ambulance Service",
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
  
  // Pages
  home: "🏠 হোম",
  findDonors: "🔍 রক্তদাতা খুঁজুন",
  myProfile: "👤 আমার প্রোফাইল",
  becomeDonor: "❤️ রক্তদাতা হোন",
  login: "🔑 লগইন",
  logout: "👋 লগআউট",
  
  // Hero Section
  heroTitle: "রক্তদানের মাধ্যমে জীবন বাঁচান <span class='highlight'>রক্তদান</span>",
  heroSubtitle: "বাংলাদেশের সবচেয়ে বিশ্বস্ত <b>রক্তদান প্ল্যাটফর্ম।</b> স্বেচ্ছাসেবী রক্তদাতাদের যাচাইকৃত জাতীয় নেটওয়ার্কের মাধ্যমে প্রয়োজনী রোগীদের সাথে সংযুক্ত করুন।",
  findBloodDonors: "🔍 রক্তদাতা খুঁজুন",
  registerAsDonor: "❤️ রক্তদাতা হিসাবে নিবন্ধন করুন",
  detectMyLocation: "📍 আমার অবস্থান সনাক্ত করুন",
  
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
  detectLocation: "📍 আমার অবস্থান সনাক্ত করুন",
  donorAvailability: "রক্তদাতার উপলব্ধতা",
  allDonors: "👥 সব রক্তদাতা",
  availableNow: "✅ এখনই উপলব্ধ",
  recentlyDonated: "⏳ সম্প্রতি রক্ত দিয়েছে",
  searchResults: "খোঁজার ফলাফল:",
  clear: "🗑️ পরিষ্কার করুন",
  
  // Search System
  findCompatibleDonors: "সামঞ্জস্যপূর্ণ রক্তদাতা খুঁজুন",
  searchDescription: "সুনির্দিষ্ট অনুসন্ধান মানদণ্ড ব্যবহার করে যাচাইকৃত রক্তদাতাদের সাথে সংযুক্ত হন",
  showAdvancedFilters: "⚙️ উন্নত ফিল্টার দেখান",
  hideAdvancedFilters: "⚙️ উন্নত ফিল্টার লুকান",
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
  clearAllFilters: "🗑️ সব ফিল্টার পরিষ্কার করুন",
  becomeADonor: "❤️ রক্তদাতা হোন",
  
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
  contactNow: "📞 এখনই যোগাযোগ করুন",
  currentlyUnavailable: "বর্তমানে উপলব্ধ নয়",
  viewProfile: "👁️ প্রোফাইল দেখুন",
  recordDonation: "➕ রক্তদান রেকর্ড করুন",
  
  // Search Tips
  searchTips: "💡 অনুসন্ধান টিপস ও তথ্য",
  searchByCity: "শহর বা এলাকা অনুসন্ধান করুন",
  searchTip1: "সুনির্দিষ্ট অবস্থান-ভিত্তিক ফলাফলের জন্য \"ঢাকা\", \"কুমিল্লা\" বা নির্দিষ্ট এলাকা যেমন \"গুলশান\", \"ধানমন্ডি\" টাইপ করুন",
  bloodTypeCompatibilityTip: "রক্তের গ্রুপ সামঞ্জস্যতা",
  bloodTypeTip: "O- সর্বজনীন দাতা (সব রক্তের গ্রুপে দান করতে পারে), AB+ সর্বজনীন গ্রহীতা (সব গ্রুপ থেকে গ্রহণ করতে পারে)",
  emergencyReadyTip: "জরুরী প্রস্তুত রক্তদাতা",
  emergencyTip: "জরুরী পরিস্থিতিতে 24/7 উপলব্ধ এবং তাৎক্ষণিক প্রতিক্রিয়া ক্ষমতা সম্পন্ন রক্তদাতাদের জন্য ফিল্টার করুন",
  verifiedProfilesTip: "যাচাইকৃত প্রোফাইল",
  verifiedTip: "আপনার নিরাপত্তার জন্য সমস্ত রক্তদাতা চিকিৎসা স্ক্রীনিং এবং ব্যাকগ্রাউন্ড যাচাইকরণের মধ্য দিয়ে যায়",
  
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
const useTranslation = () => {
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
  console.log(language);
  
  
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

const EmergencyHotline = () => {
  const { t } = useTranslation();
  return (
    <div className="emergency-hotline-fixed">
      <div className="hotline-content">
        <div className="hotline-icon">🚨</div>
        <div className="hotline-info">
          <div className="hotline-title">{t('ambulanceService')}</div>
          <div className="hotline-number">199</div>
        </div>
      </div>
    </div>
  );
};

const HealthTipsAI = () => {
  const [showTips, setShowTips] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const { t } = useTranslation();

  const healthTips = [
    t('healthTip1'),
    t('healthTip2'),
    t('healthTip3'),
    t('healthTip4'),
    t('healthTip5'),
    t('healthTip6'),
    t('healthTip7'),
    t('healthTip8')
  ];

  // If health tips aren't in translation, use defaults
  const tips = healthTips[0]?.includes('healthTip') ? [
    "💧 Drink 8-10 glasses of water daily to stay hydrated",
    "🥗 Eat balanced meals with fruits and vegetables",
    "🏃 Exercise for 30 minutes daily for better circulation",
    "😴 Get 7-8 hours of sleep for proper rest",
    "🚭 Avoid smoking and limit alcohol consumption",
    "🧘 Practice stress management techniques",
    "📱 Take regular breaks from screens",
    "🌞 Get 15 minutes of sunlight for Vitamin D"
  ] : healthTips;

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  return (
    <div className="health-tips-ai">
      <button className="health-tips-toggle" onClick={() => setShowTips(!showTips)}>
        {t('healthTips')}
      </button>
      
      {showTips && (
        <div className="health-tips-panel">
          <div className="tips-header">
            <h4>{t('aiHealthAssistant')}</h4>
            <button className="close-tips" onClick={() => setShowTips(false)}>{t('close')}</button>
          </div>
          <div className="current-tip">
            {tips[currentTip]}
          </div>
          <button className="next-tip-btn" onClick={nextTip}>
            {t('nextTip')}
          </button>
          <div className="tips-note">
            {t('generalWellness')}
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
  
  // State Management
  const [activePage, setActivePage] = useLocalStorage('activePage', 'home');
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser', null);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
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
    availability: 'Flexible Schedule'
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
    
    return allSuggestions.filter(location => 
      location.toLowerCase().includes(searchTerm)
    ).slice(0, 8);
  }, [debouncedLocationSearch]);

  const locationSuggestions = useMemo(() => getLocationSuggestions(), [getLocationSuggestions]);

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
      alert(language === 'en' ? '❌ You must be at least 18 years old to register as a blood donor.' : '❌ রক্তদাতা হিসেবে নিবন্ধন করতে আপনার বয়স কমপক্ষে ১৮ বছর হতে হবে।');
      return;
    }
    
    if (parseInt(registrationForm.weight) < 45) {
      alert(language === 'en' ? '❌ Minimum weight requirement is 45 kg for blood donation.' : '❌ রক্তদানের জন্য ন্যূনতম ওজন প্রয়োজন ৪৫ কেজি।');
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
        image: "👤",
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

  const detectUserLocation = useCallback(() => {
    setIsLoading(true);
    const locations = [
      'Dhaka - Gulshan', 'Dhaka - Dhanmondi', 'Dhaka - Uttara', 
      'Cumilla - Kandirpar', 'Chittagong - Agrabad', 'Sylhet - Zindabazar'
    ];
    setTimeout(() => {
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      setUserLocation(randomLocation);
      setLocationSearch(randomLocation);
      setSelectedLocation(randomLocation);
      setIsLoading(false);
      alert(`📍 ${language === 'en' ? 'Location detected' : 'অবস্থান সনাক্ত হয়েছে'}: ${randomLocation}`);
    }, 1000);
  }, [language]);

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
      <HealthTipsAI />

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
            <button className={`nav-link ${activePage === 'home' ? 'active' : ''}`} onClick={() => setActivePage('home')}>
              {t('home')}
            </button>
            <button className={`nav-link ${activePage === 'donors' ? 'active' : ''}`} onClick={() => setActivePage('donors')}>
              {t('findDonors')}
            </button>
            
            {isLoggedIn && enhancedCurrentUser && (
              <button className={`nav-link ${activePage === 'profile' ? 'active' : ''}`} onClick={() => setActivePage('profile')}>
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
                  <Button variant="tertiary" onClick={detectUserLocation}>
                    <span className="btn-icon">📍</span>{t('detectMyLocation')}
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
            onDetectLocation={detectUserLocation}
            onClearFilters={clearAllFilters}
            onContactDonor={handleContactDonor}
            onViewDonorProfile={handleViewDonorProfile}
            onRegisterDonor={() => setShowRegistration(true)}
            locationSuggestions={locationSuggestions}
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

  return (
    <div className="donors-page">
      <div className="page-header">
        <h1>{t('findBloodDonorsTitle')}</h1>
        <p>{t('findDonorsSubtitle')}</p>
      </div>

      {/* Location Detection */}
      <div className="location-detection">
        <button className="detect-location-btn" onClick={onDetectLocation}>
          <span className="btn-icon">📍</span>
          {userLocation ? `${language === 'en' ? 'Location' : 'অবস্থান'}: ${userLocation}` : t('detectLocation')}
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
              </div>
            </div>
            
            <div className="donors-grid-enhanced">
              {availabilityFilteredDonors.map(donor => (
                <div key={donor.id} className={`donor-card-enhanced ${donor.isCurrentUser ? 'current-user' : ''}`}>
                  {donor.isCurrentUser && <div className="current-user-ribbon">{t('yourProfile')}</div>}
                  
                  <div className="donor-card-header">
                    <div className="donor-avatar-section">
                      <div className="donor-avatar-enhanced">{donor.image}</div>
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

                  {/* Donation Status Section */}
                  <div className="donation-status-section">
                    <DonationStatusBadge 
                      lastDonation={donor.lastDonation} 
                      isCurrentUser={donor.isCurrentUser}
                    />
                  </div>

                  <div className="donor-details-enhanced">
                    <div className="detail-row">
                      <span className="detail-icon">📍</span>
                      <span className="detail-text">{donor.area}, {donor.city}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-icon">⏰</span>
                      <span className="detail-text">{donor.availability}</span>
                    </div>
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
                  </div>

                  <div className="donation-info">
                    <div className="last-donation-enhanced">
                      <span className="donation-label">{t('lastDonationLabel')}</span>
                      <span className="donation-date">
                        {donor.lastDonation === 'Never' ? (language === 'en' ? 'Never' : 'কখনও না') : new Date(donor.lastDonation).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')}
                      </span>
                    </div>
                    {donor.emergencyAvailable && (
                      <div className="emergency-tag-enhanced">
                        <span className="emergency-icon">🚨</span>
                        {t('emergencyAvailable')}
                      </div>
                    )}
                  </div>

                  <div className="donor-actions-enhanced">
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
              ))}
            </div>
          </>
        )}
      </div>

      {/* Search Tips */}
      <div className="search-tips-enhanced">
        <div className="tips-header">
          <h4>{t('searchTips')}</h4>
        </div>
        <div className="tips-grid-enhanced">
          <div className="tip-card">
            <div className="tip-icon">🔍</div>
            <div className="tip-content">
              <h5>{t('searchByCity')}</h5>
              <p>{t('searchTip1')}</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🩸</div>
            <div className="tip-content">
              <h5>{t('bloodTypeCompatibilityTip')}</h5>
              <p>{t('bloodTypeTip')}</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🚨</div>
            <div className="tip-content">
              <h5>{t('emergencyReadyTip')}</h5>
              <p>{t('emergencyTip')}</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">✅</div>
            <div className="tip-content">
              <h5>{t('verifiedProfilesTip')}</h5>
              <p>{t('verifiedTip')}</p>
            </div>
          </div>
        </div>
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
              <div className="profile-avatar-large">{user.image}</div>
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
        return registrationForm.fullName && registrationForm.phone && registrationForm.email;
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
              className="btn-primary" 
              onClick={nextStep}
              disabled={!isStepValid(currentStep)}
            >
              {t('nextStep')}
            </button>
          ) : (
            <button 
              type="submit" 
              className="btn-submit"
              disabled={!isStepValid(currentStep) || isLoading}
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
          <div className="profile-avatar">{donor.image}</div>
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

const Footer = ({ onNavigate, onRegisterDonor }) => {
  const { t, language } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t('footerTitle')}</h3>
          <p>{t('footerDesc')}</p>
          <div className="footer-stats">
            <div className="footer-stat">
              <strong>2,500+</strong>
              <span>{t('livesSaved')}</span>
            </div>
            <div className="footer-stat">
              <strong>50+</strong>
              <span>{t('partnerLocations')}</span>
            </div>
            <div className="footer-stat">
              <strong>8</strong>
              <span>{t('citiesCovered')}</span>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4>{t('quickLinks')}</h4>
          <button onClick={() => onNavigate('home')}>{t('home')}</button>
          <button onClick={() => onNavigate('donors')}>{t('findDonors')}</button>
          <button onClick={onRegisterDonor}>{t('becomeDonor')}</button>
        </div>
        <div className="footer-section">
          <h4>{t('contactInfo')}</h4>
          <p>📧 help@drblood247.bd</p>
          <p>📞 +880 2-2222-HELP</p>
          <p>📍 {t('citiesCovered')} {t('all')}</p>
          <p>⏰ 24/7 {t('emergencyReady')}</p>
        </div>
        <div className="footer-section">
          <h4>{t('emergencyContacts')}</h4>
          <p>🚨 {language === 'en' ? 'National Emergency' : 'জাতীয় জরুরী'}: 999</p>
          <p>🏥 {t('ambulanceService')}: 199</p>
          <p>🩸 {t('bloodBankInfo')}: 16273</p>
          <p>🏭 {t('dghsHelpline')}: 16263</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
};


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
export default function AppWrapper() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}


