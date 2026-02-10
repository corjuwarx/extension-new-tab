document.addEventListener('DOMContentLoaded', () => {
  // --- ICONS ---
  const iconLibrary = {
    chatgpt: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 7.5a2.5 2.5 0 0 1 5 0V10a2.5 2.5 0 0 1-5 0V7.5z"></path><path d="M18 10v8.5a2.5 2.5 0 0 1-5 0V16"></path><path d="M8.5 7.5a2.5 2.5 0 0 0-5 0V10a2.5 2.5 0 0 0 5 0V7.5z"></path><path d="M6 10v8.5a2.5 2.5 0 0 0 5 0V16"></path><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M22 12h-4"></path><path d="M6 12H2"></path></svg>',
    gemini: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v2.5"></path><path d="M12 18.5V21"></path><path d="M5 5l1.5 1.5"></path><path d="M17.5 17.5L19 19"></path><path d="M3 12h2.5"></path><path d="M18.5 12H21"></path><path d="M5 19l1.5-1.5"></path><path d="M17.5 6.5L19 5"></path></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a2.4 2.4 0 0 1 3-1.7A2.4 2.4 0 0 1 8.5 17a2.4 2.4 0 0 1 3-1.7A2.4 2.4 0 0 1 14.5 17a2.4 2.4 0 0 1 3-1.7A2.4 2.4 0 0 1 20.5 17a2.4 2.4 0 0 1 3-1.7A2.4 2.4 0 0 1 26.5 17"></path><path d="M2.5 7a2.4 2.4 0 0 1 3-1.7A2.4 2.4 0 0 1 8.5 7a2.4 2.4 0 0 1 3-1.7A2.4 2.4 0 0 1 14.5 7a2.4 2.4 0 0 1 3-1.7A2.4 2.4 0 0 1 20.5 7a2.4 2.4 0 0 1 3-1.7A2.4 2.4 0 0 1 26.5 7"></path></svg>',
    brave: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    google: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
    netflix: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2v20l10-20v20"></path></svg>',
    twitch: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-2 13h-4.5L11 18.5V15H5V4h14v11z"></path><path d="M16 7h-2v4h2V7zm-5 0H9v4h2V7z"></path></svg>',
    discord: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M17.5 19c-1.5 1.5-4.5 1.5-4.5 1.5s-3 0-4.5-1.5c-1.5-1.5-2-4.5-2-4.5s0-3 2-4.5c1.5-1.5 4.5-1.5 4.5-1.5s3 0 4.5 1.5c2 1.5 2 4.5 2 4.5s-.5 3-2 4.5z"></path></svg>',
    spotify: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5-1 4-1 4 1 4 1"></path><path d="M7 11s2-1.5 5-1.5 5 1.5 5 1.5"></path><path d="M6 8s2.5-2 6-2 6 2 6 2"></path></svg>',
    reddit: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M17 13c0 2-3 3-3 3s-3-1-3-3"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    settings: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    camera: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>',
    music: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>',
    video: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
    map: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>',
    shopping: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
    cloud: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
    heart: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    message: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .62 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.62A2 2 0 0 1 22 16.92z"></path></svg>',
    book: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
    code: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    terminal: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
    coffee: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>',
    game: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><circle cx="15" cy="13" r="1"></circle><circle cx="18" cy="11" r="1"></circle><rect x="2" y="6" width="20" height="12" rx="2"></rect></svg>',
    globe: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    lock: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
    user: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    tool: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    briefcase: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
    gift: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>',
    truck: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
    plane: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-1.1-.3-2.2.3-2.5 1.3-.3 1.1.2 2.2 1.3 2.5l8.4 1.8L8.3 16.5 4 15l-1.5 1.5 4 1.5L8 22l1.5-1.5-1.5-4.3 4.2-4.2 1.8 8.4c.3 1.1 1.4 1.6 2.5 1.3 1-.3 1.6-1.4 1.3-2.5z"></path></svg>',
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
    upload: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>',
    default: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>'
  };

  // --- STATE ---
  const state = {
    settings: {
      searchProvider: 'google',
      bgType: 'color', // 'color' or 'image'
      bgColor: '#0f172a',
      bgImage: null,
      quickLinks: [
        { id: '1', name: 'YouTube', url: 'https://www.youtube.com', icon: 'youtube' },
        { id: '2', name: 'GitHub', url: 'https://www.github.com', icon: 'github' },
        { id: '3', name: 'Twitter', url: 'https://www.twitter.com', icon: 'twitter' },
        { id: '4', name: 'Instagram', url: 'https://www.instagram.com', icon: 'instagram' }
      ]
    }
  };

  // --- DOM ELEMENTS ---
  const DOMElements = {
    openSettings: document.getElementById('openSettings'),
    settingsModal: document.getElementById('settingsModal'),
    saveSettings: document.getElementById('saveSettings'),
    closeSettings: document.getElementById('closeSettings'),
    iconSelectorModal: document.getElementById('iconSelectorModal'),
    closeIconSelector: document.getElementById('closeIconSelector'),
    iconGrid: document.getElementById('iconGrid'),
    searchForm: document.getElementById('searchForm'),
    searchInput: document.getElementById('searchInput'),
    searchProviderSelect: document.getElementById('searchProvider'),
    quickLinksGrid: document.getElementById('quickLinksGrid'),
    quickLinksList: document.getElementById('quickLinksList'),
    addQuickLinkBtn: document.getElementById('addQuickLink'),
    customIconInput: document.getElementById('customIconInput'),
    uploadCustomIcon: document.getElementById('uploadCustomIcon'),
    bgContainer: document.getElementById('bg-container'),
    bgTypeButtons: document.querySelectorAll('.bg-type-selector .btn-tab'),
    bgColorSettings: document.getElementById('bg-color-settings'),
    bgImageSettings: document.getElementById('bg-image-settings'),
    bgColorInput: document.getElementById('bgColorInput'),
    bgColorText: document.getElementById('bgColorText'),
    bgImageInput: document.getElementById('bgImageInput'),
    uploadBgImageBtn: document.getElementById('uploadBgImage'),
    colorPresets: document.querySelectorAll('.color-preset'),
    pageWrapper: document.querySelector('.page-wrapper')
  };

  // --- HELPER FUNCTIONS ---
  const applyBackground = () => {
    if (state.settings.bgType === 'color') {
      DOMElements.bgContainer.style.background = state.settings.bgColor;
      DOMElements.bgContainer.classList.remove('has-image');
    } else if (state.settings.bgType === 'image' && state.settings.bgImage) {
      DOMElements.bgContainer.style.backgroundImage = `url(${state.settings.bgImage})`;
      DOMElements.bgContainer.classList.add('has-image');
    }
  };

  const getIconHtml = (iconKey) => {
    if (!iconKey) return iconLibrary.default;
    if (iconKey.startsWith('data:') || iconKey.startsWith('<svg')) {
      return iconKey.startsWith('data:') ? `<img src="${iconKey}" style="width:28px; height:28px; object-fit:contain;">` : iconKey;
    }
    return iconLibrary[iconKey] || iconLibrary.default;
  };

  // --- RENDER FUNCTIONS ---
  const renderQuickLinks = () => {
    DOMElements.quickLinksGrid.innerHTML = '';
    state.settings.quickLinks.forEach(link => {
      const iconHtml = getIconHtml(link.icon);
      const linkEl = document.createElement('a');
      linkEl.href = link.url;
      linkEl.target = '_blank';
      linkEl.className = 'tile';
      linkEl.innerHTML = `
        <div class="tile-icon">${iconHtml}</div>
        <div class="tile-text">${link.name}</div>
      `;
      DOMElements.quickLinksGrid.appendChild(linkEl);
    });
  };

  const renderQuickLinksManager = () => {
    DOMElements.quickLinksList.innerHTML = '';
    state.settings.quickLinks.forEach((link, index) => {
      const item = document.createElement('div');
      item.className = 'ql-item';
      item.dataset.index = index;
      
      const iconHtml = getIconHtml(link.icon);
      
      item.innerHTML = `
        <div class="ql-icon-select" title="Change Icon (Click)">
          ${iconHtml}
        </div>
        <input type="text" class="ql-name" value="${link.name}" placeholder="Name">
        <input type="text" class="ql-url" value="${link.url}" placeholder="URL">
        <button class="ql-remove" title="Delete">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      `;

      // Icon selector logic
      const iconEl = item.querySelector('.ql-icon-select');
      iconEl.addEventListener('click', () => {
        openIconSelector(link, iconEl);
      });

      // Remove logic
      item.querySelector('.ql-remove').addEventListener('click', () => {
        state.settings.quickLinks.splice(index, 1);
        renderQuickLinksManager();
      });

      // Input update logic
      item.querySelector('.ql-name').addEventListener('input', (e) => link.name = e.target.value);
      item.querySelector('.ql-url').addEventListener('input', (e) => link.url = e.target.value);

      DOMElements.quickLinksList.appendChild(item);
    });
  };

  // --- ICON SELECTOR ---
  let currentEditingLink = null;
  let currentIconPreviewEl = null;

  const openIconSelector = (link, previewEl) => {
    currentEditingLink = link;
    currentIconPreviewEl = previewEl;
    renderIconGrid();
    DOMElements.iconSelectorModal.classList.add('visible');
  };

  const closeIconSelector = () => {
    DOMElements.iconSelectorModal.classList.remove('visible');
    currentEditingLink = null;
    currentIconPreviewEl = null;
  };

  const renderIconGrid = () => {
    DOMElements.iconGrid.innerHTML = '';
    const keys = Object.keys(iconLibrary);
    if (keys.length === 0) {
      DOMElements.iconGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No icons available</p>';
      return;
    }
    keys.forEach(key => {
      const iconOption = document.createElement('div');
      iconOption.className = 'icon-option';
      if (currentEditingLink && currentEditingLink.icon === key) {
        iconOption.classList.add('selected');
      }
      iconOption.innerHTML = iconLibrary[key];
      iconOption.title = key;
      
      iconOption.addEventListener('click', () => {
        if (currentEditingLink) {
          currentEditingLink.icon = key;
          if (currentIconPreviewEl) {
            currentIconPreviewEl.innerHTML = getIconHtml(key);
          }
        }
        closeIconSelector();
      });
      
      DOMElements.iconGrid.appendChild(iconOption);
    });
  };

  DOMElements.uploadCustomIcon.addEventListener('click', () => {
    DOMElements.customIconInput.click();
  });

  DOMElements.customIconInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        if (currentEditingLink) {
          currentEditingLink.icon = dataUrl;
          if (currentIconPreviewEl) {
            currentIconPreviewEl.innerHTML = `<img src="${dataUrl}" style="width:28px; height:28px; object-fit:contain;">`;
          }
        }
        closeIconSelector();
      };
      reader.readAsDataURL(file);
    }
  });

  DOMElements.closeIconSelector.addEventListener('click', closeIconSelector);
  DOMElements.iconSelectorModal.addEventListener('click', (e) => {
    if (e.target === DOMElements.iconSelectorModal) closeIconSelector();
  });

  DOMElements.addQuickLinkBtn.addEventListener('click', () => {
    state.settings.quickLinks.push({
      id: Date.now().toString(),
      name: 'New Link',
      url: 'https://',
      icon: 'default'
    });
    renderQuickLinksManager();
  });

  // --- BACKGROUND SETTINGS ---
  DOMElements.bgTypeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      state.settings.bgType = type;
      
      DOMElements.bgTypeButtons.forEach(b => b.classList.toggle('active', b === btn));
      DOMElements.bgColorSettings.classList.toggle('hidden', type !== 'color');
      DOMElements.bgImageSettings.classList.toggle('hidden', type !== 'image');
      
      applyBackground();
    });
  });

  DOMElements.colorPresets.forEach(preset => {
    preset.addEventListener('click', () => {
      const color = preset.dataset.color;
      state.settings.bgColor = color;
      DOMElements.bgColorInput.value = color;
      DOMElements.bgColorText.value = color;
      
      DOMElements.colorPresets.forEach(p => p.classList.toggle('active', p === preset));
      applyBackground();
    });
  });

  DOMElements.bgColorInput.addEventListener('input', (e) => {
    const color = e.target.value;
    state.settings.bgColor = color;
    DOMElements.bgColorText.value = color;
    DOMElements.colorPresets.forEach(p => p.classList.toggle('active', p.dataset.color === color));
    applyBackground();
  });

  DOMElements.bgColorText.addEventListener('input', (e) => {
    const color = e.target.value;
    if (/^#[0-9A-F]{6}$/i.test(color)) {
      state.settings.bgColor = color;
      DOMElements.bgColorInput.value = color;
      DOMElements.colorPresets.forEach(p => p.classList.toggle('active', p.dataset.color === color));
      applyBackground();
    }
  });

  DOMElements.uploadBgImageBtn.addEventListener('click', () => {
    DOMElements.bgImageInput.click();
  });

  DOMElements.bgImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        state.settings.bgImage = event.target.result;
        applyBackground();
      };
      reader.readAsDataURL(file);
    }
  });

  // --- SETTINGS MODAL ---
  const toggleModal = (show) => {
    DOMElements.settingsModal.classList.toggle('visible', show);
  };

  DOMElements.openSettings.addEventListener('click', () => {
    DOMElements.searchProviderSelect.value = state.settings.searchProvider || 'brave';
    
    // Set background UI state
    const type = state.settings.bgType || 'color';
    DOMElements.bgTypeButtons.forEach(b => b.classList.toggle('active', b.dataset.type === type));
    DOMElements.bgColorSettings.classList.toggle('hidden', type !== 'color');
    DOMElements.bgImageSettings.classList.toggle('hidden', type !== 'image');
    DOMElements.bgColorInput.value = state.settings.bgColor || '#0f172a';
    DOMElements.bgColorText.value = state.settings.bgColor || '#0f172a';

    // Highlight active color preset
    const currentColor = state.settings.bgColor || '#0f172a';
    DOMElements.colorPresets.forEach(p => p.classList.toggle('active', p.dataset.color === currentColor));

    renderQuickLinksManager();
    toggleModal(true);
  });

  DOMElements.closeSettings.addEventListener('click', () => {
    toggleModal(false);
    init(); 
  });
  
  DOMElements.settingsModal.addEventListener('click', (e) => {
    if (e.target === DOMElements.settingsModal) {
      toggleModal(false);
      init();
    }
  });

  DOMElements.saveSettings.addEventListener('click', () => {
    // Collect values directly from UI to ensure they are current
    const newSettings = {
      searchProvider: DOMElements.searchProviderSelect.value,
      bgType: state.settings.bgType,
      bgColor: state.settings.bgColor,
      bgImage: state.settings.bgImage,
      quickLinks: state.settings.quickLinks
    };
    
    console.log('Saving settings:', newSettings);
    
    chrome.storage.local.set(newSettings, () => {
      if (chrome.runtime.lastError) {
        console.error('Save error:', chrome.runtime.lastError);
        return;
      }
      state.settings = newSettings;
      renderQuickLinks();
      applyBackground();
      toggleModal(false);
    });
  });

  // --- SEARCH ---
  const searchProviders = {
    brave: 'https://search.brave.com/search?q=',
    google: 'https://www.google.com/search?q=',
    duckduckgo: 'https://duckduckgo.com/?q=',
    bing: 'https://www.bing.com/search?q=',
    yandex: 'https://yandex.com.tr/search/?text='
  };

  DOMElements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const query = DOMElements.searchInput.value.trim();
    if (query) {
      const provider = state.settings.searchProvider || 'brave';
      const baseUrl = searchProviders[provider] || searchProviders.brave;
      location.href = `${baseUrl}${encodeURIComponent(query)}`;
    }
  });

  // --- ANIMATIONS ---
  let rafId = null;
  DOMElements.pageWrapper.addEventListener('mousemove', (e) => {
    if (rafId) return;

    const { clientX, clientY } = e;
    const target = e.currentTarget;

    rafId = requestAnimationFrame(() => {
      rafId = null;

      if (!target) {
        return;
      }
      const { offsetWidth, offsetHeight } = target;

      if (offsetWidth === 0 || offsetHeight === 0) {
        return;
      }

      const x = (clientX / offsetWidth - 0.5) * 2;
      const y = (clientY / offsetHeight - 0.5) * 2;
      
      target.style.transform = `perspective(1000px) rotateY(${x * 1}deg) rotateX(${-y * 1}deg) scale3d(1.02, 1.02, 1.02)`;
    });
  });

  // --- INITIAL LOAD ---
  const init = () => {
    chrome.storage.local.get(null, (data) => {
      console.log('Loaded data:', data);
      
      if (Object.keys(data).length > 0) {
        state.settings = {
          ...state.settings,
          ...data
        };
      }
      
      // Default fallbacks
      if (!state.settings.searchProvider) state.settings.searchProvider = 'google';
      if (!state.settings.bgType) state.settings.bgType = 'color';
      if (!state.settings.bgColor) state.settings.bgColor = '#0f172a';
      
      if (!state.settings.quickLinks || state.settings.quickLinks.length === 0) {
        state.settings.quickLinks = [
          { id: '1', name: 'YouTube', url: 'https://www.youtube.com', icon: 'youtube' },
          { id: '2', name: 'GitHub', url: 'https://www.github.com', icon: 'github' },
          { id: '3', name: 'Twitter', url: 'https://www.twitter.com', icon: 'twitter' },
          { id: '4', name: 'Instagram', url: 'https://www.instagram.com', icon: 'instagram' }
        ];
      }

      renderQuickLinks();
      applyBackground();
    });
  };

  init();
});
