// ==================== ДАННЫЕ АВТОМОБИЛЕЙ ====================
// Добавьте свои картинки: укажите путь к файлу или URL в поле imageUrl
const carsData = [
    { id: 1, brand: "BMW", model: "X5", year: 2021, price: 5500000, mileage: 42000, fuel: "Дизель", body: "Внедорожник", imageIcon: "fa-car-side", description: "Полный привод, M пакет, панорамная крыша.", imageUrl: "images/bmw-x5.webp" },
    { id: 2, brand: "Mercedes-Benz", model: "E 220 d", year: 2020, price: 4800000, mileage: 51000, fuel: "Дизель", body: "Седан", imageIcon: "fa-car", description: "Адаптивный круиз, кожа, подогрев всех сидений.", imageUrl: "images/Mercedes-Benz-E-220-d.webp" },
    { id: 3, brand: "Audi", model: "Q7", year: 2019, price: 4900000, mileage: 68000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-truck", description: "Quattro, 3 ряда сидений, престиж.", imageUrl: "images/Audi-Q7.webp" },
    { id: 4, brand: "Toyota", model: "Camry", year: 2022, price: 3800000, mileage: 22000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "V6, JBL аудиосистема, безопасность.", imageUrl: "images/Toyota-Camry.jpg" },
    { id: 5, brand: "Hyundai", model: "Santa Fe", year: 2021, price: 3200000, mileage: 35000, fuel: "Дизель", body: "Кроссовер", imageIcon: "fa-caravan", description: "Полный привод, богатая комплектация.", imageUrl: "images/Hyundai-Santa-Fe.jpg" },
    { id: 6, brand: "Kia", model: "K5", year: 2022, price: 2800000, mileage: 18000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "Стильный дизайн, 180 л.с.", imageUrl: "images/kia-k5.jpg" },
    { id: 7, brand: "BMW", model: "3 series", year: 2020, price: 3700000, mileage: 47000, fuel: "Бензин", body: "Седан", imageIcon: "fa-car", description: "M Sport, шумоизоляция.", imageUrl: "images/BMW-3-series.jpg" },
    { id: 8, brand: "Mercedes-Benz", model: "GLE", year: 2022, price: 7800000, mileage: 15000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-car-side", description: "AMG пакет, неоновая подсветка.", imageUrl: "images/Mercedes-Benz-GLE.webp" },
    { id: 9, brand: "Audi", model: "A6", year: 2021, price: 5200000, mileage: 29000, fuel: "Бензин", body: "Седан",                                 imageIcon: "fa-car", description: "Quattro, виртуальная кабина.", imageUrl: "images/Audi-A6.webp" },
    { id: 10, brand: "Porsche", model: "Cayenne", year: 2019, price: 7500000, mileage: 63000, fuel: "Бензин", body: "Внедорожник", imageIcon: "fa-car-side", description: "Adaptive air suspension, sport chrono.", imageUrl: "images/Porsche-Cayenne.webp" },
    { id: 11, brand: "Volvo", model: "XC60", year: 2021, price: 4400000, mileage: 24000, fuel: "Дизель", body: "Кроссовер", imageIcon: "fa-truck", description: "City Safety, подогрев руля.", imageUrl: "images/Volvo-XC60.jpg" },
    { id: 12, brand: "Lexus", model: "RX 350", year: 2020, price: 5700000, mileage: 38000, fuel: "Бензин", body: "Кроссовер", imageIcon: "fa-car", description: "Mark Levinson, вентиляция сидений.", imageUrl: "images/Lexus-RX-350.webp" }
];

// ==================== ОБЩИЕ ФУНКЦИИ ====================
// Функция для отображения картинки или иконки
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
