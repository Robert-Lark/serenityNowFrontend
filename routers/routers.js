const express = require("express");
const router = express.Router();
const db = require("./router-models.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {restrict} = require("./router-middleware")
var cors = require("cors");

router.get("/users", restrict(), async (req, res) => {
	const users = await db.find();
	res.status(200).json(users);
});

router.post("/register", async (req, res, next) => {
	try {
		const { username, password, department } = req.body;
		const credentials = await db.add({
			username,
			password: await bcrypt.hash(password, 14),
			department,
		});
		res.status(201).json(credentials);
	} catch (err) {
		next(err);
	}
});

router.post("/login", cors(), async (req, res, next) => {
	try {
        const { username, password } = req.body;
        const user = await db.findByUsername(username);
		if (!user) {
			return res.status(401).json({
				message: "Invalid Credentials",
			});
		}
		const passwordValid = await bcrypt.compare(password, user.password);
		if (!passwordValid) {
			return res.status(401).json({
				message: "Invalid Credentials",
			});
		}
		const token = jwt.sign(
			{
				userID: user.id,
				userRole: user.role,
			},
			process.env.JWT_SECRET
		);
		res.json({
			message: `Welcome ${user.username}!`,
			token: token,
		});
	} catch (err) {
		next(err);
	}
});

// router.get("/users", (req, res, next) => {
// 	try {
// 	} catch (err) {}
// });

module.exports = router;
