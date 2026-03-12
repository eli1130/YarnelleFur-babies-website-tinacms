import { useTina } from 'tinacms/dist/react'
import { client } from '../../tina/__generated__/client'
import LitterPage from '../../components/LitterPage'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const FALLBACK = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0001.jpg'

function cleanUrl(url) {
  if (!url) return null
  return url
    .replace(/^\/uploads/, '')
    .replace(/^https:\/\/assets\.tina\.io\/[a-f0-9-]+/, '')
}

export default function Page(props) {
  const router = useRouter()
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  const d = data.litter
  useEffect(() => {
    if (d.active === false) {
      router.replace('/')
    }
  }, [d.active])
  if (d.active === false) return null
  const allPuppyPhotos = (d.puppies || []).flatMap(p =>
    (p.photos || []).map(ph => cleanUrl(ph.src)).filter(Boolean)
  )
  const photos = allPuppyPhotos.length > 0 ? allPuppyPhotos : []
  const prevPhotos = (d.previousPuppies || []).map(p => cleanUrl(p.src)).filter(Boolean)
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
    damPhoto: cleanUrl(d.damPhoto) || FALLBACK,
    sirePhoto: cleanUrl(d.sirePhoto) || FALLBACK,
    photos,
    prevPhotos: prevPhotos.length > 0 ? prevPhotos : [],
    puppies: (d.puppies || []).map(p => ({
      name: p.name,
      gender: p.gender,
      price: p.price,
      status: p.status,
    })),
  }
  return <LitterPage litter={litter} />
}

export async function getStaticProps() {
  const { data, query, variables } = await client.queries.litter({
    relativePath: `saint-blake.json`,
  })
  return {
    props: { data, query, variables },
  }
}
