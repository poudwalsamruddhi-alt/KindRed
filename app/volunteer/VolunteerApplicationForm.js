"use client";

import { useState } from "react";

export default function VolunteerApplicationForm({ opportunity, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    experience: "",
    motivation: "",
    availability: "",
    skills: "",
    opportunity: opportunity || ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.motivation) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Call parent onSubmit callback
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-surface rounded-2xl p-6 sm:p-8 w-full max-w-2xl text-center shadow-xl">
          
          <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center mx-auto mb-5">
            <span className="material-symbols-outlined text-tertiary text-4xl">
              check_circle
            </span>
          </div>

          <h3 className="font-headline-md text-2xl text-on-surface mb-4">
            Application Submitted!
          </h3>

          <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30 mb-4">
            <p className="text-on-surface-variant text-base leading-7">
              Thank you for your interest in volunteering with Kindred.
              We'll review your application and contact you within
              3–5 business days.
            </p>
          </div>

          <p className="text-sm text-on-surface-variant">
            This window will close automatically...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-surface rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4">
        <div className="p-4 sm:p-6 border-b border-outline-variant">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Volunteer Application</h2>
            <button
              onClick={onClose}
              className="text-on-surface-variant hover:text-error transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            {opportunity && `Applying for: ${opportunity}`}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="16"
                max="100"
                className="w-full px-3 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary"
              />
            </div>
            <div>
              <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
                Location (City/Country)
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
              Relevant Experience
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary"
              placeholder="Tell us about any relevant volunteer or work experience..."
            />
          </div>

          <div>
            <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
              Why do you want to volunteer with Kindred? *
            </label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary"
              placeholder="Share your motivation and what you hope to achieve through volunteering..."
              required
            />
          </div>

          <div>
            <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
              Availability (hours per week)
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary"
            >
              <option value="">Select availability</option>
              <option value="1-2">1-2 hours per week</option>
              <option value="3-5">3-5 hours per week</option>
              <option value="6-10">6-10 hours per week</option>
              <option value="10+">10+ hours per week</option>
            </select>
          </div>

          <div>
            <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
              Skills & Interests
            </label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary"
              placeholder="List any specific skills, languages, or areas of interest..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-outline text-on-surface rounded-lg hover:bg-surface-container-low transition-colors font-label-md text-label-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 bg-primary text-on-primary rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-label-md text-label-md"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
