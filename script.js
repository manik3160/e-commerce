        alert('Your cart is empty.');
    } else {
        alert(`You have ${cartCount} items in your cart.`);
        // Logic to show the cart can be added here
    }
        let cartCount = 0;

        function viewCategory(category) {
            alert(`Viewing ${category} category`);
        }

        function viewProduct(product) {
            alert(`Viewing ${product} details`);
        }

        function showMore() {
            alert('More options would be shown here');
        }

        function toggleCart() {
            if (cartCount === 0) {
             
        }

        // Search functionality
        document.querySelector('.search-btn').addEventListener('click', function() {
            const searchQuery = document.querySelector('.search-box').value;
            if (searchQuery.trim()) {
                alert(`Searching for: ${searchQuery}`);
            } else {
                alert('Please enter a search term');
            }
        });

        document.querySelector('.search-box').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.querySelector('.search-btn').click();
            }
        });

        // Add to cart simulation
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('dblclick', function(e) {
                e.stopPropagation();
                cartCount++;
                document.getElementById('cartCount').textContent = cartCount;
                
            
                
                // Show notification
                const notification = document.createElement('div');
                notification.textContent = `${productName} added to cart!`;
                notification.style.cssText = `
                    position: fixed;
                    top: 80px;
                    right: 20px;
                    background: #388e3c;
                    color: white;
                    padding: 12px 20px;
                    border-radius: 4px;
                    z-index: 10000;
                    font-size: 14px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                    animation: slideIn 0.3s ease-out;
                `;
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease-in forwards';
                    setTimeout(() => {
                        if (notification.parentNode) {
                            document.body.removeChild(notification);
                        }
                    }, 300);
                }, 3000);
            });
        });

        // Add animation styles
        const animationStyles = document.createElement('style');
        animationStyles.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;

        document.head.appendChild(animationStyles);

