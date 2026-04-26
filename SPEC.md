# Serenity Wellness Center - Website Specification

## Project Overview
- **Project name**: Serenity Wellness Center Website
- **Type**: Multi-page static website
- **Core functionality**: A professional wellness center website showcasing services, about info, and contact form
- **Target users**: Potential clients seeking wellness, massage, and holistic health services

## UI/UX Specification

### Layout Structure
- **Header**: Fixed navigation bar with logo and menu links
- **Hero Section**: Full-width banner with welcome message and CTA
- **Content Sections**: Centered container with max-width 1200px
- **Footer**: Dark footer with contact info and social links

### Responsive Breakpoints
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (two columns)
- Desktop: > 1024px (full layout)

### Visual Design

#### Color Palette
- Primary: `#2D5A4A` (deep forest green)
- Secondary: `#F5F0E8` (warm cream)
- Accent: `#D4A574` (warm terracotta)
- Text Dark: `#1A1A1A`
- Text Light: `#FFFFFF`
- Background: `#FEFDFB`

#### Typography
- Headings: "Playfair Display", serif (elegant, sophisticated)
- Body: "Source Sans 3", sans-serif (clean, readable)
- Font sizes: H1: 3rem, H2: 2.25rem, H3: 1.5rem, Body: 1rem

#### Spacing
- Section padding: 80px vertical, 20px horizontal
- Container max-width: 1200px
- Card padding: 32px

#### Visual Effects
- Box shadows: `0 4px 20px rgba(0,0,0,0.08)`
- Hover transitions: 0.3s ease
- Button hover: scale(1.02) with color shift

### Components

#### Navigation
- Logo on left, menu links on right
- Mobile: hamburger icon that toggles menu
- Active page indicator
- Hover: underline animation

#### Hero Section
- Full viewport height on home page
- Background with subtle pattern overlay
- Centered text with headline and subtext
- CTA button

#### Service Cards
- Icon/image at top
- Title, description
- Hover: lift effect with shadow

#### Contact Form
- Name, email, message fields
- Real-time validation with visual feedback
- Submit button with loading state
- Success/error message display

#### Footer
- Three columns: About, Quick Links, Contact
- Social media icons
- Copyright text

## Functionality Specification

### Core Features
1. **Navigation**: Smooth page transitions, mobile menu toggle
2. **Home Page**: Hero section, featured services preview, testimonials
3. **About Page**: Organization history, team section, values
4. **Services Page**: Full service listings with descriptions and pricing
5. **Contact Page**: Functional form with client-side validation

### User Interactions
- Menu toggle on mobile
- Form field focus states
- Button hover effects
- Card hover animations
- Smooth scroll to sections

### Form Validation (JavaScript)
- Name: required, min 2 characters
- Email: required, valid email format
- Message: required, min 10 characters
- Real-time validation feedback
- Submit prevention if invalid

## Acceptance Criteria
1. All four pages load without errors
2. Navigation works between all pages
3. Mobile menu functions correctly
4. Form validates all fields correctly
5. All hover effects work smoothly
6. Site is responsive at all breakpoints
7. Colors and typography match spec exactly
