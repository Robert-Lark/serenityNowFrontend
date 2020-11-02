import React, { useState, useRef, useEffect } from "react";
import { useStyles } from "./Styles/Styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Loginform from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import { gsap } from "gsap";

function App(props) {
	const [header, setHeader] = useState(true);
	const [register, setRegister] = useState(true);
	const [login, setLogin] = useState(true);
	const [displayRegister, setDisplayRegister] = useState(false);
	const [displayLogin, setDisplayLogin] = useState(false);
	const classes = useStyles();
	const h1 = useRef();
	const reg = useRef();
	const log = useRef();
  const loginForm = useRef();
  const registerForm = useRef();
	const animation = useRef(null);
	const animation1 = useRef(null);
	const animation2 = useRef(null);
  const animation3 = useRef(null);
  	const animation4 = useRef(null);
	//HEADER
	useEffect(() => {
		animation.current = gsap.timeline({ paused: true }).fromTo(
			h1.current,
			{
				y: 0,
				x: 0,
			},
			{
				y: -200,
				x: 0,
				duration: 2,
			}
		);
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
		animation3.current = gsap.timeline({ paused: true }).fromTo(
			registerForm.current,
			{
				//this first set of curly brackets is the from co-ordinates
				y: 150,
				x: 0,
				scale: 0,
				opacity: 0,
			},
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: 0,
				scale: 1.3,
				opacity: 1,
				duration: 2,
			}
		);
		return () => {
			animation3.current.kill();
		};
	}, [register]);

	useEffect(() => {
		if (register) {
			animation1.current.reverse();
			animation3.current.reverse();
		} else {
			animation1.current.play();
			animation3.current.play();
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
		animation4.current = gsap.timeline({ paused: true }).fromTo(
			loginForm.current,
			{
				//this first set of curly brackets is the from co-ordinates
				y: 150,
				x: 0,
				scale: 0,
				opacity: 0,
			},
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: 0,
				scale: 1.3,
				opacity: 1,
				duration: 2,
			}
		);
		return () => {
			animation4.current.kill();
		};
	}, [login]);
	useEffect(() => {
		if (login) {
      animation2.current.reverse();
      animation4.current.reverse();
		} else {
      animation2.current.play();
      	animation4.current.play();
		}
	}, [login]);
	const changeStateLogin = () => {
		setHeader(!header);
		setRegister(!register);
		setLogin(!login);
		setDisplayLogin(!displayLogin);
	};
	const changeStateRegister = () => {
		setHeader(!header);
		setRegister(!register);
		setLogin(!login);
		setDisplayRegister(!displayRegister);
	};
	return (
		<Grid container className={classes.homepageContainer}>
			<Grid item className={classes.homepageItem}>
				<Typography ref={h1} variant="h1" className={classes.homeH1}>
					SERENITY NOW!
				</Typography>

				{/* FORMS */}

				<Grid
					ref={registerForm}
					item
					className={displayLogin ? classes.form : classes.hide}
				>
					<Loginform />

				</Grid>
				<Grid
					ref={loginForm}
					item
					className={displayRegister ? classes.form : classes.hide}
				>
					<RegisterForm />
				</Grid>

				{/* BUTTONS */}

				<Button ref={reg} onClick={() => changeStateRegister()}>
					Register
				</Button>
				<Button ref={log} onClick={() => changeStateLogin()}>
					Login
				</Button>
			</Grid>
		</Grid>
	);
}

export default App;
