const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 4000;

// ----------------------Database Connection----------------------

const dbURI =
  "mongodb+srv://codathon:codathon1602@codathon.ht4xg.mongodb.net/node-auth";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(port, () => {
      console.log("Server running on port 4000");
    })
  )
  .catch((err) => console.log(err));

// ----------------------Middleware----------------------

app.use(express.json());

app.use(cookieParser());

app.use(function (req, res, next) {
  //   res.setHeader(
  //     "Access-Control-Allow-Origin",
  //     "https://connectingworldapp.web.app"
  //   );
  //test
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  //check jwt token exists and verified
  if (token) {
    jwt.verify(token, "philanterfakadi", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
        next();
      } else {
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

// ----------------------Functions----------------------

const createToken = (id) => {
  return jwt.sign({ id }, "philanterfakadi", {
    expiresIn: 1 * 24 * 60 * 60,
  });
};

const handleErrors = (err) => {
  let errors = {
    email: "",
    password: "",
    name: "",
  };

  //unique email handle
  if (err.code === 11000) {
    errors.email = "This email is already registered";
    return errors;
  }

  //validate errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach((obj) => {
      let properties = obj.properties;
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// ----------------------Auth Routes----------------------

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      //   domain: "connectingworld-api.herokuapp.com",
      domain: "localhost",
      secure: true,
      sameSite: "none",
    });
    const testsData = user.tests;
    res.status(200).json({ user: user._id, token, testsData });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  const tests = [
    [68, 68, 98, 67, 87],
    [67, 78, 45, 65, 90],
  ];
  const flag = 0;

  try {
    const user = await User.create({
      email,
      password,
      name,
      tests,
      flag,
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      //   domain: "connectingworld-api.herokuapp.com",
      domain: "localhost",
      secure: true,
      sameSite: "none",
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
});

app.get("/logout", (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 1,
    // domain: "connectingworld-api.herokuapp.com",
    domain: "localhost",
    secure: true,
    sameSite: "none",
  });
  res.json({ status: "logged out" });
});

app.get("/authenticate", requireAuth, (req, res) => {
  res.json({ status: "authenticated" });
});

// ----------------------Other Routes----------------------

app.post("/newTestData", async (req, res) => {
  let token = req.cookies.jwt;
  let newTestData = req.body.newTestData;
  if (token) {
    jwt.verify(token, "philanterfakadi", async (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        let user = await User.findById(decodedToken.id);
        user.tests.push(newTestData);
        await user.save().then((data) => {
          res.status(200).json({ success: "success" });
        });
      }
    });
  }
});
