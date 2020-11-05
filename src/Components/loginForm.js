import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStyles } from "../Styles/Styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { axiosWithAuth } from "../API/axiosWithAuth";
function LoginForm(props) {
	const history = useHistory();
	const { handleSubmit } = useForm();
	const classes = useStyles();
const formSubmit = (data) => {
	axiosWithAuth()
		.post("/login", data)
		.then((res) => {
			localStorage.setItem("token", res.data.token);
			history.push("/protected");
		})
		.catch((err) => {
			console.log(err);
		});
};

	return (
		<Grid container>
			<Grid item>
				<form
					onSubmit={handleSubmit(formSubmit)}
					className={classes.form}
					noValidate
					autoComplete="off"
				>
					<TextField
						className={classes.formInputs}
						type="name"
						placeholder="name"
						name="name"
					/>
					<TextField
						className={classes.formInputs}
						type="password"
						placeholder="Password"
						name="password"
					/>
				</form>
				<Button onClick={handleSubmit(formSubmit)}>Login</Button>
			</Grid>
		</Grid>
	);
}

export default LoginForm;
