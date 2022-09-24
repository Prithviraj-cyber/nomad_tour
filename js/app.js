const cityForm = document.querySelector(".form");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const weatherIcon = document.querySelector(".icon img");
const card = document.querySelector(".card");

		const updateUI = async (data) => {
			const { cityDetails, weather } = data;

			details.innerHTML =`
				<h3 class="deg">${weather.Temperature.Metric.Value}&deg;/17&deg;</h3>
				<p>${weather.WeatherText} and humid with intervals of cloud & sun ${cityDetails.EnglishName}</p>
			`;

		};

		const updateCity = async (city) => {
			const cityDetails = await getCity(city);
			const weather = await getWeather(cityDetails.Key);

			return{ cityDetails, weather };
		};

		cityForm.addEventListener("submit", (e) => {
			e.preventDefault();

			const city = cityForm.city.value.trim();
			cityForm.reset();

			updateCity(city).then((data) => updateUI(data))
			.catch((err) => console.log(err));
		});
		
