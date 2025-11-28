# /* ===== PROFESSIONAL CSS ENHANCEMENT - LIFESTREAM CONNECT ===== */
# /* ===== ENHANCED CSS VARIABLES ===== */

# @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

# .icon-alert::before { content: "🚨"; }
# .icon-shield::before { content: "🛡️"; }
# .icon-search::before { content: "🔍"; }
# .icon-location::before { content: "📍"; }
# .icon-drop::before { content: "💉"; }



# :root {
#   /* ===== PROFESSIONAL COLOR PALETTE ===== */
#   --primary-red: #e63946;
#   --primary-dark: #d00000;
#   --primary-light: #ff6b6b;
#   --primary-lighter: #ff8fa3;
  
#   --secondary-blue: #457b9d;
#   --secondary-dark: #1d3557;
#   --secondary-light: #a8dadc;
  
#   --accent-gold: #fca311;
#   --accent-orange: #e76f51;
#   --accent-teal: #2a9d8f;
#   --accent-emerald: #264653;
  
#   --neutral-dark: #0f1419;
#   --neutral-darker: #0a0f14;
#   --neutral-darkest: #050a0f;
#   --neutral-light: #f8f9fa;
#   --neutral-lighter: #ffffff;

#   /* ===== ENHANCED GRADIENTS ===== */
#   --primary-gradient: linear-gradient(135deg, var(--primary-red), var(--primary-dark));
#   --primary-gradient-light: linear-gradient(135deg, var(--primary-light), var(--primary-red));
#   --primary-gradient-glow: linear-gradient(135deg, var(--primary-lighter), var(--primary-light), var(--primary-red));
  
#   --secondary-gradient: linear-gradient(135deg, var(--secondary-blue), var(--secondary-dark));
#   --accent-gradient: linear-gradient(135deg, var(--accent-gold), var(--accent-orange));
#   --success-gradient: linear-gradient(135deg, var(--accent-teal), var(--accent-emerald));
#   --premium-gradient: linear-gradient(135deg, #667eea, #764ba2);
  
#   /* ===== PROFESSIONAL BACKGROUND SYSTEM ===== */
#   --bg-dark: var(--neutral-dark);
#   --bg-darker: var(--neutral-darker);
#   --bg-darkest: var(--neutral-darkest);
#   --bg-gradient: linear-gradient(135deg, 
#     var(--bg-dark) 0%, 
#     var(--bg-darker) 50%, 
#     var(--bg-darkest) 100%);
#   --bg-glass: rgba(255, 255, 255, 0.08);
#   --bg-glass-dark: rgba(0, 0, 0, 0.3);
  
#   /* ===== ENHANCED SURFACE COLORS ===== */
#   --surface-01: rgba(255, 255, 255, 0.02);
#   --surface-05: rgba(255, 255, 255, 0.05);
#   --surface-10: rgba(255, 255, 255, 0.1);
#   --surface-15: rgba(255, 255, 255, 0.15);
#   --surface-20: rgba(255, 255, 255, 0.2);
#   --surface-25: rgba(255, 255, 255, 0.25);
#   --surface-glass: rgba(255, 255, 255, 0.08);
  
#   /* ===== PROFESSIONAL TEXT COLORS ===== */
#   --text-primary: #ffffff;
#   --text-secondary: #e2e8f0;
#   --text-tertiary: #94a3b8;
#   --text-muted: #64748b;
#   --text-accent: var(--primary-light);
#   --text-success: var(--accent-teal);
#   --text-warning: var(--accent-gold);
#   --text-danger: var(--primary-red);
  
#   /* ===== ENHANCED SPACING SYSTEM ===== */
#   --space-xxs: 0.125rem;
#   --space-xs: 0.25rem;
#   --space-sm: 0.5rem;
#   --space-md: 1rem;
#   --space-lg: 1.5rem;
#   --space-xl: 2rem;
#   --space-2xl: 3rem;
#   --space-3xl: 4rem;
#   --space-4xl: 6rem;
#   --space-5xl: 8rem;
  
#   /* ===== PROFESSIONAL BORDER RADIUS ===== */
#   --radius-xs: 0.25rem;
#   --radius-sm: 0.5rem;
#   --radius-md: 0.75rem;
#   --radius-lg: 1rem;
#   --radius-xl: 1.5rem;
#   --radius-2xl: 2rem;
#   --radius-pill: 2rem;
#   --radius-full: 50%;
  
#   /* ===== ENHANCED SHADOW SYSTEM ===== */
#   --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.1);
#   --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
#   --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
#   --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
#   --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.6);
#   --shadow-2xl: 0 24px 64px rgba(0, 0, 0, 0.7);
  
#   /* ===== GLOW EFFECTS ===== */
#   --glow-primary: 0 0 20px rgba(230, 57, 70, 0.3);
#   --glow-primary-strong: 0 0 30px rgba(230, 57, 70, 0.5);
#   --glow-secondary: 0 0 20px rgba(69, 123, 157, 0.3);
#   --glow-accent: 0 0 20px rgba(252, 163, 17, 0.3);
#   --glow-success: 0 0 20px rgba(42, 157, 143, 0.3);
#   --glow-premium: 0 0 20px rgba(102, 126, 234, 0.3);
  
#   /* ===== PROFESSIONAL TRANSITIONS ===== */
#   --transition-ultrafast: 0.1s cubic-bezier(0.4, 0, 0.2, 1);
#   --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
#   --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
#   --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
#   --transition-slower: 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
#   /* ===== TYPOGRAPHY SCALE ===== */
#   --text-xs: 0.75rem;
#   --text-sm: 0.875rem;
#   --text-base: 1rem;
#   --text-lg: 1.125rem;
#   --text-xl: 1.25rem;
#   --text-2xl: 1.5rem;
#   --text-3xl: 1.875rem;
#   --text-4xl: 2.25rem;
#   --text-5xl: 3rem;
#   --text-6xl: 3.75rem;
#   --text-7xl: 4.5rem;
#   --text-8xl: 6rem;
#   --text-9xl: 8rem;
  
#   /* ===== Z-INDEX SYSTEM ===== */
#   --z-dropdown: 1000;
#   --z-sticky: 1020;
#   --z-fixed: 1030;
#   --z-modal-backdrop: 1040;
#   --z-modal: 1050;
#   --z-popover: 1060;
#   --z-tooltip: 1070;
#   --z-toast: 1080;
# }

# /* ===== CSS RESET & BASE ENHANCEMENTS ===== */
# *, *::before, *::after {
#   box-sizing: border-box;
#   margin: 0;
#   padding: 0;
# }

# html {
#   font-size: 16px;
#   scroll-behavior: smooth;
#   -webkit-text-size-adjust: 100%;
# }

# body {
#   font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
#   background: 
#     /* Animated gradient orbs */
#     radial-gradient(circle at 20% 80%, rgba(230, 57, 70, 0.15) 0%, transparent 50%),
#     radial-gradient(circle at 80% 20%, rgba(69, 123, 157, 0.15) 0%, transparent 50%),
#     radial-gradient(circle at 40% 40%, rgba(252, 163, 17, 0.1) 0%, transparent 50%),
#     radial-gradient(circle at 60% 60%, rgba(42, 157, 143, 0.1) 0%, transparent 50%),
#     /* Main background */
#     var(--bg-gradient);
#   min-height: 100vh;
#   color: var(--text-primary);
#   line-height: 1.6;
#   overflow-x: hidden;
#   -webkit-font-smoothing: antialiased;
#   -moz-osx-font-smoothing: grayscale;
#   text-rendering: optimizeLegibility;
# }

# /* ===== ENHANCED BACKGROUND ELEMENTS ===== */
# .background-elements {
#   position: fixed;
#   top: 0;
#   left: 0;
#   width: 100%;
#   height: 100%;
#   pointer-events: none;
#   z-index: -1;
#   overflow: hidden;
#   background: 
#     /* Subtle noise texture */
#     url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
# }

# .floating-blood-cell, .floating-heart, .floating-plus, .floating-droplet {
#   position: absolute;
#   font-size: clamp(1.5rem, 4vw, 2.5rem);
#   opacity: 0.08;
#   animation: floatProfessional 8s ease-in-out infinite;
#   filter: drop-shadow(0 0 10px currentColor);
#   z-index: -1;
# }

# .floating-blood-cell { 
#   top: 15%; 
#   left: 8%; 
#   animation-delay: 0s; 
#   color: var(--primary-red);
#   animation-duration: 9s;
# }

# .floating-heart { 
#   top: 65%; 
#   right: 12%; 
#   animation-delay: 2.5s; 
#   color: var(--primary-light);
#   animation-duration: 11s;
# }

# .floating-plus { 
#   top: 35%; 
#   right: 20%; 
#   animation-delay: 5s; 
#   color: var(--accent-gold);
#   animation-duration: 10s;
# }

# .floating-droplet {
#   top: 75%;
#   left: 15%;
#   animation-delay: 7s;
#   color: var(--secondary-blue);
#   animation-duration: 12s;
# }

# @keyframes floatProfessional {
#   0%, 100% { 
#     transform: translateY(0px) rotate(0deg) scale(1); 
#     filter: drop-shadow(0 0 10px currentColor);
#   }
#   25% { 
#     transform: translateY(-30px) rotate(90deg) scale(1.1); 
#     filter: drop-shadow(0 0 15px currentColor);
#   }
#   50% { 
#     transform: translateY(10px) rotate(180deg) scale(0.95); 
#     filter: drop-shadow(0 0 20px currentColor);
#   }
#   75% { 
#     transform: translateY(-20px) rotate(270deg) scale(1.05); 
#     filter: drop-shadow(0 0 12px currentColor);
#   }
# }

# /* ===== PROFESSIONAL NAVIGATION ENHANCEMENTS ===== */
# .navbar {
#   background: rgba(15, 20, 25, 0.85);
#   backdrop-filter: blur(20px) saturate(180%);
#   border-bottom: 1px solid rgba(255, 255, 255, 0.1);
#   position: sticky;
#   top: 0;
#   z-index: var(--z-sticky);
#   transition: all var(--transition-normal);
# }

# .navbar.scrolled {
#   background: rgba(15, 20, 25, 0.95);
#   border-bottom-color: rgba(255, 255, 255, 0.15);
#   box-shadow: var(--shadow-lg);
# }

# .nav-container {
#   max-width: 1200px;
#   margin: 0 auto;
#   padding: 0 var(--space-xl);
#   display: flex;
#   justify-content: space-between;
#   align-items: center;
#   height: 80px;
#   gap: var(--space-lg);
# }

# .logo {
#   display: flex;
#   align-items: center;
#   gap: var(--space-md);
#   cursor: pointer;
#   transition: all var(--transition-normal);
#   position: relative;
# }

# .logo:hover {
#   transform: translateY(-2px);
# }

# .logo-icon {
#   font-size: clamp(1.75rem, 4vw, 2rem);
#   background: var(--primary-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
#   filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
#   transition: all var(--transition-normal);
# }

# .logo:hover .logo-icon {
#   filter: drop-shadow(0 4px 8px rgba(230, 57, 70, 0.4));
# }

# .logo-text {
#   font-size: clamp(1.25rem, 3vw, 1.5rem);
#   font-weight: 800;
#   background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
#   letter-spacing: -0.5px;
# }

# .logo-subtitle {
#   font-size: var(--text-xs);
#   color: var(--text-tertiary);
#   margin-top: -0.25rem;
#   font-weight: 500;
#   letter-spacing: 0.5px;
# }

# .nav-links {
#   display: flex;
#   align-items: center;
#   gap: var(--space-sm);
#   flex-wrap: wrap;
# }

# /* ===== ENHANCED NAV LINK DESIGN ===== */
# .nav-link {
#   padding: var(--space-md) var(--space-lg);
#   border-radius: var(--radius-pill);
#   font-weight: 600;
#   cursor: pointer;
#   transition: all var(--transition-normal);
#   color: var(--text-secondary);
#   border: 2px solid transparent;
#   background: none;
#   position: relative;
#   overflow: hidden;
#   font-size: var(--text-sm);
#   letter-spacing: 0.3px;
# }

# .nav-link::before {
#   content: '';
#   position: absolute;
#   top: 0;
#   left: -100%;
#   width: 100%;
#   height: 100%;
#   background: linear-gradient(90deg, 
#     transparent, 
#     rgba(255, 255, 255, 0.1), 
#     transparent);
#   transition: left var(--transition-slow);
# }

# .nav-link:hover::before {
#   left: 100%;
# }

# .nav-link:hover {
#   background: var(--surface-glass);
#   color: var(--text-primary);
#   border-color: var(--surface-20);
#   transform: translateY(-2px);
#   box-shadow: var(--shadow-sm);
# }

# .nav-link.active {
#   background: var(--primary-gradient);
#   color: var(--text-primary);
#   border-color: transparent;
#   box-shadow: var(--shadow-md), var(--glow-primary);
#   transform: translateY(-2px);
# }

# .nav-link.active::after {
#   content: '';
#   position: absolute;
#   bottom: 2px;
#   left: 50%;
#   transform: translateX(-50%);
#   width: 20px;
#   height: 2px;
#   background: var(--text-primary);
#   border-radius: var(--radius-xs);
# }

# /* ===== PROFESSIONAL BUTTON SYSTEM ===== */
# .btn {
#   padding: var(--space-md) var(--space-xl);
#   border-radius: var(--radius-pill);
#   font-weight: 600;
#   cursor: pointer;
#   transition: all var(--transition-normal);
#   display: inline-flex;
#   align-items: center;
#   gap: var(--space-sm);
#   border: 2px solid transparent;
#   position: relative;
#   overflow: hidden;
#   font-size: var(--text-sm);
#   letter-spacing: 0.5px;
#   text-transform: none;
#   backdrop-filter: blur(10px);
#   text-decoration: none;
#   outline: none;
#   user-select: none;
# }

# .btn:focus {
#   outline: 2px solid var(--primary-light);
#   outline-offset: 2px;
# }

# .btn:disabled {
#   opacity: 0.6;
#   cursor: not-allowed;
#   transform: none !important;
# }

# .btn:disabled:hover {
#   transform: none !important;
#   box-shadow: none !important;
# }

# /* Button Hover Effects */
# .btn::before {
#   content: '';
#   position: absolute;
#   top: 0;
#   left: -100%;
#   width: 100%;
#   height: 100%;
#   background: linear-gradient(90deg, 
#     transparent, 
#     rgba(255, 255, 255, 0.2), 
#     transparent);
#   transition: left var(--transition-slow);
# }

