export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, breed, message } = req.body

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' })
  }

  // Log the submission (in production you'd send an email here)
  console.log('New puppy application:', { name, email, phone, breed, message })

  return res.status(200).json({ message: 'Application received!' })
}
