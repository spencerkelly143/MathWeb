import React from 'react';
import ImagePaper from "./components/ImagePaper.js"
import './ui.css';

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',
    imagePreviewUrl: ''
  };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    let reader = new FileReader();    //displaying imagePreview
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result,
      });
    }
    reader.readAsDataURL(e.target.files[0])
    this.props.handleImage(e.target.files)

    // console.log(...formData)
    // if (errs.length) {
    //   return errs.forEach(err => console.log(err))
    // }
  }



  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = imagePreviewUrl;
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <ImagePaper name={this.props.title} subtitle={this.props.subtitle} image={$imagePreview} handleClick={() => console.log("nothing")}/>
      </div>
    )
  }
}
