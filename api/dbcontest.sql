/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50622
Source Host           : localhost:3306
Source Database       : dbcontest

Target Server Type    : MYSQL
Target Server Version : 50622
File Encoding         : 65001

Date: 2018-03-14 10:28:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tblcontests`
-- ----------------------------
DROP TABLE IF EXISTS `tblcontests`;
CREATE TABLE `tblcontests` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) DEFAULT NULL,
  `contestName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tblcontests
-- ----------------------------
INSERT INTO `tblcontests` VALUES ('1', 'Technology', 'ContestName');
INSERT INTO `tblcontests` VALUES ('2', 'Business', 'ContestName');

-- ----------------------------
-- Table structure for `tblnames`
-- ----------------------------
DROP TABLE IF EXISTS `tblnames`;
CREATE TABLE `tblnames` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `contestId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tblnames
-- ----------------------------
INSERT INTO `tblnames` VALUES ('1', 'Sample Proposed', '1');
INSERT INTO `tblnames` VALUES ('2', 'Sample', '2');
INSERT INTO `tblnames` VALUES ('3', 'Sample', '2');
INSERT INTO `tblnames` VALUES ('4', 'Sample', '2');
