import React from "react";
import { useStyles } from "../Styles/Styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

function RegisterForm(props) {
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item>
				<form className={classes.form} noValidate autoComplete="off">
					<TextField
						className={classes.formInputs}
						id="register"
						label="Name"
					/>
					<TextField
						className={classes.formInputs}
						id="register"
						label="Password"
					/>
				</form>
				<Button
					className={classes.formInputs}
					onClick={() => console.log("Register works")}
				>
					Register
				</Button>
			</Grid>
		</Grid>
	);
}

export default RegisterForm;
