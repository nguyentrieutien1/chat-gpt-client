export  function getRandomQuestions(arr) {
  // Create a copy of the array to avoid modifying the original array
  let questionsCopy = [...arr];
  
  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = questionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
  }
  const questions = questionsCopy.slice(0, 3);
  // Return the first 3 questions from the shuffled array
  return questions;
}
