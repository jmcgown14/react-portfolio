import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Portfolio() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/jmcgown14/repos")
      .then((response) => {
        const sortedRepositories = response.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        const recentRepositories = sortedRepositories.slice(0, 6);

        const updatedRepositories = recentRepositories.map((repository) => {
          // Add logic to determine the image URL based on repository name or other criteria
          let imageUrl;

          if (repository.name === "text-editor") {
            imageUrl =
              "https://img.freepik.com/premium-photo/abstract-modern-tech-programming-code-screen-developer-c-programming-language-computer-script-technology-background-software_505353-472.jpg";
          } else if (repository.name === "social-network-api") {
            imageUrl =
              "https://img.freepik.com/free-vector/programmer-work-with-working-day-symbols-flat-illustration_1284-60322.jpg?w=1060&t=st=1685225073~exp=1685225673~hmac=a9e0232e7d3c7d6c52ce52f74c609306419e9d9c55240de94f8e3edf616b9985";
          } else if (repository.name === "tech-blog") {
            imageUrl =
              "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?w=996&t=st=1685225217~exp=1685225817~hmac=e0b4963ea1b8054600b014456ed538edb26340908de99cadd54b5e37a48ea1b2";
          } else if (repository.name === "ecommerce-backend") {
            imageUrl =
              "https://img.freepik.com/free-photo/box-market-electronic-ordering-shop-basket_1421-567.jpg?w=1380&t=st=1685225384~exp=1685225984~hmac=22d0ade782da6faef0ec86c5796901e91097d80f2c837501fe79b8a12b6b2bfc";
          } else if (repository.name === "react-portfolio") {
            imageUrl =
              "https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg?w=1060&t=st=1685225475~exp=1685226075~hmac=84d5327cd0da2e013ae8393e050c9cdde2c052b523ed4174d6eabb0d3afe2916";
          } else {
            // Set a default image URL if no specific image is available for the repository
            imageUrl = "https://img.freepik.com/premium-photo/keyboard-button-coming-soon_74097-511.jpg?w=1060";
          }

          return {
            ...repository,
            imageUrl: imageUrl,
          };
        });

        setRepositories(updatedRepositories);
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
  <article className="project-card" key={repository.id} style={{ backgroundImage: `url(${repository.imageUrl})` }}>
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
