import basicos from './images/basicos.jpg';
import nutebasicos from './images/nutebasicos.jpg';
const products = [
{
    id:1,
    name: "Waffles basicos",
    productType: "Basicos",
    price: 250,
    rating:4,
    image: {basicos},
    description: "Los clasicos mas ricos",
},
{
    id:2,
    name: "Waffles nutebasicos",
    productType: "Nutebasicos",
    price: 290,
    rating:4,
    image: {nutebasicos},
    description: "Los nuteclasicos mas ricos",
},



];
export default products;