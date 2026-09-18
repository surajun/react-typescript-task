import Card from "../components/cards/Card";

function Home() {
  const handleButtonClick = () => {
    alert("Thanks for clicking the button!");
  };

  return (
    <main className="main-content">
      <h2>Home Page</h2>

      <p>
        Welcome to our React application built with
        TypeScript and Vite.
      </p>

      <Card
        title="Learn React with TypeScript"
        description="This card demonstrates reusable components and typed props."
        buttonText="Learn More"
        onButtonClick={handleButtonClick}
      />
    </main>
  );
}

export default Home;