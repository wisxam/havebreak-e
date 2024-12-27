<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

  <header>
    <h1>Project Name</h1>
    <p>A modern ecommerce application built with Next.js, TypeScript, and NextAuth</p>
  </header>

  <section>
    <div>
      <h2>About the Project</h2>
      <p>This is an ecommerce project built with a modern tech stack. It integrates Next.js for server-side rendering, React Query for data fetching, and NextAuth for authentication using JWT tokens. The application features a clean UI with TailwindCSS, providing a smooth and dynamic user experience.</p>
    </div>
  </section>

  <section>
    <div class="content">
      <h2>Features</h2>
      <ul>
        <li>User authentication with NextAuth and JWT</li>
        <li>Route protection for authenticated users</li>
        <li>Dynamic data fetching and state management with React Query</li>
        <li>Responsive UI using TailwindCSS</li>
        <li>Supports role-based access control</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="content">
      <h2>Technologies Used</h2>
      <div class="tech-list">
        <div class="tech-item">
          <h3>Next.js</h3>
          <p>For server-side rendering and routing, providing a fast and dynamic user experience.</p>
        </div>
        <div class="tech-item">
          <h3>React Query</h3>
          <p>For efficient data fetching, caching, and synchronization of the app's state with the server.</p>
        </div>
        <div class="tech-item">
          <h3>NextAuth with JWT</h3>
          <p>For handling user authentication and session management securely using JWT tokens.</p>
        </div>
        <div class="tech-item">
          <h3>TailwindCSS</h3>
          <p>A utility-first CSS framework for fast styling of the application.</p>
        </div>
        <div class="tech-item">
          <h3>TypeScript</h3>
          <p>For type safety and better development experience, ensuring fewer runtime errors.</p>
        </div>
        <div class="tech-item">
          <h3>ShadCN</h3>
          <p>UI component library used to speed up development with pre-designed components.</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="content">
      <h2>How to Use</h2>
      <p>To run this project locally, you need to set up your environment variables in a `.env` file. Below are the steps to follow:</p>
      <ul>
        <li>1. Clone the repository to your local machine.</li>
        <li>2. Install the required dependencies by running:
          <code>npm install</code> or <code>yarn install</code>
        </li>
        <li>3. Create a `.env` file in the root directory of the project.</li>
        <li>4. Add the following environment variables to your `.env` file:</li>
      </ul>
      <pre>
NEXT_PUBLIC_API_BASE_URL
DATABASE_URL
NEXTAUTH_SECRET
NEXTAUTH_URL
SECRET_KEY
      </pre>
      <ul>
        <li>5. Ensure that your PostgreSQL database is set up and running locally with the correct credentials.</li>
        <li>6. Start the development server by running:
          <code>npm run dev</code> or <code>yarn dev</code>
        </li>
        <li>7. Open <code>http://localhost:3000</code> in your browser to access the application.</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="content">
      <h2>Note</h2>
      <p>Fake payment functionality, product updates, and cart management are achievable in this app, but were not implemented in this example. You can expand these features as needed.</p>
    </div>
  </section>


</body>

</html>
