import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1 id="my-work">My Portfolio</h1>
      <section class="all-project-cards">
            <article class="project-card" id="refactory-challenge">
                <a href="https://jmcgown14.github.io/refactory-challenge/">
                    <h3> Refactory Challenge </h3>
                </a>
            </article>
            <div class="sub-project-cards">
                <article class="project-card" id="forest">
                    <h3>Forest</h3>
                </article>
                <article class="project-card" id="planets">
                    <h3>Planets</h3>
                </article>
                <article class="project-card" id="tower">
                    <h3>Tower</h3>
                </article>
            </div>
        </section>
    </div>
  );
}
