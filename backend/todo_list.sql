-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22-Fev-2025 às 00:12
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `todo_list`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `entradas`
--

CREATE TABLE `entradas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descricao` varchar(120) NOT NULL,
  `tarefa` text NOT NULL,
  `categoria` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `data` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `entradas`
--

INSERT INTO `entradas` (`id`, `titulo`, `descricao`, `tarefa`, `categoria`, `email`, `data`) VALUES
(1, 'Teste', 'Ispgaya', 'Teste no dia 31 de Março.', 'Universidade', 'a@a.pt', '2025-02-21 12:15:14'),
(2, 'Consulta', 'Ovar', 'Consulta no fia 10 de Junho.', 'Saude', 'a@a.pt', '2025-02-21 12:15:14'),
(17, 'Teste', 'Ispgaya', 'Teste no dia 31 de Março.', 'Universidade', 'a@a.pt', '2025-02-21 12:15:37'),
(18, 'Consulta', 'Ovar', 'Consulta no fia 10 de Junho.', 'Saude', 'a@a.pt', '2025-02-21 12:15:37');

-- --------------------------------------------------------

--
-- Estrutura da tabela `registos`
--

CREATE TABLE `registos` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `utilizador` varchar(80) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `registos`
--

INSERT INTO `registos` (`id`, `email`, `utilizador`, `password`) VALUES
(27, 'a@a.pt', 'carlos', '$2y$10$YreXcmpo2MS/M/pcyIAtiOuuOSeswj781XHRTDDGGj6MJA0mqW4mi');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `entradas`
--
ALTER TABLE `entradas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `email` (`email`) USING BTREE;

--
-- Índices para tabela `registos`
--
ALTER TABLE `registos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `entradas`
--
ALTER TABLE `entradas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de tabela `registos`
--
ALTER TABLE `registos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `entradas`
--
ALTER TABLE `entradas`
  ADD CONSTRAINT `fk_foreign_key_name` FOREIGN KEY (`email`) REFERENCES `registos` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
