const express = require('express')
const app = express()


const rappers = {
    '21 savage': {
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29,
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rappersName = request.params.name.toLowerCase()
    if( rappers[rappersName] ) {
        response.json(rappers[rappersName])
    }else {
        response.json(rappers['unknown'])
    }
})


const PORT = 8000

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}`)
})