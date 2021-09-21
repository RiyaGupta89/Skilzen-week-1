import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <div><img src="/logo.svg" alt="Hiring Bird Logo" /></div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Post an Internship</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Find Internships</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Sign In</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Sign Up</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
