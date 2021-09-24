import React from 'react'

export default function Timeline({year, title}) {
    return (
        <div className="flex-1">
        <div className="flex items-center">
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.7784" cy="12.7784" r="12.7784" fill="#F26A7E"/>
</svg>
{year !== '2021'?
<svg width="195" height="3" viewBox="0 0 195 3" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-6">
<line opacity="0.4" x1="1.17815" y1="1.71346" x2="193.919" y2="1.71346" stroke="#F26A7E" stroke-width="2.12973" stroke-linecap="round" stroke-dasharray="2.13 8.52"/>
</svg>
:
""
}
</div>
<div className="mt-4">
<span className="text-secondary text-xl font-semibold">{year}</span>

<p className="text-primary text-base w-11/12 mt-1">{title}</p>
</div>
        </div>
    )
}
