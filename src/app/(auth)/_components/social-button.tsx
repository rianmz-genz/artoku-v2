import { signIn } from "@/auth";
import { IoLogoGoogle } from "react-icons/io5";

export const GoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
      className="flex items-center justify-center gap-1 py-2.5 px-5 rounded-lg uppercase text-white font-medium text-sm bg-yellow-500 hover:bg-yellow-600 w-full"
    >
      <IoLogoGoogle />
      <button type="submit">Sign In with Google</button>
    </form>
  );
};
