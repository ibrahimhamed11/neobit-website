# ContactSection Component

A refactored, modular contact section component with separate concerns and organized styles.

## Structure

```
ContactSection/
├── index.tsx                    # Main component that composes all sub-components
├── styles.ts                    # Main section styles
├── SectionHeader/               # Header with title and description
│   ├── index.ts
│   ├── SectionHeader.tsx
│   └── styles.ts
├── ContactInfoCard/             # Individual contact info card component
│   ├── index.ts
│   ├── ContactInfoCard.tsx
│   └── styles.ts
├── ProcessStepper/              # Software development process stepper
│   ├── index.ts
│   ├── ProcessStepper.tsx
│   └── styles.ts
└── ContactForm/                 # Contact form with validation
    ├── index.ts
    ├── ContactForm.tsx
    └── styles.ts
```

## Components

### ContactSection (Main)
The main container component that orchestrates all sub-components.

**Props:** None (uses translation context)

**Features:**
- Responsive layout
- RTL support
- Animated backgrounds
- Contact information display
- Process workflow visualization
- Contact form with validation

### SectionHeader
Displays the section title, badge, and description.

**Props:** None (uses translation context)

### ContactInfoCard
Reusable card component for displaying contact information.

**Props:**
- `icon`: React element for the icon
- `title`: Card title
- `value`: Main contact value (email, phone, location)
- `description`: Additional description text
- `color`: Theme color for the card
- `index`: Index for animation delay

### ProcessStepper
Animated stepper showing the software development process.

**Props:** None (uses translation context)

**Features:**
- Custom styled step icons
- Animated progression
- Responsive layout
- Translatable steps

### ContactForm
Form component with Formik validation and Yup schema.

**Props:** None (uses translation context)

**Features:**
- Form validation
- Success message
- RTL support
- Animated card background
- Responsive fields

## Styling

All styles are separated into `styles.ts` files for each component, using Material-UI's `SxProps` type for type safety.

## Usage

```tsx
import ContactSection from '@/components/ContactSection';

function App() {
  return <ContactSection />;
}
```

## Dependencies

- Material-UI (@mui/material)
- Framer Motion (motion, animations)
- React i18next (translations)
- Formik (form handling)
- Yup (validation schema)

## Translation Keys

The component uses the following translation namespaces:
- `contact.*` - Contact section texts
- `process.*` - Development process texts
- `contact.form.*` - Form labels and validation messages
