import svg1 from "./assets/green-1.svg?raw";
import svg2 from "./assets/green-2.svg?raw";
import svg3 from "./assets/green-3.svg?raw";
import svg4 from "./assets/green-4.svg?raw";

export const getInvolvedSection = {
  title: "Liên hệ với chúng tôi",
  subheading1_1: "Chúng tôi",
  subheading1_2: "sẵn sàng lắng nghe và giúp đỡ bạn",
  initiatives: [
    {
      title: "Community Outreach",
      description:
        "Discover our community initiatives aimed at promoting awareness and education on sustainable living. Join us in creating a positive impact together.",
      visual: svg2,
    },
    {
      title: "Green Events",
      description:
        "Participate in our upcoming green events. From tree-planting drives to eco-friendly workshops, be a part of the movement towards a healthier planet.",
      visual: svg4,
    },
    {
      title: "Partnerships for Sustainability",
      description:
        "Explore our partnerships with organizations dedicated to environmental conservation. Learn how you can contribute to sustainable practices through collaboration.",
      visual: svg3,
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Take Action Today for a Greener Tomorrow",
  button: "Join Our Initiatives",
};
