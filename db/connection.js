import mongoose from "mongoose"; 
const connection = mongoose.connect("mongodb+srv://sween:khan@cluster1ter1.dvm1q0h.mongodb.net/?retryWrites=true&w=majority&appName=cluster1ter1")

export default connection