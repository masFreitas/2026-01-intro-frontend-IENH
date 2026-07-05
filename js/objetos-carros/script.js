const carros = [
    {
        marca: 'Chevrolet',
        modelo: 'Astra',
        anoFabricacao: 2007,
        anoModelo: 2007,
        ciMotor: 2000,
        numCilindros: 4,
        alimentacao: 'NA'
    },
    {
        marca: 'Volkswagen',
        modelo: 'Up',
        anoFabricacao: 2020,
        anoModelo: 2020,
        ciMotor: 1000,
        numCilindros: 3,
        alimentacao: 'Turbo'
    },
    {
        marca: 'Fiat',
        modelo: 'Uno',
        anoFabricacao: 2015,
        anoModelo: 2016,
        ciMotor: 1000,
        numCilindros: 4,
        alimentacao: 'NA'
    },
    {
        marca: 'Honda',
        modelo: 'Civic',
        anoFabricacao: 2019,
        anoModelo: 2020,
        ciMotor: 2000,
        numCilindros: 4,
        alimentacao: 'NA'
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        anoFabricacao: 2021,
        anoModelo: 2022,
        ciMotor: 2000,
        numCilindros: 4,
        alimentacao: 'NA'
    },
    {
        marca: 'Ford',
        modelo: 'Fusion',
        anoFabricacao: 2018,
        anoModelo: 2019,
        ciMotor: 2500,
        numCilindros: 4,
        alimentacao: 'NA'
    },
    {
        marca: 'Hyundai',
        modelo: 'HB20',
        anoFabricacao: 2022,
        anoModelo: 2023,
        ciMotor: 1000,
        numCilindros: 3,
        alimentacao: 'Turbo'
    },
    {
        marca: 'Renault',
        modelo: 'Sandero',
        anoFabricacao: 2017,
        anoModelo: 2018,
        ciMotor: 1600,
        numCilindros: 4,
        alimentacao: 'NA'
    },
    {
        marca: 'Jeep',
        modelo: 'Compass',
        anoFabricacao: 2023,
        anoModelo: 2024,
        ciMotor: 1300,
        numCilindros: 4,
        alimentacao: 'Turbo'
    },
    {
        marca: 'BMW',
        modelo: '320i',
        anoFabricacao: 2020,
        anoModelo: 2021,
        ciMotor: 2000,
        numCilindros: 4,
        alimentacao: 'Turbo'
    }
];

const [primeiroCarro] = carros
console.log(primeiroCarro)

const [{marca, modelo, ...infosRestantes}] = carros;
console.log(infosRestantes)
console.log(marca)