# .btn:hover::before {
#   left: 100%;
# }

# /* Primary Button - Professional */
# .btn-primary {
#   background: var(--primary-gradient);
#   color: var(--text-primary);
#   box-shadow: var(--shadow-md), var(--glow-primary);
#   border: 2px solid rgba(255, 255, 255, 0.1);
#   font-weight: 700;
# }

# .btn-primary:hover:not(:disabled) {
#   transform: translateY(-3px);
#   box-shadow: var(--shadow-lg), var(--glow-primary-strong);
#   border-color: rgba(255, 255, 255, 0.2);
# }

# .btn-primary:active:not(:disabled) {
#   transform: translateY(-1px);
#   box-shadow: var(--shadow-md), var(--glow-primary);
# }

# /* Secondary Button - Professional */
# .btn-secondary {
#   background: var(--surface-glass);
#   color: var(--text-primary);
#   border: 2px solid var(--surface-20);
#   backdrop-filter: blur(20px);
#   box-shadow: var(--shadow-sm);
#   font-weight: 600;
# }

# .btn-secondary:hover:not(:disabled) {
#   background: var(--surface-10);
#   border-color: var(--primary-light);
#   transform: translateY(-3px);
#   box-shadow: var(--shadow-md), var(--glow-primary);
# }

# /* Tertiary Button - Professional */
# .btn-tertiary {
#   background: transparent;
#   color: var(--text-secondary);
#   border: 2px solid var(--surface-20);
#   backdrop-filter: blur(10px);
#   font-weight: 500;
# }

# .btn-tertiary:hover:not(:disabled) {
#   background: var(--surface-05);
#   border-color: var(--accent-gold);
#   color: var(--text-primary);
#   transform: translateY(-3px);
#   box-shadow: var(--shadow-sm);
# }

# /* Success Button */
# .btn-success {
#   background: var(--success-gradient);
#   color: var(--text-primary);
#   box-shadow: var(--shadow-md), var(--glow-success);
#   border: 2px solid rgba(42, 157, 143, 0.3);
#   font-weight: 700;
# }

# .btn-success:hover:not(:disabled) {
#   transform: translateY(-3px);
#   box-shadow: var(--shadow-lg), 0 0 30px rgba(42, 157, 143, 0.4);
# }

# /* Accent Button */
# .btn-accent {
#   background: var(--accent-gradient);
#   color: var(--text-primary);
#   box-shadow: var(--shadow-md), var(--glow-accent);
#   border: 2px solid rgba(252, 163, 17, 0.3);
#   font-weight: 700;
# }

# .btn-accent:hover:not(:disabled) {
#   transform: translateY(-3px);
#   box-shadow: var(--shadow-lg), 0 0 30px rgba(252, 163, 17, 0.4);
# }

# /* Premium Button */
# .btn-premium {
#   background: var(--premium-gradient);
#   color: var(--text-primary);
#   box-shadow: var(--shadow-md), var(--glow-premium);
#   border: 2px solid rgba(102, 126, 234, 0.3);
#   font-weight: 700;
# }

# .btn-premium:hover:not(:disabled) {
#   transform: translateY(-3px);
#   box-shadow: var(--shadow-lg), 0 0 30px rgba(102, 126, 234, 0.4);
# }

# /* Ghost Button */
# .btn-ghost {
#   background: transparent;
#   color: var(--text-secondary);
#   border: 2px solid transparent;
#   font-weight: 500;
# }

# .btn-ghost:hover:not(:disabled) {
#   background: var(--surface-05);
#   color: var(--text-primary);
#   border-color: var(--surface-20);
#   transform: translateY(-2px);
# }

# /* Button Sizes */
# .btn-xs {
#   padding: var(--space-xs) var(--space-sm);
#   font-size: var(--text-xs);
#   border-radius: var(--radius-sm);
# }

# .btn-sm {
#   padding: var(--space-sm) var(--space-md);
#   font-size: var(--text-sm);
#   border-radius: var(--radius-md);
# }

# .btn-lg {
#   padding: var(--space-lg) var(--space-2xl);
#   font-size: var(--text-lg);
#   border-radius: var(--radius-xl);
# }

# .btn-xl {
#   padding: var(--space-xl) var(--space-3xl);
#   font-size: var(--text-xl);
#   border-radius: var(--radius-2xl);
#   font-weight: 700;
# }

# /* Button with loading state */
# .btn-loading {
#   position: relative;
#   color: transparent !important;
# }

# .btn-loading::after {
#   content: '';
#   position: absolute;
#   top: 50%;
#   left: 50%;
#   transform: translate(-50%, -50%);
#   width: 20px;
#   height: 20px;
#   border: 2px solid transparent;
#   border-top: 2px solid currentColor;
#   border-radius: var(--radius-full);
#   animation: spin 1s linear infinite;
# }

# /* ===== SPECIALIZED BUTTONS ===== */
# .register-btn, .login-btn, .logout-btn {
#   padding: var(--space-md) var(--space-lg);
#   border-radius: var(--radius-pill);
#   font-weight: 600;
#   cursor: pointer;
#   transition: all var(--transition-normal);
#   display: inline-flex;
#   align-items: center;
#   gap: var(--space-sm);
#   border: 2px solid transparent;
#   position: relative;
#   overflow: hidden;
#   font-size: var(--text-sm);
# }

# .register-btn {
#   background: var(--primary-gradient);
#   color: var(--text-primary);
#   box-shadow: var(--shadow-md), var(--glow-primary);
#   border: 2px solid rgba(255, 255, 255, 0.1);
# }

# .register-btn:hover {
#   transform: translateY(-3px);
#   box-shadow: var(--shadow-lg), var(--glow-primary-strong);
#   border-color: rgba(255, 255, 255, 0.2);
# }

# .login-btn, .logout-btn {
#   background: var(--surface-glass);
#   color: var(--text-primary);
#   border: 2px solid var(--surface-20);
#   backdrop-filter: blur(20px);
#   box-shadow: var(--shadow-sm);
# }

# .login-btn:hover, .logout-btn:hover {
#   background: var(--surface-10);
#   border-color: var(--primary-light);
#   transform: translateY(-3px);
#   box-shadow: var(--shadow-md), var(--glow-primary);
# }

# /* ===== MAIN CONTENT ENHANCEMENTS ===== */
# .main-content {
#   flex: 1;
#   max-width: 1200px;
#   margin: 0 auto;
#   padding: var(--space-3xl) var(--space-xl);
#   width: 100%;
#   position: relative;
# }

# /* ===== ENHANCED HERO SECTION ===== */
# .hero-section {
#   text-align: center;
#   padding: clamp(3rem, 8vw, 6rem) 0;
#   position: relative;
# }

# .hero-content {
#   max-width: 800px;
#   margin: 0 auto;
#   position: relative;
#   z-index: 2;
# }

# .hero-badge {
#   display: inline-block;
#   background: linear-gradient(135deg, rgba(230, 57, 70, 0.2), rgba(255, 107, 107, 0.2));
#   padding: var(--space-sm) var(--space-lg);
#   border-radius: var(--radius-pill);
#   font-size: var(--text-sm);
#   font-weight: 600;
#   margin-bottom: var(--space-2xl);
#   backdrop-filter: blur(10px);
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   color: var(--text-primary);
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
#   box-shadow: var(--shadow-sm);
# }

# .hero-title {
#   font-size: clamp(2.5rem, 8vw, 4rem);
#   font-weight: 800;
#   margin-bottom: var(--space-xl);
#   line-height: 1.1;
#   background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
#   text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
#   letter-spacing: -0.5px;
# }

# .highlight {
#   background: var(--primary-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
#   position: relative;
# }

# .highlight::after {
#   content: '';
#   position: absolute;
#   bottom: -2px;
#   left: 0;
#   width: 100%;
#   height: 2px;
#   background: var(--primary-gradient);
#   border-radius: var(--radius-xs);
# }

# .hero-subtitle {
#   font-size: clamp(1rem, 3vw, 1.25rem);
#   color: var(--text-secondary);
#   max-width: 600px;
#   margin: 0 auto var(--space-3xl);
#   line-height: 1.6;
#   font-weight: 400;
# }

# .hero-buttons {
#   display: flex;
#   gap: var(--space-lg);
#   justify-content: center;
#   flex-wrap: wrap;
#   margin-bottom: var(--space-3xl);
# }

# /* ===== ENHANCED LIVE STATS ===== */
# .live-stats {
#   display: grid;
#   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
#   gap: var(--space-lg);
#   max-width: 600px;
#   margin: 0 auto;
# }

# .stat-item.live {
#   background: var(--surface-glass);
#   backdrop-filter: blur(20px);
#   padding: var(--space-xl);
#   border-radius: var(--radius-lg);
#   text-align: center;
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   display: flex;
#   align-items: center;
#   gap: var(--space-md);
#   transition: all var(--transition-normal);
#   position: relative;
#   overflow: hidden;
# }

# .stat-item.live::before {
#   content: '';
#   position: absolute;
#   top: 0;
#   left: -100%;
#   width: 100%;
#   height: 100%;
#   background: linear-gradient(90deg, 
#     transparent, 
#     rgba(255, 255, 255, 0.05), 
#     transparent);
#   transition: left var(--transition-slow);
# }

# .stat-item.live:hover::before {
#   left: 100%;
# }

# .stat-item.live:hover {
#   transform: translateY(-5px);
#   border-color: rgba(230, 57, 70, 0.3);
#   box-shadow: var(--shadow-lg), var(--glow-primary);
# }

# .stat-icon {
#   font-size: 2rem;
#   flex-shrink: 0;
#   filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
# }

# .stat-content {
#   text-align: left;
#   flex: 1;
# }

# .stat-number {
#   font-size: 1.75rem;
#   font-weight: 800;
#   color: var(--text-primary);
#   margin-bottom: var(--space-xs);
#   background: var(--primary-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# .stat-label {
#   font-size: var(--text-sm);
#   color: var(--text-tertiary);
#   font-weight: 500;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
# }

# /* ===== ENHANCED FEATURES SECTION ===== */
# .features-section {
#   margin: var(--space-4xl) 0;
#   position: relative;
# }

# .section-title {
#   text-align: center;
#   font-size: clamp(2rem, 5vw, 2.625rem);
#   font-weight: 800;
#   margin-bottom: var(--space-3xl);
#   background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
#   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
#   letter-spacing: -0.5px;
# }

# .features-grid {
#   display: grid;
#   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
#   gap: var(--space-xl);
# }

# .feature-card {
#   background: linear-gradient(135deg, 
#     var(--surface-glass) 0%,
#     rgba(255, 255, 255, 0.02) 100%);
#   backdrop-filter: blur(20px);
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   border-radius: var(--radius-lg);
#   padding: var(--space-2xl);
#   transition: all var(--transition-normal);
#   position: relative;
#   overflow: hidden;
#   text-align: center;
# }

# .feature-card::before {
#   content: '';
#   position: absolute;
#   top: 0;
#   left: -100%;
#   width: 100%;
#   height: 100%;
#   background: linear-gradient(90deg, 
#     transparent, 
#     rgba(255, 255, 255, 0.05), 
#     transparent);
#   transition: left var(--transition-slow);
# }

# .feature-card:hover::before {
#   left: 100%;
# }

# .feature-card:hover {
#   transform: translateY(-8px);
#   border-color: rgba(230, 57, 70, 0.3);
#   box-shadow: var(--shadow-lg), var(--glow-primary);
# }

# .feature-icon {
#   font-size: 3rem;
#   margin-bottom: var(--space-lg);
#   display: block;
#   background: var(--primary-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
#   filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
# }

# .feature-card h3 {
#   font-size: 1.5rem;
#   margin-bottom: var(--space-md);
#   color: var(--text-primary);
#   font-weight: 700;
#   letter-spacing: -0.5px;
# }

# .feature-card p {
#   color: var(--text-secondary);
#   line-height: 1.6;
#   font-size: 1rem;
#   font-weight: 400;
# }

# /* ===== ENHANCED BLOOD TYPES SECTION ===== */
# .blood-types-section {
#   margin: var(--space-4xl) 0;
#   text-align: center;
# }

# .blood-types-grid {
#   display: grid;
#   grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
#   gap: var(--space-md);
#   max-width: 600px;
#   margin: 0 auto var(--space-xl);
# }

# .blood-type-card {
#   background: var(--surface-glass);
#   backdrop-filter: blur(20px);
#   padding: var(--space-xl);
#   border-radius: var(--radius-md);
#   border: 2px solid rgba(255, 255, 255, 0.1);
#   transition: all var(--transition-normal);
#   position: relative;
#   cursor: pointer;
#   text-align: center;
# }

# .blood-type-card:hover {
#   transform: scale(1.05);
#   border-color: rgba(230, 57, 70, 0.5);
#   box-shadow: var(--shadow-md), var(--glow-primary);
# }

# .blood-type-card.universal-donor {
#   border-color: var(--primary-red);
#   background: linear-gradient(135deg, 
#     rgba(230, 57, 70, 0.15), 
#     rgba(208, 0, 0, 0.1));
#   animation: pulseProfessional 2s ease-in-out infinite;
# }

# .blood-type-card.universal-receiver {
#   border-color: var(--secondary-blue);
#   background: linear-gradient(135deg, 
#     rgba(69, 123, 157, 0.15), 
#     rgba(29, 53, 87, 0.1));
# }

# .blood-type {
#   font-size: 1.5rem;
#   font-weight: 800;
#   color: var(--text-primary);
# }

# .universal-badge {
#   position: absolute;
#   top: -8px;
#   right: -8px;
#   background: var(--primary-gradient);
#   color: var(--text-primary);
#   padding: var(--space-xs) var(--space-sm);
#   border-radius: var(--radius-sm);
#   font-size: var(--text-xs);
#   font-weight: 800;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
#   box-shadow: var(--shadow-sm);
# }

# .receiver-badge {
#   position: absolute;
#   top: -8px;
#   right: -8px;
#   background: var(--secondary-gradient);
#   color: var(--text-primary);
#   padding: var(--space-xs) var(--space-sm);
#   border-radius: var(--radius-sm);
#   font-size: var(--text-xs);
#   font-weight: 800;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
#   box-shadow: var(--shadow-sm);
# }

# .compatibility-info {
#   margin-top: var(--space-xl);
#   text-align: center;
# }

