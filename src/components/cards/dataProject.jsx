import filmReview from './filmReview.png';
import gatotngaca from './gatotNgaca.png';
import leisureblog from './leisureblog.png';
import leisurevent from './leisureEvent.png';
import serverLeisureEvent from './serverEventWeb.png';
import leisurestore from './leisurestorewp.png';
import quotes from './MotivationQuote.png';
import storeGG from './storeGG.png';
import adminggstore from './serverstoregg.png';
import typingtest from './testTyping.png';
import Topup from './TopUpGames.png';
// import { box-icon } from 'boxicons';

const data = {
  projects: [
    {
      id: 1,
      name: 'Store GG azrayaal',
      href: 'http://storegg.azrayaal.space/',
      src: storeGG,
      year: '2022',
      logo: [<box-icon name="nodejs" type="logo" color="#80cd2e"></box-icon>, <box-icon name="mongodb" type="logo" color="#149752"></box-icon>, 'ex'],
      desc: '<p>Store GG azrayaal merupakan website penyedia jasa pembayaran atau top-up untuk berbagai game online. Website ini memiliki fitur</p><ol><li>top-up&nbsp;</li><li>sign-up</li><li>log-in</li><li>serta melihat riwayat transaksi</li></ol>Website ini dibuat dengan menggunakan Framework NEXTJS dan Bootstrap5',
      // server
      name2: 'Admin store GG',
      href2: 'http://serverstoregg.azrayaal.space/',
      src2: adminggstore,
      year2: '2022',
      logo2: [<box-icon name="nodejs" type="logo" color="#80cd2e"></box-icon>, <box-icon name="mongodb" type="logo" color="#149752"></box-icon>, 'ex'],
      desc2: 'Admin store GG adalah website server web dari website Store GG azrayaal yang memiliki fungsi sebagai penambah voucher game serta mengontrol transaksi. </br> Website ini dibuat dengan menggunakan NodeJS dan ExpressJS',
      tombolshow: true,
    },
    {
      id: 2,
      name: 'Web Event',
      href: 'https://eventleisure.azrayaal.space/',
      src: leisurevent,
      year: '2022',
      logo: [<box-icon name="tailwind-css" type="logo" color="#0ed3cf" />],
      desc: 'Website that builds by using NextJS and Tailwind, this website has a function for ',
      // server
      name2: 'Server Admin Web Event',
      href2: 'https://eventleisure.azrayaal.space/',
      src2: serverLeisureEvent,
      year2: '2022',
      logo2: 'ON PROGRESS',
      desc2: 'Codashop merupakan salah satu penyedia jasa pembayaran atau top-up untuk berbagai game online serta Steam dan Google Play. Sekarang kamu tidak perlu repot untuk melakukan pembayaran lewat Codashop karena ',
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
      href: 'https://www.gatotngaca.azrayaal.space/',
      src: gatotngaca,
      year: '2022',
      logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="tailwind-css" type="logo" color="#0ed3cf" />],
      desc: '<p>Gatot Ngoco is a web-based search engine with Wikipedia API, this search engine was inspired by Jhonny G. Plate</p><p>&nbsp;</p><p>Gatot Ngoco was developed by using <strong>React </strong>and <strong>Tailwind</strong></p>',
    },

    {
      id: 5,
      name: 'Typing Test',
      href: 'https://www.typing-test.azrayaal.space/',
      src: typingtest,
      year: '2022',
      logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
      desc: '<p>Typing Test is a website that helps you to practice your typing speed, it offers a free online&nbsp;<em>Typing Test because t</em>he faster you type, the faster you communicate with others. With our free&nbsp;<em>typing</em>&nbsp;speed&nbsp;<em>test</em>, you can check your WPM&nbsp;<em>typing</em>&nbsp;scores in a flash!</p><p>&nbsp;</p><p>This website was developed by using <strong>ReactJS </strong>and <strong>Bootstrap</strong></p>',
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
      name: 'Random Quotes',
      href: 'https://www.quotes.azrayaal.space/',
      src: quotes,
      year: '2022',
      logo: [<box-icon type="logo" className="" color="#3db8b8" name="react" />, <box-icon name="bootstrap" type="logo" color="#52377C" />],
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
