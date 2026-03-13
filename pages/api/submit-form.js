export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const body = new URLSearchParams({
    'form-name': 'puppy-application',
    ...req.body
  }).toString();

  const response = await fetch('https://yarnellefur-babies.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  res.status(response.status).end();
}
