import Avatar from "../assets/images/Avatar.png";
import Img1 from "../assets/images/Result img.png";
import NodeJs from "../assets/images/node js.png";
import Front from "../assets/images/frontend.jfif";
import python from "../assets/images/python.png";
import kiber from "../assets/images/download.jfif";
import intelekt from "../assets/images/intelek.jfif";

export const YOUR_BOT_TOKEN = "7137811602:AAG-g2PVFFywxZunYOm9vRgebGOWK_xuSBA";
export const YOUR_CHAT_ID = "-1002232605271";

export const kurslar = [
  {
    id: 1,
    title: "Node js kurslar 12 oy davomida o`rganish",
    after: "Azamjon Xolikov",
    It: "Azamjon Xolikov",
    Img: NodeJs,
    Avatar: Avatar,
    video: "https://youtu.be/b8Fk2u_C7i8?si=TdVOZHi6StzZhGqy",
    category: "Backend",
    video_link: "https://www.youtube.com/embed/JH4qVqplC8E?si=Rjii3BUCNkVq6sF7",
  },
  {
    id: 2,
    title: "Html css js darslar 12 oy davomida o`rganish",
    after: "Azamjon Xolikov",
    It: "Azamjon Xolikov",
    Img: Front,
    Avatar: Avatar,
    video: "https://youtu.be/b8Fk2u_C7i8?si=TdVOZHi6StzZhGqy",
    category: "Frontend",
    comments: [],
    video_link: "https://www.youtube.com/embed/dD2EISBDjWM?si=Aq-7I8MwIVHML7f6",
  },
  {
    id: 3,
    title: "Python dasturlash tili 12 oy davomida serverlar yaratish",
    after: "Azamjon Xolikov",
    It: "Azamjon Xolikov",
    Img: python,
    Avatar: Avatar,
    video: "https://youtu.be/b8Fk2u_C7i8?si=TdVOZHi6StzZhGqy",
    category: "Backend",
    comments: [],
    video_link: "https://www.youtube.com/embed/Y8Tko2YC5hA?si=JdxargzliophQhfz",
  },
  {
    id: 4,
    title: "Suniy intelekt darslar 12 oy damovida o`rganish",
    after: "Azamjon Xolikov",
    It: "Azamjon Xolikov",
    Img: intelekt,
    Avatar: Avatar,
    video: "https://youtu.be/b8Fk2u_C7i8?si=TdVOZHi6StzZhGqy",
    category: "Backend",
    comments: [],
    video_link: "https://www.youtube.com/embed/ad79nYk2keg?si=qHEYNfjAt3cIwpwJ",
  },
  {
    id: 5,
    title: "Kiber Havsizlik darslar 12 oy davomida o`rganish",
    after: "Azamjon Xolikov",
    It: "Azamjon Xolikov",
    Img: kiber,
    Avatar: Avatar,
    video: "https://youtu.be/b8Fk2u_C7i8?si=TdVOZHi6StzZhGqy",
    category: "Frontend",
    comments: [],
    video_link: "https://www.youtube.com/embed/dmdfiBgX9rI?si=syS2yZEBZi5iodE7",
  },
];
export const Teachers = [
  {
    title: "“Shunchalik malakali taqdim etilganki, hatto bola ham tushunadi”",
    after: "Ubaydullo Betruddinovn",
    Img: Img1,
    phone_number: "+998 97 252 8500",
    links: {
      github: {
        name: "Takitok2011",
        link: "https://github.com/Takitok2011",
      },
      telegram: {
        name: "Bekzod Xaydarov",
        link: "https://t.me/Xaydarovdev",
      },
    },
  },
  {
    title: "“Shunchalik malakali taqdim etilganki, hatto bola ham tushunadi”",
    after: "Ubaydullo Betruddinov",
    Img: Img1,
  },
  {
    title: "“Shunchalik malakali taqdim etilganki, hatto bola ham tushunadi”",
    after: "Ubaydullo Betruddinov",
    Img: Img1,
  },
  {
    title: "“Shunchalik malakali taqdim etilganki, hatto bola ham tushunadi”",
    after: "Ubaydullo Betruddinov",
    Img: Img1,
  },
  {
    title: "“Shunchalik malakali taqdim etilganki, hatto bola ham tushunadi”",
    after: "Ubaydullo Betruddinov",
    Img: Img1,
  },
  {
    title: "“Shunchalik malakali taqdim etilganki, hatto bola ham tushunadi”",
    after: "Ubaydullo Betruddinov",
    Img: Img1,
  },
  {
    title: "“Shunchalik malakali taqdim etilganki, hatto bola ham tushunadi”",
    after: "Ubaydullo Betruddinov",
    Img: Img1,
  },
  {
    title: "“Shunchalik malakali taqdim etilganki, hatto bola ham tushunadi”",
    after: "Ubaydullo Betruddinov",
    Img: Img1,
  },
  {
    title: "“Shunchalik malakali taqdim etilganki, hatto bola ham tushunadi”",
    after: "Ubaydullo Betruddinov",
    Img: Img1,
  },
];

export const ErrorState = (error, state, data, data2) => {
  return error ? (state === "" ? data : data2) : data2;
};
