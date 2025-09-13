import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("./data/users.json");

async function ensureDB() {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, "[]", "utf8");
  }
}

export async function readUsers() {
  await ensureDB();
  const txt = await fs.readFile(filePath, "utf8");
  try {
    return JSON.parse(txt);
  } catch {
    return [];
  }
}

export async function writeUsers(users: any[]) {
  await ensureDB();
  await fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf8");
}
