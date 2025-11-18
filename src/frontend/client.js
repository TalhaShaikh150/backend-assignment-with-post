async function getData() {
  const carsData = await fetch("http://localhost:3000/api/cars");
  const data = await carsData.json();
  renderCards(data);
}

function renderCards(carsData) {
  const vehicleCards = document.querySelector(".vehicle-card-container");
  let html = "";
  carsData.forEach((singleCar) => {
    html += `
    <div class="vehicle-card">
      
  <div class="card-header"  style="background-color: ${singleCar.color};">
            <div class="vehicle-year">${singleCar.year}</div>
            <div class="vehicle-make">${singleCar.make}</div>
            <div class="vehicle-model">${singleCar.model}</div>
        </div>
        
        <div class="card-body" >
            <div class="vehicle-image" style="background: linear-gradient(135deg, ${singleCar.color},${singleCar.color});
">
                <i class="fas fa-car car-icon"></i>
            </div>
            
            <div class="details-grid">
                <div class="detail-item">
                    <i class="fas fa-calendar-alt detail-icon"></i>
                    <div class="detail-label">Year</div>
                    <div class="detail-value">${singleCar.year}</div>
                </div>
                
                <div class="detail-item">
                    <i class="fas fa-palette detail-icon"></i>
                    <div class="detail-label">Color</div>
                    <div class="detail-value">${singleCar.color}</div>
                    <div class="color-swatch" style="background-color: ${singleCar.color};"></div>
                </div>
                
                <div class="detail-item">
                    <i class="fas fa-industry detail-icon"></i>
                    <div class="detail-label">Make</div>
                    <div class="detail-value">${singleCar.make}</div>
                </div>
                
                <div class="detail-item">
                    <i class="fas fa-car-side detail-icon"></i>
                    <div class="detail-label">Model</div>
                    <div class="detail-value">${singleCar.model}</div>
                </div>
            </div>
        </div>
        
        <div class="card-footer">
            <div class="vehicle-id">ID: ${singleCar.id}</div>
            <div class="vintage-badge">CLASSIC VEHICLE</div>
        </div>
            </div>
`;
  });
  vehicleCards.innerHTML = html;
}

getData();
