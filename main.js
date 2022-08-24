const axios = require('axios')
const xl = require('excel4node')

function generateXlsx(countriesArr) {
  console.log('Generating workbook')

  // Create a new instance of a Workbook class
  const wb = new xl.Workbook()

  // Add Worksheets to the workbook
  const ws = wb.addWorksheet('Sheet 1')

  // Create a reusable style
  const titleStyle = wb.createStyle({
    alignment: {
      horizontal: 'center'
    },
    font: {
      bold: true,
      color: '#4F4F4F',
      size: 16
    }
  })

  // Create a reusable style
  const headerStyle = wb.createStyle({
    font: {
      bold: true,
      color: '#808080',
      size: 12
    }
  })

  // Title
  ws.cell(1, 1, 1, 4, true).style(titleStyle).string('Countries List')

  // Table heading columns
  const headingColumnNames = ['Name', 'Capital', 'Area', 'Currencies']

  // Create table heading columns
  let headingColumnIndex = 1
  headingColumnNames.forEach(heading => {
    ws.cell(2, headingColumnIndex++)
      .style(headerStyle)
      .string(heading)
  })

  // Create table data rows/columns
  let rowIndex = 3
  countriesArr.forEach(country => {
    let columnIndex = 1
    Object.keys(country).forEach(columnName => {
      ws.cell(rowIndex, columnIndex++).string(country[columnName])
    })
    rowIndex++
  })

  console.log('Done generating workbook')

  return wb
}

function writeFile(wb) {
  console.log('Writing workbook to file')

  wb.write('countries.xlsx', err => {
    if (err) {
      console.error('Error writing workbook to file', err)
    }
    console.log('Done writing workbook to file')
  })
}

function formatCountriesArr(countries) {
  console.log('Formatting countries')

  const formattedCountries = countries.map(country => {
    const name = country.name.common
    const capital = country?.capital?.[0] ?? '-'
    const area = country?.area
      ? Number(country?.area).toLocaleString('pt-BR', {
          minimumFractionDigits: 2
        })
      : '-'

    const currencies = country.currencies
      ? Object.keys(country.currencies).join(',')
      : '-'

    return {
      name,
      capital,
      area,
      currencies
    }
  })

  console.log('Done formatting countries')

  return formattedCountries
}

async function fetchCountries() {
  try {
    console.log('Fetching countries')
    const { data } = await axios.get('https://restcountries.com/v3.1/all')
    console.log('Done fetching countries')
    const formattedCountriesArr = formatCountriesArr(data)
    const xlsx = generateXlsx(formattedCountriesArr)
    writeFile(xlsx)
  } catch (e) {
    console.error('Error fetching countries', e)
  }
}

fetchCountries()
