/* # Front-end Style Guide

- Font size: 16px

### Font

- Weights: 400, 500, 600, 700 */

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

function App() {
	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm<Inputs>({
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
	});
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		resetField("firstName");
		resetField("lastName");
		resetField("email");
		resetField("password");
	};

	return (
		<main className="flex md:flex-row flex-col items-center justify-center min-h-screen bg-primary-red bg-[url('/images/bg-intro-mobile.png')]">
			<header className="text-center md:mr-24 md:text-start md:w-[450px] mb-14 flex flex-col items-center  w-[20rem] text-white">
				<h1 className="text-[1.75rem]/9 md:text-4xl mb-6 font-bold font-poppins">
					Learn to code by watching others
				</h1>
				<p className="text-base/[1.65rem] md:w-auto w-[90%] font-medium">
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.
				</p>
			</header>
			<section className="w-[20rem] md:w-[30rem]">
				<h2 className="py-5 mb-6 text-center text-white shadow-2xl md:py-4 md:justify-center md:items-center md:flex rounded-xl font-poppins bg-accent-blue">
					<strong>Try it free 7 days </strong> <span>then</span>
					<br />
					<span>$20/mo. thereafter</span>
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="p-4 w-[20rem] md:w-[30rem] bg-white rounded-lg"
				>
					<div className="mb-4 text-right">
						<input
							{...register("firstName", { required: true })}
							placeholder="First Name"
							className={`w-full px-3 py-3 mb-4 font-medium border-2 rounded-md 
							focus:outline-none focus:border-neutral-grayishBlue focus:ring-0 
							placeholder:text-sm placeholder:font-semibold placeholder:font-poppins 
							placeholder:text-neutral-grayishBlue text-neutral-darkBlue 
							${errors.firstName ? "focus:border-red-500" : ""}`}
						/>
						{errors.firstName && errors.firstName.type === "required" && (
							<span className="text-xs italic text-red-500 ">
								First name cannot be empty.
							</span>
						)}
					</div>
					<div className="mb-4 text-right">
						<input
							{...register("lastName", { required: true })}
							placeholder="Last Name"
							className={`w-full px-3 py-3 mb-4 font-medium border-2 rounded-md focus:outline-none focus:border-neutral-grayishBlue focus:ring-0 placeholder:text-sm placeholder:font-semibold placeholder:font-poppins placeholder:text-neutral-grayishBlue text-neutral-darkBlue ${
								errors.lastName ? "focus:border-red-500" : ""
							}`}
						/>
						{errors.lastName && errors.lastName.type === "required" && (
							<span className="text-xs italic text-red-500 ">
								Last name cannot be empty.
							</span>
						)}
					</div>
					<div className="mb-4 text-right">
						<input
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Looks like this is not an email",
								},
							})}
							placeholder="Email Address"
							className={`w-full px-3 py-3 mb-4 font-medium border-2 rounded-md focus:outline-none focus:border-neutral-grayishBlue focus:ring-0 placeholder:text-sm placeholder:font-semibold placeholder:font-poppins placeholder:text-neutral-grayishBlue text-neutral-darkBlue ${
								errors.email ? "focus:border-red-500" : ""
							}`}
						/>
						{errors.email && (
							<p className="text-sm text-red-500">{errors.email.message}</p>
						)}
					</div>
					<div className="mb-4 text-right">
						<input
							{...register("password", { required: true })}
							placeholder="Password"
							type="password"
							className={`w-full px-3 py-3 mb-4 font-medium border-2 rounded-md focus:outline-none focus:border-neutral-grayishBlue focus:ring-0 placeholder:text-sm placeholder:font-semibold placeholder:font-poppins placeholder:text-neutral-grayishBlue text-neutral-darkBlue ${
								errors.password ? "focus:border-red-500" : ""
							}`}
						/>
						{errors.password && errors.password.type === "required" && (
							<span className="text-xs italic text-red-500 ">
								Password cannot be empty.
							</span>
						)}
					</div>

					<button
						type="submit"
						className="w-full text-white h-[3rem] font-poppins p-4 text-center tracking-wide text-[16px] bg-primary-green rounded-md shadow-md shadow-green-600"
					>
						CLAIM YOUR FREE TRIAL
					</button>
					<p className="mt-5 ml-5 text-xs w-[85%] pb-3 text-center text-neutral-grayishBlue">
						By clicking the button, you are agreeing to our{" "}
						<a href="#" className="text-primary-red">
							Terms and Services
						</a>
						.
					</p>
				</form>
				<footer className="mt-10">
					<p className="attribution">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a href="https://github.com/replayzor" target="_blank">
							Ionut Oltean
						</a>
						.
					</p>
				</footer>
			</section>
		</main>
	);
}

export default App;
