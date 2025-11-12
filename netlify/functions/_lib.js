// Common helpers for signing tokens
const crypto = require("crypto");

function base64url(input){
  return Buffer.from(input).toString('base64').replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
}
function base64urlJSON(obj){ return base64url(JSON.stringify(obj)); }

function sign(payload, secret){
  const header = { alg: "HS256", typ: "NEAUD" };
  const h = base64urlJSON(header);
  const p = base64urlJSON(payload);
  const data = `${h}.${p}`;
  const sig = crypto.createHmac('sha256', secret).update(data).digest('base64')
    .replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
  return `${data}.${sig}`;
}

function verify(token, secret){
  const [h,p,s] = token.split('.');
  if(!h || !p || !s) return null;
  const data = `${h}.${p}`;
  const expSig = crypto.createHmac('sha256', secret).update(data).digest('base64')
    .replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
  if (crypto.timingSafeEqual(Buffer.from(s), Buffer.from(expSig)) === false) return null;
  try { return JSON.parse(Buffer.from(p.replace(/-/g,'+').replace(/_/g,'/'),'base64').toString('utf8')); }
  catch { return null; }
}

module.exports = { sign, verify };
