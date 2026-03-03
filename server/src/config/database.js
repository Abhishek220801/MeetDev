import mongoose from "mongoose"

export default async function connectDB() {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected successfully to mongoDB");
} 

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Disconnected gracefully with mongoDB");
  process.exit(0);
})
