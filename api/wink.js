export default function handler(req, res) {
  const winks = [
    { id: 1, text: "Wink 😉" },
    { id: 2, text: "Hey you 😉" },
    { id: 3, text: "You're amazing 😉" },
    { id: 4, text: "Feeling cheeky 😉" },
    { id: 5, text: "Wink wink, nudge nudge 😉" },
    { id: 6, text: "Can't resist a wink 😉" },
    { id: 7, text: "Sending you a wink and a smile 😉😊" },
    { id: 8, text: "Just between you and me 😉" },
    { id: 9, text: "Wink if you're with me 😉" },
    { id: 10, text: "Wink and the world winks with you 😉" },
    { id: 11, text: "Keep calm and wink 😉" },
    { id: 12, text: "Feeling mischievous 😉" },
    { id: 13, text: "You're the wink to my smile 😉😊" },
    { id: 14, text: "Let's make a secret pact 😉" },
    { id: 15, text: "Winking at you from across the room 😉" },
    { id: 16, text: "Winking my way into your heart 😉" },
    { id: 17, text: "You're the reason for this wink 😉" },
    { id: 18, text: "Let's keep it between us 😉" },
    { id: 19, text: "Feeling flirty 😉" },
    { id: 20, text: "Wink if you're feeling fabulous 😉" },
    { id: 21, text: "A wink for good luck 😉" },
    { id: 22, text: "Wink and let's make magic happen 😉✨" },
    { id: 23, text: "Wink your worries away 😉" },
    { id: 24, text: "Wink if you're ready for an adventure 😉" },
    { id: 25, text: "Feeling playful 😉" },
    { id: 26, text: "Wink if you're on cloud nine 😉☁️" },
    { id: 27, text: "Wink and let's dance under the stars 😉💃🌟" },
    { id: 28, text: "Wink and watch the world smile back 😉😄" },
    { id: 29, text: "Wink your worries goodbye 😉👋" },
    { id: 30, text: "Wink if you're feeling like a star 😉⭐" }
  ];

  const randomIndex = Math.floor(Math.random() * winks.length);
  const randomWink = winks[randomIndex];
  
  res.status(200).json(randomWink);
}
