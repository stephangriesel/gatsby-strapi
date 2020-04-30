import React from "react"
import Layout from "../components/layout"
import styles from "../css/clients.module.css"
import Title from "../components/Title"
const clients = () => {
  return (
    <Layout>
      <section className={styles.clients}>
        <Title title="clients"></Title>
        <article className={styles.text}>
          <p>clients</p>
        </article>
      </section>
    </Layout>
  )
}

export default clients
