export interface IconDef {
  id: string;
  name: string;
  category: string;
  tags: string[];
  // Primary stroke paths
  paths: string[];
  // Secondary stroke paths for duotone/gradient details (optional)
  secPaths?: string[];
  // Shapes like circles or rects: { type: 'circle' | 'rect', props: any }
  shapes?: Array<{ type: 'circle' | 'rect' | 'line'; props: any; isSec?: boolean }>;
}

export const CATEGORIES = [
  "General UI",
  "Commerce & Finance",
  "Communication & Social",
  "Files & Documents",
  "Media & Controls",
  "Devices & Technology",
  "Navigation & Arrows",
  "Design & Creative",
  "Jumping Animations"
];

export const ICONS: IconDef[] = [
  // --- GENERAL UI (20) ---
  {
    id: "home",
    name: "Home",
    category: "General UI",
    tags: ["house", "main", "dashboard", "index"],
    paths: ["M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"],
    shapes: [{ type: "rect", props: { x: "9", y: "13", width: "6", height: "8" } }]
  },
  {
    id: "user",
    name: "User",
    category: "General UI",
    tags: ["profile", "account", "member", "avatar"],
    paths: ["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"],
    shapes: [{ type: "circle", props: { cx: "12", cy: "7", r: "4" } }]
  },
  {
    id: "users",
    name: "Users",
    category: "General UI",
    tags: ["team", "group", "members", "people"],
    paths: [
      "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
      "M23 21v-2a4 4 0 0 0-3-3.87",
      "M16 3.13a4 4 0 0 1 0 7.75"
    ],
    shapes: [{ type: "circle", props: { cx: "9", cy: "7", r: "4" } }]
  },
  {
    id: "settings",
    name: "Settings",
    category: "General UI",
    tags: ["gear", "options", "config", "preferences"],
    paths: [
      "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
    ],
    shapes: [{ type: "circle", props: { cx: "12", cy: "12", r: "3" } }]
  },
  {
    id: "bell",
    name: "Bell",
    category: "General UI",
    tags: ["notification", "alert", "reminder", "badge"],
    paths: [
      "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
      "M13.73 21a2 2 0 0 1-3.46 0"
    ]
  },
  {
    id: "lock",
    name: "Lock",
    category: "General UI",
    tags: ["security", "private", "admin", "password"],
    paths: ["M7 11V7a5 5 0 0 1 10 0v4"],
    shapes: [{ type: "rect", props: { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" } }]
  },
  {
    id: "unlock",
    name: "Unlock",
    category: "General UI",
    tags: ["security", "public", "accessible", "open"],
    paths: ["M7 11V7a5 5 0 0 1 9.9-1"],
    shapes: [{ type: "rect", props: { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" } }]
  },
  {
    id: "key",
    name: "Key",
    category: "General UI",
    tags: ["access", "password", "authentication", "token"],
    paths: ["M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3-3.5 3.5z"]
  },
  {
    id: "trash",
    name: "Trash",
    category: "General UI",
    tags: ["delete", "remove", "bin", "clear"],
    paths: [
      "M3 6h18",
      "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
      "M10 11v6",
      "M14 11v6"
    ]
  },
  {
    id: "edit",
    name: "Edit",
    category: "General UI",
    tags: ["modify", "write", "pencil", "compose"],
    paths: [
      "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      "M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
    ]
  },
  {
    id: "check",
    name: "Check",
    category: "General UI",
    tags: ["success", "done", "complete", "valid"],
    paths: ["M20 6L9 17l-5-5"]
  },
  {
    id: "close",
    name: "Close",
    category: "General UI",
    tags: ["exit", "dismiss", "cancel", "remove"],
    paths: ["M18 6L6 18M6 6l12 12"]
  },
  {
    id: "plus",
    name: "Plus",
    category: "General UI",
    tags: ["add", "new", "create", "insert"],
    paths: ["M12 5v14M5 12h14"]
  },
  {
    id: "minus",
    name: "Minus",
    category: "General UI",
    tags: ["remove", "decrease", "collapse", "subtract"],
    paths: ["M5 12h14"]
  },
  {
    id: "search",
    name: "Search",
    category: "General UI",
    tags: ["find", "magnifier", "lookup", "filter"],
    paths: ["M21 21l-6-6"],
    shapes: [{ type: "circle", props: { cx: "11", cy: "11", r: "8" } }]
  },
  {
    id: "eye",
    name: "Eye",
    category: "General UI",
    tags: ["visible", "view", "preview", "show"],
    paths: [
      "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    ],
    shapes: [
      { type: "circle", props: { cx: "12", cy: "12", r: "3" } },
      { type: "circle", props: { cx: "12", cy: "12", r: "1", isSec: true } }
    ]
  },
  {
    id: "eye-off",
    name: "Eye Off",
    category: "General UI",
    tags: ["hidden", "invisible", "private", "hide"],
    paths: [
      "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24",
      "M1 1l22 22"
    ]
  },
  {
    id: "help",
    name: "Help Circle",
    category: "General UI",
    tags: ["faq", "question", "support", "info"],
    paths: [
      "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
      "M12 17h.01"
    ],
    shapes: [{ type: "circle", props: { cx: "12", cy: "12", r: "10" } }]
  },
  {
    id: "info",
    name: "Info",
    category: "General UI",
    tags: ["details", "help", "about", "tooltip"],
    paths: [
      "M12 16v-4",
      "M12 8h.01"
    ],
    shapes: [{ type: "circle", props: { cx: "12", cy: "12", r: "10" } }]
  },
  {
    id: "external-link",
    name: "External Link",
    category: "General UI",
    tags: ["out", "hyperlink", "new-tab", "redirect"],
    paths: [
      "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      "M15 3h6v6",
      "M10 14L21 3"
    ]
  },

  // --- COMMERCE & FINANCE (15) ---
  {
    id: "shopping-bag",
    name: "Shopping Bag",
    category: "Commerce & Finance",
    tags: ["store", "cart", "purchase", "checkout", "retail"],
    paths: [
      "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z",
      "M3 6h18",
      "M16 10a4 4 0 0 1-8 0"
    ]
  },
  {
    id: "shopping-cart",
    name: "Shopping Cart",
    category: "Commerce & Finance",
    tags: ["e-commerce", "basket", "buy", "store", "purchase"],
    paths: [
      "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    ],
    shapes: [
      { type: "circle", props: { cx: "9.5", cy: "20.5", r: "1.5" } },
      { type: "circle", props: { cx: "18.5", cy: "20.5", r: "1.5" } }
    ]
  },
  {
    id: "credit-card",
    name: "Credit Card",
    category: "Commerce & Finance",
    tags: ["payment", "bank", "visa", "mastercard", "stripe"],
    paths: [
      "M1 10h22"
    ],
    shapes: [
      { type: "rect", props: { x: "1", y: "4", width: "22", height: "16", rx: "2", ry: "2" } },
      { type: "line", props: { x1: "4", y1: "15", x2: "8", y2: "15" }, isSec: true }
    ]
  },
  {
    id: "dollar-sign",
    name: "Dollar Sign",
    category: "Commerce & Finance",
    tags: ["currency", "money", "pricing", "usd", "revenue"],
    paths: [
      "M12 1v22",
      "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
    ]
  },
  {
    id: "euro-sign",
    name: "Euro Sign",
    category: "Commerce & Finance",
    tags: ["currency", "money", "eur", "europe"],
    paths: [
      "M19 5h-4a7 7 0 0 0 0 14h4",
      "M5 8h10",
      "M5 12h10"
    ]
  },
  {
    id: "bank",
    name: "Bank",
    category: "Commerce & Finance",
    tags: ["finance", "institution", "savings", "treasury"],
    paths: [
      "M3 21h18",
      "M5 21V11",
      "M9 21V11",
      "M15 21V11",
      "M19 21V11",
      "M12 2L2 7h20z"
    ]
  },
  {
    id: "tag",
    name: "Price Tag",
    category: "Commerce & Finance",
    tags: ["discount", "coupon", "label", "sale"],
    paths: [
      "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
    ],
    shapes: [{ type: "circle", props: { cx: "7", cy: "7", r: "1.5" } }]
  },
  {
    id: "percent",
    name: "Percent",
    category: "Commerce & Finance",
    tags: ["discount", "interest", "commission", "ratio"],
    paths: [
      "M19 5L5 19"
    ],
    shapes: [
      { type: "circle", props: { cx: "6.5", cy: "6.5", r: "2.5" } },
      { type: "circle", props: { cx: "17.5", cy: "17.5", r: "2.5" } }
    ]
  },
  {
    id: "gift",
    name: "Gift",
    category: "Commerce & Finance",
    tags: ["present", "holiday", "reward", "bonus"],
    paths: [
      "M20 12v10H4V12",
      "M2 7h20v5H2z",
      "M12 22V7",
      "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",
      "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
    ]
  },
  {
    id: "trending-up",
    name: "Trending Up",
    category: "Commerce & Finance",
    tags: ["growth", "analytics", "seo", "chart", "metrics"],
    paths: [
      "M23 6l-9.5 9.5-5-5L1 18",
      "M17 6h6v6"
    ]
  },
  {
    id: "trending-down",
    name: "Trending Down",
    category: "Commerce & Finance",
    tags: ["loss", "analytics", "decrease", "chart", "drop"],
    paths: [
      "M23 18l-9.5-9.5-5 5L1 6",
      "M17 18h6v-6"
    ]
  },
  {
    id: "coins",
    name: "Coins",
    category: "Commerce & Finance",
    tags: ["cash", "money", "token", "crypto", "savings"],
    paths: [
      "M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
      "M18 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
      "M6 14a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
    ]
  },
  {
    id: "wallet",
    name: "Wallet",
    category: "Commerce & Finance",
    tags: ["cash", "savings", "crypto", "pay"],
    paths: [
      "M20 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z",
      "M22 10h-6a2 2 0 0 0 0 4h6"
    ],
    shapes: [{ type: "circle", props: { cx: "18", cy: "12", r: "1" } }]
  },
  {
    id: "receipt",
    name: "Receipt",
    category: "Commerce & Finance",
    tags: ["invoice", "billing", "tax", "order"],
    paths: [
      "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z",
      "M8 8h8",
      "M8 12h8",
      "M8 16h5"
    ]
  },
  {
    id: "award",
    name: "Award",
    category: "Commerce & Finance",
    tags: ["trophy", "badge", "achievement", "premium"],
    paths: [
      "M12 15l-2 5 2-1 2 1-2-5",
      "M8.21 13.89L7 21l5-2.5 5 2.5-1.21-7.12"
    ],
    shapes: [{ type: "circle", props: { cx: "12", cy: "8", r: "7" } }]
  },

  // --- COMMUNICATION & SOCIAL (15) ---
  {
    id: "mail",
    name: "Mail",
    category: "Communication & Social",
    tags: ["email", "letter", "envelope", "inbox"],
    paths: [
      "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
      "M22 6l-10 7L2 6"
    ]
  },
  {
    id: "message-square",
    name: "Message Square",
    category: "Communication & Social",
    tags: ["chat", "comment", "discussion", "feedback", "bubble"],
    paths: [
      "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    ]
  },
  {
    id: "phone",
    name: "Phone",
    category: "Communication & Social",
    tags: ["call", "support", "contact", "dial"],
    paths: [
      "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    ]
  },
  {
    id: "send",
    name: "Send",
    category: "Communication & Social",
    tags: ["submit", "paper-plane", "share", "publish"],
    paths: [
      "M22 2L11 13",
      "M22 2l-7 20-4-9-9-4z"
    ]
  },
  {
    id: "share-2",
    name: "Share",
    category: "Communication & Social",
    tags: ["distribute", "social", "network", "nodes"],
    paths: [
      "M8.59 13.51l6.83 3.98",
      "M15.41 6.51L8.59 10.49"
    ],
    shapes: [
      { type: "circle", props: { cx: "18", cy: "5", r: "3" } },
      { type: "circle", props: { cx: "6", cy: "12", r: "3" } },
      { type: "circle", props: { cx: "18", cy: "19", r: "3" } }
    ]
  },
  {
    id: "heart",
    name: "Heart",
    category: "Communication & Social",
    tags: ["like", "favorite", "love", "wishlist"],
    paths: [
      "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    ]
  },
  {
    id: "star",
    name: "Star",
    category: "Communication & Social",
    tags: ["rating", "bookmark", "favorite", "gold"],
    paths: [
      "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
    ]
  },
  {
    id: "thumbs-up",
    name: "Thumbs Up",
    category: "Communication & Social",
    tags: ["like", "agree", "yes", "positive"],
    paths: [
      "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
    ]
  },
  {
    id: "thumbs-down",
    name: "Thumbs Down",
    category: "Communication & Social",
    tags: ["dislike", "disagree", "no", "negative"],
    paths: [
      "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"
    ]
  },
  {
    id: "globe",
    name: "Globe",
    category: "Communication & Social",
    tags: ["world", "internet", "website", "language", "localization"],
    paths: [
      "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
      "M2 12h20",
      "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    ],
    shapes: [{ type: "circle", props: { cx: "12", cy: "12", r: "10" } }]
  },
  {
    id: "paperclip",
    name: "Paperclip",
    category: "Communication & Social",
    tags: ["attachment", "file", "bind", "add-file"],
    paths: [
      "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
    ]
  },
  {
    id: "github",
    name: "GitHub",
    category: "Communication & Social",
    tags: ["brand", "code", "git", "repository", "developer"],
    paths: [
      "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    ]
  },
  {
    id: "twitter",
    name: "Twitter / X",
    category: "Communication & Social",
    tags: ["brand", "social", "feed", "posts"],
    paths: [
      "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
    ]
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    category: "Communication & Social",
    tags: ["brand", "professional", "network", "recruitment"],
    paths: [
      "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      "M2 9h4v12H2z"
    ],
    shapes: [{ type: "circle", props: { cx: "4", cy: "4", r: "2" } }]
  },
  {
    id: "slack",
    name: "Slack",
    category: "Communication & Social",
    tags: ["brand", "team-chat", "cooperation", "workspace"],
    paths: [
      "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z",
      "M16 10h5c.83 0 1.5-.67 1.5-1.5S21.83 7 21 7h-5v3z",
      "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5C8 14.67 8.67 14 9.5 14z",
      "M8 14H3c-.83 0-1.5.67-1.5 1.5S2.17 17 3 17h5v-3z"
    ]
  },

  // --- FILES & DOCUMENTS (12) ---
  {
    id: "file",
    name: "File",
    category: "Files & Documents",
    tags: ["document", "page", "sheet", "record"],
    paths: [
      "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
    ],
    shapes: [
      { type: "line", props: { x1: "13", y1: "2", x2: "13", y2: "9" } },
      { type: "line", props: { x1: "13", y1: "9", x2: "20", y2: "9" } }
    ]
  },
  {
    id: "folder",
    name: "Folder",
    category: "Files & Documents",
    tags: ["directory", "storage", "archive", "group"],
    paths: [
      "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    ]
  },
  {
    id: "file-text",
    name: "File Text",
    category: "Files & Documents",
    tags: ["document", "article", "readme", "prose"],
    paths: [
      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
      "M14 2v6h6",
      "M16 13H8",
      "M16 17H8",
      "M10 9H8"
    ]
  },
  {
    id: "copy",
    name: "Copy",
    category: "Files & Documents",
    tags: ["duplicate", "clipboard", "clone", "replicate"],
    paths: [
      "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
    ],
    shapes: [{ type: "rect", props: { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" } }]
  },
  {
    id: "archive",
    name: "Archive",
    category: "Files & Documents",
    tags: ["zip", "backup", "store", "history"],
    paths: [
      "M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8",
      "M10 12h4"
    ],
    shapes: [{ type: "rect", props: { x: "1", y: "3", width: "22", height: "5", rx: "1" } }]
  },
  {
    id: "book-open",
    name: "Book Open",
    category: "Files & Documents",
    tags: ["read", "education", "tutorial", "manual", "magazine"],
    paths: [
      "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
      "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
    ]
  },
  {
    id: "calendar",
    name: "Calendar",
    category: "Files & Documents",
    tags: ["schedule", "date", "event", "planner"],
    paths: [
      "M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",
      "M16 2v4",
      "M8 2v4",
      "M3 10h18"
    ]
  },
  {
    id: "clock",
    name: "Clock",
    category: "Files & Documents",
    tags: ["time", "duration", "history", "recent"],
    paths: [
      "M12 6v6l4 2"
    ],
    shapes: [{ type: "circle", props: { cx: "12", cy: "12", r: "10" } }]
  },
  {
    id: "bookmark",
    name: "Bookmark",
    category: "Files & Documents",
    tags: ["save", "favorite", "read-later", "tag"],
    paths: ["M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"]
  },
  {
    id: "pin",
    name: "Pin",
    category: "Files & Documents",
    tags: ["location", "sticky", "attach", "board"],
    paths: [
      "M12 2v8",
      "M5 10h14",
      "M12 10v12",
      "M9 15h6"
    ]
  },
  {
    id: "download",
    name: "Download",
    category: "Files & Documents",
    tags: ["export", "save-local", "retrieve"],
    paths: [
      "M8 17H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-3",
      "M12 2v11",
      "M12 13l4-4",
      "M12 13L8 9"
    ]
  },
  {
    id: "upload",
    name: "Upload",
    category: "Files & Documents",
    tags: ["import", "publish", "cloud-upload"],
    paths: [
      "M8 17H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-3",
      "M12 13V2",
      "M12 2l4 4",
      "M12 2L8 6"
    ]
  },

  // --- MEDIA & CONTROLS (15) ---
  {
    id: "play",
    name: "Play",
    category: "Media & Controls",
    tags: ["start", "video", "audio", "media"],
    paths: ["M5 3l14 9-14 9V3z"]
  },
  {
    id: "pause",
    name: "Pause",
    category: "Media & Controls",
    tags: ["hold", "stop-briefly", "media"],
    paths: [
      "M6 4h4v16H6z",
      "M14 4h4v16h-4z"
    ]
  },
  {
    id: "stop",
    name: "Stop",
    category: "Media & Controls",
    tags: ["terminate", "square", "reset"],
    paths: ["M4 4h16v16H4z"]
  },
  {
    id: "skip-forward",
    name: "Skip Forward",
    category: "Media & Controls",
    tags: ["next", "fast-forward", "seek"],
    paths: [
      "M5 4l10 8-10 8V4z",
      "M19 5v14"
    ]
  },
  {
    id: "skip-back",
    name: "Skip Backward",
    category: "Media & Controls",
    tags: ["previous", "rewind", "backtrack"],
    paths: [
      "M19 20L9 12l10-8v16z",
      "M5 5v14"
    ]
  },
  {
    id: "volume-2",
    name: "Volume High",
    category: "Media & Controls",
    tags: ["speaker", "audio", "loud", "sound"],
    paths: [
      "M11 5L6 9H2v6h4l5 4V5z",
      "M19.07 4.93a10 10 0 0 1 0 14.14",
      "M15.54 8.46a5 5 0 0 1 0 7.07"
    ]
  },
  {
    id: "volume-x",
    name: "Mute",
    category: "Media & Controls",
    tags: ["silence", "quiet", "no-sound"],
    paths: [
      "M11 5L6 9H2v6h4l5 4V5z",
      "M23 9l-6 6",
      "M17 9l6 6"
    ]
  },
  {
    id: "image",
    name: "Image",
    category: "Media & Controls",
    tags: ["picture", "photo", "canvas", "gallery"],
    paths: [
      "M21 15l-5-5L5 21"
    ],
    shapes: [
      { type: "rect", props: { x: "3", y: "3", width: "18", height: "18", rx: "2" } },
      { type: "circle", props: { cx: "8.5", cy: "8.5", r: "1.5" } }
    ]
  },
  {
    id: "video",
    name: "Video",
    category: "Media & Controls",
    tags: ["movie", "camera", "film", "stream"],
    paths: [
      "M23 7l-7 5 7 5V7z"
    ],
    shapes: [{ type: "rect", props: { x: "1", y: "5", width: "15", height: "14", rx: "2", ry: "2" } }]
  },
  {
    id: "music",
    name: "Music",
    category: "Media & Controls",
    tags: ["melody", "audio", "song", "mp3"],
    paths: [
      "M9 18V5l12-2v13"
    ],
    shapes: [
      { type: "circle", props: { cx: "6", cy: "18", r: "3" } },
      { type: "circle", props: { cx: "18", cy: "16", r: "3" } }
    ]
  },
  {
    id: "mic",
    name: "Microphone",
    category: "Media & Controls",
    tags: ["audio", "record", "podcast", "speech"],
    paths: [
      "M19 10v1a7 7 0 0 1-14 0v-1",
      "M12 19v4",
      "M8 23h8"
    ],
    shapes: [{ type: "rect", props: { x: "9", y: "2", width: "6", height: "12", rx: "3", ry: "3" } }]
  },
  {
    id: "headphones",
    name: "Headphones",
    category: "Media & Controls",
    tags: ["audio", "listen", "devices", "music"],
    paths: [
      "M3 18v-6a9 9 0 0 1 18 0v6"
    ],
    shapes: [
      { type: "rect", props: { x: "1", y: "14", width: "4", height: "6", rx: "1" } },
      { type: "rect", props: { x: "19", y: "14", width: "4", height: "6", rx: "1" } }
    ]
  },
  {
    id: "maximize",
    name: "Maximize",
    category: "Media & Controls",
    tags: ["fullscreen", "expand", "widescreen"],
    paths: [
      "M15 3h6v6",
      "M9 21H3v-6",
      "M21 3l-7 7",
      "M3 21l7-7"
    ]
  },
  {
    id: "rotate-cw",
    name: "Rotate CW",
    category: "Media & Controls",
    tags: ["reload", "spin", "clockwise", "refresh"],
    paths: [
      "M23 4v6h-6",
      "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
    ]
  },
  {
    id: "refresh-cw",
    name: "Refresh CW",
    category: "Media & Controls",
    tags: ["sync", "reload", "update", "ajax"],
    paths: [
      "M23 4v6h-6",
      "M1 20v-6h6",
      "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
    ]
  },

  // --- DEVICES & TECHNOLOGY (12) ---
  {
    id: "laptop",
    name: "Laptop",
    category: "Devices & Technology",
    tags: ["computer", "pc", "device", "workstation"],
    paths: [
      "M2 20h20",
      "M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
    ]
  },
  {
    id: "smartphone",
    name: "Smartphone",
    category: "Devices & Technology",
    tags: ["mobile", "phone", "iphone", "cellular"],
    paths: [
      "M12 18h.01"
    ],
    shapes: [{ type: "rect", props: { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" } }]
  },
  {
    id: "tablet",
    name: "Tablet",
    category: "Devices & Technology",
    tags: ["ipad", "device", "ereader", "screen"],
    paths: [
      "M12 20h.01"
    ],
    shapes: [{ type: "rect", props: { x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2" } }]
  },
  {
    id: "monitor",
    name: "Monitor",
    category: "Devices & Technology",
    tags: ["display", "screen", "tv", "desktop"],
    paths: [
      "M8 21h8",
      "M12 17v4"
    ],
    shapes: [{ type: "rect", props: { x: "2", y: "3", width: "20", height: "14", rx: "2" } }]
  },
  {
    id: "database",
    name: "Database",
    category: "Devices & Technology",
    tags: ["storage", "sql", "server", "queries"],
    paths: [
      "M12 5c5.52 0 10-1.79 10-4S17.52 1 12 1 2 2.79 2 5s4.48 4 10 4z",
      "M2 5v6c0 2.21 4.48 4 10 4s10-1.79 10-4V5",
      "M2 11v6c0 2.21 4.48 4 10 4s10-1.79 10-4v-6"
    ]
  },
  {
    id: "server",
    name: "Server",
    category: "Devices & Technology",
    tags: ["host", "cloud", "backend", "datacenter"],
    paths: [
      "M6 6h.01",
      "M6 18h.01"
    ],
    shapes: [
      { type: "rect", props: { x: "2", y: "2", width: "20", height: "8", rx: "2" } },
      { type: "rect", props: { x: "2", y: "14", width: "20", height: "8", rx: "2" } }
    ]
  },
  {
    id: "wifi",
    name: "WiFi",
    category: "Devices & Technology",
    tags: ["internet", "connection", "hotspot", "broadband"],
    paths: [
      "M5 12.55a11 11 0 0 1 14.08 0",
      "M1.42 9a16 16 0 0 1 21.16 0",
      "M8.53 16.11a6 6 0 0 1 6.95 0",
      "M12 20h.01"
    ]
  },
  {
    id: "bluetooth",
    name: "Bluetooth",
    category: "Devices & Technology",
    tags: ["wireless", "tether", "sync", "audio-connect"],
    paths: [
      "M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"
    ]
  },
  {
    id: "cpu",
    name: "Processor",
    category: "Devices & Technology",
    tags: ["chip", "hardware", "silicon", "calculation"],
    paths: [
      "M9 9h6v6H9z",
      "M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"
    ],
    shapes: [{ type: "rect", props: { x: "4", y: "4", width: "16", height: "16", rx: "2" } }]
  },
  {
    id: "cloud",
    name: "Cloud",
    category: "Devices & Technology",
    tags: ["online", "remote-backup", "weather", "saas"],
    paths: [
      "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
    ]
  },
  {
    id: "battery",
    name: "Battery",
    category: "Devices & Technology",
    tags: ["power", "charge", "hardware", "accumulator"],
    paths: [
      "M23 11v2"
    ],
    shapes: [{ type: "rect", props: { x: "1", y: "6", width: "18", height: "12", rx: "2", ry: "2" } }]
  },
  {
    id: "shield",
    name: "Shield",
    category: "Devices & Technology",
    tags: ["protection", "security", "firewall", "antivirus"],
    paths: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"]
  },

  // --- NAVIGATION & ARROWS (12) ---
  {
    id: "arrow-up",
    name: "Arrow Up",
    category: "Navigation & Arrows",
    tags: ["north", "top", "elevation"],
    paths: ["M12 19V5M5 12l7-7 7 7"]
  },
  {
    id: "arrow-down",
    name: "Arrow Down",
    category: "Navigation & Arrows",
    tags: ["south", "bottom", "fall"],
    paths: ["M12 5v14M19 12l-7 7-7-7"]
  },
  {
    id: "arrow-left",
    name: "Arrow Left",
    category: "Navigation & Arrows",
    tags: ["west", "back", "previous"],
    paths: ["M19 12H5M12 19l-7-7 7-7"]
  },
  {
    id: "arrow-right",
    name: "Arrow Right",
    category: "Navigation & Arrows",
    tags: ["east", "forward", "next"],
    paths: ["M5 12h14M12 5l7 7-7 7"]
  },
  {
    id: "chevron-up",
    name: "Chevron Up",
    category: "Navigation & Arrows",
    tags: ["accordion-close", "upward", "fold"],
    paths: ["M18 15l-6-6-6 6"]
  },
  {
    id: "chevron-down",
    name: "Chevron Down",
    category: "Navigation & Arrows",
    tags: ["accordion-open", "downward", "unfold"],
    paths: ["M6 9l6 6 6-6"]
  },
  {
    id: "chevron-left",
    name: "Chevron Left",
    category: "Navigation & Arrows",
    tags: ["back", "carousel-prev"],
    paths: ["M15 18l-6-6 6-6"]
  },
  {
    id: "chevron-right",
    name: "Chevron Right",
    category: "Navigation & Arrows",
    tags: ["forward", "carousel-next"],
    paths: ["M9 18l6-6-6-6"]
  },
  {
    id: "arrow-up-right",
    name: "Arrow Up Right",
    category: "Navigation & Arrows",
    tags: ["diagonal", "external", "top-right"],
    paths: ["M7 17L17 7M7 7h10v10"]
  },
  {
    id: "maximize-2",
    name: "Expand Arrows",
    category: "Navigation & Arrows",
    tags: ["scale-up", "fullscreen", "enlarge"],
    paths: [
      "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
    ]
  },
  {
    id: "minimize-2",
    name: "Shrink Arrows",
    category: "Navigation & Arrows",
    tags: ["scale-down", "exit-fullscreen", "condense"],
    paths: [
      "M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7"
    ]
  },
  {
    id: "move",
    name: "Move Icon",
    category: "Navigation & Arrows",
    tags: ["pan", "drag", "translate", "arrows-four"],
    paths: [
      "M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l3-3-3-3M19 12H5M12 19V5"
    ]
  },

  // --- DESIGN & CREATIVE (10) ---
  {
    id: "pen-tool",
    name: "Pen Tool",
    category: "Design & Creative",
    tags: ["vector", "bezier", "draw", "illustrator"],
    paths: [
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      "M12 2v20"
    ],
    shapes: [{ type: "circle", props: { cx: "12", cy: "12", r: "3" } }]
  },
  {
    id: "paintbrush",
    name: "Paintbrush",
    category: "Design & Creative",
    tags: ["draw", "art", "paint", "fill-color"],
    paths: [
      "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z",
      "M21 9h-6",
      "M21 14h-6",
      "M12 20v2H2v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4z"
    ]
  },
  {
    id: "palette",
    name: "Palette",
    category: "Design & Creative",
    tags: ["colors", "scheme", "art", "theme"],
    paths: [
      "M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12c0 2.21 .89 4.21 2.34 5.66 .41 .41 .66 .96 .66 1.59 0 1.52 1.23 2.75 2.75 2.75H12z"
    ],
    shapes: [
      { type: "circle", props: { cx: "7.5", cy: "10.5", r: "1.5" } },
      { type: "circle", props: { cx: "11.5", cy: "7.5", r: "1.5" } },
      { type: "circle", props: { cx: "16.5", cy: "9.5", r: "1.5" } },
      { type: "circle", props: { cx: "15.5", cy: "14.5", r: "1.5" } }
    ]
  },
  {
    id: "layers",
    name: "Layers",
    category: "Design & Creative",
    tags: ["stack", "ordering", "z-index", "photoshop"],
    paths: [
      "M12 2L2 7l10 5 10-5-10-5z",
      "M2 17l10 5 10-5",
      "M2 12l10 5 10-5"
    ]
  },
  {
    id: "crop",
    name: "Crop",
    category: "Design & Creative",
    tags: ["aspect-ratio", "trim", "resize", "image-edit"],
    paths: [
      "M6 1v17a2 2 0 0 0 2 2h17",
      "M1 6h17a2 2 0 0 1 2 2v17"
    ]
  },
  {
    id: "align-left",
    name: "Align Left",
    category: "Design & Creative",
    tags: ["text-align", "formatting", "editor"],
    paths: [
      "M17 10H3",
      "M21 6H3",
      "M21 14H3",
      "M17 18H3"
    ]
  },
  {
    id: "grid",
    name: "Grid Layout",
    category: "Design & Creative",
    tags: ["alignment", "pixels", "bento", "dashboard"],
    paths: [
      "M3 3h18v18H3V3z",
      "M3 9h18",
      "M3 15h18",
      "M9 3v18",
      "M15 3v18"
    ]
  },
  {
    id: "frame",
    name: "Artboard Frame",
    category: "Design & Creative",
    tags: ["figma", "canvas", "dimension", "boundary"],
    paths: [
      "M22 6H2",
      "M22 18H2",
      "M6 2v20",
      "M18 2v20"
    ]
  },
  {
    id: "compass",
    name: "Compass",
    category: "Design & Creative",
    tags: ["direction", "navigation", "safari", "orientation"],
    paths: [
      "M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"
    ],
    shapes: [{ type: "circle", props: { cx: "12", cy: "12", r: "10" } }]
  },
  {
    id: "sparkles",
    name: "Sparkles",
    category: "Design & Creative",
    tags: ["ai", "magic", "premium", "fancy", "clean"],
    paths: [
      "M12 3v4M12 17v4M3 12h4M17 12h4",
      "M12 7c2 0 5 3 5 5s-3 5-5 5-5-3-5-5 3-5 5-5z"
    ],
    shapes: [
      { type: "circle", props: { cx: "5", cy: "5", r: "1" } },
      { type: "circle", props: { cx: "19", cy: "5", r: "1" } },
      { type: "circle", props: { cx: "19", cy: "19", r: "1" } }
    ]
  },
  // --- JUMPING ANIMATIONS (22) ---
  {
    id: "jump-arrow-down",
    name: "Jumping Chevron Down",
    category: "Jumping Animations",
    tags: ["arrow", "chevron", "down", "scroll", "indicator"],
    paths: ["M6 9l6 6 6-6"]
  },
  {
    id: "jump-arrow-up",
    name: "Jumping Chevron Up",
    category: "Jumping Animations",
    tags: ["arrow", "chevron", "up", "top", "back-to-top"],
    paths: ["M18 15l-6-6-6 6"]
  },
  {
    id: "jump-bounce-ball",
    name: "Bouncing Ball",
    category: "Jumping Animations",
    tags: ["basketball", "game", "toy", "play", "bounce"],
    paths: [
      "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 0 1-5-1.5 15 15 0 0 0 5-6.5 15 15 0 0 0 5 6.5 8 8 0 0 1-5 1.5z",
      "M4.5 7.5A15 15 0 0 0 12 12a15 15 0 0 0 7.5-4.5"
    ]
  },
  {
    id: "jump-rocket",
    name: "Jumping Rocket",
    category: "Jumping Animations",
    tags: ["space", "shuttle", "launch", "startup", "speed"],
    paths: [
      "M12 2s4 4 4 10a4 4 0 0 1-8 0c0-6 4-10 4-10z",
      "M9 15v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3"
    ],
    shapes: [{ type: "line", props: { x1: "12", y1: "20", x2: "12", y2: "22" } }]
  },
  {
    id: "jump-heartbeat",
    name: "Jumping Heart",
    category: "Jumping Animations",
    tags: ["love", "heart", "like", "favorite", "pulse"],
    paths: ["M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"]
  },
  {
    id: "jump-notification",
    name: "Jumping Bell",
    category: "Jumping Animations",
    tags: ["notification", "alert", "reminder", "sound", "bell"],
    paths: [
      "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
      "M13.73 21a2 2 0 0 1-3.46 0"
    ]
  },
  {
    id: "jump-star",
    name: "Jumping Sparkle Star",
    category: "Jumping Animations",
    tags: ["magic", "premium", "fancy", "rating", "favorite"],
    paths: ["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"]
  },
  {
    id: "jump-download",
    name: "Jumping Download",
    category: "Jumping Animations",
    tags: ["save", "export", "file", "download", "fetch"],
    paths: [
      "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
      "M7 10l5 5 5-5",
      "M12 15V3"
    ]
  },
  {
    id: "jump-upload",
    name: "Jumping Upload",
    category: "Jumping Animations",
    tags: ["save", "import", "file", "upload", "publish"],
    paths: [
      "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
      "M17 10l-5-5-5 5",
      "M12 5v12"
    ]
  },
  {
    id: "jump-bubble",
    name: "Jumping Chat Bubble",
    category: "Jumping Animations",
    tags: ["chat", "message", "sms", "comment", "discussion"],
    paths: [
      "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    ]
  },
  {
    id: "jump-game",
    name: "Jumping Game Controller",
    category: "Jumping Animations",
    tags: ["play", "game", "retro", "nintendo", "console"],
    paths: [
      "M6 12h4M8 10v4",
      "M15 11h.01M18 13h.01"
    ],
    shapes: [{ type: "rect", props: { x: "2", y: "6", width: "20", height: "12", rx: "3" } }]
  },
  {
    id: "jump-music",
    name: "Jumping Music Note",
    category: "Jumping Animations",
    tags: ["sound", "tune", "song", "audio", "vibe"],
    paths: [
      "M9 18V5l12-2v13"
    ],
    shapes: [
      { type: "circle", props: { cx: "6", cy: "18", r: "3" } },
      { type: "circle", props: { cx: "18", cy: "16", r: "3" } }
    ]
  },
  {
    id: "jump-gift",
    name: "Jumping Gift Box",
    category: "Jumping Animations",
    tags: ["present", "holiday", "surprise", "box", "reward"],
    paths: [
      "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",
      "M12 22V7",
      "M7.5 7.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1.5 2.5 2.5H12c0-1 1-2.5 2.5-2.5S17 3.5 17 5s-1 2.5-2.5 2.5H7.5z"
    ],
    shapes: [{ type: "rect", props: { x: "2", y: "7", width: "20", height: "5", rx: "1" } }]
  },
  {
    id: "jump-cart",
    name: "Jumping Shopping Cart",
    category: "Jumping Animations",
    tags: ["shop", "buy", "store", "commerce", "bag"],
    paths: [
      "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    ],
    shapes: [
      { type: "circle", props: { cx: "9.5", cy: "20.5", r: "1.5" } },
      { type: "circle", props: { cx: "18.5", cy: "20.5", r: "1.5" } }
    ]
  },
  {
    id: "jump-battery",
    name: "Jumping Battery Indicator",
    category: "Jumping Animations",
    tags: ["energy", "charge", "power", "cell", "hardware"],
    paths: [
      "M23 11v2"
    ],
    shapes: [
      { type: "rect", props: { x: "1", y: "6", width: "18", height: "12", rx: "2" } },
      { type: "line", props: { x1: "6", y1: "10", x2: "6", y2: "14" } },
      { type: "line", props: { x1: "10", y1: "10", x2: "10", y2: "14" } },
      { type: "line", props: { x1: "14", y1: "10", x2: "14", y2: "14" } }
    ]
  },
  {
    id: "jump-idea",
    name: "Jumping Lightbulb",
    category: "Jumping Animations",
    tags: ["idea", "bulb", "innovation", "brain", "smart"],
    paths: [
      "M15 14c.95-.9 1.5-2.2 1.5-3.5A4.5 4.5 0 0 0 12 6a4.5 4.5 0 0 0-4.5 4.5c0 1.3.55 2.6 1.5 3.5l1.5 2h3l1.5-2z",
      "M9 18h6",
      "M10 21h4"
    ]
  },
  {
    id: "jump-coffee",
    name: "Jumping Coffee Cup",
    category: "Jumping Animations",
    tags: ["beverage", "cafe", "cup", "caffeine", "morning"],
    paths: [
      "M18 8H6a1 1 0 0 0-1 1v7a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6V9a1 1 0 0 0-1-1z",
      "M17 8h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1",
      "M9 2v3",
      "M12 2v3",
      "M15 2v3"
    ]
  },
  {
    id: "jump-fire",
    name: "Jumping Hot Flame",
    category: "Jumping Animations",
    tags: ["fire", "hot", "trending", "popular", "burn"],
    paths: [
      "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"
    ]
  },
  {
    id: "jump-plane",
    name: "Jumping Plane Takeoff",
    category: "Jumping Animations",
    tags: ["flight", "travel", "airport", "vacation", "trip"],
    paths: [
      "M22 2l-3 15-4-4-4 4-1-4-4-4 15-3 1 1z",
      "M22 2L11 13"
    ]
  },
  {
    id: "jump-crown",
    name: "Jumping Victory Crown",
    category: "Jumping Animations",
    tags: ["king", "queen", "champion", "award", "gold"],
    paths: [
      "M2 4l3 12h14l3-12-5 6-5-6-5 6-5-6z",
      "M5 20h14"
    ]
  },
  {
    id: "jump-bolt",
    name: "Jumping Lightning Bolt",
    category: "Jumping Animations",
    tags: ["flash", "thunder", "power", "charge", "speed"],
    paths: [
      "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
    ]
  },
  {
    id: "jump-cursor",
    name: "Jumping Click Cursor",
    category: "Jumping Animations",
    tags: ["click", "mouse", "pointer", "arrow", "select"],
    paths: [
      "M12 2l3 9-4-1-3 7-1-7-4 1 9-9z"
    ]
  }
];
