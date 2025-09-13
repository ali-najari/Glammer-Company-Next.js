import RegularCleaning from "../../../public/services/service-item/RegularCleaning.png";
import DeepCleaning from "../../../public/services/service-item/DeepCleaning.png";
import MoveInOutCleaning from "../../../public/services/service-item/MoveInOut.png";
import RemovalStorageCleaning from "../../../public/services/service-item/Removal&Storage.png";
import EcoCleaning from "../../../public/services/service-item/EcoCleaning.png";
import RenovationCleaning from "../../../public/services/service-item/RenovationCleaning.png";

// 🔹 تصاویر جدید
import BasicClean from "../../../public/landingPage/tranparency-pricing/basicClean.png";
import WeeklyRefresh from "../../../public/landingPage/tranparency-pricing/weeklyRefresh.png";
import DeluxeClean from "../../../public/landingPage/tranparency-pricing/deluxeClean.png";

import { StaticImageData } from "next/image";

export interface IService {
  slug: string;
  title: string;
  price: string;
  image: StaticImageData;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: IService[] = [
  // --- Regular Cleaning ---
  {
    slug: "regular-cleaning",
    title: "Regular Cleaning",
    price: "$120.00",
    image: RegularCleaning,
    heroTitle: "Regular Cleaning Service",
    heroSubtitle: "Keep your home sparkling clean with our routine cleaning",
    description:
      "Our Regular Cleaning service is designed to maintain the cleanliness of your home on a recurring basis. From dusting and vacuuming to kitchen and bathroom maintenance, we ensure your space stays fresh and comfortable.",
    features: [
      "Dusting all surfaces",
      "Vacuuming carpets and floors",
      "Mopping hard floors",
      "Bathroom cleaning",
      "Kitchen surface cleaning",
      "General tidying up",
    ],
    faqs: [
      {
        question: "How often should I book Regular Cleaning?",
        answer:
          "Most clients book it weekly or bi-weekly depending on their needs.",
      },
      {
        question: "Do I need to provide cleaning supplies?",
        answer:
          "No, our team brings professional cleaning products and equipment.",
      },
    ],
  },

  // --- Deep Cleaning ---
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    price: "$149.00",
    image: DeepCleaning,
    heroTitle: "Deep Cleaning Service",
    heroSubtitle: "For a thorough top-to-bottom clean of your home",
    description:
      "Our Deep Cleaning service covers every corner of your home, ensuring hidden dirt and grime are removed. Perfect for seasonal cleaning or preparing for guests.",
    features: [
      "Detailed kitchen cleaning",
      "Inside oven and fridge",
      "Bathroom descaling",
      "Cleaning behind furniture",
      "Window interiors",
      "Floor scrubbing",
    ],
    faqs: [
      {
        question: "What’s the difference between deep and regular cleaning?",
        answer:
          "Deep cleaning is more detailed and covers hidden or hard-to-reach areas not included in regular cleaning.",
      },
      {
        question: "How long does a deep cleaning take?",
        answer: "It usually takes twice as long as a regular cleaning session.",
      },
    ],
  },

  // --- Move-in / Move-out Cleaning ---
  {
    slug: "move-in-out",
    title: "Move-in / Move-out",
    price: "$200.00",
    image: MoveInOutCleaning,
    heroTitle: "Move-in / Move-out Cleaning",
    heroSubtitle: "Make moving stress-free with a spotless home",
    description:
      "Our Move-in / Move-out Cleaning service ensures that your new home is fresh and welcoming, or that you leave your old one in pristine condition. Ideal for tenants, landlords, and real estate showings.",
    features: [
      "Full kitchen & bathroom sanitization",
      "Cabinets and drawers cleaned inside",
      "Appliances deep cleaned",
      "Carpet stain removal",
      "Windows and frames wiped",
      "Walls spot-cleaned",
    ],
    faqs: [
      {
        question: "Do you cover both unfurnished and furnished homes?",
        answer: "Yes, we tailor our cleaning depending on the property type.",
      },
      {
        question: "Can I book same-day Move-out cleaning?",
        answer:
          "Same-day service depends on availability. Early booking is recommended.",
      },
    ],
  },

  // --- Removal & Storage Cleaning ---
  {
    slug: "removal-storage",
    title: "Removal & Storage",
    price: "$230.00",
    image: RemovalStorageCleaning,
    heroTitle: "Removal & Storage Cleaning",
    heroSubtitle: "Keep your storage units and removal items clean and safe",
    description:
      "Our Removal & Storage Cleaning service is perfect for those who need their stored items cleaned before moving them into a new space. We clean furniture, boxes, and storage units to eliminate dust and allergens.",
    features: [
      "Dust and dirt removal from stored items",
      "Furniture wiping and polishing",
      "Sanitization of storage units",
      "Packing material disposal",
      "Odor removal",
    ],
    faqs: [
      {
        question: "Do you provide packing services?",
        answer: "No, but we can recommend trusted packing partners if needed.",
      },
      {
        question: "Can you handle large storage warehouses?",
        answer: "Yes, we can scale our team depending on project size.",
      },
    ],
  },

