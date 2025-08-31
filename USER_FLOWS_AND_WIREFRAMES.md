# 🎯 Kommon MVP: Complete User Flows & Wireframe Specifications

## 📋 Document Information

**Document Version**: 1.0.0  
**Last Updated**: December 2024  
**Status**: 🟡 Design Phase  
**Document Owner**: Design Team  
**Target Audience**: Design & Development Teams  
**Reference Documents**: KOMMON_PRD.md, USER_FLOW.MD

---

## 🎭 User Personas & Scenarios

### **Scenario 1: Ananya Sharma (International Graduate Student)**

**Background**: 24-year-old M.S. Computer Science student at Columbia, just arrived from India  
**Goal**: Find a safe, quiet room with a studious roommate near campus  
**Pain Points**: No U.S. credit history, vulnerable to scams, needs trust verification  
**Device Usage**: Primarily mobile (iPhone), secondary laptop usage

### **Scenario 2: Ben Carter (Out-of-State Undergraduate)**

**Background**: 20-year-old NYU Film & TV student from Florida, moving off-campus  
**Goal**: Find 2-3 roommates to share apartment costs in vibrant neighborhood  
**Pain Points**: Financial pressure, needs multiple compatible roommates  
**Device Usage**: Mixed mobile/desktop, social media heavy

### **Scenario 3: Chloe Davis (Local NYC Student)**

**Background**: 21-year-old Fordham Economics student, has apartment with friend  
**Goal**: Find one trustworthy third roommate to complete their group  
**Pain Points**: Fear of incompatible stranger, wants verification and compatibility  
**Device Usage**: Mobile-first, occasional desktop for detailed browsing

---

## 📱 Complete Page Architecture

### **Authentication & Onboarding Flow (7 Pages)**

1. **Landing Page** - Marketing/Introduction
2. **Sign-Up Page** - Account creation with .edu email
3. **Email Verification Page** - Verification pending state
4. **Login Page** - Returning user authentication
5. **Role Selection Page** - "I need/have a room" choice
6. **Profile Setup Page** - Basic information collection
7. **Lifestyle Preferences Page** - Compatibility matching setup

### **Core Application Flow (8 Pages)**

8. **Dashboard/Search Results** - Main marketplace interface
9. **User Profile View** - Detailed profile viewing
10. **Own Profile Management** - Edit personal profile
11. **Search Filters** - Advanced filtering interface
12. **Room Listing Creation** - Create room availability
13. **Seeker Profile Creation** - Create room wanted profile
14. **Settings Page** - Account and privacy settings
15. **Help/Support Page** - Documentation and support

### **Future/Enhanced Features (5 Pages)**

16. **Messaging Interface** - In-app communication (Phase 2)
17. **Notifications Center** - Activity and updates
18. **University Verification** - Enhanced verification process
19. **Safety/Reporting** - Report issues and safety features
20. **Admin Dashboard** - Content moderation (internal)

---

## 🔄 Detailed User Flows

### **Flow 1: New User Onboarding (Universal)**

#### **Page 1: Landing Page**

**User Story**: As a prospective user, I want to understand what Kommon is and feel confident it's safe before signing up.

**Wireframe Generation Prompt**:

```
Create a mobile-first landing page wireframe for Kommon student housing platform.

SCREEN SPECIFICATIONS:
- Mobile: 375px width (iPhone standard)
- Desktop: 1440px width
- Grid: 12-column responsive grid, 16px gutters
- Spacing: 4px base unit system

BRAND ELEMENTS:
- Colors: Hearth (#C86A50), Sage (#A3B1A2), Sunlight (#F3DDA4), Ink (#2E3A4B), Foundation (#F7F5F2)
- Typography: Nunito Bold for headlines, Lora Regular for body
- Logo: Community Threshold symbol in Ink

CONTENT STRUCTURE:
1. Header: Logo + "Log In" button (top right)
2. Hero Section:
   - Headline: "Find Your Safe Space" (Nunito Bold 40px mobile, 56px desktop)
   - Subheading: "The trusted housing platform for verified university students" (Lora 18px)
   - Primary CTA: "Get Started" button (Hearth background)
   - Hero Image: Diverse students in modern apartment setting
3. Trust Indicators:
   - "University Verified" badge with shield icon
   - "Safe Community" with verification checkmarks
   - "Compatible Matches" with compatibility icons
4. How It Works (3 steps):
   - Step 1: "Verify with .edu email"
   - Step 2: "Create your profile"
   - Step 3: "Find your match"
5. Student Testimonials (2-3 cards)
6. Partner Universities logos (Columbia, NYU, Fordham)
7. Footer: Links, Privacy Policy, Terms

INTERACTIONS:
- Sticky header on scroll
- Smooth scroll to sections
- Hover states on buttons (darken Hearth to #B55F46)
- Mobile hamburger menu for navigation

TRUST ELEMENTS:
- Prominent university verification messaging
- Safety-first language throughout
- Student photos showing diversity
- Clear "verified student only" messaging
```

