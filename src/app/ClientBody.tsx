"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased font-body bg-livegood-light";

    // Add font-heading classes to heading elements
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (const heading of headings) {
      if (!heading.classList.contains('font-heading')) {
        heading.classList.add('font-heading');
      }
    }
  }, []);

  return (
    <body className="antialiased font-body bg-livegood-light" suppressHydrationWarning>
      {children}
    </body>
  );
}
