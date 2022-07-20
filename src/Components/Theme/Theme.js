import {
	extendTheme,
	theme as base,
	withDefaultColorScheme,
	withDefaultVariant,
} from "@chakra-ui/react";


const theme = extendTheme(
	{	  
		layerStyles: {
			flexMarginStyle: {
				mb : "10%",
				display : "flex",
				flexDirection : "row",
			}
		},
		textStyles: {
			buttonTextStyle: {
				// you can also use responsive styles
				fontSize: ["16px", "28px"],
			},
			smallAndBoldStyle : {
				fontSize : "12px",
				fontWeight : "bold"
			},
		},
		styles: {
			global: {
				body: {
					bg: "primary.50",
					color: "primary.900",
				},
			},
		},
		colors: {
			primary: {
				50:  "#ecf2fb",
				100: "#ced7e3",
				200: "#afbdce",
				300: "#90a2bb",
				400: "#7088a7",
				500: "#576e8e",
				600: "#43566f",
				700: "#303d50",
				800: "#1c2531",
				900: "#050c15",
			},
		},

		fonts: {
			heading: `Poppins, ${base.fonts?.heading}`,
			body: `Poppins, ${base.fonts?.body}`,
		},

		components: {
			Button: {
				// 1. We can update the base styles
				baseStyle: {
				w : "60%"
				},
		},
	}
	},
	withDefaultColorScheme({
		colorScheme: "primary",
	}),
	withDefaultVariant({
		variant: "outline",
		components: ["Input"],
	})
);

export default theme;
