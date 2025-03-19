export function useAuth() {
  return localStorage.getItem("auth") === "true"; 
}