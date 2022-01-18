import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
/* import { signIn, signOut,useSession } from "next-auth/react" */

import styles from './styles.module.scss'

const SignInButton: React.FC = () => {

    const isUserLoggerdIn = true
    
  return isUserLoggerdIn ? (
    <button 
    className={styles.signInButton}
    type="button">
        <FaGithub color='#04d361'/>
      Alisson Silva
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
    className={styles.signInButton}
    type="button">
        <FaGithub color='#eba417' />
      Sign in with Github
    </button>
  )
}

export default SignInButton;