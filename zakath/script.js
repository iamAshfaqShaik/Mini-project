function calculateZakat() {
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const gold = parseFloat(document.getElementById('gold').value) || 0;
    const silver = parseFloat(document.getElementById('silver').value) || 0;

    
    const totalWealth = cash + (gold * 80.33) + (silver * 0.672);
    const zakatAmount = totalWealth >= 595 ? totalWealth * 0.025 : 0;

    document.getElementById('result').innerText = `Your Zakat amount is: $${zakatAmount.toFixed(2)}`;
}
