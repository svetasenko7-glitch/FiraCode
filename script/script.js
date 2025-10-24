document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.lang li');
    
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            listItems.forEach(li => li.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

function fillWithChevrons() {
    const chevronSelectors = ['dynamic-chevrons-before', 'dynamic-chevrons-after'];
    
    chevronSelectors.forEach(selector => {
        const containers = document.getElementsByClassName(selector);
        
        for (let container of containers) {
            // Создаем временный элемент для измерения ширины символа
            const tempSpan = document.createElement('span');
            tempSpan.textContent = '>';
            tempSpan.style.visibility = 'hidden';
            tempSpan.style.position = 'absolute';
            tempSpan.style.whiteSpace = 'nowrap';
            
            // Копируем стили шрифта из контейнера
            const containerStyles = window.getComputedStyle(container);
            tempSpan.style.font = containerStyles.font;
            tempSpan.style.fontFamily = containerStyles.fontFamily;
            tempSpan.style.fontSize = containerStyles.fontSize;
            tempSpan.style.fontWeight = containerStyles.fontWeight;
            tempSpan.style.letterSpacing = containerStyles.letterSpacing;
            
            document.body.appendChild(tempSpan);
            const charWidth = tempSpan.offsetWidth;
            document.body.removeChild(tempSpan);
            
            const containerWidth = container.offsetWidth;
            const chevronCount = Math.floor(containerWidth / charWidth);
            container.textContent = '>'.repeat(chevronCount);
        }
    });
}

window.addEventListener('load', fillWithChevrons);
window.addEventListener('resize', fillWithChevrons);
