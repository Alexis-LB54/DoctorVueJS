
import type { User } from "../types/userType";

export default async function fetchLogin(user: User) {
  let response = await fetch("https://apidoctor.quidam.re/api/login_check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((r) => r.json())
    .catch();
    console.log("utilisateur", user, "token", response);
    
}

export async function fetchConsults(token: string) {
  return await fetch("https://apidoctor.quidam.re/api/consultations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((promise) => promise.json())
    .catch((e) => {
      console.warn("error", e);
    });
}