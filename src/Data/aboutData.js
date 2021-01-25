import clip_bg from '../Assets/clip/clip.jpeg';
import clip_1_bg from '../Assets/clip/clip_1.jpeg';
import clip_2_bg from '../Assets/clip/clip_2.jpeg';
import clip_3_bg from '../Assets/clip/clip_3.jpeg';

const aboutData = {
  content: [
    {
      id: 'uy56weHG',
      text: 'Jestem zaangażowany w rozwój osobisty, zawsze jestem otwarty na nowe wyzwania. Łatwo się przystosowuję do pracy w nowym zespole. Lubię pracować w grupie.'
    },
    {
      id: '98TYghftRE',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'
    }
  ],
  clip: {
    bg: clip_bg,
  },
  clip_secondary: [
    {
      id: 'oiy56UYUTYvbv',
      bg: clip_1_bg,
      clip_path: '0 0, 48% 0, 15% 100%, 0% 100%'
    },
    {
      id: 'ouy67IYUUTvbvb',
      bg: clip_2_bg,
      clip_path: '44% 0, 100% 0, 33% 100%, 15% 100%'
    },
    {
      id: 'iuy898hGvbv43',
      bg: clip_3_bg,
      clip_path: '100% 0, 100% 0, 100% 100%, 33% 100%'
    }
  ]
}

export { aboutData };