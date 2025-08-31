### **Kommon MVP: Complete UI Specification**

This document provides a comprehensive, text-based description of the User Interface for the Kommon MVP. It is designed to provide the development team with all necessary details to build the front-end, based on the approved Brand Guidelines, Product Requirements Document (PRD), and User Journey Maps.

**General UI Principles:**

- **Grid System:** A 12-column responsive grid with 16px gutters will be used for all layouts.
- **Spacing System:** A 4px base unit will be used for margins, padding, and positioning (e.g., 4px, 8px, 16px, 24px, 32px, 48px).
- **Error/Success Colors:** For validation states, Error-Red-500 (defined as #D92D20) and Success-Green-500 (defined as #12B76A) will be used.

### **User Flow 1: User Onboarding & Verification**

This flow covers the initial user action of creating a university-verified account.

### **Screen 1.1: Sign-Up Page**

- **Screen Name & Purpose:** Screen: User Sign-Up. To allow a new user to create a Kommon account using their university-issued email address.
- **Layout & Structure:**
- Content is in a centered, 6-column container on desktop.
- No header or footer to minimize distraction.
- **Component Placement:** Kommon logo at the top, followed by a headline, sub-headline, and the sign-up form (3 input fields, 1 button). A text link to the Login page is at the bottom.
- **Visual Design & Components:**
- **Background Color:** Foundation (#F7F5F2).
- **Logo:** "Community Threshold" symbol in Ink (#2E3A4B).
- **Headline:** "Welcome Home." (Nunito, Bold, 36px, Ink).
- **Sub-headline:** "Create your account to find your community." (Lora, Regular, 18px, Ink).
- **Form Input Fields (Full Name, University Email, Password):** White background, 1px Sage (#A3B1A2) border, 4px border-radius. Labels use Nunito, Bold, 14px. Input text uses Lora, Regular, 16px.
- **Primary Button:** "Create Account". Background Hearth (#C86A50), text Foundation (#F7F5F2). Nunito, Bold, 16px.
- **Text Link:** "Already have an account? **Log in**". Lora, Regular, 14px.

### **Screen 1.2: Verification Required**

- **Screen Name & Purpose:** Screen: Verification Required. To inform the user to check their email to verify their account.
- **Layout & Structure:**
- Centered, 6-column container.
- **Component Placement:** A large icon at the top, followed by a headline, body text, and a resend link.
- **Visual Design & Components:**
- **Background Color:** Foundation (#F7F5F2).
- **Icon:** icon-email-sent (64x64px) in Sage (#A3B1A2).
- **Headline:** "Check Your Inbox" (Nunito, Bold, 36px, Ink).
- **Body Text:** "We've sent a verification link to the university email you provided..." (Lora, Regular, 18px, Ink, center-aligned).
- **Text Link:** "Didn't receive an email? **Resend link**". Lora, Regular, 14px.

### **User Flow 2: Profile Creation & Setup**

This flow begins after a user has successfully verified their email and logs in for the first time.

### **Screen 2.1: Welcome & Role Selection**

- **Screen Name & Purpose:** Screen: Role Selection. To direct the user down the correct profile setup path based on their primary goal.
- **Layout & Structure:**
- Centered, 8-column container with a clear, simple choice.
- **Component Placement:** Headline at the top. Below, two large, clickable card-style options are placed side-by-side.
- **Visual Design & Components:**
- **Background Color:** Foundation (#F7F5F2).
- **Headline:** "What brings you to Kommon?" (Nunito, Bold, 36px, Ink).
- **Selection Cards (2):**
- **Content:** Each card has a large icon, a title, and a short description.
- **Card 1 Title:** "I need a room" (for seekers like Ananya/Ben). Icon: icon-search-home.
- **Card 2 Title:** "I have a room" (for listers like Chloe). Icon: icon-add-home.
- **Visuals:** White background, 1px solid Sage (#A3B1A2) border, 8px border-radius. On hover, the border changes to Hearth (#C86A50).

### **Screen 2.2: Seeker Profile Setup**

- **Screen Name & Purpose:** Screen: Seeker Profile. For users who "need a room" to input their housing requirements (PRD User Story 2.2).
- **Layout & Structure:**
- A multi-step form contained within a centered 6-column container. A progress indicator is at the top.
- **Component Placement:** Headline, followed by form fields for "Maximum Budget," "Preferred Neighborhoods," and "Desired Move-in Date."
- **Visual Design & Components:**
- **Headline:** "Tell us what you're looking for." (Nunito, Bold, 32px, Ink).
- **Input Field (Budget):** A standard text input (input-text-default) prefixed with a "$" symbol.
- **Input Field (Neighborhoods):** A multi-select dropdown or tag-based input field allowing users to choose multiple NYC neighborhoods.
- **Input Field (Move-in Date):** A date picker component.
- **Buttons:** A "Next" button (button-primary) and a "Skip for now" link (link-secondary).

### **Screen 2.3: Lifestyle Preferences Setup**

- **Screen Name & Purpose:** Screen: Lifestyle Preferences. For all users to define their living habits to enable compatibility matching (PRD User Story 3.1).
- **Layout & Structure:**
- The final step of the initial setup form.
- **Component Placement:** Headline, followed by three sections, each with a question and a set of radio button choices.
- **Visual Design & Components:**
- **Headline:** "How do you like to live?" (Nunito, Bold, 32px, Ink).
- **Question Sections (3):**
- **Cleanliness:** "Very Tidy," "Moderately Clean," "Relaxed."
- **Social Habits:** "Host guests often," "Occasional guests," "Rarely have guests."
- **Noise Level:** "Often noisy," "Sometimes noisy," "Mostly quiet."
- **Component:** input-radio-group for each question.
- **Button:** A "Complete Profile" button (button-primary).

### **User Flow 3: Search, Filter & View Profiles**

This flow covers the core marketplace experience of finding rooms or roommates.

### **Screen 3.1: Main Dashboard / Search Results**

- **Screen Name & Purpose:** Screen: Dashboard. The main hub where users can search, filter, and browse listings or seeker profiles.
- **Layout & Structure:**
- **Desktop:** A 3-column layout. Left column (3 of 12) is for Filters. Right column (9 of 12) is for Search Results.
- **Mobile:** Filters are accessible via a button that reveals a slide-in panel. Results are in a single-column list.
- **Header:** A persistent header contains the Kommon logo, a search bar, and a user profile avatar with a dropdown menu.
- **Visual Design & Components:**
- **Filter Panel:**
- **Sections:** "Budget," "Location," and "Lifestyle."
- **Lifestyle Filters:** Checkbox groups for Cleanliness, Social Habits, and Noise Level, matching the options from profile setup (PRD User Story 3.2).
- **Search Results Area:**
- **Headline:** Shows the result count, e.g., "Showing 24 results".
- **Result Cards (card-user-listing):** Each card represents a user or a listing.
- **Content:** User's profile picture, Full Name, University & Year (e.g., "NYU, 3rd Year Undergraduate"). A "Verified Student" badge is prominently displayed. Shows key info like budget ("Seeking under $1500/month") and top 2-3 lifestyle tags (e.g., "Quiet," "Very Tidy").
- **Visuals:** White background, 1px Sage border, 8px border-radius. On hover, a subtle box-shadow appears.

### **Screen 3.2: User Profile Page**

- **Screen Name & Purpose:** Screen: User Profile. To display the detailed information of another user, establishing trust and context (PRD User Story 1.2).
- **Layout & Structure:**
- A two-column layout within a centered 10-column container.
- **Left Column (4 of 10):** User's profile picture, name, and key verification details.
- **Right Column (6 of 10):** Detailed information sections.
- **Visual Design & Components:**
- **Left Column:**
- Large (120x120px) circular profile picture.
- **User Name:** Nunito, Bold, 24px.
- **Verified Badge:** An icon (icon-verified-shield) next to the text "Verified Student" in Success-Green-500.
- **Details List:** "University: Columbia University", "Major: M.S. in Computer Science", "Year: 1st Year Graduate Student". (Lora, Regular, 16px).
- **Right Column:**
- **"Looking For" Section:** Clearly states their housing need (e.g., "Seeking a room in Greenwich Village for under $1500/month").
- **"Lifestyle" Section:** Displays all their selected lifestyle preferences with descriptive labels.
- **Email address is NOT visible.**

### **Deliverable 2 & 3: Interactive States & Component Library**

This is a consolidated library of all components used across the flows.

### **Component: button-primary**

- **Description:** For the single most important call to action on a screen.
- **Properties:** BG: Hearth (#C86A50), Text: Foundation (#F7F5F2), Font: Nunito Bold 16px.
- **States:**
- **Hover:** BG darkens to #B55F46.
- **Active:** BG darkens to #A2543D.
- **Focus:** 2px solid Sunlight (#F3DDA4) outline.
- **Disabled:** BG Sage at 30% opacity, text Sage.

### **Component: input-text-default**

- **Description:** Standard text input for forms.
- **Properties:** BG: White, Border: 1px solid Sage (#A3B1A2), Font: Lora Regular 16px.
- **States:**
- **Hover:** Border color darkens.
- **Focus:** Border becomes 2px solid Hearth (#C86A50).
- **Error:** Border becomes 2px solid Error-Red-500. Error message appears below.

### **Component: input-radio-group**

- **Description:** Used for single-choice selections, like in Lifestyle Preferences.
- **Properties:** A group of radio inputs, each with a label. The radio circle is 20x20px with a 1px Sage border.
- **States:**
- **Default:** Unselected circle is empty.
- **Hover:** Circle border changes to Hearth (#C86A50).
- **Selected:** A 10x10px Hearth (#C86A50) circle appears inside.
- **Focus:** A 2px Sunlight (#F3DDA4) outline appears around the radio circle and its label.

### **Component: card-user-listing**

- **Description:** A card used in search results to summarize a user or room listing.
- **Properties:** BG: White, Padding: 16px, Border: 1px solid Sage (#A3B1A2), Border-Radius: 8px.
- **States:**
- **Hover:** A medium box-shadow appears, and the card lifts slightly.
- **Active/Pressed:** The card scales down slightly (0.98 scale).

### **Component: badge-verified**

- **Description:** A visual indicator to show a user's student status has been verified.
- **Properties:** Contains an icon (icon-verified-shield) and text.
- **Visuals:** Icon and text color are Success-Green-500. Font: Nunito, Bold, 14px.