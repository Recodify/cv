import React from 'react';


export function TechnologyBadge({ name }: Readonly<{ name: string; }>) {
    return (
        <span className="inline-block bg-slate-800 text-yellow-400 text-xs px-3 py-1 rounded">
            {name}
        </span>
    );
}
