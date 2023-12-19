
const paginationContainer = document.createElement('div');
paginationContainer.classList.add('pagination');


const previousButton = document.createElement('button');
previousButton.textContent = 'Previous';
previousButton.classList.add('btn', 'previous');
paginationContainer.appendChild(previousButton);


const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.classList.add('btn', 'next');
paginationContainer.appendChild(nextButton);


document.body.appendChild(paginationContainer);






