import filmReview from './filmReview.png';
import gatotngaca from './gatotNgaca.png';
import leisureblog from './leisureblog.png';
import leisurevent from './leisureEvent.png';
import serverLeisureEvent from './serverEventWeb.png';
import leisurestore from './leisurestorewp.png';
import quotes from './MotivationQuote.png';
import adminggstore from './serverstoregg.png';
import typingtest from './testTyping.png';
import Topup from './TopUpGames.png';
// import { box-icon } from 'boxicons';

const data = {
  projects: [
    {
      id: 1,
      name: 'Typing Test',
      href: 'https://testtyping.azrayaal.space/',
      src: typingtest,
      year: '2022',
      logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
      desc: 'Website that builds by using ReactJS and Tailwind, this website has a function for calculating your tyiping speed',
    },
    {
      id: 2,
      name: 'Web Event',
      href: 'https://eventleisure.azrayaal.space/',
      src: leisurevent,
      year: '2022',
      logo: 'ON PROGRESS',
      desc: 'Website that builds by using NextJS and Tailwind, this website has a function for ',
      // server
      name2: 'Server Admin Web Event',
      href2: 'https://eventleisure.azrayaal.space/',
      src2: serverLeisureEvent,
      year2: '2022',
      logo2: 'ON PROGRESS',
      desc2: 'ini server bibibubap asdas das dsasasdsasdddasdas asssada Website that builds by using NextJS and Tailwind, this website has a function for admin: admazra@gmail.com, password: rahasia',
      moredesc: 'admin: admazra@gmail.com, password: rahasia',
      tombolshow: true,
    },
    {
      id: 3,
      name: 'Film Review',
      href: 'https://reviewfilm.azrayaal.space/',
      src: filmReview,
      year: '2022',
      logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
      desc: 'Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone.',
      tombolshow: false,
    },
    {
      id: 4,
      name: 'Search Engine',
      href: 'https://gatotngaca.azrayaal.space/',
      src: gatotngaca,
      year: '2022',
      logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
      desc: 'web serach engine yang',
    },
    {
      id: 5,
      name: 'Random Quotes',
      href: 'https://quote.azrayaal.space/',
      src: quotes,
      year: '2022',
      logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
      desc: 'Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone.',
    },
    {
      id: 6,
      name: 'Topup Game',
      href: 'https://topupgame.azrayaal.space/',
      src: Topup,
      year: '2022',
      logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
      desc: 'Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone.',
    },
    {
      id: 7,
      name: 'Admin Topup GG',
      href: 'http://serverstoregg.azrayaal.space/',
      src: adminggstore,
      year: '2022',
      logo: [<box-icon name="nodejs" type="logo" color="#80cd2e"></box-icon>, <box-icon name="mongodb" type="logo" color="#149752"></box-icon>, 'ex'],
      desc: 'Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone.',
    },
    {
      id: 8,
      name: 'Company Profile',
      href: 'https://leisureblogwp.azrayaal.space/',
      src: leisureblog,
      year: '2022',
      logo: [<box-icon name="wordpress" type="logo" color="#e8e8e8"></box-icon>],
      desc: 'Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone.',
    },
    {
      id: 9,
      name: 'Leisure Store',
      href: 'https://leisurestorewp.azrayaal.space/',
      src: leisurestore,
      year: '2022',
      logo: [<box-icon name="wordpress" type="logo" color="#e8e8e8"></box-icon>],
      desc: 'Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone.',
    },
  ],
};

export default data;
