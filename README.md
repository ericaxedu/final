This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

WebTech Final Project Documentation

 Project Description:
This project is developed for the course Web Systems and Technologies under the Bachelor of Science in Information Technology.It involves building a dynamic, responsive, and feature-rich web application using Next.js and Tailwind CSS. The application demonstrates integration with third-party APIs, clean UI design using a modern component library, and dynamic data visualization using charts. The data will be fetched from the JSON Placeholder API, showcasing users, their posts, and associated comments. The application also includes geographic visualization using Conversion of  the coordinates of location and real-time statistics using ApexCharts.

 Features
- Fetch and display a list of users.
- View detailed user profiles including address using the coordinates and their related posts.
- View individual post details and associated comments.
- Display charts for:
  - Total number of users
  - Total number of posts
  - Total number of comments
  - Charts update dynamically when data is fetched.


 Technologies Used
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ApexCharts](https://apexcharts.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Axios](https://axios-http.com/) 
⚙️ Setup and Installation
# Prerequisites
- Node.js and npm
- Git
- Mapbox API key

# Installation Steps
```bash
# Clone the repository
git clone https://github.com/your-username/webtech-final-project.git
cd webtech-final-project

# Install dependencies
npm install

# Run the development server
npm run dev
Setting Up Next.js with Tailwind css 
● Start by opening your terminal and running the command npx create-next-app@latest followed by your desired project name. This will generate a new Next.js project with the necessary files and folder structure. 
●Once the setup is complete, navigate into the project folder using cd project-name. Next, install Tailwind CSS along with PostCSS and Autoprefixer by running npm install -D tailwindcss postcss autoprefixer. 
●After that, generate the Tailwind configuration files by executing npx tailwindcss init -p. This will create a tailwind.config.js and a postcss.config.js file.
● Then, open the tailwind.config.js file and add the path "./pages/**/*.{js,ts,jsx,tsx}" and "./components/**/*.{js,ts,jsx,tsx}" to the content array so Tailwind can scan these files for class names. Now, go to the styles/globals.css file and remove any unused styles
● Theen add the Tailwind directives: @tailwind base;, @tailwind components;, and @tailwind utilities; at the top of the file. 
●Finally, start your development server using npm run dev, and you should now have a working Next.js project styled with Tailwind CSS.


Team  Leader:
Erica Muring
Team Members:
Chariza Mae Demetrial
Nash Aron Rioflorido
Fabian Lorejas
James Philip Guatno

Contributions: 
Erica Muring
●Oversees the entire project timeline, task assignments, and ensures the team meets deadlines.
●Sets up the project repository on GitHub and manages version control and branches.
●Assists in integrating all components and ensures code quality and consistency.
●Handles deployment of the final application

Chariza Mae Demetrial 
●Sets up dynamic routes using Next.js for user profiles (/users/[id]) and post details (/posts/[id]).
●Displays individual user info, including address and list of their posts.
●Displays post content and associated comments.

Nash Aron Rioflorido
●Creates reusable components such as headers, sidebars, buttons, and cards.
●Ensures responsive design across different devices.
●Documentation 

Fabian Lorejas
●Creates reusable components such as headers, sidebars, buttons, and cards.
●Ensures responsive design across different devices.

James Philip Guatno
●Creates reusable components such as headers, sidebars, buttons, and cards.
●Ensures responsive design across different devices.



Deployed URL:final-lesv - Overview – Vercel
