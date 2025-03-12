async function callDeepSeekAPI(query) {
    const apiKey = 'YOUR_DEEPSEEK_API_KEY';
    const url = 'https://api.deepseek.com/v1/query';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ query })
    });

    const data = await response.json();
    return data.response;
}
