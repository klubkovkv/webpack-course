import * as $ from 'jquery'
import Post from '@models/Post'
import './styles/styles.css'
import './styles/styles.scss'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from '@/assets/data.csv'
import WebpackLogo from '@/assets/webpack-logo.png'
import './babel'
const post = new Post('Webpack Post Title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

// console.log('json', json)
// console.log('xml', xml)
// console.log('csv', csv)
