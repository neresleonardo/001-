import {RepositoryItem} from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

// https://api.github.com/users/neresleonardo/repos


export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
    fetch('https://api.github.com/users/neresleonardo/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
    }, []); // Cuidado para não deixar sem o útimo parametro 

    return (
        <section className="respository-list">
            <h1>Lista de Respositóries</h1>

            <ul>
                {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository} />
                })} 
            </ul>
        </section>
    );
};