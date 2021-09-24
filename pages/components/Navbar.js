import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="flex items-center w-11/12 justify-between h-16 -mt-2 absolute top-0 right-0 left-0 m-auto pt-2">
            <div className=""><img src="/logo.svg" className="" alt="Hiring Bird Logo" /></div>
            <ul className="flex items-center w-2/5 justify-between pt-5 mr-10">
                <li>
                    <Link href="/">
                        <a className="text-primary font-normal text-base">Post an Internship</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className="text-primary font-normal text-base">Find Internships</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className="text-primary font-normal text-base">Sign In</a>
                    </Link>
                </li>
                <li className="py-1.5 px-6 bg-secondary rounded-sm">
                    <Link href="/">
                        <a className="text-white font-normal text-sm">Sign Up</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
