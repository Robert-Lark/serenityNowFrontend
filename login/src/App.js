import React, { useState, useRef, useEffect } from "react";
import { useStyles } from "./Styles/Styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute"
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Loginform from "./Components/LoginForm";
import InnerPage from "./Components/InnerPage"
import RegisterForm from "./Components/RegisterForm";
import Homepage from "./Components/Homepage"
import { gsap } from "gsap";

function App(props) {
			const classes = useStyles();
	return (
		<Router>
			<Grid container className={classes.homepageContainer}>
				<Switch>
					<PrivateRoute exact path="/protected" component={InnerPage} />
					<Route path="/" component={Homepage} />
				</Switch>
			</Grid>
		</Router>
	);
}

export default App;
