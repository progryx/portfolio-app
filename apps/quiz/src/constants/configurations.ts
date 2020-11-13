import A_DATA_RAM from '@assets/images/pc-items/a-data.jpg';
import AMD_A8_9600 from '@assets/images/pc-items/amd-a8-9600.jpg';
import AMD_RAM_R7 from '@assets/images/pc-items/amd-ram-r7.jpg';
import AMD_RYZEN_3 from '@assets/images/pc-items/amd-ryzen-3.jpg';
import AMD_RYZEN_9 from '@assets/images/pc-items/amd-ryzen-9.jpg';
import ASROCK_FATALITY from '@assets/images/pc-items/asrock-fatality-450.jpg';
import ASUS_GTX_1050 from '@assets/images/pc-items/asus-gtx-1050.jpg';
import INNO_3D from '@assets/images/pc-items/inno3d-710.jpg';
import KINGSTON_FURY from '@assets/images/pc-items/kingston-fury.jpg';
import MSI_A320M from '@assets/images/pc-items/msi-a320m.jpg';
import MSI_MPG550 from '@assets/images/pc-items/msi-mpg-550.png';
import RTX_3090 from '@assets/images/pc-items/rtx-3090.jpg';

export type ConfigurationItem = {
  type: 'processor' | 'motherboard' | 'RAM' | 'videocard';
  brand: 'AMD' | 'Intel' | 'MSI' | 'ASRock' | 'Kingston' | 'A-Data' | 'INNO3D' | 'ASUS';
  name: string;
  description: string;
  image: string;
  price: number;
};

export const configurations: ConfigurationItem[] = [
  {
    type: 'processor',
    brand: 'AMD',
    name: 'A8-9600',
    description:
      'Процессор AMD A8-9600 OEM с сокетом типа AM4 привлекает наличием эффективного встроенного видеоядра Radeon R7, способного в большинстве ситуаций заменить по своему функционалу дискретную видеокарту. ',
    price: 3100,
    image: AMD_A8_9600,
  },
  {
    type: 'processor',
    brand: 'AMD',
    name: 'Ryzen 3 3100 OEM',
    description:
      'Процессор AMD Ryzen 3 3100 OEM подходит для работы в составе универсальных домашних или офисных компьютеров. Устройство, имеющее 4 ядра, характеризуется базовой частотой 3600 МГц.',
    price: 8200,
    image: AMD_RYZEN_3,
  },
  {
    type: 'processor',
    brand: 'AMD',
    name: 'Ryzen 9 3900 OEM',
    description:
      'Сотрите границу между элитной производительностью для игр и рабочей станцией для создания контента благодаря самым передовым процессорам для настольных ПК в мире.',
    price: 37000,
    image: AMD_RYZEN_9,
  },
  {
    type: 'motherboard',
    brand: 'MSI',
    name: 'A320M-A PRO',
    description:
      'Соответствующая форм-фактору Micro-ATX материнская плата MSI A320M-A PRO отличается компактностью: габаритные размеры устройства составляют 226x187 мм. ',
    price: 3800,
    image: MSI_A320M,
  },
  {
    type: 'motherboard',
    brand: 'ASRock',
    name: 'Fatal1ty B450 Gaming K4',
    description:
      'Материнская плата ASRock Fatal1ty B450 Gaming K4 – изделие от проверенного производителя. Она станет отличной основой для сборки геймерского компьютера. Вы сможете подобрать мощные комплектующие для установки на данную плату.',
    price: 7100,
    image: ASROCK_FATALITY,
  },
  {
    type: 'motherboard',
    brand: 'MSI',
    name: 'MPG B550 GAMING EDGE WIFI',
    description:
      'Материнская плата MSI MPG B550 GAMING EDGE WIFI может похвастаться встроенным беспроводным контроллером Intel с пропускной способностью до 2,4 Гбит/с.',
    price: 16400,
    image: MSI_MPG550,
  },
  {
    type: 'RAM',
    brand: 'AMD',
    name: 'Radeon R7 Performance Series',
    description:
      'Оперативная память AMD Radeon R7 Performance Series [R744G2133U1S-U] исполнена в широко востребованном форм-факторе DIMM. Ее объем 4 ГБ, а формат соответствует стандарту DDR4.',
    price: 1350,
    image: AMD_RAM_R7,
  },
  {
    type: 'RAM',
    brand: 'Kingston',
    name: 'HyperX FURY Black RGB',
    description:
      'Модуль памяти HyperX FURY DDR4 RGB помогает выразить свой стиль и обеспечивает повышение производительности благодаря частоте до 3466 МГц.',
    price: 6100,
    image: KINGSTON_FURY,
  },
  {
    type: 'RAM',
    brand: 'A-Data',
    name: 'XPG Spectrix D60G',
    description:
      'Модули памяти XPG SPECTRIX D60G DDR4 оснащены неповторимой двойной светодиодной лентой RGB, которая создает самую большую площадь поверхности RGB по сравнению с другими модулями памяти!',
    price: 16600,
    image: A_DATA_RAM,
  },
  {
    type: 'videocard',
    brand: 'INNO3D',
    name: 'GeForce GT 710',
    description:
      'Видеокарта INNO3D GeForce GT 710 Silent LP [N710-1SDV-D3BX] станет для вас отличным выбором, если вы не хотите использовать встроенный видеоадаптер.',
    price: 2800,
    image: INNO_3D,
  },
  {
    type: 'videocard',
    brand: 'ASUS',
    name: 'GeForce GTX 1050 Ti',
    description:
      'Хотите поставить в свой компьютер мощный компонент? Видеокарта ASUS GeForce GTX 1050 Ti Cerberus Advanced Edition [CERBERUS-GTX1050TI-A4G] станет отличным вариантом для игроков',
    price: 11900,
    image: ASUS_GTX_1050,
  },
  {
    type: 'videocard',
    brand: 'MSI',
    name: 'GeForce RTX 3090',
    description:
      'Видеокарта GeForce RTX 3090 демонстрирует колоссальную мощь во всех отношениях, обеспечивая высокий уровень производительности.',
    price: 150000,
    image: RTX_3090,
  },
];
