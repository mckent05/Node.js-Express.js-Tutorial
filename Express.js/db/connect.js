const { default: mongoose } = require("mongoose")
const password = encodeURIComponent("#Akinlade5920");

const connectionString = `mongodb+srv://atemitope95:${password}@cluster0.ygieuvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connectDB = () => {
    return mongoose.connect(connectionString) 
}
module.exports = connectDB