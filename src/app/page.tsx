import { Globe } from "lucide-react";
import Header from "@/components/Header";
import { FtcksButton, FtcksButtonTransparent } from "@/components/Button";
import Feature from "@/components/Feature";
import FtcksLink from "@/components/Link";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="max-w-1/3">
          <h1 className="text-3xl font-bold">Sell Smarter. Sell Stressless. <p className="text-4xl">Sell More!</p></h1>
          <p className="text-gray-500">You're not just hosting an event — you're building an experience. Our platform gives you full control
            and powerful tools to make it unforgettable.</p>
          <div className="flex flex-row">
            <FtcksButton>Start Selling Now!</FtcksButton>
          </div>
        </div>
        <div>
          <h1>
            Built for creators who care about every detail
          </h1>
          <p>Our platform give you the tools to create, manage, and scale your events with confidence and security</p>
        </div>
        <div className="max-w-1/2">
          <Feature icon={<Globe color="#e3527c" />} title="Your brand, your rules" description="Customize every aspect of your event page to match you brand identity" />
          <Feature icon={<Globe color="#e3527c" />} title="Data-right insights" description="Get real-time analytics about your event and see how it's going" />
          <Feature icon={<Globe color="#e3527c" />} title="Transparent payments" description="Enjoy full pricing freedom: set your ticket prices the way you prefer, total transparency, no surprises, just straightforward payouts. The control is in your hands!" />
        </div>
        <div>
          <div>
            <h1>Friendly Ticket</h1>
            <p>Empowering event creators with the tools they need to succeed.</p>
          </div>
          <div>
            <div>
              <h1>Product</h1>
              <div>
                <FtcksLink href="#">Features</FtcksLink>
                <FtcksLink href="#">Pricing</FtcksLink>
                <FtcksLink href="#">Integrations</FtcksLink>
              </div>
            </div>
            <div>
              <h1>Company</h1>
              <div>
                <FtcksLink href="#"></FtcksLink>
                <FtcksLink href="#">Pricing</FtcksLink>
                <FtcksLink href="#">Integrations</FtcksLink>
              </div>
            </div>

            <div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
