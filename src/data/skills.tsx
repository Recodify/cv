import { SkillGroup } from "@/types/skills"
import {
  Code2,
  Database,
  Monitor,
  MessageSquare,
  GitBranch,
  Rocket,
  Building,
  ClipboardList,
  Shield,
  Target,
  Cloud,
  Users,
  Terminal,
  Code,
  CloudCog,
  CloudAlert,
  Cloudy,
  UserRoundPlus,
  GraduationCap,
  ContactRound,
  ChevronLast,
  Zap,
  Lightbulb,
  Heart,
  Map
} from "lucide-react";

import { FiDollarSign } from "react-icons/fi";
import { FaLaptopHouse } from "react-icons/fa";
import { RiRemoteControlLine, RiUserVoiceLine } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import { IoPricetagOutline, IoPricetagsOutline } from "react-icons/io5";
import { SiDocker, SiWindows, SiMlflow } from 'react-icons/si';
import { FaHouse } from "react-icons/fa6";
import { TbCloudDollar } from "react-icons/tb";

export const skills: SkillGroup[] = [
  {
    category: 'technology',
    title: 'Technology',
    forcePageBreak: true,
    subGroups: [
      {
        title: 'Code',
        skills: [
          { name: 'TypeScript', icon: <Code2 /> },
          { name: 'Javascript', icon: <Code2 /> },
          { name: 'C#', icon: <Code2 /> },
          { name: 'Python', icon: <Code2 /> },
          { name: 'Go', icon: <Code2 /> },
          { name: 'SQL', icon: <Code /> },
          { name: 'Bash', icon: <ChevronLast /> },
          { name: 'Powershell', icon: <ChevronLast /> },
        ]
      },
      {
        title: 'Frontend',
        skills: [
          { name: 'HTML', icon: <Monitor /> },
          { name: 'CSS', icon: <Monitor /> },
          { name: 'Angular', icon: <Monitor /> },
          { name: 'React', icon: <Monitor /> },
        ]
      },
      {
        title: 'Database',
        skills: [
          { name: 'MySQL', icon: <Database /> },
          { name: 'MS SQL Server', icon: <Database /> },
          { name: 'PostgreSQL', icon: <Database /> },
          { name: 'Clickhouse', icon: <Database /> },
          { name: 'Elasticsearch', icon: <Database /> },
          { name: 'Redis', icon: <Database /> },
        ]
      },
      {
        title: 'Messaging',
        skills: [
          { name: 'RabbitMQ', icon: <MessageSquare /> },
          { name: 'MQTT', icon: <MessageSquare /> },
        ]
      },
      {
        title: 'Cloud & DevOps',
        skills: [
          { name: 'AWS', icon: <Cloud /> },
          { name: 'Azure', icon: <Cloud /> },
          { name: 'CI + CD', icon: <CloudCog /> },
          { name: 'Docker', icon: <SiDocker size={24} /> },
          { name: 'Serverless', icon: <Cloud /> },
          { name: 'Observability', icon: <CloudAlert /> },
          { name: 'Performance', icon: <Zap /> },
          { name: 'Terraform', icon: <Cloudy /> },
          { name: 'Cloudformation', icon: <Cloudy /> },
        ]
      },
      {
        title: 'Operating Systems',
        skills: [
          { name: 'Linux', icon: <Terminal size={20} /> },
          { name: 'Windows', icon: <SiWindows /> },
        ]
      },
    ]
  },
  {
    category: 'business',
    title: 'Business',
    forcePageBreak: true,
    skills: [
      { name: 'Start-ups', icon: <Lightbulb /> },
      { name: 'Scale-ups', icon: <Rocket /> },
      { name: 'Investment', icon: <FiDollarSign size={24} /> },
      { name: 'Due Diligence', icon: <ClipboardList /> },
      { name: 'Company Exits', icon: <RxExit /> },
      { name: 'Compliance', icon: <Shield /> },
      { name: 'Roadmaps', icon: <Map /> },
      { name: 'Lean', icon: <SiMlflow size={24} /> },
      { name: 'Pre-sales', icon: <IoPricetagOutline size={24} /> },
      { name: 'Sales', icon: <IoPricetagsOutline size={24} /> },
      { name: 'Cost Optimisation', icon: <TbCloudDollar size={24} /> },

    ]
  },
  {
    category: 'industry',
    title: 'Industry',
    skills: [
      { name: 'Proptech', icon: <FaLaptopHouse size={24} /> },
      { name: 'Housing', icon: <FaHouse size={24} /> },
      { name: 'IoT', icon: <RiRemoteControlLine size={24} /> },
      { name: 'Marketing', icon: <Target /> },
      { name: 'Loyalty', icon: <Heart /> },
      { name: 'SaaS', icon: <Cloud /> },
      { name: 'Local Government', icon: <Building /> },
      { name: 'Insurance', icon: <Shield /> },

    ]
  },
  {
    category: 'team',
    title: 'Team',
    forcePageBreak: true,
    skills: [
      { name: 'Building Teams', icon: <UserRoundPlus /> },
      { name: 'Mentoring', icon: <GraduationCap /> },
      { name: 'Agile / Scrum', icon: <Users /> },
      { name: 'Process Design', icon: <GitBranch /> },
      { name: 'Board Collaboration', icon: < RiUserVoiceLine size={24} /> },
      { name: 'Managing Remote Teams', icon: <ContactRound /> },
    ]
  }
];
