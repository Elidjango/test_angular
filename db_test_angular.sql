-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-12-2020 a las 23:53:04
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_employee`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee`
--

CREATE TABLE `employee` (
  `id_usu` int(11) NOT NULL,
  `position_usu` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `age_usu` int(3) NOT NULL,
  `username_usu` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `active_usu` varchar(1) COLLATE utf8_spanish2_ci NOT NULL,
  `delete_usu` varchar(1) COLLATE utf8_spanish2_ci NOT NULL,
  `date_create` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `date_update` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `employee`
--

INSERT INTO `employee` (`id_usu`, `position_usu`, `age_usu`, `username_usu`, `active_usu`, `delete_usu`, `date_create`, `date_update`) VALUES
(36, 'Frontend', 24, 'Eliel Loreto', '1', '0', '2020-12-03 17:31', '2020-12-03 17:43'),
(37, 'Recursos Humanos', 26, 'Yendy Villavicencio', '1', '0', '2020-12-03 17:40', '2020-12-03 17:40');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id_usu`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employee`
--
ALTER TABLE `employee`
  MODIFY `id_usu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
