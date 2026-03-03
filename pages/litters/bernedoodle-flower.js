import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0003.jpg';
const litter = {
  title: 'Mini F1B Bernedoodles', breeder: 'John & Kathy Yarnelle', generation: 'F1B',
  priceRange: '$1,200', parents: 'Flower × Sycamore',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'TBD', takeHome: 'TBD',
  size: '25–45 lbs', grooming: 'Every 6–8 weeks',
  temperament: 'Affectionate, low-shedding, gentle, great with families and children',
  puppies: [
    { name:'TBD', gender:'Girl', price:'$1,200' },
  ],
  dam: { name:'Flower', desc:'Mini Bernedoodle' },
  sire: { name:'Sycamore', desc:'AKC Mini Poodle' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG],
  deposit: 200, contact: 'Brooke · (260) 443-9035',
};
export default function Page() { return <LitterPage litter={litter} />; }
