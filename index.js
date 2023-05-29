const express = require('express');
const app = express();

app.use(express.json());

const paises = [
    {id:1, imagen:'https://www.mundo-nomada.com/wp-content/uploads/2020/03/Templos-de-Angkor-Wat-e1590459718747.jpg', nombre:'Templos de Angkor', info:'Angkor Wat es el mayor templo del mundo consagrado al dios Visnú y puede parecer fuera de lugar en la Camboya budista, pero este magnífico monumento es el principal tesoro del reino hindú que en otros tiempos abarcó hasta Birmania'},
    {id:2, imagen:'https://images.ecestaticos.com/LizhY4X9vXTDzvxKRNxy9WSIHRw=/0x0:2000x1500/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F97f%2F6b2%2Fe69%2F97f6b2e6988c9c97bc4730227806382e.jpg', nombre:'Gran Barrera de Coral', info:'Esta maravilla natural de más de 3000 km frente a la costa noreste de Australia es la mayor red del mundo de arrecifes de coral, con 400 tipos de coral y 1500 especies de peces. En sus aguas se han visto cerca de 30 clases de ballenas, delfines y marsopas, 6 especies de tortugas marinas y 17 clases de serpientes marinas.'},
    {id:3, imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg', nombre:'Machu Picchu', info:'Lo que convierte el Machu Picchu en un lugar fuera de serie no es el espectacular paisaje andino ni la manera en que la ciudad se aferra a las escarpadas laderas, lo realmente asombroso es que nadie sabe qué sucedió.'},
    {id:4, imagen:'https://topadventure.com/__export/1610654165866/sites/laverdad/img/2021/01/14/muralla_china_2.jpg_423682103.jpg', nombre:'Gran Muralla', info:'Es mucho más que una muralla; es un impresionante entramado de muros y fortificaciones que recorren 8850 increíbles kilómetros del agreste paisaje del norte del estado. Hay que escoger un tramo, que dependerá si se quiere descubrir la magnificencia imperial (cerca de Pekín), la precisión militar (en Gansu) o la desolación eterna (en la Mongolia interior).'},
    {id:5, imagen:'https://s1.significados.com/foto/cultural-tourism-5264542-1920_bg.jpg', nombre:'Taj Mahal', info:'Este mausoleo está considerado como la perfección arquitectónica, una auténtica joya que lleva atrayendo viajeros a la India desde hace siglos. Ningún otro edificio de la India ha conseguido resumir con tanta perfección la actitud y el ambiente de la corte de los mogoles. La polvorienta y ruidosa Agra es el centro neurálgico de las visitas al Taj Mahal, y también de los cazaturistas y vendedores de souvenirs. Para evitarlos hay que llegar al amanecer, justo cuando se abren las puertas.'},
    {id:6, imagen:'https://guias-viajar.com/wp-content/uploads/2021/12/gran-canon-colorado-002.jpg', nombre:'Parque Nacional del Gran Cañón', info:'En esta vasta hendidura de la corteza terrestre se ven 2000 millones de años de tiempo geológico. Este dato parece descolocar al cerebro humano. Con encendidas puestas de sol, oleadas de niebla y polvo de nieve, el Gran Cañón, con una profundidad de más de 1 km y cerca de 360 km de largo, es la catedral de la naturaleza. Los visitantes suelen entrar al cañón por el extremo sur, unos 120 km al norte de Flagstaff, en Arizona.'},
    {id:7, imagen:'https://phantom-elmundo.unidadeditorial.es/fff7e9eea67bc4ad764047a9f21764a0/resize/828/f/webp/assets/multimedia/imagenes/2021/07/05/16254919900394.jpg', nombre:'Coliseo de Roma', info:'Es el monumento más apasionante de Roma y una conmemoración del poder crudo y despiadado: un gigantesco anfiteatro para 50 000 espectadores en el que los gladiadores se enfrentaban en combate mortal y los condenados luchaban con bestias salvajes ante la mirada de espectadores sedientos de sangre'},
    {id:8, imagen:'https://media.traveler.es/photos/613768f03decec3303bab7da/16:9/w_1856,h_1044,c_limit/158835.jpg', nombre:'Cataratas de Iguazú', info:'En guaraní Iguazú significa “agua grande”. Pero realmente estas cataratas son mucho más: ¡son enormes y fuera de serie! Los barcos turísticos que recorren las agitadas aguas parecen cerillas desde arriba. Se pueden ver enteras a través de un tramo de magnífica selva subtropical repleta de animales salvajes, como jaguares.'},
];


app.get('/',(req, res) => {
    res.send('Inicio padrino');
});

app.get('/api/Lugares', (req, res) => {
    res.send(paises);
});


const port = process.env.port || 3000;
app.listen(port, () => console.log(`Puerto listo ${port}...`));