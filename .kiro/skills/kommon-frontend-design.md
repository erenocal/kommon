---
name: kommon-frontend-design
description: Create distinctive, production-grade frontend interfaces for Kommon student housing platform with high design quality. Use when building web components, pages, or applications that need to embody Kommon's warm, trustworthy, community-focused aesthetic.
license: MIT
---

# Kommon Frontend Design Skill

This skill guides creation of distinctive, production-grade frontend interfaces for Kommon that embody our mission: helping students create a new home in their new environment and alleviate acculturation stress.

## Core Mission & Context

**What We Build**: University-verified student housing platform (NYC focus)
**Who We Serve**: International grad students, out-of-state undergrads, local students seeking roommates
**What Makes Us Different**: Mandatory .edu verification creates a trusted, closed-ecosystem marketplace that eliminates scams

## Design Philosophy: The Relational Architecture

Every interface should feel like:
- **A Warm Welcome**: Like stepping into a safe, inviting home
- **Structural Safety**: Systems that visibly create trust (not just promise it)
- **Community Kinship**: Facilitating relationships, not transactions
- **Empowered Journeys**: Supporting students to confidently navigate their own path

## Brand Identity Foundation

### Color Palette (Kommon's Emotional Language)

**Primary Colors (Warm & Welcoming)**:
- **Hearth (Terracotta)**: `#C86A50` - Primary CTAs, trust indicators, warmth
- **Sage (Green)**: `#A3B1A2` - Borders, secondary elements, calm
- **Sunlight (Yellow)**: `#F3DDA4` - Focus states, highlights, optimism

**Secondary Colors (Grounded & Stable)**:
- **Ink (Dark Blue)**: `#2E3A4B` - Body text, headers, authority
- **Foundation (Off-White)**: `#F7F5F2` - Backgrounds, breathing room

**Semantic Colors**:
- **Error Red**: `#D92D20` - Validation errors, warnings
- **Success Green**: `#12B76A` - Verified badges, success states

### Typography (Voice in Visual Form)

**Headlines (Nunito Bold)**: Rounded, friendly sans-serif
- Hero: 40px (mobile: 36px)
- H1: 36px (mobile: 32px)
- H2: 32px (mobile: 24px)
- H3: 24px (mobile: 20px)
- H4: 18px (mobile: 16px)

**Body (Lora Regular)**: Elegant, readable serif
- Large: 18px (emphasis, intros)
- Regular: 16px (standard body)
- Small: 14px (captions, metadata)

**Usage**: Nunito for attention-grabbing, action-oriented text. Lora for readable, trustworthy, longer-form content.

### The Community Threshold Symbol

**Concept**: Welcoming entrance to a safe space where diverse community belongs together
**Description**: Abstract threshold shape with organic line cradling three overlapping shapes (like shoes at the door)
**Usage**: Monochromatic, solid color from palette, cohesive unit, symbolic power

## Design System Specifications

### Spacing (4px Base Unit)
- xs: 4px (tight spacing)
- sm: 8px (compact elements)
- md: 16px (standard spacing)
- lg: 24px (section spacing)
- xl: 32px (major sections)
- 2xl: 48px (hero sections)

### Border Radius (Organic Warmth)
- Inputs: 4px (subtle)
- Cards: 8px (friendly)
- Buttons: 16px (inviting, pill-like)

### Interactive States
- **Focus**: 2px Sunlight (`#F3DDA4`) outline, visible and warm
- **Hover**: Darken 10% (Hearth `#C86A50` → `#B55F46`)
- **Active**: Scale 0.98, slight press effect
- **Disabled**: 40% opacity, cursor not-allowed

### Touch Targets (Mobile-First)
- Minimum: 44px × 44px
- Recommended: 48px × 48px
- Critical actions: 56px × 56px

### Responsive Breakpoints
- Mobile: 375-767px (primary focus)
- Tablet: 768-1023px
- Desktop: 1024-1440px
- Large: 1441px+

### Grid System
- 12-column layout
- 16px gutters
- 1440px max width
- Fluid scaling between breakpoints

## Component Patterns (shadcn/ui + Kommon Brand)

### Buttons

**Primary (Call to Action)**:
```tsx
className="bg-hearth hover:bg-[#B55F46] text-foundation font-nunito font-bold px-6 py-3 rounded-2xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sunlight focus:ring-offset-2"
```

**Secondary (Supporting Action)**:
```tsx
className="bg-sage hover:bg-[#92A091] text-ink font-nunito font-bold px-6 py-3 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sunlight focus:ring-offset-2"
```

