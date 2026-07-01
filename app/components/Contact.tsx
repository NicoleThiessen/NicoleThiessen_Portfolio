"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false);
	// "idle" | "success" | "error"
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setStatus("idle");

		emailjs
			.send(
				"service_y366iq1",   // your EmailJS Service ID
				"template_wci2gkt",  // your EmailJS Template ID
				{
					from_name: form.name,
					to_name: "Nicole Thiessen",
					from_email: form.email,
					to_email: "nicole.d.thiessen@gmail.com",
					message: form.message,
				},
				"Avt5QfjJFc5zGGi_H", // your EmailJS Public Key
			)
			.then(() => {
				setLoading(false);
				setStatus("success");
				setForm({ name: "", email: "", message: "" });
			})
			.catch((error) => {
				console.error("EmailJS error:", error);
				setLoading(false);
				setStatus("error");
			});
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="heroSubText">Get in Touch</p>
				<h3 className="heroHeadText">Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name.</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							required
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email.</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							required
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message.</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							required
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<div className="flex flex-col gap-3">
						<button
							type="submit"
							disabled={loading}
							className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
						>
							{loading ? "Sending..." : "Send"}
						</button>

						{/* Inline status messages — no jarring alert() popups */}
						{status === "success" && (
							<p className="text-[14px]" style={{ color: "#38ef7d" }}>
								Message sent — I'll get back to you as soon as possible!
							</p>
						)}
						{status === "error" && (
							<p className="text-[14px]" style={{ color: "#fc6767" }}>
								Something went wrong. Please try emailing me directly at{" "}
								<a
									href="mailto:nicole.d.thiessen@gmail.com"
									className="underline"
								>
									nicole.d.thiessen@gmail.com
								</a>
							</p>
						)}
					</div>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
