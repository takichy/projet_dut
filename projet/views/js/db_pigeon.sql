-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  ven. 06 avr. 2018 à 02:51
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

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id_contact`, `nom`, `mail`, `telephone`, `objet`, `message`) VALUES
(3, 'elouarti nezha', 'mojako-mojako@live.com', 645460088, 'probleme', 'probbbbbkgjgfh'),
(4, 'abdelhay oulidi omali', 'abdelhayoulidiomali@gmail.com', 645460088, 'probelm', 'fuck you'),
(5, 'abdelhay oulidi omali', 'abdelhayoulidiomali@gmail.com', 645460088, 'dd', 'dfvs');

-- --------------------------------------------------------

--
-- Structure de la table `eclosion`
--

CREATE TABLE `eclosion` (
  `id_eclosion` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `num_bague` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  `copain` text,
  `serie` text NOT NULL,
  `nid` text NOT NULL,
  `pose` text NOT NULL,
  `eclos` text NOT NULL,
  `commentaire` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `eclosion`
--

INSERT INTO `eclosion` (`id_eclosion`, `id_user`, `num_bague`, `date`, `copain`, `serie`, `nid`, `pose`, `eclos`, `commentaire`) VALUES
(1, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(2, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(3, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(4, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(5, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(6, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(7, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(8, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(9, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(10, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(11, 1, NULL, '0000-00-00', 'copain', 'sfdg', 'nid24', 'xfd', 'xdg', 'jhgf'),
(12, 1, NULL, '0000-00-00', '', 'N133252444', 'n15', '159', '7589', 'jsjjdj'),
(13, 1, NULL, '0000-00-00', 'oijhg', 'lkjh', 'lkjhg', 'kjhg', 'kjhgf', 'kjhgfd'),
(14, 1, NULL, '0000-00-00', '', '', '', '', '', ''),
(15, 1, NULL, '0000-00-00', '', '', '', '', '', ''),
(16, 1, NULL, '0000-00-00', '', '', '', '', '', ''),
(17, 1, NULL, '0000-00-00', 'khjhg', 'jkhjghf', 'khjghfg', 'khjghfg', 'jkhjghfg', 'kjhg'),
(18, 1, 50, '0000-00-00', 'kk', 'kk', 'kk', 'kk', 'kk', 'kk');

-- --------------------------------------------------------

--
-- Structure de la table `nettoyage`
--

CREATE TABLE `nettoyage` (
  `id_user` int(11) NOT NULL,
  `date_nettoyage` date NOT NULL,
  `cause_nettoyage` text NOT NULL,
  `produit` text NOT NULL,
  `commentaire` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `nettoyage`
--

INSERT INTO `nettoyage` (`id_user`, `date_nettoyage`, `cause_nettoyage`, `produit`, `commentaire`) VALUES
(1, '2018-04-12', 'grande maladie', 'Anti-seplique', 'commentaire'),
(1, '2018-04-23', 'kujyntbr', 'Anti-parasite', 'jhgf'),
(1, '2018-04-11', 'hi;guf,yji', 'Anti-parasite', 'tlfytfyo');

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
  `famille` text NOT NULL,
  `race` text NOT NULL,
  `nom_pigeon` text NOT NULL,
  `source` text NOT NULL,
  `num_bague_pere` int(11) NOT NULL,
  `num_bague_mere` int(11) NOT NULL,
  `annee_naiss_pere` year(4) NOT NULL,
  `annee_naiss_mere` year(4) NOT NULL,
  `supplement` text NOT NULL,
  `image` blob NOT NULL,
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
  `commentaire_vaccination` text NOT NULL,
  `etat_vaccination` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `pigeon`
--

INSERT INTO `pigeon` (`couleur`, `numero_bague`, `id_user`, `annee_naissance`, `sexe`, `etat`, `famille`, `race`, `nom_pigeon`, `source`, `num_bague_pere`, `num_bague_mere`, `annee_naiss_pere`, `annee_naiss_mere`, `supplement`, `image`, `date_nv_naiss`, `copain`, `serie`, `nid`, `commentaire`, `pose`, `eclos`, `date_vaccination`, `description`, `termine_par`, `medication`, `dosage`, `commentaire_vaccination`, `etat_vaccination`) VALUES
('', 1, 1, 2018, 'Male', 'Active', 'souche', '', 'tfyjkxfykvvh', 'abdelhay', 741852, 258369, 2016, 2017, 'ukhkh', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 1),
('', 2, 1, 2018, 'Male', 'Active', 'souche', '', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 1),
('', 3, 1, 2018, 'Male', 'Active', 'souche', '', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 4, 1, 2018, 'Male', 'Active', 'souche', '', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('undefined', 5, 1, 2018, 'Male', 'Active', 'souche', '', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('undefined', 6, 1, 2018, 'Jeune', 'Active', 'souche', '', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('undefined', 7, 1, 2018, 'Male', 'Active', 'souche', '', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('undefined', 8, 1, 2018, 'Male', 'Active', 'souche', '', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 10, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 55, 1, 0000, 'Female', '', '', '', '', 'abdelhay', 0, 0, 0000, 0000, '', '', '2018-03-08', 'copain', 'serie', 'nid', 'commentaire', 'posé', 'eclos', '0000-00-00', '', '', '', '', '', 1),
('undefined', 78, 1, 2018, 'Male', 'Active', 'souche', '', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 85, 1, 0000, 'Female', '', '', '', '', '', 0, 0, 0000, 0000, '', '', '0000-00-00', 'copain', 'serie', 'nid', 'jhhh', 'posé', 'eclos', '0000-00-00', '', '', '', '', '', 0),
('undefined', 102, 1, 2018, 'Jeune', 'Vendu', 'souche', '', 'nom', 'pigeonnier', 301, 201, 2016, 2017, 'supplement ', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 201, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 400, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 402, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x6956424f5277304b47676f414141414e53556845556741414256554141414c2f434159414141426d756965354141414141584e535230494172733463365141414141526e51553142414143786a777638595155414141414a6345685a6377414144734d4141413744416364767147514141502b6c535552425648686537503048744278567371414c6e316d7a31767658657a502f7a4e79354d39324e6264384e6a652f4743645051654f38396a6643696862634342456859675952417767677249516b725a4c43536b45504367304147373233547444656e752b2b394d33506e7a6f73584f3032647244795a74614e385674556e7256696e4b69737a4b79737964757a59333434643258664774584f6b737379574d3639567557364f6e4f566b37427735652b776a675a787a2f614e7933766a483550776248704d4c4a6a7775463035385169362b36556d5675544c79356e6c793661337a354c4a4a38325855704b646b31473071747a386c6f323966554336366662522b58695a755833644d5352626f6179667037552f702b644d79502f6a4f504c6e6b31766b794950503064535333444777666563733869655669665632536d2b664b78536f5852584b682f73344c396663474d6e4641526b783455707863454d6e3545353651383235385573583966554c4f765347556338592f48736a5a317a385779726a48354b78497a686a377144673533636c316a387070317a34697034325a45386a77612b62494c3578635055644f55526c3231657841547235715669416e58546c5454727869707078772b634e792f4f675a6375796f574236536f5a657058507151484b5079383073656b714e566a6872356f42783538514e79784555714639346679474558336965486a72685044726e67336b414f4f6d2b364848532b69763439344e78707374383555325766732b365276633659497275664e6b5632485836333748544b6e624c6a79586649396966644a747363663674734f66515732654b596d2b584852303255545936634942736464714e73634e674e737634683432583967322b513951362b586e3534305058792f514f636a4a507637522f4b643533734e31612b6f2f4c7466613872796266327555366366484f6661774e5a642b394939744b2f4b7576734e5562573258754d724b312f73325374506138524a3275575a497973716676473277642f48753637786835356372562b6c69336630474e614c3250304f314f79703736764947766f5a2f6c79725836574574587a477330577661397237483264563962556661715873624c6d5072574966706678754c5832485373746c66334779567031794e723758793974455733336178387733693848366a3652724b4e2f47794d3336486e536b6e667572483272323762326f4f2f4b4f5034673364597355582b375472664a496671624c424c38627232335674482b615a324b597678657937575a392f46645577452b742b7133624c2f72396235556b4550307332716b30726b4d6e3632742b345179726a56796b483550726f7a567a304a5a7131593555492f4e6c6576307379726b414e323367717835774c565374657976783568455937583943794c37365855456f76466856584b3137682f4b477676574931667038516e5a523138506b69743157376c3851393848736e6461727442746a5a624c395a7952374b562f36354c5247734f4f6c712f6e6950764d4b33754d30746734547937547a327a79646433763637733775625142636f6c386662644b4d6c492f487978663032336c6372472b543869752b6c726c36354734312f6c796b5878746c33726b516a322b57686d6878366a73584974636f4d634e79482f583179585a53562b6e4a4c6d76372f585839567a3179666c36664962736f74734330664e4838673139337a6f3554373872573962593954794a5a5531395853376e362f764273745a75353074533174377441696d543366583948674f796a72353273753665493072795458306479376632756c43636644755776532b53623674385a3539517668764a392f6139574c362f5879672f3248396b49443838594b53736438416c4b70664b656764654b757366654a6c73634a444b775a664a686f654d436d536a5135324d6c6b304f47793262486e363562486245465948382b4d67723553644858536d62483357566250487a7132544c6e3138745778357a7457796c737658516132544973574d43326561346132586234386249647364664b397566634a3338394867562f62766a69536f6e6a5a57666e54784f666e62534f4e6c3532446a5a355a54725a6464417867642f642f7646654e6c392b41327935366b7170393059794e366e543542397a7067672b3534785566593761364c7372334c413254664a67656663484d68423539347342353937697878383369317979486d33797145585441726b7864632f6c4f3975737032382f76376e387353796c536f726f72387235556c392f2b517a6f63794e35566c3972544b764a4b76303957435a2f397871536374547a362b575665392b4a75646550466f2b2f664a333874547a72387543704c7967377a32795544387679597476794d4b454c4e4c585358472f36655a54687372374c37346b4b365a4f55626c48566b2b3752313666487370624b6d38484d6b5865767a65556a31512b436552752b557a6c63355576444f4c32532b2f723372747a75484f35633334636e662b44364c766530622f76334b76586f664a474a4f363656756f317672643071527978387736792b7233506c59632b4b4831355150563042616c4f7a72777541716f525444316e6e4d4c556353464d7665444778785565506945584b5651636563746375555142354367466d714d566e6c357878304b3536713546637333644b704d5879356770532b54616535624964564f6648684433506b4f756466755779644f70392f7235354a546f2f6d506339315351612b35654c4665585a4a472b546b7234325657364c56503074376a666336584b46586647736c42664c35544c39626336475832376b334a6f664a6b4334737475573644692f6a346c6c796f457673534a77743252436e4a6a755668664f376c49596652464e383154554f754137567a5637317946733036656c504d567a446f357277526c485a68395173344f774f7a6a6370614332544d56796a6f706737454b5a4965506555522b6f55445777646854727035646772456e58656b67724d6f56737854457a6c49514f314e42374577354c704348355467485a432b62456344595931522b726a4132674c41584b586764635838415841383864377273642f6255434c44654c54762f3469375a636467647374324a74386e5778796c63506559572b664852455667392f4562355551525666336a5165506e42675346516a5546716f324671506a44566f44694371336b77745261672b6f336472355a76374e344d6f4a6f42544e4d414e666e6541314e6a30446f4156444d41616c31415661486f586d6d7841466b2f54485841745855773151426746614b756d5a447167617043305832726b526a613167645431326f7154445841556774516466736b6f477279645831774e512b4b70734671646642304d4b6a31484e3873694a7031336b3644717057416f2f73745669425a7a652b326e724e512b78554171487042644b56727a41436e446f425741314e392b787141716f4f37413143316857413142726765754e6f63734f71676178566731653372686176615031634c574473577246594c57427342565232515459465639373475734f704161355041616c31414e514b7939554c56505374425666645a4f36437141374f4e4171734f74455a677461756871674f784f5743313756445651646c4b594457477173304571766b414e512b7375753331676c55485751664231517977476750574a4653744271352b5477487239794b774f6742584c314841656f6b43316b746b66595772367974632f564545566d4f34757247433155414f7531773255624471344f716d61626836644152586a316134716f423171324f75436543716b3230635846585a566d553768617a627834425634656f4f455744396d514c576e52537737685144566f57734132413141566356734f3456774e55624661773675447168496c7831594e584a6936732f6c4f397348454c5678356575434351417138466642316e7a34616f5872443437474b77367148723268614e4b554c566173466f47565231677251425733572b363661526a3550336e58354156643939526b6c563333796d7654335a797537796c38766155322b56646c6666767556302b55506c59355a4e4950744f2f6c6552542f66785450545a766e2f673837713837727a752f2b353733394a6833564e355365555046586339716c5a5752764c4e6f73527a79733539576871715a5146566836726d616d65726b66415771535a6a71736b4a484b7a4338346f344663725643527763324853793966747053755837364d726e68766d646b77763350794d51486e705762486e7775465063364a5250766631624b35626d42393771764f7a36513148345433506b727949333657564c63395a546b586e33747847324c582b76663862486f39592b507850325763594573485244396a654e5578696f73646e4c64506146636d35497855353557735079304175596c436d2b647842445867647a4641617939556d47746b7744613372456f41576f58617162767768444f6173617541374d786e423135363150694a49617946797155445743736b346c7a3558774673756337494b7669736d5744444e6b623467785a4262486a486c634947386f5a5978324d6655784f437a4a6a48355654413145674730505a494473327a496831414e61425635667836694472345a7264657644353938722b6d73573631356d61755871615a71372b3473346761335849385a4e6b69364533793261617362727834524e6b77304d6e4b46693951624e557877645a716d47476167325a715a71566d70655a6d6f537041356d70555a61715a70454f32706249594b306c4d39566c72495a415661557057616f566f4b6f526f475a6c724a597955527557665a6f4655794e5157675a5a30344456426c4f7a676170437a623054456d5355326a4e4c72526d6f672f5a4c7756514856724f427167475931704670576c32573676576131617169514c5570554e576166576f467168576771674f73745946564879694e7a2b76627234625057776c5230393956445678733137374e674a585733394b4d377937634f547342774459597146594a584d7642616871304e686d324e677573756b7a58696c6d7238656447774f6f42717a4634585650334b7864444e71734a73466f7a584a50374e546a54745a5378476f4e564b32434e7747716a4d31597a7761714472546b5a71356c5a71343247712f566d7163624831356d70476d537a31673957427a4a564735577457687459485a79746d73786548636855725a796c476d5777746a78543157573231704f74476d6534706a4a574377395634347a5638472f6a4d6c567241366c70794a724d5773334f594c566c72705942316c5457717374676a6347712b3173745848565a71392f624e354941726f344d78454856414b797172486567776c575874587051434665646242686c7272714d31593164317170433153526364566d7279637a567a52316756516e68716d6175716778786348576f793135316b5057614d4873314171772f506546613255457a5630504171746d724157416447326176526e4231392b454f724137413162314f7579454171795734656d6159745a724f5848565a71776570764a414256514f776d705167653356464b5775316c4c6c6151396271716e632f6c6450507530512b43544a565677665a71724755736c59566c6c353239553179384748444b6f726270314c57716f4f714534343751743535396a6c355a644c4e6762796d736b4a6c316532337947715631315865556e6e377a70766c505a555049766e347270766c6b3042756b733871794b66363261643333695366714c6a587958336473653463376c776652656439582f2b2b45386e62643977696236693872724c36746c746b70636f4b6c6555713738782f53673765595a743871426f443154424c4e5672754832656e6169626b4251726b4c745473564c634d33693376443248715577464d64646d6c34785173337144673055484f6d783534546d353536486d35376545583549365a4c387164733136537532612f4a48636d784c31506230742b507569316e734f64353435496274667a56704c6239504d426555466652364c58354b3772746f64666c456e364e355a623958564a5a756a72534737527636453848386a4e2b7273436564444a63344845774869692f75366b544c6a2f4f626e527958335042684944335144634a6f42744364704f645a41326c4f7455416b416251316b485a6c5850567a7334712b4b41624378784275336c436d564852356d7a6f7a52373972494979413447735539705a7179542b51706935796d49446557436966506b2f424b5144614673554c59674b6c31776c6d62466e71485a734136364474507941796463506b75476a6e70596a72726b51546c4d4d316750504f39653255637a5633632f66624a6d72643470507a337064686c796e494c56714253414136732f4f7652475763396c716b5a51395476375a532f7a4c7933786a3562364f3467615336556c2f75584c2f43744431426977316770546d7774554b792f6672375330332f645a41465162426c506475657867314c4b38503731504b54753146634330306c4c2f515442316e476171686c4a56786d6d625147705467476f415534334c2b5273455647737643564144444c55733336, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 500, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 600, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 700, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 701, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 801, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 802, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 805, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 809, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('undefined', 879, 1, 2018, 'Male', 'Active', 'souche', '', 'nom', 'abdelhay', 741852, 258369, 2016, 2017, 'undefined', '', NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 888, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 4044, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 5019, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 8520, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0),
('', 800000, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', '', '0000-00-00', 'dg', 'sfdg', 'sgs', 'dg', 'xfd', 'xdg', '0000-00-00', '', '', '', '', '', 0),
('', 2147483647, 1, 0000, '', '', '', '', '', '', 0, 0, 0000, 0000, '', 0x756e646566696e6564, NULL, '', '', '', '', '', '', '0000-00-00', '', '', '', '', '', 0);

-- --------------------------------------------------------

--
-- Structure de la table `pondaison`
--

CREATE TABLE `pondaison` (
  `id_user` int(11) NOT NULL,
  `female` int(11) NOT NULL,
  `male` int(11) NOT NULL,
  `date_accouplement` date NOT NULL,
  `date_oeuf_one` date DEFAULT NULL,
  `date_oeuf_two` date DEFAULT NULL,
  `nid` text,
  `numero_couple` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `pondaison`
--

INSERT INTO `pondaison` (`id_user`, `female`, `male`, `date_accouplement`, `date_oeuf_one`, `date_oeuf_two`, `nid`, `numero_couple`) VALUES
(1, 55, 1, '2011-08-19', NULL, NULL, NULL, ''),
(1, 55, 6, '2011-08-19', NULL, NULL, NULL, 'A1'),
(1, 88, 5, '2011-08-19', '0000-00-00', NULL, 'Echangé', 'A2'),
(1, 99, 2, '2011-08-19', NULL, NULL, NULL, 'A3'),
(1, 63, 1, '2011-08-19', NULL, NULL, NULL, 'A4'),
(1, 56, 1, '2011-08-19', NULL, NULL, NULL, 'B1'),
(1, 85, 7, '2011-08-11', NULL, NULL, NULL, 'DD1'),
(1, 55, 1, '2011-08-19', NULL, NULL, NULL, 'M12');

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
(1, 'oulidi omali', 'abdelhay', 'abdelhayoulidiomali@gmail.com', 645460088, 'rue 50 boulevard narjis', 'maroc', 'fes', 30080);

-- --------------------------------------------------------

--
-- Structure de la table `vaccination`
--

CREATE TABLE `vaccination` (
  `id_user` int(11) NOT NULL,
  `numero_bague` int(11) NOT NULL,
  `date_vaccination` date NOT NULL,
  `date_prochaine_vaccination` date NOT NULL,
  `description` text NOT NULL,
  `termine_par` text NOT NULL,
  `medication` text NOT NULL,
  `dosage` text NOT NULL,
  `contre` text NOT NULL,
  `commentaire_vaccination` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vaccination`
