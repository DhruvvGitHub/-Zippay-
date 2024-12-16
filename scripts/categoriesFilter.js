const category = document.querySelectorAll(".categories-left .cat-names h5");

category.forEach((category, index) => {
    category.addEventListener("click", () => {
        gsap.to(".selected-category", {
            duration: 0.5,
            transform: `translateY(${index * 100}%)`
        }) 


        function renderCategories(filterCategory = '') {
            const container = document.querySelector('.categories-right-middle');
            container.innerHTML = ''; 
        
            const filteredCategories = filterCategory === 'All Categories'
                ? categories
                : categories.filter((cat) => cat.category === filterCategory);
        
            filteredCategories.forEach((category) => {
                const card = `
                    <div class="categories-right-card">
                        <div class="categories-details">
                            <div class="icon">
                                <img src="${category.icon}" alt="${category.heading}">
                            </div>
                            <div class="name">
                                <h3 class="heading">${category.heading}</h3>
                                <h5 class="description">${category.category}</h5>
                            </div>
                        </div>
                        <div class="categories-description">
                            <h5 class="description">${category.detail}</h5>
                        </div>
                        <button class="categories-button">Learn More
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.6665 10.0013H16.3332M16.3332 10.0013L10.4998 4.16797M16.3332 10.0013L10.4998 15.8346" 
                                      stroke="#0A0A0A" 
                                      stroke-width="1.66667" 
                                      stroke-linecap="round" 
                                      stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                `;
                container.innerHTML += card;
            });
        }
        
        function setupFilters() {
            const categoryNames = document.querySelectorAll(".cat-names h5");
        
            categoryNames.forEach((category) => {
                category.addEventListener("click", () => {
                    const selectedCategory = category.innerHTML.trim();
                    renderCategories(selectedCategory);
                });
            });
        }
        
        renderCategories();
        
        setupFilters();
        
    });
});