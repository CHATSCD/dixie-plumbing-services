import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function clean(value, maxLength) {
  if (value === undefined || value === null) return null;
  const trimmed = String(value).trim().slice(0, maxLength);
  return trimmed.length ? trimmed : null;
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot — pretend success so bots do not retry.
  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const phone = clean(payload.phone, 40);

  if (!name || !phone) {
    return NextResponse.json(
      { error: 'Name and phone number are required.' },
      { status: 400 }
    );
  }

  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // No backend configured: fail loudly, log the lead, and let the client
  // fall back to a tap-to-call instead of silently swallowing the request.
  if (!supabaseUrl || !supabaseKey) {
    console.error(
      '[request-service] Supabase is not configured — lead was not stored.',
      { name, phone, urgency: clean(payload.urgency, 40) }
    );
    return NextResponse.json(
      { error: 'Online requests are unavailable right now.' },
      { status: 503 }
    );
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from('service_requests').insert({
      name,
      phone,
      service: clean(payload.service, 80),
      urgency: clean(payload.urgency, 40),
      city: clean(payload.city, 80),
      details: clean(payload.details, 1000),
      source: 'website',
      user_agent: clean(request.headers.get('user-agent'), 300),
    });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[request-service] Failed to store lead.', error);
    return NextResponse.json(
      { error: 'Could not save your request.' },
      { status: 502 }
    );
  }
}
