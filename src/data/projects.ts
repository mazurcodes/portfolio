import { TechStack } from "src/types/constants";
import type { ProjectListType } from "../types";

export const projectsData: ProjectListType = [
  {
    id: 1,
    slug: "gifter",
    title: "Gifter",
    description:
      "How not to love holidays... The clutter is everywhere... maybe as a part of the feeling. The minimalist in me said ‘No’. Get me the gifts that will light me up, help my hobbies, level up my life.",
    overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur, facilis tempore quisquam, voluptates odit eos corrupti, quae labore praesentium voluptate velit aspernatur magni amet delectus dolores necessitatibus officiis porro qui laborum quod dicta voluptatem. Quod iure earum error facilis dicta asperiores at cum possimus corrupti sunt nobis, accusamus, exercitationem voluptate, rerum nihil laborum vel harum maiores nostrum a? Dolore aliquam iste, totam, quibusdam praesentium culpa expedita ducimus a accusamus perferendis cumque ipsum pariatur ullam mollitia aliquid repellat provident officiis maxime commodi quasi odio dolores neque blanditiis? Doloremque quibusdam, porro earum eum quidem numquam quo veniam voluptatum eius quisquam repellendus quam minus, rerum consequuntur voluptates dolorem esse obcaecati blanditiis quod, eveniet magni nesciunt deserunt architecto? Tempore cum nulla, a minus, esse odio eaque voluptatibus commodi minima at reprehenderit placeat dolorum. Eum excepturi illum natus eos neque ipsum provident illo placeat rerum delectus quis, amet explicabo. Tempora dignissimos necessitatibus perferendis ipsam debitis illo omnis veniam recusandae quidem, esse ad, enim ipsa ducimus inventore repudiandae quis dolorum. Amet impedit delectus qui aspernatur magni vitae, maiores esse similique. Ullam aperiam asperiores quis qui libero temporibus velit tempora iste, praesentium unde error totam deserunt quo illum consectetur, voluptas atque similique optio molestiae quae fuga.",
    technology: [
      TechStack.REACT,
      TechStack.NEXTJS,
      TechStack.ASTRO,
      TechStack.CYPRESS,
      TechStack.EXPRESSJS,
      TechStack.HTML,
      TechStack.JAVASCRIPT,
      TechStack.TYPESCRIPT,
      TechStack.PLAYWRIGHT,
      TechStack.SCSS,
      TechStack.VITEST,
    ],
    userFlow: ["main", "search"],
    colors: ["#422400", "#d2d2d2", "#ffd11aff"],
    typography: {
      font: "Arial",
      weights: [400, 700, 900],
    },
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 2,
    slug: "commenteer",
    title: "Commenteer",
    description:
      "Funny, engaging, sincere, and truthful viewers. Yup, the struggle of the youtuber... Please leave a comment in the comment section of the video... Or not, I’ll do it for you.",
    overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur, facilis tempore quisquam, voluptates odit eos corrupti, quae labore praesentium voluptate velit aspernatur magni amet delectus dolores necessitatibus officiis porro qui laborum quod dicta voluptatem. Quod iure earum error facilis dicta asperiores at cum possimus corrupti sunt nobis, accusamus, exercitationem voluptate, rerum nihil laborum vel harum maiores nostrum a? Dolore aliquam iste, totam, quibusdam praesentium culpa expedita ducimus a accusamus perferendis cumque ipsum pariatur ullam mollitia aliquid repellat provident officiis maxime commodi quasi odio dolores neque blanditiis? Doloremque quibusdam, porro earum eum quidem numquam quo veniam voluptatum eius quisquam repellendus quam minus, rerum consequuntur voluptates dolorem esse obcaecati blanditiis quod, eveniet magni nesciunt deserunt architecto? Tempore cum nulla, a minus, esse odio eaque voluptatibus commodi minima at reprehenderit placeat dolorum. Eum excepturi illum natus eos neque ipsum provident illo placeat rerum delectus quis, amet explicabo. Tempora dignissimos necessitatibus perferendis ipsam debitis illo omnis veniam recusandae quidem, esse ad, enim ipsa ducimus inventore repudiandae quis dolorum. Amet impedit delectus qui aspernatur magni vitae, maiores esse similique. Ullam aperiam asperiores quis qui libero temporibus velit tempora iste, praesentium unde error totam deserunt quo illum consectetur, voluptas atque similique optio molestiae quae fuga.",
    technology: [TechStack.REACT, TechStack.NEXTJS],
    userFlow: ["main", "search"],
    colors: ["#422400", "#d2d2d2"],
    typography: {
      font: "Arial",
      weights: [400, 700, 900],
    },
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 3,
    slug: "backnotes",
    title: "BackNotes",
    description:
      "Your favorite markdown editor... Well, at the beginning of the programming jurney the urge to remember everything is huge. Then you realise that not everything need to be remembered...",
    overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur, facilis tempore quisquam, voluptates odit eos corrupti, quae labore praesentium voluptate velit aspernatur magni amet delectus dolores necessitatibus officiis porro qui laborum quod dicta voluptatem. Quod iure earum error facilis dicta asperiores at cum possimus corrupti sunt nobis, accusamus, exercitationem voluptate, rerum nihil laborum vel harum maiores nostrum a? Dolore aliquam iste, totam, quibusdam praesentium culpa expedita ducimus a accusamus perferendis cumque ipsum pariatur ullam mollitia aliquid repellat provident officiis maxime commodi quasi odio dolores neque blanditiis? Doloremque quibusdam, porro earum eum quidem numquam quo veniam voluptatum eius quisquam repellendus quam minus, rerum consequuntur voluptates dolorem esse obcaecati blanditiis quod, eveniet magni nesciunt deserunt architecto? Tempore cum nulla, a minus, esse odio eaque voluptatibus commodi minima at reprehenderit placeat dolorum. Eum excepturi illum natus eos neque ipsum provident illo placeat rerum delectus quis, amet explicabo. Tempora dignissimos necessitatibus perferendis ipsam debitis illo omnis veniam recusandae quidem, esse ad, enim ipsa ducimus inventore repudiandae quis dolorum. Amet impedit delectus qui aspernatur magni vitae, maiores esse similique. Ullam aperiam asperiores quis qui libero temporibus velit tempora iste, praesentium unde error totam deserunt quo illum consectetur, voluptas atque similique optio molestiae quae fuga.",
    technology: [TechStack.REACT, TechStack.NEXTJS],
    userFlow: ["main", "search"],
    colors: ["#dddddd", "#d2d2d2"],
    typography: {
      font: "Arial",
      weights: [400, 700, 900],
    },
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 4,
    slug: "backnotesapi",
    title: "BackNotesAPI",
    description:
      "... and then you need a friend that will run in the background preparing your ‘knowledge’ to be served.",
    overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur, facilis tempore quisquam, voluptates odit eos corrupti, quae labore praesentium voluptate velit aspernatur magni amet delectus dolores necessitatibus officiis porro qui laborum quod dicta voluptatem. Quod iure earum error facilis dicta asperiores at cum possimus corrupti sunt nobis, accusamus, exercitationem voluptate, rerum nihil laborum vel harum maiores nostrum a? Dolore aliquam iste, totam, quibusdam praesentium culpa expedita ducimus a accusamus perferendis cumque ipsum pariatur ullam mollitia aliquid repellat provident officiis maxime commodi quasi odio dolores neque blanditiis? Doloremque quibusdam, porro earum eum quidem numquam quo veniam voluptatum eius quisquam repellendus quam minus, rerum consequuntur voluptates dolorem esse obcaecati blanditiis quod, eveniet magni nesciunt deserunt architecto? Tempore cum nulla, a minus, esse odio eaque voluptatibus commodi minima at reprehenderit placeat dolorum. Eum excepturi illum natus eos neque ipsum provident illo placeat rerum delectus quis, amet explicabo. Tempora dignissimos necessitatibus perferendis ipsam debitis illo omnis veniam recusandae quidem, esse ad, enim ipsa ducimus inventore repudiandae quis dolorum. Amet impedit delectus qui aspernatur magni vitae, maiores esse similique. Ullam aperiam asperiores quis qui libero temporibus velit tempora iste, praesentium unde error totam deserunt quo illum consectetur, voluptas atque similique optio molestiae quae fuga.",
    technology: [TechStack.REACT, TechStack.NEXTJS],
    userFlow: ["main", "search"],
    colors: ["#dddddd", "#d2d2d2"],
    typography: {
      font: "Arial",
      weights: [400, 700, 900],
    },
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 5,
    slug: "weatherapp",
    title: "Weather App",
    description:
      "Sole purpose of this app was to become my virtual testing pig... for a react-testing-library.",
    overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur, facilis tempore quisquam, voluptates odit eos corrupti, quae labore praesentium voluptate velit aspernatur magni amet delectus dolores necessitatibus officiis porro qui laborum quod dicta voluptatem. Quod iure earum error facilis dicta asperiores at cum possimus corrupti sunt nobis, accusamus, exercitationem voluptate, rerum nihil laborum vel harum maiores nostrum a? Dolore aliquam iste, totam, quibusdam praesentium culpa expedita ducimus a accusamus perferendis cumque ipsum pariatur ullam mollitia aliquid repellat provident officiis maxime commodi quasi odio dolores neque blanditiis? Doloremque quibusdam, porro earum eum quidem numquam quo veniam voluptatum eius quisquam repellendus quam minus, rerum consequuntur voluptates dolorem esse obcaecati blanditiis quod, eveniet magni nesciunt deserunt architecto? Tempore cum nulla, a minus, esse odio eaque voluptatibus commodi minima at reprehenderit placeat dolorum. Eum excepturi illum natus eos neque ipsum provident illo placeat rerum delectus quis, amet explicabo. Tempora dignissimos necessitatibus perferendis ipsam debitis illo omnis veniam recusandae quidem, esse ad, enim ipsa ducimus inventore repudiandae quis dolorum. Amet impedit delectus qui aspernatur magni vitae, maiores esse similique. Ullam aperiam asperiores quis qui libero temporibus velit tempora iste, praesentium unde error totam deserunt quo illum consectetur, voluptas atque similique optio molestiae quae fuga.",
    technology: [TechStack.REACT, TechStack.NEXTJS],
    userFlow: ["main", "search"],
    colors: ["dddddd", "#d2d2d2"],
    typography: {
      font: "Arial",
      weights: [400, 700, 900],
    },
    screenPaths: ["@assets/gifter-01.png"],
  },
];
