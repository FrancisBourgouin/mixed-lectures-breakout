# Quiz App!

View multiple questions, and answer them one at a time, and say wow when we have the right answer

- What is the hottest planet in the solar system? Venus
- What is the capital of Toronto? T
- What is the powerhouse of the cell ? Mitochondria
- How many stomachs do cows have? 4

Should we move sequentially or randomly? Random!

# Data Structures

## GameStats

```jsx
const gameStats = {
  goodAnswers:0,
  questionsAnswered:0,
  currentQuestionId:0
}
```

## Question

```jsx
const question = {
  id:1,
  question:"",
  answer:""
}

```

## Questions (QuestionList)

```jsx

const questions = [question, question, question] // Easier to access a random question!
const questions = {1:question, 2:question}

```

## Mode

```jsx

```

# HTML Structure

- body
  - header
    - Super Quiz of Destiny
  - main
    - form (answer question)
      - p prompt
      - input answer
      - button
    - form (add a question)
      - input prompt
      - input answer
      - button
    - section
      - score
      - total answered

# Component Structure

- App
  - Header
  - Results
  - QuizForm
  - QuestionForm
