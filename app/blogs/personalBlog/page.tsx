import { JetBrains_Mono } from "next/font/google";
import BackButton from "../BackButton";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-jetbrains-mono",
});

export default function PersonalBlog() {
	return (
		<div
			className={`${jetbrainsMono.className} min-h-screen flex flex-col lg:flex-col bg-white dark:bg-[#313338] transition-colors duration-300 p-8 lg:p-12 gap-8`}
		>
			<div className="flex flex-row gap-4">
				<BackButton />
				<h1 className="text-4xl text-[#f0a04b]">
					Compile, Run, Improvise
				</h1>
			</div>

			<p className="text-sm text-gray-500 dark:text-gray-400">
				February 2025
			</p>

			<div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 leading-relaxed">
				{/* Self-Introduction */}
				<div>
					<h2 className="text-2xl text-[#f0a04b] mb-2">
						Who Am I?
					</h2>
					<p>
						Hi, I&apos;m Sang Hyup, but most people call me Shawn.
						I&apos;m a computer science student at Johns Hopkins
						University, a startup co-founder, and someone who has
						spent most of his life approaching the world like a
						problem to be debugged. I think in systems. I plan
						things out. I like knowing what comes next.
					</p>
					<br />
					<p>
						Which is exactly why improv terrifies me, and exactly
						why I&apos;m here.
					</p>
					<br />
					<p>
						Outside of code, I&apos;m the person who will drive
						thirty minutes for a restaurant I saw on someone&apos;s
						Instagram story, the kind of friend who says
						&quot;yes&quot; to spontaneous road trips but
						secretly has the route already mapped out in his head.
						I care deeply about making things that help people,
						whether that&apos;s an AI medical interpreter for
						patients who can&apos;t communicate with their doctors
						or a browser extension that makes the web more
						accessible. Creativity, for me, has always lived inside
						a code editor. This class is my attempt to find out
						where else it might live.
					</p>
				</div>

				{/* Blog Purpose Statement */}
				<div>
					<h2 className="text-2xl text-[#f0a04b] mb-2">
						What This Blog Is About
					</h2>
					<p>
						This blog is a real-time journal of what happens when a
						developer who plans everything gets thrown into an art
						form built entirely on not planning. Each post will be
						an honest reflection on what I&apos;m learning in my
						improv class: the exercises that clicked, the moments
						that didn&apos;t, and the slow process of getting
						comfortable with the uncomfortable. If you&apos;ve ever
						been curious about improv but never tried it, think of
						this as a window into that world from someone who is
						figuring it out one scene at a time.
					</p>
				</div>

				{/* What is Improv */}
				<div>
					<h2 className="text-2xl text-[#f0a04b] mb-2">
						So, What Even Is Improv?
					</h2>
					<p>
						For anyone unfamiliar, improv (short for improvisation)
						is a form of live theater where nothing is scripted.
						Performers create scenes, characters, and stories
						completely on the spot, often based on a single
						audience suggestion. There are no scripts, no
						rehearsals, no second takes. The golden rule is{" "}
						<span className="text-[#f0a04b] font-semibold">
							&quot;Yes, and...&quot;
						</span>
						: you accept whatever your scene partner gives you and
						build on it. If someone says &quot;We&apos;re on the
						moon,&quot; you don&apos;t argue. You&apos;re on the
						moon. Now what?
					</p>
					<br />
					<p>
						It&apos;s equal parts terrifying and freeing, which is
						what makes it such a powerful creative exercise even
						for people who never plan to perform on a stage.
					</p>
				</div>

				{/* Class Motivation */}
				<div>
					<h2 className="text-2xl text-[#f0a04b] mb-2">
						Why Improv? Why Now?
					</h2>
					<p>
						As an engineer, I spend most of my time in
						environments where precision matters. Code either
						compiles or it doesn&apos;t. A function returns the
						right value or it&apos;s a bug. There&apos;s comfort in
						that clarity, but there&apos;s also a cost: I&apos;ve
						noticed that I hesitate when there&apos;s no clear
						&quot;right answer.&quot; In conversations, in
						brainstorms, in moments that call for spontaneity, my
						first instinct is to hold back and think instead of
						just going for it.
					</p>
					<br />
					<p>
						Improv is the opposite of that instinct. It rewards
						the people who leap before they look. I chose this
						class because I wanted to train a muscle I&apos;ve
						been neglecting: the ability to trust myself in the
						moment, to say something without knowing if it&apos;s
						the &quot;optimal&quot; thing to say, and to be okay
						with failing in front of others. In a way, it&apos;s
						like learning a new programming language, except the
						compiler is an audience, and the syntax is just being
						human.
					</p>
				</div>

				{/* What to Expect */}
				<div>
					<h2 className="text-2xl text-[#f0a04b] mb-2">
						What You Can Expect Here
					</h2>
					<p>
						Each week, I&apos;ll share reflections on my improv
						sessions: what exercises we did, what I learned about
						performance and creativity, and how those lessons
						connect (or clash) with the way I normally think.
						Expect honesty over polish. This blog is less about
						having answers and more about asking better questions,
						one improvised scene at a time.
					</p>
					<br />
					<p>
						Welcome to{" "}
						<span className="text-[#f0a04b] font-semibold">
							Compile, Run, Improvise
						</span>
						. No scripts. No syntax errors. Just whatever happens
						next.
					</p>
				</div>
			</div>
		</div>
	);
}
