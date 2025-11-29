import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './index.css';

// Constants
const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const CITIES = ['Dhaka', 'Cumilla', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barishal', 'Rangpur'];
const GENDERS = ['Male', 'Female'];
const AVAILABILITY_OPTIONS = ['24/7 Emergency', 'Weekdays', 'Weekends', 'Flexible Schedule', 'On Call'];

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
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
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
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

const EmergencyHotline = () => (
  <div className="emergency-hotline-fixed">
    <div className="hotline-content">
      <div className="hotline-icon">🚨</div>
      <div className="hotline-info">
        <div className="hotline-title">Ambulance</div>
        <div className="hotline-number">199</div>
      </div>
    </div>
  </div>
);

const HealthTipsAI = () => {
  const [showTips, setShowTips] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  const healthTips = [
    "💧 Drink 8-10 glasses of water daily to stay hydrated",
    "🥗 Eat balanced meals with fruits and vegetables",
    "🏃 Exercise for 30 minutes daily for better circulation",
    "😴 Get 7-8 hours of sleep for proper rest",
    "🚭 Avoid smoking and limit alcohol consumption",
    "🧘 Practice stress management techniques",
    "📱 Take regular breaks from screens",
    "🌞 Get 15 minutes of sunlight for Vitamin D"
  ];

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % healthTips.length);
  };

  return (
    <div className="health-tips-ai">
      <button className="health-tips-toggle" onClick={() => setShowTips(!showTips)}>
        🩺 HEALTH TIPS
      </button>
      
      {showTips && (
        <div className="health-tips-panel">
          <div className="tips-header">
            <h4>AI Health Assistant</h4>
            <button className="close-tips" onClick={() => setShowTips(false)}>×</button>
          </div>
          <div className="current-tip">
            {healthTips[currentTip]}
          </div>
          <button className="next-tip-btn" onClick={nextTip}>
            Next Tip →
          </button>
          <div className="tips-note">
            💡 General wellness advice. Consult doctors for medical concerns.
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
function App() {
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

  // Enhanced donor data with more realistic profiles
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
        { date: "2024-01-15", location: "Apollo Hospital", type: "Whole Blood" },
        { date: "2023-12-01", location: "Square Hospital", type: "Platelets" }
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
        { date: "2024-02-10", location: "United Hospital", type: "Whole Blood" }
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
        { date: "2024-02-01", location: "Square Hospital", type: "Whole Blood" }
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
        { date: "2024-01-25", location: "Ibn Sina Hospital", type: "Whole Blood" }
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
        { date: "2024-01-28", location: "United Hospital", type: "Whole Blood" }
      ]
    },
    // Additional donors for different cities
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
        { date: "2024-02-12", location: "Cumilla Medical College", type: "Whole Blood" }
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
        { date: "2024-02-08", location: "CSCR", type: "Whole Blood" }
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
        { date: "2024-02-05", location: "Sylhet MAG Osmani", type: "Whole Blood" }
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
        { date: "2024-02-10", location: "Rajshahi Medical College", type: "Whole Blood" }
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
        { date: "2024-01-30", location: "Khulna Medical College", type: "Whole Blood" }
      ]
    }
  ], []);

  // Combine base donors with current user if registered
  const donors = useMemo(() => {
    if (currentUser) {
      return [currentUser, ...baseDonors];
    }
    return baseDonors;
  }, [baseDonors, currentUser]);

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
      alert('Please enter a valid Bangladeshi phone number (11 digits starting with 01)');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const code = generateVerificationCode();
      setGeneratedCode(code);
      setLoginStep('code');
      setIsLoading(false);
      alert(`📱 Verification code sent to ${phoneNumber}\n\nCode: ${code}\n\n(In real app, sent via SMS)`);
    }, 1500);
  }, [phoneNumber, generateVerificationCode]);

  const handleVerifyCode = useCallback(() => {
    if (verificationCode === generatedCode) {
      setIsLoggedIn(true);
      setCurrentUser({
        id: 1000, // Special ID for current user
        name: "You",
        bloodType: registrationForm.bloodGroup || "Not specified",
        city: registrationForm.city || "Not specified",
        area: registrationForm.area || "Not specified",
        availability: registrationForm.availability,
        donations: 0,
        image: "👤",
        rating: 5.0,
        badge: "New Donor",
        verified: true,
        emergencyAvailable: true,
        isCurrentUser: true
      });
      setShowLogin(false);
      setPhoneNumber('');
      setVerificationCode('');
      setLoginStep('phone');
      alert('✅ Login successful! Welcome to DR. BLOOD 24/7.');
    } else {
      alert('❌ Invalid verification code. Please try again.');
    }
  }, [verificationCode, generatedCode, setIsLoggedIn, setCurrentUser, registrationForm]);

  const handleRegistrationChange = useCallback((field, value) => {
    setRegistrationForm(prev => ({ ...prev, [field]: value }));
    
    // Auto-calculate age if date of birth is provided
    if (field === 'dateOfBirth' && value) {
      const birthDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setRegistrationForm(prev => ({ ...prev, age: age.toString() }));
    }
  }, []);

  const handleRegistrationSubmit = useCallback((e) => {
    e.preventDefault();
    
    // Validation
    if (parseInt(registrationForm.age) < 18) {
      alert('❌ You must be at least 18 years old to register as a blood donor.');
      return;
    }
    
    if (parseInt(registrationForm.weight) < 45) {
      alert('❌ Minimum weight requirement is 45 kg for blood donation.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      // Create user profile
      const userProfile = {
        id: Date.now(),
        name: registrationForm.fullName,
        bloodType: registrationForm.bloodGroup,
        city: registrationForm.city,
        area: registrationForm.area,
        availability: registrationForm.availability,
        donations: 0,
        image: "👤",
        rating: 5.0,
        badge: "New Donor",
        verified: true,
        emergencyAvailable: registrationForm.availability === '24/7 Emergency',
        phone: registrationForm.phone,
        email: registrationForm.email,
        gender: registrationForm.gender,
        age: registrationForm.age,
        weight: `${registrationForm.weight} kg`,
        height: registrationForm.height,
        occupation: 'Donor',
        languages: ['Bengali', 'English'],
        achievements: ['New Donor'],
        medicalInfo: 'Recently registered donor',
        isCurrentUser: true,
        lastDonation: 'Never'
      };

      setCurrentUser(userProfile);
      setIsLoggedIn(true);
      
      alert(`🎉 Registration Successful!\n\nWelcome ${registrationForm.fullName}!\n\nYou are now registered as a blood donor. Your profile is now visible to those in need.`);
      
      setShowRegistration(false);
      setRegistrationForm({
        fullName: '', email: '', phone: '', bloodGroup: '', gender: '', dateOfBirth: '',
        age: '', weight: '', height: '', city: '', area: '', lastDonation: '', 
        emergencyContact: '', medicalHistory: '', hasDisease: '', recentSurgery: '',
        medications: '', travelHistory: '', availability: 'Flexible Schedule'
      });
      setIsLoading(false);
    }, 2000);
  }, [registrationForm, setCurrentUser, setIsLoggedIn]);

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
      alert(`📍 Location detected: ${randomLocation}`);
    }, 1000);
  }, []);

  const handleContactDonor = useCallback((donor) => {
    if (donor.isCurrentUser) {
      alert('📞 This is your profile! You cannot contact yourself.');
      return;
    }
    alert(`📞 Contacting ${donor.name}\n\nPhone: ${donor.phone}\nEmail: ${donor.email}\nLocation: ${donor.area}, ${donor.city}`);
  }, []);

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
    if (selectedBloodGroup) summary += `Blood Group: ${selectedBloodGroup} `;
    if (selectedLocation) summary += `Location: ${selectedLocation}`;
    return summary || 'All donors';
  }, [selectedBloodGroup, selectedLocation]);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    alert('Logged out successfully!');
  }, [setIsLoggedIn, setCurrentUser]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="app">
      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-blood-cell">🩸</div>
        <div className="floating-heart">❤️</div>
        <div className="floating-plus">➕</div>
      </div>

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
              <div className="logo-text">DR. BLOOD 24/7</div>
              <div className="logo-subtitle">Bangladesh Blood Donation Network</div>
            </div>
          </div>
          
          <div className="nav-links">
            <button className={`nav-link ${activePage === 'home' ? 'active' : ''}`} onClick={() => setActivePage('home')}>
              🏠 Home
            </button>
            <button className={`nav-link ${activePage === 'donors' ? 'active' : ''}`} onClick={() => setActivePage('donors')}>
              🔍 Find Donors
            </button>
            
            {isLoggedIn && currentUser && (
              <button className={`nav-link ${activePage === 'profile' ? 'active' : ''}`} onClick={() => setActivePage('profile')}>
                👤 My Profile
              </button>
            )}
            
            <Button variant="primary" onClick={() => setShowRegistration(true)} className="register-btn">
              ❤️ Become Donor
            </Button>
            
            {isLoggedIn ? (
              <Button variant="secondary" onClick={handleLogout} className="logout-btn">
                👋 Logout
              </Button>
            ) : (
              <Button variant="secondary" onClick={() => setShowLogin(true)} className="login-btn">
                🔑 Login
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Processing...</p>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Home Page */}
        {activePage === 'home' && (
          <div className="home-page">
            <section className="hero-section">
              <div className="hero-content">
                {/* <div className="hero-badge">Bangladesh Blood Donation Network</div> */}
                <h1 className="hero-title">Saving Lives Through <span className="highlight">Blood Donation</span></h1>
                <p className="hero-subtitle">
                  Bangladesh's most trusted <b> Blood donation platform.</b> Connecting voluntary donors with 
                  patients in need through a verified nationwide network.
                </p>
                
                <div className="hero-buttons">
                  <Button variant="primary" onClick={() => setActivePage('donors')}>
                    <span className="btn-icon">🔍</span>Find Blood Donors
                  </Button>
                  <Button variant="secondary" onClick={() => setShowRegistration(true)}>
                    <span className="btn-icon">❤️</span>Register as Donor
                  </Button>
                  <Button variant="tertiary" onClick={detectUserLocation}>
                    <span className="btn-icon">📍</span>Detect My Location
                  </Button>
                </div>

                <div className="live-stats">
                  <div className="stat-item live">
                    <div className="stat-icon">🩸</div>
                    <div className="stat-content">
                      <div className="stat-number">{donors.length}+</div>
                      <div className="stat-label">Verified Donors</div>
                    </div>
                  </div>
                  <div className="stat-item live">
                    <div className="stat-icon">🏥</div>
                    <div className="stat-content">
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Partner Locations</div>
                    </div>
                  </div>
                  <div className="stat-item live">
                    <div className="stat-icon">🌍</div>
                    <div className="stat-content">
                      <div className="stat-number">8</div>
                      <div className="stat-label">Cities Covered</div>
                    </div>
                  </div>
                  <div className="stat-item live">
                    <div className="stat-icon">💝</div>
                    <div className="stat-content">
                      <div className="stat-number">2,500+</div>
                      <div className="stat-label">Lives Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="quick-search-section">
              <h2 className="section-title">Quick Search by City</h2>
              <div className="quick-search-grid">
                {CITIES.map(city => (
                  <div key={city} className="city-card" onClick={() => {
                    setActivePage('donors');
                    setSelectedLocation(city);
                    setLocationSearch(city);
                  }}>
                    <div className="city-name">{city}</div>
                    <div className="donor-count">{donors.filter(d => d.city === city).length} donors</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="features-section">
              <h2 className="section-title">Why Trust DR. BLOOD 24/7?</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🔒</div>
                  <h3>Verified & Screened</h3>
                  <p>Every donor undergoes medical screening and background verification. Health records are regularly updated.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⚡</div>
                  <h3>Rapid Response</h3>
                  <p>Average response time of 15 minutes for emergency requests. 24/7 coordination center.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🏥</div>
                  <h3>Nationwide Network</h3>
                  <p>Verified donors across all major cities in Bangladesh. Direct coordination for emergency cases.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📱</div>
                  <h3>Real-time Tracking</h3>
                  <p>Live donor location tracking and estimated arrival time. SMS/Email notifications.</p>
                </div>
              </div>
            </section>

            <section className="blood-types-section">
              <h2 className="section-title">Blood Type Compatibility</h2>
              <div className="blood-types-grid">
                {BLOOD_TYPES.map(type => (
                  <div key={type} className={`blood-type-card ${type === 'O-' ? 'universal-donor' : ''} ${type === 'AB+' ? 'universal-receiver' : ''}`}>
                    <div className="blood-type">{type}</div>
                    {type === 'O-' && <div className="universal-badge">Universal Donor</div>}
                    {type === 'AB+' && <div className="receiver-badge">Universal Receiver</div>}
                  </div>
                ))}
              </div>
              <div className="compatibility-info">
                <p>💡 <strong>O-</strong> can donate to all blood types | <strong>AB+</strong> can receive from all blood types</p>
              </div>
            </section>

            <section className="emergency-cta">
              <div className="emergency-content">
                <div className="emergency-icon">🩺</div>
                <div className="emergency-text">
                  <h2>Need Immediate Assistance?</h2>
                  <p>Our 24/7 coordination team is ready to help you find compatible donors quickly</p>
                </div>
                <button className="emergency-btn" onClick={() => setActivePage('donors')}>
                  Find Donors Now
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
          />
        )}

        {/* Profile Page */}
        {activePage === 'profile' && currentUser && (
          <ProfilePage user={currentUser} />
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
      />

      {/* Footer */}
      <Footer 
        onNavigate={setActivePage}
        onRegisterDonor={() => setShowRegistration(true)}
      />
    </div>
  );
}

// Enhanced Donors Page Component
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
  getSearchSummary
}) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  return (
    <div className="donors-page">
      <div className="page-header">
        <h1>🔍 Find Blood Donors</h1>
        <p>Connect with verified donors across Bangladesh's major cities</p>
      </div>

      {/* Location Detection */}
      <div className="location-detection">
        <button className="detect-location-btn" onClick={onDetectLocation}>
          <span className="btn-icon">📍</span>
          {userLocation ? `Location: ${userLocation}` : 'Detect My Location'}
        </button>
      </div>

      {/* Search Summary */}
      {(selectedBloodGroup || selectedLocation) && (
        <div className="search-summary">
          <div className="summary-content">
            <span className="summary-icon">🔍</span>
            <div className="summary-text">
              <strong>Search Results:</strong> {getSearchSummary()}
            </div>
            <button className="clear-search" onClick={onClearFilters}>
              <span className="btn-icon">🗑️</span>
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Search System */}
      <div className="search-system-enhanced">
        <div className="search-header-card">
          <div className="search-header-content">
            <h2>Find Compatible Donors</h2>
            <p>Connect with verified donors using precise search criteria</p>
          </div>
          <button 
            className={`advanced-toggle ${showAdvancedFilters ? 'active' : ''}`}
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            ⚙️ {showAdvancedFilters ? 'Hide' : 'Show'} Advanced Filters
          </button>
        </div>

        {/* Main Search Filters */}
        <div className="enhanced-search-filters">
          <div className="filters-grid-main">
            {/* Blood Group Section */}
            <div className="filter-section-card">
              <div className="filter-header">
                <span className="filter-icon">💉</span>
                <h3>Blood Group Required</h3>
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
                    {group === 'O-' && <span className="type-badge">Universal</span>}
                    {group === 'AB+' && <span className="type-badge">Receiver</span>}
                  </button>
                ))}
                <button
                  className={`blood-type-btn clear-all ${!selectedBloodGroup ? 'active' : ''}`}
                  onClick={() => setSelectedBloodGroup('')}
                >
                  All Types
                </button>
              </div>
            </div>

            {/* Location Section */}
            <div className="filter-section-card">
              <div className="filter-header">
                <span className="filter-icon">📍</span>
                <h3>Search Location</h3>
              </div>
              <div className="location-search-enhanced">
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    placeholder="Enter city or area (e.g., Dhaka, Gulshan, Cumilla)"
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    className="location-input-enhanced"
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
                <label className="quick-locations-label">Popular Areas:</label>
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
                    <h3>Availability Filter</h3>
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
                        <span className="option-text">All Donors</span>
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
                        <span className="option-text">Emergency Ready</span>
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
                        <span className="option-text">Verified Only</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="filter-section-card">
                  <div className="filter-header">
                    <span className="filter-icon">🎯</span>
                    <h3>Additional Filters</h3>
                  </div>
                  <div className="additional-filters">
                    <label className="additional-filter">
                      <input type="checkbox" defaultChecked />
                      <span className="filter-checkmark"></span>
                      <span className="filter-label">Recent Donors (Last 3 months)</span>
                    </label>
                    <label className="additional-filter">
                      <input type="checkbox" />
                      <span className="filter-checkmark"></span>
                      <span className="filter-label">Near My Location</span>
                    </label>
                    <label className="additional-filter">
                      <input type="checkbox" defaultChecked />
                      <span className="filter-checkmark"></span>
                      <span className="filter-label">Available Today</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filter Actions */}
          <div className="filter-actions-enhanced">
            <div className="results-count-badge">
              <span className="count-number">{filteredDonors.length}</span>
              <span className="count-label">donors found</span>
            </div>
            <div className="action-buttons">
              <button className="clear-filters-btn" onClick={onClearFilters}>
                <span className="btn-icon">🗑️</span>
                Clear All Filters
              </button>
              <button className="register-cta-btn" onClick={onRegisterDonor}>
                <span className="btn-icon">❤️</span>
                Become a Donor
              </button>
            </div>
          </div>
        </div>
      </div>









      {/* Donors Grid */}
      <div className="donors-grid-section">
        {filteredDonors.length === 0 ? (
          <div className="no-results-enhanced">
            <div className="no-results-illustration">🔍</div>
            <div className="no-results-content">
              <h3>No donors found matching your criteria</h3>
              <p>Try adjusting your search filters or explore different locations</p>
              <div className="no-results-actions">
                <button className="btn-primary" onClick={onClearFilters}>
                  Show All Donors
                </button>
                <button className="btn-secondary" onClick={onRegisterDonor}>
                  Register as Donor
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="donors-grid-header">
              <h3>Available Donors</h3>
              <div className="sort-options">
                <select className="sort-select">
                  <option>Sort by: Recently Active</option>
                  <option>Sort by: Donation Count</option>
                  <option>Sort by: Rating</option>
                  <option>Sort by: Distance</option>
                </select>
              </div>
            </div>
            
            <div className="donors-grid-enhanced">
              {filteredDonors.map(donor => (
                <div key={donor.id} className={`donor-card-enhanced ${donor.isCurrentUser ? 'current-user' : ''}`}>
                  {donor.isCurrentUser && <div className="current-user-ribbon">Your Profile</div>}
                  
                  <div className="donor-card-header">
                    <div className="donor-avatar-section">
                      <div className="donor-avatar-enhanced">{donor.image}</div>
                      {donor.verified && <div className="verified-badge-enhanced">✅</div>}
                    </div>
                    
                    <div className="donor-main-info">
                      <h3 className="donor-name">
                        {donor.name} 
                        {donor.isCurrentUser && <span className="you-indicator">(You)</span>}
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
                      <span className="detail-text">{donor.gender}, {donor.age} years</span>
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
                      <span className="donation-label">Last Donation:</span>
                      <span className="donation-date">{donor.lastDonation}</span>
                    </div>
                    {donor.emergencyAvailable && (
                      <div className="emergency-tag-enhanced">
                        <span className="emergency-icon">🚨</span>
                        Emergency Available
                      </div>
                    )}
                  </div>

                  <div className="donor-actions-enhanced">
                    <button 
                      className="contact-btn-primary" 
                      onClick={() => onContactDonor(donor)} 
                      disabled={donor.isCurrentUser}
                    >
                      <span className="btn-icon">📞</span>
                      {donor.isCurrentUser ? 'Your Profile' : 'Contact Now'}
                    </button>
                    <button 
                      className="profile-btn-secondary" 
                      onClick={() => onViewDonorProfile(donor)}
                    >
                      <span className="btn-icon">👁️</span>
                      View Profile
                    </button>
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
          <h4>💡 Search Tips & Information</h4>
        </div>
        <div className="tips-grid-enhanced">
          <div className="tip-card">
            <div className="tip-icon">🔍</div>
            <div className="tip-content">
              <h5>Search by City or Area</h5>
              <p>Type "Dhaka", "Cumilla", or specific areas like "Gulshan", "Dhanmondi" for precise location-based results</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🩸</div>
            <div className="tip-content">
              <h5>Blood Type Compatibility</h5>
              <p>O- is universal donor (can donate to all), AB+ is universal receiver (can receive from all)</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🚨</div>
            <div className="tip-content">
              <h5>Emergency Ready Donors</h5>
              <p>Filter for donors available 24/7 for emergency situations with immediate response capability</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">✅</div>
            <div className="tip-content">
              <h5>Verified Profiles</h5>
              <p>All donors undergo medical screening and background verification for your safety</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};















// Profile Page Component
const ProfilePage = ({ user }) => {
  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>👤 Your Donor Profile</h1>
        <p>Manage your donor information and preferences</p>
      </div>

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
                <span className="verified-badge-large">✅ Verified Donor</span>
              </div>
              <div className="profile-stats">
                <div className="stat">
                  <div className="stat-number">{user.donations}</div>
                  <div className="stat-label">Total Donations</div>
                </div>
                <div className="stat">
                  <div className="stat-number">⭐ {user.rating}</div>
                  <div className="stat-label">Donor Rating</div>
                </div>
                <div className="stat">
                  <div className="stat-number">{user.emergencyAvailable ? 'Yes' : 'No'}</div>
                  <div className="stat-label">Emergency Ready</div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-section">
              <h3>Personal Information</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Full Name:</span>
                  <span className="detail-value">{user.name}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Blood Type:</span>
                  <span className="detail-value">{user.bloodType}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Gender:</span>
                  <span className="detail-value">{user.gender}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Age:</span>
                  <span className="detail-value">{user.age} years</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Weight:</span>
                  <span className="detail-value">{user.weight}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Height:</span>
                  <span className="detail-value">{user.height}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Location & Availability</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">City:</span>
                  <span className="detail-value">{user.city}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Area:</span>
                  <span className="detail-value">{user.area}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Availability:</span>
                  <span className="detail-value highlight">{user.availability}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Emergency Ready:</span>
                  <span className="detail-value">{user.emergencyAvailable ? '✅ Yes' : '❌ No'}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{user.phone}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{user.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-achievements">
            <h3>Your Achievements</h3>
            <div className="achievements-list">
              {user.achievements.map((achievement, index) => (
                <span key={index} className="achievement-badge">{achievement}</span>
              ))}
            </div>
          </div>

          <div className="profile-actions">
            <button className="btn-primary large">Edit Profile</button>
            <button className="btn-secondary">Update Availability</button>
            <button className="btn-tertiary">Donation History</button>
          </div>
        </div>
      </div>
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
        <h2>❤️ Register as Blood Donor</h2>
        <button className="close-btn" onClick={onClose}>×</button>
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
          <span className={`step ${currentStep >= 1 ? 'active' : ''}`}>1. Personal</span>
          <span className={`step ${currentStep >= 2 ? 'active' : ''}`}>2. Medical</span>
          <span className={`step ${currentStep >= 3 ? 'active' : ''}`}>3. Location</span>
        </div>
      </div>

      <form onSubmit={onSubmit} className="registration-form">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="form-step">
            <h3>Personal Information</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  required 
                  value={registrationForm.fullName}
                  onChange={(e) => onRegistrationChange('fullName', e.target.value)}
                  placeholder="Enter your full name as per NID"
                />
              </div>
              
              <div className="form-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  required 
                  value={registrationForm.email}
                  onChange={(e) => onRegistrationChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label>Phone Number *</label>
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
                <label>Emergency Contact</label>
                <input 
                  type="text" 
                  value={registrationForm.emergencyContact}
                  onChange={(e) => onRegistrationChange('emergencyContact', e.target.value)}
                  placeholder="Alternative contact number"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Medical Information */}
        {currentStep === 2 && (
          <div className="form-step">
            <h3>Medical Information & Eligibility</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Blood Group *</label>
                <select 
                  required 
                  value={registrationForm.bloodGroup}
                  onChange={(e) => onRegistrationChange('bloodGroup', e.target.value)}
                >
                  <option value="">Select Blood Group</option>
                  {bloodTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Gender *</label>
                <select 
                  required 
                  value={registrationForm.gender}
                  onChange={(e) => onRegistrationChange('gender', e.target.value)}
                >
                  <option value="">Select Gender</option>
                  {genders.map(gender => <option key={gender} value={gender}>{gender}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Date of Birth *</label>
                <input 
                  type="date" 
                  required
                  value={registrationForm.dateOfBirth}
                  onChange={(e) => onRegistrationChange('dateOfBirth', e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                />
                {registrationForm.age && (
                  <div className="age-display">Age: {registrationForm.age} years</div>
                )}
              </div>

              <div className="form-group">
                <label>Weight (kg) *</label>
                <input 
                  type="number" 
                  required 
                  min="45"
                  max="150"
                  value={registrationForm.weight}
                  onChange={(e) => onRegistrationChange('weight', e.target.value)}
                  placeholder="Minimum 45kg"
                />
                <div className="validation-note">Minimum 45 kg required</div>
              </div>

              <div className="form-group">
                <label>Height (cm)</label>
                <input 
                  type="number" 
                  value={registrationForm.height}
                  onChange={(e) => onRegistrationChange('height', e.target.value)}
                  placeholder="Height in centimeters"
                />
              </div>

              <div className="form-group full-width">
                <label>Any Medical Conditions?</label>
                <select 
                  value={registrationForm.hasDisease}
                  onChange={(e) => onRegistrationChange('hasDisease', e.target.value)}
                >
                  <option value="">Select if applicable</option>
                  <option value="none">No known medical conditions</option>
                  <option value="hypertension">Hypertension</option>
                  <option value="diabetes">Diabetes</option>
                  <option value="heart-disease">Heart Disease</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Recent Surgery (within 6 months)</label>
                <input 
                  type="text" 
                  value={registrationForm.recentSurgery}
                  onChange={(e) => onRegistrationChange('recentSurgery', e.target.value)}
                  placeholder="Type of surgery and date"
                />
              </div>

              <div className="form-group full-width">
                <label>Current Medications</label>
                <textarea 
                  value={registrationForm.medications}
                  onChange={(e) => onRegistrationChange('medications', e.target.value)}
                  placeholder="List any medications you're currently taking"
                  rows="2"
                />
              </div>

              <div className="form-group full-width">
                <label>Travel History (last 3 months)</label>
                <input 
                  type="text" 
                  value={registrationForm.travelHistory}
                  onChange={(e) => onRegistrationChange('travelHistory', e.target.value)}
                  placeholder="Countries or cities visited recently"
                />
              </div>
            </div>

            <div className="eligibility-checklist">
              <h4>Eligibility Checklist</h4>
              <div className="checklist-item">
                <input type="checkbox" required /> 
                <span>I am at least 18 years old</span>
              </div>
              <div className="checklist-item">
                <input type="checkbox" required />
                <span>I weigh at least 45 kg</span>
              </div>
              <div className="checklist-item">
                <input type="checkbox" required />
                <span>I am in good health condition</span>
              </div>
              <div className="checklist-item">
                <input type="checkbox" required />
                <span>I have not donated blood in the last 3 months</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Location & Preferences */}
        {currentStep === 3 && (
          <div className="form-step">
            <h3>Location & Donation Preferences</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>City *</label>
                <select 
                  required 
                  value={registrationForm.city}
                  onChange={(e) => onRegistrationChange('city', e.target.value)}
                >
                  <option value="">Select City</option>
                  {cities.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Area/Location *</label>
                <input 
                  type="text" 
                  required 
                  value={registrationForm.area}
                  onChange={(e) => onRegistrationChange('area', e.target.value)}
                  placeholder="Your specific area or neighborhood"
                />
              </div>

              <div className="form-group full-width">
                <label>Availability for Donation *</label>
                <select 
                  required
                  value={registrationForm.availability}
                  onChange={(e) => onRegistrationChange('availability', e.target.value)}
                >
                  <option value="">Select Availability</option>
                  {availabilityOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="form-group full-width">
                <label>Last Blood Donation Date (if any)</label>
                <input 
                  type="date" 
                  value={registrationForm.lastDonation}
                  onChange={(e) => onRegistrationChange('lastDonation', e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="privacy-notice">
              <h4>Privacy & Consent</h4>
              <p>
                Your information will be kept confidential and only shared with verified healthcare 
                facilities when there is a genuine need for blood donation. You can update your 
                availability or remove your registration at any time.
              </p>
            </div>
          </div>
        )}

        <div className="form-actions">
          {currentStep > 1 && (
            <button type="button" className="btn-secondary" onClick={prevStep}>
              ← Previous
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
              Next Step →
            </button>
          ) : (
            <button 
              type="submit" 
              className="btn-submit"
              disabled={!isStepValid(currentStep) || isLoading}
            >
              {isLoading ? 'Registering...' : '🎉 Complete Registration'}
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
};

// Other components (LoginModal, DonorProfileModal, Footer) remain similar but enhanced
// For brevity, I'll show the structure - you can enhance them similarly

const LoginModal = ({ 
  isOpen, onClose, loginStep, phoneNumber, setPhoneNumber, 
  verificationCode, setVerificationCode, onSendCode, onVerifyCode, 
  onBackToPhone, isLoading 
}) => (
  <Modal isOpen={isOpen} onClose={onClose} className="login-modal">
    <div className="modal-header">
      <h2>🔑 Login to LifeStream</h2>
      <button className="close-btn" onClick={onClose}>×</button>
    </div>
    <div className="login-content">
      {loginStep === 'phone' ? (
        <div className="phone-step">
          <div className="step-icon">📱</div>
          <h3>Enter Your Phone Number</h3>
          <p>We'll send a verification code to your phone</p>
          
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
            {isLoading ? 'Sending...' : 'Send Verification Code'}
          </button>
          
          <div className="login-note">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </div>
        </div>
      ) : (
        <div className="code-step">
          <div className="step-icon">🔐</div>
          <h3>Enter Verification Code</h3>
          <p>We sent a code to +880 {phoneNumber}</p>
          
          <input 
            type="text" 
            placeholder="Enter 6-digit code" 
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            className="code-input" 
            maxLength="6" 
          />
          
          <div className="code-actions">
            <button className="resend-code" onClick={onSendCode}>
              Resend Code
            </button>
            <button className="verify-btn" onClick={onVerifyCode}>
              Verify & Login
            </button>
          </div>
          
          <button className="back-to-phone" onClick={onBackToPhone}>
            ← Change Phone Number
          </button>
        </div>
      )}
    </div>
  </Modal>
);

const DonorProfileModal = ({ isOpen, onClose, donor, onContactDonor, isCurrentUser }) => {
  if (!donor) return null;
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="donor-profile-modal">
      <div className="modal-header">
        <h2>Donor Profile</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="donor-profile-content">
        <div className="profile-header">
          <div className="profile-avatar">{donor.image}</div>
          <div className="profile-info">
            <h3>{donor.name} {isCurrentUser && <span className="you-badge">(You)</span>}</h3>
            <div className="profile-badges">
              <span className={`blood-type-large ${donor.bloodType === 'O-' ? 'universal' : ''}`}>
                {donor.bloodType}
              </span>
              <span className="donor-level">{donor.badge}</span>
              {donor.verified && <span className="verified-badge">✅ Verified</span>}
              {isCurrentUser && <span className="current-badge">👤 Your Profile</span>}
            </div>
            <div className="profile-rating">⭐ {donor.rating} ({donor.donations} donations)</div>
          </div>
        </div>

        <div className="profile-details-grid">
          <div className="detail-section">
            <h4>👤 Personal Information</h4>
            <div className="detail-row">
              <span className="detail-label">Gender:</span>
              <span className="detail-value">{donor.gender}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Age:</span>
              <span className="detail-value">{donor.age} years</span>
            </div>
            {donor.weight && (
              <div className="detail-row">
                <span className="detail-label">Weight:</span>
                <span className="detail-value">{donor.weight}</span>
              </div>
            )}
            {donor.height && (
              <div className="detail-row">
                <span className="detail-label">Height:</span>
                <span className="detail-value">{donor.height}</span>
              </div>
            )}
            {donor.occupation && (
              <div className="detail-row">
                <span className="detail-label">Occupation:</span>
                <span className="detail-value">{donor.occupation}</span>
              </div>
            )}
          </div>

          <div className="detail-section">
            <h4>📍 Location & Contact</h4>
            <div className="detail-row">
              <span className="detail-label">Location:</span>
              <span className="detail-value">{donor.area}, {donor.city}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Availability:</span>
              <span className="detail-value highlight">{donor.availability}</span>
            </div>
            {donor.languages && (
              <div className="detail-row">
                <span className="detail-label">Languages:</span>
                <span className="detail-value">{donor.languages.join(', ')}</span>
              </div>
            )}
          </div>

          <div className="detail-section">
            <h4>🩸 Donation Information</h4>
            <div className="detail-row">
              <span className="detail-label">Last Donation:</span>
              <span className="detail-value highlight">{donor.lastDonation}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Total Donations:</span>
              <span className="detail-value">{donor.donations}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Emergency Ready:</span>
              <span className="detail-value">{donor.emergencyAvailable ? '✅ Yes' : '❌ No'}</span>
            </div>
          </div>

          {donor.medicalInfo && (
            <div className="detail-section full-width">
              <h4>📋 Medical Information</h4>
              <div className="medical-info">{donor.medicalInfo}</div>
            </div>
          )}

          {donor.achievements && donor.achievements.length > 0 && (
            <div className="detail-section full-width">
              <h4>🏆 Achievements</h4>
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
            <button className="contact-btn large" onClick={() => onContactDonor(donor)}>
              📞 Contact {donor.name}
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

const Footer = ({ onNavigate, onRegisterDonor }) => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>🩸 DR. BLOOD 24/7</h3>
        <p>Bangladesh's most trusted blood donation network. Saving lives through community partnership and verified donor connections.</p>
        <div className="footer-stats">
          <div className="footer-stat">
            <strong>2,500+</strong>
            <span>Lives Saved</span>
          </div>
          <div className="footer-stat">
            <strong>50+</strong>
            <span>Partner Locations</span>
          </div>
          <div className="footer-stat">
            <strong>8</strong>
            <span>Cities</span>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('donors')}>Find Donors</button>
        <button onClick={onRegisterDonor}>Become Donor</button>
      </div>
      <div className="footer-section">
        <h4>Contact Info</h4>
        <p>📧 help@lifestreamconnect.bd</p>
        <p>📞 +880 2-2222-HELP</p>
        <p>📍 Available across Bangladesh</p>
        <p>⏰ 24/7 Coordination Center</p>
      </div>
      <div className="footer-section">
        <h4>Emergency Contacts</h4>
        <p>🚨 National Emergency: 999</p>
        <p>🏥 Ambulance Service: 199</p>
        <p>🩸 Blood Bank Info: 16273</p>
        <p>🏭 DGHS Helpline: 16263</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 DR. BLOOD 24/7 Bangladesh. Developed by SAKIB CHOWDHURY SOHAN</p>
    </div>
  </footer>
);

export default App;

