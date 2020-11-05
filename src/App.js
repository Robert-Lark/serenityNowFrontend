import React from "react";
import { useStyles } from "./Styles/Styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute"
import Grid from "@material-ui/core/Grid";
import InnerPage from "./Components/InnerPage"
import Homepage from "./Components/Homepage"

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
