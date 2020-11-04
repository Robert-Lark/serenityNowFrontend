import React from 'react';
import { useStyles } from "../Styles/Styles";
import Grid from "@material-ui/core/Grid";
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
				</Grid>
			</Grid>
		);
}

export default InnerPage;