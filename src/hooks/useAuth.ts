"use client";

import { UserData } from "@/interfaces/interfaces";
import { login } from "@/services/login";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export function useAuth() {
  const router = useRouter();

  const [user, setUser] = useState<UserData>({
    email: "",
    password: "",
  });
  const [authStatus, setAuthStatus] = useState({
    loading: false,
    error: null as string | null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAuthStatus({ loading: true, error: null });

    try {
      await login(user);
      router.push("/dashboard");
    } catch (error) {
      setAuthStatus({ loading: false, error: (error as Error).message });
    }
  };

  return {
    user,
    authStatus,
    handleInputChange,
    handleSubmit,
  }
}
