import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="center h-screen">
      <SignIn/>
    </div>
  );
}