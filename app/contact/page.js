"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-[88px] max-w-container-max mx-auto px-gutter py-xl">
        <div className="max-w-4xl">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-lg">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            <div className="space-y-lg">
              <section>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Get in Touch</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                  We'd love to hear from you! Whether you have questions about our programs, want to volunteer, or need support with your donation, we're here to help.
                </p>
              </section>

              <section>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Contact Information</h3>
                <div className="space-y-md">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">email</span>
                    <div>
                      <p className="font-body-md text-body-md text-on-surface">Email</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">info@kindred.org</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">phone</span>
                    <div>
                      <p className="font-body-md text-body-md text-on-surface">Phone</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <div>
                      <p className="font-body-md text-body-md text-on-surface">Address</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">123 Gandhi Road<br />Mumbai, Maharashtra 400001</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Office Hours</h3>
                <div className="space-y-sm">
                  <div className="flex justify-between">
                    <span className="font-body-md text-body-md text-on-surface">Monday - Friday</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body-md text-body-md text-on-surface">Saturday</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body-md text-body-md text-on-surface">Sunday</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">Closed</span>
                  </div>
                </div>
              </section>
            </div>

            <div>
              <section>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Send us a Message</h2>
                <form className="space-y-md">
                  <div>
                    <label className="block font-body-md text-body-md text-on-surface mb-sm">Name</label>
                    <input
                      type="text"
                      className="w-full p-md border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-body-md text-body-md text-on-surface mb-sm">Email</label>
                    <input
                      type="email"
                      className="w-full p-md border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body-md text-body-md text-on-surface mb-sm">Subject</label>
                    <select className="w-full p-md border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                      <option value="">Select a topic</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteer">Volunteer Information</option>
                      <option value="programs">Program Questions</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-body-md text-body-md text-on-surface mb-sm">Message</label>
                    <textarea
                      rows={5}
                      className="w-full p-md border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary py-md px-lg rounded-lg font-body-md text-body-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
