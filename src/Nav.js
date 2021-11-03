export default function Nav({ titles, setArticleId }) {
    return (
      <nav>
        <ul>
          {titles &&
            titles.map((a) => (
              <li key={a.id} onClick={() => setArticleId(a.id)}>
                {a.title}
              </li>
            ))}
        </ul>
      </nav>
    );
  }