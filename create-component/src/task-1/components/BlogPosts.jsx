import styles from "./BlogPosts.module.css";

function Blog() {
  return (
    <section className={styles.blog}>
      <h2>Latest Articles</h2>

      <article className={styles.post}>
        <h3>Mastering React Components</h3>
        <p>
          Components are the heart of React apps. Learn how to structure, style,
          and optimize them.
        </p>
        <p>
          <strong>Author:</strong> Sarah Dev
        </p>
      </article>

      <article className={styles.post}>
        <h3>Using Props Like a Pro</h3>
        <p>
          Make your React components reusable and dynamic with props and
          destructuring.
        </p>
        <p>
          <strong>Author:</strong> John Code
        </p>
      </article>

      <article className={styles.post}>
        <h3>Understanding State and Effects</h3>
        <p>
          Learn the fundamentals of useState and useEffect with real-life
          examples.
        </p>
        <p>
          <strong>Author:</strong> Lina Hooks
        </p>
      </article>
    </section>
  );
}

export default Blog;
