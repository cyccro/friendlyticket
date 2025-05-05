import { FtcksButtonTransparent } from "./Button"
export default function Header() {
  return <div className="flex flex-row w-full gap-x-32 px-8 py-2 pt-4 align-center justify-center">
    <div className="flex flex-row">
      <FtcksButtonTransparent size="sm">Log In</FtcksButtonTransparent>
      <FtcksButtonTransparent size="sm">Pricing</FtcksButtonTransparent>
      <FtcksButtonTransparent size="sm">Features</FtcksButtonTransparent>
    </div>
    <h1 className="text-primary text-2xl">Friendly Tickets</h1>
    <div className="flex flex-row gap-4">
      <FtcksButtonTransparent size="sm">Sign Up</FtcksButtonTransparent>
      <FtcksButtonTransparent size="sm">Contact</FtcksButtonTransparent>
      <FtcksButtonTransparent size="sm">Previews</FtcksButtonTransparent>
    </div>
  </div>
}
