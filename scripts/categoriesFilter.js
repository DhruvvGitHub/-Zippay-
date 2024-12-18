const categories = [
    {
        icon: './images/Integrations Images/cat-card-1.png',
        heading: 'Notion',
        category: 'Collaboration',
        detail: 'Sync financial data with Notion to keep your projects and finances aligned',
    },
    {
        icon: './images/Integrations Images/cat-card-2.png',
        heading: 'Slack',
        category: 'Communication',
        detail: 'Turn ideas, work requests, and action items from Slack into trackable tasks and comments',
    },
    {
        icon: './images/Integrations Images/cat-card-3.png',
        heading: 'Google Workspace',
        category: 'Productivity',
        detail: 'Connect with Google Workspace for seamless data synchronization and enhanced productivity',
    },
    {
        icon: './images/Integrations Images/cat-card-4.png',
        heading: 'Trello',
        category: 'Project Management',
        detail: 'Align your financial tasks with project workflows by integrating Zippay with Trello',
    },
    {
        icon: './images/Integrations Images/cat-card-5.png',
        heading: 'Zapier',
        category: 'Automation',
        detail: 'Automate workflows by linking Zippay with over 2,000 apps through Zapier',
    },
    {
        icon: './images/Integrations Images/cat-card-6.png',
        heading: 'Microsoft Teams',
        category: 'Collaboration',
        detail: 'Receive financial updates and manage transactions within Microsoft Teams for efficient collaboration',
    },
];

const container = document.querySelector('.categories-right-middle');
const pagination = document.querySelector('.categories-right-lower');

function renderCategories(filterCategory = 'All Categories') {
    container.innerHTML = '';

    const filteredCategories = 
        filterCategory === 'All Categories'
            ? categories
            : categories.filter((cat) => cat.category === filterCategory);

    if (filteredCategories.length === 0) {
        const noResultText = `<h5 class="description">No result found</h5>`;
        container.innerHTML = noResultText;
        pagination.style.display = 'none'
    }
     else {
        if(filteredCategories.length <= 6) {
            pagination.style.display = 'none'
            const cardsHTML = filteredCategories.map((category) => `
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
            `).join('');
    
            container.innerHTML = cardsHTML; 
        }

        else {
            pagination.style.display = 'flex'
            const cardsHTML = filteredCategories.map((category) => `
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
            `).join('');
    
            container.innerHTML = cardsHTML; // Show the cards
        }
    }
}


function setupFilters() {
    const categoryElements = document.querySelectorAll(".categories-left .cat-names h5");

    categoryElements.forEach((element, index) => {
        element.addEventListener("click", () => {
            // Animate the selected category indicator
            gsap.to(".selected-category", {
                duration: 0.5,
                transform: `translateY(${index * 100}%)`,
            });

            // Render categories based on selected filter
            const selectedCategory = element.textContent.trim();
            renderCategories(selectedCategory);
        });
    });
}


renderCategories();
setupFilters();