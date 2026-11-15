// MDU Navigator – KronoX schedule relay (Cloudflare Worker)
// Lets the web version read KronoX iCal schedules (browsers block this directly).
// Only forwards KronoX schedule links from webbschema.mdu.se – nothing else.

const ALLOWED_HOST = 'webbschema.mdu.se';
const ALLOWED_PATH = '/setup/jsp/SchemaICAL.ics';
const ALLOWED_ORIGINS = [
  'https://mohkhalifa90.github.io',
  'http://localhost:8765',
];

export default {
  async fetch(request) {
    const origin = request.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Vary': 'Origin',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method !== 'GET') return new Response('Method not allowed', { status: 405, headers: cors });

    const target = new URL(request.url).searchParams.get('url');
    let u;
    try { u = new URL(target); } catch { return new Response('Missing or bad url', { status: 400, headers: cors }); }
    if (u.protocol !== 'https:' || u.hostname !== ALLOWED_HOST || u.pathname !== ALLOWED_PATH) {
      return new Response('Only KronoX schedule links are allowed', { status: 403, headers: cors });
    }

    const r = await fetch(u.toString(), {
      headers: { 'User-Agent': 'MDU-Navigator-relay' },
      cf: { cacheTtl: 600, cacheEverything: true }, // cache each schedule 10 min
    });
    if (!r.ok) return new Response('KronoX error ' + r.status, { status: 502, headers: cors });
    const text = await r.text();
    if (!text.includes('BEGIN:VCALENDAR')) return new Response('Not a calendar', { status: 502, headers: cors });

    return new Response(text, {
      headers: { ...cors, 'Content-Type': 'text/calendar; charset=utf-8', 'Cache-Control': 'public, max-age=600' },
    });
  },
};
