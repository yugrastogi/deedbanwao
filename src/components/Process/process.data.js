import {
  FaWhatsapp,
  FaClipboardList,
  FaFileSignature,
  FaBuilding,
} from "react-icons/fa";

export const processSteps = [
  {
    id: 1,
    label: "Start With A Conversation",
    title: "Tell Us Your Requirement",
    description:
      "Share your document requirement with us through WhatsApp or a call. We first understand what you need and the nature of your property matter.",
    icon: FaWhatsapp,
  },

  {
    id: 2,
    label: "Understand The Requirement",
    title: "Receive a Rough Estimate",
    description:
      "Once we understand your requirement, we provide a clear rough estimate and explain the next steps involved in preparing your documentation.",
    icon: FaClipboardList,
  },

  {
    id: 3,
    label: "Prepare & Review",
    title: "Share Documents & Approve Draft",
    description:
      "Share the required ID and property papers. We prepare the draft and share it with you for review and approval before moving ahead.",
    icon: FaFileSignature,
  },

  {
    id: 4,
    label: "Final Stage",
    title: "Registry Process",
    description:
      "Once the documentation is finalised, we guide you through the registration process and the requirements for the registration day.",
    icon: FaBuilding,
  },
];