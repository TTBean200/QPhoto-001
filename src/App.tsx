import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [location, setLocation] = useState<Array<Schema["Location"]["type"]>>([]);
    const { signOut } = useAuthenticator();


  function deleteLocation(id: string) {
    client.models.Location.delete({ id })
  }

  useEffect(() => {
    client.models.Location.observeQuery().subscribe({
      next: (data) => setLocation([...data.items]),
    });
  }, []);

  function createLocation() {
    client.models.Location.create({ /* content: window.prompt("Todo content") */ });
  }

  return (
    <main>
      {/* <h1>My todos</h1> */}
      <button onClick={createLocation}>+ new</button>
      <ul>
        {location.map(location => <li
          onClick={() => deleteLocation(location.id)}
          key={location.id}>
          {location.date}
        </li>)}
      </ul>
            <button onClick={signOut}>Sign out</button>

    </main>
  );
}

export default App;
