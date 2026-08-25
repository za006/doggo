export async function onRequestPost({ request }) {
  const body = await request.json();
  const r = await fetch('https://doggo.mrkaran.dev/api/lookup/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return new Response(await r.text(), {
    status: r.status,
    headers: { 'Content-Type': 'application/json' }
  });
}
