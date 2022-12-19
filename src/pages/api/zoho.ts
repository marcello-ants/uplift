const WEBHOOK_PATH =
    'https://flow.zoho.com/770286561/flow/webhook/incoming?zapikey=1001.ec7f83e7dcdfa3afe91f13b59117c733.0f4ad8b4b0f03a1c86abb106ba2acf68&isdebug=false'

export default async function handler(req: any, res: any) {
    const {
        body: { name, email },
        method
    } = req

    switch (method) {
        case 'POST':
            await fetch(WEBHOOK_PATH, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email
                })
            })
                .then(() => res.status(200).json({ message: 'Added sucessfully' }))
                .catch(() => res.status(500).json({ error: 'We had trouble processing your request' }))

            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).json({ error: `Method ${method} not allowed` })
    }
}
