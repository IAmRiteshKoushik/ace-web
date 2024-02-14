import Footer from "./components/footer";
import Navbar from "./components/navbar";

//import { withPageAuthRequired }  from "@authO/nextjs-authO"; // Import useClient from Next.js

function Home() {
  // Mark the parent component as a client component
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" >
      <Navbar/>
      <Footer/>
    </main>
  );
}
export default Home;
