import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class BirthDataService {
  private birthData = [
    {
      topic: 'clinic',
      title: 'Как прикрепиться к поликлинике',
      description: 'Список государственных и частных клиник Вильнюса, календарь прививок',
      imgSRC: './../../../assets/birth-imgs/jonathan-borba-w-RTffXK9tM-unsplash.jpg',
    },
    {
      topic: 'documents',
      title: 'Какие документы оформить малышу',
      description: 'Как оформить загранпаспорт и ВНЖ ребенку',
      imgSRC: './../../../assets/birth-imgs/british-baby-box-CoMU052u47c-unsplash.jpg',
    },
    {
      topic: 'health',
      title: 'Здоровье мамы',
      description: 'Куда обращаться в случае проблем с грудным вскармливанием. Контакты консультантов по ГВ и доул',
      imgSRC: './../../../assets/birth-imgs/fanny-renaud-oiOa9Ik8HYw-unsplash.jpg',
    },
    {
      topic: 'dads-benefits',
      title: 'Бонусы для пап (и мам)',
      description: 'Дополнительный выходной день и пособие по отцовству',
      imgSRC: './../../../assets/birth-imgs/jonathan-borba-8tvzA0WymTA-unsplash.jpg',
    },
  ];

  public getData() {
    return this.birthData;
  }
}
