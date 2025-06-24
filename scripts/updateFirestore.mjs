import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fetch from "node-fetch";
import fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync("serviceAccount.json", "utf8"));

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const res = await fetch("https://api.github.com/users/SURIYA-po/repos");
const repos = await res.json();

for (const repo of repos) {
  await db.collection("My_details").doc(repo.id.toString()).set({
    name: repo.name,
    description: repo.description,
    githubUrl: repo.html_url,
    homepage: repo.homepage || null,
    updatedAt: repo.updated_at
  });
}

console.log("✅ Firestore updated with GitHub repos.");