# .compatibility-info p {
#   color: var(--text-secondary);
#   font-size: var(--text-sm);
#   font-weight: 500;
# }

# /* ===== ENHANCED EMERGENCY CTA ===== */
# .emergency-cta {
#   background: linear-gradient(135deg, rgba(230, 57, 70, 0.2), rgba(255, 107, 107, 0.2));
#   border-radius: var(--radius-xl);
#   padding: var(--space-3xl);
#   text-align: center;
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   backdrop-filter: blur(20px);
#   margin: var(--space-4xl) 0;
#   position: relative;
#   overflow: hidden;
# }

# .emergency-cta::before {
#   content: '';
#   position: absolute;
#   top: 0;
#   left: -100%;
#   width: 100%;
#   height: 100%;
#   background: linear-gradient(90deg, 
#     transparent, 
#     rgba(255, 255, 255, 0.1), 
#     transparent);
#   transition: left var(--transition-slow);
# }

# .emergency-cta:hover::before {
#   left: 100%;
# }

# .emergency-content {
#   display: flex;
#   align-items: center;
#   justify-content: space-between;
#   gap: var(--space-xl);
#   position: relative;
#   z-index: 2;
# }

# .emergency-icon {
#   font-size: clamp(3rem, 6vw, 4rem);
#   flex-shrink: 0;
#   animation: heartbeat 2s ease-in-out infinite;
#   filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
# }

# @keyframes heartbeat {
#   0%, 100% { 
#     transform: scale(1); 
#   }
#   25% { 
#     transform: scale(1.1); 
#   }
#   50% { 
#     transform: scale(1.05); 
#   }
#   75% { 
#     transform: scale(1.08); 
#   }
# }

# .emergency-text {
#   flex: 1;
#   text-align: left;
# }

# .emergency-text h2 {
#   font-size: clamp(1.5rem, 4vw, 2rem);
#   margin-bottom: var(--space-sm);
#   color: var(--text-primary);
#   font-weight: 800;
#   background: var(--primary-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# .emergency-text p {
#   color: var(--text-secondary);
#   font-size: clamp(1rem, 2vw, 1.125rem);
#   font-weight: 400;
#   line-height: 1.6;
# }

# .emergency-btn {
#   background: var(--text-primary);
#   color: var(--primary-red);
#   border: none;
#   padding: var(--space-lg) var(--space-xl);
#   border-radius: var(--radius-xl);
#   font-weight: 800;
#   cursor: pointer;
#   transition: all var(--transition-normal);
#   flex-shrink: 0;
#   box-shadow: var(--shadow-lg);
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
# }

# .emergency-btn:hover {
#   transform: scale(1.05);
#   box-shadow: var(--shadow-xl), 0 0 30px rgba(255, 255, 255, 0.3);
# }

# /* ===== ENHANCED DONORS PAGE ===== */
# .donors-page {
#   background: var(--surface-glass);
#   backdrop-filter: blur(20px);
#   border-radius: var(--radius-xl);
#   padding: var(--space-2xl);
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   box-shadow: var(--shadow-lg);
# }

# .page-header {
#   text-align: center;
#   margin-bottom: var(--space-2xl);
# }

# .page-header h1 {
#   font-size: clamp(2rem, 5vw, 2.625rem);
#   color: var(--text-primary);
#   margin-bottom: var(--space-md);
#   background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
#   font-weight: 800;
#   letter-spacing: -0.5px;
# }

# .page-header p {
#   color: var(--text-secondary);
#   font-size: clamp(1rem, 2vw, 1.125rem);
#   font-weight: 400;
# }

# /* ===== ENHANCED EMERGENCY HOTLINE ===== */
# .emergency-hotline-fixed {
#   position: fixed;
#   top: 50%;
#   right: 20px;
#   transform: translateY(-50%);
#   z-index: var(--z-fixed);
# }

# .hotline-content {
#   background: var(--primary-gradient);
#   color: var(--text-primary);
#   padding: 15px 20px;
#   border-radius: var(--radius-pill);
#   box-shadow: var(--shadow-lg), var(--glow-primary-strong);
#   cursor: pointer;
#   transition: all var(--transition-normal);
#   animation: pulseEmergency 2s ease-in-out infinite;
#   display: flex;
#   align-items: center;
#   gap: 12px;
#   min-width: 160px;
#   backdrop-filter: blur(10px);
#   border: 2px solid rgba(255, 255, 255, 0.2);
#   font-weight: 600;
# }

# .hotline-content:hover {
#   transform: translateY(-5px) scale(1.05);
#   box-shadow: var(--shadow-xl), 0 0 40px rgba(230, 57, 70, 0.7);
#   animation: none;
# }

# @keyframes pulseEmergency {
#   0%, 100% { 
#     box-shadow: var(--shadow-lg), var(--glow-primary-strong);
#   }
#   50% { 
#     box-shadow: var(--shadow-lg), 0 0 40px rgba(230, 57, 70, 0.8);
#   }
# }

# .hotline-icon {
#   font-size: 24px;
#   animation: shake 0.5s ease-in-out infinite alternate;
#   filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
# }

# @keyframes shake {
#   from { 
#     transform: translateX(-2px) rotate(-5deg); 
#   }
#   to { 
#     transform: translateX(2px) rotate(5deg); 
#   }
# }

# .hotline-info {
#   display: flex;
#   flex-direction: column;
#   align-items: flex-start;
# }

# .hotline-title {
#   font-size: var(--text-xs);
#   font-weight: 600;
#   opacity: 0.9;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
# }

# .hotline-number {
#   font-size: var(--text-lg);
#   font-weight: 800;
#   letter-spacing: 0.5px;
# }

# /* ===== ENHANCED HEALTH TIPS AI ===== */
# .health-tips-ai {
#   position: fixed;
#   bottom: 20px;
#   left: 20px;
#   z-index: var(--z-fixed);
# }

# .health-tips-toggle {
#   background: var(--success-gradient);
#   color: var(--text-primary);
#   border: none;
#   padding: 12px 24px;
#   border-radius: var(--radius-pill);
#   font-weight: 600;
#   cursor: pointer;
#   box-shadow: var(--shadow-md), var(--glow-success);
#   transition: all var(--transition-normal);
#   backdrop-filter: blur(10px);
#   border: 2px solid rgba(255, 255, 255, 0.1);
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
#   font-size: var(--text-sm);
# }

# .health-tips-toggle:hover {
#   transform: translateY(-3px);
#   box-shadow: var(--shadow-lg), 0 0 30px rgba(42, 157, 143, 0.5);
# }

# .health-tips-panel {
#   position: absolute;
#   bottom: 100%;
#   left: 0;
#   width: 320px;
#   background: linear-gradient(135deg, 
#     rgba(30, 30, 30, 0.95), 
#     rgba(20, 20, 20, 0.98));
#   backdrop-filter: blur(30px);
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   border-radius: var(--radius-lg);
#   padding: 20px;
#   margin-bottom: 10px;
#   box-shadow: var(--shadow-xl);
# }

# .tips-header {
#   display: flex;
#   justify-content: space-between;
#   align-items: center;
#   margin-bottom: 15px;
#   padding-bottom: 10px;
#   border-bottom: 1px solid rgba(255, 255, 255, 0.1);
# }

# .tips-header h4 {
#   color: var(--text-primary);
#   margin: 0;
#   font-weight: 700;
#   background: var(--success-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# .close-tips {
#   background: none;
#   border: none;
#   color: var(--text-tertiary);
#   font-size: 20px;
#   cursor: pointer;
#   transition: color var(--transition-fast);
#   width: 30px;
#   height: 30px;
#   display: flex;
#   align-items: center;
#   justify-content: center;
#   border-radius: var(--radius-sm);
# }

# .close-tips:hover {
#   color: var(--text-primary);
#   background: var(--surface-10);
# }

# .current-tip {
#   background: var(--surface-glass);
#   padding: 15px;
#   border-radius: var(--radius-md);
#   margin-bottom: 15px;
#   color: var(--text-secondary);
#   line-height: 1.5;
#   border-left: 4px solid var(--accent-teal);
#   font-weight: 500;
# }

# .next-tip-btn {
#   width: 100%;
#   padding: 10px;
#   background: var(--surface-10);
#   color: var(--text-primary);
#   border: 1px solid var(--surface-20);
#   border-radius: var(--radius-md);
#   cursor: pointer;
#   transition: all var(--transition-normal);
#   margin-bottom: 10px;
#   font-weight: 600;
# }

# .next-tip-btn:hover {
#   background: var(--surface-20);
#   transform: translateY(-2px);
#   box-shadow: var(--shadow-sm);
# }

# .tips-note {
#   font-size: var(--text-xs);
#   color: var(--text-tertiary);
#   text-align: center;
#   line-height: 1.4;
#   font-style: italic;
# }

# /* ===== ENHANCED DONOR CARDS ===== */
# .donors-grid {
#   display: grid;
#   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
#   gap: var(--space-lg);
#   margin-bottom: var(--space-2xl);
# }

# .donor-card {
#   background: linear-gradient(135deg, 
#     var(--surface-glass) 0%,
#     rgba(255, 255, 255, 0.02) 100%);
#   backdrop-filter: blur(20px);
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   border-radius: var(--radius-lg);
#   padding: var(--space-xl);
#   transition: all var(--transition-normal);
#   position: relative;
#   overflow: hidden;
# }

# .donor-card::before {
#   content: '';
#   position: absolute;
#   top: 0;
#   left: -100%;
#   width: 100%;
#   height: 100%;
#   background: linear-gradient(90deg, 
#     transparent, 
#     rgba(255, 255, 255, 0.05), 
#     transparent);
#   transition: left var(--transition-slow);
# }

# .donor-card:hover::before {
#   left: 100%;
# }

# .donor-card:hover {
#   border-color: rgba(230, 57, 70, 0.3);
#   transform: translateY(-5px);
#   box-shadow: var(--shadow-lg), var(--glow-primary);
# }

# .donor-card.current-user {
#   border: 2px solid var(--accent-teal);
#   background: linear-gradient(135deg, 
#     var(--surface-glass), 
#     rgba(42, 157, 143, 0.1));
# }

# .current-user-badge {
#   position: absolute;
#   top: 10px;
#   right: 10px;
#   background: var(--success-gradient);
#   color: var(--text-primary);
#   padding: 4px 8px;
#   border-radius: var(--radius-sm);
#   font-size: var(--text-xs);
#   font-weight: 700;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
#   box-shadow: var(--shadow-sm);
#   z-index: 2;
# }

# .donor-header {
#   display: flex;
#   justify-content: space-between;
#   align-items: flex-start;
#   margin-bottom: var(--space-lg);
#   gap: var(--space-md);
# }

# .donor-avatar {
#   font-size: 3rem;
#   flex-shrink: 0;
#   filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
# }

# .donor-info {
#   flex: 1;
#   margin: 0 var(--space-md);
# }

# .donor-info h3 {
#   font-size: 1.25rem;
#   margin-bottom: var(--space-sm);
#   color: var(--text-primary);
#   font-weight: 700;
#   display: flex;
#   align-items: center;
#   gap: var(--space-sm);
# }

# .you-badge {
#   background: var(--success-gradient);
#   color: var(--text-primary);
#   padding: 2px 6px;
#   border-radius: var(--radius-xs);
#   font-size: var(--text-xs);
#   font-weight: 700;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
# }

# .donor-badges {
#   display: flex;
#   gap: var(--space-xs);
#   flex-wrap: wrap;
# }

# .blood-badge {
#   background: var(--primary-gradient);
#   color: var(--text-primary);
#   padding: var(--space-xs) var(--space-sm);
#   border-radius: var(--radius-sm);
#   font-size: var(--text-xs);
#   font-weight: 800;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
#   border: 1px solid rgba(255, 255, 255, 0.2);
#   box-shadow: var(--shadow-sm);
# }

# .blood-badge.universal {
#   background: linear-gradient(135deg, var(--primary-red), #b91c1c);
#   animation: pulseProfessional 2s infinite;
# }

# .donor-level {
#   background: var(--accent-gradient);
#   color: var(--text-primary);
#   padding: var(--space-xs) var(--space-sm);
#   border-radius: var(--radius-sm);
#   font-size: var(--text-xs);
#   font-weight: 800;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
#   border: 1px solid rgba(255, 255, 255, 0.2);
#   box-shadow: var(--shadow-sm);
# }

# .verified-badge {
#   background: var(--success-gradient);
#   color: var(--text-primary);
#   padding: var(--space-xs) var(--space-sm);
#   border-radius: var(--radius-sm);
#   font-size: var(--text-xs);
#   font-weight: 800;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
#   border: 1px solid rgba(255, 255, 255, 0.2);
#   box-shadow: var(--shadow-sm);
# }

# .current-badge {
#   background: var(--success-gradient);
#   color: var(--text-primary);
#   padding: 4px 8px;
#   border-radius: var(--radius-sm);
#   font-size: var(--text-xs);
#   font-weight: 700;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
# }

# .donor-stats {
#   text-align: right;
#   flex-shrink: 0;
# }

# .rating {
#   font-weight: 800;
#   color: var(--text-primary);
#   margin-bottom: var(--space-xs);
#   font-size: 1rem;
#   background: var(--accent-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# .donation-count {
#   font-size: var(--text-xs);
#   color: var(--text-tertiary);
#   font-weight: 500;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
# }

# /* ===== ENHANCED FORM ELEMENTS ===== */
# .form-group {
#   text-align: left;
#   margin-bottom: var(--space-lg);
# }

# .form-group label {
#   display: block;
#   font-weight: 600;
#   color: var(--text-primary);
#   margin-bottom: var(--space-xs);
#   font-size: var(--text-sm);
# }

# .form-group input,
# .form-group select,
# .form-group textarea {
#   width: 100%;
#   padding: var(--space-md);
#   border: 2px solid rgba(255, 255, 255, 0.1);
#   border-radius: var(--radius-md);
#   background: var(--surface-glass);
#   color: var(--text-primary);
#   font-size: 1rem;
#   backdrop-filter: blur(10px);
#   transition: all var(--transition-normal);
#   font-family: inherit;
# }

# .form-group input:focus,
# .form-group select:focus,
# .form-group textarea:focus {
#   outline: none;
#   border-color: var(--primary-red);
#   background: var(--surface-05);
#   box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.1), var(--shadow-sm);
# }

# .form-group input::placeholder,
# .form-group textarea::placeholder {
#   color: var(--text-tertiary);
# }

