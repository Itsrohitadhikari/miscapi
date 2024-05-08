export default function handler(req, res) {
  const compliments = [
    { id: 1, text: "You're looking gorgeous!" },
    { id: 2, text: "Your smile is contagious and lights up the room!" },
    { id: 3, text: "You have impeccable taste in fashion!" },
    { id: 4, text: "You're incredibly talented and creative!" },
    { id: 5, text: "You have a heart of gold and always spread positivity!" },
    { id: 6, text: "You're a true inspiration to everyone around you!" },
    { id: 7, text: "You're so intelligent and quick-witted!" },
    { id: 8, text: "You have a natural charm that captivates everyone!" },
    { id: 9, text: "You're an amazing listener and always offer great advice!" },
    { id: 10, text: "You're a ray of sunshine on even the gloomiest days!" },
    { id: 11, text: "You have a beautiful soul that radiates warmth and kindness!" },
    { id: 12, text: "You're a true friend who always has others' backs!" },
    { id: 13, text: "You're a beacon of hope and positivity in a sometimes dark world!" },
    { id: 14, text: "You're incredibly talented and make everything you do look effortless!" },
    { id: 15, text: "You're a true gem, rare and precious!" },
    { id: 16, text: "You have a wonderful sense of humor that brightens everyone's day!" },
    { id: 17, text: "You're a fearless leader who inspires others with your determination!" },
    { id: 18, text: "You have a heart as big as the ocean and just as deep!" },
    { id: 19, text: "You're a true visionary with the ability to change the world!" },
    { id: 20, text: "You're so graceful and elegant, like a swan gliding on water!" },
    { id: 21, text: "You're an absolute powerhouse, unstoppable in everything you do!" },
    { id: 22, text: "You're a true Renaissance person, excelling in every aspect of life!" },
    { id: 23, text: "You're incredibly compassionate and always put others' needs before your own!" },
    { id: 24, text: "You're a brilliant problem solver with a knack for finding solutions!" },
    { id: 25, text: "You're a true artist, able to express emotions in the most beautiful ways!" },
    { id: 26, text: "You're a force of nature, leaving a trail of awe and inspiration wherever you go!" },
    { id: 27, text: "You're so talented that even Picasso would be jealous of your skills!" },
    { id: 28, text: "You're a walking, talking embodiment of grace and elegance!" },
    { id: 29, text: "You're the epitome of sophistication and class!" },
    { id: 30, text: "You're a treasure trove of wisdom and knowledge, always ready to share your insights with others!" }
    // ... more compliments
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);
  const randomCompliment = compliments[randomIndex];
  
  res.status(200).json(randomCompliment);
    }
