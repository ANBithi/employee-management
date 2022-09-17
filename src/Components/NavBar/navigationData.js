const DATA = [
	{
		label: "Home",
		link: "",
        
	},
	{
		label: "Leave",
		link: "/leave",
		subMenu: [
			{
				label: "Leave Application",
				link: "/leave-application",
			},
			// {
			// 	label: "Leave Decline",
			// 	link: "/leave-decline",
			// },
            {
                label: "Leave Cancel",
				link: "/leave-cancel",
            },
            {
                label: "Applied Leave Status",
                link: "/applied-leave-status"
            },
            {
                label: "Pending Leave Request Status",
                link: "/pending-leave-request-status"
            },
		],
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
                label: "Employee Evaluation",
                link: "/employee-evaluation"
            },
		],
	},
    {
		label: "Finance",
		link: "/finance",
	},
	{
		label: "Work Book",
		link: "/work-book",
	},
	{
		label: "Resign",
		link: "/resign",
	},
];

export {DATA};