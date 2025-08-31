# **Kommon MVP: Product Requirements Document**

## **1. Introduction**

### **1.1. Problem**

For students moving to a new city, especially those from out-of-state or abroad, the process of finding off-campus housing is fraught with risk, stress, and inefficiency. Open marketplaces like Craigslist and Facebook are plagued by scams, fake listings, and a lack of trust, making it difficult to vet potential roommates. This "trust deficit" creates significant anxiety for students who are already navigating the pressures of academic life, forcing them to make critical housing decisions based on incomplete and unreliable information.

### **1.2. Vision**

Our vision is to become the definitive trusted housing partner for university communities. We are creating a closed-ecosystem marketplace where every user is verified, transforming safety from a feature into a fundamental promise. By streamlining the search for rooms and compatible roommates, we will reduce housing-related stress and social isolation, helping students build a true sense of home and belonging so they can thrive.

### **1.3. Goals**

- **Business Goal:** Achieve **1,700 total activated users** by the end of the first semester (4 months post-launch) to validate the growth model required to reach profitability by Month 6.
- **User Goal:** Reduce the self-reported time and stress involved in finding a compatible roommate and housing by 50% compared to traditional, open platforms.
- **Product Goal:** Ensure 95% of new users successfully complete the university verification process on their first attempt, minimizing friction for user activation.

## **2. Scope**

### **2.1. In Scope for MVP**

- Mandatory user sign-up and profile creation using a valid university-issued email address (.edu).
- Ability for users to create a profile listing an available room.
- Ability for users to create a "seeker" profile to find a room or roommate.
- Basic user profiles displaying name, university, major, and academic year.
- Profiles will include user-defined lifestyle preferences (e.g., cleanliness, social habits).
- Basic search and filtering functionality based on budget, location, and key lifestyle preferences.

### **2.2. Out of Scope for MVP**

- In-app messaging or chat functionality.
- Direct payment processing for deposits or rent.
- Lease signing or document management features.
- Advanced matching algorithms or recommendation engines.
- Integration with third-party listing services.
- A dedicated mobile application (the MVP will be a responsive web app).
- Landlord or property management accounts.

## **3. Target Audience**

- **Primary Persona: Ananya Sharma (The International Graduate Student)** - A 24-year-old M.S. student at Columbia, newly arrived from India. She is highly vulnerable to scams, has no U.S. credit history, and her primary goal is to find a safe, quiet living situation with a reliable roommate so she can focus on her demanding studies.
- **Primary Persona: Ben Carter (The Out-of-State Undergraduate)** - A 20-year-old NYU undergrad from Florida moving off-campus for the first time. He is navigating intense financial pressure and needs to find multiple roommates to afford rent. He is frustrated by the fragmented, inefficient, and untrustworthy nature of existing platforms.
- **Secondary Persona: Chloe Davis (The Current NYC Student)** - A 21-year-old Fordham senior who needs to find a trustworthy third roommate to join her and her friend in their first off-campus apartment. Her main anxiety is the risk of living with an incompatible or unreliable stranger.

## **4. Core Features: User Stories & Acceptance Criteria**

### **Feature 1: University-Verified User Profiles**

**Overview:** This is the foundational feature of Kommon, creating the closed, trusted ecosystem that is our core differentiator. By requiring all users to verify their student status via a university email, we eliminate the risk of anonymous scams and build a community of trusted peers. This directly addresses the "glaring trust deficit" that causes anxiety for all our user personas.

**User Stories:**

- **User Story 1.1:** As **Ananya**, the international student, I want to sign up using my university email address so that I can be certain that everyone else on the platform is a real, verified student from a known university, which makes me feel safe from scams.
- **Acceptance Criteria:**
- **Given** I am on the Kommon sign-up page,
- **When** I enter my name, university email (e.g., as1234@columbia.edu), and a password,
- **Then** I should see a message informing me that a verification email has been sent to my university address.
- **Given** I have received the verification email,
- **When** I click the verification link within the email,
- **Then** I am redirected to the Kommon site, my account is activated, and I am prompted to complete my profile.
- **Given** I try to sign up with a non-university email (e.g., @gmail.com),
- **When** I click the "Sign Up" button,
- **Then** I should see an inline error message stating, "Please use a valid university email address."
- **Given** the verification link has expired,
- **When** I click the link,
- **Then** I am taken to a page that says the link has expired and provides an option to resend the verification email.
- **User Story 1.2:** As **Chloe**, who is looking for a trustworthy roommate, I want to view another user's profile and see their verified university, major, and academic year so that I have a baseline of trust and context before initiating contact.
- **Acceptance Criteria:**
- **Given** I am a logged-in, verified user,
- **When** I navigate to another user's profile page,
- **Then** I must see a "Verified Student" badge or indicator.
- **And** I must see the user's full name, university name, declared major, and academic year (e.g., "4th Year Undergraduate").
- **Given** I am viewing a profile,
- **When** I look for their email address,
- **Then** the user's email address should not be visible to protect their privacy.

### **Feature 2: A Unified Listing System for Rooms and Roommates**

**Overview:** This feature provides the core marketplace utility. It consolidates the currently fragmented process of finding a space and finding a person into a single, streamlined platform. This allows users to clearly signal whether they are offering a room or seeking one, addressing the primary goals of all our personas.

