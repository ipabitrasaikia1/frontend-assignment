import React from "react";

const ProjectTable = ({ onClick ,projects }) => {
    return (
        <fieldset>
        <legend>List of Kickstarter Projects</legend>
            <table className="styled-table" aria-live="polite">

                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Percentage Funded</th>
                        <th scope="col">Amount Pledged</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={index} onClick={() => onClick(project)}>
                            <td scope="row">{project['s.no']}</td>
                            <td aria-label={`Funded ${project["percentage.funded"]}%`}>
                                {project["percentage.funded"]}%
                            </td>
                            <td aria-label={`Pledged $${project["amt.pledged"]}`}>
                                ${project["amt.pledged"]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </fieldset>
    );
};

export default ProjectTable;
