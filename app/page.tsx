import Link from "next/link";
import BuildWithForgeZone from "@/components/BuildWithForgeZone";

const Home = () => {
  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>sup, insert your headline here</h1>
          </div>
          <div className="header-subtitle">
            <h2>insert your subtitle here</h2>
          </div>

          <div className="button-container">
            <Link href="/rewind">
              <button className="button">Login with Spotify</button>
            </Link>
          </div>
        </div>
      </div>
      <BuildWithForgeZone />
    </div>
  );
};

export default Home;
