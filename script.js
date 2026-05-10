// ==================== ДАННЫЕ АВТОМОБИЛЕЙ ====================
const carsData = [
    { id: 1, brand: "BMW", model: "X5", year: 2021, price: 5500000, mileage: 42000, fuel: "Дизель", body: "Внедорожник", imageIcon: "fa-car-side", description: "Полный привод, M пакет, панорамная крыша.", imageUrl: "images/bmw-x5.jpg" },
    { id: 2, brand: "Mercedes-Benz", model: "E 220 d", year: 2020, price: 4800000, mileage: 51000, fuel: "Дизель", body: "Седан", imageIcon: "fa-car", description: "Адаптивный круиз, кожа, подогрев всех сидений.", imageUrl: "images/Mercedes-Benz-E-220-d.webp" },
    { id: 3, brand: "Audi", model: "Q7", year: 2019, price: 4900000, mileage: 68000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-truck", description: "Quattro, 3 ряда сидений, престиж.", imageUrl: "images/Audi-Q7.webp" },
    { id: 4, brand: "Toyota", model: "Camry", year: 2022, price: 3800000, mileage: 22000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "V6, JBL аудиосистема, безопасность.", imageUrl: "images/Toyota-Camry.jpg" },
    { id: 5, brand: "Hyundai", model: "Santa Fe", year: 2021, price: 3200000, mileage: 35000, fuel: "Дизель", body: "Кроссовер", imageIcon: "fa-caravan", description: "Полный привод, богатая комплектация.", imageUrl: "images/Hyundai-Santa-Fe.jpg" },
    { id: 6, brand: "Kia", model: "K5", year: 2022, price: 2800000, mileage: 18000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Стильный дизайн, 180 л.с.", imageUrl: "images/kia-k5.jpg" },
    { id: 7, brand: "BMW", model: "3 series", year: 2020, price: 3700000, mileage: 47000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "M Sport, шумоизоляция.", imageUrl: "images/BMW-3-series.jpg" },
    { id: 8, brand: "Mercedes-Benz", model: "GLE", year: 2022, price: 7800000, mileage: 15000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-car-side", description: "AMG пакет, неоновая подсветка.", imageUrl: "images/Mercedes-Benz-GLE.webp" },
    { id: 9, brand: "Audi", model: "A6", year: 2021, price: 5200000, mileage: 29000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Quattro, виртуальная кабина.", imageUrl: "images/Audi-A6.webp" },
    { id: 10, brand: "Porsche", model: "Cayenne", year: 2019, price: 7500000, mileage: 63000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-car-side", description: "Adaptive air suspension, sport chrono.", imageUrl: "images/Porsche-Cayenne.webp" },
    { id: 11, brand: "Volvo", model: "XC60", year: 2021, price: 4400000, mileage: 24000, fuel: "Дизель", body: "Кроссовер", imageIcon: "fa-truck", description: "City Safety, подогрев руля.", imageUrl: "images/Volvo-XC60.jpg" },
    { id: 12, brand: "Lexus", model: "RX 350", year: 2020, price: 5700000, mileage: 38000, fuel: "Бензин", body: "Кроссовер", imageIcon: "fa-car", description: "Mark Levinson, вентиляция сидений.", imageUrl: "images/Lexus-RX-350.webp" },
    { id: 13, brand: "Tesla", model: "Model Y", year: 2023, price: 6500000, mileage: 8000, fuel: "Электро", body: "Кроссовер", imageIcon: "fa-charging-station", description: "Полный привод, автопилот, запас хода 500 км.", imageUrl: "images/Tesla Model Y.webp" },
    { id: 14, brand: "Ford", model: "Mustang", year: 2021, price: 5800000, mileage: 32000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car", description: "5.0 V8, 450 л.с., механическая коробка.", imageUrl: "images/Ford Mustang.webp" },
    { id: 15, brand: "Nissan", model: "Qashqai", year: 2022, price: 2900000, mileage: 15000, fuel: "Бензин", body: "Кроссовер", imageIcon: "fa-caravan", description: "Полный привод, панорамная крыша, LED-фары.", imageUrl: "images/Nissan Qashqai.webp" },
    { id: 16, brand: "Honda", model: "CR-V", year: 2021, price: 3500000, mileage: 28000, fuel: "Бензин", body: "Кроссовер", imageIcon: "fa-truck", description: "Гибрид, экономичный расход 5.5л/100км.", imageUrl: "images/Honda CR-V.webp" },
    { id: 17, brand: "Chevrolet", model: "Camaro", year: 2019, price: 4900000, mileage: 45000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car", description: "V6 3.6, звуковой пакет, кожа.", imageUrl: "images/Chevrolet Camaro.webp" },
    { id: 18, brand: "Land Rover", model: "Range Rover Sport", year: 2022, price: 10500000, mileage: 12000, fuel: "Дизель", body: "Внедорожник", imageIcon: "fa-car-side", description: "Адаптивная подвеска, 7 мест, премиум аудио.", imageUrl: "images/Land Rover Range Rover Sport.webp" },
    { id: 19, brand: "Geely", model: "Tugella", year: 2023, price: 3400000, mileage: 5000, fuel: "Бензин", body: "Кроссовер", imageIcon: "fa-caravan", description: "2.0 Turbo, 238 л.с., полный привод.", imageUrl: "images/Geely Tugella.webp" },
    { id: 20, brand: "Chery", model: "Tiggo 8 Pro", year: 2022, price: 3100000, mileage: 9000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-truck", description: "7 мест, 360 камер, вентиляция сидений.", imageUrl: "images/Chery Tiggo 8 Pro.webp" },
    { id: 21, brand: "BYD", model: "Han", year: 2023, price: 5700000, mileage: 6000, fuel: "Электро", body: "Седан", imageIcon: "fa-charging-station", description: "Электромобиль, запас хода 600 км, 3.9 сек до 100.", imageUrl: "images/BYD Han.webp" },
    { id: 22, brand: "Mazda", model: "CX-5", year: 2021, price: 3300000, mileage: 38000, fuel: "Бензин", body: "Кроссовер", imageIcon: "fa-car", description: "2.5 л, полный привод, Bose аудио.", imageUrl: "images/Mazda CX-5.webp" },
    { id: 23, brand: "Subaru", model: "Outback", year: 2022, price: 4200000, mileage: 14000, fuel: "Бензин", body: "Универсал", imageIcon: "fa-caravan", description: "4WD, Eyesight, высокий клиренс.", imageUrl: "images/Subaru Outback.webp" },
    { id: 24, brand: "Mitsubishi", model: "Pajero Sport", year: 2020, price: 4700000, mileage: 55000, fuel: "Дизель", body: "Внедорожник", imageIcon: "fa-truck", description: "Рамный, понижайка, 7 мест.", imageUrl: "images/Mitsubishi Pajero Sport.webp" },
    { id: 25, brand: "Renault", model: "Duster", year: 2022, price: 2100000, mileage: 17000, fuel: "Бензин", body: "Кроссовер", imageIcon: "fa-caravan", description: "Недорогой полный привод, надежный.", imageUrl: "images/Renault Duster.webp" },
    { id: 26, brand: "Volkswagen", model: "Tiguan", year: 2021, price: 3600000, mileage: 27000, fuel: "Бензин", body: "Кроссовер", imageIcon: "fa-car", description: "R-Line, цифровая панель, адаптивный круиз.", imageUrl: "images/Volkswagen Tiguan.webp" },
    { id: 27, brand: "Skoda", model: "Superb", year: 2022, price: 3400000, mileage: 19000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Лифтбек, просторный салон, 2.0 TSI.", imageUrl: "images/Skoda Superb.webp" },
    { id: 28, brand: "Peugeot", model: "3008", year: 2021, price: 2900000, mileage: 25000, fuel: "Дизель", body: "Кроссовер", imageIcon: "fa-caravan", description: "Кокпит i-Cockpit, дизайн.", imageUrl: "images/Peugeot 3008.webp" },
    { id: 29, brand: "Jaguar", model: "F-Pace", year: 2020, price: 6200000, mileage: 49000, fuel: "Бензин", body: "Кроссовер", imageIcon: "fa-car-side", description: "3.0 V6, динамичный, кожа и алюминий.", imageUrl: "images/Jaguar F-Pace.webp" },
    { id: 30, brand: "Lamborghini", model: "Urus", year: 2022, price: 18500000, mileage: 8000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-car-side", description: "V8 twin-turbo 650 л.с., 0-100 за 3.6 сек.", imageUrl: "images/Lamborghini Urus.webp" },
    { id: 31, brand: "Ferrari", model: "Portofino", year: 2020, price: 16500000, mileage: 12000, fuel: "Бензин", body: "Кабриолет", imageIcon: "fa-car", description: "V8 600 л.с., жесткий складной верх.", imageUrl: "images/Ferrari Portofino.webp" },
    { id: 32, brand: "LADA", model: "Vesta SW Cross", year: 2023, price: 1800000, mileage: 3000, fuel: "Бензин", body: "Универсал", imageIcon: "fa-caravan", description: "Клиренс 203 мм, мультимедиа, доступная цена.", imageUrl: "images/LADA Vesta SW Cross.webp" },
    // ----- АВТОМОБИЛИ ИЗ ИГР NEED FOR SPEED (КЛАССИКА) -----
    { id: 33, brand: "Nissan", model: "Skyline GT-R R34", year: 2002, price: 4200000, mileage: 89000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car", description: "Легенда NFS Underground и Most Wanted. ATTESA E-TS, RB26DETT, 280 л.с. Культовый тюнинг.", imageUrl: "images/Nissan Skyline GT-R R34.webp" },
    { id: 34, brand: "BMW", model: "M3 GTR (E46)", year: 2005, price: 12500000, mileage: 32000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car-side", description: "Главный автомобиль NFS Most Wanted. V8, карбон, гоночный болид для улиц.", imageUrl: "images/BMW M3 GTR (E46).webp" },
    { id: 35, brand: "Mitsubishi", model: "Lancer Evolution VIII", year: 2004, price: 3800000, mileage: 76000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "NFS Underground 2 легенда. 4G63, полный привод, 4WD турбо.", imageUrl: "images/Mitsubishi Lancer Evolution VIII.webp" },
    { id: 36, brand: "Subaru", model: "Impreza WRX STI (GD)", year: 2005, price: 3500000, mileage: 82000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Вечный соперник Evo. Boxer EJ20, знаменитый оппозитный вой.", imageUrl: "images/Subaru Impreza WRX STI (GD).jpg" },
    { id: 37, brand: "Porsche", model: "911 Turbo (996)", year: 2003, price: 6800000, mileage: 57000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car-side", description: "NFS Porsche Unleashed / Carbon. 3.6 л twin-turbo, 420 л.с.", imageUrl: "images/Porsche 911 Turbo (996).webp" },
    { id: 38, brand: "Ford", model: "Mustang GT (S197)", year: 2005, price: 3700000, mileage: 68000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car", description: "NFS Most Wanted — чёрный список #2. V8 4.6L, американская мощь.", imageUrl: "images/Ford Mustang GT (S197).webp" },
    { id: 39, brand: "Chevrolet", model: "Corvette C6", year: 2006, price: 5200000, mileage: 54000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car-side", description: "NFS Carbon. V8 LS2, 400 л.с., зажигание дилера.", imageUrl: "images/Chevrolet Corvette C6.webp" },
    { id: 40, brand: "Dodge", model: "Viper SRT-10", year: 2003, price: 5900000, mileage: 48000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car", description: "NFS Underground. 8.3L V10, 500 л.с., дикая змея.", imageUrl: "images/Dodge Viper SRT-10.webp" },
    { id: 41, brand: "Nissan", model: "350Z (Z33)", year: 2003, price: 2800000, mileage: 91000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car", description: "NFS Underground 2 — обложка игры. V6 3.5L, заносчивый дрифт.", imageUrl: "images/Nissan 350Z (Z33).webp" },
    { id: 42, brand: "Mazda", model: "RX-7 (FD3S)", year: 1999, price: 5300000, mileage: 68000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car", description: "Король роторных двигателей. NFS Carbon и ProStreet. Вайдель.", imageUrl: "images/Mazda RX-7 (FD3S).webp" },
    { id: 43, brand: "Toyota", model: "Supra MKIV", year: 1997, price: 8900000, mileage: 45000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car", description: "NFS Underground. 2JZ-GTE, тюнинг до 1000+ л.с., культовая классика.", imageUrl: "images/Toyota Supra MKIV.webp" },
    { id: 44, brand: "Honda", model: "S2000 (AP1)", year: 2001, price: 3100000, mileage: 73000, fuel: "Бензин", body: "Родстер", imageIcon: "fa-car", description: "NFS Underground 2. VTEC 9000 об/мин, идеальный баланс.", imageUrl: "images/Honda S2000 (AP1).webp" },
    { id: 45, brand: "Audi", model: "RS4 (B5)", year: 2001, price: 3400000, mileage: 102000, fuel: "Бензин", body: "Универсал", imageIcon: "fa-caravan", description: "NFS High Stakes. 2.7L twin-turbo V6. Убийца на универсале.", imageUrl: "images/Audi RS4 (B5).webp" },
    { id: 46, brand: "Lamborghini", model: "Murcielago LP640", year: 2006, price: 14500000, mileage: 24000, fuel: "Бензин", body: "Суперкар", imageIcon: "fa-car-side", description: "NFS Carbon — финальный босс. V12 6.5L, 640 л.с., сдвижные двери.", imageUrl: "images/Lamborghini Murcielago LP640.webp" },
    { id: 47, brand: "Aston Martin", model: "DB9", year: 2005, price: 7200000, mileage: 39000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car", description: "NFS Most Wanted. Английский стиль и V12. Классный звук.", imageUrl: "images/Aston Martin DB9.webp" },
    { id: 48, brand: "Mercedes-Benz", model: "SLR McLaren", year: 2005, price: 21000000, mileage: 17000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car-side", description: "NFS Most Wanted (бонус). 5.4L V8 компрессор, 626 л.с.", imageUrl: "images/Mercedes-Benz SLR McLaren.webp" },
    { id: 49, brand: "Pontiac", model: "GTO (Monaro)", year: 2004, price: 2600000, mileage: 81000, fuel: "Бензин", body: "Купе", imageIcon: "fa-car", description: "NFS Underground 2. Австралийский мускул, 5.7L LS1 V8.", imageUrl: "images/Pontiac GTO (Monaro).jpg" },
    { id: 50, brand: "Renault", model: "Clio V6", year: 2003, price: 1900000, mileage: 77000, fuel: "Бензин", body: "Хэтчбек", imageIcon: "fa-caravan", description: "NFS Underground. Среднемоторный монстр на маленькой базе.", imageUrl: "images/RenaultClioV6.jpg" },
    { id: 51, brand: "Peugeot", model: "206 RC", year: 2004, price: 1200000, mileage: 99000, fuel: "Бензин", body: "Хэтчбек", imageIcon: "fa-car", description: "Герой NFS Most Wanted начальных гонок. Лёгкий, юркий.", imageUrl: "images/Peugeot 206 RC.jpg" },
    { id: 52, brand: "Lexus", model: "IS300 (Altezza)", year: 2002, price: 2100000, mileage: 88000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "NFS Underground 2. Редкий дрифт-седан с рядной шестёркой.", imageUrl: "images/Lexus IS300 (Altezza).jpg" },

    { id: 53, brand: "LADA", model: "Niva Legend (4x4)", year: 2021, price: 1200000, mileage: 15000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-car", description: "Классический внедорожник. Полный привод, блокировки, неубиваемая подвеска.", imageUrl: "images/LADA Niva Legend (4x4).webp" },
    { id: 54, brand: "LADA", model: "Granta Sport", year: 2022, price: 1400000, mileage: 8000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Спортивная версия. 1.6 л 120 л.с., заниженная подвеска, обвес.", imageUrl: "images/LADA Granta Sport.webp" },
    { id: 55, brand: "LADA", model: "Vesta Cross", year: 2023, price: 1700000, mileage: 5000, fuel: "Бензин", body: "Универсал", imageIcon: "fa-caravan", description: "Кросс-версия с увеличенным клиренсом и защитным обвесом.", imageUrl: "images/LADA Vesta Cross.webp" },
    { id: 56, brand: "УАЗ", model: "Patriot", year: 2021, price: 1800000, mileage: 28000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-truck", description: "Рамный внедорожник. Просторный салон, полный привод, лебёдка.", imageUrl: "images/УАЗ Patriot.webp" },
    { id: 57, brand: "УАЗ", model: "Hunter", year: 2020, price: 1100000, mileage: 45000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-car", description: "Фронтовой стиль. Максимальная простота и проходимость.", imageUrl: "images/УАЗ Hunter.webp" },
    { id: 58, brand: "ГАЗ", model: "Sobol NN", year: 2022, price: 2300000, mileage: 12000, fuel: "Дизель", body: "Фургон", imageIcon: "fa-truck", description: "Коммерческий фургон с дизелем Cummins. Грузоподъёмность до тонны.", imageUrl: "images/ГАЗ Sobol NN.webp" },
    { id: 59, brand: "Москвич", model: "3e", year: 2023, price: 2800000, mileage: 4000, fuel: "Электро", body: "Кроссовер", imageIcon: "fa-charging-station", description: "Электрический кроссовер. Запас хода до 400 км. Современный дизайн.", imageUrl: "images/Москвич 3e.webp" },
    { id: 60, brand: "Evolute", model: "i-PRO", year: 2023, price: 2900000, mileage: 3000, fuel: "Электро", body: "Седан", imageIcon: "fa-charging-station", description: "Российский электромобиль с быстрой зарядкой. Полная мультимедиа.", imageUrl: "images/Evolute i-PRO.webp" },
    { id: 61, brand: "Aurus", model: "Senat", year: 2021, price: 32000000, mileage: 5000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Представительский лимузин. V8 598 л.с., полный привод, бронирование.", imageUrl: "images/Aurus Senat.webp" },
    { id: 62, brand: "Aurus", model: "Komendant", year: 2022, price: 38000000, mileage: 2000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-car-side", description: "Роскошный внедорожник. Кожа, дерево, V8 hybrid.", imageUrl: "images/Aurus Komendant.webp" },
    { id: 63, brand: "КамАЗ", model: "Mustang (6x6)", year: 2015, price: 4500000, mileage: 35000, fuel: "Дизель", body: "Грузовик", imageIcon: "fa-truck", description: "Армейский грузовик-вездеход. 260 л.с., лебёдка, бронированная кабина.", imageUrl: "images/КамАЗ Mustang (6x6).jpg" },
    { id: 64, brand: "Урал", model: "Next (6x6)", year: 2018, price: 3800000, mileage: 28000, fuel: "Дизель", body: "Грузовик", imageIcon: "fa-truck", description: "Военный грузовик для бездорожья. Подогрев, предпусковой подогреватель.", imageUrl: "images/Урал Next (6x6).webp" },
    { id: 65, brand: "ГАЗ", model: "Tigr (СПМ-2)", year: 2019, price: 2200000, mileage: 15000, fuel: "Дизель", body: "Бронеавтомобиль", imageIcon: "fa-car", description: "Лёгкий бронеавтомобиль. Защита от стрелкового оружия, 205 л.с.", imageUrl: "images/ГАЗ Tigr (СПМ-2).jpg" },
    { id: 66, brand: "БТР", model: "БТР-82А", year: 2012, price: 8500000, mileage: 12000, fuel: "Дизель", body: "Бронетранспортер", imageIcon: "fa-truck", description: "Плавающий бронетранспортёр. 300 л.с., 30-мм пушка 2А72.", imageUrl: "images/БТР БТР-82А.jpg" },
    { id: 67, brand: "Танк", model: "Т-72Б3", year: 2010, price: 12500000, mileage: 8000, fuel: "Дизель", body: "Танк", imageIcon: "fa-tank", description: "Основной боевой танк. 1000 л.с., 125-мм пушка, динамическая защита.", imageUrl: "images/Танк Т-72Б3.jpg" },
    { id: 68, brand: "ЗРК", model: "Панцирь-С1", year: 2018, price: 19500000, mileage: 3000, fuel: "Дизель", body: "Зенитный ракетно-пушечный комплекс", imageIcon: "fa-rocket", description: "Система ПВО малой дальности. 12 ракет + 2 пушки 30-мм.", imageUrl: "images/ЗРК Панцирь-С1.jpg" },
    { id: 69, brand: "ЗРС", model: "С-400 Триумф", year: 2020, price: 85000000, mileage: 800, fuel: "Дизель", body: "Зенитная ракетная система", imageIcon: "fa-rocket", description: "Дальняя ПВО. Радиус поражения до 400 км. Пусковые установки на шасси.", imageUrl: "images/ЗРС С-400 Триумф.jpg" },
    { id: 70, brand: "РСЗО", model: "Торнадо-Г (Град)", year: 2016, price: 6700000, mileage: 5000, fuel: "Дизель", body: "Реактивная система залпового огня", imageIcon: "fa-truck", description: "122-мм РСЗО. 40 направляющих, дальность до 40 км.", imageUrl: "images/РСЗО Торнадо-Г (Град).jpg" },
    { id: 71, brand: "БРДМ", model: "БРДМ-2", year: 2008, price: 2800000, mileage: 35000, fuel: "Бензин", body: "Бронеразведчик", imageIcon: "fa-car", description: "Плавающая бронемашина. Полный привод, лебёдка, пулемёт.", imageUrl: "images/БРДМ БРДМ-2.jpg" },
    { id: 72, brand: "Тягач", model: "МАЗ-537", year: 1985, price: 2100000, mileage: 60000, fuel: "Дизель", body: "Военный тягач", imageIcon: "fa-truck", description: "Тяжёлый тягач для перевозки танков. 525 л.с., 8x8.", imageUrl: "images/Тягач МАЗ-537.webp" },
    { id: 73, brand: "ВАЗ", model: "2101 (Жигули)", year: 1975, price: 180000, mileage: 120000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "'Копейка' – легендарный классический автомобиль. Простой, ремонтопригодный, культовый.", imageUrl: "images/ВАЗ 2101 (Жигули).webp" },
    { id: 74, brand: "ВАЗ", model: "2106", year: 1980, price: 220000, mileage: 105000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "'Шестёрка' – одна из самых популярных моделей. 1.6 л, 75 л.с.", imageUrl: "images/ВАЗ 2106.webp" },
    { id: 75, brand: "ВАЗ", model: "2107", year: 1985, price: 250000, mileage: 98000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "'Семёрка' – классический седан с угловатым дизайном. Надёжный мотор.", imageUrl: "images/ВАЗ 2107.webp" },
    { id: 76, brand: "ВАЗ", model: "2109 (Спутник)", year: 1988, price: 200000, mileage: 110000, fuel: "Бензин", body: "Хэтчбек", imageIcon: "fa-car", description: "Знаменитая 'Зубило' с передним приводом. Просторный салон.", imageUrl: "images/ВАЗ 2109 (Спутник).webp" },
    { id: 77, brand: "Москвич", model: "2141 (Святогор)", year: 1995, price: 180000, mileage: 130000, fuel: "Бензин", body: "Хэтчбек", imageIcon: "fa-caravan", description: "Советский/российский хэтчбек с большим багажником. Двигатели УЗАМ.", imageUrl: "images/Москвич 2141 (Святогор).webp" },
    { id: 78, brand: "Москвич", model: "412", year: 1975, price: 190000, mileage: 140000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Классический 'Москвич' с рядной четверкой. Запасные части доступны.", imageUrl: "images/Москвич 412.webp" },
    { id: 79, brand: "ЗАЗ", model: "968М (Запорожец)", year: 1985, price: 150000, mileage: 95000, fuel: "Бензин", body: "Хэтчбек", imageIcon: "fa-car", description: "'Горбатый' с воздушным охлаждением. Уникальный стиль.", imageUrl: "images/ЗАЗ 968М (Запорожец).webp" },
    { id: 80, brand: "ЛуАЗ", model: "969 (Волынь)", year: 1985, price: 350000, mileage: 78000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-car", description: "Легкий вездеход-амфибия (не полностью). Полный привод, воздушное охлаждение.", imageUrl: "images/ЛуАЗ 969 (Волынь).webp" },
    { id: 81, brand: "ГАЗ", model: "24 (Волга)", year: 1980, price: 500000, mileage: 88000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Знаменитая 'Волга' – символ советского автопрома. Просторный салон, скоростной.", imageUrl: "images/ГАЗ 24 (Волга).webp" },
   
    { id: 82, brand: "Renault", model: "Logan I (Рестайлинг)", year: 2012, price: 380000, mileage: 245000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Надёжный 'рабочий конь'. 1.4 л, 75 л.с., огромный багажник, дешёвое обслуживание.", imageUrl: "images/Renault Logan.webp" },
    { id: 83, brand: "Nissan", model: "Almera III (G15)", year: 2013, price: 700000, mileage: 144000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Просторный салон, багажник 500 л. 1.6 л, 102 л.с., автомат или механика.", imageUrl: "images/Nissan Almera III (G15), 2013.webp" },
    { id: 84, brand: "Hyundai", model: "Accent (2G) 1.5", year: 2005, price: 280000, mileage: 168000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Корейский седан с надёжным мотором 1.5 л (90 л.с.). Неприхотлив, дёшев в ремонте.", imageUrl: "images/Hyundai Accent (2G) 1.5.jpg" },
    { id: 85, brand: "Skoda", model: "Rapid I (Рестайлинг) 1.6 AT", year: 2018, price: 720000, mileage: 89000, fuel: "Бензин", body: "Лифтбек", imageIcon: "fa-car", description: "Автомат 6 ступеней, 1.6 MPI (110 л.с.). Просторный багажник с двухступенчатой крышкой.", imageUrl: "images/Skoda Rapid I Рестайлинг 1.6 AT.webp" },
    { id: 86, brand: "Daewoo", model: "Matiz I (Рестайлинг) 0.8 MT", year: 2008, price: 190000, mileage: 125000, fuel: "Бензин", body: "Хэтчбек", imageIcon: "fa-car", description: "Микролитражка с мотором 0.8 л (52 л.с.). Идеален для города, паркуется везде.", imageUrl: "images/Daewoo Matiz I Рестайлинг 0.8 MT.webp" }
];

// ==================== ОБЩИЕ ФУНКЦИИ ====================
function getCarImageHtml(car) {
    if (car.imageUrl && car.imageUrl.trim() !== "") {
        return `<img src="${car.imageUrl}" alt="${car.brand} ${car.model}" style="width:100%; height:100%; object-fit:cover;">`;
    } else {
        return `<i class="fas ${car.imageIcon} fa-4x"></i>`;
    }
}

function renderCars(list, containerId, clickable = true) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (list.length === 0) {
        container.innerHTML = '<p style="padding:40px; text-align:center;">Ничего не найдено 🤷</p>';
        return;
    }
    let html = '';
    list.forEach(car => {
        html += `
            <div class="car-card" data-id="${car.id}">
                <div class="car-img">
                    ${getCarImageHtml(car)}
                </div>
                <div class="car-info">
                    <div class="car-title">${car.brand} ${car.model}</div>
                    <div class="car-price">${car.price.toLocaleString()} ₽</div>
                    <div class="car-details"><span><i class="fas fa-calendar-alt"></i> ${car.year}</span><span><i class="fas fa-tachometer-alt"></i> ${car.mileage.toLocaleString()} км</span><span><i class="fas fa-gas-pump"></i> ${car.fuel}</span></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (clickable) {
        document.querySelectorAll(`#${containerId} .car-card`).forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                const car = carsData.find(c => c.id === id);
                if (car) showModal(car);
            });
        });
    }
}

function showModal(car) {
    const modal = document.getElementById('car-modal');
    if (!modal) return;
    const modalBody = document.getElementById('modal-body');
    // Для модального окна показываем крупную картинку, если есть
    const imageHtml = (car.imageUrl && car.imageUrl.trim() !== "")
        ? `<img src="${car.imageUrl}" alt="${car.brand} ${car.model}" style="width:100%; max-height:250px; object-fit:contain; border-radius:20px;">`
        : `<div style="background:#F1F5F9; border-radius:20px; padding:20px; text-align:center; margin:16px 0;"><i class="fas ${car.imageIcon} fa-5x"></i></div>`;
    modalBody.innerHTML = `
        <h2>${car.brand} ${car.model}</h2>
        ${imageHtml}
        <p><strong>Год:</strong> ${car.year} &nbsp;| <strong>Пробег:</strong> ${car.mileage.toLocaleString()} км</p>
        <p><strong>Топливо:</strong> ${car.fuel} &nbsp;| <strong>Кузов:</strong> ${car.body}</p>
        <p><strong>Цена:</strong> <span style="font-size:28px; font-weight:800; color:#F59E0B;">${car.price.toLocaleString()} ₽</span></p>
        <p>${car.description}</p>
    `;
    modal.style.display = 'flex';
    const testBtn = document.getElementById('modal-testdrive');
    if (testBtn) {
        testBtn.onclick = () => {
            alert(`Заявка на тест-драйв ${car.brand} ${car.model} отправлена! Свяжемся.`);
            modal.style.display = 'none';
        };
    }
}

// закрытие модального окна
document.addEventListener('click', (e) => {
    if (e.target.classList && e.target.classList.contains('close-modal')) {
        const modal = document.getElementById('car-modal');
        if (modal) modal.style.display = 'none';
    }
    if (e.target === document.getElementById('car-modal')) {
        document.getElementById('car-modal').style.display = 'none';
    }
});

// ==================== КАТАЛОГ (фильтрация и сортировка) ====================
let currentFiltered = [...carsData];

function filterAndSort() {
    const brand = document.getElementById('brand-filter')?.value || 'all';
    let minPrice = parseInt(document.getElementById('price-min')?.value) || 0;
    let maxPrice = parseInt(document.getElementById('price-max')?.value) || Infinity;
    const search = (document.getElementById('search-input')?.value || '').toLowerCase();
    let filtered = carsData.filter(car => {
        if (brand !== 'all' && car.brand !== brand) return false;
        if (car.price < minPrice || car.price > maxPrice) return false;
        if (search && !`${car.brand} ${car.model}`.toLowerCase().includes(search)) return false;
        return true;
    });
    const sortby = document.getElementById('sort-select')?.value;
    if (sortby === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sortby === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sortby === 'year-desc') filtered.sort((a, b) => b.year - a.year);
    currentFiltered = filtered;
    renderCars(filtered, 'catalog-cars-list', true);
    const countElem = document.getElementById('cars-count');
    if (countElem) countElem.innerText = `Найдено ${filtered.length} автомобиля(ей)`;
}

function populateBrands() {
    const select = document.getElementById('brand-filter');
    if (!select) return;
    const brandsSet = new Set(carsData.map(c => c.brand));
    brandsSet.forEach(b => {
        let opt = document.createElement('option');
        opt.value = b;
        opt.innerText = b;
        select.appendChild(opt);
    });
}

function initCatalog() {
    populateBrands();
    filterAndSort();
    const applyBtn = document.getElementById('apply-filters');
    const sortSelect = document.getElementById('sort-select');
    const searchInput = document.getElementById('search-input');
    if (applyBtn) applyBtn.addEventListener('click', filterAndSort);
    if (sortSelect) sortSelect.addEventListener('change', filterAndSort);
    if (searchInput) searchInput.addEventListener('input', filterAndSort);
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    if (priceMin) priceMin.addEventListener('input', filterAndSort);
    if (priceMax) priceMax.addEventListener('input', filterAndSort);
}

// ==================== ГЛАВНАЯ (рекомендуемые) ====================
function loadFeatured() {
    const featuredContainer = document.getElementById('featured-cars');
    if (!featuredContainer) return;
    const shuffled = [...carsData];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const featured = shuffled.slice(0, 4);
    renderCars(featured, 'featured-cars', true);
}

// ==================== КОНТАКТНАЯ ФОРМА ====================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Сообщение отправлено! Наш менеджер свяжется.');
            form.reset();
        });
    }
}

// ==================== ЗАПУСК В ЗАВИСИМОСТИ ОТ СТРАНИЦЫ ====================
document.addEventListener('DOMContentLoaded', () => {
    // Главная страница
    if (document.getElementById('featured-cars')) {
        loadFeatured();
    }
    // Каталог
    if (document.getElementById('catalog-cars-list')) {
        initCatalog();
    }
    // Форма контактов
    initContactForm();
});