  // --- Eco Cleaning ---
  {
    slug: "eco-cleaning",
    title: "Eco Cleaning",
    price: "$90.00",
    image: EcoCleaning,
    heroTitle: "Eco-Friendly Cleaning",
    heroSubtitle: "Clean your home while protecting the environment",
    description:
      "Eco Cleaning is a safe and sustainable cleaning option. We use non-toxic, biodegradable products that are safe for your family, pets, and the environment.",
    features: [
      "Non-toxic cleaning supplies",
      "Safe for children and pets",
      "Biodegradable products",
      "Waste reduction methods",
      "Allergy-friendly practices",
    ],
    faqs: [
      {
        question: "Are your eco products effective against germs?",
        answer:
          "Yes, our eco products are certified and tested for antibacterial cleaning.",
      },
      {
        question: "Can I request specific eco brands?",
        answer: "Yes, you can let us know your preferences before booking.",
      },
    ],
  },

  // --- Renovation Cleaning ---
  {
    slug: "renovation-cleaning",
    title: "Renovation Cleaning",
    price: "$160.00",
    image: RenovationCleaning,
    heroTitle: "Post-Renovation Cleaning",
    heroSubtitle: "Remove dust and debris after your home makeover",
    description:
      "Our Renovation Cleaning service is designed to tackle heavy dust, debris, and construction residues. We’ll make sure your newly renovated home is spotless and ready to enjoy.",
    features: [
      "Dust removal from all surfaces",
      "Paint & adhesive spot cleaning",
      "Window and glass polish",
      "Floor washing and vacuuming",
      "Air vent dusting",
    ],
    faqs: [
      {
        question: "How soon after renovation can you start cleaning?",
        answer:
          "We recommend at least 24–48 hours after construction ends for best results.",
      },
      {
        question: "Do you handle hazardous waste?",
        answer:
          "No, hazardous materials must be removed by specialized contractors.",
      },
    ],
  },

  // --- Basic Clean  ---
  {
    slug: "basic-clean",
    title: "Basic Clean",
    price: "$99.00",
    image: BasicClean,
    heroTitle: "Basic Cleaning Service",
    heroSubtitle: "Perfect for light cleaning and upkeep",
    description:
      "Our Basic Clean service is ideal for quick touch-ups and maintaining a tidy space. Great for busy people who need light but effective cleaning.",
    features: [
      "Quick dusting and vacuuming",
      "Bathroom wipe-down",
      "Kitchen counters cleaned",
      "Trash removal",
      "General straightening up",
    ],
    faqs: [
      {
        question: "How long does a Basic Clean take?",
        answer: "Usually around 1–2 hours depending on home size.",
      },
      {
        question: "Is this good for first-time clients?",
        answer:
          "Yes, it's a simple way to try our services before booking deeper cleans.",
      },
    ],
  },

  // --- Weekly Refresh  ---
  {
    slug: "weekly-refresh",
    title: "Weekly Refresh",
    price: "$129.00/mo",
    image: WeeklyRefresh,
    heroTitle: "Weekly Refresh Plan",
    heroSubtitle: "Consistent cleaning for peace of mind",
    description:
      "Our Weekly Refresh service is a subscription-based cleaning plan to keep your home pristine week after week. Perfect for families and professionals.",
    features: [
      "Scheduled weekly cleaning",
      "Dusting & vacuuming",
      "Kitchen & bathroom upkeep",
      "Floor care",
      "Flexible scheduling",
    ],
    faqs: [
      {
        question: "Can I pause my weekly plan?",
        answer: "Yes, you can pause or reschedule anytime with notice.",
      },
      {
        question: "Is it cheaper than one-time cleaning?",
        answer:
          "Yes, weekly refresh offers discounted rates compared to one-time services.",
      },
    ],
  },

  // --- Deluxe Clean  ---
  {
    slug: "deluxe-clean",
    title: "Deluxe Clean",
    price: "$219.00",
    image: DeluxeClean,
    heroTitle: "Deluxe Cleaning Service",
    heroSubtitle: "For special occasions and deep refreshes",
    description:
      "Our Deluxe Clean service is the ultimate top-to-bottom cleaning package. Perfect for special occasions, seasonal deep cleans, or when you want your home to shine.",
    features: [
      "Comprehensive cleaning of all rooms",
      "Deep kitchen & bathroom cleaning",
      "Detailed floor and carpet care",
      "Windows and mirrors polished",
      "Extra attention to details",
    ],
    faqs: [
      {
        question: "When should I book Deluxe Clean?",
        answer:
          "Ideal for before/after hosting events, or seasonal refreshes.",
      },
      {
        question: "Does it include window exteriors?",
        answer: "Interiors are included, exteriors can be added on request.",
      },
    ],
  },
];
