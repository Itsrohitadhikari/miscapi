export default function handler(req, res) {
  const roasts = [
    { id: 1, text: "If laughter is the best medicine, your face must be curing the world." },
    { id: 2, text: "I'd insult you, but then I'd have to explain it." },
    { id: 3, text: "Is your name Wi-Fi? Because I'm feeling no connection here." },
    { id: 4, text: "You're not stupid; you just have bad luck when thinking." },
    { id: 5, text: "I thought of you today. It reminded me to take out the trash." },
    { id: 6, text: "You're like a slinky - not really good for much, but it's amusing to watch you tumble down stairs." },
    { id: 7, text: "If you were any more inbred, you'd be a sandwich." },
    { id: 8, text: "If you were twice as smart, you'd still be stupid." },
    { id: 9, text: "You're not the dumbest person in the world, but you better hope they don't die." },
    { id: 10, text: "I would roast you, but my mom said I'm not allowed to burn trash." },
    { id: 11, text: "I'd challenge you to a battle of wits, but I see you're unarmed." },
    { id: 12, text: "You're the reason the gene pool needs a lifeguard." },
    { id: 13, text: "You bring everyone a lot of joy, when you leave the room." },
    { id: 14, text: "You're like a dictionary – you add meaning to my life." },
    { id: 15, text: "I'd give you a nasty look, but you've already got one." },
    { id: 16, text: "If brains were dynamite, you wouldn't have enough to blow your nose." },
    { id: 17, text: "You're not pretty enough to be that stupid." },
    { id: 18, text: "You're like a car crash - I can't look away." },
    { id: 19, text: "You're not the dumbest person I've met, but you better hope they don't die." },
    { id: 20, text: "You're not pretty enough to be acting like that." },
    { id: 21, text: "If you were any more predictable, I'd be able to set my watch by you." },
    { id: 22, text: "I'd agree with you, but then we'd both be wrong." },
    { id: 23, text: "You're not stupid; you just have bad luck when thinking." },
    { id: 24, text: "Some cause happiness wherever they go; you cause happiness whenever you go." },
    { id: 25, text: "You're like a cloud. When you disappear, it's a beautiful day." },
    { id: 26, text: "You're like a hemorrhoid, a pain in the ass that's hard to get rid of." },
    { id: 27, text: "You're not the dumbest person in the world, but you'd better hope they don't die." },
    { id: 28, text: "I'd give you a nasty look, but you've already got one." },
    { id: 29, text: "You're like a gas station toilet - dirty and in need of some cleaning." },
    { id: 30, text: "You're like a broken pencil – pointless." }
  ];

  const randomIndex = Math.floor(Math.random() * roasts.length);
  const randomRoast = roasts[randomIndex];
  
  res.status(200).json(randomRoast);
}
