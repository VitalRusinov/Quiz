import { Question } from '../types/types';

const questionsData: Question[] = [
  {
    id: 1,
    question: 'Что такое операционная система?',
    answers: [
      'Это просто программа на компьютере, как и другие - Word или Chrome',
      'Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный',
      'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем',
      "Нет такого понятия, есть понятие 'файловая система'",
    ],
    correctAnswer:
      'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем',
  },
  {
    id: 2,
    question: 'Является ли Android операционной системой?',
    answers: [
      'Да, это такая же ОС, как и другие, просто для мобильных девайсов',
      'Нет, операционные системы бывают только для ПК',
      'Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные',
      'Это домашняя страничка в настройках вашего браузера',
    ],
    correctAnswer:
      'Да, это такая же ОС, как и другие, просто для мобильных девайсов',
  },
  {
    id: 3,
    question: 'Что такое процессор компьютера?',
    answers: [
      'Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки',
      'Это общее название всех комплектующих компьютера',
      'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств',
      'Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц',
    ],
    correctAnswer:
      'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств',
  },
  {
    id: 4,
    question: 'Какие бывают разрядности у современных процессоров?',
    answers: ['32 и 64 бита', '12 и 32 бита', '15 и 32 бита', '86 и 64 бита'],
    correctAnswer: '32 и 64 бита',
  },
  {
    id: 5,
    question: 'Какой тип процессора чаще всего используют мобильные девайсы?',
    answers: [
      'iOS использует Intel, остальные используют AMD',
      'Чаще всего используют Intel',
      'Чаще всего используют AMD',
      'Чаще всего используют ARM',
    ],
    correctAnswer: 'Чаще всего используют ARM',
  },
  {
    id: 6,
    question: 'Для чего компьютеру нужна RAM?',
    answers: [
      'Для быстрого доступа к данным',
      'Для долгосрочного хранения данных',
      'Для правильной фрагментации памяти',
      'Для дефрагментации данных',
    ],
    correctAnswer: 'Для быстрого доступа к данным',
  },
  {
    id: 7,
    question: 'Чем отличается HDD от SSD?',
    answers: [
      'HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее',
      'HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее',
      'SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее',
      'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее',
    ],
    correctAnswer:
      'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее',
  },
  {
    id: 8,
    question: 'Как отличаются между собой USB?',
    answers: [
      'Бывают только USB 2.0 и 3.2',
      'Бывают только micro-USB и mini-USB',
      'USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2).',
      'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)',
    ],
    correctAnswer:
      'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)',
  },
  {
    id: 9,
    question: 'Какой файловой системы не существует?',
    answers: ['Fat', 'NTFS', 'APFS', 'BolSFS'],
    correctAnswer: 'BolSFS',
  },
];

export default questionsData;
