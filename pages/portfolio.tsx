import type { NextPage } from "next";
import styles from 'styles/Portfolio.module.scss';

import ProjectCard from "components/ProjectCard";

import project_cards from "cfg/project_cards";

const Portfolio: NextPage = () => {
    return(
        <div className={`fullscreen ${styles.portfolio}`}>
            <div className={styles.projcontainer}>
                {
                    project_cards.map((card, i) => {
                        return <ProjectCard key={i} {...card} />
                    })
                }
            </div>
        </div>
    );
}

export default Portfolio;