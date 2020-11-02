import { makeStyles } from "@material-ui/core/styles";
import homepageBackgroundImage from "../img/homepageBackground.jpg";

export const useStyles = makeStyles({
	homepageContainer: {
		position: "absolute",
		top: "0px",
		left: "0px",
		opacity: "90%",
		backgroundImage: `url(${homepageBackgroundImage})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "100vh",
		width: "100vw",
	},
	homepageItem: {
        width: "100vw",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
    },
    homeH1: {
        fontFamily: "Vollkorn, serif",
    }
});
