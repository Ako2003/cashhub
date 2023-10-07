import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
    return(
        <div className="center h-screen">
          <SignUp />
        </div>
      );
}