// scratch/test_site.mjs
const BASE_URL = 'http://localhost:3000';

async function runTests() {
  console.log('--- STARTING COMPREHENSIVE AUTOMATED TESTS ---');
  let failures = 0;

  // Test 1: Landing Page
  try {
    const res = await fetch(`${BASE_URL}/`);
    const html = await res.text();
    console.log(`[PASS] GET / returned status ${res.status}`);

    const checks = [
      'SecureNet IT Services',
      'IT support that',
      'shows up',
      'Emergency IT Support',
      'Network &amp; Wi-Fi Setup',
      'Managed IT Support',
      'Cybersecurity',
      'Hardware &amp; Software',
      'Office IT Setup',
      'Business care',
      'Colombo',
      'Kandy',
      'Galle',
      'Jaffna',
      'Batticaloa',
    ];

    for (const phrase of checks) {
      if (!html.includes(phrase)) {
        console.error(`[FAIL] Page missing expected content: "${phrase}"`);
        failures++;
      }
    }
    console.log('[PASS] Landing page HTML content verification complete.');
  } catch (err) {
    console.error('[FAIL] Landing page request failed:', err.message);
    failures++;
  }

  // Test 2: Admin Page
  try {
    const res = await fetch(`${BASE_URL}/admin`);
    const html = await res.text();
    console.log(`[PASS] GET /admin returned status ${res.status}`);
    if (html.includes('ADMIN PORTAL') || html.includes('Support requests')) {
      console.log('[PASS] Admin portal page content verified.');
    } else {
      console.error('[FAIL] Admin portal page missing header.');
      failures++;
    }
  } catch (err) {
    console.error('[FAIL] Admin page request failed:', err.message);
    failures++;
  }

  // Test 3: API GET /api/requests
  let testId = '';
  try {
    const res = await fetch(`${BASE_URL}/api/requests`);
    const json = await res.json();
    console.log(`[PASS] GET /api/requests returned status ${res.status}, items: ${json.data?.length}`);
    if (!json.success || !Array.isArray(json.data) || json.data.length < 2) {
      console.error('[FAIL] Unexpected API response format');
      failures++;
    }
  } catch (err) {
    console.error('[FAIL] API GET failed:', err.message);
    failures++;
  }

  // Test 4: API POST /api/requests (Create new request)
  try {
    const payload = {
      company: 'Apex Lanka Pvt Ltd',
      contact: 'Kasun Dias',
      email: 'kasun@apexlanka.lk',
      phone: '077 555 1234',
      service: 'Network & Wi-Fi Setup',
      staff: '11–50 people',
      location: 'Colombo 07',
      date: '2026-10-25',
      time: 'Morning (8am–12pm)',
      notes: 'Need office cabling and access point installation.',
    };

    const res = await fetch(`${BASE_URL}/api/requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    console.log(`[PASS] POST /api/requests returned status ${res.status}, created ticket: ${json.data?.id}`);
    testId = json.data?.id;

    if (!json.success || !json.data?.id || json.data.company !== payload.company) {
      console.error('[FAIL] Unexpected POST response');
      failures++;
    }
  } catch (err) {
    console.error('[FAIL] API POST failed:', err.message);
    failures++;
  }

  // Test 5: API PATCH /api/requests (Update request status)
  try {
    if (testId) {
      const res = await fetch(`${BASE_URL}/api/requests`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: testId, status: 'Contacted' }),
      });
      const json = await res.json();
      console.log(`[PASS] PATCH /api/requests returned status ${res.status}`);
      if (!json.success) {
        console.error('[FAIL] Status update failed');
        failures++;
      }
    }
  } catch (err) {
    console.error('[FAIL] API PATCH failed:', err.message);
    failures++;
  }

  // Test 6: Verify Updated Status in GET
  try {
    const res = await fetch(`${BASE_URL}/api/requests`);
    const json = await res.json();
    const updated = json.data?.find((r) => r.id === testId);
    if (updated && updated.status === 'Contacted') {
      console.log(`[PASS] Ticket ${testId} status correctly updated to 'Contacted' in backend!`);
    } else {
      console.error('[FAIL] Ticket update was not reflected in list');
      failures++;
    }
  } catch (err) {
    console.error('[FAIL] API list verification failed:', err.message);
    failures++;
  }

  console.log('----------------------------------------------');
  if (failures === 0) {
    console.log('ALL TESTS PASSED WITH ZERO ERRORS!');
  } else {
    console.error(`COMPLETED WITH ${failures} FAILURE(S).`);
    process.exit(1);
  }
}

runTests();
