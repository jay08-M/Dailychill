document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('alertButton');
    button.addEventListener('click', () => {
        alert('your massage is already sent');
    });
});