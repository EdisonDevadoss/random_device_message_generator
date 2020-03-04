const fetch = require('node-fetch');

const devices = [
    {
        id: 1,
        name: 'cluster1'
    },
    {
        id: 2,
        name: 'cluster2'
    },
    {
        id: 3,
        name: 'cluster3'
    },
    {
        id: 4,
        name: 'cluster4'
    },
    {
        id: 5,
        name: 'cluster5'
    },
    {
        id: 6,
        name: 'cluster6'
    },
    {
        id: 7,
        name: 'cluster7'
    },
    {
        id: 8,
        name: 'cluster8'
    },
    {
        id: 9,
        name: 'cluster9'
    },
    {
        id: 10,
        name: 'cluster10'
    }
]

function generateRandomValue(){
    const limit = 10;
    const temperatureLimit = 100;
    const volatageLimit = 100;
    const clusterID = Math.floor(Math.random()*limit)+1;
    const temperature = Math.floor(Math.random()*temperatureLimit)+1;
    const volatage = Math.floor(Math.random()*volatageLimit)+1;

    const device = devices[clusterID];

    const cluster = {
        device_id: `${device.id}`,
        device_name: `${device.name}`,
        temperature: temperature,
        voltage: volatage
    };    

    const updateCluster = {
        device: {...cluster}
    }

    return fetch('http://localhost:3000/v1/device_messages', {
        method: 'POST',
        body: JSON.stringify(updateCluster),
        headers: {
            'Content-Type': 'application/json'
          }
    }).then((response)=>{
        return response.json();
    })
    .then((res)=>{
        console.log('res is', res);
        
    }).catch((err)=>{
        console.log('err is', err);
        
    });
    
}

generateRandomValue()