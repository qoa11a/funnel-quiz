# HOLYWATER Funnel Quiz Test Task

This project is a test task implementation
for [HOLYWATER](https://www.holywater.tech/).

It demonstrates a configurable quiz funnel system with conditional branching,
type-safe question configuration, and internationalization support.

# [Demo](https://holy-water-test-task-opal.vercel.app/en/quiz/1)

## Tech Stack

- Next.js (App Router)
- TypeScript
- React
- next-intl
- TailwindCSS
- React Compiler

## Local Development

To run this project locally, follow these steps:

1. Clone the repository

```bash
git clone https://github.com/qoa11a/funnel-quiz.git
```

2. Navigate to the project directory

```bash
cd funnel-quiz
```

3. Install dependencies

```bash
npm install
```

4. Start development server

```bash
npm run dev
```

5. Open the app

Open your browser and go to: http://localhost:3000

6. Stop development server

Press Ctrl + C in the terminal.

## Key Features

- Configurable quiz funnel
- Conditional question branching based on previous answers
- Type-safe question and answer configuration
- Internationalization support
- Data-driven quiz architecture
- Quiz configuration is fully data-driven
- Question rendering is type-safe
- Branching logic is isolated from UI components
- Easy to extend with new questions and dependencies

## Decisions Made

### Conditional Question Branching

Implemented conditional branching of quiz questions based on previous answers.

_Example:_
Question 5 (bubble selection) depends on the selected age group in Question 3.

The goal was to demonstrate how funnel logic can scale when adding more
dependencies.

---

### React Compiler Usage

Some hooks intentionally do not use useCallback or useMemo.

This is intentional due to React Compiler usage, which automatically optimizes
re-renders and memoization patterns.

---

### Typography Simplification

The Figma design contained multiple fonts. For this task, I selected one primary
font to reduce implementation complexity.

In production, I would confirm typography decisions with design to ensure
consistency across the product.

---

### Partial Typography Component

Typography component is partially implemented.

In a real production environment, I would fully implement it to enforce
consistent typography tokens across the application.

---

### TODO Markers

Some TODOs are intentionally left to show where I would extend functionality in
a real project.

## Future Improvements

If this were a production project, I would add:

- Move quiz configuration to CMS or backend API
- Add analytics tracking per quiz step
- Add A/B testing support for question variants
- Add server-side validation for answers
- Add unit and integration test coverage

## Scalability Considerations

The current architecture allows:

- Adding new questions without modifying rendering logic
- Adding new dependency chains between questions
- Supporting multiple funnels using the same engine
- Externalizing configuration to remote sources

## Production Readiness Notes

For production rollout, I would additionally implement:

- Error boundary coverage
- Loading and empty states for remote config
- Observability (logging + monitoring)
- Performance metrics tracking
