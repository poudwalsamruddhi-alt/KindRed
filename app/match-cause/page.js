"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const quizQuestions = [
  {
    id: 'area',
    question: 'What area do you care about most?',
    options: [
      { id: 'climate', label: 'Climate', icon: 'terrain' },
      { id: 'nutrition', label: 'Nutrition', icon: 'restaurant' },
      { id: 'education', label: 'Education', icon: 'school' },
      { id: 'animal-welfare', label: 'Animal Welfare', icon: 'pets' },
      { id: 'health', label: 'Health', icon: 'medical_services' },
      { id: 'social-equity', label: 'Social Equity', icon: 'diversity_3' }
    ]
  },
  {
    id: 'impact',
    question: 'What kind of impact do you want to make?',
    options: [
      { id: 'immediate', label: 'Immediate', description: 'Rapid response and vital resources.', icon: 'bolt' },
      { id: 'longterm', label: 'Long-term', description: 'Building sustainable infrastructure.', icon: 'park' }
    ]
  },
  {
    id: 'commitment',
    question: 'Your commitment level',
    options: [
      { id: 'onetime', label: 'One-time' },
      { id: 'monthly', label: 'Monthly', icon: 'calendar_month' }
    ]
  }
];

const results = {
  'climate-immediate': {
    title: 'Climate Emergency Response',
    description: 'Provide immediate climate action through rapid deployment of renewable energy systems, emergency reforestation, and climate crisis intervention.',
    program: 'Climate Action Initiative',
    impact: 'Immediate climate response',
    cta: 'Support Climate Emergency'
  },
  'climate-longterm': {
    title: 'Climate Sustainability Circle',
    description: 'Build lasting climate resilience through renewable infrastructure, sustainable agriculture, and community climate adaptation programs.',
    program: 'Climate Action Initiative',
    impact: 'Sustainable climate systems',
    cta: 'Join Climate Circle'
  },
  'nutrition-immediate': {
    title: 'Nutrition Emergency Response',
    description: 'Provide immediate food security through emergency food distribution, nutrition programs, and rapid hunger intervention.',
    program: 'Food Security Program',
    impact: 'Immediate nutrition support',
    cta: 'Support Nutrition Emergency'
  },
  'nutrition-longterm': {
    title: 'Nutrition Sustainability Circle',
    description: 'Build lasting food security through community gardens, sustainable agriculture, and nutrition education programs.',
    program: 'Food Security Program',
    impact: 'Sustainable nutrition systems',
    cta: 'Join Nutrition Circle'
  },
  'education-immediate': {
    title: 'Education First Fund',
    description: 'Provide immediate educational support through school supplies, emergency tutoring, and rapid classroom setup for crisis-affected areas.',
    program: 'Universal Literacy Initiative',
    impact: 'Immediate educational relief',
    cta: 'Support Education Emergency'
  },
  'education-longterm': {
    title: 'Education Builders Circle',
    description: 'Build sustainable educational infrastructure through teacher training, school construction, and long-term literacy programs.',
    program: 'Universal Literacy Initiative',
    impact: 'Sustainable education systems',
    cta: 'Join Education Circle'
  },
  'animal-welfare-immediate': {
    title: 'Animal Rescue Emergency',
    description: 'Provide immediate animal rescue through emergency shelters, rapid medical care, and crisis intervention for animals in need.',
    program: 'Animal Protection Program',
    impact: 'Immediate animal rescue',
    cta: 'Support Animal Emergency'
  },
  'animal-welfare-longterm': {
    title: 'Animal Welfare Circle',
    description: 'Build lasting animal protection through permanent shelters, adoption programs, and humane education initiatives.',
    program: 'Animal Protection Program',
    impact: 'Sustainable animal welfare',
    cta: 'Join Animal Welfare Circle'
  },
  'health-immediate': {
    title: 'Healthcare Rapid Response',
    description: 'Provide immediate medical care through mobile clinics, emergency medical supplies, and rapid health crisis intervention.',
    program: 'Community Mobile Clinics',
    impact: 'Immediate medical response',
    cta: 'Support Health Emergency'
  },
  'health-longterm': {
    title: 'Healthcare Sustainability Circle',
    description: 'Build lasting healthcare infrastructure through permanent clinics, preventive care programs, and community health worker training.',
    program: 'Community Mobile Clinics',
    impact: 'Sustainable healthcare systems',
    cta: 'Join Health Circle'
  },
  'social-equity-immediate': {
    title: 'Justice Emergency Response',
    description: 'Provide immediate legal aid and advocacy support through rapid legal assistance, emergency protection services, and crisis intervention.',
    program: 'Justice & Inclusion Program',
    impact: 'Immediate justice response',
    cta: 'Support Justice Emergency'
  },
  'social-equity-longterm': {
    title: 'Social Equity Circle',
    description: 'Build lasting social justice through legal aid programs, advocacy initiatives, and community empowerment training.',
    program: 'Justice & Inclusion Program',
    impact: 'Sustainable social equity',
    cta: 'Join Social Equity Circle'
  }
};

