const categories = document.querySelectorAll('#categories>.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
    const title = item.querySelector('h2');
    const itemList = item.querySelectorAll('li');
    console.log(`\nCategory: ${title.textContent}`);
    console.log(`Elements: ${itemList.length}`);
});