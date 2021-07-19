import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

import styles from './Breadcrumbs.scss';

const PureBreadcrumbs = ({ breadcrumbs }) => (
  <ol className={styles.breadcrumbs}>
    {breadcrumbs.map(
      ({ breadcrumb, match }, index) =>
        index !== 0 && (
          <li className={styles.breadcrumb} key={match.url}>
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link to={match.url || ''}>{breadcrumb}</Link>
                <span className={styles.separator}>/</span>
              </>
            ) : (
              <span>{breadcrumb}</span>
            )}
          </li>
        )
    )}
  </ol>
);

export default withBreadcrumbs()(PureBreadcrumbs);
