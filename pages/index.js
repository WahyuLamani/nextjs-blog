import Head from "next/head";
import Alert from "../components/alert";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getAllPostIds, getSortedPostsData } from "../lib/posts";
import { getApiData } from "../lib/api";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allApiData = await getApiData();
  const getId = getAllPostIds();
  return {
    props: {
      allPostsData,
      allApiData,
      getId,
    },
  };
}

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Alert type="success">
        <p>good</p>
      </Alert>

      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque
          aut eum aliquam harum ullam earum at magnam, amet aliquid excepturi
          voluptatem, et repudiandae, cupiditate tenetur consequatur quae quo
          suscipit!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a target="_blank" href="https://nextjs.org/learn">
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <ul className={utilStyles.list}>
          {props.allApiData.map(({ id, title, body }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {body}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
