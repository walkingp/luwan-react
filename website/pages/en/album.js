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
      content: `Learn more using the [documentation on this site.](${docUrl(
        'doc1.html',
      )})`,
      image: `${weappDomain}微信图片_20191115081953.jpg`,
    },
    {
      content: 'Ask questions about the documentation and project',
      image: `${weappDomain}微信图片_20191115082006.jpg`,
    },
    {
      content: "Find out what's new with this project",
      image: `${weappDomain}微信图片_20191115082012.jpg`,
    },
    {
      content: '',
      image: `${weappDomain}微信图片_20191115082015.jpg`,
    },
    {
      content: '',
      image: `${weappDomain}微信图片_20191115082018.jpg`,
    },
    {
      content: '',
      image: `${weappDomain}微信图片_20191115082022.jpg`,
    },
    {
      content: '',
      image: `${weappDomain}微信图片_20191115082031.jpg`,
    },
    {
      content: '',
      image: `${weappDomain}微信图片_20191115082035.jpg`,
    },
    {
      content: '',
      image: `${weappDomain}微信图片_20191115082040.jpg`,
    },
    {
      content: '',
      image: `${weappDomain}微信图片_20191115082044.jpg`,
    },
    {
      content: '',
      image: `${weappDomain}微信图片_20191115082047.jpg`,
    },
    {
      content: '',
      image: `${weappDomain}微信图片_20191115082100.jpg`,
    },
    {
      content: '',
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
