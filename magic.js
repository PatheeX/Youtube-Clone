const scrollContainer = document.querySelector('.mid-top');

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += (evt.deltaY*5);
});

