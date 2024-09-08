// src/api/api.js

// Mock function to simulate AI review generation
export const generateReviewAI = async ({ notes, images, tone }) => {
  // Simulate a delay to represent an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return a generated review based on inputs (this is just a mocked response)
  return `Generated review in ${tone} tone based on the following notes: ${notes}`;
};
