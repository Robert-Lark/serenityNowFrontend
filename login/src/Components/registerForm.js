import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStyles } from "../Styles/Styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function RegisterForm(props) {
	const history = useHistory();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		axios
			.post("http://localhost:1000/api/register", data)
			.then((res) => {
				console.log("Register post res: ", res);
				history.push("/protected");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item>
				<form
					className={classes.form}
					noValidate
					autoComplete="off"
					onSubmit={handleSubmit(onSubmit)}
				>
					<TextField
						className={classes.formInputs}
						type="username"
						placeholder="name"
						name="username"
						inputRef={register({ required: true })}
					/>
					<TextField
						className={classes.formInputs}
						type="password"
						placeholder="Password"
						name="password"
						inputRef={register({ required: true })}
					/>
					<TextField
						className={classes.formInputs}
						type="department"
						placeholder="secret word"
						name="department"
						inputRef={register({ required: true })}
					/>
				</form>
				<Button className={classes.formInputs} onClick={handleSubmit(onSubmit)}>
					Register
				</Button>
			</Grid>
		</Grid>
	);
}

export default RegisterForm;
