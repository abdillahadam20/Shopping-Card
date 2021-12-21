const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DelWebpackPlugin = require('del-webpack-plugin');

const PACKAGE = require('./package.json');

// Show version when it's built
const banner = `${PACKAGE.name} V ${PACKAGE.version} | ${PACKAGE.author} | Released under the ${PACKAGE.license} license`;
