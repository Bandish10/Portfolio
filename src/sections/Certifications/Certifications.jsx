import styles from './CertificationsStyles.module.css';
import awsCertificate from '../../assets/awsCertificate.png';
import cdlCertificate from '../../assets/cdlCertificate.png';
import ciscoCertificate from '../../assets/ciscoCertificate.png';
import pythonCertificate from '../../assets/pythonCertificate.png';
import javaCertificate from '../../assets/javaCertificate.png';
import phpmysqlCertificate from '../../assets/phpmysqlCertificate.png';
import CertificateCard from '../../common/CertificateCard';

function Certificates() {
  return (
    <section id="certificates" className={styles.container}>
      <h1 className="sectionTitle">Certifications</h1>
      <div className={styles.certificatesContainer}>
        <CertificateCard
          src={awsCertificate}
          h3="Certified Cloud Practicioner"
          p="AWS"
        />
        <CertificateCard
          src={cdlCertificate}
          h3="Cloud Digital Leader"
          p="Google"
        />
        <CertificateCard
          src={ciscoCertificate}
          h3="Introduction to Packet Tracer"
          p="Cisco"
        />
        <CertificateCard
          src={pythonCertificate}
          h3="Python for Everybody"
          p="University of Michigan(Coursera)"
        />
        <CertificateCard
          src={javaCertificate}
          h3="Spoken Tutorial: Java"
          p="IIT Bombay"
        />
        <CertificateCard
          src={phpmysqlCertificate}
          h3="Spoken Tutorial: PHP & MYSQL"
          p="IIT BOMBAY"
        />
      </div>
    </section>
  );
}

export default Certificates;
