// Данные фотосетов: для каждого сета — массив путей к фотографиям
const setsData = [
    {
        name: "Alina 17.08.24",
        photos: [
            "images/Alina0/alina1.jpg",
            "images/Alina0/alina2.jpg",
            "images/Alina0/alina3.jpg",
            "images/Alina0/alina4.jpg",
            "images/Alina0/alina5.jpg",
            "images/Alina0/alina6.jpg",
            "images/Alina0/alina7.jpg",
            "images/Alina0/alina8.jpg",
            "images/Alina0/alina9.jpg",
            "images/Alina0/alina10.jpg",
            "images/Alina0/alina11.jpg",
        ]
    },
    {
        name: "Alina 28.08.24",
        photos: [
            "images/Alina1/Alina_1.jpg",
            "images/Alina1/Alina_2.jpg",
            "images/Alina1/Alina_3.jpg",
            "images/Alina1/Alina_4.jpg",
            "images/Alina1/Alina_5.jpg",
            "images/Alina1/Alina_6.jpg",
            "images/Alina1/Alina_7.jpg",
            "images/Alina1/Alina_8.jpg",
            "images/Alina1/Alina_9.jpg",
            "images/Alina1/Alina_10.jpg",
            "images/Alina1/Alina_11.jpg",
            "images/Alina1/Alina_12.jpg",
            "images/Alina1/Alina_13.jpg",
            "images/Alina1/Alina_14.jpg",
            "images/Alina1/Alina_15.jpg"
        ]
    },
    {
        name: "Alisa 31.07.24",
        photos: [
            "images/Alisa/archive/Alisa1.jpg",
            "images/Alisa/archive/Alisa2.jpg",
            "images/Alisa/archive/Alisa3.jpg",
            "images/Alisa/archive/Alisa4.jpg",
            "images/Alisa/archive/Alisa5.jpg",
            "images/Alisa/archive/Alisa6.jpg",
            "images/Alisa/archive/Alisa7.jpg",
            "images/Alisa/archive/Alisa8.jpg",
            "images/Alisa/archive/Alisa9.jpg",
            "images/Alisa/archive/Alisa10.jpg",
            "images/Alisa/archive/Alisa11.jpg",
            "images/Alisa/archive/Alisa12.jpg",
            "images/Alisa/archive/Alisa13.jpg"
        ]
    },
    {
        name: "Asya 29.09.24",
        photos: [
            "images/Asya/archive/Asya1.jpg",
            "images/Asya/archive/Asya2.jpg",
            "images/Asya/archive/Asya3.jpg",
            "images/Asya/archive/Asya4.jpg",
            "images/Asya/archive/Asya5.jpg",
            "images/Asya/archive/Asya6.jpg",
            "images/Asya/archive/Asya7.jpg",
            "images/Asya/archive/Asya8.jpg",
            "images/Asya/archive/Asya9.jpg",
            "images/Asya/archive/Asya10.jpg",
            "images/Asya/archive/Asya11.jpg",
            "images/Asya/archive/Asya12.jpg",
            "images/Asya/archive/Asya13.jpg",
            "images/Asya/archive/Asya14.jpg",
            "images/Asya/archive/Asya15.jpg",
            "images/Asya/archive/Asya16.jpg",
            "images/Asya/archive/Asya17.jpg",
            "images/Asya/archive/Asya18.jpg",
            "images/Asya/archive/Asya19.jpg",
            "images/Asya/archive/Asya20.jpg",
            "images/Asya/archive/Asya21.jpg",
            "images/Asya/archive/Asya22.jpg"
        ]
    },
    {
        name: "Diana 08.12.24",
        photos: [
            "images/diana/archive/Diana1.jpg",
            "images/diana/archive/Diana2.jpg",
            "images/diana/archive/Diana3.jpg",
            "images/diana/archive/Diana4.jpg",
            "images/diana/archive/Diana5.jpg",
            "images/diana/archive/Diana6.jpg",
            "images/diana/archive/Diana7.jpg",
            "images/diana/archive/Diana8.jpg",
            "images/diana/archive/Diana9.jpg",
            "images/diana/archive/Diana10.jpg",
            "images/diana/archive/Diana11.jpg",
            "images/diana/archive/Diana12.jpg",
            "images/diana/archive/Diana13.jpg",
            "images/diana/archive/Diana14.jpg",
            "images/diana/archive/Diana15.jpg",
            "images/diana/archive/Diana16.jpg"
        ]
    },
    {
        name: "lera 01.08.24",
        photos: [
            "images/lera/archive/lera1.jpg",
            "images/lera/archive/lera2.jpg",
            "images/lera/archive/lera3.jpg",
            "images/lera/archive/lera4.jpg",
            "images/lera/archive/lera5.jpg",
            "images/lera/archive/lera6.jpg",
            "images/lera/archive/lera7.jpg",
            "images/lera/archive/lera8.jpg",
            "images/lera/archive/lera9.jpg",
            "images/lera/archive/lera10.jpg",
            "images/lera/archive/lera11.jpg",
            "images/lera/archive/lera12.jpg",
            "images/lera/archive/lera13.jpg",
            "images/lera/archive/lera14.jpg",
            "images/lera/archive/lera15.jpg",
            "images/lera/archive/lera16.jpg",
            "images/lera/archive/lera17.jpg",
            "images/lera/archive/lera18.jpg",
            "images/lera/archive/lera19.jpg",
            "images/lera/archive/lera20.jpg",
            "images/lera/archive/lera21.jpg",
            "images/lera/archive/lera22.jpg",
            "images/lera/archive/lera23.jpg",
            "images/lera/archive/lera24.jpg",
            "images/lera/archive/lera25.jpg",
            "images/lera/archive/lera26.jpg",
            "images/lera/archive/lera27.jpg",
            "images/lera/archive/lera28.jpg",
            "images/lera/archive/lera29.jpg",
            "images/lera/archive/lera30.jpg"
        ]
    },
];

