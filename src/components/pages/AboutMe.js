import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <h1 id="about-me">About Me</h1>
      <div class="bio-pic-container">
        <img class="bio-pic" src="./componets/assets/biopic.jpg" alt="Johnathan McGown"></img>
    </div>
      <article class="my-info">
            <p>
                I am a driven worker, focused, and task oriented. I am able to adapt quickly to new styles of
                work and fill new roles with minimal training. I have a high standard for getting things done in a
                proper
                and timely manner. I am a personable individual and enjoy working on teams of like-minded people. I am
                always up for the next challenge and looking for new opportunities to grow.
            </p>
        </article>
    </div>
  );
}
