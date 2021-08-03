import Link from "next/link";

import SectionLayout from "../components/sectionLayout";

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

const PostLink = props => (
  <li>
    <Link as={`/post/${props.post.id}`} href={`/post/[title]`}>
      <a>{props.post.title}</a>
    </Link>
  </li>
);

const Blog = props => {
  // note: CSS rules have no effect on elements inside of a child component. 
  // (use <style jsx global> instead)

  return (
    <SectionLayout>
      <h1 className="title">My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>

      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }
      `}</style>
    </SectionLayout>
  );
};

Blog.getInitialProps = async function() {
  //const data = fetch(...);
  //const title = data.json();
  // ... etc

  return {
    title: "My title"
  };
};

export default Blog;
