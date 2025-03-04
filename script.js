document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function fadeInOnScroll() {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('show');
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run once on load
});


document.addEventListener("DOMContentLoaded", function () {
    async function fetchCryptoPrices() {
        try {
            const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
            const data = await response.json();

            document.getElementById("btc-price").innerText = `Bitcoin (BTC): $${data.bitcoin.usd}`;
            document.getElementById("eth-price").innerText = `Ethereum (ETH): $${data.ethereum.usd}`;
        } catch (error) {
            console.error("Error fetching crypto prices:", error);
        }
    }

    async function fetchStockPrices() {
        try {
            const response = await fetch("https://api.polygon.io/v1/last_quote/stocks/NASDAQ?apiKey=YOUR_API_KEY");
            const data = await response.json();

            document.getElementById("nasdaq-price").innerText = `NASDAQ: $${data.last.askprice}`;
        } catch (error) {
            console.error("Error fetching stock prices:", error);
        }
    }

    function updatePrices() {
        fetchCryptoPrices();
        fetchStockPrices();
    }

    updatePrices(); // Initial fetch
    setInterval(updatePrices, 30000); // Refresh prices every 30 seconds
});
