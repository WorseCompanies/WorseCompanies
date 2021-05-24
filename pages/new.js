import { useEffect } from "react";

export default function New() {
  const defaultHandler = async () => {
    const params = new URLSearchParams(window.location.search);

    await fetch("/api/auth/callback", {
      body: JSON.stringify({
        code: params.get("code"),
      }),
      method: "POST",
    });
  };

  useEffect(() => {
    defaultHandler();
  }, []);

  return <h1>Hello</h1>;
}
