let elements = document.querySelectorAll('h2');
elements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        let count = 0;
        let blinkInterval = setInterval(function() {
            if (count < 2) {
                element.style.visibility = (element.style.visibility == 'hidden' ? '' : 'hidden');
                count++;
            } else {
                clearInterval(blinkInterval);
            }
        }, 400);
    });
});
