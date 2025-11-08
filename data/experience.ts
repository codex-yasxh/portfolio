export type ExperienceItem = {
  company: string;
  role: string;
  duration: string; // e.g., Jan 2024 – Jun 2024
  project: {
    name: string;
    href: string; // redirects to Play Store / Drive / GitHub / Case Study
    external?: boolean;
  };
  features: string[]; // bullet points of contributions / features
};

export const experience: ExperienceItem[] = [
  {
    company: "Udaan IT",
    role: "Flutter Developer",
    duration: "September 2025 – Present",
    project: {
      name: "MyTrands",
      href: "https://play.google.com/store/apps/details?id=com.mytrands.mvvm&pcampaignid=web_share", // change to Play Store / Drive / GitHub when ready
      external: true,
    },
    features: [
      "Resolved major UI defects across core flows, stabilizing releases and improving user trust",
      "Delivered a full Specifications module end-to-end across customer-to-seller journeys (creation, validation, fulfillment)",
      "Shipped a Demand feature that streamlined ordering and availability logic across the app",
      "Improved app performance by ~15% (faster startup, smoother navigation, fewer dropped frames)",
      "Elevated overall UI/UX with cleaner information architecture, consistent patterns, and accessibility-friendly touch targets",
    ],
  },
];
