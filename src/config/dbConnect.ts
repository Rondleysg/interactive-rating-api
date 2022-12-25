import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect(
    "mongodb+srv://root:root@cluster0.fkajlmf.mongodb.net/project-rating?retryWrites=true&w=majority"
);

const db: mongoose.Connection = mongoose.connection;

export default db;
