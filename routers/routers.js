const express = require("express");
const router = express.Router();
const db = require("./router-models.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/users", async (req, res) => {
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

router.post("/login", async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const user = await db.findBy(username);
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
			"You shall not pass!"
		);
		res.json({
			message: `Welcome ${user.username}!`,
			token: token,
		});
	} catch (err) {
		next(err);
	}
});

router.get("/users", (req, res, next) => {
	try {
	} catch (err) {}
});

module.exports = router;
