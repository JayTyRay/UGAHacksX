'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="navbar bg-neutral p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-primary btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a className={"text-primary"} onClick={() => router.push('/pages/home')}>Homepage</a></li>
            <li><a className={"text-primary"} onClick={() => router.push('/pages/about')}>About</a></li>
            <li><a className={"text-primary"} onClick={() => router.push('/pages/profile')}>Profile</a></li>
            <li><a className={"text-primary"} onClick={() => router.push('/pages/project')}>Project</a></li>

          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <h1><a className="btn btn-ghost text-5xl text-white" onClick={() => router.push('/pages/home')}>Genesis</a></h1>
      </div>
      <div className="navbar-end space-x-4">
        <button className='btn btn-outline btn-secondary' onClick={() => router.push('/pages/signup')}>Signup</button>
        <button className="btn btn-circle btn-primary" onClick={() => router.push('/pages/projectbrowser')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="btn btn-circle btn-primary">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;