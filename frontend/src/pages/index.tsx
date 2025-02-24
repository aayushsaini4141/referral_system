

 
import { useEffect } from "react";
import { useRouter } from "next/router";
 
export default function Home() {
  const router = useRouter();
 
  useEffect(() => {
    router.push("/landingpage"); // Redirect users to the form page
  }, [router]);
 
  return <p>Redirecting...</p>;
}
 
 