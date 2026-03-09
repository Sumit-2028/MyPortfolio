import "./styles/CodingStats.css";

const stats = [
  {
    label: "Problems Solved",
    value: "200+",
    detail: "Solved 200+ coding problems on LeetCode and similar platforms.",
  },
  {
    label: "Contest Experience",
    value: "20+",
    detail: "Participated in 20+ coding contests focused on speed and accuracy.",
  },
  {
    label: "Core Strength",
    value: "DSA",
    detail: "Strong in Graphs, Trees, Dynamic Programming, and Backend problem solving.",
  },
];

const CodingStats = () => {
  return (
    <section className="coding-section section-container" id="achievements">
      <div className="coding-container">
        <span className="coding-kicker">Problem Solving Profile</span>
        <h2 className="title">
          Coding <span>Achievements</span>
        </h2>
        <div className="coding-sub-wrap">
          <p className="coding-sub para">
            This section showcases my competitive coding discipline, problem-solving depth, and consistency in DSA.
          </p>
        </div>

        <div className="coding-grid">
          {stats.map((item) => (
            <article className="coding-card" key={item.label}>
              <h3>{item.label}</h3>
              <div className="coding-value">{item.value}</div>
              <p className="para">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
