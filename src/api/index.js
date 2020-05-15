/*
    包含n个接口请求函数的模块
    函数的返回值：依然是promise
*/
// [1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)
//  [2、获取食品分类列表](#2 获取食品分类列表)
//  [3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)
//  [4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)
//  [5、获取一次性验证码](#5 获取一次性验证码)
//  [6、用户名密码登陆](#6 用户名密码登陆)
//  [7、发送短信验证码](#7 发送短信验证码)
//  [8、手机号验证码登陆](#8 手机号验证码登陆)
//  [9、根据会话获取用户信息](#9 根据会话获取用户信息)
//  [10、用户登出](#10 用户登出)

import ajax from './ajax'

export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
export const reqFoodTypes = () => ajax('/index_category')
export const reqShops = (latitude, longitude) => ajax('/shops', {latitude, longitude})
export const reqSearchshops = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})
export const reqCaptcha = () => ajax('/captcha')
export const reqPwdLogin = (name, pwd, captcha) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')
export const reqSecondCode = (phone) => ajax('/sendcode', phone)
export const reqSmsLogin = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')
export const reqUser = () => ajax('/userinfo')
export const reqLogout = () => ajax('/logout')