#### **Page 2: Sign-Up Page**

**User Story**: As Ananya, I want to create an account using my Columbia email so I know everyone else is a verified student.

**Wireframe Generation Prompt**:

```
Create a focused sign-up page wireframe for university email verification.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, single column
- Desktop: 1440px width, centered 480px form container
- Background: Foundation (#F7F5F2)
- Form container: White background, subtle shadow

LAYOUT STRUCTURE:
1. Header: Kommon logo (Community Threshold symbol) centered
2. Main Content (centered, 6-column container):
   - Headline: "Welcome Home." (Nunito Bold 36px, Ink color)
   - Sub-headline: "Create your account to find your community." (Lora Regular 18px)
   - Sign-up form with 3 fields:
     * Full Name (required)
     * University Email (required, .edu validation)
     * Password (required, strength indicator)
   - Primary button: "Create Account" (Hearth background, Foundation text)
   - Link: "Already have an account? Log in" (bottom)

FORM SPECIFICATIONS:
- Input fields: White background, 1px Sage border, 4px border-radius
- Labels: Nunito Bold 14px
- Input text: Lora Regular 16px
- Field height: 48px minimum for mobile accessibility
- Error states: 2px Error-Red-500 border, error message below

VALIDATION MESSAGING:
- Real-time email validation for .edu domains
- Clear error: "Please use a valid university email address"
- Password strength indicator
- Required field indicators (*)

MOBILE CONSIDERATIONS:
- Large touch targets (44px minimum)
- Keyboard optimization (email/text input types)
- No horizontal scrolling
- Clear focus states for accessibility

TRUST ELEMENTS:
- Prominent .edu email requirement explanation
- Security/privacy reassurance text
- University verification badge/icon
```

#### **Page 3: Email Verification Page**

**User Story**: As a user, I need clear guidance on what to do after submitting my email verification.

**Wireframe Generation Prompt**:

```
Create an email verification waiting page with clear instructions and next steps.

SCREEN SPECIFICATIONS:
- Mobile: 375px width
- Desktop: 1440px width, centered content
- Background: Foundation (#F7F5F2)
- Content: Centered 6-column container

CONTENT STRUCTURE:
1. Large email icon (64x64px) in Sage color
2. Headline: "Check Your Inbox" (Nunito Bold 36px, Ink)
3. Body text: Multi-paragraph explanation (Lora Regular 18px, center-aligned):
   - "We've sent a verification link to [user's email]"
   - "Click the link in the email to verify your account"
   - "The link will expire in 24 hours"
4. Secondary actions:
   - "Didn't receive an email? Resend link" (link style)
   - "Need help? Contact support" (link style)
5. Email provider quick links:
   - "Open Gmail" / "Open Outlook" buttons (if detectable)

VISUAL ELEMENTS:
- Large, friendly email illustration or icon
- Progress indicator showing verification step
- Clear typography hierarchy
- Reassuring, friendly tone

MOBILE OPTIMIZATION:
- Large, readable text
- Easy-to-tap resend link
- Clear visual hierarchy
- Portrait orientation optimization

FUNCTIONALITY:
- Auto-detect email provider for quick access links
- Resend functionality with cooldown timer
- Clear success state when email is verified
```

#### **Page 4: Login Page**

**User Story**: As a returning user, I want to quickly and securely access my account.

**Wireframe Generation Prompt**:

