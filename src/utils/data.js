export const dataRoundOne = [
  { option: "Take a Present", style: { backgroundColor: "#7E241F" } },
  { option: "Swap your Present", style: { backgroundColor: "#5F8356" } },
  { option: "Steal a Present", style: { backgroundColor: "#7E241F" } },
  { option: "Presents to the right", style: { backgroundColor: "#5F8356" } },
  { option: "Take a Present", style: { backgroundColor: "#7E241F" } },
  { option: "Challenge someone", style: { backgroundColor: "#5F8356" } },
];

export const dataRoundTwo = [
  { option: "Unwrap a Present", style: { backgroundColor: "#7E241F" } },
  { option: "Swap your Present", style: { backgroundColor: "#608258" } },
  { option: "Steal a Present", style: { backgroundColor: "#7E241F" } },
  { option: "Presents to the right", style: { backgroundColor: "#608258" } },
  { option: "Two people swap", style: { backgroundColor: "#7E241F" } },
  { option: "Challenge someone", style: { backgroundColor: "#608258" } },
];

export const challenges = [
  {
    title: "Hide and Seek",
    explanation:
      "The Spinner gets to hide a present somewhere in the room. The Spinner chooses someone to be the Searcher. The Searcher then has two minutes to find the present. If they succeed, they get to keep it.",
  },
  {
    title: "Simon says",
    explanation:
      "The spinner is Simon. The players must obey all commands that begin with the words “Simon says”. If Simon says, “Simon says touch your nose” then all players must touch their nose. However, if Simon says, “jump” without saying “Simon says” first the players must not jump. If they do jump, that player is out. The winner gets to steal a present.",
  },
  {
    title: "Just dance Christmas",
    explanation:
      "The other players perform a just dance Christmas routine. The spinner gets to choose the best performer. The best performer gets to steal a present.",
    showVideo: true,
    videosId: [],
  },
  {
    title: "Pictionary ",
    explanation:
      "Think of something that has to do with Christmas. You get 1 minute to draw it. The person that guesses what it is gets to steal a present.",
    timer: true,
    time: 60,
  },
  {
    title: "Sing a Christmas Song",
    explanation:
      "Sing a verse of a classic Christmas song like Jingle Bells or Rudolph the Red-Nosed Reindeer without messing up. If you know all the words, you get to steal a present.",
  },
  {
    title: "Holiday Tongue Twister",
    explanation: `Say this five times fast: "Santa's sleigh slides smoothly on snowy slopes." If you succeed you get to steal a present.`,
  },
  {
    title: "Christmas Charades",
    explanation: `Act out a Christmas-themed word or phrase, like "building a snowman" or "decorating a tree," and have others guess. You get 1 minute to act. The person that guesses what it is gets to steal a present.`,
    timer: true,
    time: 60,
  },
  {
    title: "Holiday Memory Game",
    explanation: `Recite all the items in “The Twelve Days of Christmas” up to the 5th day without messing up. If you succeed you get to steal a present.`,
  },
  {
    title: "Guess Who?",
    explanation:
      "Close your eyes. The other players choose one person to stand in front of you. By just feeling their face you have to guess who it is. You have 30 seconds and only 1 guess. If you get the correct answer you get to steal a present.",
    timer: true,
    time: 30,
  },
];
