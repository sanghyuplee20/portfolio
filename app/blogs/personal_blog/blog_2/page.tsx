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
                        In my first blog, I talked about the Carnegie Hall stage fright that never quite left me,
                        about how I kept pressuring myself to be funny instead of just being present. Since then,
                        I&apos;ve been slowly learning to let go of that pressure. This blog is about what gets
                        unlocked when you do.
                    </p>
                </div>

                {/* Prompt 1 */}
                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        Adaptability: The Boxing Match I Didn&apos;t Script
                    </h2>
                    <p>
                        There was an exercise where we had to build a scene together in real time —
                        accepting whatever happened, and applauding when someone made a mistake instead of
                        treating it like a failure. My expectation going in was straightforward: I was going
                        to be a good scene partner. I was going to use &quot;Yes, and.&quot; I was going to
                        listen and build. I had basically pre-loaded the algorithm.
                    </p>
                    <br />
                    <p>
                        Then the scene started, and everyone just stood there. Silence. Nobody moved.
                        As someone who hates dead air even more than awkward air, I made the first move:
                        I pointed at Ben and Paul and declared them opponents in a boxing match.
                        That part felt fine — I was still in control, I had set the stage.
                    </p>
                    <br />
                    <p>
                        What I hadn&apos;t planned for was what came next. Once Ben started throwing punches at Paul,
                        the scene locked me into the role of live commentator. Every move they made,
                        I had to narrate out loud, in real time, with energy — like a ringside announcer
                        who had no idea what either fighter was about to do.
                    </p>
                    <br />
                    <p>
                        And then they started making moves I genuinely did not expect. A dramatic stumble.
                        A slow-motion dodge. A completely unreadable pause. I froze.
                        Not for long — maybe a second — but I felt it. That familiar loading screen.
                        My brain was waiting for input that matched its model, and the input wasn&apos;t coming.
                    </p>
                    <br />
                    <p>
                        What I learned about myself in that moment was specific: my adaptability breaks down
                        not when things get hard, but when I&apos;m the one who set up the premise.
                        I had created the scene, so I felt responsible for controlling it — and the second
                        it slipped out of my control, I hesitated. The irony is that I was the one who
                        made everyone else be unpredictable. I just didn&apos;t expect to be surprised
                        by my own setup.
                    </p>
                    <br />
                    <p>
                        Under pressure, my creativity doesn&apos;t disappear — it gets cautious. I start
                        reaching for the &quot;correct&quot; call instead of just making one. That freeze
                        wasn&apos;t a lack of ideas; it was me auditing the ideas too fast.
                        The lesson I took away: commit to the call. The wrong commentary said confidently
                        is better than silence. The scene doesn&apos;t need accuracy — it needs momentum.
                    </p>
                    <br />
                    <figure className="mb-4">
                        <Image
                            src="/images/improv/boxing.jpg"
                            alt="Boxing match — the scene that taught me to commentate without a script"
                            width={300}
                            height={200}
                            className="rounded-2xl w-full max-w-xs object-cover"
                        />
                        <figcaption className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                            Ben vs. Paul — the fight I started but couldn&apos;t control. Every unexpected
                            move was a live test of whether I could adapt in real time.
                        </figcaption>
                    </figure>
                </div>

                {/* Prompt 2 */}
                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        Adaptability in My Career: Accepting the AI Offer
                    </h2>
                    <p>
                        I started college in 2020 as a freshman. There was no AI to speak of, only COVID.
                        Debugging meant going to office hours, spending hours tracing through logic by hand,
                        figuring out one slow line at a time whether I was even approaching the problem right.
                        That was the landscape I built my understanding of software on.
                    </p>
                    <br />
                    <p>
                        Then I left for mandatory military service, eighteen months between 2021 and 2023.
                        I was largely cut off from the technology world while I was serving. When I came back,
                        ChatGPT was everywhere. Large language models could generate code, explain errors,
                        draft entire functions in seconds. My first reaction was honest disbelief: there is
                        no way a program can think through a problem better than a person who has studied
                        this for years. I resisted it. I felt like accepting it would mean that what I had
                        built, the hours at office hours, the slow hard-won understanding, was somehow worth less.
                    </p>
                    <br />
                    <p>
                        That resistance is exactly what improv teaches you to let go of.
                        In a scene, when your partner introduces something unexpected, the instinct to
                        protect your original idea is natural. But it kills the scene. The move is to say{" "}
                        <span className="text-[#f0a04b] font-semibold">&quot;yes, and&quot;</span> — accept
                        the new reality, and build from it. When I finally stopped defending what I already
                        knew and started treating AI as an offer from the field, my whole approach shifted.
                        I stopped asking &quot;does this replace me?&quot; and started asking &quot;what
                        does this make possible?&quot;
                    </p>
                    <br />
                    <p>
                        The professional application is direct. As a CS student entering a field where the
                        tools will keep changing, presence means staying focused on what the current moment
                        actually requires instead of what I learned to do before. Accepting offers means
                        treating every new technology, every new teammate with a different approach, every
                        framework I have never touched, as something to build on rather than resist.
                        The personal computers created an entire software industry. AI is doing the same thing.
                        The engineers who will matter most are the ones who say yes to the scene as it is,
                        not as they expected it to be.
                    </p>
                    <br />
                    <p>
                        Research on workplace adaptability supports this directly. A study published in
                        <em> Ergonomics</em> found that cognitive flexibility, the ability to shift mental
                        frameworks quickly in response to new information, is one of the strongest predictors
                        of performance in high-uncertainty environments
                        <sup className="text-[#f0a04b] font-semibold ml-0.5">
                            <a href="#cite-2">2</a>
                        </sup>.
                        Every scene in class where I accept an unexpected offer instead of freezing is a rep
                        for exactly that muscle.
                    </p>
                    <br />
                    <figure className="mb-4">
                        <Image
                            src="/images/improv/gptmeme.jpeg"
                            alt="Meme about ChatGPT replacing programmers"
                            width={300}
                            height={200}
                            className="rounded-2xl w-full max-w-xs object-cover"
                        />
                        <figcaption className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                            My exact reaction coming back from military service to find this everywhere.
                            Eventually I had to accept the offer.
                        </figcaption>
                    </figure>
                </div>

                {/* Prompt 3 */}
                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        A Risk I Actually Took: Becoming President of KSA
                    </h2>
                    <p>
                        The most significant risk I took in my academic life had nothing to do with code.
                        I was nominated to become the president of the Korean Students Association at
                        Johns Hopkins University, and I almost said no.
                    </p>
                    <br />
                    <p>
                        What made it risky was exactly this: every leadership role I had taken before was
                        technical. I led projects. I wrote systems. I was the person who showed up with a
                        plan and executed it quietly. Running an organization meant something completely
                        different. It meant being the face of a community, making decisions that affected
                        people, not code, and doing all of it in front of everyone. My biggest fear was
                        not failure in private. It was letting down a community that trusted me publicly.
                        I was worried that I would stand in front of a room and have nothing worth saying.
                    </p>
                    <br />
                    <p>
                        I took it anyway. I still remember the first executive board meeting I ran.
                        My voice shook when I opened. I had prepared talking points, but the moment I
                        started speaking, I could feel the weight of people actually listening, waiting
                        to see what kind of leader I was going to be. That is not a feeling you can
                        rehearse for. You just have to start talking and trust that something real will come.
                    </p>
                    <br />
                    <p>
                        Something did. I started speaking about what I genuinely cared about for the
                        association, the things I wanted to build, the problems I wanted to fix. Not
                        from a script, just from what I actually believed. People responded. The
                        conversations that followed were honest and direct. I made decisions I was not
                        always certain about, resolved conflicts I had never been trained for, and learned
                        to communicate in a way that no CS course had prepared me for.
                    </p>
                    <br />
                    <p>
                        Looking back, it is one of the best choices I made throughout my time at Hopkins.
                        What I learned was specific: bold decisions, even imperfect ones, create momentum.
                        Hesitation creates silence. And in a leadership role, silence is the thing that
                        actually costs you the trust of the people you are supposed to lead.
                    </p>
                    <br />
                    <p>
                        The connection to improv is clear. According to the UCB Manual,
                        &quot;commitment is good acting&quot; and a long form improviser is expected
                        to invest in the reality of the scene so fully that the audience no longer sees
                        an improviser, but a believable character{" "}
                        <span className="text-[#f0a04b] text-sm italic">(UCB Manual, p. 48)</span>.
                        That first executive board meeting demanded exactly that. The room was not
                        looking for a perfect president. They were looking for someone who believed
                        in what they were saying enough to commit to it. The moment I stopped
                        performing confidence and started actually investing in what I cared about,
                        the dynamic in the room shifted. That is not a leadership trick. That is
                        what commitment looks like when the stakes are real. Every time I now step
                        into a scene and fully inhabit a choice without hedging, I am practicing the
                        same thing I needed most in that meeting room.
                    </p>
                    <br />
                    <figure className="mb-4">
                        <Image
                            src="/images/improv/ksa_group_photo.png"
                            alt="KSA group photo at Johns Hopkins University"
                            width={400}
                            height={300}
                            className="rounded-2xl w-full max-w-sm object-cover"
                        />
                        <figcaption className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                            The Korean Students Association at Johns Hopkins. Leading this community
                            was the boldest choice I made in college.
                        </figcaption>
                    </figure>
                </div>

                {/* Prompt 4 */}
                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        A Risk in Class: The Game I Invented
                    </h2>
                    <p>
                        At some point in class, we had an opportunity to create our own improv game.
                        I came up with one: a prosecutor and two or three witnesses. The witnesses
                        privately decide on a case, something that happened, a crime, an incident,
                        an event. The prosecutor knows nothing. Their only tool is questions. Through
                        interrogating the witnesses one by one, they have to piece together what
                        the case actually is.
                    </p>
                    <br />
                    <p>
                        Designing the game felt easy. Showing it to the class did not.
                        The risk was not in the rules. The risk was in wanting everyone to actually
                        enjoy it. I care about that more than I usually admit. I am the kind of person
                        who will spend twice as long on something if I think it will land better for
                        the people on the receiving end. So when I stood up to demo the game and
                        watched the room during those first few moments, I was reading every face.
                        A pause too long, an uncertain look, a slow response from a volunteer, and
                        my brain immediately went to: this is not working.
                    </p>
                    <br />
                    <p>
                        That internal spiral is the exact thing improv is designed to break. Presence
                        means staying in the room, not living inside your own evaluation of how the
                        room is responding. The game was still unfolding. The witnesses were still
                        building the case. The prosecutor was still asking questions. But I had
                        already started second-guessing, already started mentally apologizing for
                        something that had not failed yet.
                    </p>
                    <br />
                    <p>
                        It did not fail. When the round finished and people started talking, it
                        turned out others genuinely enjoyed it. The uncertainty I felt during the demo
                        was entirely mine. The room was fine. I was the one who had not accepted the
                        offer of the moment.
                    </p>
                    <br />
                    <p>
                        That experience translates directly to any situation where the outcome is
                        uncertain and other people are involved. Presenting a project proposal,
                        pitching a new feature to a team, leading a meeting where you are not sure
                        the agenda is landing. The instinct to read every face and catastrophize is
                        the same instinct I had during that demo. Research on psychological flexibility
                        shows that people who tolerate uncertain outcomes without collapsing into
                        avoidance perform better and recover faster in high-stakes professional situations
                        <sup className="text-[#f0a04b] font-semibold ml-0.5">
                            <a href="#cite-3">3</a>
                        </sup>.
                        What improv gives you is practice staying present while the outcome is still
                        unknown. That is exactly what the classroom risk of putting my game in front of
                        everyone taught me. You cannot know if something works until it finishes. Stay
                        in the scene.
                    </p>
                    <br />
                    <figure className="mb-4">
                        <Image
                            src="/images/improv/phoenixwright.webp"
                            alt="Phoenix Wright: Ace Attorney, the inspiration for the prosecutor and witness game"
                            width={300}
                            height={200}
                            className="rounded-2xl w-full max-w-xs object-cover"
                        />
                        <figcaption className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                            The game was inspired by Phoenix Wright: Ace Attorney. A prosecutor,
                            witnesses, and a mystery to unravel through questions alone.
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
                        Comedy Council of Nicea LLC. (UCB Manual, p. 48)
                    </li>
                    <li id="cite-2">
                        Cañas, J. J., Quesada, J. F., Antolí, A., &amp; Fajardo, I. (2003). &quot;Cognitive flexibility
                        and adaptability to environmental changes in dynamic complex problem-solving tasks.&quot;{" "}
                        <em>Ergonomics, 46</em>(5), 482–501.{" "}
                        <a
                            href="https://www.researchgate.net/publication/10760618_Cognitive_flexibility_and_adaptability_to_environmental_changes_in_dynamic_complex_problem-solving_tasks"
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
                            href="https://www.sciencedirect.com/science/article/abs/pii/S0272735810000413"
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
