/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';
 import React, { Component } from 'react';
 import { View, Text, Image, TouchableHighlight, Platform } from 'react-native';
 import Icon from 'react-native-vector-icons/Ionicons';


import index from 'js/index/router';


// import Item from 'comp/widgets/Item';
//
//
// function ppp(){
//     Toast.show('xxxxxx')
// }
//
// let index = class extends Component {
//     render(){
//         let _icon = <Icon name='ios-chatbubbles' size={40} color="rgb(222, 36, 24)"/>
//         let _share = <Image source={ images.share } />
//         let _new = <Image source={ images.leftTile } style={{width:30,height:30}}/>
//         let _time = <Text style={{color:"#a19e9e"}}>21:45</Text>
//         let _items = [
//             <Item
//                 key="hao"
//                 title='好好学习'
//                 descript='什么东西啊，我就想了解下'
//                 icon={_icon}
//                 attach={_time}
//             />,
//             <Item
//                 key="xue"
//                 title='好好学习'
//                 descript='什么东西啊，我就想了解下'
//                 icon={_icon}
//                 attach={_time}
//             />,
//             <Item
//                 key="sheng"
//                 title='@好好学习'
//             />,
//             <Item
//                 key="why"
//                 title='好好学习'
//                 descript='什么东西啊，我就想了解下'
//                 icon={_share}
//                 attach={_time}
//                 dot={_new}
//                 onPress={ppp}
//             />
//         ]
//         return (
//             <View>
//                 {_items}
//             </View>
//         )
//     }
// }

export default index;
