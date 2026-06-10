import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* <ArrowRightIcon size={32} /> 
      <TrendUpIcon size={32} />
      <MagnifyingGlassIcon size={32} />
      <FileTxtIcon size={32} />
      <SparkleIcon size={32} weight="duotone" /> */}

      {/* navigation */}
      <Navbar />
    </div>
  );
}
