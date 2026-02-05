# HOLYWATER

This is a [HOLYWATER](https://www.holywater.tech/) test task. It's the funnel
config.

## [Demo](https://holy-water-test-task-opal.vercel.app/en/quiz/1)

---

## Local Development

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/qoa11a/funnel-quiz.git
    ```
2. Navigate to the project directory:
   ```bash
   cd holy-water-test-task
   ```
3. Install the dependencies:
   ```bash
    npm install
   ```
4. Start the development server:
   ```bash
    npm run dev
    ```
5. Open your browser and go to `http://localhost:3000` to see the application.
6. To stop the development server, press `Ctrl + C` in the terminal.

---

## Decisions Made

- I've implemented branching of quiz questions based on previous answers. You
  may see an example of it in the fifth question (bubble). Its answer options
  depend on the answer to the third question (age group).
- I've left a few TODO comments. These are the things that I would implement if
  I were working on the real project.
- You may notice I haven't used useCallback, useMemo, or provided some otherwise
  required dependencies for useEffect. It was intentional due to the React
  Compiler usage.
- I noticed a few different fonts in the Figma design, and I concluded that's
  one of them is redundant. In real world situation, I'd discuss it with
  designer, but for this task I just chose one of them to avoid unnecessary
  complexity.