**Outline (Tertiary)**:
```tsx
className="border-2 border-hearth text-hearth hover:bg-hearth hover:text-foundation font-nunito font-bold px-6 py-3 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sunlight focus:ring-offset-2"
```

### Input Fields

**Text Input**:
```tsx
className="w-full bg-white border border-sage rounded px-4 py-3 font-lora text-ink placeholder:text-ink/50 focus:border-2 focus:border-hearth focus:outline-none transition-colors"
```

**With Label**:
```tsx
<label className="block text-sm font-nunito font-bold text-ink mb-2">
  University Email
</label>
<input className="..." />
```

### Cards

**Standard Card**:
```tsx
className="bg-white border border-sage rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
```

**Profile Card**:
```tsx
className="bg-white border border-sage rounded-lg p-6 hover:shadow-lg hover:border-hearth transition-all duration-200"
```

### Badges & Trust Indicators

**Verified Student Badge**:
```tsx
<div className="inline-flex items-center gap-1.5 text-success font-nunito font-bold text-sm">
  <ShieldCheckIcon className="w-4 h-4" aria-hidden="true" />
  <span>Verified Student</span>
</div>
```

**University Badge**:
```tsx
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sage/20 rounded-full">
  <span className="font-nunito text-sm text-ink">Columbia University</span>
</div>
```

### Icons (Lucide React)
- Small: 16px (inline with text)
- Medium: 20px (buttons, inputs)
- Large: 24px (section headers)
- Hero: 64px (feature highlights)
- Always include `aria-label` for icon-only buttons
- Use `aria-hidden="true"` for decorative icons

### Images

**Profile Photos**:
- Cards: 80×80px, circular
- Profiles: 120×120px, circular
- Border: 2px solid Sage

**Room Photos**:
- Aspect ratio: 16:9
- Format: WebP with JPEG fallback
- Lazy loading: enabled
- Alt text: descriptive, specific

## Accessibility Requirements (WCAG 2.1 AA)

### Contrast Ratios
- Normal text (16px): 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: 3:1 minimum

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators (Sunlight outline)
- Logical tab order
- Skip links for main content

### Screen Reader Support
- Semantic HTML (nav, main, section, article)
- ARIA labels for icon buttons
- ARIA live regions for dynamic content
- Alt text for all meaningful images

### Touch Targets
- Minimum: 44×44px
- Spacing: 8px between targets
- Visual feedback on touch

## Animation & Motion Principles

### Micro-Interactions (Delight in Details)
- Button hover: scale(1.05), 200ms ease
- Card hover: shadow expansion, 200ms ease
- Input focus: border color transition, 150ms ease
- Page transitions: fade + slide up, 300ms ease-out

### Staggered Reveals (Orchestrated Welcome)
```css
.stagger-item:nth-child(1) { animation-delay: 0ms; }
.stagger-item:nth-child(2) { animation-delay: 100ms; }
.stagger-item:nth-child(3) { animation-delay: 200ms; }
```

### Scroll Animations (Progressive Disclosure)
- Fade in on scroll: opacity 0 → 1
- Slide up on scroll: translateY(20px) → 0
- Use `intersection-observer` for performance

### Loading States
- Skeleton screens (not spinners) for content
- Pulse animation for loading cards
- Progress indicators for multi-step forms

## Layout Patterns

### Hero Section (Landing Page)
- Full viewport height on desktop
- Centered content with max-width 1440px
- Background: Foundation with subtle texture
- CTA buttons: Hearth primary + Sage secondary
- Hero image: 16:9, right-aligned on desktop

### Profile Grid (Search Results)
- 1 column mobile, 2 tablet, 3 desktop
- 16px gap between cards
- Infinite scroll or pagination
- Filter sidebar: collapsible on mobile

### Form Layouts (Onboarding)
- Single column, max-width 600px
- Progress indicator at top
- Grouped fields with clear labels
- Primary CTA: full-width on mobile

### Navigation
- Sticky header: 64px height
- Logo + wordmark left-aligned
- Primary nav: right-aligned desktop, hamburger mobile
- User profile: circular avatar, dropdown menu

## Voice & Tone in UI Copy

### Messaging Principles
- **Warm & Human**: "Welcome home" not "Login successful"
- **Clear & Deliberate**: Explain safety systems explicitly
- **Empowering**: "You're in control" not "We control"
- **Community-Focused**: "We," "us," "together" language