```
Create a streamlined login page for returning verified users.

SCREEN SPECIFICATIONS:
- Mobile: 375px width
- Desktop: 1440px width, centered 400px form
- Background: Foundation (#F7F5F2)
- Form: White background with subtle shadow

LAYOUT:
1. Kommon logo (centered at top)
2. Headline: "Welcome Back" (Nunito Bold 32px)
3. Login form:
   - Email field (university email)
   - Password field (with show/hide toggle)
   - "Remember me" checkbox
   - "Forgot password?" link
4. Primary button: "Log In" (Hearth background)
5. Divider line
6. "New to Kommon? Sign up" link

FORM SPECIFICATIONS:
- Same styling as sign-up form
- Auto-focus on email field
- Tab navigation support
- Clear error states for invalid credentials
- Loading state for submit button

SECURITY FEATURES:
- Password visibility toggle icon
- Secure password field
- Rate limiting messaging if needed
- Clear error messages without revealing too much info

ACCESSIBILITY:
- WCAG 2.1 AA compliance
- Screen reader friendly labels
- High contrast focus indicators
- Keyboard navigation support

MOBILE FEATURES:
- Email keyboard type for email field
- Large touch targets
- Optimized for one-handed use
- Auto-complete support
```

### **Flow 2: Profile Setup (Role-Specific)**

#### **Page 5: Role Selection Page**

**User Story**: As a new user, I need to clearly indicate whether I'm looking for a room or offering one.

**Wireframe Generation Prompt**:

```
Create a role selection page that clearly separates room seekers from room providers.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, stacked cards
- Desktop: 1440px width, side-by-side cards in 8-column container
- Background: Foundation (#F7F5F2)

LAYOUT STRUCTURE:
1. Progress indicator (step 1 of 3)
2. Headline: "What brings you to Kommon?" (Nunito Bold 36px, Ink)
3. Two selection cards (equal size):

CARD 1 - ROOM SEEKER:
- Large icon: search-home (64x64px)
- Title: "I need a room" (Nunito Bold 24px)
- Description: "I'm looking for a place to live and/or roommates" (Lora Regular 16px)
- Use case examples: "Perfect for new students, off-campus movers"

CARD 2 - ROOM PROVIDER:
- Large icon: add-home (64x64px)
- Title: "I have a room" (Nunito Bold 24px)
- Description: "I have space available and need roommates" (Lora Regular 16px)
- Use case examples: "Great for students with extra space"

CARD STYLING:
- White background
- 1px solid Sage border
- 8px border-radius
- 24px padding
- Hover state: Border changes to Hearth
- Selected state: Hearth border, subtle background tint

MOBILE OPTIMIZATION:
- Cards stack vertically
- Full-width touch targets
- Clear visual separation
- Large, easy-to-tap areas

NAVIGATION:
- Continue button appears after selection
- Back option to previous step
- Skip option with explanation of consequences
```

#### **Page 6A: Seeker Profile Setup**

**User Story**: As Ben (seeking roommates), I want to specify my budget and preferences so I can find compatible matches.

**Wireframe Generation Prompt**:

```
Create a multi-step form for room seekers to specify their housing requirements.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, single column form
- Desktop: 1440px width, centered 600px form container
- Background: Foundation (#F7F5F2)

FORM STRUCTURE:
1. Progress indicator (step 2 of 3)
2. Headline: "Tell us what you're looking for" (Nunito Bold 32px)
3. Form sections:

SECTION 1 - BUDGET:
- Label: "Maximum monthly budget" (Nunito Bold 16px)
- Input: Text field with "$" prefix
- Helper text: "Include your share of utilities"
- Validation: Numbers only, reasonable range ($500-$3000)

SECTION 2 - LOCATION:
- Label: "Preferred neighborhoods" (Nunito Bold 16px)
- Input: Multi-select dropdown with NYC neighborhoods
- Popular options: Greenwich Village, East Village, Upper West Side, etc.
- Helper text: "Select up to 5 neighborhoods"

SECTION 3 - TIMING:
- Label: "Desired move-in date" (Nunito Bold 16px)
- Input: Date picker component
- Default: Next month
- Helper text: "Flexible dates help find more matches"

SECTION 4 - HOUSING TYPE:
- Label: "Looking for" (Nunito Bold 16px)
- Options: Radio buttons
  - "A room in existing apartment"
  - "New apartment with roommates"
  - "Either option"

FORM CONTROLS:
- "Next" button (primary)
- "Skip for now" link (secondary)
- Form validation with clear error messages
- Auto-save draft functionality

MOBILE CONSIDERATIONS:
- Large touch targets for form controls
- Optimized date picker for mobile
- Dropdown alternatives for mobile (bottom sheet)
- Progress saving for multi-step flow
```

#### **Page 6B: Room Listing Creation**

**User Story**: As Chloe (has a room), I want to create an attractive listing that will find the right third roommate.

**Wireframe Generation Prompt**:

