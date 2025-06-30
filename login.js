function handleLogin(event) {
            event.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Hide previous messages
            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            
            // Basic validation
            if (!email || !password) {
                showError('Please fill in all fields');
                return;
            }
            
            // Simulate login process
            const loginBtn = document.querySelector('.login-btn');
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
            loginBtn.disabled = true;
            
            // Demo login - replace with actual authentication
            setTimeout(() => {
                if (email === 'demo@ecart.com' && password === 'demo123') {
                    showSuccess('Login successful! Redirecting to dashboard...');
                    
                    // Store login state
                    if (rememberMe) {
                        localStorage.setItem('eCartUser', JSON.stringify({
                            email: email,
                            loginTime: new Date().toISOString()
                        }));
                    }
                    
                    // Redirect after 2 seconds
                    setTimeout(() => {
                        window.location.href = '../html/home.html'; // Change this to your actual home page
                    }, 2000);
                } else {
                    showError('Invalid email or password. Try demo@ecart.com / demo123');
                    resetLoginButton();
                }
            }, 1500);
        }
        
        function showError(message) {
            const errorDiv = document.getElementById('errorMessage');
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
        
        function showSuccess(message) {
            const successDiv = document.getElementById('successMessage');
            successDiv.textContent = message;
            successDiv.style.display = 'block';
        }
        
        function resetLoginButton() {
            const loginBtn = document.querySelector('.login-btn');
            loginBtn.innerHTML = '<span>Sign In</span>';
            loginBtn.disabled = false;
        }
        
        function socialLogin(provider) {
            alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login would be implemented here`);
        }
        
        function forgotPassword() {
            alert('Forgot password functionality would be implemented here');
        }
        
        function goToSignup() {
            alert('Redirect to signup page would be implemented here');
        }
        
        function goHome() {
            window.location.href = '../html/home.html'; // Change this to your actual home page
        }
        
        // Check if user is already logged in
        window.addEventListener('load', () => {
            const savedUser = localStorage.getItem('eCartUser');
            if (savedUser) {
                const userData = JSON.parse(savedUser);
                document.getElementById('email').value = userData.email;
                document.getElementById('rememberMe').checked = true;
            }
        });
        
        // Add some interactive effects
        document.querySelectorAll('.form-group input').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });