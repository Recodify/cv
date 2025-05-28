import { ExperienceRole } from "@/features/cv/types/experience";

export const recentRoles: ExperienceRole[] = [
  {
    id: 'maya-tyres-2024',
    title: "Consultant",
    company: "Maya Tyres",
    website: "trustmaya.com",
    introduction: "Consultancy engagement to advise an early stage startup.",
    period: {
      start: "May 2024",
      end: "Jun 2024"
    },
    technologies: [
      "Typescript",
      "Next.js", "React",
      "Aurora",
      "AWS"
    ],
    achievements: [
      {
        id: 'maya-1',
        text: "{{Conducted AWS cost optimisation}}, securing significant savings and previously denied AWS Activate credits."
      },
      {
        id: 'maya-2',
        text: "{{Reviewed and advised on MVP architecture}}, AWS strategy & technologies and alignment of data model with the product vision."
      }
    ]
  },
  {
    id: 'speakeasy-2023',
    bumpdown: 5,
    title: "Developer",
    company: "Speakeasy",
    website: "speakeasyapi.dev",
    introduction: "Short-term engagement to develop a Clickhouse proof-of-concept.",
    period: {
      start: "Dec 2023",
      end: "Feb 2024"
    },
    technologies: [
      "Typescript", "Go",
      "React",
      "PostgreSQL", "Clickhouse",
      "Redpanda",
      "Docker", "GCP", "Terraform"
    ],
    achievements: [
      {
        id: 'speakeasy-1',
        text: "{{Developed a proof-of-concept architecture}} for handling high-volume time-series data, improving page load times and storage efficiency."
      },
      {
        id: 'speakeasy-2',
        text: "{{Delivered real-time data exploration tools}} using React and Highcharts."
      }
    ]
  },
  {
    id: 'homelink-2008',
    title: "Founder/CTO/Dev",
    company: "HomeLink",
    website: "homelink.co",
    introduction: "Hands-on founder, CTO and Principal Developer of an IoT startup/scale-up. Led the company from bootstrap to exit.",
    printBreak: {
      styled: true,
      plain: true
    },
    period: {
      start: "Nov 2018",
      end: "Sep 2023"
    },
    technologies: [
      "TypeScript", "Node.js", "Python", "C#",
      "Angular", "Highcharts",
      "MySQL", "Elasticsearch", "Clickhouse",
      "RabbitMQ",
      "AWS", "Docker", "Serverless", "IoT"
    ],
    achievements: [
      {
        id: 'homelink-0',
        text: "{{Core contributor}} in scaling the business from pre-revenue through product-market fit to multi-£M acquisition."
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
        text: "{{Mentored and expanded the engineering team}} to 11 developers while, remaining predominantly hands-on."
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
      "C#", ".NET Core",
      "SQL Server",
      "Azure DevOps"
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
    bumpdown: 5,
    company: "intY",
    website: "inty.com",
    introduction: "Senior developer for repeat contract, contributed to the evolution of a SaaS cloud software provisioning platform.",
    printBreak: {
      styled: true,
      plain: true
    },
    period: {
      start: "Feb 2016",
      end: "Sep 2017"
    },
    technologies: [
      "C#", ".NET", "TypeScript",
      "React", "ASP.NET", "PowerBI",
      "SQL Server",
      "Azure"
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
    introduction: "Initially served as Tech Lead and later as a hands-on Solution Architect, building a multi-sector loyalty and marketing platform.",
    printBreak: {
      styled: false,
      plain: true
    },
    period: {
      start: "Aug 2013",
      end: "Feb 2016"
    },
    technologies: [
      "C#", ".NET", "Node.js",
      "ASP.NET",
      "SQL Server", "CouchDB", "ElasticSearch",
      "RabbitMQ", "Redis",
      "Azure", "Docker"
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


export const previousRoles: ExperienceRole[] = [
  {
    id: 'inty-2012',
    title: "Senior Developer",
    company: "intY",
    website: "inty.com",
    period: {
      start: "Oct 2012",
      end: "Aug 2013"
    },
    technologies: [
      "C#", ".NET",
      "ASP.NET",
      "SQL Server"
    ]
  },
  {
    id: 'gocompare-2012',
    title: "Senior Developer",
    company: "GoCompare",
    website: "gocompare.com",
    period: {
      start: "Feb 2012",
      end: "Oct 2012"
    }
  },
  {
    id: 'inty-2011',
    title: "Senior Developer",
    company: "intY",
    website: "inty.com",
    period: {
      start: "May 2011",
      end: "Feb 2012"
    },
    technologies: [
      "C#", ".NET",
      "ASP.NET",
      "SQL Server"
    ]
  },
  {
    id: 'fujitsu-2010',
    title: "Developer",
    company: "Fujitsu",
    website: "fujitsu.com",
    period: {
      start: "Jun 2010",
      end: "Jan 2011"
    }
  },
  {
    id: 'tribal-2008',
    title: "Developer",
    company: "Tribal Group",
    website: "tribalgroup.com",
    period: {
      start: "Apr 2008",
      end: "Feb 2010"
    }
  },
  {
    id: 'grafton-2006',
    title: "Developer & Sys Admin",
    company: "Grafton",
    website: "graftonplc.com",
    period: {
      start: "Jun 2006",
      end: "Apr 2008"
    }
  },
  {
    id: 'logica-2004',
    title: "3rd Line Support",
    company: "Logica",
    website: "cgi.com",
    period: {
      start: "Nov 2004",
      end: "Jun 2006"
    }
  },

];