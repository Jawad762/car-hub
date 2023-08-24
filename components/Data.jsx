import axios from 'axios'

const getData = async (brandSearch, modelSearch, year, type, limit) => {
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: {
            make: brandSearch.length > 0 ? brandSearch : 'nd',
            model: modelSearch.length > 0 ? modelSearch : '',
            year: year ? year : '',
            fuel_type: type !== 'fuel' ? type : '',
            limit: limit
        },
        headers: {
            'X-RapidAPI-Key': '42a8aed54bmsh6e987e25ad2e368p1788d4jsnea553322cb24',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
        };
          
        const response = await axios.request(options);
        return response
    }

export default getData