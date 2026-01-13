export const getImage = (category, file) => {
  return new URL(`../assets/images/${category}/${file}`, import.meta.url).href
}


export const rolls = [
  {
    id: 1,
    pieces: 8,
    name: 'Ролл с огурцом',
    description: 'Нори, рис, огурец',
    weight: '110',
    price: 140,
    img: getImage('rolls', 'Ролл_с_огурцом.png'),  // Путь к картинке в public/images

  },
  {
    id: 2,
    pieces: 8,
    name: 'Ролл с авокадо',
    description: 'Нори, рис, авокадо',
    weight: '110',
    price:160,
    img: getImage('rolls', 'Ролл_с_авокадо.png'),  // Путь к картинке в public/images

  },
  {
    id: 3,
    pieces: 8,
    name: 'Ролл с лососем',
    description: 'Нори, рис, лосось',
    weight: '110',
    price: 200,
    img: getImage('rolls', 'Ролл_с_лососем.png'),  // Путь к картинке в public/images

  },
  {
    id: 4,
    pieces: 8,
    name: 'Ролл с креветкой',
    description: 'Нори, рис, креветка',
    weight: '110',
    price: 210,
    img: getImage('rolls', 'Ролл_с_креветкой.png'),  // Путь к картинке в public/images

  },
  {
    id: 5,
    pieces: 8,
    name: ' Ролл с угрем',
    description: 'Нори, рис, угорь',
    weight: '110',
    price: 210,
    img: getImage('rolls', 'Ролл_с_угрем.png'),  // Путь к картинке в public/images
  },
  {
    id: 6,
    pieces: 8,
    name: 'Фила классик',
    description: 'Нори, рис, творожный сыр, лосось',
    weight: '240',
    price: 390,
    img: getImage('rolls', 'Фила_Классик.png'),  // Путь к картинке в public/images

  },
  {
    id: 7,
    pieces: 8,
    name: 'Фила Лайт',
    description: 'Нори, рис, творожный сыр, лосось, огурец',
    weight: '240',
    price: 390,
    img: getImage('rolls', 'Фила_лайт.png'),  // Путь к картинке в public/images

  },
  {
    id: 8,
    pieces: 8,
    name: 'Калифорния лосось',
    description: 'Нори, рис, лосось, авокадо, огурец, майонез, икра масаго',
    weight: '230',
    price: 330,
    img: getImage('rolls', 'Калифорния_лосось.png'),  // Путь к картинке в public/images

  },
  {
    id: 9,
    pieces: 8,
    name: 'Калифорния краб',
    description: 'нори, рис, краб, авокадо, огурец, майонез, икра масагоКреветка, авокадо, рис.',
    weight: '230',
    price: 300,
    img: getImage('rolls', 'Калифорния_краб.png'),  // Путь к картинке в public/images

  },
  {
    id: 10,
    pieces: 8,
    name: 'Калифорния креветка',
    description: 'Нори, рис, креветка, авокадо, огурец, майонез, икра масаго',
    weight: '230',
    price: 340,
    img: getImage('rolls', 'Калифорния_креветка.png'),  // Путь к картинке в public/images

  },
  {
    id: 11,
    pieces: 8,
    name: 'Лава лосось',
    description: 'Нори, рис, лосось, огурец, творожный сыр, икра масаго',
    weight: '230',
    price: 330,
    img: getImage('rolls', 'Лава.png'),  // Путь к картинке в public/images
  },
  {
    id: 12,
    pieces: 8,
    name: 'Лава краб',
    description: 'Нори, рис, краб, огурец, творожный сыр, икра масаго',
    weight: '230',
    price: 310,
    img: getImage('rolls', 'Лава.png'),  // Путь к картинке в public/images

  },  
  {
    id: 13,
    pieces: 8,
    name: 'Лава креветка',
    description: 'Нори, рис, креветка, огурец, творожный сыр, икра масаго',
    weight: '230',
    price: 340,
    img: getImage('rolls', 'Лава.png'),  // Путь к картинке в public/images

  },  
  {
    id: 14,
    pieces: 8,
    name: 'Аляска',
    description: 'Нори, рис, лосось, творожный сыр, огурец, микс кунжута',
    weight: '220',
    price: 330,
    img: getImage('rolls', 'Аляска.png'),  // Путь к картинке в public/images

  },
  {
    id: 15,
    pieces: 8,
    name: 'Канада',
    description: 'Нори, рис, лосось, угорь, творожный сыр, авокадо, огурец, соус унаги, белый кунжут',
    weight: '250',
    price: 400,
    img: getImage('rolls', 'Канада.png'),  // Путь к картинке в public/images

  },
  {
    id: 16,
    pieces: 8,
    name: 'Микадо',
    description: 'Нори, рис, жареный лосось, творожный сыр, огурец, стружка нори',
    weight: '230',
    price: 330,
    img: getImage('rolls', 'Микадо.png'),  // Путь к картинке в public/images

  },
  {
    id: 17,
    pieces: 8,
    name: 'Тигровая креветка',
    description: 'Нори, рис, креветка, творожный сыр, огурец',
    weight: '250',
    price: 400,
    img: getImage('rolls', 'Тигровая_креветка.png'),  // Путь к картинке в public/images

  },
  {
    id: 18,
    pieces: 8,
    name: 'Сливочный цезарь',
    description: 'Нори, рис, копченая курица, помидор, творожный сыр, лист салата, соус цезарь',
    weight: '230',
    price: 300,
    img: getImage('rolls', 'Сливочный_цезарь.png'),  // Путь к картинке в public/images

  },
  {
    id: 19,
    pieces: 8,
    name: '50/50',
    description: 'Нори, рис, творожный сыр, лосось, угорь, соус унаги, белый кунжут',
    weight: '240',
    price: 400,
    img: getImage('rolls', '5050.png'),  // Путь к картинке в public/images

  },
  {
    id: 20,
    pieces: 8,
    name: 'Нежный',
    description: 'Нори, рис, угорь, творожный сыр, огурец, соус унаги, белый кунжут',
    weight: '230',
    price: 320,
    img: getImage('rolls', 'Нежный.png'),  // Путь к картинке в public/images

  },
  {
    id: 21,
    pieces: 8,
    name: 'Сливочный лосось XL',
    description: 'Сливочный_лосось_XL',
    weight: '210',
    price: 320,
    img: getImage('rolls', 'Сливочный_лосось_XL.png'),  // Путь к картинке в public/images

  },
  {
    id: 22,
    pieces: 8,
    name: 'Сачи',
    description: 'Нори, рис, лосось, творожный сыр, огурец, блин томаго, соус терияки',
    weight: '240',
    price: 330,
    img: getImage('rolls', 'Сачи.png'),  // Путь к картинке в public/images
  },
  {
    id: 23,
    pieces: 8,
    name: 'Чикен',
    description: 'Нори, рис, копченая курица, творожный сыр, огурец, лук фри, соус цезарь',
    weight: '230',
    price: 300,
    img: getImage('rolls', 'Чикен.png'),  // Путь к картинке в public/images

  },
  {
    id: 24,
    pieces: 8,
    name: 'Азия',
    description: 'Нори, рис, лосось, творожный сыр, авокадо, консервированный персик, спайси соус',
    weight: '240',
    price: 350,
    img: getImage('rolls', 'Азия.png'),  // Путь к картинке в public/images

  },
  {
    id: 25,
    pieces: 8,
    name: 'Фьюжн',
    description: 'Нори, рис, креветка, творожный сыр, авокадо, соус манго-чили',
    weight: '230',
    price: 340,
    img: getImage('rolls', 'Фьюжн.png'),  // Путь к картинке в public/images

  },
  {
    id: 26,
    pieces: 8,
    name: 'Веган ролл',
    description: 'Нори, рис, лист салата, помидор, огурец, авокадо',
    weight: '200',
    price: 250,
    img: getImage('rolls', 'Веган.png'),  // Путь к картинке в public/images
  },
  {
    id: 27,
    pieces: 8,
    name: 'Император',
    description: 'Нори, рис, жареный лосось, творожный сыр, блин томаго, икра масаго, имитированная красная икра',
    weight: '240',
    price: 340,
    img: getImage('rolls', 'Император.png'),  // Путь к картинке в public/images

  },
  {
    id: 28,
    pieces: 8,
    name: 'Запеченная курица',
    description: 'Нори, рис, копченая курица, спайси соус, икра масаго, соус для запекания',
    weight: '270',
    price: 300,
    img: getImage('rolls', 'Запеченная_курица.png'),  // Путь к картинке в public/images

  },
  {
    id: 29,
    pieces: 8,
    name: 'Запеченный угорь',
    description: 'Нори, рис, угорь, авокадо, соус для запекания',
    weight: '250',
    price: 320,
    img: getImage('rolls', 'Запеченный_угорь.png'),  // Путь к картинке в public/images

  },
  {
    id: 30,
    pieces: 8,
    name: 'Запеченный лосось',
    description: 'Нори, рис, лосось, огурец, соус для запекания',
    weight: '270',
    price: 320,
    img: getImage('rolls', 'Запеченный_лосось.png'),  // Путь к картинке в public/images

  },
  {
    id: 31,
    pieces: 8,
    name: 'Запеченный краб',
    description: 'Нори, рис, краб, огурец, соус для запекания',
    weight: '270',
    price: 300,
    img: getImage('rolls', 'Запеченный_краб.png'),  // Путь к картинке в public/images

  },
  {
    id: 32,
    pieces: 8,
    name: 'Тропик',
    description: 'Нори, рис, копченая курица, консервированный ананас, соус для запекания',
    weight: '290',
    price: 320,
    img: getImage('rolls', 'Тропик.png'),  // Путь к картинке в public/images

  },
  {
    id: 33,
    pieces: 8,
    name: 'Цыпочка',
    description: 'Нори, рис, копченая курица, творожный сыр, огурец, лук фри, соус для запекания, соус терияки',
    weight: '250',
    price: 310,
    img: getImage('rolls', 'Цыпочка.png'),  // Путь к картинке в public/images

  },
  {
    id: 34,
    pieces: 8,
    name: 'Запеченная креветка',
    description: 'Нори, рис, креветка, творожный сыр, авокадо, соус для запекания, соус сладкий чили',
    weight: '270',
    price: 330,
    img: getImage('rolls', 'Запеченная_креветка.png'),  // Путь к картинке в public/images

  },
  {
    id: 35,
    pieces: 8,
    name: 'Эби Хот',
    description: 'Нори, рис, креветка, спайси соус, зеленый лук',
    weight: '290',
    price: 340,
    img: getImage('rolls', 'Эби_Хот.png'),  // Путь к картинке в public/images

  },
  {
    id: 36,
    pieces: 8,
    name: 'Горячий лосось',
    description: 'нори, рис, лосось, творожный сыр, огурец',
    weight: '290',
    price: 340,
    img: getImage('rolls', 'Горячий_лосось.png'),  // Путь к картинке в public/images

  },
  {
    id: 37,
    pieces: 8,
    name: 'Лавия',
    description: 'Нори, рис, копченая курица, плавленый сыр, помидор',
    weight: '280',
    price: 300,
    img: getImage('rolls', 'Лавия.png'),  // Путь к картинке в public/images

  },
  {
    id: 38,
    pieces: 8,
    name: 'Мадагаскар',
    description: 'Нори, рис, творожный сыр, угорь, авокадо, огурец, икра масаго',
    weight: '300',
    price: 360,
    img: getImage('rolls', 'Мадагаскар.png'),  // Путь к картинке в public/images

  },
  {
    id: 39,
    pieces: 8,
    name: 'Бангкок',
    description: 'Нори, рис, творожный сыр, имбирь, авокадо, креветка, лосось',
    weight: '310',
    price: 390,
    img: getImage('rolls', 'Бангкок.png'),  // Путь к картинке в public/images

  },
  {
    id: 40,
    pieces: 8,
    name: 'Горячий краб',
    description: 'Нори, рис, плавленый сыр, краб, огурец, авокадо, икра масаго',
    weight: '300',
    price: 350,
    img: getImage('rolls', 'Горячий_краб.png'),  // Путь к картинке в public/images

  },
  
  
];

export const sets = [
  {
    id: 100,
    pieces: 8,
    name: 'Хит',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 101,
    pieces: 8,
    name: 'Япония',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 102,
    pieces: 8,
    name: 'Запеченный',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 103,
    pieces: 8,
    name: 'Запеченный 2',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 104,
    pieces: 8,
    name: 'Классический',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 105,
    pieces: 8,
    name: 'Токио',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 106,
    pieces: 8,
    name: 'Премиум',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 107,
    pieces: 8,
    name: 'Биг Хот',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 108,
    pieces: 8,
    name: 'Пекин',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 109,
    pieces: 8,
    name: 'Ёку',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 110,
    pieces: 8,
    name: 'Якудза',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 111,
    pieces: 8,
    name: 'Пати',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  {
    id: 112,
    pieces: 8,
    name: 'Мега',
    description: 'Роллы и пицца.',
    weight: '800',
    price: 700,
    img: getImage("IMG_5301-Photoroom.png"),
  },
  

];