```
Create a room listing form for students offering housing to roommates.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, scrollable form
- Desktop: 1440px width, two-column layout (form + preview)
- Background: Foundation (#F7F5F2)

FORM STRUCTURE:
1. Progress indicator (step 2 of 3)
2. Headline: "Tell us about your space" (Nunito Bold 32px)

SECTION 1 - BASIC INFO:
- Room title (e.g., "Cozy room in shared 3BR apartment")
- Monthly rent amount ($ input with validation)
- Available move-in date (date picker)
- Lease end date (date picker)

SECTION 2 - LOCATION:
- Address/neighborhood (text input with autocomplete)
- Nearest subway stations (multi-select)
- Distance to major universities (auto-calculated)

SECTION 3 - SPACE DETAILS:
- Room type (Private bedroom/Shared room)
- Bathroom situation (Private/Shared)
- Furnished/Unfurnished (radio buttons)
- Room size (optional, dropdown)

SECTION 4 - AMENITIES:
- Checkboxes for common amenities:
  - Laundry in building/unit
  - Dishwasher
  - Air conditioning
  - Balcony/Outdoor space
  - Gym access
  - Parking available

SECTION 5 - PHOTOS:
- Photo upload area (drag & drop)
- Minimum 3 photos recommended
- Room, common areas, building exterior
- Photo guidelines and tips

SECTION 6 - DESCRIPTION:
- Text area for additional details
- Character limit (500 words)
- Placeholder with helpful prompts
- Writing tips sidebar

DESKTOP PREVIEW:
- Live preview of listing as user types
- Shows how it will appear to other users
- Mobile preview toggle

FORM VALIDATION:
- Required fields clearly marked
- Real-time validation feedback
- Photo upload progress indicators
- Draft saving functionality
```

#### **Page 7: Lifestyle Preferences Setup**

**User Story**: As Ananya (needs quiet study environment), I want to specify my lifestyle so I can find compatible roommates.

**Wireframe Generation Prompt**:

```
Create a lifestyle preferences form that enables compatibility matching.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, single column
- Desktop: 1440px width, centered 700px container
- Background: Foundation (#F7F5F2)

LAYOUT STRUCTURE:
1. Progress indicator (step 3 of 3)
2. Headline: "How do you like to live?" (Nunito Bold 32px, Ink)
3. Subheading: "This helps us find compatible roommates" (Lora Regular 18px)

PREFERENCE SECTIONS:

SECTION 1 - CLEANLINESS:
- Question: "How would you describe your cleanliness level?"
- Radio options (visual icons + text):
  - "Very Tidy" (sparkle icon)
  - "Moderately Clean" (check icon)
  - "Relaxed" (casual icon)

SECTION 2 - SOCIAL HABITS:
- Question: "How often do you have guests over?"
- Radio options:
  - "Host guests often" (party icon)
  - "Occasional guests" (friends icon)
  - "Rarely have guests" (quiet icon)

SECTION 3 - NOISE LEVEL:
- Question: "What's your typical noise level?"
- Radio options:
  - "Often noisy" (speaker icon)
  - "Sometimes noisy" (medium volume icon)
  - "Mostly quiet" (quiet icon)

SECTION 4 - STUDY HABITS:
- Question: "When do you typically study?"
- Multiple select checkboxes:
  - "Early morning (6-9 AM)"
  - "Daytime (9 AM-6 PM)"
  - "Evening (6-10 PM)"
  - "Late night (10 PM+)"

SECTION 5 - LIFESTYLE:
- Question: "Which describes you best?"
- Multiple select:
  - "Night owl"
  - "Early bird"
  - "Social butterfly"
  - "Homebody"
  - "Fitness enthusiast"
  - "Foodie/cooking lover"

RADIO BUTTON STYLING:
- Custom Kommon-styled radio buttons
- 20x20px circles with 1px Sage border
- Selected: 10x10px Hearth circle inside
- Hover: Border changes to Hearth
- Focus: 2px Sunlight outline

COMPLETION:
- "Complete Profile" button (primary)
- Progress indicator shows 100%
- Success messaging
- Clear next steps

ACCESSIBILITY:
- Clear labeling for screen readers
- Keyboard navigation support
- High contrast focus indicators
- Alternative text for icons
```

### **Flow 3: Core Marketplace Experience**

#### **Page 8: Dashboard/Search Results**

**User Story**: As any user, I want to browse available rooms and potential roommates with effective filtering.

**Wireframe Generation Prompt**:

