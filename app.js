function loadPharmacyData(pharmacyId) {
  fetch(`json/${pharmacyId}.json`)
    .then(response => response.json())
    .then(data => {
      document.title = data.title;
      document.getElementById('pharmacyName').textContent = data.name;
      document.getElementById('pharmacyLogo').src = data.logo;
      document.getElementById('pharmacyContact').textContent = data.contact;
      document.getElementById('pharmacyAddress').textContent = data.address;
      document.getElementById('pharmacyContent').textContent = data.content;
    })
    .catch(error => console.error('Error fetching pharmacy data:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pharmacyId = urlParams.get('pharmacy');
  
  if (pharmacyId) {
    loadPharmacyData(pharmacyId);
  }
});
