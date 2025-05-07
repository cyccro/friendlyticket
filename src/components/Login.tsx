"use client";
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogFooter } from "./ui/dialog";
import { ReactNode, useState } from "react";
import { FtcksInput } from "./Input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export interface LoginDialogProps {
  trigger: ReactNode,
  registering: boolean,
  confirm: ReactNode
}

export default function LoginDialog(props: LoginDialogProps) {
  const [registering, setRegistering] = useState(props.registering);
  return <Dialog>

    <DialogTrigger asChild>
      {props.trigger}
    </DialogTrigger>

    <DialogContent className="flex flex-col justify-center bg-black/30 shadow-md shadow-primary border-primary backdrop-blur-xs">
      <DialogHeader>

        <DialogTitle className="text-white">{registering ? "Welcome!" : "Good Seeing you again!"}</DialogTitle>
        <DialogDescription className="text-white">{registering ? "Let's make your event huge!" : "Let's continue where we stopped!"}</DialogDescription>

      </DialogHeader >

      <div>{
        registering ?
          <div className="flex flex-col gap-y-2">
            <FtcksInput placeholder="How would you want to be called?" type="text" className="bg-transparent text-white" />
            <FtcksInput placeholder="Your email" type="text" className="bg-transparent text-white" />
            <FtcksInput placeholder="Your password" type="text" className="bg-transparent text-white" />
            <Button className="bg-transparent text-xs hover:text-primary hover:bg-transparent cursor-pointer duration-150" onClick={() => setRegistering(false)}>Already Have an Account? Log in!</Button>
            <div>
              <Checkbox id="event-creator" className="cursor-pointer" />
              <label htmlFor="event-creator" className="text-white pl-2 cursor-pointer">
                I want to create events!
              </label>
            </div>
          </div >
          : <div className="flex flex-col gap-y-2">

            <FtcksInput placeholder="Your email" type="text" className="bg-transparent text-white" />
            <FtcksInput placeholder="Your password" type="text" className="bg-transparent text-white" />
            <Button className="bg-transparent text-xs hover:text-primary hover:bg-transparent cursor-pointer duration-150" onClick={() => setRegistering(true)}>Already Have an Account? Log in!</Button>

          </div>
      }
        <div>
          Oi</div>
      </div>
      <DialogFooter>
        {props.confirm}
      </DialogFooter>
    </DialogContent >
  </Dialog >
}
