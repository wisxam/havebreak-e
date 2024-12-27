<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Name - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
    }

    header {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 2rem 0;
    }

    header h1 {
      font-size: 3rem;
    }

    section {
      padding: 2rem;
    }

    .content {
      max-width: 900px;
      margin: 0 auto;
      background-color: #fff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #007bff;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }

    ul {
      padding-left: 20px;
    }

    li {
      margin-bottom: 0.5rem;
    }

    code {
      background-color: #f8f8f8;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
    }

    .tech-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .tech-item {
      background-color: #e7f1f7;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 1rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>

<body>

  <header>
    <h1>Project Name</h1>
    <p>A modern ecommerce application built with Next.js, TypeScript, and NextAuth</p>
  </header>

  <section>
    <div class="content">
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
      <h2>Note</h2>
      <p>Fake payment functionality, product updates, and cart management are achievable in this app, but were not implemented in this example. You can expand these features as needed.</p>
    </div>
  </section>

  <footer>
    <p>© 2024 Project Name. All Rights Reserved.</p>
  </footer>

</body>

</html>
