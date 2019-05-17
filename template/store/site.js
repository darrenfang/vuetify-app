/*
 * MIT License
 *
 * Copyright (c) 2018 Darren Fang
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

export const state = () => ({
  name: process.env.SITE_NAME,
  copyright: '2018 - ' + new Date().getFullYear() + ' ' + process.env.COMPANY_NAME,
  navs: [
    // {
    //   text: '菜单 1',
    //   icon: 'people_outline',
    //   items: [
    //     {text: '链接1', to: '/home'},
    //     {text: '链接2', to: '/me/profile'}
    //   ]
    // }
  ],
  menus: [
    {icon: 'contacts', title: '个人信息', to: '/me/profile'},
    {icon: 'settings', title: '修改密码', to: '/me/password'},
    {icon: 'close', title: '注销', to: '/logout'}
  ]
})

export const getters = {
  name: state => state.name,
  copyright: state => state.copyright,
  menus: state => state.menus,
  navs: state => state.navs
}
