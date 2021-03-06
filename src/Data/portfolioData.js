import new_page from '../Assets/sites/new_site.jpg';
import beer_station from '../Assets/sites/beerstation_pub.jpg'; 
import old_page from '../Assets/sites/tretsyak_old_page.jpg';
import beer_loga from '../Assets/sites/beer_loga_pub.jpg';
import got from '../Assets/sites/got.jpg';
import twitter_app from '../Assets/sites/twitter_app.jpg';
import jablonski from '../Assets/sites/jablonski.jpg';
import ddr from '../Assets/sites/ddr.jpg';
import web_start from '../Assets/sites/webstart_diploma.jpg';

const portfolioData = {
  mainTitle: {
    PL: 'Niektóre z moich prac',
    EN: 'Some of my works',
  },
  slides: [
    {
      link: '/',
      content: 'React / StyledComponents / ContextAPI ',
      bgImage: new_page,
    },
    {
      link: '/',
      content: 'HTML / JS / Sass | admin panel : React / php',
      bgImage: beer_station,
    },
    {
      link: '/',
      content: 'HTML / JS / Sass / Webpack',
      bgImage: old_page,
    },
    {
      link: '/',
      content: 'HTML / JS / Sass | admin panel : React / php',
      bgImage: beer_loga,
    },
    {
      link: '/',
      content: 'Sass/Scss / React / REST API',
      bgImage: got,
    },
    {
      link: '/',
      content: 'Sass/Scss / React ',
      bgImage: twitter_app,
    },
    {
      link: '/',
      content: 'HTML / JS  / Sass/Scss / AJAX/JSON / Bootstrap 4 / php /',
      bgImage: jablonski,
    },
    {
      link: '/',
      content: 'HTML / Sass/Scss / JS',
      bgImage: ddr,
    },
    {
      link: '/',
      content: 'HTML / Sass/Scss / JS',
      bgImage: web_start,
    }
  ]
}

export { portfolioData }