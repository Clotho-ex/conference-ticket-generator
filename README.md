# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Conference ticket generator solution](#frontend-mentor---conference-ticket-generator-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [1. React \& Component Architecture](#1-react--component-architecture)
    - [2. Tailwind CSS](#2-tailwind-css)
    - [3. Form Handling](#3-form-handling)
    - [4. Modern JavaScript Features](#4-modern-javascript-features)
    - [5. Image Handling](#5-image-handling)
    - [6. Responsive Design](#6-responsive-design)
    - [7. UI/UX Considerations](#7-uiux-considerations)
    - [8. Development Tools](#8-development-tools)
    - [9. Best Practices](#9-best-practices)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/conference-ticket-generator/src/assets/images/screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwindcss](https://tailwindcss.com/) - For styles

### What I learned


### 1. React & Component Architecture

-   Building reusable components (`HeadComponent`,  `AvatarComponent`,  `InputComponent`,  `TicketComponent`)
-   State management using  `useState`  hook
-   Props passing between components
-   Conditional rendering (`isSubmitted ? <TicketComponent> : <>`)

### 2. Tailwind CSS

-   Mobile-first responsive design
-   Custom configuration in  `tailwind.config.js`
-   Breakpoint usage (`md:`,  `lg:`,  `xl:`)
-   Custom spacing, colors, and gradients
-   Utility classes for styling

### 3. Form Handling

-   File upload with drag & drop functionality
-   Form validation
-   Input state management
-   Form submission handling

### 4. Modern JavaScript Features

-   Destructuring (`const [firstName, lastName] = formData.fullName.split(" ")`)
-   Spread operator (`...formData`)
-   Template literals
-   Arrow functions
-   Event handling

### 5. Image Handling

-   File type validation
-   Image preview
-   Base64 conversion
-   Alternative text accessibility

### 6. Responsive Design

-   Breakpoint-based layouts
-   Dynamic text sizing
-   Flexible spacing system
-   Container queries

### 7. UI/UX Considerations

-   User feedback (error messages)
-   Interactive elements (hover states)
-   Loading states
-   Smooth transitions

### 8. Development Tools

-   Vite as build tool
-   npm package management
-   ESLint/Prettier (assumed from project structure)
-   Browser DevTools for testing

### 9. Best Practices

-   Component composition
-   State lifting
-   Prop drilling
-   File organization
-   Code reusability

Some of the code snippets i like on this project:

```html
<h1 className="text-3xl lg:text-6xl font-bold text-center text-white pt-12">
  Your Journey to Coding{" "}
  <span className="hidden md:inline lg:hidden">
    <br />
  </span>
  Conf{" "}
  <span className="hidden lg:inline">
    <br />
  </span>
  2025 Starts Here!
</h1>
```

```js
  const eventDate = new Date(2025, 0, 31);
  const formattedDate = eventDate.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
```

## Author

- Frontend Mentor - [@clothoex](https://www.frontendmentor.io/profile/Clotho-ex)
- Twitter - [@lachesis_](https://x.com/lachesis_)