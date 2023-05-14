console.log('adskg');

const inputField = document.getElementById('input-field');

function showOnDisplay(value) {
    inputField.value += value;
}

document.getElementById('del').addEventListener('click', function () {
    inputField.value = '';
})