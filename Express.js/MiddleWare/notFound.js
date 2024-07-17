const notFound = (req, res)  => res.status(400).send("resource not found")

module.exports = notFound