import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  InstapaperIcon,
} from 'react-share';

export default class ShareButtons extends Component {


  render() {
    let url = '/facebook';
    let title = 'share title';
    let iconSize = '36';
    return (
      <div>
        <FacebookShareButton url={url} quote={title} className="share-button">
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} quote={title} className="share-button">
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>
        <WhatsappShareButton url={url} title = {title} className = 'share-button'>
          <WhatsappIcon size = {iconSize} round/>
        </WhatsappShareButton>
        <InstapaperShareButton url={url} title = {title} className = 'share-button'>
          <InstapaperIcon size = {iconSize} round />
        </InstapaperShareButton>
      </div>
      
    );
  }
}
