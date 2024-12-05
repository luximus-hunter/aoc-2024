import { Pages } from "../../lib/types.ts";

type Data = Lume.Data & {
  title: string;
  pages: Pages;
};

export default (data: Data, helpers: Lume.Helpers) => {
  console.log(data.pages);

  return (
    <>
      <h1>{data.title}</h1>

      <ul>
        {data.pages.map((calendar) =>
          calendar.map((problem) => (
            <li>
              <a href={`/${problem.year}/${problem.day}`}>
                Day {problem.day} {problem.year}: {problem.title}
              </a>
            </li>
          ))
        )}
      </ul>
    </>
  );
};