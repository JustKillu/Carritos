-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-12-2023 a las 02:29:36
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `carritos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(100) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Apellido` varchar(100) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Carro` varchar(100) NOT NULL,
  `Estado` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `Nombre`, `Apellido`, `Correo`, `Carro`, `Estado`) VALUES
(2, 'Juan', 'Perez', 'juan.perez@example.com', ' ', 'En espera'),
(3, 'Juan', 'Perez', 'j ample.com', ' ', 'En espera'),
(4, 'pedro', 'sanchez', '2222@gmailc.om', '5', 'Entregado'),
(5, 'Nombre', 'apellido', 'correo@gmail.com', '5', 'En espera'),
(7, '123', '123', '12312312@gmail.com', '6', 'Entregado'),
(8, 'Ferpipe', 'Colmenares', 'fedocolmenares@gmail.com', '7', 'En espera'),
(9, 'Fernando', 'Colmenares', 'fedocolmenares@gmail.com', '6', 'En espera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modelos`
--

CREATE TABLE `modelos` (
  `id` int(100) NOT NULL,
  `Modelo` varchar(100) NOT NULL,
  `Precio` varchar(100) NOT NULL,
  `Fecha` varchar(100) NOT NULL,
  `Img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `modelos`
--

INSERT INTO `modelos` (`id`, `Modelo`, `Precio`, `Fecha`, `Img`) VALUES
(1, 'Corvette Stingray', '$68.300', '2024', 'https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-corvette-e-ray-286-1673906201.jpg'),
(5, 'Huracán STO RWD ', '$338.577 ', '2021', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/11_18_sto/sto_cover.jpg'),
(6, 'FERRARI F40', '$2.400.000 ', '1989', 'https://img.remediosdigitales.com/adccb4/ferrari-f40-valeo-1989-giovanni-agnelli-05/1366_2000.jpeg'),
(7, 'T-Cross', ' $427.504', '2024', 'https://www.carrosyclasicos.com/media/volkswagen_karmann_ghia_1.jpg'),
(8, 'Lambo Aventador', '$250.000', '2011', 'https://cdn.pixabay.com/photo/2017/11/09/01/49/lamborghini-aventador-2932196_1280.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `Nombre` text NOT NULL,
  `Clave` varchar(12) NOT NULL,
  `user` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `Nombre`, `Clave`, `user`) VALUES
(9, 'Xavier', '1234', 'adm'),
(10, 'Fernando', 'Ferandres01', ''),
(11, 'Pedro', 'Ferandres01', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `modelos`
--
ALTER TABLE `modelos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `modelos`
--
ALTER TABLE `modelos`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
