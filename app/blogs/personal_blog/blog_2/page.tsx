import { JetBrains_Mono } from "next/font/google";
import BackButton from "../../BackButton";
import Image from "next/image";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-jetbrains-mono",
});

export default function Blog2() {
    return (
        <div
            className={`${jetbrainsMono.className} min-h-screen flex flex-col lg:flex-col bg-white dark:bg-[#313338] transition-colors duration-300 p-8 lg:p-12 gap-8`}
        >
            <div className="flex flex-row gap-4">
                <BackButton />
                <h1 className="text-4xl text-[#f0a04b]">
                    Risk and Flexibility
                </h1>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
                March 2025
            </p>

            <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 leading-relaxed">

                {/* Intro */}
                <div>
                    <p>
                        Welcome back to <span className="text-[#f0a04b] font-semibold">Compile, Run, Improvise</span>.
                        We&apos;ve covered a good amount of ground since the last time we were here, and I&apos;m
                        excited to share what I&apos;ve discovered about risk-taking and flexibility. If Blog #1 was
                        about walking into the room and just trying to survive, Blog #2 is about what happens when
                        you stop surviving and start actually playing. Spoiler: it&apos;s messier, scarier, and
                        somehow a lot more fun.
                    </p>
                    <br />
                    <p>
                        In my first blog, I talked about the Carnegie Hall stage fright that never quite left me,
                        about how I kept pressuring myself to be funny instead of just being present. Since then,
                        I&apos;ve been slowly learning to let go of that pressure. This blog is about what gets
                        unlocked when you do.
                    </p>
                </div>

                {/* Prompt 1 */}
                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        Adaptability: When the Scene Runs Away From You
                    </h2>
                    <p>
                        There was a scene a few weeks in that I still think about. My partner and I were
                        supposed to set up a simple two-person scene — I had this whole quiet arc in my head:
                        two coworkers in an office, a mundane disagreement, maybe something about a broken
                        printer. Very safe. Very planned. Very me.
                    </p>
                    <br />
                    <p>
                        About ten seconds in, my partner grabbed an invisible object from the air and announced,
                        &quot;The satellite dish is picking up something. Captain, do you hear that?&quot;
                        We were now in space. On a ship. I was apparently a captain.
                    </p>
                    <br />
                    <p>
                        My first instinct — and I felt it physically, like a system error — was to freeze.
                        The scene I had mentally compiled wasn&apos;t running anymore. There was no office,
                        no printer, no familiar coordinates. For about a half-second, I stood there doing the
                        improv equivalent of a spinning loading icon.
                    </p>
                    <br />
                    <p>
                        Then something clicked. I took the offer. &quot;Signal confirmed. We need to move.&quot;
                        And from there, the scene wrote itself. My partner had given me a world; I just had to
                        stop mourning the one I&apos;d planned and walk into the new one.
                    </p>
                    <br />
                    <p>
                        What I learned about myself: I don&apos;t fail at adapting because I can&apos;t think
                        quickly. I fail because I spend too long attached to what I <em>already</em> thought.
                        The bottleneck isn&apos;t processing speed — it&apos;s letting go. That half-second
                        freeze wasn&apos;t confusion; it was grief for a scene that didn&apos;t exist anymore.
                        Once I learned to treat my partner&apos;s unexpected moves as gifts instead of
                        disruptions, the creativity came naturally.
                    </p>
                    <br />
                    <figure className="mb-4">
                        <Image
                            src="/images/improv/panik.jpg"
                            alt="Panik Kalm meme — the moment your scene partner takes things off-script"
                            width={300}
                            height={300}
                            className="rounded-2xl w-full max-w-xs object-cover"
                        />
                        <figcaption className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                            That half-second between &quot;we&apos;re in space now&quot; and &quot;okay, I&apos;m a captain&quot;
                            — captured perfectly.
                        </figcaption>
                    </figure>
                </div>

                {/* Prompt 2 */}
                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        Adaptability in My Career: Saying Yes to the Pivot
                    </h2>
                    <p>
                        I&apos;m a CS student and a startup co-founder. Both of those identities revolve around
                        planning — system architecture, sprint cycles, product roadmaps. The irony is that
                        the moments that have mattered most in my startup have been the ones where
                        the plan broke down.
                    </p>
                    <br />
                    <p>
                        Here&apos;s a realistic scenario I could easily face: we&apos;re deep in a product demo
                        for a potential investor, and halfway through, they stop us and say,
                        &quot;I don&apos;t actually care about this feature. What I want to know is how you handle X.&quot;
                        X wasn&apos;t on our deck. X wasn&apos;t something we&apos;d prepared for.
                    </p>
                    <br />
                    <p>
                        The old version of me would have apologized and tried to redirect back to the script.
                        The improv-trained version of me hears that as an offer. <span className="text-[#f0a04b] font-semibold">&quot;Yes, and&quot;</span> means
                        accepting that the investor just told me exactly what they care about — and building
                        from there. Presence means not checking mentally back to slide four. Accepting offers
                        means treating that interruption not as a derailment but as the most valuable data
                        point in the room.
                    </p>
                    <br />
                    <p>
                        Research on workplace adaptability supports this directly. A study published in the
                        <em> Journal of Applied Psychology</em> found that &quot;cognitive flexibility&quot; —
                        the ability to shift mental frameworks quickly in response to new information —
                        is one of the strongest predictors of performance in high-uncertainty environments
                        <sup className="text-[#f0a04b] font-semibold ml-0.5">
                            <a href="#cite-2">2</a>
                        </sup>.
                        That&apos;s exactly what improv trains. Every scene where my partner takes us to
                        space is a rep. Every rep makes the pivot feel less like a failure and more like
                        the actual job.
                    </p>
                </div>

                {/* Prompt 3 */}
                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        A Risk I Actually Took: Co-founding a Startup
                    </h2>
                    <p>
                        The most significant risk I&apos;ve taken in my professional life was deciding to
                        co-found a startup during my sophomore year. Not &quot;I started a club&quot; or
                        &quot;I applied to a competitive program.&quot; I mean: I committed time, energy,
                        and a real stake in something that had no guarantee of working — and told people
                        about it, which felt almost worse.
                    </p>
                    <br />
                    <p>
                        What made it genuinely risky wasn&apos;t the idea. It was the leap from
                        &quot;I have a plan&quot; to &quot;I am executing without knowing the outcome.&quot;
                        As an engineer, I&apos;m comfortable in systems where I can test, debug, and iterate
                        in private. A startup doesn&apos;t give you that. You ship in public. You pitch in
                        public. You fail, if you fail, in public. Every early conversation with potential
                        users felt like an improv scene I hadn&apos;t rehearsed — which is exactly what it was.
                    </p>
                    <br />
                    <p>
                        The outcome was mixed in the way most real things are: some of what we built worked,
                        some didn&apos;t, and the lessons were harder than the wins. But the most important
                        thing I learned was that bold choices, even wrong ones, generate more information than
                        safe non-choices. As the UCB Manual puts it, the scene only moves forward when
                        someone makes a commitment —
                        &quot;A strong choice is better than no choice&quot;{" "}
                        <span className="text-[#f0a04b] text-sm italic">(UCB Manual, p. 52)</span>.
                        Sitting on the idea for another semester would have been a refusal to make the scene
                        move. Founding it was the choice that made everything else possible.
                    </p>
                    <br />
                    <p>
                        Looking back, the improv parallel is clear: trust, uncertainty, and the willingness
                        to make a move before you&apos;re certain it&apos;s right. You can&apos;t play an
                        improv scene from the sidelines. You can&apos;t build a company from the sidelines either.
                    </p>
                    <br />
                    <figure className="mb-4">
                        <Image
                            src="/images/improv/soccer.jpg"
                            alt="Committing to the shot — in soccer, in improv, and in startups"
                            width={300}
                            height={200}
                            className="rounded-2xl w-full max-w-xs object-cover"
                        />
                        <figcaption className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                            At some point, you stop dribbling and take the shot. Founding a startup
                            felt exactly like that — committing before you can be certain.
                        </figcaption>
                    </figure>
                </div>

                {/* Prompt 4 */}
                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        A Risk in Class: Making the Weird Choice
                    </h2>
                    <p>
                        For most of the first few weeks, I played it safe. I accepted offers. I built on what
                        my partner gave me. I was technically doing improv correctly — but I wasn&apos;t really
                        risking anything. I was doing the improv equivalent of running a working program
                        and never shipping it.
                    </p>
                    <br />
                    <p>
                        The risk came during a warm-up exercise where we had to establish a scene with a
                        single physical action. Most people did something obvious — washing dishes, typing
                        on a keyboard. When it was my turn, I had the urge to do something equally
                        recognizable. Instead, I paused, and then started slowly, deliberately tying a knot
                        in something invisible, with a kind of reverence, like it mattered enormously.
                        I had no idea what the scene was. I just committed to the energy.
                    </p>
                    <br />
                    <p>
                        My partner walked in, read the room, and said, &quot;Is it ready? The ceremony starts at sundown.&quot;
                        We were suddenly in the middle of something ancient and ceremonial, and the scene that
                        followed was one of the most genuinely interesting ones I&apos;d been part of.
                    </p>
                    <br />
                    <p>
                        What made that moment feel risky was that I chose specificity over safety. The weird
                        choice is riskier than the obvious one because it creates more room for failure — your
                        partner might not pick it up, the scene might collapse, you might look strange.
                        But it also creates more room for something genuinely unexpected to happen.
                    </p>
                    <br />
                    <p>
                        That lesson translates directly. In academic presentations, in startup pitches, in
                        engineering design reviews — the safe, expected framing almost never gets remembered.
                        The specific, slightly unexpected angle is what makes people pay attention.
                        Research on creative risk-taking in professional contexts confirms this: people who
                        practice tolerating ambiguous outcomes — what psychologists call
                        &quot;uncertainty tolerance&quot; — demonstrate greater innovation and resilience in
                        high-stakes environments
                        <sup className="text-[#f0a04b] font-semibold ml-0.5">
                            <a href="#cite-3">3</a>
                        </sup>.
                        Improv is a low-stakes lab for building exactly that tolerance.
                        Every weird choice I make in class is one more data point that
                        says: you tried something uncertain, and the world didn&apos;t end.
                    </p>
                    <br />
                    <figure className="mb-4">
                        <Image
                            src="/images/improv/present.jpg"
                            alt="Offering something without knowing how it will be received — in improv and in life"
                            width={300}
                            height={200}
                            className="rounded-2xl w-full max-w-xs object-cover"
                        />
                        <figcaption className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                            The weird choice is a gift you offer before you know if it will land.
                            That&apos;s the risk. That&apos;s also the point.
                        </figcaption>
                    </figure>
                </div>

            </div>

            <hr className="border-gray-300 dark:border-gray-600 my-4" />

            <div>
                <h2 className="text-2xl text-[#f0a04b] mb-4">
                    Citations
                </h2>
                <ol className="list-decimal list-inside flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <li id="cite-1">
                        Besser, M., Roberts, I., &amp; Walsh, M. (2013).{" "}
                        <em>The Upright Citizens Brigade Comedy Improvisation Manual.</em>{" "}
                        Comedy Council of Nicea LLC. (UCB Manual, p. 52)
                    </li>
                    <li id="cite-2">
                        Cañas, J. J., Quesada, J. F., Antolí, A., &amp; Fajardo, I. (2003). &quot;Cognitive flexibility
                        and adaptability to environmental changes in dynamic complex problem-solving tasks.&quot;{" "}
                        <em>Ergonomics, 46</em>(5), 482–501.{" "}
                        <a
                            href="https://www.tandfonline.com/doi/abs/10.1080/0014013031000061306"
                            className="text-[#f0a04b] underline hover:text-[#d4883e]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Taylor &amp; Francis Online
                        </a>
                    </li>
                    <li id="cite-3">
                        Kashdan, T. B., &amp; Rottenberg, J. (2010). &quot;Psychological flexibility as a
                        fundamental aspect of health.&quot;{" "}
                        <em>Clinical Psychology Review, 30</em>(7), 865–878.{" "}
                        <a
                            href="https://www.sciencedirect.com/science/article/abs/pii/S0272735810000978"
                            className="text-[#f0a04b] underline hover:text-[#d4883e]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ScienceDirect
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    );
}
