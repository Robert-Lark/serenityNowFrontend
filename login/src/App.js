import React, { useState, useRef, useEffect } from "react";
import { useStyles } from "./Styles/Styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { gsap } from "gsap";

function App(props) {
	const [header, setHeader] = useState(true);
	const [register, setRegister] = useState(true);
	const [login, setLogin] = useState(true);

	const classes = useStyles();
	const h1 = useRef();
	const reg = useRef();
	const log = useRef();
  const animation = useRef(null);
    const animation1 = useRef(null);
    	const animation2 = useRef(null);
	//HEADER
	useEffect(() => {
		animation.current = gsap.timeline({ paused: true }).fromTo(
			h1.current,
			{
				y: 0,
				x: 0,
			},
			{
				y: -300,
				x: 0,
				duration: 2,
			});
		return () => {
			animation.current.kill();
		};
	}, [header]);

	useEffect(() => {
		if (header) {
			animation.current.reverse();
		} else {
			animation.current.play();
		}
	}, [header]);
	//REGISTRATION
	useEffect(() => {
		animation1.current = gsap.timeline({ paused: true }).fromTo(
			reg.current,
			{
				y: 0,
				x: 0,
			},
			{
				y: 233,
				x: -300,
				duration: 2,
			}
		);
		return () => {
			animation1.current.kill();
		};
	}, [register]);

	useEffect(() => {
		if (register) {
			animation1.current.reverse();
		} else {
			animation1.current.play();
		}
	}, [register]);
	// // //LOGIN
	useEffect(() => {
		animation2.current = gsap.timeline({ paused: true }).fromTo(
			log.current,
			{
				y: 0,
				x: 0,
			},
			{
				y: 200,
				x: 300,
				duration: 2,
			}
		);
		return () => {
			animation2.current.kill();
		};
	}, []);

	useEffect(() => {
		if (login) {
			animation2.current.reverse();
		} else {
			animation2.current.play();
		}
	}, [login]);

	const changeState = () => {
		setHeader(!header);
		setRegister(!register);
		setLogin(!login);
	};
	return (
		<Grid container className={classes.homepageContainer}>
			<Grid item className={classes.homepageItem}>
				<Typography ref={h1} variant="h1" className={classes.homeH1}>
					SERENITY NOW!
				</Typography>
				<Button ref={reg} onClick={() => changeState()}>
					Register
				</Button>
				<Button ref={log} onClick={() => changeState()}>
					Login
				</Button>
			</Grid>
		</Grid>
	);
}

export default App;
