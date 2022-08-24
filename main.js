const axios = require('axios')

async function fetchCountries() {
  try {
    console.log('Fetching countries')
    const { data } = await axios.get('https://restcountries.com/v3.1/all')
    console.log('Done fetching countries', data)
  } catch (e) {
    console.error('Error fetching countries', e)
  }
}

fetchCountries()