```
Create a comprehensive dashboard/search interface for the student housing marketplace.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, single column with slide-in filters
- Desktop: 1440px width, 3-column layout (3/12 filters, 9/12 results)
- Responsive breakpoints: 768px (tablet), 1024px (desktop)

DESKTOP LAYOUT:

HEADER (persistent):
- Kommon logo (left)
- Search bar (center, 400px width)
- User avatar + dropdown menu (right)
- Notifications icon with badge
- Quick toggle: "Seeking" / "Offering" view

LEFT SIDEBAR - FILTERS (3/12 columns):
- Collapsible filter sections:

BUDGET FILTER:
- Dual-range slider ($500-$3000)
- Input fields for min/max
- Common preset buttons ($800, $1200, $1500)

LOCATION FILTER:
- Neighborhood checkboxes (scrollable)
- Map toggle option
- Distance from university slider

LIFESTYLE FILTERS:
- Checkbox groups matching profile setup:
  - Cleanliness level
  - Social habits
  - Noise level
  - Study habits
- Clear filters button

MAIN CONTENT AREA (9/12 columns):

RESULTS HEADER:
- Results count: "Showing 24 results"
- Sort dropdown: "Best Match", "Newest", "Price Low-High"
- View toggle: Grid/List view
- Save search button

RESULT CARDS (card-user-listing):
Each card contains:
- Profile photo (80x80px, circular)
- "Verified Student" badge (prominent)
- Full name + university + year
- Key info (budget/rent, location)
- Top 3 lifestyle tags
- Match percentage (if applicable)
- Quick action button

CARD STYLING:
- White background, 1px Sage border
- 8px border-radius, 16px padding
- Hover: Subtle box-shadow, slight lift
- Grid: 3 cards per row on desktop
- List: Full width with horizontal layout

MOBILE LAYOUT:
- Filters accessible via bottom sheet/slide-in
- Search results in single column
- Sticky filter button
- Infinite scroll or pagination
- Swipe gestures for quick actions

EMPTY STATES:
- No results found messaging
- Suggestions to broaden search
- Contact support option

LOADING STATES:
- Skeleton screens for cards
- Progressive loading
- Search result indicators
```

#### **Page 9: User Profile View**

**User Story**: As Chloe, I want to view a potential roommate's full profile to assess compatibility and trustworthiness.

**Wireframe Generation Prompt**:

```
Create a detailed user profile view page that builds trust and shows compatibility.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, single column scroll
- Desktop: 1440px width, two-column layout (4/10 + 6/10)
- Background: Foundation (#F7F5F2)
- Content: White background containers

DESKTOP LAYOUT:

LEFT COLUMN (4/10):
PROFILE HEADER:
- Large profile photo (160x160px, circular)
- User name (Nunito Bold 28px)
- Verified Student badge (prominent, Success-Green-500)
- University info (Lora Regular 16px):
  - "Columbia University"
  - "M.S. in Computer Science"
  - "1st Year Graduate Student"
- Match percentage (if applicable)

QUICK STATS:
- Member since date
- Response rate (if messaging enabled)
- Verification badges
- Safety report button

CONTACT SECTION:
- Primary action button: "Send Message" or "Express Interest"
- Secondary action: "Save Profile"
- Report user option (discrete)

RIGHT COLUMN (6/10):

HOUSING DETAILS SECTION:
- Clear header: "Looking For" or "Offering"
- Key details in card format:
  - Budget/Rent amount
  - Preferred neighborhoods
  - Move-in date
  - Housing type preferences

LIFESTYLE SECTION:
- "How I Live" header
- Visual representation of preferences:
  - Cleanliness level (icon + description)
  - Social habits (icon + description)
  - Noise level (icon + description)
  - Study habits (tags)

COMPATIBILITY SECTION:
- "Our Compatibility" header (if logged in)
- Side-by-side comparison:
  - Lifestyle matches (green checkmarks)
  - Differences (neutral indicators)
  - Overall compatibility score

ABOUT SECTION:
- Free-form description/bio
- Interests and hobbies
- Additional details
- "Show more/less" toggle for long content

PHOTOS SECTION (if room listing):
- Room photos gallery
- Apartment common areas
- Building exterior
- Photo carousel with thumbnails

MOBILE LAYOUT:
- Single column, stacked sections
- Sticky profile header with photo/name
- Collapsible sections
- Bottom action bar with primary CTA
- Share profile option

TRUST INDICATORS:
- Verification badges throughout
- University email confirmation
- Student status verification
- Safety/security messaging

ACCESSIBILITY:
- Screen reader friendly structure
- High contrast ratios
- Keyboard navigation
- Alternative text for images
```

