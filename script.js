document.addEventListener('DOMContentLoaded', () => {
    
    // Настраиваем "Наблюдателя"
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Если блок появился на экране
            if (entry.isIntersecting) {
                // Добавляем класс show
                entry.target.classList.add('show');
            }
        });
    });

    // Ищем все скрытые элементы
    const hiddenElements = document.querySelectorAll('.hidden');
    // Приказываем наблюдать за каждым из них
    hiddenElements.forEach((el) => observer.observe(el));
});