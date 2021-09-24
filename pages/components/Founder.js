import React from "react";
import Team from "./UI/Team";

export default function Founder() {
  return (
    <div className="h-auto py-16 px-36 bg-bgColor">
      <div className="flex">
        <div className="flex flex-col w-2/3">
          <h1 className="text-primary text-5xl font-bold mb-12">
            Founder's Note
          </h1>

          <div className="flex items-start">
            <img src="quote.svg" alt="quote" />
            <div className="ml-4">
              <p className="text-primary text-xl w-full mt-2">
                We had an incredible experience working with Skilzen and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the product concept so
                quickly. It acted as a catalyst to take our design to the next
                level and get more eyes on our product. Our team is so grateful
                for the wonderful improvements they made and their ability to
                get familiar with the product concept so they made and their ability to get familiar with the product concept so quickly to get familiar with the product concept so quickly.
              </p>
              <h3 className="text-secondary text-base mt-7 font-semibold">
                Full Name
              </h3>
              <span className="text-primary text-sm">CEO at Skilzen</span>
            </div>
          </div>
        </div>
        <div className="pl-6 w-80 h-1/6">
          <img
            src="founder.png"
            className="h-full w-full "
            alt="founder of skilzen"
          />
        </div>
      </div>
      <div className="flex mt-12 items-end">
        <h2 className="mb-3 text-primary font-semibold text-lg mr-16">
          Our Team
        </h2>
        <Team src="user1.png" title="CEO at Skilzen" />
        <Team src="user2.png" title="Designer at Skilzen" />
        <Team src="user3.png" title="Designer at Skilzen" />
        <Team src="user4.png" title="Designer at Skilzen" />
      </div>
    </div>
  );
}
