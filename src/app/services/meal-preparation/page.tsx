"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What are the benefits of meal preparation?",
    answer: "Meal preparation offers numerous benefits, including saving time, reducing food waste, and ensuring balanced nutrition. By planning and prepping meals in advance, you can avoid unhealthy last-minute food choices and stick to dietary goals. It also helps with portion control, making it easier to manage calorie intake. Additionally, meal prepping can be cost-effective since buying ingredients in bulk is often cheaper than eating out or ordering takeout regularly."
  },
  {
    question: "How do I ensure my prepped meals stay fresh throughout the week?",
    answer: "To keep meals fresh, store them in airtight containers and refrigerate or freeze them as needed. Meals with perishable ingredients, such as seafood or dairy, should be consumed within 2-3 days, while heartier dishes like soups and casseroles can last up to 5 days in the fridge. Labeling containers with preparation dates can help track freshness. For longer storage, freezing meals in portioned containers maintain quality and taste."
  },
  {
    question: "What are the best types of meals to prep in advance?",
    answer: "The best meals for meal prep are those that reheat well and maintain their texture and flavor. Options like grilled chicken, roasted vegetables, quinoa, pasta dishes, and stir-fries are excellent choices. Soups, stews, and grain bowls also work well since their flavors often deepen over time. Avoid meals with crispy elements like fried foods or dishes with delicate greens that may wilt quickly."
  },
  {
    question: "How can meal preparation help with weight management?",
    answer: "Meal preparation supports weight management by allowing better control over portion sizes and ingredient choices. When meals are planned in advance, it’s easier to avoid processed foods, excessive fats, and added sugars. Pre-measured portions prevent overeating, while balanced meals with lean proteins, fiber, and healthy fats keep you fuller for longer. Consistently following a meal prep routine can help maintain a healthy diet and support weight loss or maintenance goals."
  },
  {
    question: "What’s the best way to balance nutrition in meal prep?",
    answer: "To create balanced meals, focus on including a variety of macronutrients: protein, carbohydrates, and healthy fats. A well-rounded meal should have lean proteins like chicken, fish, or plant-based alternatives, complex carbohydrates like brown rice or sweet potatoes, and healthy fats such as avocado or olive oil. Incorporating plenty of vegetables ensures you get essential vitamins and minerals. Meal prepping with a focus on whole, unprocessed foods helps maintain optimal nutrition."
  }
];

const mealExpectations = [
  {
    title: "Customized Meal Planning",
    body: "Thoughtfully designed meal plans that align with dietary restrictions, personal preferences, and nutritional needs."
  },
  {
    title: "Fresh & Balanced Preparation",
    body: "Home-cooked meals made with fresh ingredients to promote overall health and wellness."
  },
  {
    title: "Assistance with Feeding",
    body: "Compassionate support for individuals who require help with eating, ensuring a comfortable and dignified experience."
  },
  {
    title: "Hydration & Snack Support",
    body: "Encouraging proper hydration and providing healthy snacks to maintain energy levels throughout the day."
  },
  {
    title: "Tailored Menus",
    body: "Preparing dishes that reflect cultural traditions and personal tastes to make mealtime more enjoyable."
  }
];

// Helper Component: Renders thematic monoline icons
function MealPrepIcon({ title }: { title: string }) {
  const baseClass = "h-5 w-5 text-slate-800 transition-colors duration-300";
  
  switch (title) {
    case "Customized Meal Planning":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 12.236h3.75m-3.75 3h3.75m-1.25-6h1.25m-1.25 3h1.25M7.5 12.236h1.25m-1.25 3h1.25m11.166-4.664A48.424 48.424 0 0 0 18 10.5M18 10.5c0-1.135-.845-2.098-1.976-2.192a48.246 48.246 0 0 0-4.048-.08m0 0a48.246 48.246 0 0 0-4.048.08C6.845 8.402 6 9.365 6 10.5M18 10.5v8.25a2.25 2.25 0 0 1-2.25 2.25H8.25A2.25 2.25 0 0 1 6 18.75V10.5m12 0V6.75A2.25 2.25 0 0 0 15.75 4.5H8.25A2.25 2.25 0 0 0 6 6.75V10.5" />
        </svg>
      );
    case "Fresh & Balanced Preparation":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m12-4.871c1.355.11 2.697.166 4.024.276C21.155 8.635 22 9.598 22 10.733v2.513m-16 0h16m-16 0c0 3.125 1.838 5.75 4.5 7.14M6 13.246V18c0 1.105.895 2 2 2h8c1.105 0 2-.895 2-2v-4.754m2-1.5c0 3.125-1.838 5.75-4.5 7.14" />
        </svg>
      );
    case "Assistance with Feeding":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm6 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
        </svg>
      );
    case "Hydration & Snack Support":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 22h4.5m2-2.5h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1Zm-5.5-10h12.5M12 3v4.5" />
        </svg>
      );
    case "Tailored Menus":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      );
  }
}

