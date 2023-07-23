import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class PregnancyDataService {
  private pregnancyData = [
    {
      topic: 'registration',
      title: 'Куда встать на учёт',
      description: 'Информация про государственные и частные клиники, в которых можно вести наблюдение по беременности',
      imgSRC: './../../../assets/pregnancy-imgs/pablo-heimplatz-M1doNY5gdZs-unsplash.jpg',
    },
    {
      topic: 'hospitals',
      title: 'Роддома Вильнюса',
      description: 'Отзывы, список вещей в роддом, партнерские роды, прививки в роддоме...',
      imgSRC: './../../../assets/pregnancy-imgs/luana-azevedo-2_pncwO-AwY-unsplash.jpg',
    },
    {
      topic: 'price',
      title: 'Стоимость родов',
      description: 'Здесь вы можете найти приблизительную стоимость родов в роддомах Вильнюса',
      imgSRC: './../../../assets//pregnancy-imgs/patricia-prudente--P2djqAwM8U-unsplash.jpg',
    },
    {
      topic: 'insurance',
      title: 'Как оформить страховку в Содре',
      description: 'Как оформить страховку через регистрацию Veiklą и через Биржу труда',
      imgSRC: './../../../assets/pregnancy-imgs/zach-lucero-fwjsBPbRm4g-unsplash.jpg',
    },
    {
      topic: 'benefits',
      title: 'Пособия для родителей',
      description: 'Какие дородовые и послеродовые выплаты могут получить родители',
      imgSRC: './../../../assets/pregnancy-imgs/priscilla-du-preez-nF8xhLMmg0c-unsplash.jpg',
    },
  ];

  public getData() {
    return this.pregnancyData;
  }
}
