import type { ExperienceRole } from '../../types/experience';
import Heading from '../heading/Heading';
import { ExperienceCard } from './ExperienceCard';

export const EXPERIENCE_ROLES: ExperienceRole[] = [
    {
      id: 'maya-tyres-2024',
      title: "Consultant",
      company: "Maya Tyres",
      website: "trustmaya.com",
      introduction: "Consultancy engagement to advise a an early stage startup.",
      period: {
        start: "May 2024",
        end: "Jun 2024"
      },
      technologies: [
        "Go", "Clickhouse", "Terraform", "Docker", "React", "Redpanda"
      ],
      achievements: [
        {
          id: 'maya-1',
          text: "{{Developed a proof-of-concept architecture}} for handling high-volume time-series data, improving page load times and storage efficiency."
        },
        {
          id: 'maya-2',
          text: "{{Delivered real-time data exploration tools}} using React and Highcharts."
        }
      ]
    },
    {
      id: 'speakeasy-2023',
      bumpdown: 5,
      title: "Developer",
      company: "Speakeasy",
      website: "speakeasyapi.dev",
      introduction: "Consultancy engagement to advise a an early stage startup.",
      period: {
        start: "Dec 2023",
        end: "Feb 2024"
      },
      technologies: [
        "AWS", "Next.js", "React", "Aurora"
      ],
      achievements: [
        {
          id: 'speakeasy-1',
          text: "{{Conducted AWS cost optimisation}}, securing significant savings and previously denied AWS Activate credits."
        },
        {
          id: 'speakeasy-2',
          text: "{{Reviewed and advised on MVP architecture}}, AWS strategy & technologies and alignment of data model with the product vision."
        }
      ]
    },
    {
      id: 'homelink-2008',
      forcePageBreak: true,
      title: "Founder/CTO/Dev",
      company: "HomeLink",
      website: "homelink.co",
      introduction: "Hands-on founder, CTO and Principal Developer of an IoT startup/scale-up Led the company from bootstrap to exit.",
      period: {
        start: "Nov 2008",
        end: "Sep 2023"
      },
      technologies: [
        "TypeScript", "Node.js", "Python", "C#", ".NET Core", "AWS",
        "Serverless", "IoT", "Elasticsearch", "MySQL", "Clickhouse",
        "Docker", "RabbitMQ", "Angular", "Highcharts"
      ],
      achievements: [
        {
          id: 'homelink-0',
          text: "{{Core contributor}} in scaling the business from pre-revenue to a multi-million-pound acquisition."
        },
        {
          id: 'homelink-1',
          text: "{{Principal developer}} transforming the product from PowerPoint mockups, to a scalable enterprise-grade solution managing over 300k IoT devices and processing 100M+ daily data points."
        },
        {
          id: 'homelink-2',
          text: "{{Developed a comprehensive cloud native platform}}: web portal, mobile app, ML insights, API integrations, data ingress pipelines, IoT hardware and device connectivity."
        },
        {
          id: 'homelink-3',
          text: "{{Productionised and deployed machine learning models}}, enabling predictive maintenance and real-time analytics, reducing maintenance costs for customers."
        },
        {
          id: 'homelink-4',
          text: "{{Scaled cloud infrastructure with AWS}} for cost efficiency, fault tolerance, and high availability."
        },
        {
          id: 'homelink-5',
          text: "{{Mentored and expanded the engineering team}} to 11 developers while remaining predominantly hands-on."
        }
      ]
    },
    {
      id: 'civica-2017',
      title: "Senior Developer",
      company: "Civica",
      website: "civica.com",
      introduction: "Senior Developer for a large public sector financial management system, delivered as part of a AUD200M (£124M) contract.",
      period: {
        start: "Sep 2017",
        end: "Nov 2018"
      },
      technologies: [
        "C#", ".NET Core", "Azure DevOps", "SQL Server"
      ],
      achievements: [
        {
          id: 'civica-1',
          text: "{{Lead developer of core system components}}, including ETL pipelines, payment processing and Court system integration."
        },
        {
          id: 'civica-2',
          text: "{{Solved cross-region technical challenges}} by coordinating with a distributed team of 200+ developers across three countries."
        },
        {
          id: 'civica-3',
          text: "{{Optimised performance}} to overcome processing bottlenecks.",
          hidden: true
        }
      ]
    },
    {
      id: 'inty-2016',
      title: "Senior Developer",
      forcePageBreak: false,
      bumpdown: 5,
      company: "intY",
      website: "inty.com",
      introduction: "",
      period: {
        start: "Feb 2016",
        end: "Sep 2017"
      },
      technologies: [
        "C#", ".NET", "ASP.NET", "TypeScript", "Azure", "PowerBI", "React"
      ],
      achievements: [
        {
          id: 'inty-1',
          text: "{{Developed an Azure provisioning platform}} that became the company's largest revenue stream."
        },
        {
          id: 'inty-2',
          text: "{{Boosted partner signups}} by 900% through a React-based customer acquisition funnel."
        },
        {
          id: 'inty-3',
          text: "{{Provided actionable data driven insights}} via PowerBI dashboards."
        }
      ]
    },
    {
      id: 'collinson-2013',
      title: "Tech Lead, Architect",
      company: "Collinson",
      website: "www.collinsongroup.com",
      introduction: "",
      period: {
        start: "Aug 2013",
        end: "Feb 2016"
      },
      technologies: [
        "C#", ".NET", "ASP.NET", "SQL Server", "RabbitMQ", "Redis",
        "CouchDB", "Node.js", "Azure", "Docker", "ElasticSearch"
      ],
      achievements: [
        {
          id: 'collinson-1',
          text: "{{Designed and implemented a global loyalty platform}} handling 25M+ daily transactions and 50m active users."
        },
        {
          id: 'collinson-2',
          text: "{{Delivered high availability}} with an SLA of 99.95% up-time.",
          hidden: true
        },
        {
          id: 'collinson-3',
          text: "{{Achieved low-latency transaction processing}} while overcoming the significant performance challenges posed by a user-configurable rules engine."
        }
      ]
    }
  ];

export default function Experience() {
  return (
    <div className="print:mt-10">
      <Heading title="EXPERIENCE" />
      <div className="space-y-12 print:space-y-3">
        {EXPERIENCE_ROLES.map(role => (
          <ExperienceCard key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
}