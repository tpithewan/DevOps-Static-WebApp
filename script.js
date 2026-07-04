const button = document.getElementById('statusButton');

if (button) {
  button.addEventListener('click', () => {
    button.textContent = 'Deployment is automated via GitHub Actions';
  });
}
