const jwt = require("jsonwebtoken");

function restrict() {
	return async (req, res, next) => {
		try {
			const token = req.headers.auth;
			if (!token) {
				return res.status(401).json({
					message: "invalid credentials ",
				});
			}
			jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
				if (err) {
					return res.status(401).json({
						message: "invalid credentials ",
					});
				}
				next();
			});
		} catch (err) {
			next(err);
		}
	};
}

module.exports = {
	restrict,
};