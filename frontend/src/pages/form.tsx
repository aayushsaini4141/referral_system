"use client";
import { useRouter } from "next/navigation";
import UserForm from "../components/form/UserForm";

const FormPage = () => {
  const router = useRouter();

  return <UserForm onNext={() => router.push("/dashboard")} />;
};

export default FormPage;
