import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class ToddlerDataService {
  private toddlerData = [
    {
      topic: 'choose-kindergarten',
      title: 'Как выбрать детский сад',
      description: 'Где найти информацию о государственных и частных детских садах Вильнюса',
      imgSRC: './../../../assets/toddler-imgs/christopher-ryan-JoS5xzulJx4-unsplash.jpg',
    },
    {
      topic: 'kindergarten-price',
      title: 'Сколько стоит сад',
      description: 'И как его оплачивать',
      imgSRC: './../../../assets/toddler-imgs/kelly-sikkema-CbZC2KVnK8s-unsplash.jpg',
    },
    {
      topic: 'kindergarten-application',
      title: 'Как написать заявление в сад',
      description: 'А также о переводе из одного сада в другой',
      imgSRC: './../../../assets/toddler-imgs/erika-fletcher-YfNWGrQI3a4-unsplash.jpg',
    },
    {
      topic: 'kindergarten-documents',
      title: 'Какие документы нужны для сада',
      description: 'Кого страхует Содра',
      imgSRC: './../../../assets/toddler-imgs/sigmund-TJxotQTUr8o-unsplash.jpg',
    },
    {
      topic: 'kids-health',
      title: 'Ребенок и здравоохранение',
      description: 'Как прикрепить ребенка к поликлинике',
      imgSRC: './../../../assets/toddler-imgs/cdc-TDoPeUSOD1c-unsplash.jpg',
    },
    {
      topic: 'kids-money',
      title: 'Как оформить детские деньги',
      description: 'Инструкция по оформлению выплаты 80 евро на детей до 18 лет',
      imgSRC: './../../../assets/toddler-imgs/aditya-romansa-5zp0jym2w9M-unsplash.jpg',
    },
    {
      topic: 'kids-entertainment',
      title: 'Развлечения для малыша',
      description: 'Игровые зоны, кафе с детскими комнатами',
      imgSRC: './../../../assets/toddler-imgs/olivia-bauso-VQLyz0CpVFM-unsplash.jpg',
    },
    {
      topic: 'kids-activities',
      title: 'Развитие малыша',
      description: 'Творческие занятия и спортивные кружки в Вильнюе',
      imgSRC: './../../../assets/toddler-imgs/marisa-howenstine-Cq9slNxV8YU-unsplash.jpg',
    },
    {
      topic: 'kids-pools',
      title: 'Бассейны для малышей',
      description: 'Адреса и контакты',
      imgSRC: './../../../assets/toddler-imgs/lavi-perchik-ksGmUF1aE2I-unsplash.jpg',
    },
  ];

  public getData() {
    return this.toddlerData;
  }
}
