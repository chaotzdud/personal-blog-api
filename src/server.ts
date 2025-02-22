import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/database";
import articleRoutes from "./routes/articleRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
  });
}).catch((error: any) => {
  console.error("Erro ao iniciar o servidor:", error);
});
