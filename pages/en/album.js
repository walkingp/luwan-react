/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = '' } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const weappDomain = `https://6875-huate-8d8352-1258591418.tcb.qcloud.la/web/`;
  const supportLinks = [
    {
      content: `Liam、Edgar和Andy`,
      image: `${weappDomain}微信图片_20191115081953.jpg`,
    },
    {
      content: '2016年卢湾跑团卢湾体育中心合练',
      image: `${weappDomain}微信图片_20191115082006.jpg`,
    },
    {
      content: '2016年卢湾跑团源深体育中心合练',
      image: `${weappDomain}微信图片_20191115082012.jpg`,
    },
    {
      content: '2017年卢湾跑团源深体育中心合练',
      image: `${weappDomain}微信图片_20191115082015.jpg`,
    },
    {
      content: '2017年暴雨中',
      image: `${weappDomain}微信图片_20191115082018.jpg`,
    },
    {
      content: '春节',
      image: `${weappDomain}微信图片_20191115082022.jpg`,
    },
    {
      content: '源深体育中心',
      image: `${weappDomain}微信图片_20191115082031.jpg`,
    },
    {
      content: '兄弟',
      image: `${weappDomain}微信图片_20191115082035.jpg`,
    },
    {
      content: 'o(∩_∩)o',
      image: `${weappDomain}微信图片_20191115082040.jpg`,
    },
    {
      content: '夏天',
      image: `${weappDomain}微信图片_20191115082044.jpg`,
    },
    {
      content: '暴雨',
      image: `${weappDomain}微信图片_20191115082047.jpg`,
    },
    {
      content: '接力',
      image: `${weappDomain}微信图片_20191115082100.jpg`,
    },
    {
      content: '休息',
      image: `${weappDomain}微信图片_20191115082103.jpg`,
    },
  ];

  return (
    <div className='docMainWrapper wrapper'>
      <Container className='mainContainer documentContainer postContainer'>
        <div className='post'>
          <header className='postHeader'>
            <h1>相册</h1>
          </header>
          <p>卢湾跑团精彩训练瞬间</p>
          <GridBlock contents={supportLinks} layout='threeColumn' />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
