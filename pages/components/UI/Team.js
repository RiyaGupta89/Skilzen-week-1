import React from 'react'

export default function Team({ src, title }) {
    return (
        <div className="mr-12">
            <img src={src} alt="team" className="ml-5 mb-3 w-16 h-16" />
            <span className="text-primary text-base">{title}</span>
        </div>
    )
}