#### **Page 10: Own Profile Management**

**User Story**: As any user, I want to easily update my profile to keep it current and attractive.

**Wireframe Generation Prompt**:

```
Create a profile management interface for users to edit their own information.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, tabbed sections
- Desktop: 1440px width, sidebar navigation + content area
- Background: Foundation (#F7F5F2)

DESKTOP LAYOUT:

LEFT SIDEBAR (3/12 columns):
NAVIGATION MENU:
- "Profile Overview" (default selected)
- "Housing Details"
- "Lifestyle Preferences"
- "Photos & Media"
- "Privacy Settings"
- "Account Settings"

Each menu item:
- Clear icon + label
- Active state highlighting
- Completion indicators (checkmarks)

MAIN CONTENT (9/12 columns):

PROFILE OVERVIEW TAB:
HEADER SECTION:
- Current profile photo with upload overlay
- "Change Photo" button
- Photo guidelines (size, format)
- Cropping tool integration

BASIC INFO SECTION:
- Full name (editable)
- University (verified, non-editable)
- Major (editable dropdown)
- Academic year (editable dropdown)
- Bio/About section (text area, character limit)

VERIFICATION STATUS:
- Email verification (green checkmark)
- Student status (verified badge)
- Additional verification options
- Trust score display

HOUSING DETAILS TAB:
DYNAMIC CONTENT based on user type:

FOR SEEKERS:
- Budget preferences (range slider)
- Preferred neighborhoods (multi-select)
- Move-in date (date picker)
- Housing type preferences
- Deal breakers/requirements

FOR PROVIDERS:
- Room details (rent, size, type)
- Available dates
- House rules
- Amenities list
- Address/location
- Room photos management

LIFESTYLE PREFERENCES TAB:
- Same structure as signup flow
- Save changes button
- Preview how preferences appear to others
- Compatibility impact indicators

PHOTOS & MEDIA TAB:
- Profile photo management
- Room photos (for providers)
- Photo guidelines and tips
- Bulk upload/delete options
- Photo ordering (drag & drop)

PRIVACY SETTINGS TAB:
- Profile visibility options
- Contact preferences
- Information sharing settings
- Block user management
- Data download options

MOBILE LAYOUT:
- Tab navigation at top
- Swipe between sections
- Floating save button
- Form optimization for mobile
- Auto-save functionality

FORM PATTERNS:
- Clear save/cancel buttons
- Real-time validation
- Success confirmations
- Draft state indicators
- Change confirmation for critical fields

ACCESSIBILITY:
- Form labeling for screen readers
- Keyboard navigation
- Error message clarity
- Progress indicators
```

### **Flow 4: Advanced Features & Support**

#### **Page 11: Advanced Search & Filters**

**User Story**: As Ben (looking for multiple roommates), I want advanced filtering to find exactly what I need.

**Wireframe Generation Prompt**:

```
Create an advanced search interface with comprehensive filtering options.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, full-screen modal
- Desktop: 1440px width, expandable filter panel
- Background: White with Foundation accent

DESKTOP LAYOUT:

EXPANDED FILTER PANEL (full width):
FILTER CATEGORIES (horizontal tabs):
- "Basic" (budget, location, timing)
- "Lifestyle" (compatibility preferences)
- "Housing" (room type, amenities)
- "Roommates" (group size, demographics)

BASIC FILTERS TAB:
BUDGET SECTION:
- Dual-range slider with live preview
- Currency input fields
- "Include utilities" checkbox
- Preset budget buttons

LOCATION SECTION:
- Interactive NYC map
- Neighborhood selection (checkboxes)
- Distance from universities (radius)
- Transit accessibility options
- "Walking distance to subway" toggle

TIMING SECTION:
- Move-in date range picker
- Lease duration preferences
- Flexibility indicators
- "ASAP" quick option

LIFESTYLE FILTERS TAB:
COMPATIBILITY MATRIX:
- Visual grid of preferences
- Importance weighting (Must have/Nice to have/Deal breaker)
- Compatibility scoring preview
- Custom preference additions

LIFESTYLE DETAILS:
- Study habits (when, where, noise level)
- Social preferences (parties, guests, events)
- Cleanliness standards (detailed breakdown)
- Personal habits (smoking, pets, dietary)

HOUSING FILTERS TAB:
ROOM SPECIFICATIONS:
- Room type (private/shared)
- Furnishing status
- Room size requirements
- Window/natural light preferences

AMENITIES CHECKLIST:
- Building amenities (gym, laundry, doorman)
- Apartment features (dishwasher, AC, balcony)
- Technology (WiFi speed, cable/streaming)
- Safety features (security, lighting)

ROOMMATE FILTERS TAB:
GROUP DYNAMICS:
- Total roommates desired (1-4+)
- Current group size
- Gender preferences (if applicable)
- Age range preferences

ACADEMIC ALIGNMENT:
- University affiliation
- Academic level (undergrad/grad)
- Major/field of study
- Study schedule compatibility

FILTER CONTROLS:
- "Apply Filters" primary button
- "Clear All" secondary button
- "Save Search" option
- Filter count indicator
- Recently used filters

MOBILE OPTIMIZATION:
- Bottom sheet interface
- Swipe between filter categories
- Thumb-friendly controls
- Quick filter presets
- One-handed operation support

SEARCH RESULTS INTEGRATION:
- Real-time result count updates
- Filter application preview
- Suggested filter refinements
- Popular filter combinations
```