**User Stories:**

- **User Story 2.1:** As **Chloe**, who has an apartment with a friend but needs a third roommate, I want to create a listing for an available room, specifying details like rent, location, and move-in date, so that I can attract potential roommates.
- **Acceptance Criteria:**
- **Given** I am a logged-in, verified user,
- **When** I navigate to "Create a Listing" and select "I have a room,"
- **Then** I am presented with a form containing mandatory fields for: Rent ($), Location (Address/Neighborhood), Move-in Date, and a description.
- **Given** I am filling out the form,
- **When** I enter a non-numeric value for "Rent",
- **Then** I see an inline error message: "Please enter a valid number."
- **Given** I complete all mandatory fields,
- **When** I click "Publish Listing,"
- **Then** my listing becomes publicly visible to other verified users on the platform.
- **User Story 2.2:** As **Ben**, an out-of-state student who needs to find both an apartment and roommates, I want to create a "seeker" profile detailing my budget and preferred neighborhoods so that users with available rooms can find me.
- **Acceptance Criteria:**
- **Given** I am a logged-in, verified user,
- **When** I navigate to my profile and select "I need a room,"
- **Then** I am presented with a form to specify my maximum budget, preferred neighborhoods (multi-select), and desired move-in date.
- **Given** I have completed my seeker profile,
- **When** another user views my main profile page,
- **Then** they should see a clear section summarizing what I am looking for (e.g., "Seeking a room in Greenwich Village for under $1500/month").

### **Feature 3: Basic Compatibility Matching and Filtering**

**Overview:** This feature moves Kommon beyond a simple listing board by directly addressing the "pervasive risk of incompatible roommates." By allowing users to define and filter by core lifestyle preferences, we help them find a living situation that meets their social and academic needs, which is a key anxiety for Ananya, Ben, and Chloe.

**User Stories:**

- **User Story 3.1:** As **Ananya**, who needs a quiet and studious environment, I want to add my lifestyle preferences to my profile, such as "Quiet," "Clean," and "Low social activity," so that I can accurately represent myself to potential roommates.
- **Acceptance Criteria:**
- **Given** I am editing my user profile,
- **When** I navigate to the "Lifestyle" section,
- **Then** I see a set of multiple-choice questions for categories like: Cleanliness (e.g., "Very Tidy," "Moderately Clean," "Relaxed"), Social Habits (e.g., "Host guests often," "Occasional guests," "Rarely have guests"), and Noise Level (e.g., "Often noisy," "Sometimes noisy," "Mostly quiet").
- **Given** I have made my selections,
- **When** I save my profile,
- **Then** my chosen lifestyle preferences are displayed clearly on my public profile page.
- **User Story 3.2:** As **Ben**, who wants roommates who are social but also clean, I want to filter my search results for roommates based on their lifestyle preferences so that I can quickly find people who are a good potential match.
- **Acceptance Criteria:**
- **Given** I am on the main search page,
- **When** I look at the filter options,
- **Then** I see a "Lifestyle" filter section with the same options available in the user profile (Cleanliness, Social Habits, etc.).
- **Given** I apply a filter for "Moderately Clean" and "Occasional guests,"
- **When** the search results load,
- **Then** I only see listings or seeker profiles from users who have selected those specific preferences.
- **Given** I apply a filter that results in zero matches,
- **When** the search results load,
- **Then** I see a clear message stating, "No results found. Try broadening your search criteria."

## **5. Success Metrics**

The success of the MVP will be measured against these core business and product metrics, which are derived from our financial model.

| **Metric Category** | **Key Performance Indicator (KPI)** | **Target for MVP (First 4 Months)** | **Rationale** |
| --- | --- | --- | --- |
| **User Growth** | Total Activated Users | 1,700 | Tracks progress towards the user base needed for break-even in Month 6. |
| **Revenue Driver** | Lease Conversion Rate (% of new users leading to a lease) | ≥ 15% | Validates the core assumption in our financial model for transactional revenue. |
| **Product Health** | Verification Completion Rate | > 95% | Measures the effectiveness of our core onboarding and trust-building feature. |
| **Marketplace Health** | Listing-to-Seeker Ratio | Maintain ≥ 1:1 | Ensures a balanced marketplace where supply can meet demand. |
| **User Satisfaction** | Net Promoter Score (NPS) | > 20 | Measures overall user satisfaction and likelihood to recommend. |

## **6. Future Considerations & Roadmap**

The following features are being considered for development post-MVP and are prioritized based on their potential to deepen user trust and expand marketplace functionality.

| **Priority** | **Feature** | **User Problem / Rationale** |
| --- | --- | --- |
| **P0** | **In-App Messaging** | Provides a secure, contained communication channel, preventing users from having to share personal contact info too early. |
| **P1** | **Advanced Profile Options** | Add more detailed preference fields (e.g., major-specific study habits, dietary preferences, morning person/night owl). |
| **P1** | **Guarantor Service Partnership** | Directly addresses a major pain point for international students like Ananya by offering a trusted, integrated solution. |
| **P2** | **Interactive Map Search** | A more visual and intuitive way for users like Ben to explore listings by neighborhood. |
| **P2** | **Secure Deposit Handling** | Solves a major source of fraud and anxiety by having Kommon act as a trusted escrow agent for security deposits. |