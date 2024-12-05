let zoom = document.querySelector(' .zoom');
zoom.addEventListener('mousemove', (e) => {
    zoom.style.setProperty(' --zoom-show', 'block');
    let positionPx = e.x - zoom.getBoundingClientRect().left;
    let positionPy = e.y - zoom.getBoundingClientRect().top;
    let positionX = 100 * positionPx / zoom.offsetWidth;
    let positiony = 100 * positionPy / zoom.offsetHeight;
    imgzoom.style.setProperty(' --zoom-x', positionx + '%');
    imgzoom.style.setProperty('--zoom-y', positionY + '%');
    let transformX = -(positionX - 50) / 3.5;
    let transformY = -(positionY - 50) / 3.5;
    imgzoom.style.transform = ' scale(1.5) translateX(${transformX}%) translateY(${transformY}%)';
})
zoom.addEventListener('mouseout', () => {
    imgzoom.style.opacity = 0;
})    
