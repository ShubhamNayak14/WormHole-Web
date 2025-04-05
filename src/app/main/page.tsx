"use client"

import React from 'react'

import dynamic from 'next/dynamic';
const RoleSelection = dynamic(() => import('./RoleSelection'), {
  ssr: false, // Only load on client side
  loading: () => <p>Loading...</p> // Optional loading component
});


const page = () => {
  return (
    <RoleSelection/>
  );
};

export default page