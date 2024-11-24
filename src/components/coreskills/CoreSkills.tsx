import Heading from "../heading/Heading";

export default function CoreSkills() {
    return (
        <div>
            <Heading title="CORE SKILLS" />
            <ul className="list-disc text-slate-600 space-y-2 ml-10">
                <li><b>Code:</b> TypeScript, Node.js, Python, C#, Go, Bash/Shell, SQL</li>
                <li><b>Front-end:</b> Angular, React, Highcharts, HTML, CSS</li>
                <li><b>Data:</b> MySQL, SQL Server, PostgreSQL, ClickHouse, Elasticsearch</li>
                <li><b>DevOps:</b> AWS, Docker, CI/CD, Observability, Site Reliability</li>
            </ul>
        </div>
    );
}