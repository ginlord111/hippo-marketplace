import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const LogoutUser = () => {
  const router = useRouter();
  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error();
      }
      toast.success("Sign out succesfully");
      router.push("/sign-in");
      router.refresh();
    } catch (err) {
      console.log(err);
      return toast.error("Log out failed. Try again");
    }
  };
  return signOut;
};
