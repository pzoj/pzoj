import Head from "next/head";
import Dice from "@/components/Dice";
import Navbar from "@/components/Navbar";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from "react";


export default () => {
	const [random, setRandom] = useState("Dynamic Programming.");
	useEffect(() => {
		setInterval(() => {
			const list = [
				"Dynamic Programming.", "Tree Algorithms.", "Graph Theory.", "Binary Search.", "Heaps.", "Dijkstra's Algorithm.",
				"Priority Queues.", "Sparse Tables.", "Segmentation Trees.", "Greedy Algorithms.", "Bellmen Ford Algorithm.",
				"Max Flow.", "Two Pointers System.", "Sliding Window.", "Kruskal's Algorithm.", "Tabulation."
			];
			setRandom(list[Math.floor(Math.random() * 16)]);
		}, 1000);
	}, []);

	return (
		<>
			<Head>
				<title>PZOJ</title>
				<meta
					name="description"
					content="Learn competitive programming and solve programming problems!"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/images/favicon.png" />
			</Head>

			<main className="bg-dark-0 flex flex-col justify-center items-center">
				<Navbar
					className=""
					links={[
						{ text: "Home", url: "/" },
						{ text: "Problems", url: "/problems" },
						{ text: "Learn", url: "/learn" },
						{ text: "Recommended", url: "/recommended" },
					]}
				/>

				<div className="pt-[4rem]">
					<h1 className="text-grey-2 text-7xl font-bold ml-[2rem] mt-[2rem] mr-[55%]">Master Competitive Programming.</h1>
					<p className="text-grey-1 mt-[1rem] bottom-[2rem] ml-[2rem] mr-[64%] text-lg leading-[3rem]">
						An online judge that helps you learn as you do problems. By recommending problems based on what you've struggled on and areas you're unfamiliar with, this is the perfect tool to get started with competitive programming with. We offer built courses for all skill levels, which combined with our elaborate editorials allow anyone to understand a problem, even without previous knowledge.
					</p>
				</div>
				<div className="absolute top-[4rem] bottom-0 right-0 left-0">
					<Canvas >
						<OrbitControls />
						<ambientLight args={["#ffffff", 0.5]} />
						<directionalLight args={["#ffffff", 0.5]} position={[-3, 8, 1]} />
						<Dice />
					</Canvas>
				</div>
				<p1 className="absolute text-grey-2 text-4xl font-bold left-[60rem] top-[50%]">{"->" + random}</p1>
			</main>
		</>
	);
};
