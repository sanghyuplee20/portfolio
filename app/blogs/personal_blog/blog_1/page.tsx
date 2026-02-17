import { JetBrains_Mono } from "next/font/google";
import BackButton from "../../BackButton";
import Image from "next/image";

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
                    First Impression and Integration
                </h1>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
                February 2025
            </p>

            <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        Initial Impressions
                    </h2>
                    <p>
                        Prior to taking this class, I was shy about doing improv. I didn&apos;t even know what 
                        it really was, and I had this image of people simply acting out a random scene that 
                        focused on getting out of that comfort zone. And to be quite honest, I was not 
                        ready to really be out of that comfort zone. I was scared of being on stage, 
                        where I remembered making mistakes when I played violin in middle school.
                    </p>
                    <br/>
                    <p>
                        I remember the first day of class, I was asked to act out a scene of me being
                        the catcher in a baseball scene. It was awkward, and I was kind of scared.
                        What if I made a mistake and made the scene awkward? But, to my surprise, the
                        people who acted it out with me, Max and Eric, did an awesome job of making
                        the scene fun and engaging. It wasn&apos;t really taking me out of the comfort zone,
                        but it was just being in that zone that made me feel comfortable. That was
                        different from just trying to be funny or from what I was expecting; it was
                        just being in that moment and adapting to that scene before my eyes.
                    </p>
                    <br />
                    <figure className="mb-4">
                        <Image
                            src="/images/improv/panik.jpg"
                            alt="Panik Kalm Panik meme about walking into improv class"
                            width={300}
                            height={300}
                            className="rounded-2xl w-full max-w-xs object-cover"
                        />
                        <figcaption className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                            My exact thought process walking into improv class.
                        </figcaption>
                    </figure>
                </div>

                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        Excitement Factor
                    </h2>
                    <p>
                        I think I get mesmerized by the sudden scene improv. While talking 
                        it out is fun and all, it sometimes gives off a more rehearsed 
                        vibe as it requires more thinking and planning. I really enjoyed 
                        the sudden movement scene improv, as it was more spontaneous and 
                        caused people to think less about the story and instead fully focus 
                        on the scene and moment. I particularly remember the scene where 
                        we had to act out apples, a worm on a tree, etc., suddenly and choose 
                        a single figure to build around. It was really fun to see how everyone 
                        interpreted the scene differently. This especially requires people to use 
                        &quot;object in hand,&quot; where people have to use their body as an object and 
                        utilize their hands to act out the scene.
                    </p>
                    <br/>
                    <p>
                        However, I do think that I am kind of missing out on actually doing speaking 
                        improv. Sometimes, I feel like I need to make everyone laugh and be funny, 
                        which is not the point of improv. I think this problem arises because I am 
                        not fully comfortable with speaking improv yet, which I hope to get more 
                        comfortable with as the class goes on.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        Honest Nervousness
                    </h2>
                    <p>
                        I think the main fear is the fear of being on stage and causing an awkward
                        silence. Although I think that is a common fear for many people, I think it
                        is especially true for me due to my stage fright. I remember when I played
                        violin in middle school, I had to perform at Carnegie Hall, which caused a
                        lot of pressure. I ended up making it through with some mistakes, which
                        caused an inevitable stage fright for me.
                    </p>
                    <br />
                    <p>
                        That experience always comes back to me whenever I have to do something
                        important, which I really want to explore and get through. Attempting to
                        become the president of a club, giving presentations, and even just talking
                        to new people have helped, but I think improv is a great way for me to get
                        through this fear.
                    </p>
                    <br />
                    <p>
                        That is partly why I think being funny is a way to get through this fear.
                        However, this pressure for me to be funny has also taken a toll on me, as
                        I have been more focused on trying to be funny than just being in the
                        moment and enjoying the scene.
                    </p>
                    <br />
                    <p>
                        Interestingly, a study by Felsman et al. found that students who participated
                        in a 10-week improv program showed significant reductions in social anxiety,
                        with the most engaged students benefiting the most
                        <sup className="text-[#f0a04b] font-semibold ml-0.5">
                            <a href="#cite-1">1</a>
                        </sup>.
                        This gives me hope that the more I throw myself into these exercises,
                        the more that Carnegie Hall stage fright will loosen its grip.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl text-[#f0a04b] mb-2">
                        Rule Integration
                    </h2>
                    <p>
                        One improv rule that I really take into account is &apos;Yes, and...&quot;{" "}
                        <span className="text-[#f0a04b] text-sm italic">(UCB Manual, p. 12)</span>. 
                        In the end, improv is all about accepting the other people&apos;s ideas and 
                        building on them. There are no scripts, no rehearsals, no second thoughts. 
                        It really comes from nature when people are just talking and building on an 
                        idea together. This is like playing soccer. You have to pass and accept the 
                        ball from your teammates, given the situation, you have to make the best decision
                        to pass, dribble, or shoot. In the end, it ends with a goal, a cooperation between
                        all of your teammates.
                        In his TED talk, David Prejeant describes how &quot;Yes, and&quot; transformed
                        him beyond the stage, imagining how much more we would accomplish if we
                        all learned to build on each other&apos;s ideas rather than shut them down
                        <sup className="text-[#f0a04b] font-semibold ml-0.5">
                            <a href="#cite-2">2</a>
                        </sup>.
                        This is exactly what I mean by the soccer comparison: you can&apos;t score
                        if you refuse the pass.
                    </p>
                    <br />
                    <figure className="mb-4">
                        <Image
                            src="/images/improv/soccer.jpg"
                            alt="soccer"
                            width={300}
                            height={200}
                            className="rounded-2xl w-full max-w-xs object-cover"
                        />
                        <figcaption className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                            Just like in soccer, improv is about passing and building together toward a shared goal.
                        </figcaption>
                    </figure>

                    <br />
                    <p>
                        The second rule that I take into account is &quot;Give and Take&quot;{" "}
                        <span className="text-[#f0a04b] text-sm italic">(UCB Manual, p. 37)</span>. 
                        In the end, improv is all about cooperation and teamwork. In Korean culture,
                        there is a concept of giving back and forth, where people are expected to give
                        and take regarding gifts. This is something that I have been used to since I was a child.
                        And this really takes a key role during improv, as it really emphasizes the importance of cooperation.
                    </p>
                    <br />
                    <figure className="mb-4">
                        <Image
                            src="/images/improv/present.jpg"
                            alt="present"
                            width={300}
                            height={200}
                            className="rounded-2xl w-full max-w-xs object-cover"
                        />
                        <figcaption className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                            The Korean tradition of giving and receiving — a natural parallel to improv&apos;s &quot;Give and Take&quot; rule.
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
                            Felsman, P., Gunawardena, S., &amp; Seifert, C. M. (2020). &quot;The use of improvisational
                            theater training to reduce social anxiety in adolescents.&quot;{" "}
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0197455618301928"
                                className="text-[#f0a04b] underline hover:text-[#d4883e]"
                                target="_blank" rel="noopener noreferrer">
                                ScienceDirect
                            </a>
                        </li>
                        <li id="cite-2">
                            Prejeant, D. &quot;How improv made me a &apos;yes and&apos; person.&quot;{" "}
                            <a href="https://www.ted.com/talks/david_prejeant_how_improv_made_me_a_yes_and_person"
                                className="text-[#f0a04b] underline hover:text-[#d4883e]"
                                target="_blank" rel="noopener noreferrer">
                                TED Talk
                            </a>
                        </li>
                    </ol>
                </div>
        </div>
    );
}
