import React from 'react';

export const AboutFirst = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
    <div className="bg-img w-full py-28 bg-cover bg-no-repeat">
        <div className="container mx-auto">
            <h3 className="text-center text-4xl font-semibold mb-3">Lorem ipsum</h3>
            <p className="mx-auto max-w-3xl text-gray-700 text-center">Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna
                adipiscing diam. Dis velit nam vitae hendrerit at egestas. Tellus velit turpis at sed lorem vitae
                sed.
            </p>
            <div className="text-center mt-4 pt-2">
                <button className="pushable cursor-pointer bg-[#231754] rounded-xl border-0 p-0 ">
                    <span
                        className="front py-2.5 px-[52px] bg-[#3C278D]  rounded-xl block text-white border-2 border-transparent hover:border-[#231754] hover:bg-white hover:text-[#231754]">
                        Button
                    </span>
                </button>
            </div>
        </div>
    </div>
</section>
  );
}