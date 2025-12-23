export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Mechatronics",
		icon: "/hand1.png",
	},
	{
		title: "AI and Neural Networks",
		icon: "/ai.png",
	},
	{
		title: "Solidworks",
		icon: "/solid.png",
	},
	{
		title: "Batteries",
		icon: "/battery.png",
	},
];

const technologies = [
	{
		name: "Solidworks",
		icon: "/tech/solid.png",
	},
	{
		name: "C++",
		icon: "/tech/C++.png",
	},
	{
		name: "Python",
		icon: "/tech/python.png",
	},
	{
		name: "AutoCAD",
		icon: "/tech/autocad.png",
	},
	{
		name: "Javascript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "Simscale",
		icon: "/tech/simscale.png",
	},
	{
		name: "OpenCV",
		icon: "/tech/cv.png",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
];

const experiences = [
	{
		title: "Technical Analysis and Intellectual Property Assessment Intern",
		company_name: "Corecurrent Solutions Inc.",
		icon: "/company/corecurrent.png",
		iconBg: "#fbfcffff",
		date: "July 2025 - August 2025",
		points: [
			"Reverse engineered automotive electronic modules to identify patent infringements, accelerating legal evidence collection",
			"Researched IC components, compiling findings into organized reports, improving accuracy in client cases",
			"Built a Python OpenCV tool mapping chip images to their positions on the PCB, streamlining analysis workflows",
		],
	},
	{
		title: "Sterilization Technician & Administrative Assistant",
		company_name: "Kanata Periodontics",
		icon: "/company/perio.webp",
		iconBg: "#E6DEDD",
		date: "June 2025 - August 2025",
		points: [
			"Maintained sterilization equipment, prepped operation rooms, and assisted chairside with strong organization and attention to detail, easing staff workload and improving patient flow",
		],
	},
	{
		title: "Etsy Shop Founder & Owner",
		company_name: "ClayRoomCo",
		icon: "/company/etsy.png",
		iconBg: "#ff6600ff",
		date: "April 2022 - April 2025",
		points: [
			"Launched and scaled an online shop for handcrafted figurines, achieving 100+ sales and $4,000+ revenue through creative design and marketing",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
		name: "Om Patel",
		image: "/socialmedia/behance.svg",
		link: "https://www.behance.net/omthecreator",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Om Patel",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/om-patel-401068143/",
	},
	{
		id: 3,
		testimonial:
			"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "Om Patel",
		image: "/socialmedia/dribble.svg",
		link: "https://dribbble.com/om2121",
	},
	{
		id: 4,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Om Patel",
		image: "/socialmedia/portfolio.svg",
		link: "https://omthecreator.netlify.app/",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Om Patel",
		image: "/tech/github.webp",
		link: "https://github.com/omunite215",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link?: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "Formula Electric Tractive Team (UWFE)",
		description:
			"Member of the battery subteam. Gained experience prototyping, 3D printing, cell testing and pack designing.",
		tags: [
			{
				name: "Solidworks",
				color: "blue-text-gradient",
			},
			{
				name: "Battery design",
				color: "green-text-gradient",
			},
			{
				name: "Prototyping",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/DSC_0070.webp",
		platform: "Vercel",
		deploy_link: "https://www.uwfsae.ca/",
	},
	{
		name: "UW Crowd - Hack the North",
		description:
			"Developed real-time campus occupancy website using Raspberry Pis’ to scan for Bluetooth Low Energy signals, helping students plan around crowds",
		tags: [
			{
				name: "Raspberry PI",
				color: "red-text-gradient",
			},
			{
				name: "Javascript",
				color: "orange-text-gradient",
			},
			{
				name: "Full Stack",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/htn.JPG",
		source_code_link: "https://github.com/NicoleThiessen/UWCrowd1",
		platform: "Vercel",
	},
	{
		name: "AI Voice Assistant",
		description:
			"Built an AI voice assistant using Whisper and LLM Dialogue, enabling real-time conversations. Modeled a 3D robot avatar that reacted to emotions, via a custom neural network mapping emotion metrics to joint angles, delivering human-like AI interaction.",
		tags: [
			{
				name: "LLM",
				color: "green-text-gradient",
			},
			{
				name: "Neural Networks",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/jarvis2.png",
		source_code_link: "https://github.com/NicoleThiessen/JARVIS_emotionally_intelligent_virtual_assistant",
		platform: "Vercel",
		deploy_link: "https://www.youtube.com/watch?v=jCOez8E0fnw",
	},
	{
		name: "Synthetic Data Generator",
		description:
			"Built a synthetic data generator to solve AI training data scarcity, with a pipeline that combines CTGAN generation and LLM enrichment to create large and flexible datasets.",
		tags: [
			{
				name: "AI Training",
				color: "blue-text-gradient",
			},
			{
				name: "Synthetic Data",
				color: "orange-text-gradient",
			},
			{
				name: "CTGAN",
				color: "green-text-gradient",
			},
			{
				name: "Python",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/synthetic.png",
		source_code_link: "https://github.com/NicoleThiessen/Smart-Data-Synthetic-Generator-for-Gen-AI-Hackathon",
		platform: "Vercel",
		deploy_link: "https://www.youtube.com/watch?v=baWmiI1C_vk",
	},
	{
		name: "Baymax AI",
		description:
			"Built an AI-powered mental wellness chatbot website with a 3D interactive Baymax character; integrated LLM-based dialogue (Mistral 7B via OpenRouter API) and secure server-side API handling.",
		tags: [
			{
				name: "LLM",
				color: "blue-text-gradient",
			},
			{
				name: "React",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/baymax.png",
		source_code_link: "https://github.com/NicoleThiessen/Baymax---Bolt-Hackathon",
		platform: "Vercel",
		deploy_link: "https://www.youtube.com/watch?v=ZRWdxQo-w40",
	},
	{
		name: "IB Extended Essay",
		description:
			"Modeled and ran CFD simulations on 22 gliders in SolidWorks and SimScale, analyzing aerodynamic performance to quantify glide efficiency trends",
		tags: [
			{
				name: "CFD Simulations",
				color: "blue-text-gradient",
			},
			{
				name: "Aerodynamics",
				color: "green-text-gradient",
			},
			{
				name: "Report",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/ee.png",
		platform: "Vercel",
		deploy_link: "https://docs.google.com/document/d/1OGTv2R9tIUioGpj1CzntGx-VZ7_ldNtkfAOxgAhq20c/edit?usp=sharing",
	},
];

export { services, technologies, experiences, testimonials, projects };
