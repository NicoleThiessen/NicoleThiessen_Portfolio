"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

// ─── Types ────────────────────────────────────────────────────────────────────

type ContentBlock =
	| { type: "heading"; value: string }
	| { type: "subheading"; value: string }
	| { type: "text"; value: string }
	| { type: "bullets"; items: string[] }
	| { type: "image"; src: string; alt: string };

type Project = {
	index: number;
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
};

// ─── Platform icon helper ─────────────────────────────────────────────────────

const platformIcon = (platform: Project["platform"]) => {
	const icons: Record<string, string> = {
		Netlify: "/tech/netlify.webp",
		Vercel: "/tech/vercel.svg",
		Wordpress: "/tech/wordpress.webp",
		Web: "/web.webp",
		Figma: "/tech/figma.webp",
	};
	return icons[platform] ?? "/tech/vercel.svg";
};

// ─── Project popup ────────────────────────────────────────────────────────────

type PopupProps = {
	project: Project | null;
	onClose: () => void;
};

const ProjectPopup = ({ project, onClose }: PopupProps) => {
	// Track whether we're mounted in the browser — portals need the DOM to exist.
	// On the server (Next.js SSR) document doesn't exist, so we skip rendering.
	const [mounted, setMounted] = useState(false);
	useEffect(() => { setMounted(true); }, []);

	const handleKey = useCallback(
		(e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
		[onClose],
	);

	useEffect(() => {
		if (!project) return;
		document.addEventListener("keydown", handleKey);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleKey);
			document.body.style.overflow = previousOverflow;
		};
	}, [project, handleKey]);

	// Don't render on the server or before mount
	if (!mounted) return null;

	// createPortal renders the popup as a direct child of <body>.
	// This means it lives completely outside the motion.section stacking context
	// that SectionWrapper creates, so z-index works globally and the popup
	// always appears above the navbar.
	return createPortal(
		<AnimatePresence>
			{project ? (
				// Backdrop
				<motion.div
					key="popup-backdrop"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					onClick={onClose}
					style={{
						position: "fixed",
						inset: 0,
						zIndex: 9999,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "1rem",
						backgroundColor: "rgba(0, 0, 0, 0.75)",
					}}
				>
					{/* Modal panel */}
					<motion.div
						key="popup-modal"
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ type: "spring", duration: 0.4 }}
						onClick={(e) => e.stopPropagation()}
						className="popup-scroll"
						style={{
							position: "relative",
							width: "100%",
							maxWidth: "672px",
							maxHeight: "85vh",
							overflowY: "auto",
							borderRadius: "1rem",
							padding: "2rem",
							backgroundColor: "#1d1836",
						}}
					>
						{/* ✕ close button */}
						<button
							type="button"
							onClick={onClose}
							aria-label="Close project details"
							style={{
								position: "absolute",
								top: "1rem",
								right: "1rem",
								width: "36px",
								height: "36px",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
								backgroundColor: "rgba(255,255,255,0.08)",
								border: "1px solid rgba(255,255,255,0.15)",
								color: "#fff",
								fontSize: "20px",
								lineHeight: 1,
								flexShrink: 0,
							}}
						>
							×
						</button>

						{/* Header: title */}
						<div style={{ paddingRight: "2.5rem", marginBottom: "1rem" }}>
							<p className="sectionSubText" style={{ marginBottom: "4px" }}>
								Things I have built
							</p>
							<h3 className="text-white font-bold text-[24px] leading-tight">
								{project.name}
							</h3>
						</div>

						{/* Tags + link bubbles on the same row */}
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								alignItems: "center",
								gap: "8px",
								marginBottom: "1.25rem",
							}}
						>
							{project.tags.map((tag) => (
								<p key={tag.name} className={`text-[13px] ${tag.color}`}>
									#{tag.name}
								</p>
							))}

							{(project.source_code_link || project.deploy_link) && (
								<span
									style={{
										width: "1px",
										height: "16px",
										backgroundColor: "rgba(255,255,255,0.2)",
										borderRadius: "1px",
										flexShrink: 0,
									}}
								/>
							)}

							{project.source_code_link && (
								<Link
									href={project.source_code_link}
									target="_blank"
									title="View source code"
									className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
								>
									<Image src="/tech/github.webp" width={18} height={18} alt="GitHub" className="object-contain" />
								</Link>
							)}
							{project.deploy_link && (
								<Link
									href={project.deploy_link}
									target="_blank"
									title="Open live project"
									className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
								>
									<Image src={platformIcon(project.platform)} width={18} height={18} alt="Live project" className="object-contain" />
								</Link>
							)}
						</div>

						{/* Body: headings, subheadings, text, bullets, and images */}
						<div className="flex flex-col gap-4">
							{project.content.map((block, i) => {
								if (block.type === "heading") {
									return (
										<h4
											key={i}
											className="text-white font-bold text-[17px]"
											style={{ marginTop: i === 0 ? 0 : "0.5rem", paddingBottom: "0.35rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
										>
											{block.value}
										</h4>
									);
								}
								if (block.type === "subheading") {
									return (
										<h5
											key={i}
											className="text-white font-semibold text-[14px]"
											style={{ marginTop: "0.1rem" }}
										>
											{block.value}
										</h5>
									);
								}
								if (block.type === "text") {
									return (
										<p key={i} className="text-secondary text-[14px] leading-[1.8]">
											{block.value}
										</p>
									);
								}
								if (block.type === "bullets") {
									return (
										<ul
											key={i}
											style={{
												paddingLeft: "1.25rem",
												display: "flex",
												flexDirection: "column",
												gap: "0.35rem",
												listStyleType: "disc",
											}}
										>
											{block.items.map((item, j) => (
												<li
													key={j}
													className="text-secondary text-[14px] leading-[1.7]"
													style={{ paddingLeft: "0.25rem" }}
												>
													{item}
												</li>
											))}
										</ul>
									);
								}
								if (block.type === "image") {
									return (
										<figure key={i} style={{ width: "100%", margin: 0 }}>
											<div style={{ width: "100%", borderRadius: "0.75rem", overflow: "hidden", maxHeight: "340px" }}>
												<Image src={block.src} width={1200} height={700} alt={block.alt} className="w-full h-full object-cover" />
											</div>
											<figcaption
												style={{
													marginTop: "0.5rem",
													textAlign: "center",
													fontSize: "11px",
													fontStyle: "italic",
													letterSpacing: "0.04em",
													color: "rgba(170, 168, 192, 0.65)",
												}}
											>
												{block.alt}
											</figcaption>
										</figure>
									);
								}
								return null;
							})}
						</div>
					</motion.div>
				</motion.div>
			) : null}
		</AnimatePresence>,
		document.body, // ← portal target: renders directly on <body>, outside all stacking contexts
	);
};

