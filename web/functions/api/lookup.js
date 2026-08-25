export async function onRequestPost({ request }) {
  try {
    const body = await request.text();
    const r = await fetch('https://doggo.mrkaran.dev/api/lookup/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
    });
    return new Response(await r.text(), {
      status: r.status,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ status: 'error', message: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
