import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0005.jpg';
const litter = {
  title: 'Mini Multigen Bernedoodles', breeder: 'Luke & Eli Yarnelle', generation: 'Multigen',
  priceRange: '$800', parents: 'Meadow May × Sycamore',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'October 27, 2025', takeHome: 'Ready Now!',
  size: '25–45 lbs', grooming: 'Every 6–8 weeks',
  temperament: 'Predictable coats, exceptional temperament, great with families',
  puppies: [
    { name:'TBD', gender:'Girl', price:'$800' },
  ],
  dam: { name:'Meadow May', desc:'Mini Bernedoodle' },
  sire: { name:'Sycamore', desc:'AKC Mini Poodle' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG],
  deposit: 200, contact: 'Brooke · (260) 443-9035',
};
export default function Page() { return <LitterPage litter={litter} />; }
