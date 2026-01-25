const fs = require('fs')

const filePath = 'input_countries.csv'

const existFiles = ['usa.txt', 'canada.txt']

existFiles.forEach(file => {
    fs.unlink(file, err => {
        if (err && err.code !== 'ENOENT') {
            console.error(err)
        }
        console.error(`${file} was deleted successfully`)
    })
})

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log("Unable to read file: " + err)
    }else if(data){

        const rows = data.split('\n')
        let fields = []
        let countries = ['Canada', 'United States']
        let country = ""
        let pathToWrite = ""
        let dataToWrite = ""

        rows.forEach(row => {
            fields = row.split(',')
            country = fields[0]
            if(countries.includes(country)) {
                const pathToWrite = country === "Canada" ? 'canada.txt' : 'usa.txt'
                const dataToWrite = fields.join(',') + '\n'
                fs.appendFile(pathToWrite, dataToWrite, 'utf-8',(err) => {
                    if (err) {
                        console.log('Unable to write file: ' + err)
                    }else{
                        console.log('Written successfully.')
                    }
                })
            }
        })
    }else{
        console.log("No data to read")
    }
})

