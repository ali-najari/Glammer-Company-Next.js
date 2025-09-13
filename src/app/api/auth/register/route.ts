import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const filePath = path.join(process.cwd(), "db", "users.json");

export async function POST(req: Request) {
  const { username, email, password } = await req.json();
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const existUser = data.users.find((u: any) => u.email === email);
  if (existUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), username, email, password: hashedPassword };

  data.users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({ message: "User created", user: newUser });
}