--

INSERT INTO `vaccination` (`id_user`, `numero_bague`, `date_vaccination`, `date_prochaine_vaccination`, `description`, `termine_par`, `medication`, `dosage`, `contre`, `commentaire_vaccination`) VALUES
(1, 1, '0000-00-00', '2018-04-06', 'trd', 'srytwdh', 'hsrte', 'opihoumg', 'dkty', 'dtcygjhn'),
(1, 0, '0000-00-00', '2018-04-20', 'gfctx', 'dtku', 'ghj', ':iukty', 'uilyukty', 'ukyjrt'),
(1, 0, '0000-00-00', '2021-09-07', 'gfctx', 'dtku', 'ghj', ':iukty', 'uilyukty', 'ukyjrt'),
(1, 600, '0000-00-00', '2021-09-07', 'gfctx', 'dtku', 'ghj', ':iukty', 'uilyukty', 'ukyjrt');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_contact`);

--
-- Index pour la table `eclosion`
--
ALTER TABLE `eclosion`
  ADD PRIMARY KEY (`id_eclosion`),
  ADD UNIQUE KEY `num_bague` (`num_bague`);

--
-- Index pour la table `nettoyage`
--
ALTER TABLE `nettoyage`
  ADD UNIQUE KEY `cause_nettoyage` (`cause_nettoyage`(50));

--
-- Index pour la table `pigeon`
--
ALTER TABLE `pigeon`
  ADD UNIQUE KEY `numero_bague` (`numero_bague`);

--
-- Index pour la table `pondaison`
--
ALTER TABLE `pondaison`
  ADD UNIQUE KEY `numero_couple` (`numero_couple`);

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
  MODIFY `id_contact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `eclosion`
--
ALTER TABLE `eclosion`
  MODIFY `id_eclosion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
