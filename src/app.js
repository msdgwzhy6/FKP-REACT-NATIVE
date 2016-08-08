/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _ from 'lodash';
import cfg from './fkp.config';
import SAX from 'comm/sax';
import Toast from 'react-native-root-toast';
global.H5Back = false;   // h5页面后退
global._ = _;
global.Toast = Toast;
global.Config = cfg();
global.SAX = SAX;

import sio from 'comm/sio';
global.Sio = sio;

// 网络是否连通
import netInfo from 'comm/net/info';
netInfo()

import images from './images';
import apis, {_apis} from 'comm/apis'
import req from 'comm/apis/request';
global.images = images;
global.apis = apis(cfg());
global._apis = _apis(cfg());


import OpenURLButton from 'comp/widgets/Anchor';
global.A = OpenURLButton;

global.req = req;





export default function(){
    return require('./index').default;
}
