document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.getElementById('addToCartButton');

    addToCartButton.addEventListener('click', function() {
        if (addToCartButton.textContent === 'Add to cart') {
            addToCartButton.textContent = 'Added';
            addToCartButton.classList.remove('btn-success');
            addToCartButton.classList.add('btn-secondary');
        } else {
            addToCartButton.textContent = 'Add to cart';
            addToCartButton.classList.remove('btn-secondary');
            addToCartButton.classList.add('btn-success');
        }
    });
});
