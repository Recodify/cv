import { Mail, Phone, MapPin } from 'lucide-react';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";
import { Connection } from "@/types/profile";

export const connection: Connection[] = [
    {
      type: 'phone',
      icon: <Phone className="w-full h-full" />,
      text: "+44 (0)7551545656",
      href: "tel:+447551545656"
    },
    {
      type: 'email',
      icon: <Mail className="w-full h-full" />,
      text: "shilessam@gmail.com",
      href: "mailto:shilessam@gmail.com"
    },
    {
      type: 'location',
      icon: <MapPin className="w-full h-full" />,
      text: "Bristol, UK"
    },
    {
      type: 'linkedin',
      icon: <FaLinkedinIn className="w-full h-full" />,
      text: "mylinkd.in/sam-shiles",
      href: "https://mylinkd.in/sam-shiles"
    },
    {
      type: 'stackoverflow',
      icon: <FaStackOverflow className="w-full h-full" />,
      text: "stk.so/recodify",
      href: "https://stk.so/recodify"
    },
    {
      type: 'github',
      icon: <FiGithub className="w-full h-full" />,
      text: "github.com/recodify",
      href: "https://github.com/recodify"
    }
  ];