# /* ===== ENHANCED MODALS ===== */
# .modal-overlay {
#   position: fixed;
#   top: 0;
#   left: 0;
#   right: 0;
#   bottom: 0;
#   background: rgba(0, 0, 0, 0.8);
#   backdrop-filter: blur(20px);
#   display: flex;
#   justify-content: center;
#   align-items: center;
#   z-index: var(--z-modal-backdrop);
#   padding: var(--space-lg);
# }

# .modal-content {
#   background: linear-gradient(135deg, 
#     rgba(30, 30, 30, 0.95), 
#     rgba(20, 20, 20, 0.98));
#   border-radius: var(--radius-xl);
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   max-width: 800px;
#   width: 100%;
#   max-height: 90vh;
#   overflow-y: auto;
#   backdrop-filter: blur(40px);
#   box-shadow: var(--shadow-xl), 0 0 50px rgba(0, 0, 0, 0.5);
# }

# .modal-header {
#   display: flex;
#   justify-content: space-between;
#   align-items: center;
#   padding: var(--space-xl);
#   border-bottom: 1px solid rgba(255, 255, 255, 0.1);
#   position: sticky;
#   top: 0;
#   background: rgba(30, 30, 30, 0.95);
#   backdrop-filter: blur(20px);
#   z-index: 1;
#   border-radius: var(--radius-xl) var(--radius-xl) 0 0;
# }

# .modal-header h2 {
#   color: var(--text-primary);
#   font-size: 1.5rem;
#   font-weight: 700;
#   background: var(--primary-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# .close-btn {
#   background: none;
#   border: none;
#   color: var(--text-tertiary);
#   font-size: 2rem;
#   cursor: pointer;
#   transition: all var(--transition-normal);
#   width: 40px;
#   height: 40px;
#   display: flex;
#   align-items: center;
#   justify-content: center;
#   border-radius: var(--radius-sm);
# }

# .close-btn:hover {
#   color: var(--text-primary);
#   background: var(--surface-10);
# }

# /* ===== ENHANCED LOADING ===== */
# .loading-overlay {
#   position: fixed;
#   top: 0;
#   left: 0;
#   right: 0;
#   bottom: 0;
#   background: rgba(0, 0, 0, 0.8);
#   backdrop-filter: blur(20px);
#   display: flex;
#   flex-direction: column;
#   justify-content: center;
#   align-items: center;
#   z-index: var(--z-toast);
#   color: var(--text-primary);
# }

# .loading-spinner {
#   width: 60px;
#   height: 60px;
#   border: 3px solid var(--surface-10);
#   border-top: 3px solid var(--primary-red);
#   border-radius: 50%;
#   animation: spin 1s linear infinite;
#   margin-bottom: var(--space-md);
#   box-shadow: var(--glow-primary);
# }

# @keyframes spin {
#   0% { transform: rotate(0deg); }
#   100% { transform: rotate(360deg); }
# }

# .loading-overlay p {
#   font-size: var(--text-lg);
#   font-weight: 600;
#   color: var(--text-secondary);
# }

# /* ===== ENHANCED FOOTER ===== */
# .footer {
#   background: linear-gradient(135deg, 
#     rgba(15, 20, 25, 0.9), 
#     rgba(10, 15, 20, 0.95));
#   backdrop-filter: blur(20px);
#   border-top: 1px solid rgba(255, 255, 255, 0.1);
#   margin-top: var(--space-4xl);
# }

# .footer-content {
#   max-width: 1200px;
#   margin: 0 auto;
#   padding: var(--space-3xl) var(--space-xl);
#   display: grid;
#   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
#   gap: var(--space-2xl);
# }

# .footer-section h3 {
#   color: var(--primary-red);
#   margin-bottom: var(--space-lg);
#   font-size: 1.5rem;
#   font-weight: 800;
#   background: var(--primary-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# .footer-section h4 {
#   margin-bottom: var(--space-lg);
#   font-size: 1.125rem;
#   font-weight: 700;
#   color: var(--text-primary);
# }

# .footer-section p {
#   opacity: 0.8;
#   line-height: 1.6;
#   margin-bottom: var(--space-sm);
#   color: var(--text-secondary);
#   font-size: var(--text-sm);
# }

# .footer-section button {
#   background: none;
#   border: none;
#   color: var(--text-secondary);
#   cursor: pointer;
#   display: block;
#   margin-bottom: var(--space-xs);
#   text-align: left;
#   transition: color var(--transition-normal);
#   padding: var(--space-xs) 0;
#   font-size: var(--text-sm);
#   font-weight: 500;
# }

# .footer-section button:hover {
#   color: var(--text-primary);
#   transform: translateX(5px);
# }

# .footer-bottom {
#   border-top: 1px solid rgba(255, 255, 255, 0.1);
#   padding: var(--space-lg);
#   text-align: center;
#   opacity: 0.7;
#   font-size: var(--text-xs);
#   color: var(--text-tertiary);
# }

# /* ===== RESPONSIVE DESIGN ENHANCEMENTS ===== */
# @media (max-width: 768px) {
#   .nav-container {
#     flex-direction: column;
#     height: auto;
#     padding: var(--space-md) var(--space-xl);
#     gap: var(--space-md);
#   }

#   .nav-links {
#     justify-content: center;
#     flex-wrap: wrap;
#     gap: var(--space-xs);
#   }

#   .nav-link {
#     padding: var(--space-sm) var(--space-md);
#     font-size: var(--text-xs);
#   }

#   .hero-buttons {
#     flex-direction: column;
#     align-items: center;
#     gap: var(--space-md);
#   }

#   .btn {
#     width: 100%;
#     justify-content: center;
#   }

#   .emergency-content {
#     flex-direction: column;
#     text-align: center;
#     gap: var(--space-lg);
#   }

#   .emergency-text {
#     text-align: center;
#   }

#   .live-stats {
#     grid-template-columns: 1fr;
#   }

#   .features-grid {
#     grid-template-columns: 1fr;
#   }

#   .blood-types-grid {
#     grid-template-columns: repeat(2, 1fr);
#   }

#   .donors-grid {
#     grid-template-columns: 1fr;
#   }

#   .donor-header {
#     flex-direction: column;
#     gap: var(--space-md);
#     text-align: center;
#   }

#   .donor-stats {
#     text-align: center;
#   }

#   .donor-actions {
#     grid-template-columns: 1fr;
#   }

#   .emergency-hotline-fixed {
#     position: fixed;
#     bottom: 80px;
#     top: auto;
#     right: 20px;
#     transform: none;
#   }

#   .health-tips-ai {
#     bottom: 20px;
#     left: 50%;
#     transform: translateX(-50%);
#   }

#   .health-tips-panel {
#     left: 50%;
#     transform: translateX(-50%);
#     width: 90vw;
#   }

#   .footer-content {
#     grid-template-columns: 1fr;
#     text-align: center;
#   }

#   .footer-section button {
#     text-align: center;
#   }
# }

# @media (max-width: 480px) {
#   .nav-container {
#     padding: var(--space-sm);
#   }

#   .hero-section {
#     padding: var(--space-2xl) 0;
#   }

#   .main-content {
#     padding: var(--space-xl) var(--space-md);
#   }

#   .modal-content {
#     margin: var(--space-sm);
#     max-height: 95vh;
#   }
# }

# /* ===== SCROLLBAR ENHANCEMENTS ===== */
# ::-webkit-scrollbar {
#   width: 8px;
# }

# ::-webkit-scrollbar-track {
#   background: var(--surface-05);
#   border-radius: 4px;
# }

# ::-webkit-scrollbar-thumb {
#   background: var(--primary-gradient);
#   border-radius: 4px;
#   border: 1px solid rgba(255, 255, 255, 0.1);
# }

# ::-webkit-scrollbar-thumb:hover {
#   background: linear-gradient(135deg, var(--primary-light), var(--primary-red));
# }

# /* ===== ACCESSIBILITY ENHANCEMENTS ===== */
# @media (prefers-reduced-motion: reduce) {
#   *, *::before, *::after {
#     animation-duration: 0.01ms !important;
#     animation-iteration-count: 1 !important;
#     transition-duration: 0.01ms !important;
#   }
# }

# /* ===== PRINT STYLES ===== */
# @media print {
#   .emergency-hotline-fixed,
#   .health-tips-ai,
#   .navbar,
#   .footer {
#     display: none;
#   }
  
#   body {
#     background: white !important;
#     color: black !important;
#   }
# }

# /* ===== DARK MODE ENHANCEMENTS ===== */
# @media (prefers-color-scheme: dark) {
#   :root {
#     --text-primary: #ffffff;
#     --text-secondary: #e2e8f0;
#     --text-tertiary: #94a3b8;
#   }
# }

# /* ===== HIGH CONTRAST MODE ===== */
# @media (prefers-contrast: high) {
#   :root {
#     --primary-red: #ff0000;
#     --primary-dark: #cc0000;
#     --text-primary: #ffffff;
#     --text-secondary: #ffffff;
#     --surface-10: rgba(255, 255, 255, 0.2);
#   }
# }

# /* ===== PROFESSIONAL UTILITY CLASSES ===== */
# .text-gradient {
#   background: var(--primary-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# .glass-effect {
#   background: var(--surface-glass);
#   backdrop-filter: blur(20px);
#   border: 1px solid rgba(255, 255, 255, 0.1);
# }

# .shadow-glow {
#   box-shadow: var(--shadow-md), var(--glow-primary);
# }

# .hover-lift:hover {
#   transform: translateY(-4px);
#   transition: transform var(--transition-normal);
# }

# .sr-only {
#   position: absolute;
#   width: 1px;
#   height: 1px;
#   padding: 0;
#   margin: -1px;
#   overflow: hidden;
#   clip: rect(0, 0, 0, 0);
#   white-space: nowrap;
#   border: 0;
# }

# /* ===== ANIMATION ENHANCEMENTS ===== */
# @keyframes fadeInUp {
#   from {
#     opacity: 0;
#     transform: translateY(30px);
#   }
#   to {
#     opacity: 1;
#     transform: translateY(0);
#   }
# }

# @keyframes slideInLeft {
#   from {
#     opacity: 0;
#     transform: translateX(-30px);
#   }
#   to {
#     opacity: 1;
#     transform: translateX(0);
#   }
# }

# @keyframes slideInRight {
#   from {
#     opacity: 0;
#     transform: translateX(30px);
#   }
#   to {
#     opacity: 1;
#     transform: translateX(0);
#   }
# }

# .animate-fade-in-up {
#   animation: fadeInUp 0.6s ease-out;
# }

# .animate-slide-in-left {
#   animation: slideInLeft 0.6s ease-out;
# }

# .animate-slide-in-right {
#   animation: slideInRight 0.6s ease-out;
# }

# /* ===== PERFORMANCE OPTIMIZATIONS ===== */
# .will-change-transform {
#   will-change: transform;
# }

# .will-change-opacity {
#   will-change: opacity;
# }

# /* ===== CUSTOM SCROLL SNAP ===== */
# .scroll-snap-container {
#   scroll-snap-type: y mandatory;
#   overflow-y: scroll;
#   height: 100vh;
# }

# .scroll-snap-section {
#   scroll-snap-align: start;
#   height: 100vh;
# }

# /* ===== ENHANCED FOCUS INDICATORS ===== */
# .focus-visible:focus {
#   outline: 2px solid var(--primary-light);
#   outline-offset: 2px;
#   border-radius: var(--radius-sm);
# }

# /* ===== PROFESSIONAL ICON STYLES ===== */
# .icon-wrapper {
#   display: inline-flex;
#   align-items: center;
#   justify-content: center;
#   background: var(--surface-glass);
#   backdrop-filter: blur(10px);
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   border-radius: var(--radius-md);
#   padding: var(--space-sm);
#   transition: all var(--transition-normal);
# }

# .icon-wrapper:hover {
#   background: var(--surface-10);
#   border-color: var(--primary-light);
#   transform: scale(1.05);
# }

# /* ===== ENHANCED BADGE VARIATIONS ===== */
# .badge {
#   display: inline-flex;
#   align-items: center;
#   padding: var(--space-xs) var(--space-sm);
#   border-radius: var(--radius-sm);
#   font-size: var(--text-xs);
#   font-weight: 700;
#   text-transform: uppercase;
#   letter-spacing: 0.5px;
#   border: 1px solid rgba(255, 255, 255, 0.2);
#   box-shadow: var(--shadow-sm);
# }

# .badge-primary {
#   background: var(--primary-gradient);
#   color: var(--text-primary);
# }

# .badge-secondary {
#   background: var(--secondary-gradient);
#   color: var(--text-primary);
# }

# .badge-success {
#   background: var(--success-gradient);
#   color: var(--text-primary);
# }

# .badge-warning {
#   background: var(--accent-gradient);
#   color: var(--text-primary);
# }

# .badge-premium {
#   background: var(--premium-gradient);
#   color: var(--text-primary);
# }

# /* ===== ENHANCED CARD VARIANTS ===== */
# .card {
#   background: var(--surface-glass);
#   backdrop-filter: blur(20px);
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   border-radius: var(--radius-lg);
#   padding: var(--space-xl);
#   transition: all var(--transition-normal);
#   position: relative;
#   overflow: hidden;
# }

# .card::before {
#   content: '';
#   position: absolute;
#   top: 0;
#   left: -100%;
#   width: 100%;
#   height: 100%;
#   background: linear-gradient(90deg, 
#     transparent, 
#     rgba(255, 255, 255, 0.05), 
#     transparent);
#   transition: left var(--transition-slow);
# }

# .card:hover::before {
#   left: 100%;
# }

# .card-hover:hover {
#   transform: translateY(-8px);
#   border-color: rgba(230, 57, 70, 0.3);
#   box-shadow: var(--shadow-lg), var(--glow-primary);
# }

# .card-glow {
#   box-shadow: var(--shadow-md), var(--glow-primary);
# }

# .card-premium {
#   background: linear-gradient(135deg, 
#     rgba(102, 126, 234, 0.1), 
#     rgba(118, 75, 162, 0.05));
#   border: 1px solid rgba(102, 126, 234, 0.3);
# }

# .card-premium:hover {
#   box-shadow: var(--shadow-lg), var(--glow-premium);
# }

