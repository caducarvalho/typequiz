import React, { useState, useEffect, useCallback } from 'react';
// import styled from 'styled-components';
import Widget from '../Widget';
import Loading from '../Loading';

const Projects = () => {
  const [projects, handleProjects] = useState(null);
  const [pending, togglePending] = useState(true);
  const [busy, toggleBusy] = useState(false);

  const fetchProjects = useCallback(() => {
    toggleBusy(true);

    try {
      fetch('https://api.github.com/search/repositories?q=topic:aluraquiz&sort=updated&per_page=5', {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          toggleBusy(false);
          togglePending(false);
          handleProjects(response);
        });
    } catch (err) {
      toggleBusy(false);
      togglePending(false);
    }
  });

  useEffect(() => {
    if (projects === null && !busy) fetchProjects();
  });

  return (
    <Widget>
      <Widget.Content>
        <h2>Quizes da galera</h2>
        <p>Veja os quizes mais recentes para testar seus conhecimentos em outros assuntos:</p>

        {pending
          ? <Loading />
          : (
            <Widget.Links>
              {(projects !== null && projects.items.length > 0)
                ? (projects.items.map((p) => (
                  <li key={p.id}>
                    <Widget.Link href={p.homepage} target="_blank" rel="noopener noreferrer">
                      <strong>{p.owner.login}</strong>
                      {' – '}
                      {p.name}
                    </Widget.Link>
                  </li>
                )))
                : <li>Projetos não encotrados</li>}
            </Widget.Links>
          )}
      </Widget.Content>
    </Widget>
  );
};

export default Projects;
