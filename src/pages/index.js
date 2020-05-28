import styles from "./index.css"
import { ApolloProvider } from "react-apollo"
import { client } from "../apollo/client"
import { UserProfile } from "../components/user"

export default props => {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
        </li>
      </ul>
      <ApolloProvider client={client}>
        <UserProfile></UserProfile>
      </ApolloProvider>
    </div>
  )
}