# /* ===== PROFESSIONAL GRADIENT TEXT ===== */
# .gradient-text-primary {
#   background: var(--primary-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# .gradient-text-secondary {
#   background: var(--secondary-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# .gradient-text-accent {
#   background: var(--accent-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# .gradient-text-success {
#   background: var(--success-gradient);
#   -webkit-background-clip: text;
#   -webkit-text-fill-color: transparent;
#   background-clip: text;
# }

# /* ===== ENHANCED BACKGROUND PATTERNS ===== */
# .bg-pattern-dots {
#   background-image: 
#     radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 0),
#     radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 2px, transparent 0);
#   background-size: 50px 50px;
# }

# .bg-pattern-grid {
#   background-image: 
#     linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
#     linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
#   background-size: 50px 50px;
# }

# /* ===== PROFESSIONAL SPINNER VARIANTS ===== */
# .spinner-primary {
#   width: 40px;
#   height: 40px;
#   border: 3px solid var(--surface-10);
#   border-top: 3px solid var(--primary-red);
#   border-radius: 50%;
#   animation: spin 1s linear infinite;
# }

# .spinner-secondary {
#   width: 40px;
#   height: 40px;
#   border: 3px solid var(--surface-10);
#   border-top: 3px solid var(--secondary-blue);
#   border-radius: 50%;
#   animation: spin 1s linear infinite;
# }

# .spinner-accent {
#   width: 40px;
#   height: 40px;
#   border: 3px solid var(--surface-10);
#   border-top: 3px solid var(--accent-gold);
#   border-radius: 50%;
#   animation: spin 1s linear infinite;
# }

# /* ===== ENHANCED PULSE ANIMATIONS ===== */
# @keyframes pulse-slow {
#   0%, 100% {
#     opacity: 1;
#   }
#   50% {
#     opacity: 0.7;
#   }
# }

# @keyframes bounce-subtle {
#   0%, 100% {
#     transform: translateY(0);
#   }
#   50% {
#     transform: translateY(-10px);
#   }
# }

# .animate-pulse-slow {
#   animation: pulse-slow 3s ease-in-out infinite;
# }

# .animate-bounce-subtle {
#   animation: bounce-subtle 2s ease-in-out infinite;
# }

# /* ===== PROFESSIONAL SEPARATORS ===== */
# .separator {
#   height: 1px;
#   background: linear-gradient(90deg, 
#     transparent, 
#     rgba(255, 255, 255, 0.2), 
#     transparent);
#   margin: var(--space-xl) 0;
# }

# .separator-gradient {
#   height: 2px;
#   background: var(--primary-gradient);
#   margin: var(--space-xl) 0;
#   border-radius: var(--radius-xs);
# }

# /* ===== ENHANCED TOOLTIP ===== */
# .tooltip {
#   position: relative;
#   display: inline-block;
# }

# .tooltip::before {
#   content: attr(data-tooltip);
#   position: absolute;
#   bottom: 100%;
#   left: 50%;
#   transform: translateX(-50%);
#   background: var(--neutral-darkest);
#   color: var(--text-primary);
#   padding: var(--space-xs) var(--space-sm);
#   border-radius: var(--radius-sm);
#   font-size: var(--text-xs);
#   white-space: nowrap;
#   opacity: 0;
#   visibility: hidden;
#   transition: all var(--transition-normal);
#   backdrop-filter: blur(10px);
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   z-index: var(--z-tooltip);
# }

# .tooltip:hover::before {
#   opacity: 1;
#   visibility: visible;
#   transform: translateX(-50%) translateY(-5px);
# }

# /* ===== PROFESSIONAL PROGRESS BARS ===== */
# .progress-bar {
#   width: 100%;
#   height: 8px;
#   background: var(--surface-10);
#   border-radius: var(--radius-pill);
#   overflow: hidden;
# }

# .progress-fill {
#   height: 100%;
#   background: var(--primary-gradient);
#   border-radius: var(--radius-pill);
#   transition: width 0.3s ease;
#   box-shadow: var(--glow-primary);
# }

# /* ===== ENHANCED AVATAR STYLES ===== */
# .avatar {
#   display: inline-flex;
#   align-items: center;
#   justify-content: center;
#   border-radius: var(--radius-full);
#   background: var(--surface-glass);
#   border: 2px solid rgba(255, 255, 255, 0.1);
#   font-weight: 600;
#   color: var(--text-primary);
#   backdrop-filter: blur(10px);
# }

# .avatar-sm {
#   width: 32px;
#   height: 32px;
#   font-size: var(--text-sm);
# }

# .avatar-md {
#   width: 48px;
#   height: 48px;
#   font-size: var(--text-lg);
# }

# .avatar-lg {
#   width: 64px;
#   height: 64px;
#   font-size: var(--text-xl);
# }

# .avatar-xl {
#   width: 80px;
#   height: 80px;
#   font-size: var(--text-2xl);
# }

# /* ===== PROFESSIONAL NOTIFICATION STYLES ===== */
# .notification {
#   position: fixed;
#   top: 100px;
#   right: 20px;
#   background: var(--surface-glass);
#   backdrop-filter: blur(20px);
#   border: 1px solid rgba(255, 255, 255, 0.1);
#   border-radius: var(--radius-lg);
#   padding: var(--space-lg);
#   box-shadow: var(--shadow-xl);
#   z-index: var(--z-toast);
#   max-width: 400px;
#   animation: slideInRight 0.3s ease-out;
# }

# .notification-success {
#   border-left: 4px solid var(--accent-teal);
# }

# .notification-error {
#   border-left: 4px solid var(--primary-red);
# }

# .notification-warning {
#   border-left: 4px solid var(--accent-gold);
# }

# .notification-info {
#   border-left: 4px solid var(--secondary-blue);
# }

# /* ===== ENHANCED FORM VALIDATION ===== */
# .form-group.error input,
# .form-group.error select,
# .form-group.error textarea {
#   border-color: var(--primary-red);
#   box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.1);
# }

# .form-group.success input,
# .form-group.success select,
# .form-group.success textarea {
#   border-color: var(--accent-teal);
#   box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.1);
# }

# .validation-error {
#   color: var(--primary-red);
#   font-size: var(--text-xs);
#   margin-top: var(--space-xs);
#   font-weight: 500;
# }

# .validation-success {
#   color: var(--accent-teal);
#   font-size: var(--text-xs);
#   margin-top: var(--space-xs);
#   font-weight: 500;
# }

# /* ===== PROFESSIONAL LOADING STATES ===== */
# .skeleton {
#   background: linear-gradient(90deg, 
#     var(--surface-10) 25%, 
#     var(--surface-05) 50%, 
#     var(--surface-10) 75%);
#   background-size: 200% 100%;
#   animation: loading 1.5s infinite;
#   border-radius: var(--radius-md);
# }

# @keyframes loading {
#   0% {
#     background-position: 200% 0;
#   }
#   100% {
#     background-position: -200% 0;
#   }
# }

# /* ===== ENHANCED COLOR UTILITIES ===== */
# .bg-primary-gradient {
#   background: var(--primary-gradient);
# }

# .bg-secondary-gradient {
#   background: var(--secondary-gradient);
# }

# .bg-accent-gradient {
#   background: var(--accent-gradient);
# }

# .bg-success-gradient {
#   background: var(--success-gradient);
# }

# .bg-glass {
#   background: var(--surface-glass);
#   backdrop-filter: blur(20px);
# }

# /* ===== PROFESSIONAL BORDER UTILITIES ===== */
# .border-gradient {
#   border: 2px solid transparent;
#   background: linear-gradient(var(--surface-glass), var(--surface-glass)) padding-box,
#               var(--primary-gradient) border-box;
#   border-radius: var(--radius-lg);
# }

# /* ===== ENHANCED TEXT UTILITIES ===== */
# .text-shadow {
#   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
# }

# .text-shadow-lg {
#   text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
# }

# /* ===== RESPONSIVE TEXT SIZES ===== */
# .text-responsive {
#   font-size: clamp(1rem, 2vw, 1.25rem);
# }

# .heading-responsive {
#   font-size: clamp(2rem, 5vw, 3rem);
# }

# /* ===== PROFESSIONAL LAYOUT UTILITIES ===== */
# .container {
#   max-width: 1200px;
#   margin: 0 auto;
#   padding: 0 var(--space-xl);
# }

# .container-sm {
#   max-width: 800px;
#   margin: 0 auto;
#   padding: 0 var(--space-xl);
# }

# .container-lg {
#   max-width: 1400px;
#   margin: 0 auto;
#   padding: 0 var(--space-xl);
# }

# /* ===== ENHANCED GRID SYSTEM ===== */
# .grid {
#   display: grid;
#   gap: var(--space-lg);
# }

# .grid-cols-1 {
#   grid-template-columns: repeat(1, 1fr);
# }

# .grid-cols-2 {
#   grid-template-columns: repeat(2, 1fr);
# }

# .grid-cols-3 {
#   grid-template-columns: repeat(3, 1fr);
# }

# .grid-cols-4 {
#   grid-template-columns: repeat(4, 1fr);
# }

# /* ===== FLEXBOX UTILITIES ===== */
# .flex {
#   display: flex;
# }

# .flex-col {
#   flex-direction: column;
# }

# .items-center {
#   align-items: center;
# }

# .justify-center {
#   justify-content: center;
# }

# .justify-between {
#   justify-content: space-between;
# }

# /* ===== SPACING UTILITIES ===== */
# .p-0 { padding: 0; }
# .p-1 { padding: var(--space-xs); }
# .p-2 { padding: var(--space-sm); }
# .p-3 { padding: var(--space-md); }
# .p-4 { padding: var(--space-lg); }
# .p-5 { padding: var(--space-xl); }

# .m-0 { margin: 0; }
# .m-1 { margin: var(--space-xs); }
# .m-2 { margin: var(--space-sm); }
# .m-3 { margin: var(--space-md); }
# .m-4 { margin: var(--space-lg); }
# .m-5 { margin: var(--space-xl); }

# /* ===== VISIBILITY UTILITIES ===== */
# .visible {
#   visibility: visible;
# }

# .invisible {
#   visibility: hidden;
# }

# .opacity-0 { opacity: 0; }
# .opacity-25 { opacity: 0.25; }
# .opacity-50 { opacity: 0.5; }
# .opacity-75 { opacity: 0.75; }
# .opacity-100 { opacity: 1; }

# /* ===== TRANSITION UTILITIES ===== */
# .transition-all {
#   transition: all var(--transition-normal);
# }

# .transition-colors {
#   transition: color var(--transition-normal), background-color var(--transition-normal);
# }

# .transition-transform {
#   transition: transform var(--transition-normal);
# }

# /* ===== CURSOR UTILITIES ===== */
# .cursor-pointer {
#   cursor: pointer;
# }

# .cursor-not-allowed {
#   cursor: not-allowed;
# }

# .cursor-wait {
#   cursor: wait;
# }

# /* ===== USER SELECT UTILITIES ===== */
# .select-none {
#   user-select: none;
# }

# .select-text {
#   user-select: text;
# }

# .select-all {
#   user-select: all;
# }

# /* ===== OVERFLOW UTILITIES ===== */
# .overflow-hidden {
#   overflow: hidden;
# }

# .overflow-visible {
#   overflow: visible;
# }

# .overflow-auto {
#   overflow: auto;
# }

# .overflow-x-auto {
#   overflow-x: auto;
# }

# .overflow-y-auto {
#   overflow-y: auto;
# }

# /* ===== POSITION UTILITIES ===== */
# .relative {
#   position: relative;
# }

# .absolute {
#   position: absolute;
# }

# .fixed {
#   position: fixed;
# }

# .sticky {
#   position: sticky;
# }

# /* ===== Z-INDEX UTILITIES ===== */
# .z-0 { z-index: 0; }
# .z-10 { z-index: 10; }
# .z-20 { z-index: 20; }
# .z-30 { z-index: 30; }
# .z-40 { z-index: 40; }
# .z-50 { z-index: 50; }
# .z-auto { z-index: auto; }

# /* ===== DISPLAY UTILITIES ===== */
# .block {
#   display: block;
# }

# .inline-block {
#   display: inline-block;
# }

# .inline {
#   display: inline;
# }

# .flex {
#   display: flex;
# }

# .inline-flex {
#   display: inline-flex;
# }

# .grid {
#   display: grid;
# }

# .hidden {
#   display: none;
# }

# /* ===== WIDTH AND HEIGHT UTILITIES ===== */
# .w-full { width: 100%; }
# .w-screen { width: 100vw; }
# .h-full { height: 100%; }
# .h-screen { height: 100vh; }
# .min-h-screen { min-height: 100vh; }

# /* ===== TEXT ALIGNMENT UTILITIES ===== */
# .text-left { text-align: left; }
# .text-center { text-align: center; }
# .text-right { text-align: right; }
# .text-justify { text-align: justify; }

# /* ===== FONT WEIGHT UTILITIES ===== */
# .font-light { font-weight: 300; }
# .font-normal { font-weight: 400; }
# .font-medium { font-weight: 500; }
# .font-semibold { font-weight: 600; }
# .font-bold { font-weight: 700; }
# .font-extrabold { font-weight: 800; }
# .font-black { font-weight: 900; }

# /* ===== TEXT COLOR UTILITIES ===== */
# .text-primary { color: var(--text-primary); }
# .text-secondary { color: var(--text-secondary); }
# .text-tertiary { color: var(--text-tertiary); }
# .text-accent { color: var(--text-accent); }
# .text-success { color: var(--text-success); }
# .text-warning { color: var(--text-warning); }
# .text-danger { color: var(--text-danger); }

# /* ===== BACKGROUND COLOR UTILITIES ===== */
# .bg-primary { background-color: var(--primary-red); }
# .bg-secondary { background-color: var(--secondary-blue); }
# .bg-accent { background-color: var(--accent-gold); }
# .bg-success { background-color: var(--accent-teal); }
# .bg-dark { background-color: var(--neutral-dark); }
# .bg-darker { background-color: var(--neutral-darker); }
# .bg-darkest { background-color: var(--neutral-darkest); }

# /* ===== BORDER COLOR UTILITIES ===== */
# .border-primary { border-color: var(--primary-red); }
# .border-secondary { border-color: var(--secondary-blue); }
# .border-accent { border-color: var(--accent-gold); }
# .border-success { border-color: var(--accent-teal); }
# .border-light { border-color: rgba(255, 255, 255, 0.1); }
# .border-medium { border-color: rgba(255, 255, 255, 0.2); }

