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
            Hejka! Nazywam się Eugeniusz Trecjak. Jestem kreatywnym, zaangażowanym w rozwój osobisty, z poczuciem humoru i otwartym do nowych wyzwań. Bardzo 
            lubię podróżować samochodem, odkrywać dla siebie nowe ciekawe miejsca i miasta.  
          </BoldComponent>
        )
      },
      {
        text: (
          <BoldComponent>
            Uwielbiam uczyć nowe rzeczy w programowaniu i używać tych wiedzy w wykonywanych projektach. Jestem uważny do drobnostek w projekcie, 
            dlatego zawsze zwracam dużą uwagę na szczegóły zadania. Lubię kodować w React, oraz mam znajomość z <strong>VueJS</strong> i <strong>Angular</strong>, z <strong>TypeScript</strong>.
          </BoldComponent>
        )
      },
      {
        text: (
          <BoldComponent>
            Jestem komunikatywnym, więc bardzo lubię pracować w zespole. Praca w zespole - to jest cały czas wymiana wiedzy między kolegami i to znaczy że każdy z zespołu cały czas może szybciej otrzymywać nowe wiedzy! 
            Dla mnie praca w zespole - to jeszcze dobra, przyjazna atmosfera :) 
          </BoldComponent>
        )
      }
    ],
    EN: [
      {
        text: (
          <BoldComponent>
            Hi! My name is Yauhen Tretsyak. I am creative, committed to personal development, with a sense of humor and open to new challenges. I really like traveling by car, discovering new interesting places and cities for myself.
          </BoldComponent>
        )
      },
      {
        text: (
          <BoldComponent>
            I love teaching new things in programming and using this knowledge in my projects. I'm attentive to small details in the project, so I always pay great attention to the details of the task. I like to code in React, and I'm bit familiar with <strong>VueJS</strong> and <strong>Angular</strong>, with <strong>TypeScript</strong>.
          </BoldComponent>
        )
      },
      {
        text: (
          <BoldComponent>
            I'm communicative, so I like to work in a team very much. Teamwork - it is an all-time exchange of knowledge between colleagues, which means that each team member can receive new knowledge faster all the time! For me, working in a team - it's still a good, friendly atmosphere :)
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