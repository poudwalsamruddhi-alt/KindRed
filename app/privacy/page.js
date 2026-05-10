import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Kindred",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="pt-[88px] max-w-container-max mx-auto px-gutter py-xl">
        <div className="max-w-4xl">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-lg">Privacy Policy</h1>
          
          <div className="space-y-lg">
            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Information We Collect</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We collect information you provide directly to us, such as when you create an account, make a donation, sign up for our newsletter, or contact us. This may include your name, email address, payment information, and other personal details.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">How We Use Your Information</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-sm font-body-md text-body-md text-on-surface-variant">
                <li>Process your donations and provide receipts</li>
                <li>Send you updates about our programs and impact</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Information Sharing</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our website and conducting our business.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Data Security</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Your Rights</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                You have the right to access, update, or delete your personal information. You may also opt out of receiving marketing communications from us at any time.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Contact Us</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                If you have any questions about this Privacy Policy, please contact us at privacy@kindred.org or through our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
