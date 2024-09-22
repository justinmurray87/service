// src/data/sampleData.js
const sampleData = {
  restaurants: [
    { id: 1, name: 'Maison de Lumière', city: 'San Francisco', lat: 37.7749, lng: -122.4194, lastReviewedDate: '2024-08-15', averageRating: 4.8, category: 'eats', vibe: 'Elegant', bestDish: 'Lobster Bisque' },
    { id: 2, name: 'The Copper Grove', city: 'San Francisco', lat: 37.7849, lng: -122.4094, lastReviewedDate: '2024-09-01', averageRating: 4.7, category: 'eats', vibe: 'Rustic', bestDish: 'Roast Duck' },
    { id: 3, name: 'Étoile Blanche', city: 'San Francisco', lat: 37.7949, lng: -122.4294, lastReviewedDate: '2024-07-10', averageRating: 4.9, category: 'eats', vibe: 'Sophisticated', bestDish: 'Foie Gras' },
    { id: 4, name: 'Cedar & Stone', city: 'San Francisco', lat: 37.7649, lng: -122.4494, lastReviewedDate: '2024-06-08', averageRating: 4.6, category: 'eats', vibe: 'Warm & Cozy', bestDish: 'Grilled Lamb' },
    { id: 5, name: 'La Mer Enchantée', city: 'San Francisco', lat: 37.7549, lng: -122.4594, lastReviewedDate: '2024-08-22', averageRating: 4.8, category: 'eats', vibe: 'Nautical', bestDish: 'Oysters' },
    
    // New York Restaurants
    { id: 6, name: 'Les Trois Rivières', city: 'New York', lat: 40.7128, lng: -74.0060, lastReviewedDate: '2024-07-19', averageRating: 4.9, category: 'eats', vibe: 'Parisian Chic', bestDish: 'Foie Gras' },
    { id: 7, name: 'The Velvet Willow', city: 'New York', lat: 40.7228, lng: -74.0160, lastReviewedDate: '2024-05-11', averageRating: 4.6, category: 'eats', vibe: 'Whimsical', bestDish: 'Seared Scallops' },
    { id: 8, name: 'The Gilded Serpent', city: 'New York', lat: 40.7328, lng: -74.0260, lastReviewedDate: '2024-06-17', averageRating: 4.7, category: 'eats', vibe: 'Opulent', bestDish: 'Venison with Blackberry Reduction' },
    { id: 9, name: 'Le Jardin Mystique', city: 'New York', lat: 40.7428, lng: -74.0360, lastReviewedDate: '2024-08-03', averageRating: 4.8, category: 'eats', vibe: 'Secret Garden', bestDish: 'Roasted Quail' },
    { id: 10, name: 'La Couronne d’Or', city: 'New York', lat: 40.7528, lng: -74.0460, lastReviewedDate: '2024-04-23', averageRating: 4.9, category: 'eats', vibe: 'Regal', bestDish: 'Filet Mignon' },
    
    // Los Angeles Restaurants
    { id: 11, name: 'Solstice Flame', city: 'Los Angeles', lat: 34.0522, lng: -118.2437, lastReviewedDate: '2024-07-30', averageRating: 4.8, category: 'eats', vibe: 'Cosmic', bestDish: 'Seared Duck Breast' },
    { id: 12, name: 'The Lunar Orchid', city: 'Los Angeles', lat: 34.0622, lng: -118.2537, lastReviewedDate: '2024-06-15', averageRating: 4.7, category: 'eats', vibe: 'Botanical', bestDish: 'Braised Short Rib' },
    { id: 13, name: 'Celestial Forge', city: 'Los Angeles', lat: 34.0722, lng: -118.2637, lastReviewedDate: '2024-08-01', averageRating: 4.8, category: 'eats', vibe: 'Artful', bestDish: 'Grilled Octopus' },
    { id: 14, name: 'Oceanic Reverie', city: 'Los Angeles', lat: 34.0822, lng: -118.2737, lastReviewedDate: '2024-07-25', averageRating: 4.7, category: 'eats', vibe: 'Coastal', bestDish: 'Grilled Lobster' },
    { id: 15, name: 'Le Mirage Étoilé', city: 'Los Angeles', lat: 34.0922, lng: -118.2837, lastReviewedDate: '2024-05-10', averageRating: 4.9, category: 'eats', vibe: 'Dreamlike', bestDish: 'Pan-Seared Scallops' },
    
    // Chicago Restaurants
    { id: 16, name: 'Windy City Bistro', city: 'Chicago', lat: 41.8781, lng: -87.6298, lastReviewedDate: '2024-09-01', averageRating: 4.7, category: 'eats', vibe: 'Urban Chic', bestDish: 'Deep Dish Pizza' },
    { id: 17, name: 'The Blue Plate', city: 'Chicago', lat: 41.8881, lng: -87.6398, lastReviewedDate: '2024-08-05', averageRating: 4.8, category: 'eats', vibe: 'Contemporary', bestDish: 'Grilled Steak' },
    { id: 18, name: 'Lakefront Elegance', city: 'Chicago', lat: 41.8681, lng: -87.6198, lastReviewedDate: '2024-09-01', averageRating: 4.9, category: 'eats', vibe: 'Scenic', bestDish: 'Lobster Roll' },
    { id: 19, name: 'Urban Hearth', city: 'Chicago', lat: 41.8581, lng: -87.6298, lastReviewedDate: '2024-07-28', averageRating: 4.6, category: 'eats', vibe: 'Cozy', bestDish: 'Roast Duck' },
    { id: 20, name: 'The Gilded Fork', city: 'Chicago', lat: 41.8481, lng: -87.6498, lastReviewedDate: '2024-06-18', averageRating: 4.8, category: 'eats', vibe: 'Elegant', bestDish: 'Beef Wellington' },
    
    // Miami Restaurants
    { id: 21, name: 'Sunset Grill', city: 'Miami', lat: 25.7617, lng: -80.1918, lastReviewedDate: '2024-09-01', averageRating: 4.7, category: 'eats', vibe: 'Beachfront', bestDish: 'Grilled Snapper' },
    { id: 22, name: 'Tropical Breeze', city: 'Miami', lat: 25.7717, lng: -80.2018, lastReviewedDate: '2024-08-23', averageRating: 4.6, category: 'eats', vibe: 'Relaxed', bestDish: 'Shrimp Tacos' },
    { id: 23, name: 'Palm Oasis', city: 'Miami', lat: 25.7517, lng: -80.1818, lastReviewedDate: '2024-07-14', averageRating: 4.8, category: 'eats', vibe: 'Tropical', bestDish: 'Coconut Shrimp' },
    { id: 24, name: 'Ocean Wave', city: 'Miami', lat: 25.7417, lng: -80.1718, lastReviewedDate: '2024-06-29', averageRating: 4.9, category: 'eats', vibe: 'Seaside', bestDish: 'Grilled Lobster' },
    { id: 25, name: 'The Island Pearl', city: 'Miami', lat: 25.7317, lng: -80.1618, lastReviewedDate: '2024-05-20', averageRating: 4.9, category: 'eats', vibe: 'Elegant', bestDish: 'Seared Tuna' }
  ],
  reviewers: [
    { id: 1, name: 'Isabella Dumas', city: 'San Francisco' },
    { id: 2, name: 'Julian Moreau', city: 'San Francisco' },
    { id: 3, name: 'Alessandra Ferrari', city: 'San Francisco' },
    { id: 4, name: 'Charles Montagne', city: 'San Francisco' },
    { id: 5, name: 'Elise Laurent', city: 'San Francisco' },
    { id: 6, name: 'Nathaniel Greer', city: 'New York' },
    { id: 7, name: 'Olivia Caruso', city: 'New York' },
    { id: 8, name: 'Victor Renard', city: 'New York' },
    { id: 9, name: 'Marina Bianchi', city: 'New York' },
    { id: 10, name: 'Emily Hawthorne', city: 'New York' },
    { id: 11, name: 'Gabrielle Valois', city: 'Los Angeles' },
    { id: 12, name: 'Sebastian Cruz', city: 'Los Angeles' },
    { id: 13, name: 'Lila Fontaine', city: 'Los Angeles' },
    { id: 14, name: 'Daniel Voss', city: 'Los Angeles' },
    { id: 15, name: 'Sophie Klein', city: 'Los Angeles' }
  ],
  reviews: [
    {
      id: 1,
      title: 'A Symphony of Flavors at Maison de Lumière',
      content: 'The light poured in through the grand windows of Maison de Lumière as the golden hues of the setting sun bathed the room in a warm glow. Each course arrived like a well-rehearsed performance, with flavors dancing elegantly on the palate. The delicate balance of textures and tastes—crisp, smooth, sweet, and savory—left me spellbound. The service was impeccable, each server moving with a grace and precision that only enhanced the dining experience.',
      city: 'San Francisco',
      image: '/assets/image1.png'
    },
    {
      id: 2,
      title: 'Enchanting Evening at The Copper Grove',
      content: 'Nestled among the trees, The Copper Grove offers a dining experience like no other. The ambiance was serene, with soft lighting reflecting off copper accents, creating a sense of rustic luxury. The dishes were a revelation—farm-to-table ingredients prepared with artistry and care. The roast duck was tender, with a richness that paired beautifully with the tartness of cranberry compote. Every bite seemed to evoke the very essence of the earth, grounding me in the moment.',
      city: 'San Francisco',
      image: '/assets/image2.png'
    },
    {
      id: 3,
      title: 'Elegance Redefined at Étoile Blanche',
      content: 'At Étoile Blanche, dining becomes a journey of pure indulgence. From the moment I entered, I was greeted by an air of sophistication that extended from the décor to the menu. The chef’s tasting menu was a parade of gastronomic delights, each course a new revelation. The lobster bisque was creamy and decadent, with a depth of flavor that lingered long after the last spoonful. Paired with a crisp white wine, the evening was a masterclass in culinary elegance.',
      city: 'San Francisco',
      image: '/assets/image3.png'
    },
    {
      id: 4,
      title: 'Rustic Charm at Cedar & Stone',
      content: 'Cedar & Stone brings a warmth and comfort rarely found in high-end dining. The wood-fired aromas filled the air as I sat at my table, and the open kitchen allowed for a glimpse into the craftsmanship behind each dish. The grilled lamb, seasoned to perfection, melted in my mouth, accompanied by roasted root vegetables that were earthy and sweet. The service was personal and attentive, with each recommendation tailored to my preferences, creating a memorable experience.',
      city: 'San Francisco',
      image: '/assets/image3.png'
    },
    {
      id: 5,
      title: 'A Maritime Dream at La Mer Enchantée',
      content: 'As soon as I stepped into La Mer Enchantée, I was transported to the coast of France. The decor was reminiscent of a seaside villa, with nautical touches and a palette of soft blues and whites. The seafood was as fresh as if it had been caught moments before reaching my plate. The oysters, briny and rich, were complemented by a light mignonette that brought out their natural flavors. The entire meal was a delicate balance of the ocean’s finest offerings, served with elegance and precision.',
      city: 'San Francisco',
      image: '/assets/image4.png'
    },
    {
      id: 5,
      title: 'A Symphony of Flavors at La Mer Enchantée',
      content: 'La Mer Enchantée is a seafood lover’s paradise. From the moment we were seated, we were enveloped by the calming atmosphere of coastal charm. The highlight of the evening was the grilled lobster – succulent, tender, and bursting with flavor. The accompanying herb butter added just the right touch of richness without overpowering the freshness of the seafood. The service was impeccable, with each course delivered with care and precision. It’s no wonder La Mer Enchantée has become a favorite spot for those seeking an elegant dining experience.',
      city: 'San Francisco',
      image: '/assets/image5.png'
    },
    {
      id: 5,
      title: 'A Coastal Escape in the Heart of San Francisco',
      content: 'Dining at La Mer Enchantée feels like a brief escape to a French seaside village. The ambiance is intimate, with soft lighting and a warm, inviting decor that immediately sets the mood. The bouillabaisse was a standout – a delicate, yet hearty stew of the freshest seafood, seasoned to perfection. Every spoonful was a testament to the restaurant’s commitment to quality and authenticity. If you’re looking for an unforgettable dining experience that transports you to the coast of France, this is the place.',
      city: 'San Francisco',
      image: '/assets/image6.png'
    },
    {
      id: 5,
      title: 'Exquisite Seafood with a French Flair',
      content: 'La Mer Enchantée offers an unforgettable dining experience, especially for seafood enthusiasts. The scallops were perfectly seared, with a golden crust and tender, melt-in-your-mouth center. Paired with a silky cauliflower purée and a citrus beurre blanc, the dish was both light and indulgent. The wine selection was equally impressive, with a variety of French and local options that paired beautifully with the meal. The staff was knowledgeable, attentive, and truly passionate about the menu, which only added to the overall experience.',
      city: 'San Francisco',
      image: '/assets/image7.png'
    },
    {
      id: 5,
      title: 'A Feast of Freshness and Elegance',
      content: 'At La Mer Enchantée, every dish feels like a work of art. The crab-stuffed sole was a particular standout, served with a delicate saffron sauce that enhanced the natural sweetness of the fish. The atmosphere is serene, with soft waves of classical music playing in the background and the gentle hum of conversation filling the air. It’s rare to find a place that combines such high-quality ingredients with impeccable presentation and service. This is a must-visit for anyone in search of a refined dining experience.',
      city: 'San Francisco',
      image: '/assets/image8.png'
    },
    {
      id: 6,
      title: 'Refined Dining at Les Trois Rivières',
      content: 'Les Trois Rivières offers a slice of Parisian charm in the heart of New York. The dining room, with its grand chandeliers and plush seating, exudes an air of opulence that sets the stage for the meal. The foie gras was divine, silky and rich, and paired with a house-made brioche that added a subtle sweetness to each bite. The service was flawless, with the staff anticipating my needs before I even voiced them. A perfect evening of indulgence and refinement.',
      city: 'New York',
      image: '/path/to/image6.jpg'
    },
    {
      id: 7,
      title: 'An Ethereal Experience at The Velvet Willow',
      content: 'Dining at The Velvet Willow felt like stepping into another world. The decor was whimsical yet refined, with velvet drapes and twinkling lights that created an intimate and magical atmosphere. The food was equally enchanting. The scallops were seared to perfection, tender and flavorful, with a delicate herb sauce that enhanced their natural sweetness. The service was attentive without being intrusive, allowing the meal to unfold at a leisurely pace, as if time itself had slowed down.',
      city: 'New York',
      image: '/path/to/image7.jpg'
    },
    {
      id: 8,
      title: 'A Feast for the Senses at The Gilded Serpent',
      content: 'The Gilded Serpent is a dining experience that is both opulent and daring. The decor is bold, with rich textures and golden accents that create an air of mystery. The menu is equally bold, with dishes that push the boundaries of flavor. The venison was tender and gamey, served with a blackberry reduction that added a touch of sweetness. The staff was knowledgeable and passionate, guiding me through each course with enthusiasm and expertise. A true feast for the senses.',
      city: 'New York',
      image: '/path/to/image8.jpg'
    },
    {
      id: 9,
      title: 'A Hidden Gem at Le Jardin Mystique',
      content: 'Le Jardin Mystique is a hidden oasis in the bustling heart of the city. The dining room, with its greenery and twinkling fairy lights, felt like a secret garden. The menu was a celebration of seasonal ingredients, each dish crafted with care and precision. The roasted quail was a standout, with a crispy skin and juicy meat that paired beautifully with the accompanying wild mushrooms. The staff was warm and welcoming, creating an atmosphere of relaxed luxury.',
      city: 'New York',
      image: '/path/to/image9.jpg'
    },
    {
      id: 10,
      title: 'A Royal Experience at La Couronne d’Or',
      content: 'La Couronne d’Or lives up to its regal name, offering a dining experience fit for royalty. The dining room is grand and luxurious, with gold accents and plush seating that make you feel like you’ve stepped into a palace. The dishes were equally regal. The filet mignon was cooked to perfection, tender and juicy, with a truffle butter sauce that elevated the dish to new heights. The service was impeccable, with the staff treating each guest like royalty, attending to every detail.',
      city: 'New York',
      image: '/path/to/image10.jpg'
    },
    {
      id: 11,
      title: 'A Celestial Journey at Solstice Flame',
      content: 'Solstice Flame is a dining experience that feels otherworldly. The restaurant’s decor is inspired by the cosmos, with soft lighting that mimics the stars. The food is equally celestial. The seared duck breast was tender and juicy, with a blackberry reduction that added a touch of sweetness. The service was impeccable, with the staff moving gracefully and anticipating my every need. A meal that truly transported me beyond the everyday.',
      city: 'Los Angeles',
      image: '/path/to/image11.jpg'
    },
    {
      id: 12,
      title: 'A Botanical Escape at The Lunar Orchid',
      content: 'The Lunar Orchid is a botanical paradise, with lush greenery and soft lighting that create a serene and enchanting atmosphere. The menu is a celebration of fresh, seasonal ingredients, each dish crafted with care and precision. The braised short rib was a standout, with a rich and tender texture that paired perfectly with the accompanying root vegetables. The service was attentive and warm, adding to the overall feeling of comfort and luxury.',
      city: 'Los Angeles',
      image: '/path/to/image12.jpg'
    },
    {
      id: 13,
      title: 'An Artful Presentation at Celestial Forge',
      content: 'Celestial Forge is a restaurant where every dish feels like a work of art. The decor is sleek and modern, with an open kitchen that allows diners to watch the chefs at work. The food is equally artful. The grilled octopus was a highlight, with a tender texture and a smoky flavor that was complemented by a citrus vinaigrette. The service was flawless, with the staff moving seamlessly between tables, creating an atmosphere of relaxed luxury.',
      city: 'Los Angeles',
      image: '/path/to/image13.jpg'
    },
    {
      id: 14,
      title: 'Oceanic Dream at Oceanic Reverie',
      content: 'Oceanic Reverie is a seafood lover’s dream, with a menu that celebrates the bounty of the ocean. The dining room is airy and light, with views of the coast that enhance the experience. The grilled lobster was a highlight, with a smoky flavor and a tender texture that was complemented by a light herb butter. The service was impeccable, with the staff moving gracefully and attending to every detail. A meal that left me feeling both satisfied and inspired.',
      city: 'Los Angeles',
      image: '/path/to/image14.jpg'
    },
    {
      id: 15,
      title: 'A Dreamlike Experience at Le Mirage Étoilé',
      content: 'Le Mirage Étoilé is a restaurant that feels like stepping into a dream. The decor is whimsical and ethereal, with soft lighting and delicate details that create a magical atmosphere. The food is equally enchanting. The pan-seared scallops were tender and flavorful, with a light lemon butter sauce that added a touch of brightness. The service was attentive without being intrusive, allowing the meal to unfold at a leisurely pace, as if time itself had slowed down.',
      city: 'Los Angeles',
      image: '/path/to/image15.jpg'
    }
  ]
};

export default sampleData;