export default function MealPreparationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>

      {/* HERO BANNER SECTION WITH EXPLICIT CHILD OVERRIDES FOR WHITE BUTTON TEXT */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Wholesome Nutritional Management"
          title="In-Home Senior Meal Preparation Services"
          description=""
          primaryAction={{ label: "Request Nutrition Support", href: "/contact-us" }}
          secondaryAction={{ label: "Call 708-304-0296", href: "tel:7083040296" }}
          imageSrc="/nh-2242925031Ui50a8e.webp" 
          imageAlt="Nutritious and balanced home cooked meal preparation"
        />
      </div>

      {/* Overview Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/30">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Content */}
            <div className="space-y-6">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="In-Home Care in Westchester, Illinois"
                  title="Thoughtful Nutrition & Meal Planning"
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Proper nutrition and thoughtful meal planning are essential for overall well-being. This service ensures that every meal is handled with care, precision, and consideration of individual preferences.
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  From preparation to assistance, every detail is managed efficiently. Our approach to in-home care in Westchester, Illinois, promotes consistency and attention to dietary needs. It&apos;s about making daily nutrition straightforward and effective.
                </p>
              </ScrollReveal>

              {/* Service Checklist Scope */}
              <ScrollReveal>
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <h4 className="text-base sm:text-lg font-semibold text-brand-ink mb-4">
                    Our meal preparation and nutrition services include but are not limited to:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Planning and preparing balanced meals based on dietary preferences and needs.</span>
                    </li>
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Providing assistance with feeding when required.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Visual Component Block */}
            <ScrollReveal>
              <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/5 translate-x-3 translate-y-3 -z-10" />
                <Image
                  src="/nh-2242925031Ui50a8e.webp" 
                  alt="Nutritious meal preparation services for seniors and veterans"
                  fill
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl"
                />
              </div>
            </ScrollReveal>

          </div>
        </PageShell>
      </section>

      {/* Section 2: Expectations Grid with Premium Solid Offset Drop Layout */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/50 border-y border-slate-200/40">
        <PageShell>
          <div className="mb-14 text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Comprehensive Care
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
                What to Expect from Our Meal Preparation Service
              </h3>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {mealExpectations.map((item, idx) => {
              // Alternates background panel colors dynamically for design cohesiveness
              const backplateColor = idx % 2 === 0 ? "bg-[#0c3e72]" : "bg-brand-orange";
              const iconWrapperBg = idx % 2 === 0 ? "bg-brand-blue/5" : "bg-brand-orange/5";
              
              return (
                <ScrollReveal key={item.title}>
                  <div className="relative h-full group">
                    {/* Underlying Solid Color Offset Panel */}
                    <div className={`absolute inset-0 ${backplateColor} rounded-[2rem] transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5`} />
                    
                    {/* Main Content Card Frame */}
                    <div className="relative h-full bg-white border border-slate-900/80 p-8 rounded-[2rem] transition-transform duration-300 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-3 hover:-translate-y-3 active:translate-x-0 active:translate-y-0 flex flex-col justify-between">
                      <div>
                        {/* Custom Monoline Icon Holder */}
                        <div className={`h-10 w-10 ${iconWrapperBg} flex items-center justify-center rounded-xl mb-6 shadow-inner transition-colors duration-300 group-hover:bg-[#0c3e72]/5`}>
                          <MealPrepIcon title={item.title} />
                        </div>
                        <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-500">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* Section 3: Interactive FAQ Accordion Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
        <PageShell>
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Common Questions"
              title="Frequently Asked Questions"
            />
          </ScrollReveal>

          <div className="mt-14 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <ScrollReveal key={index}>
                  <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left font-display text-base sm:text-lg font-semibold text-brand-ink transition hover:text-brand-blue"
                    >
                      <span>{faq.question}</span>
                      <div className="h-7 w-7 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 transition-colors duration-300 group-hover:bg-brand-blue/5">
                        <svg
                          className={`h-4 w-4 text-brand-blue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[350px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-6 py-5 text-xs sm:text-sm leading-relaxed text-slate-600 bg-slate-50/40">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* Section 4: Bottom Conversion Outreach */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-brand-blue/10 border-t border-brand-blue/10 rounded-t-[3rem]">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <SectionHeading
                centered
                eyebrow="Purpose-Driven Home Care Services"
                title="Are you looking for reliable home care services?"
                description="Contact us now to see how we can help you navigate personalized care options cleanly."
              />
              
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#0c3e72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white !text-white shadow-md transition duration-300 hover:bg-brand-blue active:scale-98"
                >
                  Get Started Today
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-blue text-[10px] font-bold">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>
    </>
  );
}