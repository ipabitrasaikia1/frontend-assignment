import React from "react";

const ProjectTable = ({ projects }) => {
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Percentage Funded</th>
                    <th>Amount Pledged</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{project["percentage.funded"]}%</td>
                        <td>${project["amt.pledged"]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProjectTable;