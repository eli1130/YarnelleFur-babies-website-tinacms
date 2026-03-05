import { useTina } from 'tinacms/dist/react'
import { client } from '../../tina/__generated__/client'
import LitterPage from '../../components/LitterPage'

const FALLBACK = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0002.jpg'

export default function Page(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const d = data.litter
  const litter = {
    title: d.title,
    breeder: d.breeder,
    generation: d.generation,
    priceRange: d.priceRange,
    parents: d.litterTitle,
    dob: d.dateOfBirth,
    takeHome: d.takeHomeDate,
    size: d.estimatedSize,
    grooming: d.grooming,
    temperament: d.temperament,
    deposit: parseInt(d.deposit?.replace(/\D/g, '')) || 200,
    contact: d.contact,
    dam: { name: d.damName, desc: d.damDesc },
    sire: { name: d.sireName, desc: d.sireDesc },
    damPhoto: d.damPhoto || FALLBACK,
    sirePhoto: d.sirePhoto || FALLBACK,
    photos: [FALLBACK, FALLBACK, FALLBACK, FALLBACK, FALLBACK],
    prevPhotos: [FALLBACK, FALLBACK, FALLBACK, FALLBACK],
    puppies: (d.puppies || []).map(p => ({ name: p.name, gender: p.gender, price: p.price })),
  }

  return <LitterPage litter={litter} />
}

export async function getStaticProps() {
  const { data, query, variables } = await client.queries.litter({
    relativePath: 'goldendoodle-helga.json',
  })
  return {
    props: { data, query, variables },
  }
}
