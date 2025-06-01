## 💡 What I Learned

Through building this **Mini Blog Viewer** as part of my React Mastery Challenge (Day 1), I deep-dived into the core fundamentals of React. Here's a breakdown of what I practiced and understood thoroughly:

### ✅ React Fundamentals
- JSX syntax and structure
- Functional Components
- Props and state management using `useState`
- Side-effects with `useEffect`
- Conditional rendering using ternary operators and logical checks
- Rendering lists with `.map()` and using `key` props

### 📦 Project Structure & Modular Code
- Organized components into reusable files (`BlogList`, `BlogCard`, `FullBlogModal`)
- Separated API logic into a dedicated `services` folder
- Applied clean folder structuring and naming conventions

### 🔗 API Integration
- Integrated JSONPlaceholder mock API using `axios`
- Handled asynchronous API calls using `async/await`
- Managed loading states while fetching data

### 🪟 Modal Logic & Event Handling
- Created a modal overlay (`FullBlogModal`) to display full blog content
- Implemented `onClick` outside the modal to close it
- Used `stopPropagation()` to prevent closing when clicking inside the modal

### 🎨 Basic Styling & UX
- Built a responsive layout using flexbox
- Styled modal overlays to center and darken background
- Maintained consistent font sizes and visual hierarchy

### 🧠 Debugging & Best Practices
- Fixed an infinite render loop by properly adding a dependency array to `useEffect`
- Lifted state up for modal control using `selectedBlog`
- Ensured modal state (`setSelectedBlog(null)`) resets cleanly on close

---

This project was a great warm-up to solidify the **core building blocks of React**, preparing me for more advanced concepts like hooks, routing, forms, and global state coming up next.

