const { sign } = require('./_lib');

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };
    const body = JSON.parse(event.body || '{}');

    const secret = process.env.AUDIT_SIGNING_SECRET;
    if (!secret) return { statusCode: 500, body: 'Missing AUDIT_SIGNING_SECRET' };

    // Build payload
    const now = new Date().toISOString();
    const payload = {
      iat: now,
      reportUrl: 'https://audit-numerion.netlify.app',
      company: {
        name: body.companyName,
        period: body.period,
        auditId: body.auditId,
        date: body.date,
        cash: Number(body.cash || 0)
      },
      notes: body.notes || '',
      scenarios: defaultScenarios(Number(body.cash || 0), Number(body.horizon || 24)),
      security: { commitHash: (process.env.COMMIT_REF || 'local').slice(0,7), year: new Date().getFullYear() }
    };

    const token = sign(payload, secret);
    const url = `/audit.html?token=${encodeURIComponent(token)}`;
    return { statusCode: 200, body: JSON.stringify({ url }) };
  } catch (e) {
    return { statusCode: 400, body: e.message || 'Bad request' };
  }
};

function defaultScenarios(startCash, months){
  const baseline = Array.from({length: months},(_,i)=>Math.round(startCash * (1 + 0.002*i)));
  const mk = (pct)=>({
    name: `${pct}%`,
    allocPct: pct,
    monthly: baseline.map((b,i)=>Math.round(b * (1 + pct/100 * (i/(months*0.8)))))
  });
  return { horizonMonths: months, series: [mk(1), mk(3), mk(5)], baseline };
}
