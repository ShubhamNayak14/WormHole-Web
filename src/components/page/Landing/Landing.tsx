import React from 'react';
import { FeaturesSection } from './UI/FeaturesSection';
import { Footer } from "@/components/footer";
import { Bgbox } from '@/components/bg-box';
import {Home} from './UI/Home';
import {HowItWorks} from './UI/work';
import FeatureSection from './UI/Feature';


export  const Landing = () => {
  return (
    
    <div className="min-h-screen  bg-white dark:bg-black text-gray-900 ">
      <div>

        <Bgbox/>
        <div className='mx-auto w-[80vw] my-6 '>
          <Home/>
          <FeatureSection/>
          <HowItWorks/>
          <FeaturesSection />
        </div>
      </div>
      <Footer />
    </div>

  );
};