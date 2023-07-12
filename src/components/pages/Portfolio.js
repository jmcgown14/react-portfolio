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
          } else if (repository.name === "wallstreetcuriosity") {
            imageUrl =
              "https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?size=626&ext=jpg&ga=GA1.2.1483187716.1685224903&semt=sph";
          } else if (repository.name === "boardgameshelf") {
                imageUrl =
                  "https://img.freepik.com/free-photo/top-view-beautiful-rpg-still-life-items_23-2149282423.jpg?w=1380&t=st=1689192490~exp=1689193090~hmac=7f1a76a6136701d9a73196b399d6f4c72d5174574991c8b9895b86eff423dd4e";
          } else if (repository.name === "react-portfolio") {
            imageUrl =
              "https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg?w=1060&t=st=1685225475~exp=1685226075~hmac=84d5327cd0da2e013ae8393e050c9cdde2c052b523ed4174d6eabb0d3afe2916";
          } else {
            // Default image URL if no specific image is available for the repo
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
      <h4>{repository.name}</h4>
    </a>
  </article>
))}
        </div>
      </section>
    </div>
  );
}
