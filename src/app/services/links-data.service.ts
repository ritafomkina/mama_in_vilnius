import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class LinksDataService {
  private linksData = [
    {
      topic: 'chats',
      title: 'Чаты в телеграме',
      description: '',
      imgSRC: '',
    },
    {
      topic: 'kids-goods',
      title: 'Детские товары, игрушки, одежда, книги',
      description: '',
      imgSRC: '',
    },
    {
      topic: 'reuse',
      title: 'Б/у вещи',
      description: '',
      imgSRC: '',
    },
    {
      topic: 'second-hands',
      title: 'Секонд-хенды и ярмарки',
      description: '',
      imgSRC: '',
    },
    {
      topic: 'babysitters',
      title: 'Няни в Вильнюсе',
      description: '',
      imgSRC: '',
    },
    {
      topic: 'dentists',
      title: 'Child-friendly стоматологии в Вильнюсе',
      description: '',
      imgSRC: '',
    },
    {
      topic: 'feedbacks',
      title: 'Отзывы о врачах в Литве',
      description: '',
      imgSRC: '',
    },
    {
      topic: 'helpin-lt',
      title: 'Помочь мамам и деткам из Украины в Литве',
      description: '',
      imgSRC: '',
    },
    {
      topic: 'helpin-ua',
      title: 'Помочь мамам в Украине',
      description: '',
      imgSRC: '',
    },

  ];

  public getData() {
    return this.linksData;
  }
}
