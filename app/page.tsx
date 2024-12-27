import PageCustomize from "./components/pageCustomize";
import { Lock } from "lucide-react";
import SigninButton from "./components/signinButton";

export default function Home() {
  return (
    <div className="tracking-wider bg-gray-100 grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <PageCustomize />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded-md shadow-md max-w-lg mx-auto text-center">
          <h2 className="font-bold text-lg flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Route Protection Notice
          </h2>
          <p className="mt-2">
            All routes are protected. You must sign in to access and test the
            routes.
          </p>
          <div className="mt-2">
            <div className="flex gap-3 justify-center">
              <SigninButton />
              to continue. <br />
            </div>

            <small className="mt-2 text-sm text-gray-600">
              {" "}
              Authentication is powered by <strong>NextAuth</strong> with
              <strong>JWT</strong>.
            </small>
          </div>
        </div>

        <div className="bg-blue-100 text-blue-800 p-4 rounded-md shadow-md max-w-lg mx-auto text-center">
          <h2 className="font-bold text-lg">Technologies Used</h2>
          <p className="mt-2">
            This app is built using a modern stack of technologies to ensure a
            smooth and dynamic experience.
          </p>
          <ul className="mt-4 list-disc list-inside text-left">
            <li>
              <strong>ShadCN</strong> for UI components
            </li>
            <li>
              <strong>TailwindCSS</strong> for utility-first styling
            </li>
            <li>
              <strong>React Query</strong> for data fetching and state
              management
            </li>
            <li>
              <strong>Next.js</strong> for client-side and server-side
            </li>
            <li>
              <strong>TypeScript</strong> for type safety
            </li>
            <li>
              <strong>NextAuth</strong> with <strong>JWT</strong> for
              authentication and session management
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-blue-200 text-gray-700 p-4 rounded-md shadow-md max-w-lg mx-auto text-center">
          <p className="text-sm">
            Almost all kind of http requests were used, except for patch
          </p>
        </div>

        <div className="mt-8 bg-gray-200 text-gray-700 p-4 rounded-md shadow-md max-w-lg mx-auto text-center">
          <p className="text-sm">
            A note to mention that payment functionality, product updates, and
            cart management are achievable in this app, but were not implemented
            in this example since I've done most of the difficult parts and the
            rest is just a matter of time.
          </p>
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
