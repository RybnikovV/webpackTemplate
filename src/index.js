import Post from './Post';
import './stylus/main';
import json from './assets/json';
import './stylus/second.scss';
import './bable';
import './test.ts'

const post = new Post('Webpack Post Title');

console.log('Post to string:', post.toString());

console.log('show json file', json);