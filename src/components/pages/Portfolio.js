import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Portfolio() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/jmcgown14/repos')
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 id="my-work">My Portfolio</h1>
      <section className="all-project-cards">
        <div className="sub-project-cards">
          {repositories.map((repository) => (
            <article className="project-card" key={repository.id}>
              <a href={repository.html_url}>
                <h3>{repository.name}</h3>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
