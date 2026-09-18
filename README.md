# React TypeScript Task

A basic React application built using Vite, React, and TypeScript.

This project demonstrates a clean React project structure, reusable TypeScript components, React Router navigation, typed component props, and basic CSS styling.

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- CSS
- Git & GitHub

## Features

- React project created using Vite
- TypeScript support
- Clean and organized folder structure
- Reusable Button component
- Reusable Card component
- Common Header and Footer
- Home Page
- About Page
- React Router navigation
- Navbar with Home and About links
- TypeScript interfaces for component props
- Global TypeScript types
- Basic CSS styling
- Type-safe components

## Project Structure

```text
src/
├── components/
│   ├── elements/
│   │   └── Button.tsx
│   │
│   ├── cards/
│   │   └── Card.tsx
│   │
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
│
├── pages/
│   ├── Home.tsx
│   └── About.tsx
│
├── assets/
│
├── styles/
│   └── global.css
│
├── utils/
│
├── types/
│   └── global.ts
│
├── App.tsx
└── main.tsx

Component Structure
Header

The Header component contains the application title and navigation links.

Footer

The Footer component is shared across the application and displays the footer content.

Button

The Button is a reusable TypeScript component.

It accepts typed props such as:

text
onClick
type
Card

The Card component displays:

Title
Description
Button

The component uses TypeScript interfaces to ensure that the required props are provided correctly.

Pages
Home Page

The Home page demonstrates the reusable Card and Button components.

URL:

/
About Page

The About page provides information about the project.

URL:

/about
Routing

React Router is used to navigate between the Home and About pages without manually handling browser URLs.

Styling

Basic CSS styling is implemented using a global stylesheet:

src/styles/global.css
Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Navigate into the project:

cd react-typescript-task

Install the project dependencies:

npm install
Run the Project

Start the development server:

npm run dev

The terminal will display a local URL, usually:

http://localhost:5173/

Open that URL in your browser.

Type Checking

To check the project for TypeScript errors:

npx tsc --noEmit

The project should complete the check without TypeScript errors.

Production Build

To create a production build:

npm run build
Git Commands Used

Initialize Git:

git init -b main

Add files:

git add .

Create a commit:

git commit -m "Initial React TypeScript project"

Connect the local project to GitHub:

git remote add origin YOUR_GITHUB_REPOSITORY_URL

Push the project:

git push -u origin main
Learning Objectives

This project was created to understand:

React project setup using Vite
TypeScript in React
Component-based architecture
Component props and interfaces
Reusable components
React Router
Basic CSS styling
Folder organization
Git and GitHub workflow

---

# PART Q — Replace the GitHub URL

In the README you'll see:

```text
YOUR_GITHUB_REPOSITORY_URL

Replace it with your actual repository URL.

For example:

https://github.com/yourusername/react-typescript-task.git

Use your actual GitHub username.

You'll need to replace it in both places:

First:
git clone YOUR_GITHUB_REPOSITORY_URL
Second:
git remote add origin YOUR_GITHUB_REPOSITORY_URL
