document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        this.style.background = '#4caf50';
        this.textContent = 'Added!';

        //     setTimeout(() => {
        //         this.style.background = '#667eea';
        //         this.textContent = 'Add to Cart';
        //     }, 1500);
    });
});