"use client";
import { useRouter } from "next/navigation";
import LandingPage from "../components/landingpage/LandingPage";

const Landingpage = () => {
  const router = useRouter();

  return <LandingPage onNext={() => router.push("/landingpage")} />;
};

export default Landingpage;