# /* ===== BORDER RADIUS UTILITIES ===== */
# .rounded { border-radius: var(--radius-sm); }
# .rounded-md { border-radius: var(--radius-md); }
# .rounded-lg { border-radius: var(--radius-lg); }
# .rounded-xl { border-radius: var(--radius-xl); }
# .rounded-2xl { border-radius: var(--radius-2xl); }
# .rounded-full { border-radius: var(--radius-full); }

# /* ===== SHADOW UTILITIES ===== */
# .shadow-sm { box-shadow: var(--shadow-sm); }
# .shadow-md { box-shadow: var(--shadow-md); }
# .shadow-lg { box-shadow: var(--shadow-lg); }
# .shadow-xl { box-shadow: var(--shadow-xl); }
# .shadow-2xl { box-shadow: var(--shadow-2xl); }

# /* ===== GLOW UTILITIES ===== */
# .glow-primary { box-shadow: var(--glow-primary); }
# .glow-secondary { box-shadow: var(--glow-secondary); }
# .glow-accent { box-shadow: var(--glow-accent); }
# .glow-success { box-shadow: var(--glow-success); }
# .glow-premium { box-shadow: var(--glow-premium); }

# /* ===== FINAL PROFESSIONAL TOUCHES ===== */
# * {
#   -webkit-tap-highlight-color: transparent;
# }

# ::selection {
#   background: rgba(230, 57, 70, 0.3);
#   color: var(--text-primary);
# }

# ::-moz-selection {
#   background: rgba(230, 57, 70, 0.3);
#   color: var(--text-primary);
# }

# /* ===== SMOOTH SCROLLING FOR MODERN BROWSERS ===== */
# html {
#   scroll-behavior: smooth;
# }




# .donor-search-section {
#     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
#     padding: 3rem 2rem;
#     border-radius: 20px;
#     box-shadow: 0 20px 40px rgba(0,0,0,0.1);
#     color: white;
#     margin: 2rem 0;
# }

# .search-header {
#     text-align: center;
#     margin-bottom: 2rem;
# }

# .search-header h1 {
#     font-size: 2.5rem;
#     margin-bottom: 0.5rem;
#     text-shadow: 0 2px 4px rgba(0,0,0,0.3);
# }

# .search-header p {
#     font-size: 1.1rem;
#     opacity: 0.9;
# }

# .search-filters {
#     background: white;
#     padding: 2rem;
#     border-radius: 15px;
#     box-shadow: 0 10px 30px rgba(0,0,0,0.2);
#     display: grid;
#     grid-template-columns: 1fr 1fr auto;
#     gap: 1rem;
#     align-items: end;
# }

# .filter-group {
#     display: flex;
#     flex-direction: column;
# }

# .filter-group label {
#     color: #333;
#     font-weight: 600;
#     margin-bottom: 0.5rem;
#     font-size: 0.9rem;
# }

# .styled-select {
#     padding: 12px 16px;
#     border: 2px solid #e1e5e9;
#     border-radius: 10px;
#     font-size: 1rem;
#     background: white;
#     transition: all 0.3s ease;
#     cursor: pointer;
# }

# .styled-select:focus {
#     outline: none;
#     border-color: #667eea;
#     box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
# }

# .search-btn {
#     background: linear-gradient(135deg, #ff6b6b, #ee5a24);
#     color: white;
#     border: none;
#     padding: 12px 30px;
#     border-radius: 10px;
#     font-size: 1.1rem;
#     font-weight: 600;
#     cursor: pointer;
#     transition: all 0.3s ease;
#     box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
# }

# .search-btn:hover {
#     transform: translateY(-2px);
#     box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
# }

# .popular-tags {
#     margin-top: 1.5rem;
#     text-align: center;
# }

# .popular-tags span {
#     color: white;
#     margin-right: 1rem;
#     font-weight: 500;
# }

# .popular-tags a {
#     display: inline-block;
#     background: rgba(255,255,255,0.2);
#     color: white;
#     padding: 6px 16px;
#     border-radius: 20px;
#     margin: 0.3rem;
#     text-decoration: none;
#     transition: all 0.3s ease;
#     border: 1px solid rgba(255,255,255,0.3);
# }

# .popular-tags a:hover {
#     background: rgba(255,255,255,0.3);
#     transform: translateY(-1px);
# }







# .donor-search-urgent {
#     background: white;
#     border-radius: 15px;
#     box-shadow: 0 10px 40px rgba(0,0,0,0.1);
#     padding: 2rem;
#     border: 1px solid #e1e5e9;
# }

# .search-tabs {
#     display: flex;
#     gap: 0.5rem;
#     margin-bottom: 2rem;
#     border-bottom: 2px solid #f1f3f4;
#     padding-bottom: 1rem;
# }

# .tab-btn {
#     padding: 12px 24px;
#     border: none;
#     background: #f8f9fa;
#     border-radius: 8px;
#     cursor: pointer;
#     transition: all 0.3s ease;
#     font-weight: 500;
#     display: flex;
#     align-items: center;
#     gap: 0.5rem;
# }

# .tab-btn.active {
#     background: #667eea;
#     color: white;
#     box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
# }

# .tab-btn.emergency-tab {
#     background: linear-gradient(135deg, #ff6b6b, #ee5a24);
#     color: white;
#     animation: pulse 2s infinite;
# }

# @keyframes pulse {
#     0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.4); }
#     70% { box-shadow: 0 0 0 10px rgba(255, 107, 107, 0); }
#     100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }
# }

# .filter-container {
#     display: grid;
#     grid-template-columns: 1fr 1fr auto;
#     gap: 1rem;
#     align-items: end;
# }

# .filter-input {
#     padding: 12px 16px;
#     border: 2px solid #e1e5e9;
#     border-radius: 10px;
#     font-size: 1rem;
#     background: white;
#     transition: all 0.3s ease;
# }

# .filter-input:focus {
#     outline: none;
#     border-color: #667eea;
#     box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
# }

# .primary-btn {
#     background: linear-gradient(135deg, #667eea, #764ba2);
#     color: white;
#     border: none;
#     padding: 12px 24px;
#     border-radius: 10px;
#     font-size: 1rem;
#     font-weight: 600;
#     cursor: pointer;
#     transition: all 0.3s ease;
#     display: flex;
#     align-items: center;
#     gap: 0.5rem;
# }

# .primary-btn:hover {
#     transform: translateY(-2px);
#     box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
# }

# .stats-bar {
#     display: grid;
#     grid-template-columns: repeat(3, 1fr);
#     gap: 2rem;
#     margin-top: 2rem;
#     padding-top: 2rem;
#     border-top: 2px solid #f1f3f4;
# }

# .stat {
#     text-align: center;
# }

# .stat strong {
#     display: block;
#     font-size: 2rem;
#     color: #667eea;
#     margin-bottom: 0.5rem;
# }

# .stat span {
#     color: #666;
#     font-size: 0.9rem;
# }




# .donor-search-minimal {
#     background: #f8fafc;
#     padding: 2.5rem;
#     border-radius: 12px;
#     border-left: 4px solid #667eea;
# }

# .search-title {
#     color: #2d3748;
#     font-size: 1.8rem;
#     margin-bottom: 1rem;
# }

# .search-subtitle {
#     color: #718096;
#     margin-bottom: 2rem;
# }

# .quick-filters {
#     display: flex;
#     gap: 1rem;
#     flex-wrap: wrap;
# }

# .filter-pill {
#     background: white;
#     border: 2px solid #e2e8f0;
#     padding: 10px 20px;
#     border-radius: 25px;
#     cursor: pointer;
#     transition: all 0.3s ease;
#     font-weight: 500;
# }

# .filter-pill:hover {
#     border-color: #667eea;
#     transform: translateY(-1px);
# }

# .filter-pill.active {
#     background: #667eea;
#     color: white;
#     border-color: #667eea;
# }

# .emergency-badge {
#     background: linear-gradient(135deg, #fc8181, #e53e3e);
#     color: white;
#     animation: shake 2s ease-in-out infinite;
# }

# @keyframes shake {
#     0%, 100% { transform: rotate(0deg); }
#     25% { transform: rotate(-2deg); }
#     75% { transform: rotate(2deg); }
# }





# /* ===== OPTIMIZED FOR MOBILE PERFORMANCE ===== */
# @media (max-width: 768px) {
#   .hero-section {
#     padding: var(--space-2xl) 0;
#   }
  
#   .features-section {
#     margin: var(--space-2xl) 0;
#   }
  
#   .blood-types-section {
#     margin: var(--space-2xl) 0;
#   }
  
#   .emergency-cta {
#     margin: var(--space-2xl) 0;
#     padding: var(--space-xl);
#   }
# }

# /* ===== PRINT OPTIMIZATIONS ===== */
# @media print {
#   .bg-gradient {
#     background: white !important;
#   }
  
#   .text-primary,
#   .text-secondary,
#   .text-tertiary {
#     color: black !important;
#   }
  
#   .btn,
#   .nav-link,
#   .emergency-hotline-fixed,
#   .health-tips-ai {
#     display: none !important;
#   }
# }

# /* ===== REDUCED MOTION SUPPORT ===== */
# @media (prefers-reduced-motion: reduce) {
#   *,
#   *::before,
#   *::after {
#     animation-duration: 0.01ms !important;
#     animation-iteration-count: 1 !important;
#     transition-duration: 0.01ms !important;
#     scroll-behavior: auto !important;
#   }
# }

# /* ===== HIGH CONTRAST MODE SUPPORT ===== */
# @media (prefers-contrast: high) {
#   :root {
#     --primary-red: #ff0000;
#     --primary-dark: #cc0000;
#     --text-primary: #ffffff;
#     --text-secondary: #ffffff;
#     --surface-10: rgba(255, 255, 255, 0.3);
#     --border-light: rgba(255, 255, 255, 0.5);
#   }
# }

# /* ===== DARK MODE ENFORCEMENT ===== */
# @media (prefers-color-scheme: dark) {
#   /* Already dark by default, but ensure consistency */
#   body {
#     background: var(--bg-gradient);
#     color: var(--text-primary);
#   }
# }

# /* ===== TOUCH DEVICE OPTIMIZATIONS ===== */
# @media (hover: none) and (pointer: coarse) {
#   .btn:hover,
#   .nav-link:hover,
#   .feature-card:hover,
#   .donor-card:hover,
#   .blood-type-card:hover {
#     transform: none;
#   }
  
#   .btn:active,
#   .nav-link:active {
#     transform: scale(0.98);
#   }
# }

# /* ===== LARGE SCREEN OPTIMIZATIONS ===== */
# @media (min-width: 1920px) {
#   .container {
#     max-width: 1400px;
#   }
  
#   .nav-container {
#     max-width: 1400px;
#   }
  
#   .footer-content {
#     max-width: 1400px;
#   }
# }

# /* ===== 4K SCREEN OPTIMIZATIONS ===== */
# @media (min-width: 3840px) {
#   :root {
#     font-size: 20px;
#   }
  
#   .container {
#     max-width: 2000px;
#   }
# }

# /* ===== PROFESSIONAL CSS COMPLETE ===== */

# .medical-search-panel {
#     background: white;
#     border-radius: 15px;
#     padding: 2rem;
#     box-shadow: 0 10px 30px rgba(0,0,0,0.08);
#     border: 1px solid #e8f4f8;
#     border-top: 4px solid #dc3545;
# }

# .medical-header {
#     display: flex;
#     align-items: center;
#     gap: 1rem;
#     margin-bottom: 2rem;
#     padding-bottom: 1rem;
#     border-bottom: 2px solid #f8f9fa;
# }

# .medical-header h1 {
#     color: #2c3e50;
#     font-size: 1.8rem;
#     margin: 0;
# }

# .medical-badge {
#     background: #dc3545;
#     color: white;
#     padding: 4px 12px;
#     border-radius: 15px;
#     font-size: 0.8rem;
#     font-weight: 600;
# }

# .filters-row {
#     display: grid;
#     grid-template-columns: 1fr 1fr;
#     gap: 2rem;
#     margin-bottom: 1.5rem;
# }

# .filter-card {
#     background: #f8f9fa;
#     padding: 1.5rem;
#     border-radius: 10px;
#     border-left: 4px solid #dc3545;
# }

# .filter-card h3 {
#     color: #2c3e50;
#     margin-bottom: 1rem;
#     font-size: 1.1rem;
# }

# .blood-grid {
#     display: grid;
#     grid-template-columns: repeat(4, 1fr);
#     gap: 0.5rem;
# }

# .blood-type {
#     background: white;
#     border: 2px solid #e9ecef;
#     padding: 10px 5px;
#     text-align: center;
#     border-radius: 8px;
#     cursor: pointer;
#     transition: all 0.3s ease;
#     font-weight: 600;
#     color: #495057;
# }

# .blood-type:hover {
#     border-color: #dc3545;
#     transform: translateY(-2px);
# }

# .blood-type.selected {
#     background: #dc3545;
#     color: white;
#     border-color: #dc3545;
#     box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
# }

# .medical-checkboxes {
#     display: flex;
#     flex-direction: column;
#     gap: 1rem;
# }

# .med-checkbox {
#     display: flex;
#     align-items: center;
#     gap: 1rem;
#     padding: 0.8rem;
#     background: white;
#     border-radius: 8px;
#     border: 1px solid #e9ecef;
#     transition: all 0.3s ease;
#     cursor: pointer;
# }

# .med-checkbox:hover {
#     border-color: #dc3545;
#     box-shadow: 0 2px 8px rgba(220, 53, 69, 0.1);
# }

# .med-checkbox input[type="checkbox"] {
#     width: 18px;
#     height: 18px;
#     accent-color: #dc3545;
# }

# .urgency-indicator {
#     background: #fff3cd;
#     color: #856404;
#     padding: 4px 10px;
#     border-radius: 12px;
#     font-size: 0.75rem;
#     font-weight: 600;
#     margin-left: auto;
# }

# .popular-section {
#     margin: 1.5rem 0;
# }

# .popular-section h4 {
#     color: #6c757d;
#     margin-bottom: 1rem;
#     font-size: 0.9rem;
#     text-transform: uppercase;
#     letter-spacing: 0.5px;
# }

# .location-chips {
#     display: flex;
#     flex-wrap: wrap;
#     gap: 0.6rem;
# }

# .location-chip {
#     background: #e3f2fd;
#     color: #1976d2;
#     padding: 6px 16px;
#     border-radius: 16px;
#     font-size: 0.85rem;
#     cursor: pointer;
#     transition: all 0.3s ease;
#     border: 1px solid #bbdefb;
# }

