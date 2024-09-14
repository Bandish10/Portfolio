import styles from './ProjectsStyles.module.css';
import spotify from '../../assets/spotify-clone.png';
import image from '../../assets/image.png';
import attendance from '../../assets/attendance.png';
import hospital from '../../assets/hospital.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={spotify}
          link="https://github.com/Bandish10/Spotify-clone"
          h3="Spotify Clone"
          p="Music Streaming App"
        />
        <ProjectCard
          src={image}
          link="https://github.com/Bandish10/Image-Encryption-and-Decryption"
          h3="Image Encryption and Decryption"
          p="AES & RSA SHA-256"
        />
        <ProjectCard
          src={attendance}
          link="https://github.com/Bandish10/E-Attendance-using-Blockchain"
          h3="E-Attendance System"
          p="Built on Blockchain"
        />
        <ProjectCard
          src={hospital}
          link="https://github.com/Bandish10/Hospital-Management-System"
          h3="Hospital Management System"
          p="Java"
        />
      </div>
    </section>
  );
}

export default Projects;
