import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class BirthDataService {
  private birthData = [
    {
      topic: 'clinic',
      title: 'Как прикрепиться к поликлинике',
      description: 'Инструкция, список государственных и частных клиник Вильнюса, календарь прививок',
      imgSRC: './../../../assets/birth-imgs/jonathan-borba-w-RTffXK9tM-unsplash.jpg',
    },
    {
      topic: 'documents',
      title: 'Какие документы оформить малышу',
      description: 'Инструкция по оформлению основных документов (от свидетельства о рождении до ВНЖ)',
      imgSRC: './../../../assets/birth-imgs/british-baby-box-CoMU052u47c-unsplash.jpg',
    },
    {
      topic: 'health',
      title: 'Здоровье мамы после родов',
      description: 'Куда обращаться в случае проблем с грудным вскармливанием',
      imgSRC: './../../../assets/birth-imgs/fanny-renaud-oiOa9Ik8HYw-unsplash.jpg',
    },
    {
      topic: 'dads-benefits',
      title: 'Бонусы для пап',
      description: 'Дополнительный выходной день и пособие по отцовству',
      imgSRC: './../../../assets/birth-imgs/jonathan-borba-8tvzA0WymTA-unsplash.jpg',
    },
  ];

  public getData() {
    return this.birthData;
  }
}
