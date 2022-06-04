import React from 'react';

import Cover from '../components/AboutUs/cover/Cover';
import SectionTwoAndThree from '../components/AboutUs/streato_problemSolving/SectionTwoAndThree';
import Layout from '../components/common/layout/Layout';
import psImg from '../components/AboutUs/assets/psimg1.png';
import psImg1 from '../components/AboutUs/assets/psimg2.png';
import psImg2 from '../components/AboutUs/assets/psimg3.png';
import psImg3 from '../components/AboutUs/assets/psimg4.png';
import wsImg from '../components/AboutUs/assets/wsimage1.png';
import wsImg1 from '../components/AboutUs/assets/wsimage2.png';
import wsImg2 from '../components/AboutUs/assets/wsimage3.png';

import about1 from '../components/AboutUs/assets/about1.png';
import about2 from '../components/AboutUs/assets/about2.png';
import about3 from '../components/AboutUs/assets/about3.png';


import SuperStar from '../components/AboutUs/SuperStar/SuperStar';
import BuisnessHighlights from '../components/AboutUs/BuisnessHighlights/BuisnessHighlights';
import MarketOppurtunity from '../components/AboutUs/MarketOppurtunity/MarketOppurtunity';
import NewsFeed from '../components/AboutUs/NewsFeed/NewsFeed';
import Founder from '../components/AboutUs/Founder/Founder';

const psData = [
  {
    id: 'ps1',
    title: 'Poor Infrastructure',
    text: 'For decades, vendors have been using poorly designed carts.',
    img: psImg,
  },
  {
    id: 'ps2',
    title: 'Fluctuating Sales',
    text: 'Sales fluctuate based on weather conditions and civic authorities.',
    img: psImg1,
  },
  {
    id: 'ps3',
    title: 'Discoverablity',
    text: 'Lack of avenue and neglect has restricted them to offline sales only.',
    img: psImg2,
  },
  {
    id: 'ps4',
    title: 'Hygiene',
    text: 'Lack of knowledge and training results in poor food handling.',
    img: psImg3,
  },
];

const wsData = [
  {
    id: 'ws1',
    title: 'Infrastructure Leasing',
    text: 'We lease out state-of-art kitchen-grade carts to vendors to run their business.',
    img: about1,
  },
  {
    id: 'ws2',
    title: 'Digital Retail',
    text: 'Vendors are now enabled to sell food online through our proprietory tech platform in no time.',
    img: about2,
  },
  {
    id: 'ws3',
    title: 'Quality Supply Chain',
    text: 'We provide access to quality goods at competitive prices through our network.',
    img: about3,
  },
];

const AboutUs = () => {
  return (
    <>
      <Layout>
        <Cover />
        <SectionTwoAndThree
          data={psData}
          title={'What problem are we solving?'}
        />
        <SectionTwoAndThree
          data={wsData}
          title={'What is Streato?'}
         
        />
        <SuperStar />
        <BuisnessHighlights />
        <MarketOppurtunity />
        <NewsFeed />
        <Founder />
      </Layout>
    </>
  );
};

export default AboutUs;
