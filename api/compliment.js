export default function handler(req, res) {
  const compliments = [
    { id: 1, text: "You're looking gorgeous!" },
    // ... more compliments
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);
  const randomCompliment = compliments[randomIndex];
  
  res.status(200).json(randomCompliment);
} 
