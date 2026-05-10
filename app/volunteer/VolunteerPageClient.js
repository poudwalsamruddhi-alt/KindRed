"use client";

import { useState } from "react";
import VolunteerApplicationForm from "./VolunteerApplicationForm";

export default function VolunteerPageClient() {
  const [selectedOpportunity, setSelectedOpportunity] = useState("");
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApplyClick = (opportunityTitle) => {
    setSelectedOpportunity(opportunityTitle);
    setShowApplicationForm(true);
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
    setSelectedOpportunity("");
  };

  const handleFormSubmit = (formData) => {
    console.log("Application submitted:", formData);
    // Here you would normally send the data to your backend
  };

  return (
    <>
      <section className="relative h-[530px] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Volunteers working together in community service"
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent"></div>
        </div>
        <div className="relative w-full max-w-container-max mx-auto px-gutter">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary/10 text-primary px-md py-xs rounded-full font-label-md text-label-md mb-md">
              Volunteer Opportunities
            </span>
            <h1 className="font-display-lg text-display-lg text-white mb-md">Join Our Community of Changemakers</h1>
            <p className="font-body-lg text-body-lg text-white/90 mb-lg">
              Your time and skills can transform lives. Join our global network of volunteers making a real difference in communities worldwide.
            </p>
            <a
              className="inline-flex items-center gap-sm bg-primary-container text-on-primary-container px-lg py-md rounded-full font-label-md text-label-md font-bold hover:scale-95 transition-all"
              href="#opportunities"
            >
              Explore Opportunities <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-lg">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Why Volunteer With Kindred?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
              Join a movement where your passion meets purpose. Every hour you contribute creates lasting change in communities that need it most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">volunteer_activism</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Make Real Impact</h3>
              <p className="text-on-surface-variant">
                See direct results of your work in communities through our transparent reporting system.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">diversity_3</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Join Global Community</h3>
              <p className="text-on-surface-variant">
                Connect with passionate volunteers from around the world sharing your commitment to change.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">trending_up</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Develop Skills</h3>
              <p className="text-on-surface-variant">
                Gain valuable experience and develop new skills while making a meaningful difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl" id="opportunities">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-lg">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Current Volunteer Opportunities</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
              Find the perfect role that matches your skills, interests, and availability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <div className="bg-surface-container rounded-xl p-lg border border-outline-variant/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary">restaurant</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Nutrition Support</h3>
                  <p className="text-sm text-on-surface-variant">Local • 4-6 hours/week</p>
                </div>
              </div>
              <p className="text-on-surface-variant mb-4">
                Help prepare and distribute meals at community kitchens and school meal programs.
              </p>
              <button 
                onClick={() => handleApplyClick("Nutrition Support")}
                className="bg-tertiary text-on-tertiary px-4 py-2 rounded-full font-label-md text-label-md hover:scale-105 transition-all cursor-pointer"
              >
                Apply Now
              </button>
            </div>

            <div className="bg-surface-container rounded-xl p-lg border border-outline-variant/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">school</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Education Assistant</h3>
                  <p className="text-sm text-on-surface-variant">Remote • 2-3 hours/week</p>
                </div>
              </div>
              <p className="text-on-surface-variant mb-4">
                Support online tutoring programs and help create educational materials for children.
              </p>
              <button 
                onClick={() => handleApplyClick("Education Assistant")}
                className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-md text-label-md hover:scale-105 transition-all cursor-pointer"
              >
                Apply Now
              </button>
            </div>

            <div className="bg-surface-container rounded-xl p-lg border border-outline-variant/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">medical_services</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Health Outreach</h3>
                  <p className="text-sm text-on-surface-variant">Local • 6-8 hours/week</p>
                </div>
              </div>
              <p className="text-on-surface-variant mb-4">
                Assist with mobile health clinics and community health education programs.
              </p>
              <button 
                onClick={() => handleApplyClick("Health Outreach")}
                className="bg-secondary text-on-secondary px-4 py-2 rounded-full font-label-md text-label-md hover:scale-105 transition-all cursor-pointer"
              >
                Apply Now
              </button>
            </div>

            <div className="bg-surface-container rounded-xl p-lg border border-outline-variant/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary">terrain</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Climate Action</h3>
                  <p className="text-sm text-on-surface-variant">Local • 4-6 hours/week</p>
                </div>
              </div>
              <p className="text-on-surface-variant mb-4">
                Join tree planting initiatives and environmental conservation projects in your area.
              </p>
              <button 
                onClick={() => handleApplyClick("Climate Action")}
                className="bg-tertiary text-on-tertiary px-4 py-2 rounded-full font-label-md text-label-md hover:scale-105 transition-all cursor-pointer"
              >
                Apply Now
              </button>
            </div>

            <div className="bg-surface-container rounded-xl p-lg border border-outline-variant/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">pets</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Animal Care</h3>
                  <p className="text-sm text-on-surface-variant">Local • 3-5 hours/week</p>
                </div>
              </div>
              <p className="text-on-surface-variant mb-4">
                Help care for rescued animals and support animal welfare initiatives in shelters.
              </p>
              <button 
                onClick={() => handleApplyClick("Animal Care")}
                className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-md text-label-md hover:scale-105 transition-all cursor-pointer"
              >
                Apply Now
              </button>
            </div>

            <div className="bg-surface-container rounded-xl p-lg border border-outline-variant/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">diversity_3</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Community Support</h3>
                  <p className="text-sm text-on-surface-variant">Flexible • 2-4 hours/week</p>
                </div>
              </div>
              <p className="text-on-surface-variant mb-4">
                Provide general support for community events and administrative tasks.
              </p>
              <button 
                onClick={() => handleApplyClick("Community Support")}
                className="bg-secondary text-on-secondary px-4 py-2 rounded-full font-label-md text-label-md hover:scale-105 transition-all cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Ready to Make a Difference?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg">
            Join thousands of volunteers who are already creating positive change in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleApplyClick("")}
              className="bg-primary text-on-primary px-xl py-md rounded-full font-label-md text-label-md font-bold hover:scale-105 transition-all cursor-pointer"
            >
              Start Your Application
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <VolunteerApplicationForm
          opportunity={selectedOpportunity}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
        />
      )}
    </>
  );
}
