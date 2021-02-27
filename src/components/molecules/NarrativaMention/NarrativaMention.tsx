import React, { FC } from 'react';
import Anchor from '../../atoms/Anchor/Anchor';
import styles from './NarrativaMention.module.scss';

const NarrativaMention: FC = () => {
  return (
    <div className={styles.nmWrapper}>
      <a href="https://www.narrativa.com">
        <img
          src={require('../../../../public/images/narrativa.png')}
          alt="Narrativa logo"
        />
      </a>
      <p>
        The API is provided by Narrativa COVID-19 Project, which is a non-profit
        project.
      </p>
      <p>The present data in this page was generated automatically from:</p>
      <div className={styles.nmAnchors}>
        <Anchor href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/situacionActual.htm">
          /Ministerio de Sanidad de España.
        </Anchor>
        <Anchor href="https://github.com/pcm-dpc/COVID-19">
          /Dipartimento della Protezione Civile de Italia.
        </Anchor>
        <Anchor href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Situationsberichte/Gesamt.html">
          /Robert Koch Institute of Germany.
        </Anchor>
        <Anchor href="https://www.santepubliquefrance.fr/maladies-et-traumatismes/maladies-et-infections-respiratoires/infection-Anchor-coronavirus/articles/infection-au-nouveau-coronavirus-sars-cov-2-covid-19-france-et-monde">
          /Santé publique France.
        </Anchor>
        <Anchor href="https://systems.jhu.edu/research/public-health/ncov/">
          /Johns Hopkins University.
        </Anchor>
      </div>
    </div>
  );
};

export default NarrativaMention;
