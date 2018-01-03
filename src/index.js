import "babel-polyfill";
import { header } from './components/header/header';
import { profilePic } from './components/profilePic/profilePic';
import { styles } from './styles.scss';
import { nav } from './components/header/nav';
import { footer } from './components/footer/footer';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import { LoadToDo } from "./components/ToDo/loadToDo";
import swURL from "file-loader?name=sw.js!babel-loader!./sw";
import icon72 from './images/icons/icon-72x72.png';
import icon96 from './images/icons/icon-96x96.png';
import icon128 from './images/icons/icon-128x128.png';
import icon144 from './images/icons/icon-144x144.png';
import icon152 from './images/icons/icon-152x152.png';
import icon192 from './images/icons/icon-192x192.png';
import icon384 from './images/icons/icon-384x384.png';
import icon512 from './images/icons/icon-512x512.png';
import '!file-loader?name=[name].[ext]!./manifest.json';

LoadToDo();

document.getElementById('nav').innerHTML = nav;

document.getElementById('ProfilePicture').innerHTML = profilePic;

document.getElementById('Header').innerHTML = header;

document.getElementById('footer').innerHTML = footer;

var btnAddToDo = document.getElementById('btnAddToDo');

btnAddToDo.onclick = e => import(/* webpackChunkName: "addToDo" */ './components/ToDo/addToDo')
    .then(module => {
        var addToDo = module.default;
        addToDo();
    });

document.getElementById('btnOpenAddHelp').addEventListener("click", function () { $('.tap-target').tapTarget('open'); }, false);

$(".button-collapse").sideNav();

$('.modal').modal();

// Service Workersm - Powerup and work offline

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        // registration worked
        console.log('Registration succeeded.');
        var refreshButton = document.getElementById('btnHardRefresh');
        refreshButton.onclick = function () {
            console.log('Registration updated.');
            registration.update();
        }
    }).catch(function (error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
};