import Card from "./components/Card";
import Center from "./components/Center";
import LandingCard from "./components/LandingCard";
import Page from "./components/Page";

export default function Home() {
  return (
    <Page>
      <Card>
        <Center className="flex-col mx-8 gap-4 lg:max-w-6xl">
          <h1 className="mb-0">Hi, I&apos;m Nick!</h1>

          <img src="/AvatarNick.svg" alt="" className="h-80 rounded-xl" />

          <p className="text-lg text-center">
            Full Stack Web Application Developer with a background in
            customer-facing project implementation - specializing in UI
            functionality and data manipulation workflows. Experience in people
            management, project management, technical writing, audio/video
            production and editing, and more.
          </p>
        </Center>
      </Card>

      {/* Testing for background slideshow implementation 
      <div className="flex justify-center m-10 bg-gray-800">
        <img className="absolute w-80" src="/backgrounds/2x2_1a.jpg" alt="" />
        <img className="absolute w-80 opacity-100" src="/backgrounds/2x2_2a.jpg" alt="" />
      </div>
      */}

      <Center id="all_landing_cards" className="flex flex-col w-full m-8">
        <Center className="flex-col justify-evenly lg:flex-row">
          <LandingCard
            url="https://github.com/NickPrather11/Next_TS_Portfolio"
            title="Site Repo"
            description="See the code repository for this site"
            external={true}
          />

          <LandingCard
            url="https://github.com/users/NickPrather11/projects/1"
            title="Planned Updates"
            description="GitHub project for tracking updates, bug fixes, etc."
            external={true}
          />
        </Center>

        <Center className="flex-col justify-evenly lg:flex-row">
          <LandingCard
            url="./projects"
            title="Projects"
            description="Check out my past development projects, audio recordings, and more..."
            external={false}
          />
          <LandingCard
            url="./about"
            title="About"
            description="Learn more about this site and my work experience..."
            external={false}
          />

          {/*
          <LandingCard
            url="./contact"
            title="Contact"
            description="Curious about my work? Interested in collaborating? Send me a message!"
            external={false}
          />
          */}
        </Center>
      </Center>
    </Page>
  );
}
