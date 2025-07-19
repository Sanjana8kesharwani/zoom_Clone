
/*
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors"; 



const app = express();
const server = createServer(app);
const io = new Server(server)

app.set("port", (process.env.PORT || 8000))

app.get("/home", (req, res) => {
    return res.json({"hello" : "world"})
});

const start = async () => {
    const connectionDb = await mongoose.connect("mongodb+srv://sanjanakesharwani32:Adrita@4141@zoomclonecluster.mvjk6zp.mongodb.net/")

    console.log(`mongoDb connected Db host: $ {connectionDb.connection.host}`)
    app.listen(app.get("port"), () => {
        console.log("Listening")
    });
}

start();

*/

/*. 2 nd chatgpt code

import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import connectToSocket from "./controllers/socketManager.js"; 


const app = express();
const server = createServer(app);
const io = connectToSocket(server); 

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.json.urlencided({ limit: "40kb", extended: true }));

// Port
//app.set("port", process.env.PORT || 8000);
//app.use(cors());

// Test route
//app.get("/home", (req, res) => {
  //return res.json({ hello: "world" });
//});

// ✅ Setup socket events
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// MongoDB Connection & Server Start
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      "mongodb+srv://sanjanakesharwani32:Adrita3435@zoomclonecluster.mvjk6zp.mongodb.net/?retryWrites=true&w=majority&appName=ZoomCloneCluster"
    );

    console.log(`MongoDB connected → host: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
      console.log(`Server running on port ${app.get("port")}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

start();

*/

/*.  self code

import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import connectToSocket from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server); // Correct use of your custom socket manager

// Middleware
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

// Port setup
app.set("port", process.env.PORT || 8000);

// Test route (optional, for checking server)
app.get("/home", (req, res) => {
  return res.json({ hello: "world" });
});

// ✅ Setup socket events
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// MongoDB connection and server start
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      "mongodb+srv://sanjanakesharwani32:Adrita3435@zoomclonecluster.mvjk6zp.mongodb.net/?retryWrites=true&w=majority&appName=ZoomCloneCluster"
    );

    console.log(`MongoDB connected → host: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
      console.log(`Server running on port ${app.get("port")}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

start();

*/



import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://sanjanakesharwani32:Adrita3435@zoomclonecluster.mvjk6zp.mongodb.net/?retryWrites=true&w=majority&appName=ZoomCloneCluster")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}



start();

