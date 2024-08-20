const exchangeRates = {
    USD: {
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.50,
        USD: 1
    },
    EUR: {
        USD: 1.18,
        GBP: 0.88,
        JPY: 129.53,
        EUR: 1
    },
    GBP: {
        USD: 1.33,
        EUR: 1.14,
        JPY: 146.70,
        GBP: 1
    },
    JPY: {
        USD: 0.0090,
        EUR: 0.0077,
        GBP: 0.0068,
        JPY: 1
    }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid amount.';
        return;
    }
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
