import "./About.css"
import MediaGridBanner from "./MediaGridBanner.tsx";

function Home() {
    return (
        <>
            <h1 className={"promotitle"}>Welcome to the Movies and Games Site!</h1>
              < MediaGridBanner></MediaGridBanner>

            <h2 className={"promotitle"} >What does this site do?</h2>
            <div className={"promotext"}>
                A single search across movies, series, and games — see where each
                one is available to stream or play, all in one place.
            </div>

            <h2 className={"promotitle"}>Why does it exist?</h2>
            <div className={"promotext"}>
                Entertainment has gone digital, but it's scattered across dozens of
                platforms — Steam, Ubisoft Connect, PlayStation Store, Netflix,
                Disney+, and more. Finding an answer to a simple question —{" "}
                <b>"Where can I watch or play this?"</b> — means checking each one
                separately. This site brings that search into one place.
            </div>

            <h2 className={"promotitle"}>What makes it different?</h2>
            <div className={"promotext"}>
                One search bar, three media types, no juggling platforms. Faster
                discovery, less tab-switching.
            </div>

            <p> © 2026 - {new Date().getFullYear()} </p>
        </>
    );
}
export default Home;