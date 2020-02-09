import {Message} from './message.model';

export const MOCKMESSAGES: Message[] = [
  {
    id: '1', 
   subject: 'CIT 366 assignment 1', 
  messageText: 'The grades for this assignment have been posted.', 
   sender: '7'},
  {
    id: '2', 
    subject: 'CIT 366 assignment 3', 
   messageText: 'When is assignment 3 due?', 
    sender: '13'},
  {
    id: '3',
    subject: 'CIT 366 assignment 3 due date',
   messageText: 'Assignment 3 is due on Saturday at 11:30 PM.',
    sender: '7'
  },
  {
    id: '4',
    subject: 'Assignment 3 help',
   messageText: 'Can I meet with you sometime? I need help with assignment 3.',
    sender: '3'
  },
  {
    id: '5', 
    subject: 'Assignment 3 help', 
   messageText: 'I can meet with you today at 4:00 PM in my office.', 
    sender: '7'}
];

