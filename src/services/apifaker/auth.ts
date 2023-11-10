// api.ts

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

export function register(
  name: string,
  email: string,
  password: string
): { success: boolean; message?: string } {
  if (users.some((user) => user.email === email)) {
    return { success: false, message: "Email already registered" };
  }

  const newUser: User = {
    id: users.length + 1,
    name,
    email,
    password,
  };
  users.push(newUser);
  updateLocalStorage();

  return { success: true };
}
export function login(
  email: string,
  password: string
): { success: boolean; message?: string; user?: User } {
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return { success: false, message: "Invalid email or password" };
  }

  return { success: true, user };
}

function updateLocalStorage(): void {
  localStorage.setItem("users", JSON.stringify(users));
}
