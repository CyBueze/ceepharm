document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pharmacyName = urlParams.get('pharmacy');
  
  if (pharmacyName) {
    document.getElementById('pharmacyName').textContent = pharmacyName;
  }
});
