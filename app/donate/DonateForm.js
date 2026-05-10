"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function DonateForm() {
  const searchParams = useSearchParams();
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState("500");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'monthly' || type === 'one-time') {
      setDonationType(type);
    }
  }, [searchParams]);

  const handleAmountSelect = (selectedAmount) => {
    setAmount(selectedAmount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value) => {
    setCustomAmount(value);
    setAmount("");
  };

  const getFinalAmount = () => {
    return customAmount || amount;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!getFinalAmount() || !email || !firstName || !lastName) {
      alert("Please fill in all required fields");
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setAmount("50");
        setCustomAmount("");
        setEmail("");
        setFirstName("");
        setLastName("");
      }, 3000);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 lg:p-xl shadow-sm border border-primary/10 w-full max-w-[600px] mx-auto">
      <h2 className="font-headline-sm sm:font-headline-md md:font-headline-lg text-headline-sm sm:text-headline-md md:text-headline-lg mb-4 sm:mb-6 md:mb-lg text-center">Make a Difference</h2>
      
      {/* Top Section - Donation Selection */}
      <div className="mb-lg">
        <div className="flex bg-surface-container-low p-1 rounded-full mb-4 sm:mb-6 md:mb-lg">
          <button 
            className={`flex-1 py-2 sm:py-2.5 md:py-3 rounded-full font-label-sm sm:font-label-md text-label-sm sm:text-label-md transition-all ${
              donationType === "one-time" 
                ? "bg-white text-primary shadow-sm" 
                : "text-on-surface-variant hover:text-primary"
            }`}
            onClick={() => setDonationType("one-time")}
          >
            One-time
          </button>
          <button 
            className={`flex-1 py-2 sm:py-2.5 md:py-3 rounded-full font-label-sm sm:font-label-md text-label-sm sm:text-label-md transition-all ${
              donationType === "monthly" 
                ? "bg-white text-primary shadow-sm" 
                : "text-on-surface-variant hover:text-primary"
            }`}
            onClick={() => setDonationType("monthly")}
          >
            Monthly
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-lg">
          <button 
            className={`py-3 sm:py-3.5 md:py-4 lg:py-md px-2 sm:px-3 md:px-4 lg:px-base rounded-xl border-2 transition-all text-sm sm:text-base md:text-lg lg:text-headline-sm font-headline-sm ${
              amount === "250" && !customAmount
                ? "border-primary bg-primary/5 text-primary shadow-sm" 
                : "border-outline-variant hover:border-primary/50 text-on-surface-variant"
            }`}
            onClick={() => handleAmountSelect("250")}
          >
            ₹250
          </button>
          <button 
            className={`py-3 sm:py-3.5 md:py-4 lg:py-md px-2 sm:px-3 md:px-4 lg:px-base rounded-xl border-2 transition-all text-sm sm:text-base md:text-lg lg:text-headline-sm font-headline-sm ${
              amount === "500" && !customAmount
                ? "border-primary bg-primary/5 text-primary shadow-sm" 
                : "border-outline-variant hover:border-primary/50 text-on-surface-variant"
            }`}
            onClick={() => handleAmountSelect("500")}
          >
            ₹500
          </button>
          <button 
            className={`py-3 sm:py-3.5 md:py-4 lg:py-md px-2 sm:px-3 md:px-4 lg:px-base rounded-xl border-2 transition-all text-sm sm:text-base md:text-lg lg:text-headline-sm font-headline-sm ${
              amount === "1000" && !customAmount
                ? "border-primary bg-primary/5 text-primary shadow-sm" 
                : "border-outline-variant hover:border-primary/50 text-on-surface-variant"
            }`}
            onClick={() => handleAmountSelect("1000")}
          >
            ₹1,000
          </button>
          <div className="relative flex items-center">
            <span className="absolute left-3 sm:left-3.5 md:left-4 lg:left-4 text-on-surface-variant text-sm sm:text-base md:text-lg lg:text-headline-sm">₹</span>
            <input
              className={`w-full py-3 sm:py-3.5 md:py-4 lg:py-md pl-8 sm:pl-9 md:pl-10 lg:pl-6 rounded-xl border-2 text-sm sm:text-base md:text-lg lg:text-headline-sm font-headline-sm bg-transparent outline-none transition-all ${
                customAmount ? "border-primary" : "border-outline-variant focus:border-primary"
              }`}
              placeholder="Other"
              type="text"
              value={customAmount}
              onChange={(e) => handleCustomAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-sm">
          <p className="font-label-md text-label-md text-on-surface-variant">Payment Method</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
            <label className={`flex-1 flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-3.5 md:p-4 border-2 rounded-xl cursor-pointer transition-all ${
              paymentMethod === "upi" 
                ? "border-primary bg-primary/5" 
                : "border-outline-variant hover:border-primary"
            }`}>
              <input 
                checked={paymentMethod === "upi"} 
                className="hidden" 
                name="payment" 
                type="radio" 
                onChange={() => setPaymentMethod("upi")}
              />
              <span className={`material-symbols-outlined text-base sm:text-lg md:text-xl ${
                paymentMethod === "upi" ? "text-primary" : "text-on-surface-variant"
              }`}>qr_code_scanner</span>
              <span className={`font-label-sm sm:font-label-md text-label-sm sm:text-label-md ${
                paymentMethod === "upi" ? "text-primary" : "text-on-surface-variant"
              }`}>UPI</span>
            </label>
            <label className={`flex-1 flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-3.5 md:p-4 border-2 rounded-xl cursor-pointer transition-all ${
              paymentMethod === "card" 
                ? "border-primary bg-primary/5" 
                : "border-outline-variant hover:border-primary"
            }`}>
              <input 
                checked={paymentMethod === "card"} 
                className="hidden" 
                name="payment" 
                type="radio" 
                onChange={() => setPaymentMethod("card")}
              />
              <span className={`material-symbols-outlined text-base sm:text-lg md:text-xl ${
                paymentMethod === "card" ? "text-primary" : "text-on-surface-variant"
              }`}>credit_card</span>
              <span className={`font-label-sm sm:font-label-md text-label-sm sm:text-label-md ${
                paymentMethod === "card" ? "text-primary" : "text-on-surface-variant"
              }`}>Card</span>
            </label>
            <label className={`flex-1 flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-3.5 md:p-4 border-2 rounded-xl cursor-pointer transition-all ${
              paymentMethod === "netbanking" 
                ? "border-primary bg-primary/5" 
                : "border-outline-variant hover:border-primary"
            }`}>
              <input 
                checked={paymentMethod === "netbanking"} 
                className="hidden" 
                name="payment" 
                type="radio" 
                onChange={() => setPaymentMethod("netbanking")}
              />
              <span className={`material-symbols-outlined text-base sm:text-lg md:text-xl ${
                paymentMethod === "netbanking" ? "text-primary" : "text-on-surface-variant"
              }`}>account_balance</span>
              <span className={`font-label-sm sm:font-label-md text-label-sm sm:text-label-md ${
                paymentMethod === "netbanking" ? "text-primary" : "text-on-surface-variant"
              }`}>NetBanking</span>
            </label>
          </div>
        </div>
      </div>

      {/* Bottom Section - User Info and Submit */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-sm mb-lg">
          <input 
            className="w-full p-3 sm:p-3.5 md:p-4 rounded-xl border border-outline-variant outline-none bg-surface-bright focus:border-primary transition-all text-sm sm:text-base md:text-lg"
            placeholder="email@example.com" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            <input 
              className="w-full p-3 sm:p-3.5 md:p-4 rounded-xl border border-outline-variant outline-none bg-surface-bright focus:border-primary transition-all text-sm sm:text-base md:text-lg"
              placeholder="First Name" 
              type="text" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input 
              className="w-full p-3 sm:p-3.5 md:p-4 rounded-xl border border-outline-variant outline-none bg-surface-bright focus:border-primary transition-all text-sm sm:text-base md:text-lg"
              placeholder="Last Name" 
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </form>

        {showSuccess ? (
          <div className="bg-tertiary-container/10 border border-tertiary/30 rounded-xl p-lg text-center">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-2 block">check_circle</span>
            <h3 className="font-headline-sm text-headline-sm text-tertiary mb-2">Thank You!</h3>
            <p className="text-on-surface-variant text-sm">
              Your ₹{getFinalAmount()} {donationType === "monthly" ? "monthly" : "one-time"} donation has been processed successfully.
            </p>
          </div>
        ) : (
          <button 
            className="w-full bg-primary-container text-on-primary-container py-3.5 sm:py-4 md:py-5 lg:py-lg rounded-full font-label-md sm:font-headline-sm md:font-headline-md text-label-md sm:text-headline-sm md:text-headline-md font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            onClick={handleSubmit}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined animate-spin text-sm sm:text-base md:text-lg">refresh</span>
                <span className="text-sm sm:text-base md:text-lg">Processing...</span>
              </span>
            ) : (
              <span className="text-sm sm:text-base md:text-lg">Complete Donation {getFinalAmount() ? `₹${getFinalAmount()}` : ""}</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
