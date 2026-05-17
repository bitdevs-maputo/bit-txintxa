"use client";

import { ArrowLeftRight } from "lucide-react";
import { useTranslations } from "next-intl";



export default function Home() {

  const t = useTranslations("HomePage");

 

 
  return (
    <main className="min-h-screen bg-[#f3efeb] dark:bg-black transition-colors duration-500">
      <section className="relative overflow-hidden">
       
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ff6a0020,transparent_30%),radial-gradient(circle_at_top_right,#ff6a0020,transparent_25%)] dark:bg-[radial-gradient(circle_at_bottom_left,#ff6a0045,transparent_30%),radial-gradient(circle_at_top_right,#ff6a0020,transparent_25%)]" />

    

        <div className="w-full">

          <div className="bg-primary text-white shadow-[var(--shadow-orange)]relative   shadow-2xl dark:border-white/10 dark:bg-[#050505] dark:text-white">

            <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_center,#ff6a0018,transparent_55%)] dark:bg-[radial-gradient(circle_at_center,#ff6a0030,transparent_60%)]" />



        
            <div className="relative z-10 flex min-h-[820px] flex items-center justify-center px-6 pb-36 pt-12 text-center md:px-10">

            <div className="img md:w-1/2 h-10 py-10 order-1 md:order-2">
            </div>

            <div className="content md:w-1/2 py-10 flex flex-col justify-start items-start order-2 md:order-1">
              <h1 className="text-3xl font-bold text-start">{t('first')}</h1>
              <h1 className="text-3xl font-bold text-start">{t('second')}</h1>
              <p className="text-sm text-start">{t('call-atention')}</p>
            </div>
              





              <div className="absolute hidden flex-col gap-2 text-[rgba(245,240,232,0.5)] border border-[rgba(255,255,255,0.08)] text-sm text-center items-start justify-start px-3 py-2  rounded-md">

                <div className=" flex gap-2 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"></div>
                  <span className="flex gap-2 text-[rgba(245,240,232,0.5)] text-sm text-center items-center">BTC <ArrowLeftRight size={14}/> MZN</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-sm text-center text-green-500  items-center">+10%</span>
                  <span className="flex items-end">
                    <span className="text-orange-400">{`4 985 254,99`}</span>
                    <span className="text-[10px] py-px pl-[2px]">MZN</span>
                  </span>
                </div>
                
              </div>



            </div>
          </div>
        </div>
      </section>
    </main>
  );
}