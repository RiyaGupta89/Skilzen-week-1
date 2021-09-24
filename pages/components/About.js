import React from 'react'

export default function About() {
    return (
        <>
        <div className="flex mx-36 mt-36 mb-20">
            <div>
                <div className="flex w-80 justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-primary">About us</h1>
                    <img src="line.svg" alt="line" className="w-32 pt-1" />
                </div>
                    <h1 className="text-3xl font-normal text-grayish">Our Mission</h1>
                </div>
                <div className="my-16">
                    <p className="w-8/12 text-lg font-normal text-blackish">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis possimus minima adipisci porro, id aut nemo libero sequi dignissimos delectus accusamus nobis, a blanditiis modi beatae quo perferendis obcaecati iusto consectetur explicabo maiores! Voluptatum.</p>
                </div>
            </div>
            <div className="w-full">
                <img className="w-full h-full" src="/about.png" alt="About Image" />
            </div>
            <div>
        
            <img src="/circle-pink.svg" alt="circle" className="absolute bottom-10 left-16"/>
            <img src="/earphone.svg" alt="earphone" className="absolute bottom-16 left-20"/></div>
            <svg className="absolute bottom-14 left-20" width="37" height="16" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1561 10.7941C35.1561 11.6824 34.768 12.5343 34.0771 13.1624C33.3862 13.7906 32.4492 14.1434 31.4721 14.1434H29.6301C28.6531 14.1434 27.716 13.7906 27.0251 13.1624C26.3343 12.5343 25.9461 11.6824 25.9461 10.7941V5.77019C25.9461 4.88191 26.3343 4.03 27.0251 3.40188C27.716 2.77377 28.6531 2.4209 29.6301 2.4209H35.1561V10.7941ZM2.00024 10.7941C2.00024 11.6824 2.38838 12.5343 3.07926 13.1624C3.77014 13.7906 4.70717 14.1434 5.68423 14.1434H7.52622C8.50327 14.1434 9.44031 13.7906 10.1312 13.1624C10.8221 12.5343 11.2102 11.6824 11.2102 10.7941V5.77019C11.2102 4.88191 10.8221 4.03 10.1312 3.40188C9.44031 2.77377 8.50327 2.4209 7.52622 2.4209H2.00024V10.7941Z" stroke="white" stroke-width="3.68398" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
</>

    )
}
