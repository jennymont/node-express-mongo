import mongoose, {mongo} from "mongoose"

export const connectDataBase = (async () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;

})

