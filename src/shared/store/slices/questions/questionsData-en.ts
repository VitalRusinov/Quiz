import { IQuestion } from './types';

export const questionsData_en: IQuestion[] = [
  {
    id: 1,
    question: 'What is an operating system?',
    answers: [
      {
        answerId: 1,
        answer:
          'It is just a program on a computer, like others such as Word or Chrome.',
      },
      {
        answerId: 2,
        answer:
          'It is an indicator of the type of processor used on the computer, such as 32-bit or 64-bit.',
      },
      {
        answerId: 3,
        answer:
          'It is a set of interrelated programs that manage the computer and interact with the user.',
      },
      {
        answerId: 4,
        answer:
          'There is no such concept; there is a concept of "file system."',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 2,
    question: 'Is Android an operating system?',
    answers: [
      {
        answerId: 1,
        answer:
          'Yes, it is an OS like others, but designed for mobile devices.',
      },
      { answerId: 2, answer: 'No, operating systems are only for PCs.' },
      {
        answerId: 3,
        answer:
          'No, Android is an application installed on a device’s operating system. Different devices have different OSes.',
      },
      { answerId: 4, answer: 'It is the homepage in your browser settings.' },
    ],
    correctAnswerId: 1,
  },
  {
    id: 3,
    question: 'What is a computer processor?',
    answers: [
      {
        answerId: 1,
        answer:
          'It is a block containing a disk drive and many ports for a monitor, keyboard, and mouse.',
      },
      {
        answerId: 2,
        answer: 'It is a general term for all the components of a computer.',
      },
      {
        answerId: 3,
        answer:
          'It is a part of the computer that processes information stored in its own memory or the memory of other devices.',
      },
      {
        answerId: 4,
        answer:
          'It is the overall measure of the computing power of a computer, such as 2.7 GHz.',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 4,
    question: 'What are the bit-widths of modern processors?',
    answers: [
      { answerId: 1, answer: '32 and 64 bits' },
      { answerId: 2, answer: '12 and 32 bits' },
      { answerId: 3, answer: '15 and 32 bits' },
      { answerId: 4, answer: '86 and 64 bits' },
    ],
    correctAnswerId: 1,
  },
  {
    id: 5,
    question: 'What type of processor is most commonly used in mobile devices?',
    answers: [
      { answerId: 1, answer: 'iOS uses Intel, others use AMD.' },
      { answerId: 2, answer: 'Most commonly Intel is used.' },
      { answerId: 3, answer: 'Most commonly AMD is used.' },
      { answerId: 4, answer: 'Most commonly ARM is used.' },
    ],
    correctAnswerId: 4,
  },
  {
    id: 6,
    question: 'Why does a computer need RAM?',
    answers: [
      { answerId: 1, answer: 'For quick data access.' },
      { answerId: 2, answer: 'For long-term data storage.' },
      { answerId: 3, answer: 'For proper memory fragmentation.' },
      { answerId: 4, answer: 'For data defragmentation.' },
    ],
    correctAnswerId: 1,
  },
  {
    id: 7,
    question: 'What is the difference between HDD and SSD?',
    answers: [
      {
        answerId: 1,
        answer:
          'HDD is a solid-state drive with no moving parts. It is cheaper than SSD. HDD works faster.',
      },
      {
        answerId: 2,
        answer:
          'HDD is a solid-state drive with no moving parts. It is more expensive than SSD. HDD works faster.',
      },
      {
        answerId: 3,
        answer:
          'SSD is a solid-state drive with no moving parts. It is cheaper than HDD. SSD works faster.',
      },
      {
        answerId: 4,
        answer:
          'SSD is a solid-state drive with no moving parts. It is more expensive than HDD. SSD works faster.',
      },
    ],
    correctAnswerId: 4,
  },
  {
    id: 8,
    question: 'How do USB types differ?',
    answers: [
      { answerId: 1, answer: 'There are only USB 2.0 and 3.2.' },
      { answerId: 2, answer: 'There are only micro-USB and mini-USB.' },
      {
        answerId: 3,
        answer:
          'USBs differ in bandwidth (micro-USB, mini-USB, lightning, etc.) and shape (USB 2.0, USB 3.2).',
      },
      {
        answerId: 4,
        answer:
          'USBs differ in shape (micro-USB, mini-USB, lightning, etc.) and bandwidth (USB 2.0, USB 3.2).',
      },
    ],
    correctAnswerId: 4,
  },
  {
    id: 9,
    question: 'Which file system does not exist?',
    answers: [
      { answerId: 1, answer: 'Fat' },
      { answerId: 2, answer: 'NTFS' },
      { answerId: 3, answer: 'APFS' },
      { answerId: 4, answer: 'BolSFS' },
    ],
    correctAnswerId: 4,
  },
];
