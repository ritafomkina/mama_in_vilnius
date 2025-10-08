import { Topic } from '@models';

export const TOPICS: Topic[] = [
    {
        id: 'pregnancy',
        title: 'Мама беременна',
        topics: [
            {
                id: 'monitoring',
                title: 'Наблюдение по беременности',
                topics: [
                    {
                        id: 'ua',
                        title: 'Мама из Украины',
                        articlePath: 'articles/pregnancy/monitoring/ua',
                    },
                    {
                        id: 'bel',
                        title: 'Мама из Беларуси',
                        articlePath: 'articles/pregnancy/monitoring/bel',
                    },
                    {
                        id: 'ru',
                        title: 'Мама из России',
                        articlePath: 'articles/pregnancy/monitoring/ru',
                    },
                ],
            },
            {
                id: 'hospitals',
                title: 'Роддома Вильнюса',
                articlePath: 'articles/pregnancy/hospitals',
            },
            {
                id: 'price',
                title: 'Стоимость родов',
                topics: [
                    {
                        id: 'ua',
                        title: 'Мама из Украины',
                        articlePath: 'articles/pregnancy/price/ua',
                    },
                    {
                        id: 'bel',
                        title: 'Мама из Беларуси',
                        articlePath: 'articles/pregnancy/price/bel',
                    },
                    {
                        id: 'ru',
                        title: 'Мама из России',
                        articlePath: 'articles/pregnancy/price/ru',
                    },
                ],
            },
            {
                id: 'doulas',
                title: 'Доулы и курсы для беременных',
                articlePath: 'articles/pregnancy/doulas',
            },
            {
                id: 'benefits',
                title: 'Выплаты беременным',
                articlePath: 'articles/pregnancy/benefits',
            },
            {
                id: 'insurance',
                title: 'Страховка для мамы',
                articlePath: 'articles/pregnancy/insurance',
            },
            {
                id: 'veikla',
                title: 'Страховка через ИП. Как оформить Вейклу',
                articlePath: 'articles/pregnancy/veikla',
            },
        ],
    },
    {
        id: 'newborn',
        title: 'Mалыш родился',
        topics: [
            {
                id: 'babyshealth',
                title: 'Здоровье малыша',
                articlePath: 'articles/newborn/babyshealth',
            },
            {
                id: 'mamashealth',
                title: 'Здоровье мамы',
                articlePath: 'articles/newborn/mamashealth',
            },
            {
                id: 'documents',
                title: 'Какие документы оформить малышу',
                topics: [
                    {
                        id: 'birth-certificate',
                        title: 'Свидетельство о рождении',
                        articlePath:
                            'articles/newborn/documents/birth-certificate',
                    },
                    {
                        id: 'citizenship-documents',
                        title: 'Документы страны гражданства',
                        topics: [
                            {
                                id: 'ua',
                                title: 'Мама из Украины',
                                articlePath:
                                    'articles/newborn/documents/citizenship-documents/ua',
                            },
                            {
                                id: 'bel',
                                title: 'Мама из Беларуси',
                                articlePath:
                                    'articles/newborn/documents/citizenship-documents/bel',
                            },
                            {
                                id: 'ru',
                                title: 'Мама из России',
                                articlePath:
                                    'articles/newborn/documents/citizenship-documents/ru',
                            },
                        ],
                    },
                    {
                        id: 'residence-permit',
                        title: 'ВНЖ',
                        topics: [
                            {
                                id: 'ua',
                                title: 'Мама из Украины',
                                articlePath:
                                    'articles/newborn/documents/residence-permit/ua',
                            },
                            {
                                id: 'bel',
                                title: 'Мама из Беларуси',
                                articlePath:
                                    'articles/newborn/documents/residence-permit/bel',
                            },
                            {
                                id: 'ru',
                                title: 'Мама из России',
                                articlePath:
                                    'articles/newborn/documents/residence-permit/ru',
                            },
                        ],
                    },
                ],
            },
            {
                id: 'dads-benefits',
                title: 'Бонусы для папы',
                articlePath: 'articles/newborn/dads-benefits',
            },
            {
                id: 'european-insurance',
                title: 'Как оформить Европейскую карту медицинского страхования',
                articlePath: 'articles/newborn/european-insurance',
            },
            {
                id: 'newborn-consultants',
                title: 'Консультанты по ГВ, помощь с новорожденными',
                articlePath: 'articles/newborn/newborn-consultants',
            },
        ],
    },
    {
        id: 'toddler',
        title: 'Тоддлер',
        topics: [
            {
                id: 'kingergarten',
                title: 'Детский сад',
                topics: [
                    {
                        id: 'application',
                        title: 'Как подать заявление',
                        articlePath:
                            'articles/toddler/kingergarten/application',
                    },
                    {
                        id: 'choice',
                        title: 'Как выбрать сад',
                        articlePath: 'articles/toddler/kingergarten/choice',
                    },
                    {
                        id: 'kg-documents',
                        title: 'Какие документы нужны',
                        articlePath:
                            'articles/toddler/kingergarten/kg-documents',
                    },
                    {
                        id: 'kg-price',
                        title: 'Стоимость',
                        articlePath: 'articles/toddler/kingergarten/kg-price',
                    },
                    {
                        id: 'change',
                        title: 'Как поменять детский сад',
                        articlePath: 'articles/toddler/kingergarten/change',
                    },
                ],
            },
            {
                id: 'activities',
                title: 'Развлечения',
                topics: [
                    {
                        id: 'education',
                        title: 'Развлечения и развивашки',
                        articlePath: 'articles/toddler/activities/education',
                    },
                    {
                        id: 'playgrounds',
                        title: 'Классные детские площадки',
                        articlePath: 'articles/toddler/activities/playgrounds',
                    },
                ],
            },
            {
                id: 'animators',
                title: 'Аниматоры',
                articlePath: 'articles/toddler/animators',
            },
            {
                id: 'kids-benefits',
                title: 'Пособия',
                articlePath: 'articles/toddler/kids-benefits',
            },
            {
                id: 'health',
                title: 'Здоровье',
                articlePath: 'articles/toddler/health',
            },
            {
                id: 'dentists',
                title: 'Чайлд-френдли и круглосуточные стоматологии',
                articlePath: 'articles/toddler/dentists',
            },
            {
                id: 'books',
                title: 'Книги',
                articlePath: 'articles/toddler/books',
            },
            {
                id: 'pools',
                title: 'Бассейны',
                articlePath: 'articles/toddler/pools',
            },
        ],
    },
    {
        id: 'students',
        title: 'Школьник',
        topics: [
            {
                id: 'clubs',
                title: 'Компенсация кружков',
                articlePath: 'articles/students/clubs',
            },
            {
                id: 'school',
                title: 'Школы',
                topics: [
                    {
                        id: 'school-choice',
                        title: 'Как выбрать школу',
                        articlePath: 'articles/students/school/school-choice',
                    },
                    {
                        id: 'school-application',
                        title: 'Как подать заявление в школу',
                        articlePath:
                            'articles/students/school/school-application',
                    },
                ],
            },
        ],
    },
    {
        id: 'help-ukrainian-moms',
        title: 'Помощь мамам из Украины в Литве',
        articlePath: 'articles/help-ukrainian-moms',
    },
    {
        id: 'say-thank-you',
        title: 'Как сказать спасибо автору гайда',
        articlePath: 'articles/say-thank-you',
    },
];
