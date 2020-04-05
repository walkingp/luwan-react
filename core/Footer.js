/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <a href={this.props.config.baseUrl} className='nav-home'>
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width='66'
              />
            )}
          </a>
          <div>
            <h5>训练地址</h5>
            <a href={this.docUrl('faq.html', this.props.language)}>
              卢湾体育中心操场
            </a>
            <a href={this.docUrl('faq.html', this.props.language)}>
              源深体育中心操场
            </a>
            <a href={this.docUrl('faq.html', this.props.language)}>
              每周二19:30-21:00
            </a>
          </div>
          <div>
            <h5>社交网络</h5>
            <a
              href='https://weibo.com/luwanrunclub'
              target='_blank'
              rel='noreferrer noopener'>
              微博
            </a>
            <a
              href='https://discordapp.com/'
              target='_blank'
              rel='noreferrer noopener'>
              抖音
            </a>
            <a
              href='https://instagram.com/luwanrunclub'
              target='_blank'
              rel='noreferrer noopener'>
              Instagram
            </a>
          </div>
          <div>
            <h5>微信公众号</h5>
            <a>
              <img src={`${this.props.config.baseUrl}img/weapp-qr.jpg`} />
            </a>
            {/* <a href='https://github.com/'>GitHub</a> */}
            {/* <a
              className='github-button'
              href={this.props.config.repoUrl}
              data-icon='octicon-star'
              data-count-href='/facebook/docusaurus/stargazers'
              data-show-count='true'
              data-count-aria-label='# stargazers on GitHub'
              aria-label='Star this project on GitHub'>
              Star
            </a> */}
            {this.props.config.twitterUsername && (
              <div className='social'>
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className='twitter-follow-button'>
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className='social'>
                <div
                  className='fb-like'
                  data-href={this.props.config.url}
                  data-colorscheme='dark'
                  data-layout='standard'
                  data-share='true'
                  data-width='225'
                  data-show-faces='false'
                />
              </div>
            )}
          </div>
        </section>

        {/* <a
          href='https://opensource.facebook.com/'
          target='_blank'
          rel='noreferrer noopener'
          className='fbOpenSource'>
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt='Facebook Open Source'
            width='170'
            height='45'
          />
        </a> */}
        <section className='copyright'>{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
