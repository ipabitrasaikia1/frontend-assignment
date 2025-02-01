import { useEffect, useState, useCallback } from "react";
import ProjectTable from "./components/ProjectTable";
import Pagination from "./components/Pagination";
import InfoModal from "./components/InfoModal";
import InfoCard from "./components/InfoCard";
import "./styles.css";

const App = () => {
    const [error, setError] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
      const fetchData = async () => {
          const cachedData = localStorage.getItem("projects");
          if (cachedData) {
              setProjects(JSON.parse(cachedData));
              setLoading(false);
          } else {
              try {
                  const response = await fetch("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json");
                  const data = await response.json();
                  setProjects(data);
                  localStorage.setItem("projects", JSON.stringify(data));
                  setLoading(false);
              } catch (error) {
                  setError("Error fetching data. Please try again.");
                  setLoading(false);
              }
          }
      };
      fetchData();
  }, []);
  

    // Pagination Logic
    const setPage = useCallback((page) => {
      setCurrentPage(page);
  }, []);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

    // Modal 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div className="container">
            <h1>Kickstarter Projects</h1>
            {error && <p role="alert" className="error-text">{error}</p>}
            {loading ? <p>Loading...</p> : <ProjectTable onClick={(currentProject) => openModal(currentProject)} projects={currentItems} />}
            <Pagination
                totalItems={projects.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setPage}
                maxPagesToShow={5}
            />
                    <div>

            {isModalOpen && (
                <InfoModal title="Project Details" onClose={() => setIsModalOpen(false)}>
                    <InfoCard 
                        title={selectedProject?.title}
                        details={selectedProject}
                    />
                </InfoModal>
            )}
        </div>

        </div>
    ); 
};

export default App;