const BASE_URL = 'https://k581rc3wm2.execute-api.us-east-1.amazonaws.com/dev';

export const POST = ({ path, body }) => (
    fetch(`${BASE_URL}/${path}`, {
        method: 'POST',
        body: JSON.stringify(body)
    })
)

export const GET = ({ path }) => (
    fetch(`${BASE_URL}/${path}`, {
        method: 'GET'
    })
)