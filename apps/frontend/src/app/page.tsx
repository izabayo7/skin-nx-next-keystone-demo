import styles from './page.module.css';
import { Ui } from '@skin-nx-next-keystone-demo/ui';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome frontend 👋
            </h1>
          </div>

          <div className="mt-4">
            <Ui />
          </div>
        </div>
      </div>
    </div>
  );
}
