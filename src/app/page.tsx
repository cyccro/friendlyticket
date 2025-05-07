import { Globe, ChartNoAxesColumnIncreasingIcon, Wallet } from "lucide-react";
import Header from "@/components/Header";
import { FtcksButton, } from "@/components/Button";
import Feature from "@/components/Feature";
import FtcksLink from "@/components/Link";
export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col">
        <div className="pl-10 md:pt-40 md:pb-20">
          <div className="flex flex-row justify-between">

            <div className="max-w-1/3 flex flex-col gap-y-4">
              <div className="text-5xl font-bold">
                <h1>Sell Stressless. Sell Smarter</h1>
                <h1 className="text-6xl">Sell More!</h1>
              </div>
              <p className="text-gray-500">
                You're not just hosting an event — you're building an experience. Our platform gives you full control
                and powerful tools to make it unforgettable.
              </p>
              <div className="flex flex-row">
                <FtcksButton>Start Selling Now!</FtcksButton>
              </div>
            </div>

            <div className="pr-10">
              Aqui vai uma imagem qualquer
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-y-12 pt-20 pb-40">

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">
              Built for creators who care about every detail
            </h1>
            <p className="text-gray-500 text-md">Giving you the tools to create, manage, and scale your events with confidence and security!</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <Feature icon={<Globe color="#e3527c" />} title="Your brand, your rules" description="Customize every aspect of your event page to match you brand identity" className="w-1/2" />
            <Feature icon={<ChartNoAxesColumnIncreasingIcon color="#e3527c" />} title="Data-right insights" description="Get real-time analytics about your event and see how it's going" className="w-1/2" />
            <Feature icon={<Wallet color="#e3527c" />} title="Transparent payments" description="Enjoy full pricing freedom: set your ticket prices the way you prefer, total transparency, no surprises, just straightforward payouts. The control is in your hands!" className="w-1/2" />
          </div>

        </div>

        <div className="flex flex-row px-10 justify-between py-10 border-t border-gray-200">

          <div className="max-w-1/3 flex flex-col gap-y-3">
            <h1>Friendly Tickets</h1>
            <p className="text-gray-500">Empowering event creators with the tools they need to succeed.</p>
          </div>

          <div className="flex flex-row gap-x-40">

            <div className="flex flex-col gap-y-4">
              <h1>Product</h1>
              <div className="flex flex-col gap-y-1">
                <FtcksLink href="#">Features</FtcksLink>
                <FtcksLink href="#">Pricing</FtcksLink>
                <FtcksLink href="#">Integrations</FtcksLink>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <h1>Company</h1>
              <div className="flex flex-col gap-y-1">
                <FtcksLink href="#">Contact</FtcksLink>
                <FtcksLink href="#">Pricing</FtcksLink>
                <FtcksLink href="#">Integrations</FtcksLink>
              </div>
            </div>

          </div>

        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="w-full bg-gray-200 h-px"></div>
          <div className="flex flex-row py-8 w-full px-20">
            <p className="text-gray-500 text-sm">Friendly Tickets. All rights reserved</p>
            <div className="flex flex-row gap-x-4 ml-auto">
              <FtcksLink href="#">Terms</FtcksLink>
              <FtcksLink href="#">Privacys</FtcksLink>
              <FtcksLink href="#">Cookies</FtcksLink>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}
