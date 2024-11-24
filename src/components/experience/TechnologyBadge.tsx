export function TechnologyBadge({ name }: Readonly<{ name: string; }>) {
    return (
        <span className="inline-block bg-slate-800 text-accent text-xs px-3 py-1 rounded">
            {name}
        </span>
    );
}
