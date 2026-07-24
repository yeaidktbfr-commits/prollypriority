const analyzeBtn = document.getElementById('analyzeBtn');
const status = document.getElementById('status');

analyzeBtn.addEventListener('click', () => {
    status.textContent = 'Analyzing Instagram DMs...';

    setTimeout(() => {
        status.textContent = 'Analysis complete! 🎉';
    }, 1500);
});