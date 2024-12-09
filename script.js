const API_KEY = 'c3650a61a9264e74a8dbff6ac193b8f6'; // Replace with your NewsAPI key
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const fetchNews = async () => {
    const newsContainer = document.getElementById('news-container');
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Clear the loading message
        newsContainer.innerHTML = '';

        // Display each article
        data.articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.className = 'article';
            articleDiv.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(articleDiv);
        });
    } catch (error) {
        // Handle errors
        newsContainer.innerHTML = `<p style="color: red;">Error fetching news: ${error.message}</p>`;
        console.error('Error fetching news:', error);
    }
};

// Fetch news on page load
fetchNews();
