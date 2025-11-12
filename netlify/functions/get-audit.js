const { verify } = require('./_lib');

exports.handler = async (event) => {
  try{
    const token = event.queryStringParameters && event.queryStringParameters.token;
    if(!token) return { statusCode: 400, body: 'Missing token' };
    const secret = process.env.AUDIT_SIGNING_SECRET;
    if (!secret) return { statusCode: 500, body: 'Missing AUDIT_SIGNING_SECRET' };

    const payload = verify(token, secret);
    if(!payload) return { statusCode: 401, body: 'Invalid token' };

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify(payload)
    };
  }catch(e){
    return { statusCode: 400, body: e.message || 'Bad request' };
  }
};
