import { FtcksButtonTransparent } from "./Button"
import LoginDialog from "./Login"
export default function Header() {
  return <div className="flex flex-row w-full gap-x-32 px-8 py-2 pt-4 align-center justify-center">
    <div className="flex flex-row">
      <LoginDialog
        registering={false}
        trigger={
          <FtcksButtonTransparent size="sm">Log In</FtcksButtonTransparent>
        }
        confirm={<FtcksButtonTransparent className="hover:shadow-white text-white" size="sm">Confirm</FtcksButtonTransparent>}
      ></LoginDialog>
      <FtcksButtonTransparent size="sm">Pricing</FtcksButtonTransparent>
      <FtcksButtonTransparent size="sm">Features</FtcksButtonTransparent>
    </div>
    <h1 className="text-primary text-2xl">Friendly Tickets</h1>
    <div className="flex flex-row gap-4">
      <FtcksButtonTransparent size="sm">Start Creating</FtcksButtonTransparent>
      <FtcksButtonTransparent size="sm">Contact</FtcksButtonTransparent>
      <FtcksButtonTransparent size="sm">Previews</FtcksButtonTransparent>
    </div>
  </div>
}
