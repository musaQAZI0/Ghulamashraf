# GhulamAshraf.com — Design & Frontend Requirements

## Project Direction

The new website should feel **modern, premium, aesthetic, editorial, professional, and highly polished**.

It should not look like a generic WordPress/news template. The visual identity should represent a **writer, academic, professional, and public intellectual**.

## Core Frontend Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Custom CSS**
- **Motion for React**
- **Responsive design**
- **Reusable UI components**

Recommended project command:

```bash
npx create-next-app@latest ghulamashraf-website --typescript --tailwind --eslint --app --turbopack --import-alias "@/*"
```

After project creation:

```bash
cd ghulamashraf-website
npm install motion
```

## Design Style

The website should use:

- Large, elegant typography
- Premium serif + modern sans-serif font pairing
- Spacious layouts
- Strong visual hierarchy
- Clean grid system
- Elegant article cards
- High-quality image presentation
- Subtle gradients where appropriate
- Glass / translucent effects only where they improve the design
- Soft shadows
- Refined borders
- Smooth rounded corners
- Premium hover states
- Minimal but expressive color palette
- Strong desktop and mobile experience

The website must feel **custom-built**, not template-based.

## Animation Requirements

### Hero Animations

- Animated text reveal
- Subtle entrance animations
- Image reveal
- Slow parallax movement
- Floating decorative elements
- Smooth CTA entrance

### Scroll Animations

- Fade-up sections
- Staggered card reveals
- Scroll-triggered text animation
- Parallax image movement
- Timeline animations
- Section transition effects
- Animated counters if needed

### Hover Interactions

- Image zoom
- Card lift
- Animated underline
- Button movement
- Arrow movement
- Smooth border transitions
- Soft shadow changes
- Interactive article cards

### Navigation

- Smooth sticky navbar
- Scroll-aware navbar behavior
- Animated dropdowns
- Mobile menu transition
- Active link state
- Smooth menu opening/closing

### Page Transitions

- Smooth entry transition
- Content fade/reveal
- Avoid excessive or distracting transitions

## Animation Philosophy

Animations should feel:

- Smooth
- Expensive
- Subtle
- Professional
- Purposeful

Avoid:

- Excessive bouncing
- Constant movement
- Distracting animations
- Gaming-style effects
- Overuse of gradients
- Heavy animations that reduce performance

The final experience should feel premium without becoming flashy.

## CSS Requirements

Do **not** rely only on Tailwind classes.

Use:

- Tailwind CSS for utility styling
- `globals.css`
- CSS variables
- CSS Modules where useful
- Custom animation classes
- Custom typography rules
- Custom gradient/effect classes
- Responsive CSS
- Reduced-motion support

Recommended structure:

```text
app/
├── globals.css
├── page.tsx
├── about/
├── articles/
├── education/
├── politics/
├── technology/
├── islam/
├── media/
├── travel/
├── general/
├── contact/
└── admin/

components/
├── layout/
├── sections/
├── ui/
├── cards/
├── typography/
└── animations/

styles/
├── animations.css
├── typography.css
├── effects.css
└── utilities.css
```

## Homepage Structure

### 1. Premium Navbar

Include:

- Logo / name
- Home
- About
- Articles
- Media
- Travel
- Contact

Articles dropdown:

- Education
- Politics
- Technology
- Islam
- General
- All Articles

### 2. Hero Section

Include:

- Professional portrait
- Dr. Ghulam Sarwar Ashraf
- Main title / professional identity
- Tagline: **Learn • Inspire • Motivate • Contribute**
- Short introduction
- Primary CTA
- Secondary CTA
- Premium animated background elements

The hero should be one of the strongest visual sections of the website.

### 3. Introduction Section

Include:

- Short biography
- Professional profile preview
- Animated text/image entrance
- Link to full profile

### 4. Featured Articles

Use large editorial cards.

Each card may include:

- Featured image
- Category
- Title
- Short excerpt
- Date
- Read article CTA

Use staggered scroll animations.

### 5. Explore Topics

Categories:

- Education
- Politics
- Technology
- Islam
- General
- Travel & Leisure

Each category should have a visually distinctive but consistent card.

### 6. Professional Journey

Create an animated timeline for:

- Education
- Career
- Professional roles
- Achievements
- Major milestones

### 7. Latest Articles

Include:

- Clean article grid
- Smooth hover effects
- Category badges
- Publication date
- Search/filter link

### 8. Media Section

Include:

- Interviews
- Videos
- Press/media appearances
- Photos

Use premium image/video cards.

### 9. Quote / Philosophy Section

Include an elegant full-width section for:

- Quote
- Philosophy
- Personal statement
- Inspirational message

### 10. Contact Section

Include:

- Contact CTA
- Email
- Social links
- Contact form
- Elegant footer

## Article Page Design

Article pages should prioritize readability.

Include:

- Category
- Article title
- Excerpt
- Author
- Publication date
- Featured image
- Rich article content
- Share buttons
- Related articles
- Previous/next article navigation

Typography must be optimized for long-form reading.

## About / Professional Profile Page

Possible sections:

- Hero/profile
- Full biography
- Education
- Career
- Professional experience
- Achievements
- Roles/positions
- Publications
- Awards
- Timeline
- CV download

## Responsive Requirements

The website must work perfectly on:

- Desktop
- Laptop
- Tablet
- Android
- iPhone

Mobile must not feel like a compressed desktop layout.

Design specific mobile behavior for:

- Navigation
- Hero layout
- Article cards
- Typography
- Timelines
- Media grids
- Buttons
- Spacing

## Performance Requirements

Animations must not make the website slow.

Use:

- Optimized images
- Lazy loading
- Next.js Image
- Minimal unnecessary JavaScript
- Server Components where suitable
- Dynamic imports where required
- Efficient animation triggers
- Avoid excessive animation libraries

## Accessibility

Include:

- Keyboard-friendly navigation
- Semantic HTML
- Proper contrast
- Visible focus states
- Alt text
- Accessible form labels
- Reduced-motion support
- Readable font sizes

## General Rule

The website should feel like a premium personal publication platform.

Visual direction:

**Editorial + Personal Brand + Academic + Modern Portfolio**

Avoid:

- Generic news portal
- Default WordPress design
- Overloaded dashboard look
- Flashy gaming website
- Plain corporate template

## Final Locked Direction

**Next.js + TypeScript + Tailwind CSS + Custom CSS + Motion**

Design priorities:

1. Premium visual quality
2. Strong typography
3. Advanced but subtle animations
4. Clean article reading experience
5. Professional personal branding
6. Responsive mobile experience
7. Good performance
8. Maintainable component structure
