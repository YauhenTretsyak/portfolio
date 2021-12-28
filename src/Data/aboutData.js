import { BoldComponent } from '../Components/Blocks'
import clip_bg from '../Assets/clip/clip.jpeg';
import clip_1_bg from '../Assets/clip/clip_1.jpeg';
import clip_2_bg from '../Assets/clip/clip_2.jpeg';
import clip_3_bg from '../Assets/clip/clip_3.jpeg';

const aboutData = {
  sectionTitle: {
    PL : 'O mnie',
    EN : 'About me',
  },
  content: {
    PL: [
      {
        text: (
          <BoldComponent>
            Jestem zaangażowany w rozwój osobisty, zawsze jestem otwarty na nowe wyzwania. Łatwo się przystosowuję do pracy w nowym zespole. Lubię pracować w grupie.
          </BoldComponent>
        )
      },
      {
        text: (
          <BoldComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </BoldComponent>
        )
      }
    ],
    EN: [
      {
        text: (
          <BoldComponent>
            <strong>English version</strong> Test text ---- Jestem zaangażowany w rozwój osobisty, zawsze jestem otwarty na nowe wyzwania. Łatwo się przystosowuję do pracy w nowym zespole. Lubię pracować w grupie.
          </BoldComponent>
        )
      },
      {
        text: (
          <BoldComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </BoldComponent>
        )
      }
    ]
  },
  clip: {
    bg: clip_bg,
  },
  clip_secondary: [
    {
      bg: clip_1_bg,
      clip_path: '0 0, 48% 0, 15% 100%, 0% 100%'
    },
    {
      bg: clip_2_bg,
      clip_path: '44% 0, 100% 0, 33% 100%, 15% 100%'
    },
    {
      bg: clip_3_bg,
      clip_path: '100% 0, 100% 0, 100% 100%, 33% 100%'
    }
  ]
}

export { aboutData };