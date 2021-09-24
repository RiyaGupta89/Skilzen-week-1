import React from 'react'
import Timeline from './UI/Timeline'

export default function Achievement() {
    return (
        <div className="bg-background w-screen h-auto py-16 px-36 ">
            <div className="flex  justify-between">



            <div>
                <h1 className="text-6xl font-bold text-primary">Our 3 years of <br/> achievements</h1>
                <p className="text-secondary text-2xl font-normal mt-2">With our super powers we have reached this</p>
                </div>



                <div className="flex w-1/2 items-center">

                <div className="flex-auto ml-36">
                <div className="flex flex-col mb-8">
                    <span className="text-primary font-bold text-3xl">10,000+</span>
                    <span className="text-primary text-base">Sessions per day</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-primary font-bold text-3xl">500+</span>
                    <span className="text-primary text-base">Clients</span>
                </div>
                </div>

                <div className="flex-auto ml-36">
                    <div className="flex flex-col mb-8">
                    <span className="text-primary font-bold text-3xl">2 Million</span>
                    <span className="text-primary text-base">Users</span>
                    </div>
                    <div className="flex flex-col">
                    <span className="text-primary font-bold text-3xl">140</span>
                    <span className="text-primary text-base">Countries</span>
                    </div>
                </div>



                </div>




            </div>



            <h1 className="text-5xl font-bold text-primary mt-16">Our Timeline</h1>
        <div className="flex my-10">
            <Timeline year="Started 2013" title="Turn your idea from concept to MVP"/>
            <Timeline year="2015" title="Sketch out the product to align the user needs"/>
            <Timeline year="2016" title="Convert the designs into a live application"/>
            <Timeline year="2021" title="Launching the application to the market"/>
            </div>
        </div>
    )
}