#### **Page 12: Settings & Privacy**

**User Story**: As any user, I want control over my privacy and account settings for safety.

**Wireframe Generation Prompt**:

```
Create a comprehensive settings page prioritizing student privacy and safety.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, accordion-style sections
- Desktop: 1440px width, sidebar + content layout
- Background: Foundation (#F7F5F2)

DESKTOP LAYOUT:

SIDEBAR NAVIGATION (3/12):
SETTINGS CATEGORIES:
- "Account & Profile"
- "Privacy & Safety"
- "Notifications"
- "Communication"
- "Data & Security"
- "Help & Support"

Each with appropriate icons and completion indicators.

MAIN CONTENT AREA (9/12):

ACCOUNT & PROFILE SECTION:
BASIC INFORMATION:
- Email address (verified, change option)
- Password change (secure flow)
- Two-factor authentication setup
- Account deactivation option

PROFILE VISIBILITY:
- Public profile settings
- Search visibility toggles
- Information sharing preferences
- Anonymous browsing mode

PRIVACY & SAFETY SECTION:
CONTACT CONTROLS:
- Who can contact me (verified students only/university only)
- Message filtering options
- Block user management
- Report user functionality

INFORMATION SHARING:
- Profile information visibility
- Photo sharing preferences
- University information display
- Last active status

SAFETY FEATURES:
- Safety tips and guidelines
- Reporting suspicious activity
- Emergency contact information
- University safety resources

NOTIFICATIONS SECTION:
NOTIFICATION TYPES:
- New matches/messages
- Profile views
- System updates
- Safety alerts

DELIVERY PREFERENCES:
- Email notifications
- Push notifications (if mobile app)
- SMS notifications (optional)
- Notification frequency

COMMUNICATION SECTION:
MESSAGING PREFERENCES:
- Auto-responses when unavailable
- Message templates
- Communication guidelines
- Language preferences

CONTACT INFORMATION:
- Alternative contact methods
- Emergency contacts
- University housing office contact
- Parent/guardian information (optional)

DATA & SECURITY SECTION:
DATA MANAGEMENT:
- Download my data
- Data retention settings
- Account deletion
- Third-party data sharing

SECURITY MONITORING:
- Active sessions
- Login history
- Security alerts
- Suspicious activity reports

HELP & SUPPORT SECTION:
SUPPORT OPTIONS:
- FAQ and help articles
- Contact support team
- University resources
- Community guidelines

FEEDBACK:
- Submit feedback
- Feature requests
- Bug reports
- User satisfaction survey

MOBILE LAYOUT:
- Collapsible sections
- Search functionality
- Quick settings toggles
- Emergency contact quick access

SECURITY EMPHASIS:
- Clear privacy explanations
- Data protection messaging
- University compliance notes
- Safety-first language throughout
```

#### **Page 13: Help & Support Center**

**User Story**: As Ananya (international student), I need easily accessible help resources for navigating the platform and housing process.

**Wireframe Generation Prompt**:

```
Create a comprehensive help center tailored for university students with housing questions.

SCREEN SPECIFICATIONS:
- Mobile: 375px width, search-first design
- Desktop: 1440px width, three-column layout
- Background: Foundation (#F7F5F2)

DESKTOP LAYOUT:

HEADER SECTION:
- Prominent search bar with smart suggestions
- "How can we help you?" headline
- Quick action buttons: "Contact Support", "Report Issue"

LEFT SIDEBAR (3/12):
HELP CATEGORIES:
- "Getting Started" (verification, setup)
- "Finding Housing" (search, compatibility)
- "Safety & Trust" (verification, reporting)
- "Account Management" (settings, privacy)
- "International Students" (special resources)
- "Landlord Relations" (lease info, rights)
- "Technical Support" (bugs, troubleshooting)

MAIN CONTENT (6/12):
DYNAMIC CONTENT based on selected category:

GETTING STARTED:
- Account verification process
- Profile creation guide
- First search tips
- Platform walkthrough video

FINDING HOUSING:
- Search optimization tips
- Compatibility matching explanation
- Red flags to watch for
- Successful match stories

SAFETY & TRUST:
- Platform safety features
- How verification works
- Reporting procedures
- Meeting safety guidelines

INTERNATIONAL STUDENTS:
- NYC housing laws for students
- Guarantor service information
- Cultural adaptation resources
- Visa and housing considerations
- Emergency contacts and procedures

RIGHT SIDEBAR (3/12):
QUICK HELP:
- Contact support chat
- Popular articles
- Video tutorials
- Community forum link

EMERGENCY RESOURCES:
- University housing offices
- Campus safety numbers
- Mental health resources
- Legal aid contacts

ARTICLE FORMAT:
STRUCTURED HELP ARTICLES:
- Clear step-by-step instructions
- Screenshots and visual guides
- Video tutorials where helpful
- Related articles suggestions
- "Was this helpful?" feedback

SEARCH FUNCTIONALITY:
- Smart search with autocomplete
- Category filtering
- Recent searches
- Popular searches
- No results suggestions

MOBILE OPTIMIZATION:
- Search-prominent design
- Collapsible sections
- thumb-friendly navigation
- Offline article access
- Quick contact options

INTERNATIONAL STUDENT FOCUS:
- Multi-language support indicators
- Cultural context explanations
- NYC-specific guidance
- University partnership information
- Special visa considerations

EMERGENCY ACCESS:
- Prominent emergency contacts
- Crisis support resources
- University counseling services
- Safety reporting mechanisms
```

---

## 📋 Page Implementation Priority

### **Phase 1 MVP (Launch Critical)**

1. Landing Page
2. Sign-Up Page
3. Email Verification Page
4. Login Page
5. Role Selection Page
6. Profile Setup Pages (6A/6B)
7. Lifestyle Preferences Page
8. Dashboard/Search Results
9. User Profile View

### **Phase 1.5 (Post-Launch Immediate)**

10. Own Profile Management
11. Settings & Privacy
12. Help & Support Center

### **Phase 2 (Enhanced Features)**

13. Advanced Search & Filters
14. Messaging Interface
15. Notifications Center

### **Phase 3 (Administrative & Advanced)**

16. University Verification Page
17. Safety/Reporting Interface
18. Admin Dashboard

---

## 🎨 Global Design System Requirements

### **Typography Scale**

- **Display**: Nunito Bold 40px+ (hero headlines)
- **H1**: Nunito Bold 36px (page headers)
- **H2**: Nunito Bold 32px (section headers)
- **H3**: Nunito Bold 24px (subsection headers)
- **H4**: Nunito Bold 18px (card headers)
- **Body Large**: Lora Regular 18px (important body text)
- **Body**: Lora Regular 16px (standard body text)
- **Small**: Lora Regular 14px (helper text, captions)

### **Color Usage Guidelines**

- **Primary Actions**: Hearth (#C86A50)
- **Secondary Elements**: Sage (#A3B1A2)
- **Accent/Success**: Sunlight (#F3DDA4)
- **Text**: Ink (#2E3A4B)
- **Background**: Foundation (#F7F5F2)
- **Error**: Error-Red-500 (#D92D20)
- **Success**: Success-Green-500 (#12B76A)

### **Component Standards**

- **Border Radius**: 4px (inputs), 8px (cards), 16px (buttons)
- **Spacing**: 4px base unit (4, 8, 16, 24, 32, 48px)
- **Touch Targets**: Minimum 44px for mobile
- **Focus States**: 2px Sunlight outline
- **Hover States**: Darken primary colors by 10%

### **Responsive Breakpoints**

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1441px+

---

_Last Updated: December 2024_  
_Next Review: Weekly_  
_Document Owner: Design Team_  
_Version: 1.0.0_
