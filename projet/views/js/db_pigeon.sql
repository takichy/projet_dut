-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 30, 2018 at 07:49 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pigeon`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id_contact` int(11) NOT NULL,
  `nom` text NOT NULL,
  `mail` text NOT NULL,
  `telephone` int(11) NOT NULL,
  `objet` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id_contact`, `nom`, `mail`, `telephone`, `objet`, `message`) VALUES
(3, 'elouarti nezha', 'mojako-mojako@live.com', 645460088, 'probleme', 'probbbbbkgjgfh'),
(4, 'abdelhay oulidi omali', 'abdelhayoulidiomali@gmail.com', 645460088, 'probelm', 'fuck you');

-- --------------------------------------------------------

--
-- Table structure for table `pigeon`
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
  `date_nv_naiss` date DEFAULT NULL,
  `copain` text NOT NULL,
  `serie` text NOT NULL,
  `nid` text NOT NULL,
  `commentaire` text NOT NULL,
  `pose` text NOT NULL,
  `eclos` text NOT NULL,
  `date_vaccination` date NOT NULL,
  `description` text NOT NULL,
  `termine_par` text NOT NULL,
  `medication` text NOT NULL,
  `dosage` text NOT NULL,
  `commentaire_vaccination` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pigeon`
--

INSERT INTO `pigeon` (`couleur`, `numero_bague`, `id_user`, `annee_naissance`, `sexe`, `etat`, `souche`, `nom_pigeon`, `pigeonnier`, `num_bague_pere`, `num_bague_mere`, `annee_naiss_pere`, `annee_naiss_mere`, `supplement`, `date_nv_naiss`, `copain`, `serie`, `nid`, `commentaire`, `pose`, `eclos`, `date_vaccination`, `description`, `termine_par`, `medication`, `dosage`, `commentaire_vaccination`) VALUES
('', 1, 1, 2018, 'Male', 'Active', 'souche', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', ''),
('', 2, 1, 2018, 'Male', 'Active', 'souche', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', ''),
('', 3, 1, 2018, 'Male', 'Active', 'souche', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', ''),
('', 4, 1, 2018, 'Male', 'Active', 'souche', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', ''),
('undefined', 5, 1, 2018, 'Male', 'Active', 'souche', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', ''),
('undefined', 6, 1, 2018, 'Jeune', 'Active', 'souche', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', ''),
('undefined', 7, 1, 2018, 'Male', 'Active', 'souche', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', ''),
('undefined', 8, 1, 2018, 'Male', 'Active', 'souche', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', ''),
('', 55, 1, 0000, 'Female', '', '', '', 'abdelhay', 0, 0, 0000, 0000, '', '2018-03-08', 'copain', 'serie', 'nid', 'commentaire', 'posé', 'eclos', '0000-00-00', 'description', 'termine', 'medication', 'dosage', 'commentaire vaccination'),
('undefined', 78, 1, 2018, 'Male', 'Active', 'souche', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', ''),
('', 85, 1, 0000, 'Female', '', '', '', '', 0, 0, 0000, 0000, '', '0000-00-00', 'copain', 'serie', 'nid', 'jhhh', 'posé', 'eclos', '0000-00-00', '', '', '', '', ''),
('undefined', 102, 1, 2018, 'Jeune', 'Vendu', 'souche', 'nom', 'pigeonnier', 301, 201, 2016, 2017, 'supplement ', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', ''),
('undefined', 879, 1, 2018, 'Male', 'Active', 'souche', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
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
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `nom`, `prenom`, `mail`, `telephone`, `adresse`, `pays`, `ville`, `code_postal`) VALUES
(1, 'oulidi omali', 'abdelhay', 'abdelhayoulidiomali@gmail.com', 645460088, 'rue 50 boulevard narjiss', 'maroc', 'fes', 30080);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_contact`);

--
-- Indexes for table `pigeon`
--
ALTER TABLE `pigeon`
  ADD UNIQUE KEY `numero_bague` (`numero_bague`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `telephone` (`telephone`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id_contact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
