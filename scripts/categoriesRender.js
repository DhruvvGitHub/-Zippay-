// Rendering cards through JS in Integrations page 
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


function renderCategories() {
    const container = document.querySelector('.categories-right-middle');
    container.innerHTML = ''; 

    categories.forEach((category) => {
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
                <div class="catoegories-description">
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

renderCategories();