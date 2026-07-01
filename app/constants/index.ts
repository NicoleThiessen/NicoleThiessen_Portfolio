export const navLinks = [
	{ id: "about", title: "About" },
	{ id: "projects", title: "Projects" },
	{ id: "work", title: "Work" },
	{ id: "contact", title: "Contact" },
];
 
const services = [
	{ title: "Mechatronics", icon: "/hand1.png" },
	{ title: "AI and Neural Networks", icon: "/ai.png" },
	{ title: "Solidworks", icon: "/solid.png" },
	{ title: "Batteries", icon: "/battery.png" },
];
 
const technologies = [
	{ name: "Solidworks", icon: "/tech/solid.png" },
	{ name: "C++", icon: "/tech/C++.png" },
	{ name: "Python", icon: "/tech/python.png" },
	{ name: "AutoCAD", icon: "/tech/autocad.png" },
	{ name: "Javascript", icon: "/tech/javascript.webp" },
	{ name: "Simscale", icon: "/tech/simscale.png" },
	{ name: "git", icon: "/tech/git.webp" },
];
 
const experiences = [
	{
		title: "Vehicle Systems Engineering Intern",
		company_name: "Geotab",
		icon: "/company/geotab.jpg",
		iconBg: "#fbfcffff",
		date: "May 2026 – August 2026",
		points: [
			"Reverse-engineered proprietary CAN signals in vehicles using CANalyzer, Vector hardware, and scan tools, expanding Geotab’s telematics support for EV fleets",
			"Optimized data quality for customer cases through vehicle testing and remote fleet driving data analytics, validating signal reliability and processing algorithms",
			"Performed bench simulations to emulate vehicle–GO device interaction, validating telematics firmware before deployment across global vehicle fleets",
		],
	},
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
		testimonial: "Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
		name: "Om Patel",
		image: "/socialmedia/behance.svg",
		link: "https://www.behance.net/omthecreator",
	},
	{
		id: 2,
		testimonial: "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Om Patel",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/om-patel-401068143/",
	},
	{
		id: 3,
		testimonial: "Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "Om Patel",
		image: "/socialmedia/dribble.svg",
		link: "https://dribbble.com/om2121",
	},
	{
		id: 4,
		testimonial: "Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Om Patel",
		image: "/socialmedia/portfolio.svg",
		link: "https://omthecreator.netlify.app/",
	},
	{
		id: 5,
		testimonial: "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Om Patel",
		image: "/tech/github.webp",
		link: "https://github.com/omunite215",
	},
];
 
// ─── Content block guide ──────────────────────────────────────────────────────
//
//  Each project has a `content` array that builds the popup body.
//  Four block types are available:
//
//  Section heading (large, e.g. "What I Did"):
//    { type: "heading", value: "What I Did" }
//
//  Subheading (smaller, e.g. "Prototype Validation"):
//    { type: "subheading", value: "Prototype Validation" }
//
//  Text paragraph:
//    { type: "text", value: "Your paragraph here." }
//
//  Bullet list:
//    { type: "bullets", items: ["First point", "Second point", "Third point"] }
//
//  Image:
//    { type: "image", src: "/projectimg/your-photo.jpg", alt: "description" }
//
// ─────────────────────────────────────────────────────────────────────────────
 
