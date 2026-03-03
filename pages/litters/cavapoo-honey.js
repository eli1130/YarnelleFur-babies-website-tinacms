import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0008.jpg';
const litter = {
  title: 'Cavapoos', breeder: 'Dakoda & Brooke Labenz', generation: 'F1B',
  priceRange: '$2,000', parents: 'Honey × Teddy',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'TBD', takeHome: 'TBD',
  size: '10–20 lbs', grooming: 'Every 6–8 weeks',
  temperament: 'Small in size, enormous in personality, affectionate, low-shedding, great lap dogs',
  puppies: [
    { name:'TBD', gender:'Girl', price:'$2,000' },
    { name:'TBD', gender:'Boy', price:'$2,000' },
  ],
  dam: { name:'Honey', desc:'F1 Cavapoo' },
  sire: { name:'Teddy', desc:'AKC Toy Poodle' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG],
  deposit: 400, contact: 'Brooke · (260) 443-9035',
};
export default function Page() { return <LitterPage litter={litter} />; }
