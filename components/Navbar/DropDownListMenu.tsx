// import { AlignLeft, CircleUserRound } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "../button";
// import Usericon from "./Usericon";
// import { Label } from "@radix-ui/react-dropdown-menu";
// import Link from "next/link";
// import { links } from "@/utils/links";

// import SingOutLinks from "./SingOutLinks";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignOutButton,
//   SignUpButton,
// } from "@clerk/nextjs";

// const DropDownListMenu = () => {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline">
//           <AlignLeft />
//           <Usericon />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent>
//         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         {/* ล๋็อกเอ้าแล้ว */}
//         <SignedOut>
//           <DropdownMenuItem>
//             <SignInButton mode='modal'>
//               <Button>Login</Button>
//             </SignInButton>
//           </DropdownMenuItem>

//           <DropdownMenuItem>
//             <SignUpButton mode='modal'>
//               <Button>Register</Button>
//             </SignUpButton>
//           </DropdownMenuItem>
//         </SignedOut>
//         {/* ล็อกอินแล้ว */}
//         <SignedIn>
//           {links.map((item, index) => {
//             return (
//               <DropdownMenuItem key={index}>
//                 <Link href={item.href}>{item.Label}</Link>
//               </DropdownMenuItem>
//             );
//           })}
//     <DropdownMenuItem>
//           <SingOutLinks />

//     </DropdownMenuItem>

//         </SignedIn>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };
// export default DropDownListMenu;



import { AlignLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Usericon from "./Usericon";
import Link from "next/link";
import { links } from "@/utils/links";
import SingOutLinks from "./SingOutLinks";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";

const DropDownListMenu = () => {
  return (
    <DropdownMenu>
      {/* Trigger Button */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <AlignLeft />
          <Usericon />
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* When Signed Out */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <Button variant="link">Login</Button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <Button variant="link">Register</Button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* When Signed In */}
        <SignedIn>
          {links.map((item, index) => (
            <DropdownMenuItem key={index}>
              <Link href={item.href}>{item.Label}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem>
            <SingOutLinks />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownListMenu;
