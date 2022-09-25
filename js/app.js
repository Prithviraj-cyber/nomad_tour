
	const details = document.getElementById("details");

	const updateUI = async (data) => {
	  	const { cityDetails, weather } = data;

	  	details.innerHTML = `
					<div class="w_degree">
						<h3>TUE <br><span>8/24</span></h3>
						<i class="bi bi-cloud-rain-heavy-fill"></i>
						<h3 class="deg">${weather.Temperature.Metric.Value}&deg;/${weather.Temperature.Metric.Value}&deg;</h3>
					</div>
					<div class="w_det">
						<p>${weather.WeatherText} and humid with intervals of cloud & sun ${cityDetails.EnglishName}</p>
						<div class="per d-flex"><i class="bi bi-droplet"></i> <h3>28 %</h3> 
							<button data-bs-toggle="collapse" data-bs-target="#collapseTwo1">
								<i class="bi bi-plus-square-fill"></i>
							</button>
						</div>
					</div>
				`;

	};

	async function updateCity(city) {
	  	const cityDetails = await getCity(city);
	  	const weather = await getWeather(cityDetails.Key);

	  	return { cityDetails, weather };
	}

	updateCity("Paris").then((data) => {
	    updateUI(data);
	    console.log(data);
	}).catch((err) => console.log(err));
