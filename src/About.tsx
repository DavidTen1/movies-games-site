function About () {
   const currentYear = new Date().getFullYear();

    return (<><h1>About the Movies and Games Site</h1>
        <h2> Created by: David Tentser</h2>
            <h2> Date of creation: May 9th 2026</h2>
        <h2>Contact: To be added </h2>
            <p> © 2026 - {currentYear} </p>

        </>
    );
}

export default About;