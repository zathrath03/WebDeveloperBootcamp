// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const product = form.elements.product;
    const quantity = form.elements.qty;
    const newLI = document.createElement("LI");
    newLI.innerText = `${quantity.value} ${product.value}`;
    list.append(newLI);
    product.value = "";
    quantity.value = "";
});