// ─── Project card ─────────────────────────────────────────────────────────────

type ProjectCardProps = Project & { onClick: () => void };

const ProjectCard = ({
	index, name, description, tags, image,
	source_code_link, deploy_link, platform, onClick,
}: ProjectCardProps) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<div onClick={onClick} style={{ cursor: "pointer" }}>
				<Tilt
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
				>
					<div className="relative w-full h-[230px]">
						<Image src={image} width={1000} height={1000} alt="project_image" className="w-full h-full object-cover rounded-2xl" />
						<div className="absolute inset-0 flex justify-end m-3 card-img_hover" onClick={(e) => e.stopPropagation()}>
							{source_code_link && (
								<Link href={source_code_link} target="_blank" className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
									<Image src="/tech/github.webp" width={24} height={24} alt="source code" className="object-contain" />
								</Link>
							)}
							{deploy_link && (
								<Link href={deploy_link} target="_blank" className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer">
									<Image src={platformIcon(platform)} width={24} height={24} alt="live project" className="object-contain" />
								</Link>
							)}
						</div>
					</div>

					<div className="mt-5">
						<h3 className="text-white font-bold text-[24px]">{name}</h3>
						<p className="mt-2 text-secondary text-[14px]">{description}</p>
					</div>

					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map((tag) => (
							<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
								#{tag.name}
							</p>
						))}
					</div>

					<p className="mt-4 text-[12px] text-secondary opacity-60">Click to read more →</p>
				</Tilt>
			</div>
		</motion.div>
	);
};

// ─── Works section ────────────────────────────────────────────────────────────

const Works = () => {
	const [activeProject, setActiveProject] = useState<Project | null>(null);

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Things I have built</p>
				<h2 className="sectionHeadText">Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					The following projects showcase my ability to turn ideas into functional, real-world solutions. They reflect my interest in electromechanical design, neural networks, and problem solving. Click on any card to get the fully story.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
						onClick={() => setActiveProject({ ...project, index })}
					/>
				))}
			</div>

			<ProjectPopup
				project={activeProject}
				onClose={() => setActiveProject(null)}
			/>
		</>
	);
};

export default SectionWrapper(Works, "projects");
