import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0010.jpg';
const litter = {
  title: 'Micro Mini Goldendoodles', breeder: 'Hunter & Sarah Nicodemus', generation: 'F1B',
  priceRange: '$1,500', parents: 'Helga × Cedar',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'TBD', takeHome: 'TBD',
  size: '10–20 lbs', grooming: 'Every 6–8 weeks',
  temperament: 'Tiny bundles of golden joy, low-shedding, playful, affectionate',
  puppies: [
    { name:'TBD', gender:'Girl', price:'$1,500' },
    { name:'TBD', gender:'Boy', price:'$1,500' },
  ],
  dam: { name:'Helga', desc:'Micro Mini Goldendoodle' },
  sire: { name:'Cedar', desc:'AKC Toy Poodle' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG],
  deposit: 300, contact: 'Sarah · (260) 494-0405',
};
export default function Page() { return <LitterPage litter={litter} />; }
