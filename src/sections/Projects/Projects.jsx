import styles from './ProjectsStyles.module.css';
import spotify from '../../assets/spotify-clone.png';
import image from '../../assets/image.png';
import attendance from '../../assets/attendance.png';
import hospital from '../../assets/hospital.png';
import traffic from '../../assets/traffic.png';
import depression from '../../assets/depression.png';
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
          p="Full-Stack Music Streaming and Upload App"
        />
        <ProjectCard
          src={image}
          link="https://github.com/Bandish10/Image-Encryption-and-Decryption"
          h3="Encryptify"
          p="Image Encryption and Decryption using AES & RSA SHA-256"
        />
        <ProjectCard
          src={attendance}
          link="https://github.com/Bandish10/E-Attendance-using-Blockchain"
          h3="BlockTrackr"
          p="E-Attendance System built on Blockchain"
        />
        <ProjectCard
          src={hospital}
          link="https://github.com/Bandish10/Hospital-Management-System"
          h3="CareTrack"
          p="Hospital Management System using Java"
        />
        <ProjectCard
          src={traffic}
          link="https://github.com/Bandish10/yolov8-supervision-traffic-management"
          h3="Traffic Management System"
          p="using YOLOv8"
        />
        <ProjectCard
          src={depression}
          link="https://github.com/Bandish10/Depression_Detection_MultiModel-main"
          h3="Depression Detection Analysis"
          p="Comparing multiple NLP Models"
        />
      </div>
    </section>
  );
}

export default Projects;
