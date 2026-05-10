import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Service | Kindred",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="pt-[88px] max-w-container-max mx-auto px-gutter py-xl">
        <div className="max-w-4xl">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-lg">Terms of Service</h1>
          
          <div className="space-y-lg">
            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Acceptance of Terms</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                By accessing and using Kindred's website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Donation Terms</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                All donations are made voluntarily and are non-refundable. Kindred reserves the right to use donated funds at our discretion to support our charitable programs and operational expenses.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">User Responsibilities</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-sm font-body-md text-body-md text-on-surface-variant">
                <li>Provide accurate and complete information</li>
                <li>Use our services for lawful purposes only</li>
                <li>Respect the privacy and rights of others</li>
                <li>Not attempt to harm our systems or interfere with service operations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Intellectual Property</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                All content, trademarks, and intellectual property on this website belong to Kindred or are used with permission. You may not use, reproduce, or distribute our content without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Limitation of Liability</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Kindred shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Privacy</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Changes to Terms</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Contact Information</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                If you have questions about these Terms of Service, please contact us at legal@kindred.org or through our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
