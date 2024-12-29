// "use client"
// import { useToast } from "@/hooks/use-toast"
// import { actionFunction } from "@/utils/types"
// import { useActionState } from "react"
// import { useEffect } from "react"

// const initilState = {
//     message: "",
// }




// const FormContainer = ({ action , children }:
//      {action:actionFunction, children: React.ReactNode }) => {
//     const { toast } = useToast()
//     const [state, formAction] = useActionState(action, initilState)
//     console.log(state);
//     useEffect(() => {
//         if (state.message) {
//             toast({ title: state.message })
//         }
//     }, [state])


//     return (
//         <form action={formAction}>
//             {children}
//         </form>
//     )
// }
// export default FormContainer



"use client";
import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { actionFunction } from "@/utils/types";
const initialState = {
  message: "",
};

const FormContainer = ({ action, children }:
   {action:actionFunction, children: React.ReactNode }) => {
  const { toast } = useToast();
  const [state, formAction] = useActionState(action, initialState);
  // console.log("state ja", state);

  useEffect(() => {
    // code body
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;