const projects: {
	name: string;
	description: string;
	tags: { name: string; color: string }[];
	image: string;
	source_code_link?: string;
	deploy_link?: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
	content: (
		| { type: "heading"; value: string }
		| { type: "subheading"; value: string }
		| { type: "text"; value: string }
		| { type: "bullets"; items: string[] }
		| { type: "image"; src: string; alt: string }
	)[];
}[] = [
 
	// ── FSAE: Accumulator Electronics ─────────────────────────────────────────
	{
		name: "Accumulator Electronics",
		description:
			"Integrated the complete electrical system for the Formula Electric accumulator, wiring and validating the high-voltage electronics shelf for a 504V battery pack.",
		tags: [
			{ name: "High Voltage", color: "orange-text-gradient" },
			{ name: "Wire Harness", color: "blue-text-gradient" },
			{ name: "FSAE", color: "green-text-gradient" },
		],
		image: "/projectimg/eshelfsideview.jpeg",
		platform: "Vercel",
		deploy_link: "https://www.uwfsae.ca/",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Integrated the complete electrical system for the Formula Electric accumulator, wiring and validating the high-voltage electronics shelf while gaining hands-on experience with high-voltage architecture, system integration, and electrical debugging. The lessons learned throughout manufacturing and competition are now directly driving the redesign that I will lead next season.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"The electronics shelf (E-Shelf) is the electrical hub of the Formula Electric accumulator, housing and connecting nearly every major subsystem including the shutdown loop, Battery Management Unit (BMU), Accumulator Management System (AMS), insulation monitoring device (IMD), contactors, current sensing, precharge circuitry, and the high-voltage distribution path.",
			},
			{ type: "image", src: "/projectimg/eshelftopdown.jpeg", alt: "Top Down view of the 2026 E-Shelf"},
			{
				type: "text",
				value:
					"When I joined the team as a first-year student, I knew almost none of these systems. My first weeks were spent learning how the accumulator actually functioned — how the shutdown loop propagated through the car, how precharge safely energized the inverter, why bleed resistors were required, how the IMD monitored insulation faults, and how every subsystem interacted within a 504V battery pack.",
			},
			{ type: "image", src: "/projectimg/eshelfcad.png", alt: "CAD of 2026 E-Shelf"},
			{
				type: "text",
				value:
					"Once the design was finalized, I helped manufacture the electronics shelf from the ground up. I assembled nearly the entire wiring harness, completing close to 200 crimps while routing, sheathing, heat shrinking, soldering, and packaging both the high-voltage and low-voltage wiring. Every connection had to satisfy Formula SAE electrical rules governing:",
			},
			{
				type: "bullets",
				items: [
					"Cable lengths and strain relief",
					"Positive locking connector features",
					"HV/LV isolation requirements",
				],
			},
			{ type: "image", src: "/projectimg/eshelfholding.jpeg", alt: "Working on the TSAL DCDC Wiring"},

			{
				type: "text",
				value:
					"I also built laser-cut prototype shelves to validate component packaging before final assembly, manufactured Nomex insulation components, redesigned busbars where required, and contributed technical documentation covering the accumulator's fusing strategy.",
			},
			{ type: "subheading", value: "Integration & Debugging" },
			{ type: "image", src: "/projectimg/prechargetesting.jpeg", alt: "Root Causing Issues on the 2026 Precharge Unit"},
			{
				type: "text",
				value:
					"The real learning began once the accumulator was assembled and powered for the first time. Integration exposed problems that simply couldn't be found on CAD or wiring diagrams. Over several weeks, I worked closely with the electrical, software, and tractive systems leads to commission the accumulator and root-cause issues including:",
			},
			{
				type: "bullets",
				items: [
					"Unreliable precharge behaviour",
					"IMD insulation faults",
					"Communication problems between subsystems",
					"Poor electrical connections in the harness",
				],
			},
			{
				type: "text",
				value:
					"Many evenings turned into late nights in the high-voltage room — tracing circuits, probing signals, checking schematics, rebuilding harnesses, and systematically eliminating possible failure points until the system behaved reliably. Despite several major setbacks, including battery segment failures shortly before competition, the team successfully integrated the accumulator, passed technical inspections, and competed at Formula SAE Michigan.",
			},
			{ type: "subheading", value: "Looking Ahead" },
			{
				type: "text",
				value:
					"Following the season, I was selected as Responsible Engineer for next year's electronics shelf. Working alongside one other engineer, I am now leading the redesign of the accumulator's electrical architecture — including the complete HV and LV wiring harnesses, shutdown loop, component packaging, and integration strategy. Nearly every major design decision is being informed by the integration challenges, failures, and lessons learned from this year's car.",
			},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project taught me that designing an electrical system is only half the challenge — integrating it into a working vehicle is where the real engineering begins. I developed practical experience with high-voltage safety, wire harness manufacturing, electrical architecture, system integration, and structured debugging, but the biggest lesson was learning to think at the system level. Small design decisions — connector placement, cable routing, strain relief, serviceability — can determine whether a system is straightforward to troubleshoot or nearly impossible to maintain.",
			},
			{
				type: "text",
				value:
					"More than anything, this project reinforced why I enjoy engineering. Some of my best memories from first year came from working alongside the team late into the night, solving problems that none of us had seen before, and then arriving at competition surrounded by hundreds of people equally passionate about building race cars.",
			},
		],
	},
 
	// ── FSAE: Battery Segment Manufacturing ───────────────────────────────────
	{
		name: "Battery Segment Manufacturing",
		description:
			"Manufactured high-voltage lithium-ion battery segments for the UW Formula Electric accumulator, including spot welding, 3D-printed tooling, and recovering segments overnight before competition.",
		tags: [
			{ name: "Spot Welding", color: "orange-text-gradient" },
			{ name: "Battery Pack", color: "green-text-gradient" },
			{ name: "FSAE", color: "blue-text-gradient" },
		],
		image: "/projectimg/segments.jpeg",
		platform: "Vercel",
		deploy_link: "https://www.uwfsae.ca/",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Manufactured high-voltage lithium-ion battery segments for the University of Waterloo Formula Electric accumulator, gaining hands-on experience with battery pack assembly, spot welding, insulation systems, and high-voltage safety procedures.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"The Formula Electric accumulator consisted of five battery segments containing lithium-ion cells arranged into a high-voltage pack operating at approximately 504V nominal voltage. As part of the battery manufacturing team, I participated in the assembly of these segments from individual cells through final welded assemblies.",
			},
			{ type: "subheading", value: "Tooling & Cell Preparation" },
			{
				type: "text",
				value:
					"The manufacturing process began with preparing cells for segment assembly. To support repeatable workflows, I designed and 3D printed tooling and backing structures in SolidWorks that assisted with cell positioning and epoxy application during segment construction. Cells were then bonded into their final configurations using structural epoxy, creating rigid assemblies capable of withstanding vibration and mechanical loads experienced during vehicle operation.",
			},
			{ type: "image", src: "/projectimg/segmentepoxied.jpeg", alt: "Epoxied Cell Segments"},
			{ type: "subheading", value: "Spot Welding" },
			{ type: "image", src: "/projectimg/segmentspotwelds.jpeg", alt: "Image of Spot Welded Battery Segment"},

			{
				type: "text",
				value:
					"After the epoxy cured, nickel-plated copper busbars were prepared through waterjet manufacturing, cleaning, and inspection before being welded to the cells. I participated in the spot welding process used to electrically connect cells and busbars within the segment. This required careful control of:",
			},
			{
				type: "bullets",
				items: [
					"Weld placement and surface cleanliness",
					"Process consistency to ensure reliable electrical connections",
					"Avoiding cell damage from heat or misalignment",
				],
			},
			{ type: "image", src: "/projectimg/badspotweld.jpeg", alt: "Image of A Blown Cell due to Bad Spot Weld"},

			{ type: "subheading", value: "The Week Before Competition" },
			{
				type: "text",
				value:
					"One of the biggest lessons came just a week before competition, when three of our battery segments unexpectedly developed internal shorts, likely caused by a precharge failure during testing. Overnight, nearly half of our accumulator became unusable.",
			},
			{
				type: "text",
				value:
					"Four of us on the battery team suddenly found ourselves rebuilding segments against the clock. We split into shifts, often spot welding until three or four in the morning after classes, trying to manufacture replacement segments before leaving for Michigan. Thankfully, we had the foresight months earlier to epoxy several spare cell assemblies during initial manufacturing, which ultimately saved the project. Even then, we only had two spare segments, so we had to get creative — at one point literally freezing completed battery segments so the epoxy became brittle enough to chip away and recover usable cells.",
			},
			{
				type: "text",
				value:
					"Somehow, we rebuilt the pack in time for competition. It taught me lessons that extend far beyond spot welding: always build critical spares, never underestimate manufacturing risk, and remember that good engineering isn't just about designing systems — it's about recovering when they inevitably fail.",
			},
			{ type: "image", src: "/projectimg/containerwithseggies.jpeg", alt: "Image of Container and Battery Segments"},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project provided my first hands-on experience manufacturing a high-voltage battery system. I learned spot welding techniques, cell assembly processes, insulation requirements, and high-voltage safety procedures while working on a real Formula SAE accumulator. The experience highlighted how seemingly small manufacturing details can have significant impacts on reliability:",
			},
			{
				type: "bullets",
				items: [
					"Weld quality and surface cleanliness",
					"Cell alignment and epoxy application consistency",
					"Insulation practices and HV isolation",
					"The importance of building critical spares",
				],
			},
		],
	},
 
	 	// ── Hackathon: Jarvis ─────────────────────────────────────────────────────
	{
		name: "Jarvis: Emotionally Intelligent AI Assistant",
		description:
			"Built an AI voice assistant with a custom neural network that maps emotional states to real-time 3D avatar body language, using Whisper, LLMs, and Unity — trained on a synthetic dataset of 10,000 emotion-pose pairs.",
		tags: [
			{ name: "Neural Networks", color: "blue-text-gradient" },
			{ name: "LLM", color: "green-text-gradient" },
			{ name: "Unity", color: "orange-text-gradient" },
		],
		image: "/projectimg/jarvis.jpg",
		source_code_link: "https://github.com/NicoleThiessen/JARVIS_emotionally_intelligent_virtual_assistant",
		platform: "Vercel",
		deploy_link: "https://www.youtube.com/watch?v=jCOez8E0fnw",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Developed an AI-powered virtual assistant that generates human-like body language from conversational emotion, using a custom neural network to transform emotional states into real-time character movement and facial expressions.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"Most voice assistants focus exclusively on generating text or speech. The goal of Jarvis was to explore how emotional intelligence could be expressed physically — creating an assistant that not only responds to users, but also reacts through body language.",
			},
			{ type: "image", src: "/projectimg/jarvismaking.png", alt: "Image of Jarvis in Unity"},
			{ type: "subheading", value: "System Architecture" },
			{
				type: "text",
				value: "The system was built as a modular AI pipeline combining:",
			},
			{
				type: "bullets",
				items: [
					"Wake word detection using Porcupine",
					"Speech-to-text transcription using Whisper",
					"Response generation using an LLM through OpenRouter",
					"Emotion extraction using the Arousal-Valence-Dominance (AVD) emotional model",
					"A custom neural network mapping emotional states to character poses",
					"Unity-based character animation driven through a Flask API",
				],
			},
			{ type: "subheading", value: "How It Works" },
			{
				type: "text",
				value:
					"After a user speaks to Jarvis, the speech is transcribed and sent to an LLM. The response is then analyzed to determine its emotional characteristics using Arousal, Valence, and Dominance values. These emotional values are passed into a custom regression neural network trained to predict realistic joint rotations for a humanoid character. The resulting bone angles are transmitted to Unity, where a rigged 3D avatar physically reacts to the conversation through posture, head movement, and body language.",
			},
			{ type: "subheading", value: "Training Data & Neural Network" },
			{
				type: "text",
				value:
					"To train the model, I generated a synthetic dataset containing approximately 10,000 emotion-pose pairs using a combination of large language models and synthetic data generation techniques. I then trained a neural network using PyTorch to learn the relationship between emotional state and physical movement.",
			},
			{
				type: "text",
				value:
					"The animation system required extensive rigging and calibration work. I designed and rigged the character model, analyzed individual joint constraints, and established realistic rotation limits to prevent unnatural motion. Custom Unity scripts were then developed to apply the predicted bone rotations in real time.",
			},
			{ type: "subheading", value: "Key Challenges" },
			{
				type: "text",
				value:
					"One of the largest challenges was integrating multiple AI systems while maintaining responsiveness. The project required coordinating:",
			},
			{
				type: "bullets",
				items: [
					"Speech recognition and language generation",
					"Emotion modeling and neural network inference",
					"Flask API communication",
					"Unity rendering pipeline",
				],
			},
			{ type: "image", src: "/projectimg/jarvisbad.png", alt: "Image of Failed Joint Movements"},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project was my first attempt at connecting multiple AI systems into a single end-to-end architecture. I gained experience designing modular machine learning pipelines, training regression neural networks, generating synthetic datasets, and deploying machine learning models in real-time applications. I also learned Unity, character rigging, animation systems, and the practical challenges of integrating software, machine learning, and interactive 3D environments.",
			},
			{
				type: "text",
				value:
					"Most importantly, the project changed how I think about artificial intelligence. Rather than treating AI as a single model, I began exploring how multiple specialized systems can work together to create more complex and human-like behaviour. This idea later became the foundation for my broader interest in building networks of neural networks and eventually integrating them with physical robotic systems.",
			},
		],
	},
 
	// ── Internship: Dodge Charger EV CAN Bus ─────────────────────────────────
	{
		name: "Dodge Charger EV — CAN Bus Reverse Engineering",
		description:
			"Reverse-engineered proprietary CAN FD signals from a Dodge Charger EV using Vector hardware and CANalyzer to enable reliable telematics reporting of charging status, battery SOC, and other vehicle metrics.",
		tags: [
			{ name: "CAN Protocols", color: "blue-text-gradient" },
			{ name: "EV Systems", color: "green-text-gradient" },
			{ name: "Reverse Engineering", color: "orange-text-gradient" },
		],
		image: "/projectimg/charger.jpeg",
		platform: "Web",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Reverse-engineered proprietary CAN FD signals from a Dodge Charger EV to expand telematics support for electric vehicle data, enabling reliable reporting of charging status, battery state of charge, and other vehicle metrics.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"Modern vehicles contain hundreds of signals transmitted across CAN networks, but manufacturers typically do not publish the message definitions, scaling factors, or data formats required to interpret them. The objective of this project was to identify and validate useful vehicle signals that could be integrated into Geotab's telematics platform.",
			},
			{
				type: "text",
				value:
					"Working directly in the vehicle, I collected CAN FD traffic using Vector hardware, CANalyzer, scan tools, and drive logs while performing controlled vehicle actions such as driving, AC charging, DC fast charging, and changing vehicle settings. By correlating changes in vehicle behavior with changes in CAN traffic, I identified candidate signals and investigated their underlying data formats.",
			},
			{ type: "subheading", value: "Challenges" },
			{
				type: "text",
				value:
					"A major challenge was that the vehicle used a silent gateway architecture, limiting access to portions of the network and requiring specialized tools and licenses to access additional vehicle data. The project also required working with CAN FD traffic while supporting integration into systems designed around traditional CAN communication.",
			},
			{ type: "subheading", value: "Signals Reverse Engineered" },
			{
				type: "text",
				value:
					"Using scan tool data, charging behaviour, and vehicle telemetry as references, I reverse-engineered message offsets, scaling factors, and signal mappings for several previously unsupported metrics, including:",
			},
			{
				type: "bullets",
				items: [
					"AC and DC charging status",
					"Battery state of charge (SOC)",
					"Tire pressure monitoring data",
					"Additional vehicle telemetry signals",
				],
			},
			{
				type: "text",
				value:
					"One particularly challenging task involved developing a mapping between the battery's true state of charge and the value displayed on the vehicle dashboard. By analyzing charging behaviour and vehicle data over time, I created a conversion methodology that more accurately represented driver-visible battery information.",
			},
			{
				type: "text",
				value:
					"Before deployment, all candidate signals were validated through drive testing, charging tests, and log analysis to verify signal accuracy, consistency, and behaviour across different vehicle operating states.",
			},
			{ type: "image", src: "/projectimg/charger2.jpeg", alt: "Reverse Engineering the Dodge Charger DC Charging"},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project provided my first deep exposure to vehicle communication networks and taught me how much modern vehicle engineering depends on systematic troubleshooting and data analysis. I learned how CAN and CAN FD networks operate, how OEMs encode proprietary vehicle data, and how engineering teams extract useful information from undocumented systems. The experience strengthened my debugging, systems-thinking, and reverse-engineering skills while giving me a much deeper understanding of electric vehicle architecture and communication protocols.",
			},
		],
	},
 
 
	// ── FSAE: Cell Grouping Optimization Algorithm ────────────────────────────
	{
		name: "Cell Grouping Optimization Algorithm",
		description:
			"Developed a Python simulated annealing algorithm to optimally group 420 lithium-ion cells into a 3P142S pack, balancing power output and long-term cell health using DCIR and ACIR test data.",
		tags: [
			{ name: "Python", color: "blue-text-gradient" },
			{ name: "Simulated Annealing", color: "green-text-gradient" },
			{ name: "Battery Design", color: "orange-text-gradient" },
		],
		image: "/projectimg/cells.jpeg",
		platform: "Vercel",
		deploy_link: "https://www.uwfsae.ca/",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Developed a battery cell sorting algorithm for the University of Waterloo Formula Electric accumulator, using DCIR and ACIR test data to group lithium-ion cells into a 3P142S pack configuration while balancing the competing objectives of power output and long-term cell health.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"The Formula Electric accumulator consisted of 420 BAK INR2170-45D cells arranged into five segments, each containing a 3P28S configuration. Before assembly, every cell underwent characterization testing to measure DC internal resistance (DCIR), AC internal resistance (ACIR), and open-circuit voltage (OCV). I assisted with cell testing and was responsible for determining how the tested cells would be grouped into the final accumulator.",
			},
			{ type: "subheading", value: "The Core Tradeoff" },
			{
				type: "text",
				value:
					"The challenge was that the ideal configuration for power output conflicts with the ideal configuration for battery longevity.",
			},
			{
				type: "bullets",
				items: [
					"Grouping cells with similar internal resistances in parallel improves long-term health by sharing current evenly — but creates resistance differences between series groups, leading to uneven voltage drops and reduced pack performance.",
					"Mixing cells to equalize average resistance across all series groups improves overall pack performance — but cells within a parallel group experience different current loads, accelerating imbalance and degradation over time.",
				],
			},
			{ type: "image", src: "/projectimg/sideofseggie.jpeg", alt: "Side View of Segments and Cells"},

			{ type: "subheading", value: "The Algorithm" },
			{
				type: "text",
				value:
					"To address this tradeoff, I developed a Python-based optimization workflow that:",
			},
			{
				type: "bullets",
				items: [
					"Filtered out cells outside acceptable DCIR, ACIR, and OCV thresholds",
					"Removed statistical outliers before pack assembly",
					"Generated initial parallel groups based on resistance characteristics",
					"Applied a simulated annealing algorithm to iteratively swap cells between groups",
					"Minimized variation between parallel-group average resistances while enforcing limits on resistance spread within each group",
				],
			},
			{ type: "image", src: "/projectimg/cellssorted.jpeg", alt: "Image of Grouped Cells"},

			{
				type: "text",
				value:
					"The resulting cell assignments provided a compromise between pack-level electrical performance and cell-level health, producing a more balanced accumulator configuration than simple resistance-based sorting alone.",
			},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project taught me that battery pack design involves much more than selecting good cells — it requires balancing competing electrical and reliability objectives across hundreds of interacting components. I gained hands-on experience with lithium-ion cell characterization, DCIR and ACIR testing, optimization algorithms, and battery pack architecture. Most importantly, I learned how engineering decisions often involve tradeoffs rather than perfect solutions, and how data-driven analysis can be used to find practical compromises between competing design goals.",
			},
		],
	},
 
	// ── Internship: Automotive Hardware Reverse Engineering ───────────────────
	{
		name: "Automotive Hardware Reverse Engineering",
		description:
			"Reverse-engineered ECUs and sensor modules from BMW, Nissan, and Hyundai to identify hardware architecture and potential patent infringements, building an OpenCV tool to automate chip mapping.",
		tags: [
			{ name: "Python", color: "blue-text-gradient" },
			{ name: "OpenCV", color: "green-text-gradient" },
			{ name: "PCB Analysis", color: "orange-text-gradient" },
		],
		image: "/projectimg/headsup.jpg",
		source_code_link: "https://corecurrentsolutions.com/",
		platform: "Web",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Reverse-engineered automotive electronic control units (ECUs) and sensor modules to identify hardware architecture, component functionality, and potential patent infringements for intellectual property investigations.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"As part of CoreCurrent Solutions' technical analysis team, I investigated automotive electronic modules from manufacturers including BMW, Nissan, and Hyundai. Devices analyzed included telematics units, ADAS controllers, parking assistance systems, radar sensors, and instrument clusters.",
			},
			{
				type: "text",
				value:
					"Each investigation began with a complete hardware teardown. I systematically documented every stage of disassembly, capturing high-resolution photographs to create a traceable record of the device architecture. Once the PCB was exposed, I identified and catalogued integrated circuits, memory devices, microcontrollers, power electronics, sensors, communication transceivers, and supporting circuitry. Many components were partially labeled or manufacturer-specific, requiring research across datasheets, semiconductor databases, regulatory filings, and technical documentation.",
			},
			{ type: "image", src: "/projectimg/teleteardown.JPG", alt: "Image of BMW Telematics Teardown"},
			{
				type: "text",
				value:
					"After identifying the major components, I reconstructed the system architecture by analyzing how individual chips interacted. This involved determining:",
			},
			{
				type: "bullets",
				items: [
					"Communication interfaces between subsystems",
					"Power distribution architecture",
					"Sensor and actuator interfaces",
					"Processing and memory structures",
					"Wireless and vehicle network connectivity",
					"Functional relationships between major ICs",
				],
			},
			{
				type: "text",
				value:
					"The findings were compiled into detailed technical reports and presentations containing annotated PCB imagery, component analyses, architectural diagrams, and evidence supporting intellectual property investigations. These reports were used to assist legal teams in evaluating potential patent infringement claims.",
			},
			{
				type: "text",
				value:
					"To further streamline the workflow, I developed a Python and OpenCV tool that automatically mapped chip photographs to their locations on the PCB, reducing manual documentation effort and improving analysis efficiency.",
			},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project taught me how commercial automotive electronics are actually designed and manufactured. By analyzing a wide range of ECUs from different manufacturers, I developed a strong understanding of common automotive hardware architectures, communication systems, power management circuits, and PCB design practices. Most importantly, I learned that understanding a system often comes from connecting many small observations rather than finding a single answer — strengthening my technical research skills, attention to detail, and ability to reason about complex hardware systems from incomplete information.",
			},
		],
	},

	
	// ── Hackathon: UW Crowd ───────────────────────────────────────────────────
	{
		name: "UW Crowd — Hack the North",
		description:
			"Built a real-time campus occupancy monitoring system at Hack the North using Raspberry Pi BLE sensors, helping students check how crowded campus spaces are before arriving.",
		tags: [
			{ name: "Raspberry Pi", color: "red-text-gradient" },
			{ name: "BLE Sensing", color: "orange-text-gradient" },
			{ name: "Full Stack", color: "blue-text-gradient" },
		],
		image: "/projectimg/htn.JPG",
		source_code_link: "https://github.com/NicoleThiessen/UWCrowd1",
		platform: "Vercel",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Developed a real-time campus occupancy monitoring system during Hack the North, using Raspberry Pi sensors and Bluetooth Low Energy (BLE) signals to estimate building occupancy and help students avoid crowded spaces.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"Our team set out to solve a common problem at the University of Waterloo: students often have little visibility into how crowded campus spaces are before arriving. Whether heading to the gym, a study space, or a restaurant, occupancy information could help students better plan their schedules and avoid unnecessary wait times.",
			},
			{
				type: "text",
				value:
					"To estimate occupancy levels, we deployed Raspberry Pis configured to scan for nearby Bluetooth Low Energy (BLE) devices. By detecting anonymous BLE broadcasts from phones, laptops, smartwatches, and other devices, the system could generate occupancy estimates based on the number of unique signals observed within a building.",
			},
			{ type: "subheading", value: "System Architecture" },
			{
				type: "text",
				value:
					"I contributed to the development and deployment of the sensing infrastructure, data processing pipeline, and occupancy dashboard. The system consisted of:",
			},
			{
				type: "bullets",
				items: [
					"Raspberry Pi sensor nodes performing BLE scans",
					"Data collection and filtering logic to remove noisy observations",
					"A central dashboard displaying occupancy metrics",
					"Analytics converting raw device detections into occupancy estimates",
				],
			},
			{ type: "image", src: "/projectimg/htn.jpeg", alt: "Image of UWCrowd Frontend Mockup"},
			{ type: "subheading", value: "Challenges" },
			{
				type: "text",
				value:
					"One of the biggest challenges was working with real hardware under hackathon time constraints. We encountered storage limitations on the Raspberry Pis, balancing available space between required drivers and collected scan data. Data quality was another major challenge, as Bluetooth detections can fluctuate significantly depending on device behaviour, signal strength, and environmental conditions.",
			},
			{
				type: "text",
				value:
					"To test the system, we deployed sensors around campus and collected real-world data, iteratively refining our filtering and estimation approach throughout the competition. Despite hardware and data challenges, we successfully built an end-to-end prototype capable of estimating occupancy levels from live Bluetooth scans.",
			},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project taught me how quickly real-world engineering problems become more complex than they initially appear. While the basic idea seemed straightforward, building a working system required solving challenges related to hardware deployment, wireless sensing, data quality, and system integration under a tight deadline. Hack the North reinforced the value of building imperfect but functional systems quickly, then iterating based on real-world results rather than assumptions.",
			},
		],
	},
 
		// ── FSAE: Accumulator Container Waterproofing & Insulation ────────────────
	{
		name: "Accumulator Container Waterproofing & Insulation",
		description:
			"Contributed to prototype validation, waterproofing, and high-voltage Nomex insulation of the Formula Electric accumulator container, protecting a 504V battery pack for competition.",
		tags: [
			{ name: "Nomex Insulation", color: "orange-text-gradient" },
			{ name: "Waterproofing", color: "blue-text-gradient" },
			{ name: "FSAE", color: "green-text-gradient" },
		],
		image: "/projectimg/containerip.jpeg",
		platform: "Vercel",
		deploy_link: "https://www.uwfsae.ca/",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Contributed to the development, validation, and environmental protection of the Formula Electric accumulator container, supporting manufacturing validation, waterproofing efforts, and high-voltage insulation systems for a 504V battery pack.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"The accumulator container serves as the structural enclosure for the Formula Electric battery pack, protecting high-voltage components while ensuring compliance with electrical isolation and environmental sealing requirements. My involvement spanned both prototype validation and final accumulator preparation.",
			},
			{ type: "subheading", value: "Prototype Validation" },
			{
				type: "text",
				value:
					"During the design phase, I supported enclosure prototyping by converting sheet metal CAD designs into laser-cut mockups and assembling physical prototypes of the accumulator container. These prototypes allowed the team to:",
			},
			{
				type: "bullets",
				items: [
					"Validate packaging and component spacing",
					"Verify serviceability and assembly procedures",
					"Identify interference issues before manufacturing",
					"Refine enclosure layouts prior to final production",
				],
			},
			{
				type: "text",
				value:
					"Working with physical mockups helped bridge the gap between CAD models and real-world assembly constraints.",
			},
			{ type: "subheading", value: "Waterproofing & IP Validation" },
			{ type: "image", src: "/projectimg/containerip.jpeg", alt: "Image of Waterproofed Container"},
			{
				type: "text",
				value:
					"I led much of the accumulator waterproofing effort prior to competition. The enclosure contained numerous potential ingress points including connectors, seams, fasteners, latches, and welded joints. To improve environmental protection, I installed and validated:",
			},
			{
				type: "bullets",
				items: [
					"Connector sealing systems",
					"Gaskets and edge trim",
					"Waterproofing treatments for fasteners and latches",
					"Weld integrity inspections",
					"Enclosure sealing interfaces",
				],
			},
			{ type: "image", src: "/projectimg/ip.PNG", alt: "Image of IP Rain Testing"},

			{ type: "subheading", value: "High-Voltage Insulation" },
			{
				type: "text",
				value:
					"Because the accumulator operates at approximately 504V nominal, electrical isolation was a critical safety requirement. I developed and installed custom Nomex insulation patterns throughout the enclosure to prevent accidental contact between conductive components and the metallic container structure. This involved:",
			},
			{
				type: "bullets",
				items: [
					"Designing insulation templates",
					"Creating custom Nomex cutouts",
					"Covering exposed conductive surfaces",
					"Verifying insulation coverage around high-voltage components",
				],
			},
			{ type: "image", src: "/projectimg/containerlid.jpeg", alt: "Image of Nomex Covered Accumulator Lid"},

			{
				type: "text",
				value:
					"The insulation system provided both electrical isolation and an additional layer of thermal and fire protection within the accumulator.",
			},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project exposed me to many of the practical engineering challenges involved in designing and manufacturing high-voltage systems. I learned how enclosure design extends far beyond packaging components, requiring careful consideration of environmental protection, manufacturability, serviceability, and electrical safety. Working on waterproofing and insulation systems also gave me a deeper appreciation for how small details — such as connector sealing, insulation coverage, or gasket placement — can have significant impacts on reliability and safety.",
			},
		],
	},

		// ── School: 2-Axis CNC Drawing Machine ───────────────────────────────────
		{
			name: "2-Axis Robotic CNC Drawing Machine",
			description:
				"Designed and built a 2-axis robotic drawing machine using VEX robotics and C++, implementing closed-loop PID control to accurately position a marker across a sheet of paper.",
			tags: [
				{ name: "C++", color: "blue-text-gradient" },
				{ name: "PID Control", color: "green-text-gradient" },
				{ name: "Robotics", color: "orange-text-gradient" },
			],
			image: "/projectimg/vexoverhead.jpeg",
			platform: "Web",
			content: [
				{ type: "heading", value: "Overview" },
				{
					type: "text",
					value:
						"Designed and built a 2-axis robotic drawing machine using VEX robotics components, implementing motor control, sensor feedback, and closed-loop motion control to accurately reproduce drawings on paper.",
				},
				{ type: "image", src: "/projectimg/robotdrawing.jpeg", alt: "Image of the Vex Robot Drawing Machine"},
				{ type: "heading", value: "What I Did" },
				{
					type: "text",
					value:
						"As part of a team engineering project, we were tasked with designing and building a robotic system capable of performing a repeatable physical task. Our solution was a two-axis drawing machine that could control the position of a marker across a sheet of paper using independently actuated X and Y axes, built on the VEX robotics platform and programmed in C++.",
				},
				{
					type: "text",
					value:
						"To achieve accurate positioning, we implemented closed-loop motor control using sensor feedback and PID control algorithms. The control system continuously measured position error and adjusted motor outputs to improve tracking accuracy and reduce overshoot. The project required integrating several engineering disciplines:",
				},
				{
					type: "bullets",
					items: [
						"Mechanical design and assembly of the motion system",
						"Motor selection and drivetrain configuration",
						"Sensor integration and calibration",
						"PID tuning and motion control",
						"Embedded programming in C++",
						"System testing and validation",
					],
				},
				{ type: "image", src: "/projectimg/robotarm.jpeg", alt: "Vex Robot Main Arm"},
				{ type: "subheading", value: "Iteration & Troubleshooting" },
				{
					type: "text",
					value:
						"A significant portion of the project involved iterative testing and troubleshooting. Small mechanical imperfections, sensor inaccuracies, and controller tuning issues often produced unexpected behaviour, requiring repeated refinement of both the hardware and software. Working within project constraints also required balancing performance, complexity, and development time — rather than pursuing the most sophisticated solution, we focused on creating a reliable system that consistently achieved the project objectives.",
				},
				{ type: "heading", value: "What I Learned" },
				{
					type: "text",
					value:
						"This project provided my first hands-on experience with robotic systems and closed-loop control. I learned how sensors, actuators, and software interact to create a functioning robotic system, and gained practical experience implementing and tuning PID controllers. More importantly, I learned that successful robotics projects depend on the integration of mechanical, electrical, and software systems rather than any individual component.",
				},
				{
					type: "text",
					value:
						"The project also strengthened my teamwork, troubleshooting, and iterative design skills by forcing us to diagnose problems, test hypotheses, and improve the system through repeated experimentation.",
				},
			],
		},
	
	
	// ── FSAE: AMS Board Assembly ──────────────────────────────────────────────
	{
		name: "AMS Board Assembly",
		description:
			"Assembled and soldered Accumulator Management System (AMS) boards for the Formula Electric battery pack, learning PCB assembly and battery management hardware firsthand.",
		tags: [
			{ name: "Soldering", color: "orange-text-gradient" },
			{ name: "PCB Assembly", color: "blue-text-gradient" },
			{ name: "FSAE", color: "green-text-gradient" },
		],
		image: "/projectimg/ams.jpeg",
		platform: "Vercel",
		deploy_link: "https://www.uwfsae.ca/",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Assembled and soldered Formula SAE Accumulator Management System (AMS) boards, developing PCB assembly and soldering skills while contributing to the battery management infrastructure of the Formula Electric accumulator.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"The Accumulator Management System (AMS) is a critical component of the Formula Electric battery pack. Each accumulator segment contains an AMS board responsible for communicating with voltage sensing (VSense) boards mounted directly on the cell segments. The VSense boards monitor individual cell voltages and temperatures throughout the accumulator. This information is transmitted to the AMS boards, which process the data and communicate it to the Battery Management Unit (BMU). The BMU then uses this information to validate pack health, monitor safety conditions, and enforce battery protection logic.",
			},
			{ type: "image", src: "/projectimg/ams2.JPG", alt: "Top Down of AMS Board"},
			{
				type: "text",
				value:
					"As part of accumulator manufacturing, I assembled and soldered multiple AMS boards before competition. This involved:",
			},
			{
				type: "bullets",
				items: [
					"Soldering through-hole and surface-mounted components",
					"Installing connectors, capacitors, resistors, and integrated circuits",
					"Inspecting solder joints for quality and reliability",
					"Supporting board preparation and testing prior to installation",
				],
			},
			{ type: "image", src: "/projectimg/amsback.jpeg", alt: "Image of Bleed Resistor on AMS"},
			{
				type: "text",
				value:
					"The work required careful attention to detail, as poor solder joints or incorrectly installed components could compromise communication between the AMS, VSense boards, and the broader battery management system. By the end of the project, I had assembled several AMS boards that were ultimately integrated into the competition accumulator.",
			},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project served as my introduction to electronics assembly and significantly improved my soldering skills. I learned proper soldering techniques, PCB assembly practices, component identification, and quality inspection methods. More importantly, the project helped me understand how battery management hardware is structured and how sensing, communication, and safety systems interact within a high-voltage accumulator.",
			},
		],
	},

	// ── Hackathon: Synthetic Data Generator ──────────────────────────────────
	{
		name: "Synthetic Data Generator",
		description:
			"Built a full-stack synthetic data platform combining CTGANs and LLMs to solve AI training data scarcity, with a built-in statistical validation dashboard comparing synthetic and real datasets.",
		tags: [
			{ name: "CTGAN", color: "green-text-gradient" },
			{ name: "LLM", color: "blue-text-gradient" },
			{ name: "Python", color: "pink-text-gradient" },
			{ name: "React", color: "orange-text-gradient" },
		],
		image: "/projectimg/synthetic.png",
		source_code_link: "https://github.com/NicoleThiessen/Smart-Data-Synthetic-Generator-for-Gen-AI-Hackathon",
		platform: "Vercel",
		deploy_link: "https://www.youtube.com/watch?v=baWmiI1C_vk",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Developed a synthetic data generation platform to solve a training data shortage in my Jarvis AI assistant project, combining CTGANs, large language models, and privacy-preserving techniques to generate high-quality datasets for machine learning applications.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"While developing my Jarvis virtual assistant, I encountered a common machine learning problem: obtaining enough high-quality labeled data to train a custom neural network. The neural network responsible for mapping emotional states to body language required thousands of training examples, but no suitable public dataset existed. Rather than manually creating the data, I decided to build a system capable of generating and enriching synthetic datasets automatically.",
			},
			{ type: "subheading", value: "CTGAN-Based Generation" },
			{
				type: "text",
				value:
					"For structured tabular datasets, I integrated CTGAN (Conditional Tabular GAN) models capable of learning patterns from real datasets and generating statistically similar synthetic samples. The generator could:",
			},
			{
				type: "bullets",
				items: [
					"Learn numerical and categorical feature distributions",
					"Preserve relationships between variables",
					"Generate large synthetic datasets from small real-world samples",
					"Support downstream machine learning workflows",
				],
			},
			{ type: "subheading", value: "LLM-Based Enrichment" },
			{
				type: "text",
				value:
					"I integrated large language models through OpenRouter to generate, modify, and enrich datasets using natural language prompts. This enabled users to:",
			},
			{
				type: "bullets",
				items: [
					"Create datasets from scratch",
					"Expand existing datasets",
					"Generate new records matching specific requirements",
					"Improve dataset diversity and coverage",
				],
			},
			{ type: "subheading", value: "Hybrid Generation Pipeline" },
			{
				type: "text",
				value:
					"One of the most interesting features was the ability to combine both approaches. Users could generate synthetic data using CTGAN, enrich or modify it using an LLM, then re-generate larger datasets from the enriched data — leveraging both statistical modeling and language-model reasoning within a single workflow.",
			},
			{ type: "subheading", value: "Privacy Preservation" },
			{
				type: "text",
				value:
					"To support privacy-sensitive applications, I implemented post-processing techniques including:",
			},
			{
				type: "bullets",
				items: [
					"Gaussian noise injection",
					"Column masking",
					"Category swapping",
					"Distribution modification",
				],
			},
			{ type: "subheading", value: "Data Validation Framework" },
			{
				type: "text",
				value:
					"A major challenge in synthetic data generation is determining whether generated data is actually useful. I built an automated validation dashboard that compared synthetic and real datasets using:",
			},
			{
				type: "bullets",
				items: [
					"Chi-Squared tests",
					"Kolmogorov-Smirnov statistics",
					"Wasserstein distance",
					"Total variation distance",
					"Correlation preservation metrics",
				],
			},
			{ type: "subheading", value: "Full-Stack Application" },
			{
				type: "text",
				value: "The platform was implemented as a complete web application consisting of:",
			},
			{
				type: "bullets",
				items: [
					"React frontend",
					"FastAPI backend",
					"CTGAN training and generation services",
					"LLM integration through OpenRouter",
					"Interactive visualization and validation tools",
				],
			},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project taught me that generating machine learning data can be as challenging as building the model itself. I gained experience working with generative AI systems, GANs, synthetic data pipelines, statistical validation techniques, and full-stack application development. More importantly, I learned how to evaluate machine learning data quality rather than simply generating larger quantities of data.",
			},
		],
	},
 
	// ── School: Aerodynamic Glider Study ──────────────────────────────────────
	{
		name: "Aerodynamic Glider Study",
		description:
			"IB Extended Essay: modeled 22 glider configurations in SolidWorks and ran CFD simulations in SimScale to investigate how wing aspect ratio influences lift, drag, and glide efficiency.",
		tags: [
			{ name: "CFD", color: "blue-text-gradient" },
			{ name: "SolidWorks", color: "green-text-gradient" },
			{ name: "Aerodynamics", color: "orange-text-gradient" },
		],
		image: "/projectimg/ee.png",
		platform: "Vercel",
		deploy_link: "https://docs.google.com/document/d/1OGTv2R9tIUioGpj1CzntGx-VZ7_ldNtkfAOxgAhq20c/edit?usp=sharing",
		content: [
			{ type: "heading", value: "Overview" },
			{
				type: "text",
				value:
					"Conducted an independent aerodynamics research study investigating how wing aspect ratio influences glider performance, using CAD modeling, computational fluid dynamics (CFD), and mathematical modeling to analyze lift, drag, and glide efficiency.",
			},
			{ type: "heading", value: "What I Did" },
			{
				type: "text",
				value:
					"For my IB Extended Essay, I set out to investigate how wing aspect ratio affects the aerodynamic performance of gliders and whether the relationship could be quantitatively modeled. I designed a series of glider configurations with varying wing aspect ratios in SolidWorks while keeping other design parameters consistent, isolating aspect ratio as the primary independent variable.",
			},
			{ type: "subheading", value: "CFD Simulations" },
			{
				type: "text",
				value:
					"The models were imported into SimScale, where I performed CFD simulations to evaluate aerodynamic performance under identical flight conditions. For each configuration, I analyzed:",
			},
			{
				type: "bullets",
				items: [
					"Lift and drag forces",
					"Lift-to-drag ratio (L/D)",
					"Flow velocity distributions",
					"Pressure distributions",
					"Boundary layer behaviour",
					"Flow separation characteristics",
				],
			},
			{
				type: "text",
				value:
					"A significant portion of the project involved validating simulation setups, refining mesh quality, and interpreting aerodynamic flow visualizations. The simulations showed that increasing aspect ratio generally improved glide efficiency by reducing induced drag — resulting in higher lift-to-drag ratios. However, the analysis also revealed additional aerodynamic effects at higher aspect ratios, including changes in flow behaviour and boundary layer separation characteristics.",
			},
			{ type: "subheading", value: "Mathematical Modeling" },
			{
				type: "text",
				value:
					"After collecting the simulation data, I performed mathematical analysis to model the relationship between aspect ratio and glide performance. Using aerodynamic theory and regression techniques, I derived a mathematical expression capturing the observed performance trends and compared model predictions against CFD results.",
			},
			{
				type: "text",
				value:
					"The project ultimately combined literature review, CAD modeling, CFD simulation, data analysis, and mathematical modeling into a complete engineering research workflow.",
			},
			{ type: "heading", value: "What I Learned" },
			{
				type: "text",
				value:
					"This project was my introduction to computational aerodynamics and engineering research. I learned how CFD can be used to investigate complex aerodynamic phenomena that would be difficult to measure experimentally, while also gaining experience with CAD modeling, simulation setup, mesh refinement, and post-processing of simulation results.",
			},
			{
				type: "text",
				value:
					"More importantly, I learned how engineering research extends beyond running simulations. The most valuable part was interpreting results, identifying underlying physical mechanisms, and developing mathematical models that could explain observed behaviour — rather than simply reporting numerical outputs.",
			},
		],
	},
 ];
	
	export { services, technologies, experiences, testimonials, projects };
	
