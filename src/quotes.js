
const quotes = [
  {
    words: "Strike me down and I will become more powerful than you could possibly imagine.", speaker: "Obi-Wan Kenobi"
  },
  {
    words: "I find your lack of faith disturbing.", speaker: "Darth Vader"
  },
  {
    words: "Let the wookie win.", speaker: "C-3PO"
  },
  {
    words: "Do or do not. There is no try.", speaker: "Yoda"
  },
  {
    words: "Yeah, I’m responsible these days. It’s the price you pay for being successful.", speaker: "Lando Calrissian"
  },
  {
    words: "Never tell me the odds!", speaker: "Han Solo"
  },
  {
    words: "Many of the truths that we cling to depend on our point of view.", speaker: "Obi-Wan Kenobi"
  },
  {
    words: "I’ve found that what most people call luck is often little more than raw talent combined with the ability to make the most of opportunities.", speaker: "Talon Karrde"
  },
  {
    words: "Reality doesn’t care if you believe it.", speaker: "Boba Fett"
  },
  {
    words: "Life is not without pain, but life concerns itself with how we handle that pain, or joy, or confusion, or triumph. Life is more than time passing before death; it is the sum and total of all we make of it.", speaker: "Elegos A’Kla"
  },
  {
    words: "You can’t stop the change, any more than you can stop the suns from setting.", speaker: "Shmi Skywalker"
  },
  {
    words: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.", speaker: "Yoda"
  },
  {
    words: "The ability to speak does not make you intelligent.", speaker: "Qui-Gon Jinn"
  },
  {
    words: "Your focus determines your reality.", speaker: "Qui-Gon Jinn"
  },
  {
    words: "You feel empty. You feel alone. Lonely. Almost frightened, but also strong, yes? The name for what you are feeling is freedom. How did you expect it to feel? You are free, and that can be lonely, and empty, and frightening. But it is also powerful.", speaker: "Jedi Master Vergere"
  },
  {
    words: "Lesson one from this experience: Realize how much you don’t know. Lesson two: Make sure to learn from lesson one.", speaker: "Jacen Solo"
  },
  {
    words: "Sometimes we must let go of our pride and do what is requested of us.", speaker: "Padmé Amidala"
  },
  {
    words: "This threshold is mine. I claim it for my own. Bring on your thousands, one at a time or all in a rush. I don’t give a damn. None shall pass.", speaker: "Gannar Rhysode"
  },
  {
    words: "Inevitably, love is going to lead to as much sorrow and regret as it does joy. How you deal with the bad part of love determines your character, what determines the dark side’s hold over you.", speaker: "Jolee Bindo"
  },
  {
    words: "Who I am is not important, my message is.", speaker: "Darth Revan"
  },
  {
    words: "Advice: Any organic who lives within their means suffers from a lack of imagination.", speaker: "HK-47"
  },
  {
    words: "We fight for justice because justice is the fundamental bedrock of civilization: An unjust civilization is built upon sand. It does not long survive a storm.", speaker: "Mace Windu"
  },
  {
    words: "To be united by hatred is a fragile alliance at best.", speaker: "Kreia"
  },
  {
    words: "There is nothing wrong with fear. You need never be ashamed of it, as long as it doesn’t stop you functioning. Fear is your natural warning system; it keeps you alive so that you can fight. Show me a man who isn’t afraid and I’ll show you a fool who is a danger to his entire ship.", speaker: "Admiral Adar Tallon"
  },
  {
    words: "So this is how liberty dies ... with thunderous applause.", speaker: "Queen Amidala"
  },
  {
    words: "Train yourself to let go of everything you fear to lose.", speaker: "Yoda"
  },
  {
    words: "The dark is generous, and it is patient, and it always wins, - but in the heart of its strength lies its weakness: One lone candle is enough to hold it back. Love is more than a candle. Love can ignite the stars.", speaker: "Narrator"
  },
  {
    words: "The bigger the galaxy, the sweeter the homecoming.", speaker: "Corellian proverb"
  },
  {
    words: "Easy is the path to wisdom for those only not blinded by themselves.", speaker: "Broadside"
  },
  {
    words: "It’s every citizen’s duty to challenge their leaders, to keep them honest, and hold them accountable if they’re not.", speaker: "Ahsoka Tano"
  },
  {
    words: "Sometimes it takes courage to stick to one’s beliefs, young Padawan.", speaker: "Aayla Secura"
  },
  {
    words: "Rule 23: Never pull sentry duty on an empty stomach.", speaker: "Scorch"
  },
  {
    words: "The winding path to peace is always a worthy one, regardless of how many turns it takes.", speaker: "Dooku Captured moral"
  },
  {
    words: "Nobody cares who your father was, only the father you’ll be.", speaker: "Mandalorian proverb"
  },
  {
    words: "Sometimes to heal, you must first hurt.", speaker: "Cilghal"
  },
  {
    words: "If I trust the wrong guy, maybe I get hurt. But if I’m too scared to help someone who really needs it, who knows how many people will suffer?", speaker: "Corso Riggs"
  },
  {
    words: "An object cannot make you good or evil. The temptation of power, forbidden knowledge, even the desire to do good can lead some down that path. But only you can change yourself.", speaker: "Bendu"
  },
  {
    words: "If you define yourself by your power to take life, your desire to dominate, to possess, then you have nothing.", speaker: "Obi-Wan Kenobi"
  },
  {
    words: "The belonging you seek is not behind you; it is ahead.", speaker: "Maz Kanata"
  },
  {
    words: "As long as there’s light, we’ve got a chance.", speaker: "Poe Dameron"
  },
  {
    words: "I know how to run without you holding my hand!", speaker: "Rey"
  },
  {
    words: "Let the past die. Kill it if you have to.", speaker: "Kylo Ren"
  },
  {
    words: "We have hope. Rebellions are built on hope.", speaker: "Jyn Erso"
  },
  {
    words: "I am one with the Force. The Force is with me.", speaker: "Chirrut Îmwe"
  },
  {
    words: "You’re not the only one who lost everything. Some of us just decided to do something about it.", speaker: "Cassian Andor"
  },
  {
    words: "A tyrant can make anything seem to be ‘the will of the people.’ ", speaker: "Senator Leia Organa"
  },
  {
    words: "Good intentions aren’t enough. They’re not meaningless, but that’s where we have to start, not where we end.", speaker: "Princess Leia"
  },
  {
    words: "Authority can be given, but leadership must be earned.", speaker: "Queen Breha Organa"
  },
  {
    words: "That’s how we’re gonna win. Not fighting what we hate, saving what we love.", speaker: "Rose Tico"
  },
  {
    words: "No one’s ever really gone.", speaker: "Luke Skywalker"
  }
];

const quotespanelcontainer = document.querySelector("#quotes-panel");
const quotespanel = document.querySelectorAll("#quotes-panel div");

function updateQuotes() {
  const quotes_obj = quotes[Math.floor(Math.random() * quotes.length)];
  quotespanel[0].innerHTML = `${quotes_obj.words}`;
  quotespanel[1].innerHTML = `- ${quotes_obj.speaker} -`; 

  quotespanelcontainer.classList.remove('fade-out');
  quotespanelcontainer.classList.add('fade-in');

  setTimeout(()=>{
    quotespanelcontainer.classList.add('fade-out');
    quotespanelcontainer.classList.remove('fade-in');
  }, 7000)
}

setInterval(() => { updateQuotes(); }, 8000);
updateQuotes();
