
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


const VideoModal = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ASqHa-hgzVY?si=xrATjVves3l9eZte" onClose={() => setOpen(false)} />

      <div className="video-btn" onClick={() => setOpen(true)}>
        <i className="flaticon-play"></i>
      </div>
     

    </React.Fragment>
  )
}

export default VideoModal;