import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={ styles.container }>
      <Link href='/a'>go to a</Link>
      <Link href='/b'>go to b</Link>
    </div>
  )
}
