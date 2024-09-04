// src/data/sampleData.js
const sampleData = {
  restaurants: [
    { id: 1, name: 'Restaurant A', city: 'San Francisco' },
    { id: 2, name: 'Restaurant B', city: 'New York' },
    { id: 3, name: 'Restaurant C', city: 'Los Angeles' },
  ],
  reviewers: [
    { id: 1, name: 'Reviewer A', city: 'San Francisco' },
    { id: 2, name: 'Reviewer B', city: 'New York' },
    { id: 3, name: 'Reviewer C', city: 'Los Angeles' },
  ],
  reviews: [
    {
      id: 1,
      title: 'Amazing Experience at Restaurant A',
      content: 'The food was absolutely delicious!',
      city: 'San Francisco',
      image: '/path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'Great Ambiance at Restaurant B',
      content: 'The ambiance was perfect for a romantic evening.',
      city: 'New York',
      image: '/path/to/image2.jpg',
    },
  ],
};

export default sampleData;
