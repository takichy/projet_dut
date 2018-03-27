-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 27 mars 2018 à 17:39
-- Version du serveur :  5.6.34-log
-- Version de PHP :  7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `db_pigeon`
--

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id_contact` int(11) NOT NULL,
  `nom` text NOT NULL,
  `mail` text NOT NULL,
  `telephone` int(11) NOT NULL,
  `objet` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pigeon`
--

CREATE TABLE `pigeon` (
  `couleur` text NOT NULL,
  `numero_bague` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `annee_naissance` year(4) NOT NULL,
  `sexe` text NOT NULL,
  `etat` text NOT NULL,
  `souche` text NOT NULL,
  `nom_pigeon` text NOT NULL,
  `pigeonnier` text NOT NULL,
  `num_bague_pere` int(11) NOT NULL,
  `num_bague_mere` int(11) NOT NULL,
  `annee_naiss_pere` year(4) NOT NULL,
  `annee_naiss_mere` year(4) NOT NULL,
  `supplement` text NOT NULL,
  `date_nv_naiss` date NOT NULL,
  `copain` text NOT NULL,
  `serie` text NOT NULL,
  `nid` text NOT NULL,
  `commentaire` text NOT NULL,
  `pose` text NOT NULL,
  `eclos` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(100) NOT NULL,
  `nom` text NOT NULL,
  `prenom` text NOT NULL,
  `mail` varchar(100) NOT NULL,
  `telephone` int(11) NOT NULL,
  `adresse` text NOT NULL,
  `pays` text NOT NULL,
  `ville` text NOT NULL,
  `code_postal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `nom`, `prenom`, `mail`, `telephone`, `adresse`, `pays`, `ville`, `code_postal`) VALUES
(1, 'oulidi omali', 'abdelhay', 'abdelhayoulidiomali@gmail.com', 645460088, 'rue 50 boulevard narjiss', 'maroc', 'fes', 30080);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_contact`);

--
-- Index pour la table `pigeon`
--
ALTER TABLE `pigeon`
  ADD UNIQUE KEY `numero_bague` (`numero_bague`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `telephone` (`telephone`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id_contact` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
