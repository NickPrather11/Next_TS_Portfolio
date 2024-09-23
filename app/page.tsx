import Center from "./components/Center";
import LandingCard from "./components/LandingCard";
import Page from "./components/Page";

export default function Home() {
  return (
    <Page>
      <Center className="card flex-col max-w-6xl gap-4">
        <h1 className="m-2">Hi, I&apos;m Nick!</h1>

        <img src="/AvatarNick.svg" alt="" className="h-80 rounded-xl" />

        <p className="text-lg text-center">
          Full Stack Web Application Developer with a background in
          customer-facing project implementation - specializing in UI
          functionality and data manipulation workflows. Experience in people
          managment, project managemnet, technical writing, audio/video
          production and editing, and more.
        </p>
      </Center>

      {/* Testing for background slideshow implementation 
      <div className="flex justify-center m-10 bg-gray-800">
        <img className="absolute w-80" src="/backgrounds/2x2_1a.jpg" alt="" />
        <img className="absolute w-80 opacity-100" src="/backgrounds/2x2_2a.jpg" alt="" />
      </div>
      */}

      <div id="all_landing_cards" className="flex flex-col w-full m-8 gap-8">
        <div id="row_1" className="flex flex-row justify-evenly">
          <Center>
            <LandingCard
              url="https://github.com/NickPrather11/Next_TS_Portfolio"
              title="Site Repo"
              description="See the code repository for this site"
              external={true}
            />
          </Center>

          <Center>
            <LandingCard
              url="https://github.com/users/NickPrather11/projects/1"
              title="Planned Updates"
              description="GitHub project for tracking updates, bug fixes, etc."
              external={true}
            />
          </Center>
        </div>

        <div id="row_2" className="flex flex-row justify-evenly">
          <LandingCard
            url="./projectsPage"
            title="Projects"
            description="Check out my past development projects, audio recordings, and more..."
            external={false}
          />

          <LandingCard
            url="./aboutPage"
            title="About"
            description="Learn more about this site and my work experience..."
            external={false}
          />

          <LandingCard
            url="./contactPage"
            title="Contact"
            description="Curious about my work? Interested in collaborating? Send me a message!"
            external={false}
          />
        </div>
      </div>
    </Page>
  );
}
