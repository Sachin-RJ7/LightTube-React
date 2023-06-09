const userNames = [
    "Rajesh23",
    "Priya87",
    "Amit_09",
    "Neha12",
    "Riya34",
    "Vikram22",
    "Sneha_18",
    "Kunal15",
    "Pooja_07",
    "Arjun_91",
    "Ananya40",
    "Rahul_56",
    "Deepika_28",
    "Vishal99",
    "Kavya_16",
    "Rajeev81",
    "Shreya45",
    "Aarav_13",
    "Nisha_64",
    "Rohan_02",
    "Sanya75",
    "Kabir_61",
    "Isha_29",
    "Riyaan88",
    "Anjali_03",
    "Abhinav_42",
    "Ritu_14",
    "Aditi_55",
    "Aryan_27",
    "Ishita_09",
    "Akash_31",
    "Riddhi_77",
    "Mayank_36",
    "Nidhi_21"
  ];
  

const chatMessages = [
  "This scene is so intense!",
  "I love the cinematography in this movie.",
  "The acting is phenomenal!",
  "Who else is watching this movie right now?",
  "This movie keeps me on the edge of my seat.",
  "The plot twist caught me by surprise!",
  "The soundtrack is amazing.",
  "I can't get enough of this movie!",
  "What a great performance by the lead actor!",
  "The visual effects are mind-blowing!",
  "This is one of the best movies I've seen.",
  "I'm completely immersed in this story.",
  "The dialogue is so well-written.",
  "This movie deserves all the awards.",
  "I can't wait to see what happens next.",
  "The chemistry between the actors is incredible.",
  "This movie is a masterpiece!",
  "I'm emotionally invested in these characters.",
  "The director did an excellent job!",
  "I would highly recommend this movie to everyone.",
  "The action sequences are breathtaking!",
  "This movie is thought-provoking.",
  "I'm blown away by the performances.",
  "The cinematography is stunning!",
  "I'm glad I decided to watch this movie.",
  "The suspense is killing me!",
  "The costumes and set design are impressive.",
  "I'm hooked from the beginning till now.",
  "This movie is pure entertainment.",
  "I can't take my eyes off the screen.",
  "The storytelling is exceptional.",
  "I'm so glad I didn't miss this movie.",
  "The pacing is perfect.",
  "I'm laughing out loud at the comedic moments.",
  "The special effects are top-notch!",
  "This movie exceeded my expectations.",
  "I'm recommending this movie to all my friends.",
  "The performances are Oscar-worthy.",
  "I'm invested in the character development.",
  "The cinematography creates a captivating atmosphere.",
  "I'm on an emotional rollercoaster watching this movie.",
  "The script is brilliant!",
  "This movie will leave you in awe.",
  "I can't get over how good this movie is!",
  "The attention to detail is impressive.",
  "I'm so glad I chose to watch this tonight.",
  "The twists and turns keep me guessing.",
  "This movie deserves all the praise.",
  "I'm at the edge of my seat!",
];

export function generateRandomName() {
  return userNames[Math.floor(Math.random() * userNames.length)];
}

export function generateRandomMessage() {
  return chatMessages[Math.floor(Math.random() * chatMessages.length)];
}