export default function MatchCausePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId, answerId) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
    
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const area = answers.area || 'education';
    const impact = answers.impact || 'immediate';
    const key = `${area}-${impact}`;
    return results[key] || results['education-immediate'];
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + (showResult ? 1 : 0)) / quizQuestions.length) * 100;
  return (
    <>
      <Header />

      <main className="pt-[56px] max-w-container-max mx-auto px-gutter">
        <div className="py-xl">
        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <>
              <div className="mb-xl text-center">
                <h1 className="font-headline-lg text-headline-lg mb-sm">Find Your Purpose</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Answer three simple questions to see which community initiative aligns best with your values.
                </p>
                <div className="mt-lg flex items-center justify-between gap-4">
                  <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary-container transition-all duration-700" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span className="font-label-md text-label-md text-primary">
                    Step {currentStep + 1} of {quizQuestions.length}
                  </span>
                </div>
              </div>

              <section className="space-y-md">
                {quizQuestions.map((question, index) => (
                  <div 
                    key={question.id}
                    className={`p-md rounded-xl border-2 transition-all duration-500 ${
                      index === currentStep 
                        ? 'bg-surface-container-low border-primary-container/30 scale-[1.02]' 
                        : index < currentStep 
                        ? 'bg-surface-container-low border-primary/30 opacity-60' 
                        : 'bg-surface-container-low border-outline-variant opacity-40'
                    }`}
                  >
                    <h2 className="font-headline-sm text-headline-sm mb-md flex items-center gap-2">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        index === currentStep
                          ? 'bg-primary-container text-on-primary-container'
                          : index < currentStep
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container-highest text-on-surface'
                      }`}>
                        {index + 1}
                      </span>
                      {question.question}
                    </h2>
                    <div className={`${
                      question.options.length === 6 
                        ? 'grid grid-cols-2 md:grid-cols-3 gap-sm' 
                        : question.options.length === 4 
                        ? 'grid grid-cols-2 md:grid-cols-4 gap-sm' 
                        : question.options.length === 2 
                        ? 'grid grid-cols-1 md:grid-cols-2 gap-md'
                        : 'flex flex-col md:flex-row gap-sm'
                    }`}>
                      {question.options.map((option) => {
                        const isSelected = answers[question.id] === option.id;
                        const isCurrent = index === currentStep;
                        
                        if (question.options.length === 4) {
                          return (
                            <button
                              key={option.id}
                              onClick={() => handleAnswer(question.id, option.id)}
                              className={`flex flex-col items-center p-md rounded-xl border-2 transition-all ${
                                isSelected
                                  ? 'bg-primary text-on-primary border-primary shadow-lg scale-[1.02]'
                                  : 'bg-surface-container-lowest border-outline-variant hover:border-primary hover:text-primary cursor-pointer'
                              } ${!isCurrent ? 'group' : ''}`}
                            >
                              <span className={`mb-2 text-[32px] transition-transform ${
                                isSelected ? '' : isCurrent ? 'group-hover:scale-110' : ''
                              } ${isSelected ? '' : 'text-primary'}`}>
                                <span className="material-symbols-outlined">
                                  {option.icon}
                                </span>
                              </span>
                              <span className="font-label-md text-label-md">{option.label}</span>
                            </button>
                          );
                        } else if (question.options.length === 2 && question.id === 'impact') {
                          return (
                            <button
                              key={option.id}
                              onClick={() => isCurrent && handleAnswer(question.id, option.id)}
                              disabled={!isCurrent}
                              className={`flex items-center gap-md p-md rounded-xl border-2 transition-all ${
                                isSelected
                                  ? 'border-primary-container shadow-md bg-surface-container-lowest'
                                  : isCurrent
                                  ? 'border-outline-variant hover:border-primary cursor-pointer bg-surface-container-lowest'
                                  : 'border-outline-variant cursor-not-allowed bg-surface-container-lowest'
                              }`}
                            >
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                isSelected
                                  ? 'bg-primary-container/20'
                                  : option.id === 'immediate'
                                  ? 'bg-primary-container/20'
                                  : 'bg-tertiary-container/20'
                              }`}>
                                <span className={`material-symbols-outlined ${
                                  isSelected
                                    ? 'text-primary'
                                    : option.id === 'immediate'
                                    ? 'text-primary'
                                    : 'text-tertiary'
                                }`}>
                                  {option.icon}
                                </span>
                              </div>
                              <div className="text-left">
                                <p className={`font-label-md text-label-md ${
                                  isSelected ? 'text-on-surface' : 'text-on-surface'
                                }`}>{option.label}</p>
                                <p className="text-[12px] text-on-surface-variant font-body-md">{option.description}</p>
                              </div>
                            </button>
                          );
                        } else {
                          return (
                            <button
                              key={option.id}
                              onClick={() => isCurrent && handleAnswer(question.id, option.id)}
                              disabled={!isCurrent}
                              className={`flex-1 p-md rounded-xl border transition-all font-label-md text-label-md flex items-center justify-center gap-2 ${
                                isSelected
                                  ? 'bg-primary text-on-primary border-primary'
                                  : isCurrent
                                  ? 'bg-surface-container-lowest border-outline-variant hover:border-primary cursor-pointer'
                                  : 'bg-surface-container-lowest border-outline-variant cursor-not-allowed'
                              }`}
                            >
                              {option.icon && (
                                <span className="material-symbols-outlined text-[18px]">
                                  {option.icon}
                                </span>
                              )}
                              {option.label}
                            </button>
                          );
                        }
                      })}
                    </div>
                  </div>
                ))}
              </section>
            </>
          ) : (
            <div className="text-center space-y-lg">
              <div className="mb-xl">
                <div className="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center mx-auto mb-md">
                  <span className="material-symbols-outlined text-primary text-[40px]">volunteer_activism</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg mb-sm">Your Purpose Awaits</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Based on your values, here's how you can make the greatest impact.
                </p>
              </div>
              
              <div className="bg-surface-container-low p-xl rounded-2xl border-2 border-primary-container/30">
                <h2 className="font-headline-md text-headline-md text-primary mb-md">{getResult().title}</h2>
                <p className="font-body-md text-body-md text-on-surface mb-lg">{getResult().description}</p>
                
                <div className="space-y-md mb-lg">
                  <div className="flex items-center justify-center gap-md">
                    <span className="text-sm text-on-surface-variant">Program:</span>
                    <span className="font-label-md text-label-md text-primary">{getResult().program}</span>
                  </div>
                  <div className="flex items-center justify-center gap-md">
                    <span className="text-sm text-on-surface-variant">Impact:</span>
                    <span className="font-label-md text-label-md text-tertiary">{getResult().impact}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href={`/donate?type=${answers.commitment === 'monthly' ? 'monthly' : 'one-time'}`} 
                    className="bg-primary text-on-primary px-xl py-md rounded-full font-headline-sm text-headline-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all inline-flex items-center justify-center gap-sm"
                  >
                    {getResult().cta}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <button 
                    onClick={resetQuiz}
                    className="border-2 border-outline text-on-surface px-xl py-md rounded-full font-headline-sm text-headline-sm hover:bg-surface-container-low transition-all inline-flex items-center justify-center gap-sm"
                  >
                    Retake Quiz
                    <span className="material-symbols-outlined">refresh</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-xl rounded-2xl overflow-hidden shadow-2xl relative h-[400px]">
            <Image
              fill
              alt="People collaborating"
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkbRFysXLvX-8Svun0urXBPATxiO4Gx6eUsmIDBMbBHJBG6DnCOdUeGy2nnwNTtO0eMAj61J7NFb3zExCBLqzmrjeYx-znDPCrRM5esRbpoY7Iusp1E3ztUa4zjgTMsPLXzTQNv-h9DdD63BqLC8YYXZqi2h8mAI89YUcgj9TbEAO2v1rDW5Z7wt-stDBkhO-T4eZA9SqPjC_kUz6Sdz5b--4315SbmQfBYEd8Cds1imtghzbP67Y7uyhesczTyaqbwRzjBCTpDVU"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent flex flex-col justify-end p-lg">
              <p className="text-on-primary font-headline-sm text-headline-sm mb-xs italic">
                &quot;Matching the right help with the right need is where the magic of impact begins.&quot;
              </p>
              <p className="text-primary-fixed font-label-md text-label-md">- Sarah Jenkins, Impact Lead</p>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