// Текущее состояние модального окна
let currentSetIndex = 0;     // индекс активного фотосета
let currentPhotoIndex = 0;   // индекс фото внутри сета
let currentPhotosArray = [];  // массив фото текущего сета

// Элементы DOM
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-modal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counterElem = document.getElementById('modalCounter');

// Функция открытия модального окна для конкретного сета и индекса фото
function openModal(setIdx, photoIdx) {
    if (!setsData[setIdx]) return;
    currentSetIndex = setIdx;
    currentPhotosArray = setsData[currentSetIndex].photos;
    if (photoIdx < 0) photoIdx = 0;
    if (photoIdx >= currentPhotosArray.length) photoIdx = currentPhotosArray.length - 1;
    currentPhotoIndex = photoIdx;
    modalImg.src = currentPhotosArray[currentPhotoIndex];
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    updateCounter();
}

function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modalImg.src = '';
    }, 300);
    document.body.style.overflow = '';
}

function updateCounter() {
    if (counterElem && currentPhotosArray.length) {
        counterElem.textContent = `${currentPhotoIndex + 1} / ${currentPhotosArray.length}`;
    }
}

function nextPhoto() {
    if (!currentPhotosArray.length) return;
    let newIndex = currentPhotoIndex + 1;
    if (newIndex >= currentPhotosArray.length) newIndex = 0; // зацикливание
    currentPhotoIndex = newIndex;
    modalImg.src = currentPhotosArray[currentPhotoIndex];
    updateCounter();
}

function prevPhoto() {
    if (!currentPhotosArray.length) return;
    let newIndex = currentPhotoIndex - 1;
    if (newIndex < 0) newIndex = currentPhotosArray.length - 1;
    currentPhotoIndex = newIndex;
    modalImg.src = currentPhotosArray[currentPhotoIndex];
    updateCounter();
}

// Привязываем обработчики к блокам фотосетов
document.querySelectorAll('.set-card').forEach((card, idx) => {
    card.addEventListener('click', () => {
        // Открываем модальное окно с первым фото этого сета
        openModal(idx, 0);
    });
});

// Закрытие по крестику или фону
if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Кнопки Prev/Next
if (prevBtn) prevBtn.addEventListener('click', prevPhoto);
if (nextBtn) nextBtn.addEventListener('click', nextPhoto);

// Клавиатура
document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('show')) return;
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPhoto();
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextPhoto();
    } else if (e.key === 'Escape') {
        closeModal();
    }
});
