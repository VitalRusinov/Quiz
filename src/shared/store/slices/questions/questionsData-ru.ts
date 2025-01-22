import { IQuestion } from './types';

export const questionsData_ru: IQuestion[] = [
  {
    id: 1,
    question: 'Что такое операционная система?',
    answers: [
      {
        answerId: 1,
        answer:
          'Это просто программа на компьютере, как и другие - Word или Chrome',
      },
      {
        answerId: 2,
        answer:
          'Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный',
      },
      {
        answerId: 3,
        answer:
          'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем',
      },
      {
        answerId: 4,
        answer: "Нет такого понятия, есть понятие 'файловая система'",
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 2,
    question: 'Является ли Android операционной системой?',
    answers: [
      {
        answerId: 1,
        answer:
          'Да, это такая же ОС, как и другие, просто для мобильных девайсов',
      },
      { answerId: 2, answer: 'Нет, операционные системы бывают только для ПК' },
      {
        answerId: 3,
        answer:
          'Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные',
      },
      {
        answerId: 4,
        answer: 'Это домашняя страничка в настройках вашего браузера',
      },
    ],
    correctAnswerId: 1,
  },
  {
    id: 3,
    question: 'Что такое процессор компьютера?',
    answers: [
      {
        answerId: 1,
        answer:
          'Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки',
      },
      {
        answerId: 2,
        answer: 'Это общее название всех комплектующих компьютера',
      },
      {
        answerId: 3,
        answer:
          'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств',
      },
      {
        answerId: 4,
        answer:
          'Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 4,
    question: 'Какие бывают разрядности у современных процессоров?',
    answers: [
      { answerId: 1, answer: '32 и 64 бита' },
      { answerId: 2, answer: '12 и 32 бита' },
      { answerId: 3, answer: '15 и 32 бита' },
      { answerId: 4, answer: '86 и 64 бита' },
    ],
    correctAnswerId: 1,
  },
  {
    id: 5,
    question: 'Какой тип процессора чаще всего используют мобильные девайсы?',
    answers: [
      { answerId: 1, answer: 'iOS использует Intel, остальные используют AMD' },
      { answerId: 2, answer: 'Чаще всего используют Intel' },
      { answerId: 3, answer: 'Чаще всего используют AMD' },
      { answerId: 4, answer: 'Чаще всего используют ARM' },
    ],
    correctAnswerId: 4,
  },
  {
    id: 6,
    question: 'Для чего компьютеру нужна RAM?',
    answers: [
      { answerId: 1, answer: 'Для быстрого доступа к данным' },
      { answerId: 2, answer: 'Для долгосрочного хранения данных' },
      { answerId: 3, answer: 'Для правильной фрагментации памяти' },
      { answerId: 4, answer: 'Для дефрагментации данных' },
    ],
    correctAnswerId: 1,
  },
  {
    id: 7,
    question: 'Чем отличается HDD от SSD?',
    answers: [
      {
        answerId: 1,
        answer:
          'HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее',
      },
      {
        answerId: 2,
        answer:
          'HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее',
      },
      {
        answerId: 3,
        answer:
          'SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее',
      },
      {
        answerId: 4,
        answer:
          'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее',
      },
    ],
    correctAnswerId: 4,
  },
  {
    id: 8,
    question: 'Как отличаются между собой USB?',
    answers: [
      { answerId: 1, answer: 'Бывают только USB 2.0 и 3.2' },
      { answerId: 2, answer: 'Бывают только micro-USB и mini-USB' },
      {
        answerId: 3,
        answer:
          'USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2).',
      },
      {
        answerId: 4,
        answer:
          'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)',
      },
    ],
    correctAnswerId: 4,
  },
  {
    id: 9,
    question: 'Какой файловой системы не существует?',
    answers: [
      { answerId: 1, answer: 'Fat' },
      { answerId: 2, answer: 'NTFS' },
      { answerId: 3, answer: 'APFS' },
      { answerId: 4, answer: 'BolSFS' },
    ],
    correctAnswerId: 4,
  },
];
