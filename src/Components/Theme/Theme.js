import {
	background,
	extendTheme,
	theme as base,
	withDefaultColorScheme,
	withDefaultSize,
	withDefaultVariant,
} from "@chakra-ui/react";

const Input = {
	baseStyle: {
		field: {}
	},
	variants: {
		outline: {
			field: {
				_hover: {
					borderColor: "primary.400",
				},
				borderColor: "primary.300",
				_focus: {
					borderColor: "primary.500",
					boxShadow: "none",
				},
			},
		},
	},
	sizes: {
		sm: {
			field: {
					//
			}
		},
	},
	defaultProps: {},
};

const Select = {
	baseStyle: {
		field: {
			
		}
	},
	variants: {
		outline: {
		  field: {
			_hover: {
				borderColor: 'primary.400',
			  },
			borderColor : "primary.300",
			_focus: {
			  borderColor: 'primary.500',
			  boxShadow: 'none',
			},
		  },
		},
	},
	sizes: {},
	defaultProps: {},
}

const theme = extendTheme(
	{
		layerStyles: {
			sectionHeaderStyle: {
				fontSize: "16px",
				fontWeight: "Bold",
			},
			sectionStyle: {
				w: "50%",
				fontSize: "14px",
				pb: "1%",
			},
			pageStyle: { 
				height: "calc(100% - 80px)", 
				overflow: "auto",
				p: '2%',
				width: '100%'				
			},
			pageButtonStyle : {
				pt : "2%",
				pb : "2%",
			},
			inputStackStyle: {
				w :"full",
				pb :".5%"
			},
			inputStyle : {
				w: "70%"
			}
		},
		textStyles: {
			buttonTextStyle: {
				// you can also use responsive styles
				fontSize: ["16px", "28px"],
			},
			smallAndBoldStyle: {
				fontSize: "12px",
				fontWeight: "bold",
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
				50: "#ecf2fb",
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
			Input: Input,
			Select: Select,
		},
	},
	withDefaultColorScheme({
		colorScheme: "primary",
	}),
	withDefaultVariant({
		variant: "outline",
		components: ["Input"],
	}),
	withDefaultSize({
		size: "sm",
		components: ["Input", "Select"],
	})
);

export default theme;
