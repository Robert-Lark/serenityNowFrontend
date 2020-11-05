import React from 'react';
import { useStyles } from "../Styles/Styles";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactPlayer from "react-player";

function InnerPage(props) {
    	const classes = useStyles();
    return (
			<Grid container className={classes.zenCont}>
				<Grid item className={classes.zen}>
					<ReactPlayer
						playing="true"
						url="https://www.youtube.com/watch?v=LW_s6EqOxqY"
						loop="true"
					/>
					<br></br>
					<br></br>
					<Grid item>
						<Link to="/">
							<Button
								variant="contained"
								color="purple"
								className={classes.returnButton}
							>
								RETURN TO THE MADNESS
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		);
}

export default InnerPage;