# .location-chip:hover {
#     background: #bbdefb;
#     transform: translateY(-1px);
# }

# .medical-actions {
#     display: flex;
#     justify-content: space-between;
#     align-items: center;
#     margin-top: 2rem;
#     padding-top: 1.5rem;
#     border-top: 1px solid #e9ecef;
# }

# .doctor-profile {
#     display: flex;
#     align-items: center;
#     gap: 1rem;
# }

# .doctor-avatar {
#     width: 40px;
#     height: 40px;
#     background: #dc3545;
#     border-radius: 50%;
#     display: flex;
#     align-items: center;
#     justify-content: center;
#     color: white;
#     font-weight: bold;
# }

# .doctor-info h4 {
#     margin: 0;
#     color: #2c3e50;
#     font-size: 0.9rem;
# }

# .doctor-info .rating {
#     color: #ffc107;
#     font-size: 0.8rem;
# }

# .action-buttons-medical {
#     display: flex;
#     gap: 1rem;
# }

# .btn-primary-med {
#     background: #dc3545;
#     color: white;
#     border: none;
#     padding: 10px 30px;
#     border-radius: 8px;
#     cursor: pointer;
#     font-weight: 600;
#     transition: all 0.3s ease;
# }

# .btn-primary-med:hover {
#     background: #c82333;
#     transform: translateY(-2px);
#     box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
# }

# .btn-secondary-med {
#     background: transparent;
#     color: #6c757d;
#     border: 1px solid #6c757d;
#     padding: 10px 20px;
#     border-radius: 8px;
#     cursor: pointer;
#     transition: all 0.3s ease;
# }

# .btn-secondary-med:hover {
#     background: #6c757d;
#     color: white;
# }




# .blood-search-container {
#     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
#     padding: 2rem;
#     border-radius: 20px;
#     box-shadow: 0 20px 40px rgba(0,0,0,0.1);
#     color: white;
#     margin: 1rem 0;
# }

# .search-header {
#     text-align: center;
#     margin-bottom: 2rem;
# }

# .search-header h1 {
#     font-size: 2.2rem;
#     margin-bottom: 0.5rem;
#     font-weight: 700;
# }

# .search-header p {
#     opacity: 0.9;
#     font-size: 1.1rem;
# }

# .filters-grid {
#     display: grid;
#     grid-template-columns: 1fr 1fr;
#     gap: 2rem;
#     margin-bottom: 2rem;
# }

# .filter-section {
#     background: rgba(255,255,255,0.1);
#     padding: 1.5rem;
#     border-radius: 15px;
#     backdrop-filter: blur(10px);
#     border: 1px solid rgba(255,255,255,0.2);
# }

# .filter-section h3 {
#     margin-bottom: 1rem;
#     font-size: 1.2rem;
#     display: flex;
#     align-items: center;
#     gap: 0.5rem;
# }

# .filter-section h3::before {
#     content: "💉";
#     font-size: 1.1em;
# }

# .blood-groups {
#     display: flex;
#     flex-wrap: wrap;
#     gap: 0.5rem;
# }

# .blood-group-btn {
#     background: rgba(255,255,255,0.2);
#     border: 2px solid rgba(255,255,255,0.3);
#     color: white;
#     padding: 8px 16px;
#     border-radius: 25px;
#     cursor: pointer;
#     transition: all 0.3s ease;
#     font-weight: 600;
# }

# .blood-group-btn:hover {
#     background: rgba(255,255,255,0.3);
#     transform: translateY(-2px);
# }

# .blood-group-btn.active {
#     background: #ff6b6b;
#     border-color: #ff6b6b;
#     box-shadow: 0 4px 15px rgba(255,107,107,0.4);
# }

# .checkbox-filters {
#     display: flex;
#     flex-direction: column;
#     gap: 0.8rem;
# }

# .filter-checkbox {
#     display: flex;
#     align-items: center;
#     gap: 0.8rem;
#     cursor: pointer;
#     padding: 0.5rem;
#     border-radius: 8px;
#     transition: background 0.3s ease;
# }

# .filter-checkbox:hover {
#     background: rgba(255,255,255,0.1);
# }

# .filter-checkbox input[type="checkbox"] {
#     width: 18px;
#     height: 18px;
#     border-radius: 4px;
# }

# .emergency-badge {
#     background: linear-gradient(45deg, #ff6b6b, #ee5a24);
#     padding: 4px 12px;
#     border-radius: 12px;
#     font-size: 0.8rem;
#     margin-left: auto;
#     animation: pulse 2s infinite;
# }

# @keyframes pulse {
#     0% { transform: scale(1); }
#     50% { transform: scale(1.05); }
#     100% { transform: scale(1); }
# }

# .popular-locations {
#     display: flex;
#     flex-wrap: wrap;
#     gap: 0.8rem;
#     margin-top: 1rem;
# }

# .location-tag {
#     background: rgba(255,255,255,0.15);
#     padding: 6px 16px;
#     border-radius: 20px;
#     font-size: 0.9rem;
#     cursor: pointer;
#     transition: all 0.3s ease;
#     border: 1px solid rgba(255,255,255,0.2);
# }

# .location-tag:hover {
#     background: rgba(255,255,255,0.25);
#     transform: translateY(-1px);
# }

# .action-buttons {
#     display: flex;
#     gap: 1rem;
#     justify-content: center;
#     margin-top: 1.5rem;
# }

# .search-btn {
#     background: linear-gradient(45deg, #ff6b6b, #ee5a24);
#     color: white;
#     border: none;
#     padding: 12px 40px;
#     border-radius: 25px;
#     font-size: 1.1rem;
#     font-weight: 600;
#     cursor: pointer;
#     transition: all 0.3s ease;
#     box-shadow: 0 4px 15px rgba(255,107,107,0.4);
# }

# .search-btn:hover {
#     transform: translateY(-2px);
#     box-shadow: 0 6px 20px rgba(255,107,107,0.6);
# }

# .clear-btn {
#     background: transparent;
#     color: white;
#     border: 2px solid rgba(255,255,255,0.3);
#     padding: 12px 30px;
#     border-radius: 25px;
#     cursor: pointer;
#     transition: all 0.3s ease;
# }

# .clear-btn:hover {
#     background: rgba(255,255,255,0.1);
# }










# /* Enhanced Donor Search Styles */

# .search-system-enhanced {
#   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
#   border-radius: 20px;
#   padding: 2rem;
#   margin: 2rem 0;
#   box-shadow: 0 20px 40px rgba(0,0,0,0.1);
#   color: white;
# }

# .search-header-card {
#   display: flex;
#   justify-content: space-between;
#   align-items: center;
#   margin-bottom: 2rem;
# }

# .search-header-content h2 {
#   font-size: 2rem;
#   margin-bottom: 0.5rem;
#   text-shadow: 0 2px 4px rgba(0,0,0,0.3);
# }

# .search-header-content p {
#   opacity: 0.9;
#   font-size: 1.1rem;
# }

# .advanced-toggle {
#   background: rgba(255,255,255,0.2);
#   border: 1px solid rgba(255,255,255,0.3);
#   color: white;
#   padding: 10px 20px;
#   border-radius: 25px;
#   cursor: pointer;
#   transition: all 0.3s ease;
#   backdrop-filter: blur(10px);
# }

# .advanced-toggle:hover {
#   background: rgba(255,255,255,0.3);
#   transform: translateY(-2px);
# }

# .enhanced-search-filters {
#   background: rgba(255,255,255,0.1);
#   padding: 2rem;
#   border-radius: 15px;
#   backdrop-filter: blur(10px);
#   border: 1px solid rgba(255,255,255,0.2);
# }

# .filters-grid-main {
#   display: grid;
#   grid-template-columns: 1fr 1fr;
#   gap: 2rem;
#   margin-bottom: 2rem;
# }

# .filter-section-card {
#   background: rgba(255,255,255,0.1);
#   padding: 1.5rem;
#   border-radius: 12px;
#   border: 1px solid rgba(255,255,255,0.2);
# }

# .filter-header {
#   display: flex;
#   align-items: center;
#   gap: 0.8rem;
#   margin-bottom: 1.5rem;
# }

# .filter-header h3 {
#   font-size: 1.2rem;
#   margin: 0;
# }

# .filter-icon {
#   font-size: 1.4rem;
# }

# /* Blood Group Grid */
# .blood-group-grid-enhanced {
#   display: grid;
#   grid-template-columns: repeat(4, 1fr);
#   gap: 0.8rem;
# }

# .blood-type-btn {
#   background: rgba(255,255,255,0.2);
#   border: 2px solid rgba(255,255,255,0.3);
#   color: white;
#   padding: 12px 8px;
#   border-radius: 10px;
#   cursor: pointer;
#   transition: all 0.3s ease;
#   font-weight: 600;
#   font-size: 1.1rem;
#   position: relative;
#   display: flex;
#   flex-direction: column;
#   align-items: center;
#   gap: 4px;
# }

# .blood-type-btn:hover {
#   background: rgba(255,255,255,0.3);
#   transform: translateY(-2px);
# }

# .blood-type-btn.active {
#   background: #ff6b6b;
#   border-color: #ff6b6b;
#   box-shadow: 0 4px 15px rgba(255,107,107,0.4);
# }

# .blood-type-btn.universal-donor {
#   border-color: #4ecdc4;
# }

# .blood-type-btn.universal-receiver {
#   border-color: #45b7d1;
# }

# .type-badge {
#   font-size: 0.7rem;
#   background: rgba(255,255,255,0.3);
#   padding: 2px 6px;
#   border-radius: 8px;
#   font-weight: 500;
# }

# .blood-type-btn.clear-all {
#   grid-column: 1 / -1;
#   background: rgba(255,255,255,0.15);
#   font-size: 1rem;
# }

# /* Location Search */
# .location-search-enhanced {
#   position: relative;
#   margin-bottom: 1.5rem;
# }

# .search-input-wrapper {
#   position: relative;
# }

# .location-input-enhanced {
#   width: 100%;
#   padding: 12px 45px 12px 16px;
#   border: 2px solid rgba(255,255,255,0.3);
#   border-radius: 10px;
#   background: rgba(255,255,255,0.1);
#   color: white;
#   font-size: 1rem;
#   transition: all 0.3s ease;
# }

# .location-input-enhanced:focus {
#   outline: none;
#   border-color: rgba(255,255,255,0.6);
#   background: rgba(255,255,255,0.15);
# }

# .location-input-enhanced::placeholder {
#   color: rgba(255,255,255,0.7);
# }

# .search-icon {
#   position: absolute;
#   right: 15px;
#   top: 50%;
#   transform: translateY(-50%);
#   font-size: 1.2rem;
# }

# .location-suggestions-enhanced {
#   position: absolute;
#   top: 100%;
#   left: 0;
#   right: 0;
#   background: white;
#   border-radius: 10px;
#   box-shadow: 0 10px 30px rgba(0,0,0,0.2);
#   z-index: 1000;
#   margin-top: 5px;
#   overflow: hidden;
# }

# .suggestion-item-enhanced {
#   padding: 12px 16px;
#   cursor: pointer;
#   transition: background 0.2s ease;
#   display: flex;
#   align-items: center;
#   gap: 0.8rem;
#   color: #333;
# }

# .suggestion-item-enhanced:hover {
#   background: #f8f9fa;
# }

# .suggestion-icon {
#   color: #667eea;
# }

# /* Quick Locations */
# .quick-locations-section {
#   margin-top: 1rem;
# }

# .quick-locations-label {
#   display: block;
#   margin-bottom: 0.8rem;
#   font-weight: 500;
#   opacity: 0.9;
# }

# .location-pills {
#   display: flex;
#   flex-wrap: wrap;
#   gap: 0.6rem;
# }

# .location-pill {
#   background: rgba(255,255,255,0.15);
#   border: 1px solid rgba(255,255,255,0.3);
#   color: white;
#   padding: 6px 16px;
#   border-radius: 20px;
#   cursor: pointer;
#   transition: all 0.3s ease;
#   font-size: 0.9rem;
# }

# .location-pill:hover {
#   background: rgba(255,255,255,0.25);
#   transform: translateY(-1px);
# }

# .location-pill.active {
#   background: #4ecdc4;
#   border-color: #4ecdc4;
# }

# /* Advanced Filters */
# .advanced-filters-panel {
#   margin-top: 2rem;
#   padding-top: 2rem;
#   border-top: 1px solid rgba(255,255,255,0.2);
# }

# .advanced-filters-grid {
#   display: grid;
#   grid-template-columns: 1fr 1fr;
#   gap: 2rem;
# }

# .filter-options-grid {
#   display: flex;
#   flex-direction: column;
#   gap: 1rem;
# }

# .filter-option {
#   display: flex;
#   align-items: center;
#   gap: 1rem;
#   padding: 1rem;
#   background: rgba(255,255,255,0.1);
#   border-radius: 10px;
#   cursor: pointer;
#   transition: all 0.3s ease;
#   border: 2px solid transparent;
# }

# .filter-option:hover {
#   background: rgba(255,255,255,0.15);
# }

# .filter-option input[type="radio"]:checked + .option-content {
#   background: rgba(255,255,255,0.2);
# }

# .option-content {
#   display: flex;
#   align-items: center;
#   gap: 0.8rem;
#   width: 100%;
# }

# .option-icon {
#   font-size: 1.2rem;
# }

# .option-text {
#   flex: 1;
#   font-weight: 500;
# }

# .emergency-badge {
#   background: linear-gradient(45deg, #ff6b6b, #ee5a24);
#   padding: 4px 8px;
#   border-radius: 8px;
#   font-size: 0.8rem;
#   font-weight: 600;
#   animation: pulse 2s infinite;
# }

# @keyframes pulse {
#   0% { transform: scale(1); }
#   50% { transform: scale(1.05); }
#   100% { transform: scale(1); }
# }

# /* Additional Filters */
# .additional-filters {
#   display: flex;
#   flex-direction: column;
#   gap: 1rem;
# }

# .additional-filter {
#   display: flex;
#   align-items: center;
#   gap: 1rem;
#   padding: 0.8rem;
#   background: rgba(255,255,255,0.1);
#   border-radius: 8px;
#   cursor: pointer;
#   transition: background 0.3s ease;
# }

# .additional-filter:hover {
#   background: rgba(255,255,255,0.15);
# }

# .filter-checkmark {
#   width: 20px;
#   height: 20px;
#   border: 2px solid rgba(255,255,255,0.5);
#   border-radius: 4px;
#   position: relative;
# }

