import "./About.css"

function About () {
    return (<><h1 className={"promotitle"}>About the Movies and Games Site</h1>
        <h2 className={"promotitle"}> Created by: David Tentser</h2>
            <h2 className={"promotitle"}> Date of creation: May 9th 2026</h2>
        <h2 className={"promotitle"}>Contact: To be added </h2>
         <div> If you have any wishes or improvement suggestions, please write an email via the formular</div>
            <p> © 2026 - {new Date().getFullYear()} </p>
        </>
    );
}
// Why I did the page and what is it for?
export default About;