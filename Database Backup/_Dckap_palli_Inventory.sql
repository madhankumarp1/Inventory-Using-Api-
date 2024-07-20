-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 20, 2024 at 04:02 PM
-- Server version: 10.4.32-MariaDB-1:10.4.32+maria~ubu2004
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: ` Dckap_palli_Inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `quantity`) VALUES
(1, 'bag', 10),
(2, 'laptop', 17),
(3, 'toy car', 10),
(4, 'pen', 3),
(5, 'water gun', 20),
(6, 'cycle', 19),
(7, 'watch', 23),
(8, 'ram', 3),
(9, 'keychain', 5);

-- --------------------------------------------------------

--
-- Table structure for table `recipients`
--

CREATE TABLE `recipients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `recipients`
--

INSERT INTO `recipients` (`id`, `name`, `quantity`, `product`) VALUES
(1, 'madhan', 10, 'pen'),
(2, 'paco', 3, 'laptop'),
(3, 'boomika', 2, 'pen'),
(4, 'gunsri', 2, 'ram'),
(5, 'madhan', 2, 'watch'),
(6, 'vicky', 2, 'cycle');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipients`
--
ALTER TABLE `recipients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `recipients`
--
ALTER TABLE `recipients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