# .additional-filter input:checked + .filter-checkmark {
#   background: #4ecdc4;
#   border-color: #4ecdc4;
# }

# .additional-filter input:checked + .filter-checkmark::after {
#   content: '✓';
#   position: absolute;
#   color: white;
#   font-size: 14px;
#   top: 50%;
#   left: 50%;
#   transform: translate(-50%, -50%);
# }

# /* Filter Actions */
# .filter-actions-enhanced {
#   display: flex;
#   justify-content: space-between;
#   align-items: center;
#   margin-top: 2rem;
#   padding-top: 1.5rem;
#   border-top: 1px solid rgba(255,255,255,0.2);
# }

# .results-count-badge {
#   background: rgba(255,255,255,0.2);
#   padding: 12px 20px;
#   border-radius: 25px;
#   display: flex;
#   align-items: center;
#   gap: 0.8rem;
# }

# .count-number {
#   font-size: 1.5rem;
#   font-weight: 700;
# }

# .count-label {
#   font-size: 0.9rem;
#   opacity: 0.9;
# }

# .action-buttons {
#   display: flex;
#   gap: 1rem;
# }

# .clear-filters-btn {
#   background: rgba(255,255,255,0.2);
#   border: 1px solid rgba(255,255,255,0.3);
#   color: white;
#   padding: 12px 24px;
#   border-radius: 25px;
#   cursor: pointer;
#   transition: all 0.3s ease;
#   display: flex;
#   align-items: center;
#   gap: 0.5rem;
# }

# .clear-filters-btn:hover {
#   background: rgba(255,255,255,0.3);
#   transform: translateY(-2px);
# }

# .register-cta-btn {
#   background: linear-gradient(45deg, #ff6b6b, #ee5a24);
#   border: none;
#   color: white;
#   padding: 12px 24px;
#   border-radius: 25px;
#   cursor: pointer;
#   transition: all 0.3s ease;
#   display: flex;
#   align-items: center;
#   gap: 0.5rem;
#   font-weight: 600;
#   box-shadow: 0 4px 15px rgba(255,107,107,0.4);
# }

# .register-cta-btn:hover {
#   transform: translateY(-2px);
#   box-shadow: 0 6px 20px rgba(255,107,107,0.6);
# }

# /* Enhanced Donors Grid */
# .donors-grid-section {
#   margin-top: 3rem;
# }

# .donors-grid-header {
#   display: flex;
#   justify-content: space-between;
#   align-items: center;
#   margin-bottom: 2rem;
# }

# .donors-grid-header h3 {
#   font-size: 1.8rem;
#   color: #2d3748;
# }

# .sort-select {
#   padding: 8px 16px;
#   border: 2px solid #e2e8f0;
#   border-radius: 8px;
#   background: white;
#   color: #4a5568;
#   cursor: pointer;
# }

# .donors-grid-enhanced {
#   display: grid;
#   grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
#   gap: 1.5rem;
# }

# .donor-card-enhanced {
#   background: white;
#   border-radius: 15px;
#   padding: 1.5rem;
#   box-shadow: 0 10px 30px rgba(0,0,0,0.08);
#   border: 1px solid #e8f4f8;
#   position: relative;
#   transition: all 0.3s ease;
# }

# .donor-card-enhanced:hover {
#   transform: translateY(-5px);
#   box-shadow: 0 20px 40px rgba(0,0,0,0.12);
# }

# .donor-card-enhanced.current-user {
#   border-left: 4px solid #4ecdc4;
# }

# .current-user-ribbon {
#   position: absolute;
#   top: 1rem;
#   right: -8px;
#   background: #4ecdc4;
#   color: white;
#   padding: 4px 12px;
#   border-radius: 4px 0 0 4px;
#   font-size: 0.8rem;
#   font-weight: 600;
# }

# .donor-card-header {
#   display: flex;
#   gap: 1rem;
#   margin-bottom: 1.5rem;
# }

# .donor-avatar-section {
#   position: relative;
# }

# .donor-avatar-enhanced {
#   width: 60px;
#   height: 60px;
#   border-radius: 50%;
#   background: linear-gradient(135deg, #667eea, #764ba2);
#   display: flex;
#   align-items: center;
#   justify-content: center;
#   font-size: 1.5rem;
# }

# .verified-badge-enhanced {
#   position: absolute;
#   bottom: -2px;
#   right: -2px;
#   background: #48bb78;
#   color: white;
#   border-radius: 50%;
#   width: 20px;
#   height: 20px;
#   display: flex;
#   align-items: center;
#   justify-content: center;
#   font-size: 0.7rem;
#   border: 2px solid white;
# }

# .donor-main-info {
#   flex: 1;
# }

# .donor-name {
#   font-size: 1.3rem;
#   margin-bottom: 0.5rem;
#   color: #2d3748;
# }

# .you-indicator {
#   color: #4ecdc4;
#   font-size: 0.9rem;
#   font-weight: 500;
# }

# .donor-badges-enhanced {
#   display: flex;
#   gap: 0.5rem;
#   flex-wrap: wrap;
# }

# .blood-badge-enhanced {
#   background: #fed7d7;
#   color: #c53030;
#   padding: 4px 12px;
#   border-radius: 20px;
#   font-weight: 700;
#   font-size: 1.1rem;
#   display: flex;
#   align-items: center;
#   gap: 4px;
# }

# .blood-badge-enhanced.universal {
#   background: #c6f6d5;
#   color: #276749;
# }

# .universal-indicator {
#   font-size: 0.8rem;
#   color: #48bb78;
# }

# .level-badge {
#   background: #e9d8fd;
#   color: #6b46c1;
#   padding: 4px 8px;
#   border-radius: 12px;
#   font-size: 0.8rem;
#   font-weight: 600;
# }

# .donor-stats-enhanced {
#   display: flex;
#   flex-direction: column;
#   gap: 0.5rem;
# }

# .stat-item {
#   display: flex;
#   align-items: center;
#   gap: 0.5rem;
#   font-size: 0.9rem;
#   color: #4a5568;
# }

# .stat-icon {
#   font-size: 1rem;
# }

# .stat-value {
#   font-weight: 600;
# }

# .donor-details-enhanced {
#   margin-bottom: 1.5rem;
# }

# .detail-row {
#   display: flex;
#   align-items: center;
#   gap: 0.8rem;
#   margin-bottom: 0.8rem;
#   color: #4a5568;
# }

# .detail-icon {
#   width: 20px;
#   text-align: center;
# }

# .detail-text {
#   flex: 1;
# }

# .donation-info {
#   display: flex;
#   justify-content: space-between;
#   align-items: center;
#   margin-bottom: 1.5rem;
#   padding: 1rem;
#   background: #f7fafc;
#   border-radius: 8px;
# }

# .last-donation-enhanced {
#   display: flex;
#   flex-direction: column;
#   gap: 0.2rem;
# }

# .donation-label {
#   font-size: 0.8rem;
#   color: #718096;
# }

# .donation-date {
#   font-weight: 600;
#   color: #2d3748;
# }

# .emergency-tag-enhanced {
#   background: linear-gradient(45deg, #fed7d7, #feb2b2);
#   color: #c53030;
#   padding: 6px 12px;
#   border-radius: 15px;
#   font-size: 0.8rem;
#   font-weight: 600;
#   display: flex;
#   align-items: center;
#   gap: 0.5rem;
#   animation: pulse 2s infinite;
# }

# .emergency-icon {
#   font-size: 1rem;
# }

# .donor-actions-enhanced {
#   display: grid;
#   grid-template-columns: 1fr auto;
#   gap: 1rem;
# }

# .contact-btn-primary {
#   background: linear-gradient(45deg, #667eea, #764ba2);
#   border: none;
#   color: white;
#   padding: 12px 20px;
#   border-radius: 10px;
#   cursor: pointer;
#   transition: all 0.3s ease;
#   display: flex;
#   align-items: center;
#   gap: 0.5rem;
#   font-weight: 600;
#   justify-content: center;
# }

# .contact-btn-primary:hover:not(:disabled) {
#   transform: translateY(-2px);
#   box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
# }

# .contact-btn-primary:disabled {
#   background: #a0aec0;
#   cursor: not-allowed;
# }

# .profile-btn-secondary {
#   background: transparent;
#   border: 2px solid #e2e8f0;
#   color: #4a5568;
#   padding: 10px 16px;
#   border-radius: 10px;
#   cursor: pointer;
#   transition: all 0.3s ease;
#   display: flex;
#   align-items: center;
#   gap: 0.5rem;
#   font-weight: 500;
# }

# .profile-btn-secondary:hover {
#   border-color: #667eea;
#   color: #667eea;
# }

# /* Enhanced No Results */
# .no-results-enhanced {
#   text-align: center;
#   padding: 4rem 2rem;
#   background: white;
#   border-radius: 15px;
#   box-shadow: 0 10px 30px rgba(0,0,0,0.08);
# }

# .no-results-illustration {
#   font-size: 4rem;
#   margin-bottom: 1.5rem;
#   opacity: 0.7;
# }

# .no-results-content h3 {
#   font-size: 1.5rem;
#   color: #2d3748;
#   margin-bottom: 1rem;
# }

# .no-results-content p {
#   color: #718096;
#   margin-bottom: 2rem;
# }

# .no-results-actions {
#   display: flex;
#   gap: 1rem;
#   justify-content: center;
# }

# /* Enhanced Search Tips */
# .search-tips-enhanced {
#   margin-top: 4rem;
#   padding: 2rem;
#   background: #f7fafc;
#   border-radius: 15px;
# }

# .tips-header {
#   text-align: center;
#   margin-bottom: 2rem;
# }

# .tips-header h4 {
#   font-size: 1.5rem;
#   color: #2d3748;
# }

# .tips-grid-enhanced {
#   display: grid;
#   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
#   gap: 1.5rem;
# }

# .tip-card {
#   background: white;
#   padding: 1.5rem;
#   border-radius: 10px;
#   box-shadow: 0 4px 15px rgba(0,0,0,0.05);
#   display: flex;
#   gap: 1rem;
#   align-items: flex-start;
#   transition: transform 0.3s ease;
# }

# .tip-card:hover {
#   transform: translateY(-2px);
# }

# .tip-icon {
#   font-size: 2rem;
#   flex-shrink: 0;
# }

# .tip-content h5 {
#   font-size: 1.1rem;
#   color: #2d3748;
#   margin-bottom: 0.5rem;
# }

# .tip-content p {
#   color: #718096;
#   font-size: 0.9rem;
#   line-height: 1.5;
# }

# /* Responsive Design */
# @media (max-width: 768px) {
#   .filters-grid-main {
#     grid-template-columns: 1fr;
#   }
  
#   .advanced-filters-grid {
#     grid-template-columns: 1fr;
#   }
  
#   .blood-group-grid-enhanced {
#     grid-template-columns: repeat(2, 1fr);
#   }
  
#   .donors-grid-enhanced {
#     grid-template-columns: 1fr;
#   }
  
#   .filter-actions-enhanced {
#     flex-direction: column;
#     gap: 1rem;
#     align-items: stretch;
#   }
  
#   .action-buttons {
#     justify-content: center;
#   }
  
#   .search-header-card {
#     flex-direction: column;
#     gap: 1rem;
#     text-align: center;
#   }
# }








# /* Enhanced Search Suggestions */
# .suggestions-header {
#   padding: 12px 16px;
#   background: #f8f9fa;
#   border-bottom: 1px solid #e9ecef;
#   font-weight: 600;
#   color: #495057;
#   font-size: 0.9rem;
# }

# .suggestion-section {
#   border-bottom: 1px solid #f1f3f4;
# }

# .suggestion-section:last-child {
#   border-bottom: none;
# }

# .section-label {
#   padding: 8px 16px;
#   background: #f8f9fa;
#   font-size: 0.8rem;
#   color: #6c757d;
#   font-weight: 500;
# }

# .suggestion-item-enhanced {
#   padding: 12px 16px;
#   cursor: pointer;
#   transition: background 0.2s ease;
#   display: flex;
#   align-items: center;
#   gap: 0.8rem;
#   color: #333;
#   border-left: 3px solid transparent;
# }

# .suggestion-item-enhanced:hover {
#   background: #f8f9fa;
#   border-left-color: #667eea;
# }

# .suggestion-item-enhanced.exact-match {
#   background: #f0f9ff;
#   border-left-color: #48bb78;
# }

# .suggestion-item-enhanced.history-item {
#   background: #fffbf0;
#   border-left-color: #ed8936;
# }

# .suggestion-text {
#   flex: 1;
# }

# .search-tips-mini {
#   margin-top: 1rem;
#   padding: 0.8rem;
#   background: rgba(255,255,255,0.1);
#   border-radius: 8px;
#   border: 1px solid rgba(255,255,255,0.2);
# }

# .tip-item {
#   display: flex;
#   align-items: center;
#   gap: 0.5rem;
#   font-size: 0.85rem;
#   opacity: 0.9;
# }

# .tip-icon {
#   font-size: 1rem;
# }

# /* Auto-correction indicators */
# .auto-correct-notice {
#   background: #fff3cd;
#   border: 1px solid #ffeaa7;
#   border-radius: 8px;
#   padding: 0.8rem;
#   margin-top: 1rem;
#   display: flex;
#   align-items: center;
#   gap: 0.8rem;
#   font-size: 0.9rem;
#   color: #856404;
# }

# .correction-suggestion {
#   background: #d1ecf1;
#   border: 1px solid #bee5eb;
#   border-radius: 8px;
#   padding: 0.8rem;
#   margin-top: 1rem;
#   display: flex;
#   align-items: center;
#   gap: 0.8rem;
#   font-size: 0.9rem;
#   color: #0c5460;
# }

# /* Enhanced input states */
# .location-input-enhanced:focus {
#   outline: none;
#   border-color: #667eea;
#   box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
#   background: rgba(255,255,255,0.15);
# }

# /* Loading state for suggestions */
# .suggestions-loading {
#   padding: 1rem;
#   text-align: center;
#   color: #6c757d;
#   font-style: italic;
# }

# /* No suggestions state */
# .suggestions-empty {
#   padding: 2rem 1rem;
#   text-align: center;
#   color: #6c757d;
# }

# .suggestions-empty .empty-icon {
#   font-size: 2rem;
#   margin-bottom: 0.5rem;
#   opacity: 0.5;
# }

