let currentIndex = 0; // Inicia el índice en 0

document.querySelector('.arrowleft').addEventListener('click', function() {
    moveItems('left');
});

document.querySelector('.arrowright').addEventListener('click', function() {
    moveItems('right');
});

function moveItems(direction) {
    const itemsContainer = document.querySelector('.benefits-items');
    const items = document.querySelectorAll('.item');
    const stepSize = items[0].clientWidth; // Ancho de un elemento, incluyendo padding
    
    if(direction === 'right') {
        currentIndex++;
        if (currentIndex > items.length - 3) currentIndex = items.length - 3; // Evita desplazamiento excesivo
    } else {
        currentIndex--;
        if (currentIndex < 0) currentIndex = 0; // Evita desplazamiento negativo
    }

    const moveDistance = -(stepSize * currentIndex);
    itemsContainer.style.transform = `translateX(${moveDistance}px)`;
}
