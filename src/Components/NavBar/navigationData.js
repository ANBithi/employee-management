const DATA = [
	{
		label: "Home",
		link: "",
        
	},
	{
		label: "Employee",
		link: "/employee",
		subMenu: [
			{
				label: "Manage Profile",
				link: "/manage-profile",
			},
			{
				label: "Contact Information",
				link: "/contact-info",
			},
            {
                label: "Personal Information",
                link: "/personal-info"
            },
            {
                label: "Academic Qualification",
                link: "/academic"
            },
            {
                label: "Professional Qualification",
                link: "/professional"
            },
            {
                label: "Experience",
                link: "/experience"
            }
		],
	},
    {
		label: "Evaluation",
		link: "/evaluation",
		subMenu: [
			{
				label: "Pending Request",
				link: "/pending-request",
			},
			{
				label: "Pending Status",
				link: "/pending-status",
			},
            {
                label: "Employee evaluation",
                link: "/employee-evaluation"
            },
		],
	},
    {
		label: "Finance",
		link: "/finance",
	},
    {
		label: "Resign",
		link: "/resign",
	},
	{
		label: "Settings",
		link: "/settings",
	},
];

export {DATA};