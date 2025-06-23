import { Topic } from '@models';

const COUNTRY_OPTIONS: Topic[] = [
    {
        id: 'ua',
        title: 'Мама из Украины',
    },
    {
        id: 'bel',
        title: 'Мама из Беларуси',
    },
    {
        id: 'ru',
        title: 'Мама из России',
    },
];

export const TOPICS: Topic[] = [
    {
        id: 'pregnancy',
        title: 'Мама беременна',
        topics: [
            {
                id: 'monitoring',
                title: 'Наблюдение по беременности',
                topics: COUNTRY_OPTIONS,
            },
            { id: 'hospitals', title: 'Роддома Вильнюса' },

            {
                id: 'price',
                title: 'Стоимость родов',
                topics: COUNTRY_OPTIONS,
            },
            { id: 'doulas', title: 'Доулы и курсы для беременных' },
            { id: 'benefits', title: 'Выплаты беременным' },
            { id: 'insurance', title: 'Страховка для мамы' },
            { id: 'veikla', title: 'Страховка через ИП. Как оформить Вейклу' },
        ],
    },
    {
        id: 'newborn',
        title: 'Mалыш родился',
        topics: [
            { id: 'babyshealth', title: 'Здоровье малыша' },
            { id: 'mamashealth', title: 'Здоровье мамы' },
            {
                id: 'documents',
                title: 'Какие документы оформить малышу',
                topics: [
                    {
                        id: 'birth-certificate',
                        title: 'Свидетельство о рождении',
                    },
                    {
                        id: 'citizenship-documents',
                        title: 'Документы страны гражданства',
                        topics: COUNTRY_OPTIONS,
                    },
                    {
                        id: 'residence-permit',
                        title: 'ВНЖ',
                        topics: COUNTRY_OPTIONS,
                    },
                ],
            },
            { id: 'dads-benefits', title: 'Бонусы для папы' },
            {
                id: 'european-insurance',
                title: 'Как оформить Европейскую карту медицинского страхования',
            },
            {
                id: 'newborn-consultants',
                title: 'Консультанты по ГВ, помощь с новорожденными',
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
                    },
                    {
                        id: 'choice',
                        title: 'Как выбрать сад',
                    },
                    {
                        id: 'kg-documents',
                        title: 'Какие документы нужны',
                    },
                    {
                        id: 'kg-price',
                        title: 'Стоимость',
                    },
                    {
                        id: 'change',
                        title: 'Как поменять детский сад',
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
                    },
                    {
                        id: 'playgrounds',
                        title: 'Классные детские площадки',
                    },
                ],
            },
            {
                id: 'animators',
                title: 'Аниматоры',
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
            { id: 'clubs', title: 'Компенсация кружков' },
            {
                id: 'school',
                title: 'Школы',
                topics: [
                    { id: 'school-choice', title: 'Как выбрать школу' },
                    {
                        id: 'school-application',
                        title: 'Как подать заявление в школу',
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