### Microcopy Examples
- Button: "Find Your Community" (not "Search")
- Empty state: "Your journey starts here" (not "No results")
- Error: "Let's try that again" (not "Invalid input")
- Success: "You're all set!" (not "Operation completed")

### Tone Variations
- **Onboarding**: Warm, welcoming, encouraging
- **Verification**: Clear, authoritative, reassuring
- **Errors**: Helpful, empathetic, solution-oriented
- **Success**: Celebratory, affirming, forward-looking

## Anti-Patterns (Never Do This)

### Visual Anti-Patterns
- ❌ Generic fonts (Inter, Roboto, Arial, system fonts)
- ❌ Purple gradients on white (AI slop aesthetic)
- ❌ Overly corporate, cold, transactional feel
- ❌ Cluttered layouts without breathing room
- ❌ Inconsistent spacing or color usage

### UX Anti-Patterns
- ❌ Hidden email addresses without explanation
- ❌ Verification process without clear steps
- ❌ Forms without validation feedback
- ❌ CTAs without clear outcomes
- ❌ Mobile-unfriendly touch targets

### Content Anti-Patterns
- ❌ Corporate jargon ("leverage," "synergy")
- ❌ Cold, transactional language
- ❌ Vague trust claims without proof
- ❌ Overwhelming technical details
- ❌ Ignoring international student context

## Implementation Checklist

Before considering any component complete:

- [ ] Uses Kommon color palette (Hearth, Sage, Sunlight, Ink, Foundation)
- [ ] Typography: Nunito for headlines, Lora for body
- [ ] Spacing follows 4px base unit system
- [ ] Border radius: 4px inputs, 8px cards, 16px buttons
- [ ] Touch targets: minimum 44×44px
- [ ] Focus states: 2px Sunlight outline visible
- [ ] Hover states: smooth transitions, visual feedback
- [ ] Responsive: mobile-first, works 375px-1440px+
- [ ] Accessible: WCAG 2.1 AA compliant
- [ ] Semantic HTML with proper ARIA labels
- [ ] Loading states and error handling
- [ ] Microcopy is warm, clear, empowering
- [ ] Animations enhance (not distract)
- [ ] Images: WebP format, lazy loading, alt text
- [ ] Performance: <2s load time target

## Context-Specific Design Guidance

### Landing Page
**Tone**: Warm welcome, structural safety, community kinship
**Key Elements**: Hero with trust indicators, how it works, testimonials, university partners
**CTA Hierarchy**: Primary "Get Started" (Hearth), Secondary "Learn More" (Sage)

### Authentication Flow
**Tone**: Clear, authoritative, reassuring
**Key Elements**: .edu verification, progress indicator, security badges
**Trust Signals**: Lock icons, "Verified Student" badges, university logos

### Profile Creation
**Tone**: Empowering, supportive, encouraging
**Key Elements**: Role selection (need/have room), lifestyle preferences, photo upload
**Guidance**: Inline help text, examples, optional fields clearly marked

### Search & Discovery
**Tone**: Efficient, helpful, community-focused
**Key Elements**: Filters, compatibility indicators, verified badges
**Layout**: Grid view, filter sidebar, sort options

### Messaging (Future)
**Tone**: Safe, respectful, community-oriented
**Key Elements**: Verified user indicators, report/block, community guidelines
**Safety**: Clear moderation, privacy controls

## Technical Implementation Notes

### Stack Integration
- **Framework**: Next.js 14 (App Router)
- **Components**: shadcn/ui with Kommon customization
- **Styling**: Tailwind CSS with Kommon theme
- **Icons**: Lucide React
- **Fonts**: Nunito (Google Fonts), Lora (Google Fonts)
- **Images**: Next.js Image component with WebP

### CSS Variables (globals.css)
```css
:root {
  --hearth: #C86A50;
  --sage: #A3B1A2;
  --sunlight: #F3DDA4;
  --ink: #2E3A4B;
  --foundation: #F7F5F2;
  --error-red: #D92D20;
  --success-green: #12B76A;
}
```

### Tailwind Config Extensions
```js
colors: {
  hearth: 'var(--hearth)',
  sage: 'var(--sage)',
  sunlight: 'var(--sunlight)',
  ink: 'var(--ink)',
  foundation: 'var(--foundation)',
}
```

## Remember

You are building more than a housing platform. You are creating **The Architecture of Belonging** - a digital home where students feel safe, welcomed, and empowered to build their new community.

Every pixel, every word, every interaction should embody our core values: **Reciprocity, Trust, and Care**.

Make it warm. Make it trustworthy. Make it unmistakably Kommon.
