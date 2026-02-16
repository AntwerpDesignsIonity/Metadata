/**
 * IONITY (ANTWERP DESIGNS) - MASTER CONFIGURATION
 * Context: IoT, AI, Cloud, Hardware, Power-Saving Units
 * Author: Johan Wilhelm van Antwerp
 * Updated: 2026-02-16
 */

const IonityConfig = {
  identity: {
    brandName: "Ionity",
    legalName: "Ionity (Pty) Ltd",
    author: "Johan Wilhelm van Antwerp",
    alias: ["Antwerp Designs", "AEDI"],
    ids: {
      registry: "9003135105083",
      orcid: "0009-0005-7181-0347",
      policy: "AED 986",
      license: "AED 900"
    }
  },

  system: {
    version: "v2026.1",
    status: "Active",
    environment: "Production",
    globalIntent: "South Africa",
    coordinates: {
      lat: -25.7479,
      lon: 28.2293
    }
  },

  capabilities: [
    "IoT (Internet of Things)",
    "AI (Artificial Intelligence)",
    "Edge Computing",
    "Power-Saving Hardware Units",
    "Cloud Architecture",
    "Cyber Security & Encryption",
    "SCADA / PdM / CMS / DAQ"
  ],

  urls: {
    primary: "https://www.ionity.today/",
    profile: "https://www.ionity.world/",
    api: "https://antwerpdesignsionity.github.io/Metadata/ionity-api.json",
    github: "https://github.com/AntwerpDesignsIonity",
    linkedin: "https://www.linkedin.com/in/ionity"
  },

  contact: {
    email: "johan@ionity.today",
    ai_support: "ai@ionity.today",
    phone: "+27 64 699 9877"
  },

  // Helper to generate SEO tags programmatically
  getSeoData: function() {
    return {
      title: "Ionity | AI, IoT & Power-Saving Hardware Ecosystems",
      description: "Ionity designs secure Cloud, Edge, AI, and IoT ecosystems. We build power-saving hardware units and SCADA systems for global automation.",
      keywords: "Ionity, Antwerp Designs, IoT, AI, Power Saving, South Africa"
    };
  }
};

// Export for Node.js or ES6 usage
if (typeof module !== 'undefined') module.exports = IonityConfig;
