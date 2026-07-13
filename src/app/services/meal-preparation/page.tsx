"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection, PageShell, SectionHeading, SectionCard } from "@/components/site-shell";

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

export default function MealPreparationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <HeroSection
        eyebrow="Services"
        title="Meal Preparation and Nutrition"
        description="Enjoy balanced, delicious meals prepared to meet dietary preferences."
        primaryAction={{ label: "Book a Free Consultation", href: "/contact-us" }}
        secondaryAction={{ label: "Call Now", href: "tel:7083040296" }}
        imageSrc="/nh-2242925031Ui50a8e.webp" 
        imageAlt="Nutritious and balanced home cooked meal preparation"
      />

      {/* Overview Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Content */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow="In-Home Care in Westchester, Illinois"
                title="Thoughtful Nutrition & Meal Planning"
              />
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                Proper nutrition and thoughtful meal planning are essential for overall well-being. This service ensures that every meal is handled with care, precision, and consideration of individual preferences.
              </p>
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                From preparation to assistance, every detail is managed efficiently. Our approach to in-home care in Westchester, Illinois, promotes consistency and attention to dietary needs. It’s about making daily nutrition straightforward and effective.
              </p>

              {/* Service Checklist Scope */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-lg font-semibold text-brand-ink mb-4">
                  Our meal preparation and nutrition services include but are not limited to:
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Planning and preparing balanced meals based on dietary preferences and needs.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Providing assistance with feeding when required.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Visual Component Block */}
            <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
              <Image
                src="/thumb-23706104744U61tse5.webp" 
                alt="Nutritious meal preparation services for seniors and veterans"
                fill
                className="object-cover rounded-[2.5rem] brand-shadow border border-white/40"
              />
            </div>

          </div>
        </PageShell>
      </section>

      {/* Grid: What to Expect from Our Service */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/40 border-y border-slate-200/60">
        <PageShell>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              Comprehensive Care
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
              What to Expect from Our Meal Preparation Service
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mealExpectations.map((item) => (
              <SectionCard key={item.title} title={item.title}>
                <p className="text-sm leading-relaxed text-slate-600 mt-1">
                  {item.body}
                </p>
              </SectionCard>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Interactive FAQ Accordion Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          <SectionHeading
            centered
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="brand-shadow bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-display text-base sm:text-lg font-semibold text-brand-ink transition hover:text-brand-blue"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-slate-50 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 py-5 text-sm sm:text-base leading-relaxed text-slate-600 bg-slate-50/50">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* Bottom Conversion Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20 bg-background/50 border-t border-slate-200/60">
        <PageShell>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              centered
              eyebrow="Purpose-Driven Home Care Services"
              title="Are you looking for reliable home care services?"
              description="Contact us now to see how we can help you navigate personalized care options cleanly."
            />
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-[#0c5a99]"
              >
                Get Started Today
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-blue text-[10px]">
                  →
                </span>
              </Link>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}