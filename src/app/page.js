import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Details from "./components/ChartDetails";

export default function Home() {
  return (
    <main className="relative">
      <Logo />
      <div className="mt-40">
        <SearchBar />
      </div>
    </main>
  );
}
