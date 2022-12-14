	const key = "ghibFEePTdY5YUWDKsF1IgKnkkT2wwvv";

		const getWeather = async (id) => {
			// const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
			const base = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/`;
			const query = `${id}?apikey=${key}&metric=yes`;

			const response = await fetch(base + query);
			const data = await response.json();

			return data;
		};

		const getCity = async (city) => {
			const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
			const query = `?apikey=${key}&q=${city}`;

			const response = await fetch(base + query);
			const data = await response.json();

			return data[0];
		};
