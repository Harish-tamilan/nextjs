export default async function handler(req, res) {
    res.status(200).send({
        status: 'success',
        data: [
            {
                id: 1,
                name: "Arjun"
            },
            {
                id: 2,
                name: "Aadhi"
            }
        ]
    })
}