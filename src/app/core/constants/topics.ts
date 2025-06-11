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
                        topicPath: 'pregnancy/monitoring/ua',
                    },
                    {
                        id: 'bel',
                        title: 'Мама из Беларуси',
                        topicPath: 'pregnancy/monitoring/bel',
                    },
                    {
                        id: 'ru',
                        title: 'Мама из России',
                        topicPath: 'pregnancy/monitoring/ru',
                    },
                ],
            },
            {
                id: 'hospitals',
                title: 'Роддома Вильнюса',
                topicPath: 'pregnancy/hospitals',
            },
            {
                id: 'price',
                title: 'Стоимость родов',
                topics: [
                    {
                        id: 'ua',
                        title: 'Мама из Украины',
                        topicPath: 'pregnancy/price/ua',
                    },
                    {
                        id: 'bel',
                        title: 'Мама из Беларуси',
                        topicPath: 'pregnancy/price/bel',
                    },
                    {
                        id: 'ru',
                        title: 'Мама из России',
                        topicPath: 'pregnancy/price/ru',
                    },
                ],
            },
            {
                id: 'doulas',
                title: 'Доулы и курсы для беременных',
                topicPath: 'pregnancy/doulas',
            },
            {
                id: 'benefits',
                title: 'Выплаты беременным',
                topicPath: 'pregnancy/benefits',
            },
            {
                id: 'insurance',
                title: 'Страховка для мамы',
                topicPath: 'pregnancy/insurance',
            },
            {
                id: 'veikla',
                title: 'Страховка через ИП. Как оформить Вейклу',
                topicPath: 'pregnancy/veikla',
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
                topicPath: 'newborn/babyshealth',
            },
            {
                id: 'mamashealth',
                title: 'Здоровье мамы',
                topicPath: 'newborn/mamashealth',
            },
            {
                id: 'documents',
                title: 'Какие документы оформить малышу',
                topics: [
                    {
                        id: 'birth-certificate',
                        title: 'Свидетельство о рождении',
                        topicPath: 'newborn/documents/birth-certificate',
                    },
                    {
                        id: 'citizenship-documents',
                        title: 'Документы страны гражданства',
                        topics: [
                            {
                                id: 'ua',
                                title: 'Мама из Украины',
                                topicPath:
                                    'newborn/documents/citizenship-documents/ua',
                            },
                            {
                                id: 'bel',
                                title: 'Мама из Беларуси',
                                topicPath:
                                    'newborn/documents/citizenship-documents/bel',
                            },
                            {
                                id: 'ru',
                                title: 'Мама из России',
                                topicPath:
                                    'newborn/documents/citizenship-documents/ru',
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
                                topicPath:
                                    'newborn/documents/residence-permit/ua',
                            },
                            {
                                id: 'bel',
                                title: 'Мама из Беларуси',
                                topicPath:
                                    'newborn/documents/residence-permit/bel',
                            },
                            {
                                id: 'ru',
                                title: 'Мама из России',
                                topicPath:
                                    'newborn/documents/residence-permit/ru',
                            },
                        ],
                    },
                ],
            },
            {
                id: 'dads-benefits',
                title: 'Бонусы для папы',
                topicPath: 'newborn/dads-benefits',
            },
            {
                id: 'european-insurance',
                title: 'Как оформить Европейскую карту медицинского страхования',
                topicPath: 'newborn/european-insurance',
            },
            {
                id: 'newborn-consultants',
                title: 'Консультанты по ГВ, помощь с новорожденными',
                topicPath: 'newborn/newborn-consultants',
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
                        topicPath: 'toddler/kingergarten/application',
                    },
                    {
                        id: 'choice',
                        title: 'Как выбрать сад',
                        topicPath: 'toddler/kingergarten/choice',
                    },
                    {
                        id: 'kg-documents',
                        title: 'Какие документы нужны',
                        topicPath: 'toddler/kingergarten/kg-documents',
                    },
                    {
                        id: 'kg-price',
                        title: 'Стоимость',
                        topicPath: 'toddler/kingergarten/kg-price',
                    },
                    {
                        id: 'change',
                        title: 'Как поменять детский сад',
                        topicPath: 'toddler/kingergarten/change',
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
                        topicPath: 'toddler/activities/education',
                    },
                    {
                        id: 'playgrounds',
                        title: 'Классные детские площадки',
                        topicPath: 'toddler/activities/playgrounds',
                    },
                ],
            },
            {
                id: 'animators',
                title: 'Аниматоры',
                topicPath: 'toddler/animators',
            },
            {
                id: 'kids-benefits',
                title: 'Пособия',
                topicPath: 'toddler/kids-benefits',
            },
            {
                id: 'health',
                title: 'Здоровье',
                topicPath: 'toddler/health',
            },
            { id: 'books', title: 'Книги', topicPath: 'toddler/books' },
            {
                id: 'pools',
                title: 'Бассейны',
                topicPath: 'toddler/pools',
            },
            { id: 'kids-benefits', title: 'Пособия' },
            { id: 'health', title: 'Здоровье' },
            {
                id: 'dentists',
                title: 'Чайлд-френдли и круглосуточные стоматологии',
            },
            { id: 'books', title: 'Книги' },
            { id: 'pools', title: 'Бассейны' },
        ],
    },
    {
        id: 'students',
        title: 'Школьник',
        topics: [
            {
                id: 'clubs',
                title: 'Компенсация кружков',
                topicPath: 'students/clubs',
            },
            {
                id: 'school',
                title: 'Школы',
                topics: [
                    {
                        id: 'school-choice',
                        title: 'Как выбрать школу',
                        topicPath: 'students/school/school-choice',
                    },
                    {
                        id: 'school-application',
                        title: 'Как подать заявление в школу',
                        topicPath: 'students/school/school-application',
                    },
                ],
            },
        ],
    },
    {
        id: 'help-ukrainian-moms',
        title: 'Помощь мамам из Украины в Литве',
    },
    {
        id: 'say-thank-you',
        title: 'Как сказать спасибо автору гайда',
    },
];
